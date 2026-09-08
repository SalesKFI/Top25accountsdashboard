import React, { useState } from 'react'
import { REPS } from '../data/dashboardData'

const MAIN_TABS = [
  { id: 'dashboard',  label: '📈 Dashboard' },
  { id: 'findings',   label: '⚡ Findings' },
  { id: 'summary',    label: '📊 Summary' },
  { id: 'inactivity', label: '⏱ Inactivity' },
  { id: 'all_opps',   label: '💼 All Opps' },
  { id: 'pipeline',   label: '🔬 Pipeline Intel' },
]

export default function TabNav({ activeTab, setActiveTab }) {
  const [repMenuOpen, setRepMenuOpen] = useState(false)
  const activeRep = REPS.find(r => 'rep_' + r.replace(/ /g, '_') === activeTab)

  return (
    <>
      <div className="hidden md:flex bg-kfi-navy gap-0 px-4 overflow-x-auto border-b border-white/10">
        {MAIN_TABS.map(t => (
          <button key={t.id} className={`tab-btn ${activeTab===t.id?'active':''}`}
            onClick={() => setActiveTab(t.id)}>{t.label}</button>
        ))}
        <div className="w-px bg-white/10 mx-1 self-stretch my-2"/>
        {REPS.map(rep => {
          const id = 'rep_' + rep.replace(/ /g, '_')
          const short = rep.split(' ')[0][0] + '. ' + rep.split(' ').slice(-1)[0]
          return (
            <button key={id} className={`tab-btn ${activeTab===id?'active':''}`}
              onClick={() => setActiveTab(id)}>{short}</button>
          )
        })}
      </div>
      <div className="md:hidden bg-kfi-navy border-b border-white/10">
        <div className="flex overflow-x-auto gap-0 px-2 border-b border-white/10">
          {MAIN_TABS.map(t => (
            <button key={t.id}
              className={`tab-btn text-[9px] px-2.5 py-2.5 ${activeTab===t.id?'active':''}`}
              onClick={() => { setActiveTab(t.id); setRepMenuOpen(false) }}>
              {t.label}
            </button>
          ))}
          <button
            className={`tab-btn text-[9px] px-2.5 py-2.5 flex items-center gap-1 ${activeRep?'active':''}`}
            onClick={() => setRepMenuOpen(o => !o)}>
            👤 {activeRep ? activeRep.split(' ').slice(-1)[0] : 'Reps'}
            <span className="text-[8px]">{repMenuOpen?'▲':'▼'}</span>
          </button>
        </div>
        {repMenuOpen && (
          <div className="grid grid-cols-2 gap-0 border-t border-white/10">
            {REPS.map(rep => {
              const id = 'rep_' + rep.replace(/ /g, '_')
              return (
                <button key={id}
                  className={`text-left px-3 py-2.5 font-label text-[9px] uppercase tracking-wider border-b border-white/10 transition-colors ${activeTab===id?'bg-kfi-orange text-white':'text-white/60 hover:text-white hover:bg-white/10'}`}
                  onClick={() => { setActiveTab(id); setRepMenuOpen(false) }}>
                  {rep}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
