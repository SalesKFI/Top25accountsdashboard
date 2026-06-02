import React, { useState } from 'react'
import { REPS } from './data/dashboardData'
import Header    from './components/Header'
import TabNav    from './components/TabNav'
import TabDashboard  from './components/TabDashboard'
import TabFindings   from './components/TabFindings'
import TabSummary    from './components/TabSummary'
import TabInactivity from './components/TabInactivity'
import TabRepDetail  from './components/TabRepDetail'

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  // Derive which rep tab is active (if any)
  const activeRep = REPS.find(r => 'rep_' + r.replace(/ /g, '_') === activeTab)

  return (
    <div className="min-h-screen flex flex-col bg-kfi-lgray">
      <Header />
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1">
        {activeTab === 'dashboard'  && <TabDashboard  setActiveTab={setActiveTab} />}
        {activeTab === 'findings'   && <TabFindings />}
        {activeTab === 'summary'    && <TabSummary    setActiveTab={setActiveTab} />}
        {activeTab === 'inactivity' && <TabInactivity setActiveTab={setActiveTab} />}
        {activeRep                  && <TabRepDetail  rep={activeRep} />}
      </main>

      <footer className="bg-kfi-navy px-8 py-4 flex items-center justify-between">
        <span className="font-label text-[9px] uppercase tracking-widest text-white/40">
          Kruger Family Industries &nbsp;·&nbsp; KrugerFamilyIndustries.com &nbsp;·&nbsp; Portage, WI 53901
        </span>
        <span className="font-label text-[9px] uppercase tracking-widest text-kfi-orange">
          Moving the Industry Forward
        </span>
      </footer>
    </div>
  )
}
