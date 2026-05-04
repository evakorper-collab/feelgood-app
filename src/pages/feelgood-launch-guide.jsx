import { useState } from "react";

const steps = [
  { phase: "PHASE 1", emoji: "🧠", color: "#e8845a", bg: "linear-gradient(135deg, #8b2a0a, #e8845a)", title: "Upgrade to Claude Pro", why: "Unlocks Claude Code — which can build AND deploy your whole project automatically.", time: "2 min", steps: [{ text: "Go to", link: "https://claude.ai", linkText: "claude.ai" }, { text: "Click your profile photo (bottom left)" }, { text: 'Click "Upgrade to Pro"' }, { text: "Pay $20/month — you can cancel anytime" }, { text: "Done! You now have Claude Code + 5x more usage 🎉" }], tip: "With Pro you can paste all your agent files into Claude Code and it'll set up the whole project for you automatically." },
  { phase: "PHASE 2", emoji: "🐙", color: "#8b6abf", bg: "linear-gradient(135deg, #2d1a4a, #8b6abf)", title: "Set up GitHub", why: "GitHub is where your code lives. Think of it like Google Drive, but for code. Free.", time: "5 min", steps: [{ text: "Go to", link: "https://github.com", linkText: "github.com" }, { text: 'Click "Sign up" — use your email' }, { text: 'Choose username — something like "feelgood-innsbruck"' }, { text: "Verify your email" }, { text: 'Click "New repository" — name it "feelgood-app", set Public' }, { text: 'Click "Create repository" — done! 🎉' }], tip: "Public repository = free hosting later. Don't worry, the code being visible doesn't matter at this stage." },
  { phase: "PHASE 3", emoji: "🚀", color: "#2a7abf", bg: "linear-gradient(135deg, #0a2d4a, #2a7abf)", title: "Connect Netlify", why: "Netlify turns your GitHub code into a real live website with a real URL. Free and automatic.", time: "5 min", steps: [{ text: "Go to", link: "https://netlify.com", linkText: "netlify.com" }, { text: 'Click "Sign up" → "Sign up with GitHub"' }, { text: "Authorize Netlify to access your GitHub" }, { text: 'Click "Add new site" → "Import an existing project"' }, { text: 'Choose GitHub → select your "feelgood-app" repo' }, { text: "Leave all settings as default → click Deploy" }, { text: "In 30 seconds you get a URL like feelgood-app.netlify.app 🎉" }], tip: "You can buy a custom domain later (like feelgood.at) for about €10/year. But the free URL works perfectly to start." },
  { phase: "PHASE 4", emoji: "🔑", color: "#5a9e5a", bg: "linear-gradient(135deg, #1a3a1a, #5a9e5a)", title: "Get your Anthropic API Key", why: "This is what makes your AI agents actually work on the live site. Like giving your agents their brain.", time: "5 min", steps: [{ text: "Go to", link: "https://console.anthropic.com", linkText: "console.anthropic.com" }, { text: "Sign up / log in with your email" }, { text: 'Go to "API Keys" in the left menu' }, { text: 'Click "Create Key" — name it "feelgood-production"' }, { text: "COPY the key immediately — you only see it once!" }, { text: "Go back to Netlify → Site Configuration → Environment Variables" }, { text: 'Add: Key = ANTHROPIC_API_KEY, Value = paste your key → Save 🎉' }], tip: "Never share this key or put it directly in your code. Netlify's environment variables keep it safe." },
  { phase: "PHASE 5", emoji: "🌍", color: "#bf8a2a", bg: "linear-gradient(135deg, #4a2d0a, #bf8a2a)", title: "You're live!", why: "This is the moment. FeelGood is on the internet — shareable with anyone in Innsbruck and beyond.", time: "Done!", steps: [{ text: "Your site is now live at your Netlify URL 🎉" }, { text: "Share the link with your Innsbruck hosts" }, { text: "Show it at InnCubator on May 11" }, { text: "Send the Host Onboarding link to outdoor guides" }, { text: "Watch the bookings come in 🏔️" }], tip: "Bookmark this page and come back any time you want to add features." },
];

export default function LaunchGuide() {
  const [completedSteps, setCompletedSteps] = useState({});
  const [openPhase, setOpenPhase] = useState(0);

  const toggleStep = (phaseIdx, stepIdx) => {
    const key = `${phaseIdx}-${stepIdx}`;
    setCompletedSteps(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const phaseComplete = (phaseIdx) => steps[phaseIdx].steps.every((_, i) => completedSteps[`${phaseIdx}-${i}`]);
  const totalStepsAll = steps.reduce((acc, s) => acc + s.steps.length, 0);
  const totalDone = Object.values(completedSteps).filter(Boolean).length;
  const pct = Math.round((totalDone / totalStepsAll) * 100);

  return (
    <div style={{ minHeight: "100vh", background: "#080808", fontFamily: "Georgia, serif", color: "#fff", paddingBottom: "4rem" }}>
      <header style={{ padding: "1.5rem 2rem", borderBottom: "1px solid #181818", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontSize: "1.4rem", fontWeight: "800" }}>Feel<span style={{ color: "#e8845a" }}>Good</span></span>
          <span style={{ fontSize: "0.65rem", color: "#444", marginLeft: "0.8rem", letterSpacing: "0.2em" }}>LAUNCH GUIDE</span>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "1.4rem", fontWeight: "700", color: "#e8845a" }}>{pct}%</div>
          <div style={{ fontSize: "0.7rem", color: "#444", letterSpacing: "0.1em" }}>COMPLETE</div>
        </div>
      </header>

      <div style={{ height: 3, background: "#111" }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg, #e8845a, #bf8a2a)", width: `${pct}%`, transition: "width 0.4s ease" }} />
      </div>

      <div style={{ padding: "2.5rem 2rem 2rem", background: "radial-gradient(ellipse at 20% 50%, rgba(232,132,90,0.08) 0%, transparent 60%)", borderBottom: "1px solid #181818" }}>
        <p style={{ color: "#444", fontSize: "0.75rem", letterSpacing: "0.2em", margin: "0 0 0.5rem" }}>FROM YOUR NOTEBOOK → TO THE INTERNET</p>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: "400", margin: "0 0 0.75rem", lineHeight: 1.15 }}>Go live in<br /><em style={{ color: "#e8845a" }}>5 steps.</em></h1>
        <p style={{ color: "#555", fontSize: "0.9rem", maxWidth: 480, margin: 0, lineHeight: 1.6 }}>No developer needed. No server needed. ⏱ Total time: ~30 minutes.</p>
      </div>

      <main style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {steps.map((phase, phaseIdx) => {
          const isOpen = openPhase === phaseIdx;
          const isDone = phaseComplete(phaseIdx);
          return (
            <div key={phaseIdx} style={{ marginBottom: "1rem", border: `1px solid ${isOpen ? "#2a2a2a" : "#181818"}`, borderRadius: "16px", overflow: "hidden", transition: "all 0.2s" }}>
              <div onClick={() => setOpenPhase(isOpen ? -1 : phaseIdx)} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.2rem 1.5rem", cursor: "pointer", background: isOpen ? "#111" : "#0d0d0d", transition: "background 0.2s" }}>
                <div style={{ width: 42, height: 42, borderRadius: "12px", background: isDone ? "rgba(90,158,90,0.2)" : isOpen ? phase.bg : "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0, border: isDone ? "1px solid rgba(90,158,90,0.4)" : "none", transition: "all 0.3s" }}>
                  {isDone ? "✓" : phase.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: "0.65rem", color: isDone ? "#5a9e5a" : "#444", letterSpacing: "0.15em" }}>{isDone ? "DONE ✓" : phase.phase}</p>
                  <h3 style={{ margin: "0.2rem 0 0", fontSize: "1rem", fontWeight: "400", color: isDone ? "#5a9e5a" : "#fff" }}>{phase.title}</h3>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "#333" }}>⏱ {phase.time}</span>
                  <span style={{ color: "#333", fontSize: "1.2rem", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>⌄</span>
                </div>
              </div>
              {isOpen && (
                <div style={{ padding: "0 1.5rem 1.5rem", background: "#111" }}>
                  <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: "10px", padding: "1rem", marginBottom: "1.2rem" }}>
                    <p style={{ margin: 0, color: "#666", fontSize: "0.85rem", lineHeight: 1.6 }}><span style={{ color: phase.color }}>Why this matters: </span>{phase.why}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.2rem" }}>
                    {phase.steps.map((step, stepIdx) => {
                      const key = `${phaseIdx}-${stepIdx}`;
                      const done = completedSteps[key];
                      return (
                        <div key={stepIdx} onClick={() => toggleStep(phaseIdx, stepIdx)} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.7rem 0.9rem", borderRadius: "10px", background: done ? "rgba(90,158,90,0.08)" : "#0f0f0f", border: `1px solid ${done ? "rgba(90,158,90,0.2)" : "#1a1a1a"}`, cursor: "pointer", transition: "all 0.2s" }}>
                          <div style={{ width: 20, height: 20, borderRadius: "6px", border: `2px solid ${done ? "#5a9e5a" : "#333"}`, background: done ? "#5a9e5a" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1, transition: "all 0.2s", fontSize: "0.7rem" }}>{done && "✓"}</div>
                          <p style={{ margin: 0, fontSize: "0.88rem", color: done ? "#5a9e5a" : "#aaa", lineHeight: 1.5, textDecoration: done ? "line-through" : "none", opacity: done ? 0.7 : 1, transition: "all 0.2s" }}>
                            {step.text}{" "}
                            {step.link && <a href={step.link} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{ color: phase.color, textDecoration: "none", fontStyle: "italic" }}>{step.linkText} ↗</a>}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ background: `linear-gradient(135deg, ${phase.color}11, transparent)`, border: `1px solid ${phase.color}22`, borderRadius: "10px", padding: "0.9rem 1rem", display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0 }}>💡</span>
                    <p style={{ margin: 0, color: "#666", fontSize: "0.82rem", lineHeight: 1.6 }}><span style={{ color: phase.color }}>Pro tip: </span>{phase.tip}</p>
                  </div>
                  {isDone && phaseIdx < steps.length - 1 && (
                    <button onClick={() => setOpenPhase(phaseIdx + 1)} style={{ marginTop: "1rem", width: "100%", padding: "0.8rem", background: "#e8845a", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontFamily: "Georgia, serif" }}>Next: {steps[phaseIdx + 1].title} →</button>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {pct === 100 && (
          <div style={{ marginTop: "2rem", padding: "2rem", background: "linear-gradient(135deg, #1a3a1a, #2d4a1a)", border: "1px solid rgba(90,158,90,0.3)", borderRadius: "16px", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🎉🏔️🌍</div>
            <h2 style={{ color: "#fff", fontWeight: "400", margin: "0 0 0.5rem", fontSize: "1.5rem" }}>FeelGood is <em style={{ color: "#5a9e5a" }}>live.</em></h2>
            <p style={{ color: "#888", margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>You just went from a notebook idea to a real platform on the internet.<br />Now go tell Innsbruck. 🚀</p>
          </div>
        )}

        <div style={{ marginTop: "1.5rem", padding: "1.2rem 1.5rem", background: "#0d0d0d", border: "1px solid #181818", borderRadius: "12px", display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <span style={{ fontSize: "1.2rem" }}>🩵</span>
          <p style={{ margin: 0, color: "#444", fontSize: "0.82rem", lineHeight: 1.6 }}><span style={{ color: "#666" }}>Stuck on any step?</span> Just come back to Claude and say exactly what's on your screen. We'll figure it out together.</p>
        </div>
      </main>
    </div>
  );
}
