import { useState, useEffect } from "react";

const stats = [
  { value: "3", label: "AI Agents Live" },
  { value: "6", label: "Session Types" },
  { value: "80%", label: "Host Revenue Share" },
  { value: "∞", label: "Vibes Available" },
];

const agents = [
  { emoji: "🌐", name: "Booking Platform", desc: "Browse & book local movement sessions by vibe. Yoga, cold plunge, hiking — all in one place.", status: "LIVE", color: "#5a9e5a" },
  { emoji: "🎯", name: "AI Vibe Matcher", desc: "Tell me how you feel. I'll find your perfect session. No scrolling. No searching. Just vibe.", status: "LIVE", color: "#e8845a" },
  { emoji: "🏠", name: "Host Onboarding", desc: "Local guides get listed in minutes through a warm AI conversation. No forms. No friction.", status: "LIVE", color: "#8b6abf" },
];

const timeline = [
  { date: "Today", label: "Platform live", done: true },
  { date: "", label: " pitch", done: false, highlight: true },
  { date: "June", label: "First 10 hosts", done: false },
  { date: "Summer", label: "Tourist season launch", done: false },
  { date: "2027", label: "Multi-city expansion", done: false },
];

const slides = ["vision", "problem", "solution", "agents", "traction", "ask"];

export default function PitchDemo() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);

  const goTo = (idx) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setVisible(false);
    setTimeout(() => { setCurrent(idx); setVisible(true); setAnimating(false); }, 250);
  };

  const next = () => goTo(Math.min(current + 1, slides.length - 1));
  const prev = () => goTo(Math.max(current - 1, 0));

  useEffect(() => {
    const handler = (e) => { if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  const slideWrap = { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: 780, width: "100%", margin: "0 auto" };
  const eyebrow = { color: "#e8845a", fontSize: "0.72rem", letterSpacing: "0.25em", margin: "0 0 1rem" };
  const bigTitle = { fontSize: "clamp(2.2rem, 6vw, 4.2rem)", fontWeight: "400", lineHeight: 1.1, margin: "0 0 1rem", color: "#fff" };
  const subtitle = { color: "#555", fontSize: "0.95rem", lineHeight: 1.7, margin: 0, maxWidth: 500 };
  const statCard = { background: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: "14px", padding: "1.2rem 1.5rem", minWidth: 100, textAlign: "center" };

  const slideContent = {
    vision: (
      <div style={slideWrap}>
        <p style={eyebrow}>INNSBRUCK · 2026</p>
        <h1 style={{ ...bigTitle, fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}>Move Your Body.<br /><em style={{ color: "#e8845a" }}>Find Your People.</em></h1>
        <p style={subtitle}>FeelGood is the first booking platform for local movement sessions that heal, hype, and connect.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2.5rem" }}>
          {stats.map(s => (
            <div key={s.label} style={statCard}>
              <div style={{ fontSize: "2.2rem", fontWeight: "800", color: "#e8845a", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: "0.75rem", color: "#555", letterSpacing: "0.12em", marginTop: "0.3rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    problem: (
      <div style={slideWrap}>
        <p style={eyebrow}>THE PROBLEM</p>
        <h2 style={bigTitle}>People want to<br /><em style={{ color: "#e8845a" }}>move & connect.</em><br />But can't find how.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "2rem", maxWidth: 700, width: "100%" }}>
          {[["😵", "Overwhelmed by options", "Too many apps, too many listings, none feel personal"], ["🤖", "Faceless platforms", "No human connection — just transaction after transaction"], ["🗺️", "Tourist traps", "Visitors can't find authentic local experiences"], ["🏋️", "Solo fitness culture", "Gyms are lonely. People crave movement WITH community"]].map(([emoji, title, desc]) => (
            <div key={title} style={{ background: "#0f0f0f", border: "1px solid #181818", borderRadius: "14px", padding: "1.2rem", textAlign: "left" }}>
              <span style={{ fontSize: "1.8rem" }}>{emoji}</span>
              <h4 style={{ color: "#fff", fontWeight: "400", margin: "0.5rem 0 0.3rem", fontSize: "0.95rem" }}>{title}</h4>
              <p style={{ color: "#555", fontSize: "0.8rem", margin: 0, lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    solution: (
      <div style={slideWrap}>
        <p style={eyebrow}>THE SOLUTION</p>
        <h2 style={bigTitle}>Book the vibe,<br /><em style={{ color: "#e8845a" }}>not the activity.</em></h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: 560, width: "100%", marginTop: "1.5rem" }}>
          {[["🎯", "Book by vibe, not by listing", "Calm / Hype / Wild — find your energy match instantly"], ["🤝", "Real humans, not faceless hosts", "Every session led by a verified local"], ["🏔️", "Local sweat, not tourist traps", "Authentic Innsbruck experiences"], ["👥", "Book one class, meet your crew", "Every session is social"]].map(([emoji, title, desc]) => (
            <div key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "#0f0f0f", border: "1px solid #181818", borderRadius: "12px", padding: "0.9rem 1.1rem", textAlign: "left" }}>
              <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{emoji}</span>
              <div>
                <p style={{ margin: 0, color: "#fff", fontSize: "0.95rem", fontWeight: "500" }}>{title}</p>
                <p style={{ margin: "0.2rem 0 0", color: "#555", fontSize: "0.82rem" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    agents: (
      <div style={slideWrap}>
        <p style={eyebrow}>BUILT WITH AI</p>
        <h2 style={{ ...bigTitle, marginBottom: "0.5rem" }}>3 agents.<br /><em style={{ color: "#e8845a" }}>All live. Right now.</em></h2>
        <p style={{ ...subtitle, marginBottom: "1.5rem", fontSize: "0.85rem" }}>Not a mockup. Not a prototype. Open your phone and try it.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: 580, width: "100%" }}>
          {agents.map(a => (
            <div key={a.name} style={{ background: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: "12px", padding: "1rem 1.2rem", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "1.8rem" }}>{a.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <h4 style={{ margin: 0, color: "#fff", fontWeight: "400", fontSize: "0.95rem" }}>{a.name}</h4>
                    <span style={{ background: `${a.color}22`, border: `1px solid ${a.color}44`, color: a.color, padding: "0.15rem 0.5rem", borderRadius: "999px", fontSize: "0.6rem", letterSpacing: "0.12em" }}>● {a.status}</span>
                  </div>
                  <p style={{ margin: "0.2rem 0 0", color: "#555", fontSize: "0.8rem", lineHeight: 1.4 }}>{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    traction: (
      <div style={slideWrap}>
        <p style={eyebrow}>TRACTION & ROADMAP</p>
        <h2 style={bigTitle}>Already moving.<br /><em style={{ color: "#e8845a" }}>In Innsbruck.</em></h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0", maxWidth: 500, width: "100%", marginTop: "1.5rem" }}>
          {timeline.map((t, i) => (
            <div key={t.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", flexShrink: 0, background: t.done ? "#e8845a" : t.highlight ? "#fff" : "#2a2a2a", border: t.highlight ? "2px solid #e8845a" : "2px solid #2a2a2a", boxShadow: t.highlight ? "0 0 12px #e8845a" : "none", marginTop: 4 }} />
                {i < timeline.length - 1 && <div style={{ width: 2, height: 36, background: "#1a1a1a", marginTop: 2 }} />}
              </div>
              <div style={{ paddingBottom: "1.2rem" }}>
                <p style={{ margin: 0, fontSize: "0.7rem", color: t.highlight ? "#e8845a" : t.done ? "#666" : "#444", letterSpacing: "0.12em" }}>{t.date}</p>
                <p style={{ margin: "0.1rem 0 0", fontSize: "0.95rem", color: t.highlight ? "#fff" : t.done ? "#888" : "#555", fontWeight: t.highlight ? "600" : "400" }}>{t.label} {t.highlight ? "👈" : ""}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "1rem", padding: "1rem 1.5rem", background: "rgba(232,132,90,0.08)", border: "1px solid rgba(232,132,90,0.2)", borderRadius: "12px", maxWidth: 500, width: "100%" }}>
          <p style={{ margin: 0, color: "#888", fontSize: "0.85rem", lineHeight: 1.6 }}>💬 <em>"Outdoor guides in Innsbruck are already excited. We've had real conversations. Real interest. Real people ready to host."</em></p>
          <p style={{ margin: "0.5rem 0 0", color: "#e8845a", fontSize: "0.8rem" }}>— Eva, Founder</p>
        </div>
      </div>
    ),
    ask: (
      <div style={slideWrap}>
        <p style={eyebrow}>LET'S MOVE TOGETHER</p>
        <h2 style={{ ...bigTitle, fontSize: "clamp(2.2rem, 6vw, 4rem)" }}>Looking for<br /><em style={{ color: "#e8845a" }}>co-founders,</em><br /><em style={{ color: "#5a9e5a" }}>hosts,</em><br /><em style={{ color: "#8b6abf" }}>& believers.</em></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.75rem", maxWidth: 600, width: "100%", marginTop: "1.5rem" }}>
          {[{ emoji: "👩‍💻", role: "Tech Co-Founder", desc: "Help scale the platform", color: "#e8845a" }, { emoji: "🏔️", role: "Local Hosts", desc: "Lead sessions in Innsbruck", color: "#5a9e5a" }, { emoji: "💸", role: "Early Investors", desc: "Seed: €50k–€100k", color: "#8b6abf" }, { emoji: "🤝", role: "Partners", desc: "Hotels, hostels, tour desks", color: "#2a7abf" }].map(item => (
            <div key={item.role} style={{ background: "#0f0f0f", border: `1px solid ${item.color}33`, borderRadius: "14px", padding: "1.2rem", textAlign: "center" }}>
              <span style={{ fontSize: "1.8rem" }}>{item.emoji}</span>
              <p style={{ color: item.color, fontSize: "0.85rem", margin: "0.5rem 0 0.2rem", fontWeight: "600" }}>{item.role}</p>
              <p style={{ color: "#444", fontSize: "0.75rem", margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2rem", padding: "1.2rem 2rem", background: "linear-gradient(135deg, #8b2a0a, #e8845a)", borderRadius: "14px", textAlign: "center", maxWidth: 400, width: "100%" }}>
          <p style={{ margin: 0, color: "#fff", fontSize: "1.1rem", fontWeight: "400", fontStyle: "italic" }}>"Move better. Connect deeper.<br />FeelGood."</p>
          <p style={{ margin: "0.75rem 0 0", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>EVA · FOUNDER · INNSBRUCK</p>
        </div>
      </div>
    ),
  };

  const slideLabels = ["Vision", "Problem", "Solution", "Agents", "Traction", "Ask"];

  return (
    <div style={{ minHeight: "100vh", background: "#080808", fontFamily: "Georgia, serif", color: "#fff", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "1rem 2rem", borderBottom: "1px solid #111", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <span style={{ fontSize: "1.2rem", fontWeight: "800" }}>Feel<span style={{ color: "#e8845a" }}>Good</span><span style={{ fontSize: "0.6rem", color: "#333", marginLeft: "0.7rem", letterSpacing: "0.2em" }}>PITCH · </span></span>
        <div style={{ display: "flex", gap: "0.4rem" }}>
          {slideLabels.map((label, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ padding: "0.3rem 0.7rem", borderRadius: "999px", border: "none", background: current === i ? "#e8845a" : "#111", color: current === i ? "#fff" : "#444", fontSize: "0.7rem", cursor: "pointer", letterSpacing: "0.05em", fontFamily: "Georgia, serif", transition: "all 0.2s" }}>{label}</button>
          ))}
        </div>
      </header>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.25s ease, transform 0.25s ease", overflowY: "auto" }}>
        {slideContent[slides[current]]}
      </div>
      <div style={{ padding: "1rem 2rem", borderTop: "1px solid #111", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <button onClick={prev} disabled={current === 0} style={{ background: "transparent", border: "1px solid #222", color: current === 0 ? "#222" : "#666", padding: "0.6rem 1.2rem", borderRadius: "999px", cursor: current === 0 ? "not-allowed" : "pointer", fontSize: "0.85rem", fontFamily: "Georgia, serif" }}>← Back</button>
        <div style={{ display: "flex", gap: "0.4rem" }}>
          {slides.map((_, i) => <div key={i} onClick={() => goTo(i)} style={{ width: i === current ? 20 : 6, height: 6, borderRadius: "999px", background: i === current ? "#e8845a" : "#222", cursor: "pointer", transition: "all 0.3s" }} />)}
        </div>
        <button onClick={next} disabled={current === slides.length - 1} style={{ background: current === slides.length - 1 ? "transparent" : "#e8845a", border: current === slides.length - 1 ? "1px solid #222" : "none", color: current === slides.length - 1 ? "#222" : "#fff", padding: "0.6rem 1.2rem", borderRadius: "999px", cursor: current === slides.length - 1 ? "not-allowed" : "pointer", fontSize: "0.85rem", fontFamily: "Georgia, serif" }}>Next →</button>
      </div>
    </div>
  );
}
