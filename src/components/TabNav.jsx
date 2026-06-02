import React from 'react'
import { REPS } from '../data/dashboardData'

const MAIN_TABS = [
  { id: 'dashboard',  label: '📈 Dashboard' },
  { id: 'findings',   label: '⚡ Key Findings' },
  { id: 'summary',    label: '📊 Summary' },
  { id: 'inactivity', label: '⏱ Inactivity Aging' },
]

export default function TabNav({ activeTab, setActiveTab }) {
  return (
    <div className="bg-kfi-navy flex gap-0.5 px-6 overflow-x-auto">
      {MAIN_TABS.map(t => (
        <button
          key={t.id}
          className={`tab-btn ${activeTab === t.id ? 'active' : ''}`}
          onClick={() => setActiveTab(t.id)}
        >
          {t.label}
        </button>
      ))}
      {/* Divider */}
      <div className="w-px bg-white/10 mx-1 self-stretch" />
      {/* Rep tabs */}
      {REPS.map(rep => {
        const id = 'rep_' + rep.replace(/ /g, '_')
        const short = rep.split(' ')[0][0] + '. ' + rep.split(' ').slice(-1)[0]
        return (
          <button
            key={id}
            className={`tab-btn ${activeTab === id ? 'active' : ''}`}
            onClick={() => setActiveTab(id)}
          >
            {short}
          </button>
        )
      })}
    </div>
  )
}
