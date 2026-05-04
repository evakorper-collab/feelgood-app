import { useState } from "react";

const sessions = [
  {
    id: 1,
    title: "Sunrise Forest Flow",
    host: "Maya",
    hostEmoji: "🌿",
    vibe: "Calm",
    type: "Yoga",
    location: "Nordkette Forest, Innsbruck",
    time: "07:00",
    date: "Thu 1 May",
    spots: 8,
    spotsLeft: 3,
    price: 18,
    duration: "75 min",
    description: "Wake up with the trees. A slow, grounding yoga flow in the forest with mountain air and birdsong. All levels welcome.",
    tags: ["outdoor", "yoga", "morning"],
    color: "#5c7a5c",
    bg: "linear-gradient(135deg, #2d4a2d 0%, #4a6741 100%)",
  },
  {
    id: 2,
    title: "Dance & Let Go",
    host: "Stefan",
    hostEmoji: "🔥",
    vibe: "Hype",
    type: "Dance",
    location: "Studio Innere Stadt",
    time: "19:30",
    date: "Fri 2 May",
    spots: 12,
    spotsLeft: 7,
    price: 22,
    duration: "60 min",
    description: "Shake off the week. Energising dance session for all bodies, all levels. Come alone, leave with a crew.",
    tags: ["dance", "evening", "social"],
    color: "#c45c2a",
    bg: "linear-gradient(135deg, #8b2a0a 0%, #c45c2a 100%)",
  },
  {
    id: 3,
    title: "Cold Plunge Crew",
    host: "Anna",
    hostEmoji: "❄️",
    vibe: "Wild",
    type: "Cold Plunge",
    location: "Inn River, Innsbruck",
    time: "08:00",
    date: "Sat 3 May",
    spots: 6,
    spotsLeft: 2,
    price: 15,
    duration: "45 min",
    description: "Breathwork + cold river immersion. Uncomfortable at first. Transformative every time. Not for the faint-hearted.",
    tags: ["cold plunge", "breathwork", "outdoor"],
    color: "#2a5f8b",
    bg: "linear-gradient(135deg, #0a2d4a 0%, #2a5f8b 100%)",
  },
  {
    id: 4,
    title: "Rooftop HIIT",
    host: "Luca",
    hostEmoji: "⚡",
    vibe: "Hype",
    type: "HIIT",
    location: "Rooftop Hötting",
    time: "18:00",
    date: "Sat 3 May",
    spots: 10,
    spotsLeft: 6,
    price: 20,
    duration: "50 min",
    description: "High intensity, mountain views. Burn hard with the Alps as your backdrop. Group energy like nowhere else.",
    tags: ["hiit", "outdoor", "evening"],
    color: "#8b2a6b",
    bg: "linear-gradient(135deg, #4a0a35 0%, #8b2a6b 100%)",
  },
  {
    id: 5,
    title: "Evening Breathwork",
    host: "Maya",
    hostEmoji: "🌙",
    vibe: "Calm",
    type: "Breathwork",
    location: "Innsbruck Yoga Loft",
    time: "20:00",
    date: "Wed 30 Apr",
    spots: 15,
    spotsLeft: 9,
    price: 16,
    duration: "60 min",
    description: "Wind down properly. Guided breathwork to reset your nervous system and sleep like a baby. Eyes closed, phone off.",
    tags: ["breathwork", "evening", "indoor"],
    color: "#4a3a6b",
    bg: "linear-gradient(135deg, #1a0a3a 0%, #4a3a6b 100%)",
  },
  {
    id: 6,
    title: "Bike to the Lake",
    host: "Stefan",
    hostEmoji: "🚴",
    vibe: "Wild",
    type: "Cycling",
    location: "Baggersee, Innsbruck",
    time: "09:00",
    date: "Sun 4 May",
    spots: 8,
    spotsLeft: 5,
    price: 12,
    duration: "2 hrs",
    description: "Easy cycle out to the lake, swim, cycle back. The most local thing you'll do in Innsbruck. Bikes provided.",
    tags: ["cycling", "outdoor", "morning"],
    color: "#6b7a2a",
    bg: "linear-gradient(135deg, #3a4a0a 0%, #6b7a2a 100%)",
  },
];

const vibes = ["All", "Calm", "Hype", "Wild"];
const types = ["All", "Yoga", "Dance", "HIIT", "Cold Plunge", "Breathwork", "Cycling"];

export default function FeelGoodMVP() {
  const [selectedVibe, setSelectedVibe] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [bookedSession, setBookedSession] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const filtered = sessions.filter(s => {
    const vibeMatch = selectedVibe === "All" || s.vibe === selectedVibe;
    const typeMatch = selectedType === "All" || s.type === selectedType;
    return vibeMatch && typeMatch;
  });

  const handleBook = (session) => {
    setBookedSession(session);
    setName("");
    setEmail("");
  };

  const handleConfirm = () => {
    if (!name.trim() || !email.trim()) return;
    setBookingConfirmed(bookedSession);
    setBookedSession(null);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#faf8f4", fontFamily: "'Georgia', serif" }}>
      <header style={{
        background: "#1a1a1a", padding: "1.2rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <span style={{ fontSize: "1.5rem", fontWeight: "800", color: "#fff", letterSpacing: "-1px", fontFamily: "Georgia, serif" }}>
          Feel<span style={{ color: "#e8845a" }}>Good</span>
        </span>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          {["Explore", "Host", "About"].map(item => (
            <span key={item} style={{ color: "#aaa", fontSize: "0.9rem", cursor: "pointer", letterSpacing: "0.05em" }}>{item}</span>
          ))}
        </nav>
      </header>

      <div style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2217 100%)",
        padding: "4rem 2rem 3rem", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 50%, rgba(232,132,90,0.15) 0%, transparent 70%)" }} />
        <p style={{ color: "#e8845a", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>Innsbruck · live now</p>
        <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: "400", lineHeight: 1.15, marginBottom: "1rem", fontFamily: "Georgia, serif" }}>
          Book the vibe,<br /><em style={{ color: "#e8845a" }}>not just the activity</em>
        </h1>
        <p style={{ color: "#888", fontSize: "1rem", maxWidth: 420, margin: "0 auto" }}>
          Local movement sessions that heal, hype, and connect. Real hosts. Real people.
        </p>
      </div>

      <div style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "1rem 2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: "0.8rem", color: "#999", marginRight: "0.5rem", letterSpacing: "0.1em" }}>VIBE</span>
            {vibes.map(v => (
              <button key={v} onClick={() => setSelectedVibe(v)} style={{
                padding: "0.4rem 1rem", borderRadius: "999px",
                border: selectedVibe === v ? "none" : "1.5px solid #ddd",
                background: selectedVibe === v ? "#e8845a" : "#fff",
                color: selectedVibe === v ? "#fff" : "#666",
                fontSize: "0.85rem", cursor: "pointer", fontFamily: "Georgia, serif", transition: "all 0.2s",
              }}>{v}</button>
            ))}
            <span style={{ fontSize: "0.8rem", color: "#999", marginLeft: "1rem", marginRight: "0.5rem", letterSpacing: "0.1em" }}>TYPE</span>
            {types.map(t => (
              <button key={t} onClick={() => setSelectedType(t)} style={{
                padding: "0.4rem 1rem", borderRadius: "999px",
                border: selectedType === t ? "none" : "1.5px solid #ddd",
                background: selectedType === t ? "#1a1a1a" : "#fff",
                color: selectedType === t ? "#fff" : "#666",
                fontSize: "0.85rem", cursor: "pointer", fontFamily: "Georgia, serif", transition: "all 0.2s",
              }}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1.5rem" }}>
        <p style={{ color: "#aaa", fontSize: "0.85rem", marginBottom: "1.5rem", letterSpacing: "0.05em" }}>
          {filtered.length} session{filtered.length !== 1 ? "s" : ""} near you
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: "1.5rem" }}>
          {filtered.map(session => (
            <div key={session.id} style={{
              background: "#fff", borderRadius: "16px", overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)"; }}
            >
              <div style={{ background: session.bg, padding: "1.5rem", minHeight: "120px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "0.25rem 0.7rem", borderRadius: "999px", fontSize: "0.75rem", letterSpacing: "0.1em", backdropFilter: "blur(4px)" }}>{session.vibe.toUpperCase()}</span>
                  <span style={{ fontSize: "1.4rem" }}>{session.hostEmoji}</span>
                </div>
                <h2 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: "400", margin: "0.5rem 0 0", fontFamily: "Georgia, serif", lineHeight: 1.2 }}>{session.title}</h2>
              </div>
              <div style={{ padding: "1.2rem" }}>
                <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.8rem", flexWrap: "wrap" }}>
                  {session.tags.map(tag => (
                    <span key={tag} style={{ background: "#f5f2ee", color: "#888", padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.7rem", letterSpacing: "0.05em" }}>#{tag}</span>
                  ))}
                </div>
                <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.5, marginBottom: "1rem" }}>{session.description}</p>
                <div style={{ borderTop: "1px solid #f0ede9", paddingTop: "0.8rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                    <span style={{ color: "#999" }}>📅 {session.date} · {session.time}</span>
                    <span style={{ color: "#999" }}>⏱ {session.duration}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                    <span style={{ color: "#999" }}>📍 {session.location.split(",")[0]}</span>
                    <span style={{ color: session.spotsLeft <= 2 ? "#e85a5a" : "#5a9e5a", fontWeight: "600" }}>{session.spotsLeft} spot{session.spotsLeft !== 1 ? "s" : ""} left</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.4rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "#999" }}>with {session.host}</span>
                    <span style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1a1a1a" }}>€{session.price}</span>
                  </div>
                </div>
                <button onClick={() => handleBook(session)} style={{
                  width: "100%", marginTop: "1rem", padding: "0.75rem",
                  background: "#1a1a1a", color: "#fff", border: "none", borderRadius: "10px",
                  fontSize: "0.9rem", cursor: "pointer", fontFamily: "Georgia, serif", letterSpacing: "0.02em", transition: "background 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "#e8845a"}
                  onMouseLeave={e => e.currentTarget.style.background = "#1a1a1a"}
                >Book your spot →</button>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem", color: "#bbb" }}>
            <p style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🌿</p>
            <p>No sessions match that vibe right now — check back soon!</p>
          </div>
        )}
      </main>

      {bookedSession && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "1rem" }} onClick={() => setBookedSession(null)}>
          <div style={{ background: "#fff", borderRadius: "20px", padding: "2rem", maxWidth: 400, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }} onClick={e => e.stopPropagation()}>
            <div style={{ background: bookedSession.bg, borderRadius: "12px", padding: "1.2rem", marginBottom: "1.5rem" }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", margin: 0 }}>{bookedSession.date} · {bookedSession.time}</p>
              <h3 style={{ color: "#fff", fontFamily: "Georgia, serif", margin: "0.3rem 0 0", fontSize: "1.3rem", fontWeight: "400" }}>{bookedSession.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", margin: "0.3rem 0 0" }}>with {bookedSession.host} · {bookedSession.location}</p>
            </div>
            <p style={{ color: "#333", fontSize: "0.9rem", marginBottom: "1.2rem", fontFamily: "Georgia, serif" }}>Reserve your spot — €{bookedSession.price}</p>
            <input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} style={{ width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #eee", borderRadius: "10px", fontSize: "0.9rem", marginBottom: "0.75rem", boxSizing: "border-box", fontFamily: "Georgia, serif", outline: "none" }} />
            <input placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} type="email" style={{ width: "100%", padding: "0.75rem 1rem", border: "1.5px solid #eee", borderRadius: "10px", fontSize: "0.9rem", marginBottom: "1.2rem", boxSizing: "border-box", fontFamily: "Georgia, serif", outline: "none" }} />
            <button onClick={handleConfirm} style={{ width: "100%", padding: "0.85rem", background: name && email ? "#e8845a" : "#ddd", color: "#fff", border: "none", borderRadius: "10px", fontSize: "1rem", cursor: name && email ? "pointer" : "not-allowed", fontFamily: "Georgia, serif", marginBottom: "0.75rem" }}>Confirm Booking →</button>
            <button onClick={() => setBookedSession(null)} style={{ width: "100%", padding: "0.6rem", background: "transparent", color: "#aaa", border: "none", fontSize: "0.85rem", cursor: "pointer" }}>Cancel</button>
          </div>
        </div>
      )}

      {bookingConfirmed && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "1rem" }}>
          <div style={{ background: "#fff", borderRadius: "20px", padding: "2.5rem 2rem", maxWidth: 380, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.4rem", fontWeight: "400", marginBottom: "0.5rem" }}>You're in!</h3>
            <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              <strong>{bookingConfirmed.title}</strong><br />
              {bookingConfirmed.date} · {bookingConfirmed.time}<br />
              <span style={{ color: "#e8845a" }}>See you there 🌿</span>
            </p>
            <button onClick={() => setBookingConfirmed(null)} style={{ padding: "0.75rem 2rem", background: "#1a1a1a", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontFamily: "Georgia, serif" }}>Back to sessions</button>
          </div>
        </div>
      )}
    </div>
  );
}
