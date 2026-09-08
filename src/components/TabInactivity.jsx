import React from 'react'
import { REPS, REP_DATA, TOP25_STATUS } from '../data/dashboardData'
import { fmtM, getStatus } from './utils'

// Compute heatmap buckets dynamically from TOP25_STATUS + LastActivityDate
// Format: [≤7d, 8-14d, 15-30d, >30d, never, total]
const TODAY = new Date('2026-08-24')
const daysSince = (dateStr) => {
  if (!dateStr) return null
  const diff = Math.floor((TODAY - new Date(dateStr)) / 86400000)
  return diff
}

// We derive buckets from REP_DATA engagement data + TOP25_STATUS
// Since we don't store per-account LastActivityDate in the bundle,
// we use the rep-level days_since for the ≤7d bucket and never count from TOP25_STATUS
const HEAT = {}
REPS.forEach(rep => {
  const accounts = TOP25_STATUS[rep] || []
  const total    = accounts.length
  const never    = accounts.filter(a => !a.engaged).length
  const engaged  = total - never
  const d        = REP_DATA[rep]
  // Distribute engaged accounts across buckets using days_since as a proxy
  // ≤7d bucket = all engaged if rep is active ≤7d, else estimate
  const ds = d.days_since
  let b0=0,b1=0,b2=0,b3=0
  if (ds <= 7)       { b0 = engaged }
  else if (ds <= 14) { b1 = engaged }
  else if (ds <= 30) { b2 = engaged }
  else               { b3 = engaged }
  HEAT[rep] = [b0, b1, b2, b3, never, total]
})

export default function TabInactivity({ setActiveTab }) {
  const sorted = [...REPS].sort((a,b) => {
    const da=REP_DATA[a].days_since>=999?9999:REP_DATA[a].days_since
    const db=REP_DATA[b].days_since>=999?9999:REP_DATA[b].days_since
    return db-da
  })
  const counts = {active:0,warm:0,cooling:0,cold:0}
  REPS.forEach(r => { const st=getStatus(REP_DATA[r].days_since); if(st.cls in counts) counts[st.cls]++ })

  return (
    <div className="p-4 md:p-8 w-full">

      {/* Metric legend */}
      <div className="bg-blue-50 border border-blue-200 rounded px-3 py-2 mb-4 flex flex-wrap gap-x-4 gap-y-1">
        <span className="font-label text-[9px] text-blue-800"><strong>Days Since</strong> — calendar days since the rep's last completed task on any SF account. Source: Account.LastActivityDate (most recent). 0 = active today.</span>
        <span className="font-label text-[9px] text-blue-800"><strong>Status</strong> — 🟢 Active = ≤7 days · 🟡 Warm = 8–14 days · 🟠 Cooling = 15–30 days · 🔴 Cold = 31+ days or never.</span>
        <span className="font-label text-[9px] text-blue-800"><strong>Never Contacted</strong> — assigned target accounts with no SF activity date recorded at all.</span>
      </div>

      {/* Status summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-5">
        {[
          { label:'🟢 Active ≤7d',     value:counts.active,  border:'#1a6b35' },
          { label:'🟡 Warm 8–14d',     value:counts.warm,    border:'#b8860b' },
          { label:'🟠 Cooling 15–30d', value:counts.cooling, border:'#e06e3d' },
          { label:'🔴 Cold / None',    value:counts.cold,    border:'#c00000' },
        ].map((k,i) => (
          <div key={i} className="kpi-card" style={{borderTopColor:k.border}}>
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-sub">Reps</div>
          </div>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="section-header"><div className="rule"/><h2>Inactivity Aging</h2></div>
      <div className="md:hidden flex flex-col gap-2 mb-6">
        {sorted.map((rep,i) => {
          const d=REP_DATA[rep]; const st=getStatus(d.days_since)
          return (
            <div key={rep} className={`bg-white p-4 border-l-4`}
              style={{borderLeftColor: st.cls==='active'?'#1a6b35':st.cls==='warm'?'#b8860b':st.cls==='cooling'?'#e06e3d':'#c00000'}}
              onClick={()=>setActiveTab('rep_'+rep.replace(/ /g,'_'))}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-kfi-navy text-[13px]">{rep}</div>
                  <div className="font-label text-[9px] text-kfi-mgray uppercase mt-0.5">{d.last_act||'No activity'}</div>
                </div>
                <div className="text-right">
                  <span className={`pill pill-${st.cls}`}>{d.days_since>=999?'∞ days':d.days_since+'d ago'}</span>
                  <div className="font-headline text-base text-kfi-navy mt-1">{fmtM(d.pipe)}</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[{l:'Activities',v:d.n_acts},{l:'Opps',v:d.n_opps},{l:'Conv',v:d.n_accts>0?(d.n_opps/d.n_accts*100).toFixed(0)+'%':'—'}].map((k,j)=>(
                  <div key={j} className="bg-kfi-lgray px-2 py-1 text-center">
                    <div className="font-label text-[8px] uppercase text-kfi-mgray">{k.l}</div>
                    <div className="font-medium text-kfi-navy text-[12px]">{k.v}</div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto bg-white mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>{['Sales Rep','Last Activity','Days Since','Status','Activities','Opps','Pipeline','Conv Rate'].map(h=>(
              <th key={h} className="kfi-th">{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {sorted.map((rep,i) => {
              const d=REP_DATA[rep]; const st=getStatus(d.days_since)
              const conv=d.n_accts>0?(d.n_opps/d.n_accts*100).toFixed(0):0
              return (
                <tr key={rep} className={`${i%2===0?'':'bg-[#f7f7f7]'} cursor-pointer hover:bg-blue-50`}
                  onClick={()=>setActiveTab('rep_'+rep.replace(/ /g,'_'))}>
                  <td className="kfi-td font-medium text-kfi-navy">{rep}</td>
                  <td className="kfi-td font-label text-[11px]">{d.last_act||'—'}</td>
                  <td className="kfi-td"><span className={`pill pill-${st.cls}`}>{d.days_since>=999?'∞':d.days_since+'d'}</span></td>
                  <td className="kfi-td"><span className={`pill pill-${st.cls}`}>{st.label}</span></td>
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

      {/* Heatmap — desktop only with scroll hint on mobile */}
      <div className="section-header"><div className="rule"/><h2>Account Engagement Heatmap</h2></div>
      <div className="overflow-x-auto bg-white -mx-4 md:mx-0">
        <table className="min-w-[700px] w-full border-collapse">
          <thead>
            <tr>{['Sales Rep','≤7d 🟢','8–14d 🟡','15–30d 🟠','>30d 🔴','Never ⬜','Total','% Engaged','% Never'].map(h=>(
              <th key={h} className="kfi-th text-center">{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {REPS.map((rep,i) => {
              const hd=HEAT[rep]||[0,0,0,0,0,0]
              const engPct=hd[5]>0?(hd[5]-hd[4])/hd[5]:0
              const nevPct=hd[5]>0?hd[4]/hd[5]:0
              const HBGS=['#e6f4ec','#fef9e6','#fdf0e8','#fde8e8','#ececec']
              return (
                <tr key={rep} className={`${i%2===0?'':'bg-[#f7f7f7]'} cursor-pointer hover:bg-blue-50`}
                  onClick={()=>setActiveTab('rep_'+rep.replace(/ /g,'_'))}>
                  <td className="kfi-td font-medium text-kfi-navy text-[11px]">{rep}</td>
                  {hd.slice(0,5).map((v,k)=>(
                    <td key={k} className="kfi-td text-center font-label text-[11px] font-medium" style={{background:HBGS[k]}}>{v>0?v:'—'}</td>
                  ))}
                  <td className="kfi-td text-center font-label font-medium bg-kfi-lgray">{hd[5]}</td>
                  <td className="kfi-td text-center" style={{background:engPct>=0.4?'#e6f4ec':engPct>=0.2?'#fef9e6':'#fde8e8'}}>
                    <span style={{color:engPct>=0.4?'#1a6b35':engPct>=0.2?'#7a5200':'#8b0000',fontWeight:500,fontSize:11}}>{(engPct*100).toFixed(0)}%</span>
                  </td>
                  <td className="kfi-td text-center" style={{background:nevPct>=0.7?'#fde8e8':nevPct>=0.5?'#fef9e6':'#e6f4ec'}}>
                    <span style={{color:nevPct>=0.7?'#8b0000':nevPct>=0.5?'#7a5200':'#1a6b35',fontWeight:500,fontSize:11}}>{(nevPct*100).toFixed(0)}%</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="md:hidden font-label text-[8px] text-kfi-mgray uppercase tracking-wider mt-2 text-center">← Scroll to see full heatmap →</p>
    </div>
  )
}
