import React, { useState } from 'react'
import { REP_DATA, ALL_OPPS, TOP25_STATUS } from '../data/dashboardData'
import { RepTop5 } from './Top5Card'
import { fmtM, getStatus, STAGE_BG } from './utils'

const STAGE_COLOR = {
  'Purchase Order / Awarded':{bg:'#e6f4ec',color:'#1a6b35'},
  'Production':              {bg:'#e6f4ec',color:'#1a6b35'},
  'Business Case':           {bg:'#dbeafe',color:'#1e40af'},
  'Request for Information': {bg:'#dbeafe',color:'#1e40af'},
  'Quote':                   {bg:'#fef9e6',color:'#7a5200'},
  'Design':                  {bg:'#fdf0e8',color:'#8b3d00'},
  'Prototype':               {bg:'#fdf0e8',color:'#8b3d00'},
  'Concept':                 {bg:'#f3e8ff',color:'#6b21a8'},
  'Request for Sample':      {bg:'#dbeafe',color:'#1e40af'},
  'Closed/Lost':             {bg:'#fde8e8',color:'#8b0000'},
  'Delivery':                {bg:'#e6f4ec',color:'#1a6b35'},
  'Contract':                {bg:'#e6f4ec',color:'#1a6b35'},
}

export default function TabRepDetail({ rep, setActiveTab }) {
  const d = REP_DATA[rep]
  const st = getStatus(d.days_since)
  const allOpps = ALL_OPPS[rep] || []
  const top25 = TOP25_STATUS[rep] || []
  const [oppFilter, setOppFilter] = useState('active')
  const [acctFilter, setAcctFilter] = useState('all')

  const activeOpps = allOpps.filter(o => o.stage !== 'Closed/Lost')
  const closedOpps = allOpps.filter(o => o.stage === 'Closed/Lost')
  const targetOpps = allOpps.filter(o => o.is_target && o.stage !== 'Closed/Lost')
  const shownOpps  = oppFilter==='active' ? activeOpps : oppFilter==='target' ? targetOpps : oppFilter==='closed' ? closedOpps : allOpps
  const activePipe = activeOpps.reduce((s,o) => s+o.amount, 0)
  const targetPipe = targetOpps.reduce((s,o) => s+o.amount, 0)
  const wtdPipe    = activeOpps.reduce((s,o) => s+o.amount*(o.prob/100), 0)

  const engagedAccts = top25.filter(a => a.engaged)
  const neverAccts   = top25.filter(a => !a.engaged)
  const shownAccts   = acctFilter==='engaged' ? engagedAccts : acctFilter==='never' ? neverAccts : top25

  const isGeoff = rep === 'Geoff Petrangelo'

  return (
    <div className="p-4 md:p-8 w-full">

      {isGeoff && (
        <div className="bg-yellow-50 border-l-4 border-kfi-orange p-3 mb-4 text-[11px] text-kfi-mgray">
          <strong>Note:</strong> Activities include Eric Cin's accounts — combined per management directive.
        </div>
      )}

      {/* Rep header */}
      <div className="bg-kfi-navy p-5 mb-5 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="font-headline text-2xl md:text-3xl text-white font-medium">{rep}</div>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <span className={`pill pill-${st.cls}`}>{st.label}</span>
            <span className="font-label text-[10px] uppercase tracking-wider text-white/50">
              Last activity: {d.last_act || 'None'}
            </span>
          </div>
        </div>
      </div>

      {/* KPI cards — Top 25 focused */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {[
          {label:'Target Penetration', value:d.penetration+'%',     highlight:true},
          {label:'Accounts Engaged',   value:`${d.n_accts}/${d.n_targets}`},
          {label:'Never Contacted',    value:d.never,               warn:d.never>15},
          {label:'Target Pipeline',    value:fmtM(targetPipe)},
          {label:'Total Activities',   value:d.n_acts},
        ].map((k,i) => (
          <div key={i} className={`bg-kfi-lgray p-4 border-t-2 border-kfi-navy ${i===2&&k.warn?'border-red-500 bg-red-50':''}`}>
            <div className="font-label text-[9px] uppercase tracking-widest text-kfi-mgray mb-1">{k.label}</div>
            <div className={`font-headline text-2xl ${k.highlight?'text-kfi-navy font-semibold':k.warn?'text-red-700':'text-kfi-navy'}`}>
              {k.value}
            </div>
          </div>
        ))}
      </div>

      {/* Top 5 pipeline card */}
      <div className="mb-6">
        <div className="section-header mt-0 mb-3">
          <div className="rule"/>
          <h2 className="text-base">Top 5 Target Accounts by Pipeline</h2>
        </div>
        <div className="max-w-sm">
          <RepTop5 rep={rep} setActiveTab={setActiveTab}/>
        </div>
      </div>

      {/* Top 25 accounts list */}
      <div className="section-header">
        <div className="rule"/>
        <h2>Top 25 Target Accounts</h2>
        <span className="ml-auto font-label text-[9px] text-kfi-mgray uppercase tracking-wider">
          {engagedAccts.length} engaged · {neverAccts.length} never contacted
        </span>
      </div>

      <div className="flex gap-2 mb-3 flex-wrap">
        {[
          {id:'all',     label:`All (${top25.length})`},
          {id:'engaged', label:`Engaged (${engagedAccts.length})`},
          {id:'never',   label:`Never Contacted (${neverAccts.length})`},
        ].map(f => (
          <button key={f.id} onClick={()=>setAcctFilter(f.id)}
            className={`font-label text-[9px] uppercase tracking-wider px-3 py-1.5 border transition-colors ${
              acctFilter===f.id?'bg-kfi-navy text-white border-kfi-navy':'bg-white text-kfi-mgray border-kfi-lgray hover:border-kfi-navy'
            }`}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto bg-white mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['#','Target Account Name','Engagement Status'].map(h=>(
                <th key={h} className="kfi-th">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shownAccts.map((a,i) => (
              <tr key={i} className={i%2===0?'':'bg-[#f7f7f7]'}>
                <td className="kfi-td font-label text-[10px] text-kfi-mgray w-10">{i+1}</td>
                <td className="kfi-td font-medium text-kfi-navy">{a.name}</td>
                <td className="kfi-td">
                  {a.engaged
                    ? <span className="pill pill-active">● Engaged — Activity Logged</span>
                    : <span className="pill pill-cold">○ Never Contacted</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="section-header mt-0">
            <div className="rule"/>
            <h2 className="text-base">Recent Activities</h2>
            <span className="ml-auto font-label text-[9px] text-kfi-mgray uppercase">Latest 12 of {d.n_acts}</span>
          </div>
          <div className="bg-white">
            {d.recent_acts.length === 0 ? (
              <div className="p-4 border-l-4 border-red-600 bg-red-50">
                <span className="font-label text-[10px] uppercase tracking-widest text-red-700">⚠ No activities logged — CRITICAL</span>
              </div>
            ) : d.recent_acts.map((a,i) => (
              <div key={i} className={`px-4 py-2.5 border-b border-kfi-lgray ${i%2===0?'':'bg-[#f9f9f9]'}`}>
                <div className="flex justify-between items-start gap-2">
                  <span className="font-medium text-kfi-navy text-[11px]">{a.company}</span>
                  <span className="font-label text-[9px] text-kfi-mgray uppercase whitespace-nowrap">{a.date}</span>
                </div>
                <div className="text-[10px] text-kfi-mgray mt-0.5 truncate">{a.subject}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Target account opps */}
        <div>
          <div className="section-header mt-0">
            <div className="rule"/>
            <h2 className="text-base">Target Account Opportunities</h2>
            <span className="ml-auto font-label text-[9px] text-kfi-mgray uppercase">{fmtM(targetPipe)}</span>
          </div>
          {targetOpps.length === 0 ? (
            <div className="bg-red-50 border-l-4 border-red-600 p-4">
              <span className="font-label text-[10px] uppercase tracking-widest text-red-700">No active pipeline on target accounts</span>
            </div>
          ) : (
            <div className="bg-white">
              {targetOpps.slice(0,8).map((o,i) => {
                const sc = STAGE_COLOR[o.stage] || {bg:'#f0f0f0',color:'#555'}
                return (
                  <div key={i} className={`px-4 py-2.5 border-b border-kfi-lgray ${i%2===0?'':'bg-[#f9f9f9]'}`}>
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-medium text-[11px] text-kfi-navy truncate flex-1">{o.name}</span>
                      <span className="font-headline text-sm text-kfi-navy flex-shrink-0">{fmtM(o.amount)}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-label text-[8px] px-1.5 py-0.5" style={{background:sc.bg,color:sc.color}}>{o.stage}</span>
                      <span className="text-[9px] text-kfi-mgray truncate">{o.account}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* All opps for this rep */}
      <div className="section-header">
        <div className="rule"/>
        <h2>All Opportunities</h2>
        <span className="ml-auto font-label text-[9px] text-kfi-mgray uppercase">
          {allOpps.length} total · <button className="text-kfi-orange hover:underline" onClick={()=>setActiveTab('all_opps')}>View all reps →</button>
        </span>
      </div>

      <div className="flex gap-2 mb-3 flex-wrap">
        {[
          {id:'active', label:`Active (${activeOpps.length})`},
          {id:'target', label:`Target Accts (${targetOpps.length})`},
          {id:'all',    label:`All (${allOpps.length})`},
          {id:'closed', label:`Closed/Lost (${closedOpps.length})`},
        ].map(f => (
          <button key={f.id} onClick={()=>setOppFilter(f.id)}
            className={`font-label text-[9px] uppercase tracking-wider px-3 py-1.5 border transition-colors ${
              oppFilter===f.id?'bg-kfi-navy text-white border-kfi-navy':'bg-white text-kfi-mgray border-kfi-lgray hover:border-kfi-navy'
            }`}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr>{['Account','Opportunity','Stage','Amount','Prob%','Wtd Amt','Created','Close','Target?'].map(h=>(
              <th key={h} className="kfi-th">{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {shownOpps.map((o,i) => {
              const sc=STAGE_COLOR[o.stage]||{bg:'#f0f0f0',color:'#555'}
              const wtd=o.amount*(o.prob/100)
              return (
                <tr key={i} className={`${i%2===0?'':'bg-[#f9f9f9]'} ${o.stage==='Closed/Lost'?'opacity-40':''}`}>
                  <td className="kfi-td text-[11px] font-medium text-kfi-navy max-w-[150px]"><div className="truncate">{o.account}</div></td>
                  <td className="kfi-td text-[11px] max-w-[220px]"><div className="truncate">{o.name}</div></td>
                  <td className="kfi-td whitespace-nowrap">
                    <span className="font-label text-[8px] uppercase tracking-wider px-1.5 py-0.5"
                      style={{background:sc.bg,color:sc.color}}>{o.stage}</span>
                  </td>
                  <td className="kfi-td text-right font-headline text-[13px] text-kfi-navy whitespace-nowrap">{o.amount>0?fmtM(o.amount):'—'}</td>
                  <td className="kfi-td text-right font-label text-[10px] text-kfi-mgray">{o.prob>0?o.prob+'%':'—'}</td>
                  <td className="kfi-td text-right font-label text-[11px]" style={{color:wtd>0?'#1a6b35':'#ccc'}}>{wtd>0?fmtM(wtd):'—'}</td>
                  <td className="kfi-td font-label text-[10px] text-kfi-mgray whitespace-nowrap">{o.created}</td>
                  <td className="kfi-td font-label text-[10px] text-kfi-mgray whitespace-nowrap">{o.close}</td>
                  <td className="kfi-td text-center">{o.is_target?<span className="font-label text-[8px] bg-green-100 text-green-800 px-1.5 py-0.5">★</span>:'—'}</td>
                </tr>
              )
            })}
            <tr className="bg-kfi-navy">
              <td colSpan={3} className="kfi-td text-white font-label text-[9px] uppercase">{shownOpps.filter(o=>o.stage!=='Closed/Lost').length} active</td>
              <td className="kfi-td text-right font-headline text-sm text-kfi-orange">{fmtM(shownOpps.filter(o=>o.stage!=='Closed/Lost').reduce((s,o)=>s+o.amount,0))}</td>
              <td className="kfi-td text-white/40 font-label text-[9px]">Active</td>
              <td className="kfi-td text-right font-headline text-sm text-green-300">{fmtM(shownOpps.reduce((s,o)=>s+o.amount*(o.prob/100),0))}</td>
              <td colSpan={3} className="kfi-td text-white/30 font-label text-[9px] uppercase">Wtd</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
