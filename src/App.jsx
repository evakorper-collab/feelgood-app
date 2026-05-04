import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import FeelGoodMVP from './pages/feelgood-mvp.jsx'
import VibeMatcher from './pages/feelgood-vibe-matcher.jsx'
import HostOnboarding from './pages/feelgood-host-onboarding.jsx'
import FeelGoodHQ from './pages/feelgood-hq.jsx'
import LaunchGuide from './pages/feelgood-launch-guide.jsx'
import MasterMap from './pages/feelgood-master-map.jsx'

const navLinks = [
  { path: '/', label: '🌐 Book' },
  { path: '/vibe', label: '🎯 Vibe Matcher' },
  { path: '/host', label: '🏠 Host Onboarding' },
  { path: '/hq', label: '🏢 Agent HQ' },
  { path: '/pitch', label: '🎤 Pitch Deck' },
  { path: '/map', label: '🗺️ Master Map' },
]

function Nav() {
  const location = useLocation()
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(8,8,8,0.95)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid #1a1a1a',
      display: 'flex',
      overflowX: 'auto',
      zIndex: 9999,
      padding: '0.4rem 0.5rem',
      gap: '0.25rem',
    }}>
      {navLinks.map(link => (
        <Link
          key={link.path}
          to={link.path}
          style={{
            padding: '0.5rem 0.9rem',
            borderRadius: '999px',
            background: location.pathname === link.path ? '#e8845a' : 'transparent',
            color: location.pathname === link.path ? '#fff' : '#555',
            textDecoration: 'none',
            fontSize: '0.72rem',
            whiteSpace: 'nowrap',
            fontFamily: 'Georgia, serif',
            letterSpacing: '0.02em',
            transition: 'all 0.2s',
            border: location.pathname === link.path ? 'none' : '1px solid #1a1a1a',
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<FeelGoodMVP />} />
          <Route path="/vibe" element={<VibeMatcher />} />
          <Route path="/host" element={<HostOnboarding />} />
          <Route path="/hq" element={<FeelGoodHQ />} />
          <Route path="/pitch" element={<PitchDeck />} />
          <Route path="/map" element={<MasterMap />} />
        </Routes>
        <Nav />
      </div>
    </BrowserRouter>
  )
}

// Lazy import for pitch deck (it has its own default export name)
import PitchDeckComponent from './pages/feelgood-pitch.jsx'
function PitchDeck() { return <PitchDeckComponent /> }
