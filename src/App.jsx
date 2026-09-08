import React, { useState, useEffect } from 'react'
import { REPS } from './data/dashboardData'
import Header        from './components/Header'
import TabDashboard  from './components/TabDashboard'
import TabFindings   from './components/TabFindings'
import TabSummary    from './components/TabSummary'
import TabInactivity from './components/TabInactivity'
import TabAllOpps    from './components/TabAllOpps'
import TabPipeline   from './components/TabPipeline'
import TabRepDetail  from './components/TabRepDetail'
import TabLostDeals  from './components/TabLostDeals'
import TabForecast   from './components/TabForecast'
import ExportButton  from './components/ExportButton'

// ── Password gate ──────────────────────────────────────────────────────────────
const ACCESS_KEY   = 'kfi_auth_ts'
const SESSION_DAYS = 7
const CORRECT_PW   = 'KFIsales2026'

function isAuthed() {
  try {
    const ts = localStorage.getItem(ACCESS_KEY)
    if (!ts) return false
    return Date.now() - parseInt(ts) < SESSION_DAYS * 86400000
  } catch { return false }
}

function LoginScreen({ onAuth }) {
  const [pw, setPw]       = useState('')
  const [error, setError] = useState(false)
  const [show, setShow]   = useState(false)

  const attempt = () => {
    if (pw === CORRECT_PW) {
      try { localStorage.setItem(ACCESS_KEY, Date.now().toString()) } catch {}
      onAuth()
    } else {
      setError(true)
      setPw('')
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-kfi-navy flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo area */}
        <div className="text-center mb-8">
          <div className="font-headline text-white text-3xl font-bold tracking-tight mb-1">KFI</div>
          <div className="font-label text-white/60 text-[10px] uppercase tracking-widest">Kruger Family Industries</div>
          <div className="mt-4 w-12 h-[2px] bg-kfi-orange mx-auto"/>
        </div>

        {/* Card */}
        <div className="bg-white p-8">
          <h2 className="font-headline text-kfi-navy text-lg font-semibold mb-1">Sales Dashboard</h2>
          <p className="font-label text-[10px] text-kfi-mgray uppercase tracking-wider mb-6">Enter your access password to continue</p>

          <div className="relative mb-4">
            <input
              type={show ? 'text' : 'password'}
              value={pw}
              onChange={e => { setPw(e.target.value); setError(false) }}
              onKeyDown={e => e.key === 'Enter' && attempt()}
              placeholder="Password"
              className={`w-full border-2 px-4 py-3 font-label text-sm outline-none transition-colors ${
                error ? 'border-red-500 bg-red-50' : 'border-kfi-lgray focus:border-kfi-navy'
              }`}
              autoFocus
            />
            <button
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 font-label text-[10px] text-kfi-mgray hover:text-kfi-navy uppercase tracking-wider"
            >{show ? 'Hide' : 'Show'}</button>
          </div>

          {error && (
            <p className="font-label text-[10px] text-red-600 mb-3 uppercase tracking-wider">Incorrect password — try again</p>
          )}

          <button
            onClick={attempt}
            className="w-full bg-kfi-navy text-white font-label text-[11px] uppercase tracking-widest py-3 hover:bg-kfi-orange transition-colors"
          >Access Dashboard</button>

          <p className="font-label text-[9px] text-kfi-lgray text-center mt-4">
            Access is remembered for 7 days on this device
          </p>
        </div>

        <p className="font-label text-[9px] text-white/30 text-center mt-6 uppercase tracking-wider">
          KrugerFamilyIndustries.com · Portage, WI
        </p>
      </div>
    </div>
  )
}

// Three main pages
const PAGES = [
  { id: 'top25',    label: 'Top 25 Targets',      icon: '🎯' },
  { id: 'pipeline', label: 'Pipeline Intelligence',icon: '🔬' },
  { id: 'forecast', label: 'Forecast',             icon: '📆' },
  { id: 'lost',     label: 'Lost Deals',           icon: '📉' },
]

// Sub-tabs per page
const TOP25_TABS = [
  { id: 'dashboard',   label: '📈 Dashboard'  },
  { id: 'findings',    label: '⚡ Findings'   },
  { id: 'summary',     label: '📊 Summary'    },
  { id: 'inactivity',  label: '⏱ Inactivity' },
  { id: 'all_opps',    label: '💼 All Opps'   },
]

// ── Parse & write URL hash so the page survives refresh ──────────────────────
// Format: #page/subtab  or  #top25/rep/Rep+Name
function parseHash() {
  const hash = window.location.hash.replace('#','')
  const parts = hash.split('/')
  const page   = parts[0] || 'top25'
  const second = parts[1] || 'dashboard'
  const rep    = parts[2] ? decodeURIComponent(parts[2]) : null
  return { page, second, rep }
}
function writeHash(page, subTab, rep) {
  const base = `#${page}/${subTab}`
  window.location.hash = rep ? `${base}/${encodeURIComponent(rep)}` : base
}

export default function App() {
  const [authed, setAuthed] = useState(isAuthed())

  if (!authed) return <LoginScreen onAuth={() => setAuthed(true)} />

  const initial = parseHash()
  const validPage = PAGES.some(p => p.id === initial.page) ? initial.page : 'top25'
  const [page, setPage]           = useState(validPage)
  const [subTab, setSubTab]       = useState(initial.second || 'dashboard')
  const [activeRep, setActiveRep] = useState(initial.rep || null)

  // Keep URL in sync whenever state changes
  useEffect(() => {
    writeHash(page, subTab, activeRep)
  }, [page, subTab, activeRep])

  // Also respond to browser back/forward buttons
  useEffect(() => {
    const onHash = () => {
      const { page: p, second, rep } = parseHash()
      if (PAGES.some(pg => pg.id === p)) setPage(p)
      setSubTab(second || 'dashboard')
      setActiveRep(rep || null)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const setActiveTab = (tab) => {
    if (tab.startsWith('rep_')) {
      const rep = tab.replace('rep_','').replace(/_/g,' ')
      setActiveRep(rep)
      setPage('top25')
    } else {
      setActiveRep(null)
      setSubTab(tab)
    }
  }

  const goToPage = (p) => {
    setPage(p)
    setActiveRep(null)
    if (p === 'top25') setSubTab('dashboard')
    else setSubTab(p)
  }

  const activeRepObj = REPS.find(r => r === activeRep)

  return (
    <div className="min-h-screen flex flex-col bg-kfi-lgray">
      <Header />

      {/* ── TOP PAGE NAV ───────────────────────────────────────────────────── */}
      <nav className="bg-white border-b-2 border-kfi-lgray">
        <div className="flex items-center">
          {PAGES.map(p => (
            <button key={p.id} onClick={() => goToPage(p.id)}
              className={`flex items-center gap-2 px-5 md:px-8 py-3.5 font-label text-[10px] uppercase tracking-widest font-medium transition-all border-b-2 -mb-[2px] ${
                page===p.id
                  ? 'border-kfi-orange text-kfi-navy bg-white'
                  : 'border-transparent text-kfi-mgray hover:text-kfi-navy hover:border-kfi-lgray'
              }`}>
              <span className="text-sm">{p.icon}</span>
              <span className="hidden sm:inline">{p.label}</span>
              <span className="sm:hidden">{p.label.split(' ')[0]}</span>
            </button>
          ))}
          <div className="ml-auto flex items-center pr-4">
            <ExportButton />
          </div>
        </div>
      </nav>

      {/* ── TOP 25 SUB-TABS ────────────────────────────────────────────────── */}
      {page === 'top25' && (
        <div className="bg-kfi-navy">
          <div className="flex overflow-x-auto px-4 gap-0">
            {TOP25_TABS.map(t => (
              <button key={t.id} onClick={() => { setSubTab(t.id); setActiveRep(null) }}
                className={`tab-btn ${!activeRepObj && subTab===t.id ? 'active' : ''}`}>
                {t.label}
              </button>
            ))}
            <div className="w-px bg-white/10 mx-1 self-stretch my-2"/>
            {REPS.map(rep => {
              const id = rep
              const s = rep.split(' ')[0][0]+'. '+rep.split(' ').slice(-1)[0]
              return (
                <button key={id} onClick={() => { setActiveRep(rep); setSubTab('') }}
                  className={`tab-btn ${activeRepObj===rep ? 'active' : ''}`}>
                  {s}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT ───────────────────────────────────────────────────── */}
      <main className="flex-1">
        {page === 'top25' && !activeRepObj && subTab === 'dashboard'  && <TabDashboard  setActiveTab={setActiveTab} />}
        {page === 'top25' && !activeRepObj && subTab === 'findings'   && <TabFindings />}
        {page === 'top25' && !activeRepObj && subTab === 'summary'    && <TabSummary    setActiveTab={setActiveTab} />}
        {page === 'top25' && !activeRepObj && subTab === 'inactivity' && <TabInactivity setActiveTab={setActiveTab} />}
        {page === 'top25' && !activeRepObj && subTab === 'all_opps'   && <TabAllOpps    setActiveTab={setActiveTab} />}
        {page === 'top25' && activeRepObj  && <TabRepDetail rep={activeRepObj} setActiveTab={setActiveTab} />}
        {page === 'pipeline' && <TabPipeline setActiveTab={setActiveTab} />}
        {page === 'forecast' && <TabForecast />}
        {page === 'lost'     && <TabLostDeals />}
      </main>

      <footer className="bg-kfi-navy px-4 md:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
        <span className="font-label text-[8px] md:text-[9px] uppercase tracking-widest text-white/40">
          Kruger Family Industries · KrugerFamilyIndustries.com · Portage, WI 53901
        </span>
        <span className="font-label text-[8px] md:text-[9px] uppercase tracking-widest text-kfi-orange">
          Moving the Industry Forward
        </span>
      </footer>
    </div>
  )
}
