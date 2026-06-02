import React from 'react'
import { REPS, REP_DATA } from '../data/dashboardData'
import { fmtM, getStatus } from './utils'

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun']
const MO_KEYS = ['1','2','3','4','5','6']
const maxPipe = Math.max(...REPS.map(r => REP_DATA[r].pipe))

export default function TabSummary({ setActiveTab }) {
  const sorted = [...REPS].sort((a, b) => REP_DATA[b].pipe - REP_DATA[a].pipe)
  const totPipe  = REPS.reduce((s, r) => s + REP_DATA[r].pipe, 0)
  const totActs  = REPS.reduce((s, r) => s + REP_DATA[r].n_acts, 0)
  const totOpps  = REPS.reduce((s, r) => s + REP_DATA[r].n_opps, 0)
  const totAccts = REPS.reduce((s, r) => s + REP_DATA[r].n_accts, 0)

  return (
    <div className="p-6 max-w-[1280px]">

      {/* KPI Row */}
      <div className="grid grid-cols-5 gap-3 mb-6">
        {[
          { label: 'Total Pipeline',   value: fmtM(totPipe) },
          { label: 'Total Opps',       value: totOpps },
          { label: 'Total Activities', value: totActs },
          { label: 'Accts Engaged',    value: totAccts },
          { label: 'Team Conv Rate',   value: (totOpps / Math.max(totAccts, 1) * 100).toFixed(1) + '%' },
        ].map((k, i) => (
          <div key={i} className="kpi-card">
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-value">{k.value}</div>
          </div>
        ))}
      </div>

      {/* Main scorecard */}
      <div className="section-header">
        <div className="rule" />
        <h2>Team Scorecard</h2>
        <span className="ml-auto font-label text-[9px] uppercase tracking-widest text-kfi-mgray">All reps consolidated</span>
      </div>

      <div className="overflow-x-auto bg-white mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Sales Rep','Activities','Target Accts','Opps','Pipeline','Pipeline Bar','Conv Rate','Days Since','Status'].map(h => (
                <th key={h} className="kfi-th">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((rep, i) => {
              const d   = REP_DATA[rep]
              const st  = getStatus(d.days_since)
              const pct = maxPipe > 0 ? (d.pipe / maxPipe * 100).toFixed(0) : 0
              const conv = d.n_accts > 0 ? (d.n_opps / d.n_accts * 100).toFixed(0) : 0
              return (
                <tr key={rep} className={i % 2 === 0 ? '' : 'bg-[#f7f7f7]'}>
                  <td
                    className="kfi-td font-medium text-kfi-navy cursor-pointer hover:text-kfi-orange hover:underline"
                    onClick={() => setActiveTab('rep_' + rep.replace(/ /g, '_'))}
                  >
                    {rep}
                  </td>
                  <td className="kfi-td">{d.n_acts}</td>
                  <td className="kfi-td">{d.n_accts}</td>
                  <td className="kfi-td">{d.n_opps}</td>
                  <td className="kfi-td font-headline text-sm text-kfi-navy">{fmtM(d.pipe)}</td>
                  <td className="kfi-td min-w-[120px]">
                    <div className="h-2 bg-kfi-lgray">
                      <div className="h-full bg-kfi-navy" style={{ width: `${pct}%` }} />
                    </div>
                  </td>
                  <td className="kfi-td">{conv}%</td>
                  <td className="kfi-td font-label text-[11px]">
                    {d.days_since >= 999 ? '—' : d.days_since + 'd'}
                  </td>
                  <td className="kfi-td">
                    <span className={`pill pill-${st.cls}`}>{st.label}</span>
                  </td>
                </tr>
              )
            })}
            {/* Totals */}
            <tr className="bg-kfi-navy">
              <td className="kfi-td text-white font-medium">Team Totals</td>
              <td className="kfi-td text-white font-medium">{totActs}</td>
              <td className="kfi-td text-white font-medium">{totAccts}</td>
              <td className="kfi-td text-white font-medium">{totOpps}</td>
              <td className="kfi-td font-headline text-sm text-kfi-orange font-medium">{fmtM(totPipe)}</td>
              <td colSpan={4} className="kfi-td text-white/40 font-label text-[9px] uppercase tracking-wider">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Monthly trend */}
      <div className="section-header">
        <div className="rule" />
        <h2>Monthly Activity Trend — Jan–Jun 2026</h2>
      </div>

      <div className="overflow-x-auto bg-white mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Sales Rep', ...MONTHS, 'Total', 'Trend'].map(h => (
                <th key={h} className="kfi-th">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {REPS.map((rep, i) => {
              const mo    = REP_DATA[rep].monthly
              const total = MO_KEYS.reduce((s, k) => s + (mo[k] || 0), 0)
              const prev  = mo['5'] || 0
              const curr  = mo['6'] || 0
              const diff  = curr - prev
              const tColor = diff > 0 ? '#1a6b35' : diff < 0 ? '#8b0000' : '#666'
              return (
                <tr key={rep} className={i % 2 === 0 ? '' : 'bg-[#f7f7f7]'}>
                  <td
                    className="kfi-td font-medium text-kfi-navy cursor-pointer hover:text-kfi-orange hover:underline"
                    onClick={() => setActiveTab('rep_' + rep.replace(/ /g, '_'))}
                  >
                    {rep}
                  </td>
                  {MO_KEYS.map(k => {
                    const v = mo[k] || 0
                    const bg = v > 10 ? '#e6f4ec' : v > 0 ? '#fef9e6' : '#fde8e8'
                    return (
                      <td key={k} className="kfi-td text-center font-label text-[11px]"
                        style={{ background: bg }}>
                        {v || '—'}
                      </td>
                    )
                  })}
                  <td className="kfi-td text-center font-label font-medium bg-kfi-lgray">{total}</td>
                  <td className="kfi-td text-center font-label text-[11px]" style={{ color: tColor }}>
                    {diff > 0 ? `▲ +${diff}` : diff < 0 ? `▼ ${diff}` : '→ Flat'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Conversion analysis */}
      <div className="section-header">
        <div className="rule" />
        <h2>Lead → Opportunity Conversion Analysis</h2>
      </div>

      <div className="overflow-x-auto bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Sales Rep','Target Accts','Opps','Pipeline','Conv Rate','Pipe / Acct','vs Team Avg'].map(h => (
                <th key={h} className="kfi-th">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((rep, i) => {
              const d     = REP_DATA[rep]
              const conv  = d.n_accts > 0 ? d.n_opps / d.n_accts * 100 : 0
              const ppa   = d.n_accts > 0 ? d.pipe / d.n_accts : 0
              const avgPpa = totPipe / Math.max(totAccts, 1)
              const vs    = avgPpa > 0 ? (ppa - avgPpa) / avgPpa * 100 : 0
              const convBg = conv >= 30 ? '#e6f4ec' : conv >= 10 ? '#fef9e6' : '#fde8e8'
              const convClr = conv >= 30 ? '#1a6b35' : conv >= 10 ? '#7a5200' : '#8b0000'
              return (
                <tr key={rep} className={i % 2 === 0 ? '' : 'bg-[#f7f7f7]'}>
                  <td
                    className="kfi-td font-medium text-kfi-navy cursor-pointer hover:text-kfi-orange hover:underline"
                    onClick={() => setActiveTab('rep_' + rep.replace(/ /g, '_'))}
                  >
                    {rep}
                  </td>
                  <td className="kfi-td">{d.n_accts}</td>
                  <td className="kfi-td">{d.n_opps}</td>
                  <td className="kfi-td font-headline text-sm text-kfi-navy">{fmtM(d.pipe)}</td>
                  <td className="kfi-td" style={{ background: convBg }}>
                    <span style={{ color: convClr, fontWeight: 500 }}>{conv.toFixed(0)}%</span>
                  </td>
                  <td className="kfi-td">{fmtM(ppa)}</td>
                  <td className="kfi-td">
                    <span className={`pill pill-${vs >= 0 ? 'pos' : 'neg'}`}>
                      {vs >= 0 ? `▲ +${vs.toFixed(0)}%` : `▼ ${vs.toFixed(0)}%`}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
