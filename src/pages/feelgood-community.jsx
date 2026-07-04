import React, { useState } from "react";
import { MapPin, Users, Clock, ArrowUpRight, Mountain, Flame, Compass, Calendar, User } from "lucide-react";

const tabs = [
  { id: "discover", label: "Discover", icon: Compass },
  { id: "community", label: "Community", icon: Users },
  { id: "bookings", label: "Bookings", icon: Calendar },
  { id: "profile", label: "Profile", icon: User },
];

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

export default function FeelGoodCommunity() {
  const [joined, setJoined] = useState({});
  const [activeTab, setActiveTab] = useState("community");

  const toggleJoin = (id) =>
    setJoined((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div
      style={{ backgroundColor: "#EDEFE9", color: "#14231C" }}
      className="min-h-screen w-full font-sans pb-20 relative"
    >
      {/* eyebrow / concept note */}
      <div
        style={{ backgroundColor: "#14231C", color: "#EDEFE9" }}
        className="text-xs tracking-widest uppercase text-center py-2 px-4"
      >
        Concept placeholder · not yet wired to live data
      </div>

      {/* HERO — trailhead signpost */}
      <section className="px-6 md:px-16 pt-14 pb-10 border-b" style={{ borderColor: "#8A9A8C55" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4" style={{ color: "#5C7A5E" }}>
            <Mountain size={18} strokeWidth={2.5} />
            <span className="text-sm tracking-wide uppercase font-semibold">
              Innsbruck, live right now
            </span>
          </div>
          <h1
            className="leading-[0.95] mb-6"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Come as a guest.
            <br />
            Leave part of a crew.
          </h1>
          <p
            className="max-w-xl text-lg leading-relaxed"
            style={{ color: "#3A4A3E" }}
          >
            FeelGood isn't just booking a session — it's plugging into what's
            already moving in this city. Real groups, real times, real people
            to show up with.
          </p>
        </div>
      </section>

      {/* SIGNPOST TICKER */}
      <section className="px-6 md:px-16 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-6">
            <h2
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
              className="text-2xl"
            >
              Happening nearby
            </h2>
            <span
              className="text-sm"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "#5C7A5E" }}
            >
              6 groups active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activities.map((a) => (
              <div
                key={a.id}
                className="p-5 rounded-lg border transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#8A9A8C40",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded"
                    style={{
                      color: "#fff",
                      backgroundColor: tagColor[a.tag],
                    }}
                  >
                    {a.tag}
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "#5C7A5E", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <Clock size={12} /> {a.time}
                  </span>
                </div>

                <h3
                  className="text-lg mb-1"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  {a.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: "#3A4A3E" }}>
                  {a.host}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="flex items-center gap-1 text-sm"
                    style={{ color: "#5C7A5E" }}
                  >
                    <Users size={14} /> {a.spots}
                  </span>
                  <button
                    onClick={() => toggleJoin(a.id)}
                    className="text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                    style={{
                      backgroundColor: joined[a.id] ? "#5C7A5E" : "#14231C",
                      color: "#EDEFE9",
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

      {/* HOST COMMUNITY STRIP */}
      <section
        className="px-6 md:px-16 py-14"
        style={{ backgroundColor: "#14231C", color: "#EDEFE9" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3" style={{ color: "#E8A93B" }}>
              <Flame size={18} />
              <span className="text-sm uppercase tracking-wide font-semibold">
                For hosts
              </span>
            </div>
            <h3
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
              className="text-2xl md:text-3xl mb-2"
            >
              Your session builds a crew, not just a booking.
            </h3>
            <p className="max-w-md" style={{ color: "#C6D0C7" }}>
              Every group you run becomes something guests can return to —
              and invite friends into.
            </p>
          </div>
          <button
            className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-full"
            style={{ backgroundColor: "#E8A93B", color: "#14231C" }}
          >
            Start a group <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      {/* footer note */}
      <div className="px-6 md:px-16 py-6 text-center text-xs" style={{ color: "#5C7A5E" }}>
        <div className="flex items-center justify-center gap-1">
          <MapPin size={12} /> Innsbruck & surrounding valleys
        </div>
      </div>

      {/* BOTTOM NAV — where Community lives as a tab */}
      <nav
        className="fixed bottom-0 left-0 right-0 flex justify-around items-center py-3 border-t"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#8A9A8C40" }}
      >
        {tabs.map((t) => {
          const Icon = t.icon;
          const active = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className="flex flex-col items-center gap-1 px-3"
            >
              <Icon
                size={20}
                strokeWidth={active ? 2.5 : 2}
                color={active ? "#14231C" : "#8A9A8C"}
              />
              <span
                className="text-[11px] font-medium"
                style={{ color: active ? "#14231C" : "#8A9A8C" }}
              >
                {t.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
