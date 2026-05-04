import { useState } from "react";

const files = [
  { emoji: "🌐", name: "Booking Platform", file: "feelgood-mvp.jsx", what: "Your main product. Users browse sessions by vibe, see hosts, and book a spot. Has a full booking flow with confirmation.", howToUse: "Show this to investors, hosts, and tourists. This IS FeelGood.", status: "live", color: "#5a9e5a", phase: "Product" },
  { emoji: "🎯", name: "AI Vibe Matcher", file: "feelgood-vibe-matcher.jsx", what: "AI chat agent. You type how you feel, it recommends the perfect session. Uses Claude AI in real time.", howToUse: "The wow moment. Show people this and watch their faces. Type 'I'm exhausted' and see the magic.", status: "live", color: "#e8845a", phase: "Product" },
  { emoji: "🏠", name: "Host Onboarding Agent", file: "feelgood-host-onboarding.jsx", what: "AI agent called Maya that onboards new hosts through a warm conversation. Collects all their session details and generates a listing card.", howToUse: "Send this link to the Innsbruck outdoor guides you already met. They fill it in themselves!", status: "live", color: "#8b6abf", phase: "Product" },
  { emoji: "🏢", name: "Agent HQ Dashboard", file: "feelgood-hq.jsx", what: "Your founder's office. Tracks all agents — live, building, and planned. Click any agent to see its skills and roadmap.", howToUse: "Your personal overview. Open this when you want to see where FeelGood stands.", status: "live", color: "#2a7abf", phase: "Founder Tools" },
  { emoji: "🚀", name: "Launch Guide", file: "feelgood-launch-guide.jsx", what: "Interactive checklist to get FeelGood live on the internet. 5 phases: Claude Pro → GitHub → Netlify → API Key → Go live.", howToUse: "Follow this step by step after upgrading to Pro. Takes ~30 minutes total.", status: "live", color: "#bf8a2a", phase: "Founder Tools" },
  { emoji: "🎤", name: "Pitch Deck", file: "feelgood-pitch.jsx", what: "6-slide interactive pitch for InnCubator May 11. Vision → Problem → Solution → Agents → Traction → Ask. Use arrow keys to navigate.", howToUse: "Open on your laptop at InnCubator. Use ← → arrow keys. Pull up the live agents on your phone at the same time.", status: "live", color: "#bf2a5a", phase: "Pitch" },
];

const nextSteps = [
  { emoji: "🐙", text: "Create GitHub account at github.com", urgent: true },
  { emoji: "🚀", text: "Connect Netlify — get a real live URL", urgent: true },
  { emoji: "🔑", text: "Get Anthropic API key at console.anthropic.com", urgent: true },
  { emoji: "📩", text: "Build Outreach Agent — pitch emails to hotels", urgent: false },
  { emoji: "📊", text: "Build Admin Agent — track bookings & revenue", urgent: false },
  { emoji: "🏔️", text: "Send Host Onboarding link to Innsbruck guides", urgent: false },
  { emoji: "🎤", text: "Practice pitch for InnCubator May 11", urgent: false },
];

const phases = [...new Set(files.map(f => f.phase))];

export default function MasterMap() {
  const [selected, setSelected] = useState(null);
  const [activePhase, setActivePhase] = useState("All");
  const filtered = activePhase === "All" ? files : files.filter(f => f.phase === activePhase);

  return (
    <div style={{ minHeight: "100vh", background: "#080808", fontFamily: "Georgia, serif", color: "#fff", paddingBottom: "3rem" }}>
      <header style={{ padding: "1.2rem 2rem", borderBottom: "1px solid #181818", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontSize: "1.4rem", fontWeight: "800" }}>Feel<span style={{ color: "#e8845a" }}>Good</span></span>
          <span style={{ fontSize: "0.65rem", color: "#444", marginLeft: "0.8rem", letterSpacing: "0.2em" }}>MASTER MAP</span>
        </div>
        <div style={{ background: "rgba(232,132,90,0.1)", border: "1px solid rgba(232,132,90,0.2)", padding: "0.4rem 0.9rem", borderRadius: "999px", fontSize: "0.75rem", color: "#e8845a" }}>Built: 29 April 2026 ✦</div>
      </header>

      <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <div style={{ background: "linear-gradient(135deg, #8b2a0a22, #e8845a11)", border: "1px solid #e8845a22", borderRadius: "16px", padding: "1.5rem", marginBottom: "2rem", textAlign: "center" }}>
          <p style={{ color: "#e8845a", fontSize: "0.75rem", letterSpacing: "0.2em", margin: "0 0 0.5rem" }}>EVA KORPER · FOUNDER</p>
          <h1 style={{ fontSize: "1.6rem", fontWeight: "400", margin: "0 0 0.5rem", lineHeight: 1.2 }}>Everything you built<br /><em style={{ color: "#e8845a" }}>in one day.</em></h1>
          <p style={{ color: "#555", fontSize: "0.85rem", margin: 0 }}>From a coffee-stained notebook → a working AI startup. 🏔️</p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {["All", ...phases].map(p => (
            <button key={p} onClick={() => setActivePhase(p)} style={{ padding: "0.4rem 1rem", borderRadius: "999px", border: "none", background: activePhase === p ? "#e8845a" : "#111", color: activePhase === p ? "#fff" : "#555", fontSize: "0.8rem", cursor: "pointer", fontFamily: "Georgia, serif", transition: "all 0.2s" }}>{p}</button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {filtered.map(f => (
            <div key={f.file} onClick={() => setSelected(selected?.file === f.file ? null : f)} style={{ background: selected?.file === f.file ? "#111" : "#0d0d0d", border: `1px solid ${selected?.file === f.file ? f.color + "44" : "#181818"}`, borderRadius: "14px", overflow: "hidden", cursor: "pointer", transition: "all 0.2s" }}>
              <div style={{ padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>{f.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                    <h3 style={{ margin: 0, fontWeight: "400", fontSize: "0.95rem", color: "#fff" }}>{f.name}</h3>
                    <span style={{ background: `${f.color}22`, border: `1px solid ${f.color}44`, color: f.color, padding: "0.15rem 0.5rem", borderRadius: "999px", fontSize: "0.6rem", letterSpacing: "0.1em" }}>● LIVE</span>
                    <span style={{ background: "#1a1a1a", color: "#333", padding: "0.15rem 0.5rem", borderRadius: "999px", fontSize: "0.6rem", letterSpacing: "0.05em" }}>{f.phase}</span>
                  </div>
                  <p style={{ margin: "0.2rem 0 0", color: "#444", fontSize: "0.75rem", fontFamily: "monospace" }}>{f.file}</p>
                </div>
                <span style={{ color: "#333", fontSize: "1rem", transform: selected?.file === f.file ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>⌄</span>
              </div>
              {selected?.file === f.file && (
                <div style={{ padding: "0 1.2rem 1.2rem", borderTop: "1px solid #181818", paddingTop: "1rem" }}>
                  <div style={{ marginBottom: "0.9rem" }}>
                    <p style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.12em", margin: "0 0 0.3rem" }}>WHAT IT DOES</p>
                    <p style={{ color: "#888", fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>{f.what}</p>
                  </div>
                  <div style={{ background: `${f.color}11`, border: `1px solid ${f.color}22`, borderRadius: "10px", padding: "0.8rem 1rem" }}>
                    <p style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.12em", margin: "0 0 0.3rem" }}>HOW TO USE IT</p>
                    <p style={{ color: f.color, fontSize: "0.85rem", margin: 0, lineHeight: 1.6 }}>{f.howToUse}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          <p style={{ color: "#444", fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>WHAT'S NEXT</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {nextSteps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: "0.9rem", alignItems: "center", padding: "0.8rem 1rem", background: "#0d0d0d", border: `1px solid ${s.urgent ? "#e8845a22" : "#181818"}`, borderRadius: "10px" }}>
                <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{s.emoji}</span>
                <p style={{ margin: 0, fontSize: "0.85rem", color: s.urgent ? "#aaa" : "#555", lineHeight: 1.4 }}>{s.text}</p>
                {s.urgent && <span style={{ marginLeft: "auto", background: "rgba(232,132,90,0.1)", border: "1px solid rgba(232,132,90,0.2)", color: "#e8845a", padding: "0.15rem 0.5rem", borderRadius: "999px", fontSize: "0.6rem", letterSpacing: "0.1em", flexShrink: 0 }}>NOW</span>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem", padding: "1.2rem", borderTop: "1px solid #181818", textAlign: "center" }}>
          <p style={{ color: "#2a2a2a", fontSize: "0.8rem", margin: 0 }}>FeelGood · Innsbruck · Built with Claude 🩵 · May 11 InnCubator →</p>
        </div>
      </main>
    </div>
  );
}
