import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are a FeelGood Vibe Matcher — an AI that helps people in Innsbruck find the perfect local movement session based on how they're feeling right now.

You have access to these sessions:
1. Sunrise Forest Flow — Yoga, Nordkette Forest, Thu 1 May 07:00, €18, CALM vibe
2. Dance & Let Go — Dance, Studio Innere Stadt, Fri 2 May 19:30, €22, HYPE vibe
3. Cold Plunge Crew — Cold Plunge, Inn River, Sat 3 May 08:00, €15, WILD vibe
4. Rooftop HIIT — HIIT, Rooftop Hötting, Sat 3 May 18:00, €20, HYPE vibe
5. Evening Breathwork — Breathwork, Yoga Loft, Wed 30 Apr 20:00, €16, CALM vibe
6. Bike to the Lake — Cycling, Baggersee, Sun 4 May 09:00, €12, WILD vibe

Your personality: warm, intuitive, a little poetic. You read between the lines of how someone feels. You're not a search engine — you're a vibe reader.

When someone tells you how they feel:
- Reflect their energy back with genuine empathy (1-2 sentences)
- Recommend 1-2 sessions that match their vibe — explain WHY this session fits how they feel
- Keep it short: 3-5 sentences total
- End with something that makes them excited to go

If they haven't told you how they feel yet, ask them warmly: "How are you feeling right now? Not what you want to do — how you actually feel."`;

const moodStarters = [
  "I'm exhausted and need to decompress 😮‍💨",
  "I have a lot of energy and want to go hard 🔥",
  "I feel a bit stuck and need something different 🌀",
  "I want to meet people and have fun 🤝",
  "I need something wild and out of my comfort zone ❄️",
  "I feel anxious and need to calm down 🌿",
];

export default function VibeMatcher() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const text = data.content?.map(b => b.text || "").join("") || "Something went wrong — try again?";
      setMessages(prev => [...prev, { role: "assistant", content: text }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Something went wrong — try again?" }]);
    }
    setLoading(false);
  };

  const startChat = async () => {
    setStarted(true);
    setLoading(true);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 500,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: "Hi" }],
        }),
      });
      const data = await response.json();
      const text = data.content?.map(b => b.text || "").join("") || "Hey! How are you feeling right now?";
      setMessages([
        { role: "user", content: "Hi" },
        { role: "assistant", content: text },
      ]);
    } catch {
      setMessages([{ role: "assistant", content: "Hey! How are you feeling right now? Not what you want to do — how you actually feel 🌿" }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0805", fontFamily: "Georgia, serif", display: "flex", flexDirection: "column" }}>
      <header style={{
        background: "rgba(10,8,5,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1a1510", padding: "1.2rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <span style={{ fontSize: "1.4rem", fontWeight: "800", color: "#fff" }}>
          Feel<span style={{ color: "#e8845a" }}>Good</span>
          <span style={{ fontSize: "0.65rem", color: "#444", marginLeft: "0.7rem", letterSpacing: "0.2em", fontWeight: "400" }}>VIBE MATCHER</span>
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(232,132,90,0.1)", border: "1px solid rgba(232,132,90,0.2)", padding: "0.4rem 0.9rem", borderRadius: "999px" }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#e8845a", boxShadow: "0 0 8px #e8845a" }} />
          <span style={{ fontSize: "0.75rem", color: "#e8845a", letterSpacing: "0.1em" }}>AI · LIVE</span>
        </div>
      </header>

      <div style={{ flex: 1, overflowY: "auto", padding: "2rem 1rem", maxWidth: 640, width: "100%", margin: "0 auto" }}>
        {!started ? (
          <div style={{ paddingTop: "2rem" }}>
            <div style={{
              background: "linear-gradient(135deg, #8b2a0a 0%, #e8845a 60%, #c47a3a 100%)",
              borderRadius: "20px", padding: "2.5rem 2rem", marginBottom: "1.5rem", textAlign: "center",
            }}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", letterSpacing: "0.15em", margin: "0 0 0.75rem" }}>AI-POWERED · INNSBRUCK</p>
              <h1 style={{ color: "#fff", fontSize: "1.9rem", fontWeight: "400", margin: "0 0 0.75rem", lineHeight: 1.2 }}>
                Tell me how you feel.<br /><em>I'll find your session.</em>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", margin: "0 0 1.5rem", lineHeight: 1.6 }}>
                No scrolling. No searching. Just tell me your vibe and I'll match you to the perfect local movement session.
              </p>
              <button onClick={startChat} style={{
                background: "#fff", color: "#8b2a0a", border: "none", borderRadius: "12px",
                padding: "0.9rem 2rem", fontSize: "1rem", cursor: "pointer", fontFamily: "Georgia, serif", fontWeight: "600",
              }}>Find my vibe →</button>
            </div>

            <p style={{ color: "#444", fontSize: "0.8rem", letterSpacing: "0.15em", marginBottom: "0.75rem", textAlign: "center" }}>OR PICK YOUR MOOD</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {moodStarters.map((mood, i) => (
                <button key={i} onClick={() => { setStarted(true); sendMessage(mood); }} style={{
                  background: "#111", border: "1px solid #1a1a1a", color: "#888",
                  padding: "0.8rem 1.2rem", borderRadius: "12px", fontSize: "0.9rem",
                  cursor: "pointer", textAlign: "left", fontFamily: "Georgia, serif",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#e8845a"; e.currentTarget.style.color = "#e8845a"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#888"; }}
                >{mood}</button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {messages.map((msg, i) => (
              <div key={i} style={{ marginBottom: "1.2rem" }}>
                {msg.role === "user" ? (
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ background: "#e8845a", color: "#fff", padding: "0.8rem 1.2rem", borderRadius: "18px 18px 4px 18px", maxWidth: "78%", fontSize: "0.95rem", lineHeight: 1.5 }}>{msg.content}</div>
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #e8845a, #c45c2a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0, marginTop: 2 }}>🎯</div>
                    <div style={{ background: "#111", color: "#ccc", padding: "0.9rem 1.2rem", borderRadius: "4px 18px 18px 18px", maxWidth: "82%", fontSize: "0.95rem", lineHeight: 1.7, border: "1px solid #1a1a1a" }}>{msg.content}</div>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "1.2rem" }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #e8845a, #c45c2a)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>🎯</div>
                <div style={{ background: "#111", padding: "1rem 1.2rem", borderRadius: "4px 18px 18px 18px", display: "flex", gap: "0.4rem", alignItems: "center", border: "1px solid #1a1a1a" }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#e8845a", animation: "bounce 1.2s ease-in-out infinite", animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {started && (
        <div style={{ borderTop: "1px solid #1a1510", padding: "1rem", background: "rgba(10,8,5,0.98)" }}>
          <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", gap: "0.75rem" }}>
            <input
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Tell me how you're feeling..."
              style={{ flex: 1, background: "#111", border: "1.5px solid #1a1a1a", color: "#ccc", padding: "0.85rem 1.2rem", borderRadius: "12px", fontSize: "0.95rem", outline: "none", fontFamily: "Georgia, serif" }}
            />
            <button onClick={() => sendMessage()} disabled={loading || !input.trim()} style={{
              background: input.trim() && !loading ? "#e8845a" : "#1a1a1a",
              color: input.trim() && !loading ? "#fff" : "#333",
              border: "none", borderRadius: "12px", padding: "0.85rem 1.4rem",
              fontSize: "1rem", cursor: input.trim() && !loading ? "pointer" : "not-allowed", transition: "all 0.2s",
            }}>→</button>
          </div>
        </div>
      )}

      <style>{`@keyframes bounce { 0%, 100% { transform: translateY(0); opacity: 0.4; } 50% { transform: translateY(-4px); opacity: 1; } }`}</style>
    </div>
  );
}
