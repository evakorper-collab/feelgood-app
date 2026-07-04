import React, { useState } from "react";

const activities = [
  {
    id: 1,
    title: "Table Tennis Meetup",
    host: "Drop-in, open group",
    time: "Today, 17:00",
    spots: "Open group",
    tag: "Community",
  },
  {
    id: 2,
    title: "Innsbruck Run Club",
    host: "Led by Jonas",
    time: "Today, 18:00",
    spots: "Open group",
    tag: "Movement",
  },
  {
    id: 3,
    title: "Group Ride — Bike Club",
    host: "Meet at Marktplatz",
    time: "Tomorrow, 09:00",
    spots: "Open group",
    tag: "Movement",
  },
  {
    id: 4,
    title: "Downhill Skate Crew",
    host: "Led by Felix",
    time: "Sat, 16:00",
    spots: "Experienced riders",
    tag: "Explore",
  },
  {
    id: 5,
    title: "Outdoor Workout — Emile-Béthouart-Steg",
    host: "Bodyweight & bars, all levels",
    time: "Sun, 09:00",
    spots: "6 spots left",
    tag: "Wellness",
  },
  {
    id: 6,
    title: "Rollerblading Group",
    host: "Meet at Rapoldipark",
    time: "Sun, 17:00",
    spots: "Open group",
    tag: "Explore",
  },
];

const tagColor = {
  Movement: "#3B6E91",
  Wellness: "#E8A93B",
  Explore: "#5C7A5E",
  Community: "#8B5E9E",
};

const displayFont = "'Arial Black', 'Helvetica Neue', sans-serif";

export default function FeelGoodCommunity() {
  const [joined, setJoined] = useState({});

  const toggleJoin = (id) =>
    setJoined((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div style={{ backgroundColor: "#EDEFE9", color: "#14231C", minHeight: "100vh", width: "100%", fontFamily: "sans-serif" }}>
      {/* HERO */}
      <section style={{ padding: "56px 24px 40px", borderBottom: "1px solid #8A9A8C55" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, color: "#5C7A5E" }}>
            <span>⛰️</span>
            <span style={{ fontSize: 14, letterSpacing: 1, textTransform: "uppercase", fontWeight: 600 }}>
              Innsbruck, live right now
            </span>
          </div>
          <h1 style={{ fontFamily: displayFont, fontSize: "clamp(2.2rem, 6vw, 3.8rem)", lineHeight: 0.98, letterSpacing: "-0.01em", margin: "0 0 24px 0" }}>
            Come as a guest.<br />Leave part of a crew.
          </h1>
          <p style={{ maxWidth: 560, fontSize: 18, lineHeight: 1.6, color: "#3A4A3E", margin: 0 }}>
            FeelGood isn't just booking a session — it's plugging into what's
            already moving in this city. Real groups, real times, real people
            to show up with.
          </p>
        </div>
      </section>

      {/* SIGNPOST TICKER */}
      <section style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
            <h2 style={{ fontFamily: displayFont, fontSize: 24, margin: 0 }}>Happening nearby</h2>
            <span style={{ fontSize: 14, fontFamily: "monospace", color: "#5C7A5E" }}>6 groups active</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {activities.map((a) => (
              <div
                key={a.id}
                style={{
                  padding: 20,
                  borderRadius: 12,
                  border: "1px solid #8A9A8C40",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{
                    fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5,
                    padding: "4px 8px", borderRadius: 6, color: "#fff", backgroundColor: tagColor[a.tag],
                  }}>
                    {a.tag}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#5C7A5E", fontFamily: "monospace" }}>
                    🕐 {a.time}
                  </span>
                </div>

                <h3 style={{ fontFamily: displayFont, fontSize: 18, margin: "0 0 4px 0" }}>{a.title}</h3>
                <p style={{ fontSize: 14, color: "#3A4A3E", margin: "0 0 16px 0" }}>{a.host}</p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, color: "#5C7A5E" }}>
                    👥 {a.spots}
                  </span>
                  <button
                    onClick={() => toggleJoin(a.id)}
                    style={{
                      fontSize: 14, fontWeight: 600, padding: "8px 16px", borderRadius: 999, border: "none", cursor: "pointer",
                      backgroundColor: joined[a.id] ? "#5C7A5E" : "#14231C", color: "#EDEFE9",
                    }}
                  >
                    {joined[a.id] ? "You're in" : "Join"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOST STRIP */}
      <section style={{ padding: "56px 24px", backgroundColor: "#14231C", color: "#EDEFE9" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, color: "#E8A93B" }}>
              <span>🔥</span>
              <span style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600 }}>For hosts</span>
            </div>
            <h3 style={{ fontFamily: displayFont, fontSize: 26, margin: "0 0 8px 0", maxWidth: 480 }}>
              Your session builds a crew, not just a booking.
            </h3>
            <p style={{ maxWidth: 420, color: "#C6D0C7", margin: 0 }}>
              Every group you run becomes something guests can return to —
              and invite friends into.
            </p>
          </div>
          <button style={{
            display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600,
            padding: "12px 20px", borderRadius: 999, border: "none", cursor: "pointer",
            backgroundColor: "#E8A93B", color: "#14231C",
          }}>
            Start a group ↗
          </button>
        </div>
      </section>

      {/* footer */}
      <div style={{ padding: "24px", textAlign: "center", fontSize: 12, color: "#5C7A5E" }}>
        📍 Innsbruck & surrounding valleys
      </div>
    </div>
  );
}
