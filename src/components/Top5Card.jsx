import React, { useMemo } from 'react'
import { ALL_OPPS, REPS, REP_DATA } from '../data/dashboardData'
import { fmtM, getStatus } from './utils'

// Compute Top5 dynamically from ALL_OPPS — always accurate, never stale
function computeTop5(rep) {
  const opps = ALL_OPPS[rep] || []
  const acctMap = {}
  opps.forEach(o => {
    if (!acctMap[o.account]) acctMap[o.account] = { account: o.account, pipe: 0, n_opps: 0 }
    acctMap[o.account].pipe    += o.amount
    acctMap[o.account].n_opps += 1
  })
  return Object.values(acctMap).sort((a,b) => b.pipe - a.pipe).slice(0, 5)
}

function RepTop5({ rep, setActiveTab }) {
  const accounts = useMemo(() => computeTop5(rep), [rep])
  const d   = REP_DATA[rep]
  const st  = getStatus(d.days_since)
  const maxPipe = accounts.length > 0 ? accounts[0].pipe : 1

  // Navigate to the rep's own tab
  const goToRep = () => {
    if (setActiveTab) setActiveTab('rep_' + rep.replace(/ /g, '_'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (accounts.length === 0) {
    return (
      <div className="bg-white border-t-[3px] border-kfi-lgray p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="font-headline text-base text-kfi-navy font-medium cursor-pointer hover:text-kfi-orange"
            onClick={goToRep}>{rep}</div>
          <span className={`pill pill-${st.cls}`}>{st.label}</span>
        </div>
        <div className="text-[11px] text-kfi-mgray italic border-t border-kfi-lgray pt-3">
          No active pipeline on target accounts
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border-t-[3px] border-kfi-navy">
      {/* Card header */}
      <div className="px-4 pt-4 pb-3 flex items-start justify-between gap-2 border-b border-kfi-lgray">
        <div>
          <div className="font-label text-[8px] uppercase tracking-widest text-kfi-mgray">Sales Rep</div>
          <div className="font-headline text-base text-kfi-navy font-medium cursor-pointer hover:text-kfi-orange leading-tight mt-0.5"
            onClick={goToRep}>{rep}</div>
        </div>
        <div className="text-right flex-shrink-0">
          <span className={`pill pill-${st.cls}`}>{st.label}</span>
          <div className="font-headline text-lg text-kfi-navy mt-1">
            {fmtM(accounts.reduce((s, a) => s + a.pipe, 0))}
          </div>
          <div className="font-label text-[8px] uppercase tracking-wider text-kfi-mgray">Top 5 Pipeline</div>
        </div>
      </div>

      {/* Account rows */}
      <div className="px-4 py-2">
        {accounts.map((a, i) => {
          const barPct = maxPipe > 0 ? (a.pipe / maxPipe * 100) : 0
          const isTop  = i === 0
          return (
            <div key={i} className={`py-2 ${i < accounts.length - 1 ? 'border-b border-kfi-lgray' : ''}`}>
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`font-label text-[8px] flex-shrink-0 w-4 text-center ${isTop ? 'text-kfi-orange font-bold' : 'text-kfi-mgray'}`}>
                    {i + 1}
                  </span>
                  <span className={`text-[11px] truncate ${isTop ? 'font-medium text-kfi-navy' : 'text-kfi-dgray'}`}>
                    {a.account}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-label text-[8px] uppercase tracking-wider text-kfi-mgray">
                    {a.n_opps} opp{a.n_opps !== 1 ? 's' : ''}
                  </span>
                  <span className="font-headline text-sm text-kfi-navy">
                    {fmtM(a.pipe)}
                  </span>
                </div>
              </div>
              {/* Pipeline bar */}
              <div className="ml-6 h-1 bg-kfi-lgray overflow-hidden">
                <div className="h-full transition-all"
                  style={{
                    width: `${barPct}%`,
                    background: isTop ? '#e06e3d' : '#19315b',
                    opacity: 1 - i * 0.15,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer — routes to rep's specific tab */}
      <div className="px-4 py-2 border-t border-kfi-lgray cursor-pointer hover:bg-kfi-lgray transition-colors"
        onClick={goToRep}>
        <span className="font-label text-[8px] uppercase tracking-widest text-kfi-orange">
          View {rep.split(' ')[0]}'s full detail →
        </span>
      </div>
    </div>
  )
}

export default function Top5Grid({ setActiveTab }) {
  const allAccounts = useMemo(() => REPS.flatMap(r => computeTop5(r)), [])
  const teamTotal   = allAccounts.reduce((s, a) => s + a.pipe, 0)

  return (
    <div>
      <div className="flex items-center justify-between bg-kfi-navy px-5 py-3 mb-4">
        <div className="font-label text-[9px] uppercase tracking-widest text-white/60">
          Top 5 Accounts per Rep · Active Pipeline Only · Click any card to view rep detail
        </div>
        <div className="text-right">
          <div className="font-headline text-xl text-white">{fmtM(teamTotal)}</div>
          <div className="font-label text-[8px] uppercase tracking-wider text-white/40">
            Combined Top-5 Pipeline
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {REPS.map(rep => (
          <RepTop5 key={rep} rep={rep} setActiveTab={setActiveTab} />
        ))}
      </div>
    </div>
  )
}

export { RepTop5 }
