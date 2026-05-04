# FeelGood App 🏔️

> Book local movement sessions in Innsbruck, matched to your vibe.

## What's inside

| File | What it is |
|------|-----------|
| `src/pages/feelgood-mvp.jsx` | Main booking platform |
| `src/pages/feelgood-vibe-matcher.jsx` | AI mood → session matcher |
| `src/pages/feelgood-host-onboarding.jsx` | AI host onboarding agent (Maya) |
| `src/pages/feelgood-hq.jsx` | Founder agent dashboard |
| `src/pages/feelgood-launch-guide.jsx` | Interactive launch checklist |
| `src/pages/feelgood-pitch.jsx` | InnCubator pitch deck |
| `src/pages/feelgood-master-map.jsx` | Master overview of everything |

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Netlify

1. Push this repo to GitHub
2. Connect repo in Netlify → "Add new site" → "Import existing project"
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variable: `ANTHROPIC_API_KEY` = your key from console.anthropic.com
6. Deploy! 🚀

Your site will be live at `your-site-name.netlify.app`

---

Built by Eva Körper · Innsbruck · May 2026 · InnCubator →
