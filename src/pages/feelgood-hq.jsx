import { useState } from "react";

const agents = [
  { id: 1, emoji: "🎯", name: "Vibe Matcher", tagline: "Matches mood → perfect session", description: "Reads how someone feels and recommends the right session. The heart of the FeelGood experience.", status: "live", skills: ["Mood reading", "Session matching", "Booking flow"], upcomingSkills: ["User history", "Multi-city", "Personalization"], file: "feelgood-vibe-matcher.jsx", color: "#e8845a", bg: "linear-gradient(135deg, #8b2a0a 0%, #e8845a 100%)" },
  { id: 2, emoji: "🌐", name: "Booking Platform", tagline: "Browse & book sessions by vibe", description: "The full session explorer. Filter by vibe, see hosts, book your spot in seconds.", status: "live", skills: ["Session browsing", "Vibe filtering", "Booking flow"], upcomingSkills: ["Live availability", "Payments", "Reviews"], file: "feelgood-mvp.jsx", color: "#5a9e5a", bg: "linear-gradient(135deg, #2d4a2d 0%, #5a9e5a 100%)" },
  { id: 3, emoji: "🏠", name: "Host Onboarding", tagline: "Guides new hosts to list sessions", description: "An AI agent that walks local hosts through creating their first FeelGood session. Conversational, warm, fast.", status: "live", skills: ["Host interview", "Session builder", "Listing generator"], upcomingSkills: ["Pricing guide", "Go-live checklist", "Host analytics"], file: "feelgood-host-onboarding.jsx", color: "#8b6abf", bg: "linear-gradient(135deg, #2d1a4a 0%, #8b6abf 100%)" },
  { id: 4, emoji: "📩", name: "Outreach Agent", tagline: "Writes pitches to hotels & partners", description: "Generates personalized outreach emails to hotels, hostels, and tourist boards in Innsbruck.", status: "planned", skills: [], upcomingSkills: ["Partner pitches", "Email templates", "Follow-up sequences", "Multi-language"], file: null, color: "#2a7abf", bg: "linear-gradient(135deg, #0a2d4a 0%, #2a7abf 100%)" },
  { id: 5, emoji: "📊", name: "Admin Agent", tagline: "Your FeelGood business brain", description: "Ask it anything about your bookings, revenue, hosts, and growth. Your AI co-founder for data.", status: "planned", skills: [], upcomingSkills: ["Revenue tracking", "Host analytics", "Growth insights", "Financial reports"], file: null, color: "#bf8a2a", bg: "linear-gradient(135deg, #4a2d0a 0%, #bf8a2a 100%)" },
  { id: 6, emoji: "🤝", name: "Team Finder", tagline: "Helps recruit your co-founders & team", description: "Crafts outreach to potential co-founders, designers, and developers who believe in movement culture.", status: "planned", skills: [], upcomingSkills: ["Role definitions", "Outreach messages", "Interview questions", "Equity explainer"], file: null, color: "#bf2a5a", bg: "linear-gradient(135deg, #4a0a1a 0%, #bf2a5a 100%)" },
];

const statusConfig = {
  live:     { label: "LIVE", color: "#5a9e5a", bg: "rgba(90,158,90,0.15)", dot: "#5a9e5a" },
  building: { label: "BUILDING", color: "#e8845a", bg: "rgba(232,132,90,0.15)", dot: "#e8845a" },
  planned:  { label: "PLANNED", color: "#555", bg: "rgba(255,255,255,0.05)", dot: "#555" },
};

export default function FeelGoodHQ() {
  const [selected, setSelected] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const liveCount = agents.filter(a => a.status === "live").length;
  const buildingCount = agents.filter(a => a.status === "building").length;
  const plannedCount = agents.filter(a => a.status === "planned").length;

  return (
    <div style={{ minHeight: "100vh", background: "#080808", fontFamily: "'Georgia', serif", color: "#fff" }}>
      <header style={{ padding: "1.2rem 2rem", borderBottom: "1px solid #181818", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontSize: "1.4rem", fontWeight: "800", letterSpacing: "-0.5px" }}>Feel<span style={{ color: "#e8845a" }}>Good</span></span>
          <span style={{ fontSize: "0.7rem", color: "#444", marginLeft: "0.8rem", letterSpacing: "0.2em" }}>AGENT HQ</span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.8rem" }}>
          {[{ label: "LIVE", val: liveCount, color: "#5a9e5a" }, { label: "BUILDING", val: buildingCount, color: "#e8845a" }, { label: "PLANNED", val: plannedCount, color: "#555" }].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.3rem", fontWeight: "700", color: s.color }}>{s.val}</div>
              <div style={{ color: "#444", letterSpacing: "0.12em", fontSize: "0.7rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </header>

      <div style={{ padding: "2.5rem 2rem 2rem", borderBottom: "1px solid #181818", background: "radial-gradient(ellipse at 30% 50%, rgba(232,132,90,0.07) 0%, transparent 60%)" }}>
        <p style={{ color: "#444", fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>INNSBRUCK · FOUNDED 2025</p>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "400", lineHeight: 1.15, margin: 0, maxWidth: 600 }}>
          Your AI team,<br /><em style={{ color: "#e8845a" }}>always on.</em>
        </h1>
        <p style={{ color: "#444", marginTop: "0.75rem", fontSize: "0.9rem", maxWidth: 480 }}>Every agent below is a specialist built for FeelGood. Click any to see what it does, what skills it has, and what's coming next.</p>
      </div>

      <main style={{ padding: "2rem", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {agents.map(agent => {
            const sc = statusConfig[agent.status];
            const isHovered = hoveredId === agent.id;
            return (
              <div key={agent.id} onClick={() => setSelected(agent)} onMouseEnter={() => setHoveredId(agent.id)} onMouseLeave={() => setHoveredId(null)} style={{ background: isHovered ? "#141414" : "#0f0f0f", border: `1px solid ${isHovered ? "#2a2a2a" : "#181818"}`, borderRadius: "16px", overflow: "hidden", cursor: "pointer", transition: "all 0.2s", transform: isHovered ? "translateY(-3px)" : "none", boxShadow: isHovered ? "0 12px 40px rgba(0,0,0,0.4)" : "none" }}>
                <div style={{ background: agent.status === "planned" ? "#111" : agent.bg, padding: "1.5rem", position: "relative", overflow: "hidden" }}>
                  {agent.status === "planned" && <div style={{ position: "absolute", inset: 0, background: agent.bg, opacity: 0.25 }} />}
                  <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "2rem" }}>{agent.emoji}</span>
                    <div style={{ background: sc.bg, border: `1px solid ${sc.color}33`, padding: "0.25rem 0.6rem", borderRadius: "999px", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: sc.dot, boxShadow: agent.status === "live" ? `0 0 6px ${sc.dot}` : "none" }} />
                      <span style={{ fontSize: "0.65rem", color: sc.color, letterSpacing: "0.12em" }}>{sc.label}</span>
                    </div>
                  </div>
                  <h2 style={{ position: "relative", margin: "0.75rem 0 0.25rem", fontSize: "1.1rem", fontWeight: "400", color: agent.status === "planned" ? "#555" : "#fff" }}>{agent.name}</h2>
                  <p style={{ position: "relative", margin: 0, fontSize: "0.78rem", color: agent.status === "planned" ? "#444" : "rgba(255,255,255,0.6)", letterSpacing: "0.02em" }}>{agent.tagline}</p>
                </div>
                <div style={{ padding: "1rem 1.2rem" }}>
                  {agent.skills.length > 0 ? (
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {agent.skills.map(skill => <span key={skill} style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", color: "#888", padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.7rem" }}>✓ {skill}</span>)}
                    </div>
                  ) : (
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                      {agent.upcomingSkills.slice(0, 2).map(skill => <span key={skill} style={{ background: "#111", border: "1px dashed #222", color: "#444", padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.7rem" }}>○ {skill}</span>)}
                      {agent.upcomingSkills.length > 2 && <span style={{ color: "#333", fontSize: "0.7rem", padding: "0.2rem 0.4rem" }}>+{agent.upcomingSkills.length - 2} more</span>}
                    </div>
                  )}
                  <div style={{ marginTop: "0.9rem", paddingTop: "0.9rem", borderTop: "1px solid #181818", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.75rem", color: "#333" }}>{agent.file ? agent.file : "not built yet"}</span>
                    <span style={{ fontSize: "0.8rem", color: "#333" }}>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "#0f0f0f", border: "1px solid #181818", borderRadius: "14px", display: "flex", gap: "1rem", alignItems: "center" }}>
          <span style={{ fontSize: "1.5rem" }}>💡</span>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#888", lineHeight: 1.6 }}>
            <strong style={{ color: "#ccc" }}>Every agent gets smarter over time.</strong> As FeelGood grows, you add more sessions, hosts, cities and real data — and each agent automatically gets more powerful. No rebuilding needed.
          </p>
        </div>
      </main>

      {selected && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "1rem" }} onClick={() => setSelected(null)}>
          <div style={{ background: "#111", border: "1px solid #222", borderRadius: "20px", maxWidth: 480, width: "100%", overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }} onClick={e => e.stopPropagation()}>
            <div style={{ background: selected.status === "planned" ? "#0f0f0f" : selected.bg, padding: "2rem", position: "relative", overflow: "hidden" }}>
              {selected.status === "planned" && <div style={{ position: "absolute", inset: 0, background: selected.bg, opacity: 0.3 }} />}
              <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: "2.5rem" }}>{selected.emoji}</span>
                <button onClick={() => setSelected(null)} style={{ background: "rgba(0,0,0,0.3)", border: "none", color: "#fff", borderRadius: "999px", width: 30, height: 30, cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
              </div>
              <h2 style={{ position: "relative", color: "#fff", margin: "0.75rem 0 0.3rem", fontWeight: "400", fontSize: "1.5rem" }}>{selected.name}</h2>
              <p style={{ position: "relative", color: "rgba(255,255,255,0.6)", margin: 0, fontSize: "0.85rem" }}>{selected.tagline}</p>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>{selected.description}</p>
              {selected.skills.length > 0 && (
                <div style={{ marginBottom: "1.2rem" }}>
                  <p style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.15em", marginBottom: "0.6rem" }}>CURRENT SKILLS</p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {selected.skills.map(s => <span key={s} style={{ background: "rgba(90,158,90,0.1)", border: "1px solid rgba(90,158,90,0.3)", color: "#5a9e5a", padding: "0.3rem 0.8rem", borderRadius: "999px", fontSize: "0.78rem" }}>✓ {s}</span>)}
                  </div>
                </div>
              )}
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.15em", marginBottom: "0.6rem" }}>COMING NEXT</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {selected.upcomingSkills.map(s => <span key={s} style={{ background: "#1a1a1a", border: "1px dashed #2a2a2a", color: "#555", padding: "0.3rem 0.8rem", borderRadius: "999px", fontSize: "0.78rem" }}>○ {s}</span>)}
                </div>
              </div>
              <div style={{ flex: 1, padding: "0.8rem", background: selected.status === "live" ? "rgba(90,158,90,0.1)" : selected.status === "building" ? "rgba(232,132,90,0.1)" : "#151515", border: `1px solid ${selected.status === "live" ? "rgba(90,158,90,0.2)" : selected.status === "building" ? "rgba(232,132,90,0.2)" : "#222"}`, borderRadius: "10px", textAlign: "center", color: selected.status === "live" ? "#5a9e5a" : selected.status === "building" ? "#e8845a" : "#444", fontSize: "0.85rem" }}>
                {selected.status === "live" ? "● Live & running" : selected.status === "building" ? "⟳ In progress — building now" : "○ On the roadmap"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
