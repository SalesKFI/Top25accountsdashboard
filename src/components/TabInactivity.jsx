import React from 'react'
import { REPS, REP_DATA } from '../data/dashboardData'
import { fmtM, getStatus } from './utils'

const HEAT = {
  'Jack Subel':        [3,1,2,0,4,10],
  'Jacob Hacker':      [5,2,2,0,16,25],
  'Geoff Petrangelo':  [7,1,1,0,2,11],
  'Matt Olsen':        [2,0,0,0,26,28],
  'Kyle Turner':       [4,1,1,1,18,25],
  'Kent Buckingham':   [9,2,1,0,13,25],
  'Vonn McQuiston':    [1,1,1,0,22,25],
  'Mark Holmes':       [2,1,1,0,21,25],
  'Mariano Lobos':     [8,3,2,2,10,25],
  'Jake Heinecke':     [0,0,0,0,25,25],
}

export default function TabInactivity({ setActiveTab }) {
  const sorted = [...REPS].sort((a, b) => {
    const da = REP_DATA[a].days_since >= 999 ? 9999 : REP_DATA[a].days_since
    const db = REP_DATA[b].days_since >= 999 ? 9999 : REP_DATA[b].days_since
    return db - da
  })

  const counts = { active: 0, warm: 0, cooling: 0, cold: 0 }
  REPS.forEach(r => {
    const st = getStatus(REP_DATA[r].days_since)
    if (st.cls in counts) counts[st.cls]++
  })

  return (
    <div className="p-6 max-w-[1280px]">

      {/* Status summary */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: '🟢 Active ≤7d',    value: counts.active,  border: '#1a6b35' },
          { label: '🟡 Warm 8–14d',    value: counts.warm,    border: '#b8860b' },
          { label: '🟠 Cooling 15–30d', value: counts.cooling, border: '#e06e3d' },
          { label: '🔴 Cold / None',    value: counts.cold,    border: '#c00000' },
        ].map((k, i) => (
          <div key={i} className="kpi-card" style={{ borderTopColor: k.border }}>
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-sub">Reps</div>
          </div>
        ))}
      </div>

      {/* Inactivity Table */}
      <div className="section-header">
        <div className="rule" />
        <h2>Inactivity Aging — All Reps</h2>
        <span className="ml-auto font-label text-[9px] uppercase tracking-widest text-kfi-mgray">Sorted by days since last activity</span>
      </div>

      <div className="overflow-x-auto bg-white mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Sales Rep','Last Activity','Days Since','Status','Activities','Opps','Pipeline','Conv Rate'].map(h => (
                <th key={h} className="kfi-th">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((rep, i) => {
              const d   = REP_DATA[rep]
              const st  = getStatus(d.days_since)
              const conv = d.n_accts > 0 ? (d.n_opps / d.n_accts * 100).toFixed(0) : 0
              return (
                <tr key={rep} className={i % 2 === 0 ? '' : 'bg-[#f7f7f7]'}>
                  <td
                    className="kfi-td font-medium text-kfi-navy cursor-pointer hover:text-kfi-orange hover:underline"
                    onClick={() => setActiveTab('rep_' + rep.replace(/ /g, '_'))}
                  >
                    {rep}
                  </td>
                  <td className="kfi-td font-label text-[11px]">{d.last_act || '—'}</td>
                  <td className="kfi-td">
                    <span className={`pill pill-${st.cls}`}>
                      {d.days_since >= 999 ? '∞' : d.days_since + 'd'}
                    </span>
                  </td>
                  <td className="kfi-td">
                    <span className={`pill pill-${st.cls}`}>{st.label}</span>
                  </td>
                  <td className="kfi-td">{d.n_acts}</td>
                  <td className="kfi-td">{d.n_opps}</td>
                  <td className="kfi-td font-headline text-sm text-kfi-navy">{fmtM(d.pipe)}</td>
                  <td className="kfi-td">{conv}%</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Heatmap */}
      <div className="section-header">
        <div className="rule" />
        <h2>Account Engagement Heatmap</h2>
      </div>

      <div className="overflow-x-auto bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Sales Rep','≤7d 🟢','8–14d 🟡','15–30d 🟠','>30d 🔴','Never ⬜','Total','% Engaged','% Never'].map(h => (
                <th key={h} className="kfi-th text-center">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {REPS.map((rep, i) => {
              const hd = HEAT[rep] || [0,0,0,0,0,0]
              const engPct = hd[5] > 0 ? (hd[5] - hd[4]) / hd[5] : 0
              const nevPct = hd[5] > 0 ? hd[4] / hd[5] : 0
              const HBGS = ['#e6f4ec','#fef9e6','#fdf0e8','#fde8e8','#ececec']
              return (
                <tr key={rep} className={i % 2 === 0 ? '' : 'bg-[#f7f7f7]'}>
                  <td
                    className="kfi-td font-medium text-kfi-navy cursor-pointer hover:text-kfi-orange hover:underline"
                    onClick={() => setActiveTab('rep_' + rep.replace(/ /g, '_'))}
                  >
                    {rep}
                  </td>
                  {hd.slice(0, 5).map((v, k) => (
                    <td key={k} className="kfi-td text-center font-label text-[11px] font-medium"
                      style={{ background: HBGS[k] }}>
                      {v > 0 ? v : '—'}
                    </td>
                  ))}
                  <td className="kfi-td text-center font-label font-medium bg-kfi-lgray">{hd[5]}</td>
                  <td className="kfi-td text-center" style={{ background: engPct >= 0.4 ? '#e6f4ec' : engPct >= 0.2 ? '#fef9e6' : '#fde8e8' }}>
                    <span style={{ color: engPct >= 0.4 ? '#1a6b35' : engPct >= 0.2 ? '#7a5200' : '#8b0000', fontWeight: 500, fontSize: 11 }}>
                      {(engPct * 100).toFixed(0)}%
                    </span>
                  </td>
                  <td className="kfi-td text-center" style={{ background: nevPct >= 0.7 ? '#fde8e8' : nevPct >= 0.5 ? '#fef9e6' : '#e6f4ec' }}>
                    <span style={{ color: nevPct >= 0.7 ? '#8b0000' : nevPct >= 0.5 ? '#7a5200' : '#1a6b35', fontWeight: 500, fontSize: 11 }}>
                      {(nevPct * 100).toFixed(0)}%
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
