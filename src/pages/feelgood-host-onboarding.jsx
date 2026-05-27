import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are Maya, FeelGood's host onboarding agent. FeelGood is a booking platform in Innsbruck for local movement experiences. Your personality: warm, genuinely excited, direct. Collect: name, session type, location, duration, group size, price, availability, vibe sentence. Once you have everything, output: LISTING_READY\nName: ...\nSession: ...\nType: ...\nLocation: ...\nDuration: ...\nGroup size: ...\nPrice: €...\nAvailability: ...\nVibe: ...\nLISTING_END`;

const starters = [
  "I lead hiking tours in the Nordkette 🏔️",
  "I do cold plunge sessions at the Inn river ❄️",
  "I run cycling trips around Innsbruck 🚴",
  "I guide climbing sessions for beginners 🧗",
];

export default function HostOnboarding() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState(null);
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
      const response = await fetch("/ .netlify/functions/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages,
        }),
      });
      const data = await response.json();
      const fullText = data.content?.map(b => b.text || "").join("") || "";
      const listingMatch = fullText.match(/LISTING_READY([\s\S]*?)LISTING_END/);
      if (listingMatch) {
        const parsed = {};
        listingMatch[1].trim().split("\n").forEach(line => {
          const [key, ...val] = line.split(":");
          if (key && val.length) parsed[key.trim()] = val.join(":").trim();
        });
        setListing(parsed);
      }
      const cleanText = fullText.replace(/LISTING_READY[\s\S]*?LISTING_END/, "").trim();
      setMessages(prev => [...prev, { role: "assistant", content: cleanText }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Something went wrong — try again?" }]);
    }
    setLoading(false);
  };

  const startConversation = async () => {
    setStarted(true);
    setLoading(true);
    try {
      const response = await fetch("/ .netlify/functions/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: "Hi, I want to list my sessions on FeelGood." }],
        }),
      });
      const data = await response.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      setMessages([{ role: "user", content: "Hi, I want to list my sessions on FeelGood." }, { role: "assistant", content: text }]);
    } catch {
      setMessages([{ role: "assistant", content: "Hey! Welcome to FeelGood 🌿 I'm Maya. What kind of sessions do you lead?" }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f7f4ef", fontFamily: "Georgia, serif", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "#fff", borderBottom: "1px solid #ede9e3", padding: "1.2rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "1.4rem", fontWeight: "800", color: "#1a1a1a" }}>Feel<span style={{ color: "#e8845a" }}>Good</span><span style={{ fontSize: "0.65rem", color: "#bbb", marginLeft: "0.7rem", letterSpacing: "0.2em", fontWeight: "400" }}>HOST ONBOARDING</span></span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#fdf0e8", border: "1px solid #f5d5bc", padding: "0.4rem 0.9rem", borderRadius: "999px" }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#e8845a" }} />
          <span style={{ fontSize: "0.75rem", color: "#e8845a" }}>MAYA · LIVE</span>
        </div>
      </header>
      <div style={{ flex: 1, overflowY: "auto", padding: "2rem 1rem", maxWidth: 660, width: "100%", margin: "0 auto" }}>
        {!started ? (
          <div style={{ paddingTop: "2rem" }}>
            <div style={{ background: "#fff", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: "1.5rem" }}>
              <div style={{ background: "linear-gradient(135deg, #2d4a2d, #5a7a3a)", padding: "2.5rem 2rem" }}>
                <h1 style={{ color: "#fff", fontSize: "2rem", fontWeight: "400", margin: "0 0 0.5rem" }}>Share your sessions<br /><em style={{ color: "#c8e87a" }}>with the world.</em></h1>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", margin: 0 }}>Join FeelGood. Keep 80% of every booking.</p>
              </div>
              <div style={{ padding: "1.8rem 2rem" }}>
                <button onClick={startConversation} style={{ width: "100%", padding: "1rem", background: "#1a1a1a", color: "#fff", border: "none", borderRadius: "12px", fontSize: "1rem", cursor: "pointer", fontFamily: "Georgia, serif" }}>Start listing my sessions →</button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {messages.map((msg, i) => (
              <div key={i} style={{ marginBottom: "1.2rem" }}>
                {msg.role === "user" ? (
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ background: "#1a1a1a", color: "#fff", padding: "0.8rem 1.2rem", borderRadius: "18px 18px 4px 18px", maxWidth: "78%", fontSize: "0.95rem" }}>{msg.content}</div>
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #e8845a, #c45c2a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "700", flexShrink: 0 }}>M</div>
                    <div style={{ background: "#fff", color: "#333", padding: "0.9rem 1.2rem", borderRadius: "4px 18px 18px 18px", maxWidth: "82%", fontSize: "0.95rem", lineHeight: 1.6, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>{msg.content}</div>
                  </div>
                )}
              </div>
            ))}
            {messages.length === 2 && !loading && (
              <div style={{ paddingLeft: "2.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
                {starters.map((s, i) => <button key={i} onClick={() => sendMessage(s)} style={{ background: "#fff", border: "1.5px solid #ede9e3", color: "#666", padding: "0.6rem 1rem", borderRadius: "999px", fontSize: "0.85rem", cursor: "pointer", textAlign: "left", fontFamily: "Georgia, serif" }}>{s}</button>)}
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}
      </div>
      {started && (
        <div style={{ borderTop: "1px solid #ede9e3", padding: "1rem", background: "#fff" }}>
          <div style={{ maxWidth: 660, margin: "0 auto", display: "flex", gap: "0.75rem" }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="Tell Maya about your sessions..." style={{ flex: 1, background: "#f7f4ef", border: "1.5px solid #ede9e3", color: "#333", padding: "0.85rem 1.2rem", borderRadius: "12px", fontSize: "0.95rem", outline: "none", fontFamily: "Georgia, serif" }} />
            <button onClick={() => sendMessage()} disabled={loading || !input.trim()} style={{ background: "#e8845a", color: "#fff", border: "none", borderRadius: "12px", padding: "0.85rem 1.4rem", fontSize: "1rem", cursor: "pointer" }}>→</button>
          </div>
        </div>
      )}
    </div>
  );
}