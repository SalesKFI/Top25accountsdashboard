import React, { useState } from 'react'
import { REPS, ALL_OPPS, REP_DATA } from '../data/dashboardData'
import { fmtM, getStatus } from './utils'

const STAGE_COLOR = {
  'Purchase Order / Awarded': {bg:'#e6f4ec',color:'#1a6b35'},
  'Production':               {bg:'#e6f4ec',color:'#1a6b35'},
  'Business Case':            {bg:'#dbeafe',color:'#1e40af'},
  'Request for Information':  {bg:'#dbeafe',color:'#1e40af'},
  'Quote':                    {bg:'#fef9e6',color:'#7a5200'},
  'Design':                   {bg:'#fdf0e8',color:'#8b3d00'},
  'Prototype':                {bg:'#fdf0e8',color:'#8b3d00'},
  'Concept':                  {bg:'#f3e8ff',color:'#6b21a8'},
  'Request for Sample':       {bg:'#dbeafe',color:'#1e40af'},
  'Closed/Lost':              {bg:'#fde8e8',color:'#8b0000'},
  'Delivery':                 {bg:'#e6f4ec',color:'#1a6b35'},
  'Contract':                 {bg:'#e6f4ec',color:'#1a6b35'},
}

export default function TabAllOpps({ setActiveTab }) {
  const [repFilter, setRepFilter] = useState('All')
  const [stageFilter, setStageFilter] = useState('Active')
  const [targetOnly, setTargetOnly] = useState(true)

  // Flatten all opps
  const allOpps = REPS.flatMap(rep =>
    (ALL_OPPS[rep] || []).map(o => ({ ...o, rep }))
  )

  // Filters
  const filtered = allOpps.filter(o => {
    if (repFilter !== 'All' && o.rep !== repFilter) return false
    if (stageFilter === 'Active' && o.stage === 'Closed/Lost') return false
    if (stageFilter === 'Closed' && o.stage !== 'Closed/Lost') return false
    if (targetOnly && !o.is_target) return false
    return true
  })

  const totalPipe = filtered.reduce((s,o) => s + (o.stage !== 'Closed/Lost' ? o.amount : 0), 0)
  const totalWtd  = filtered.reduce((s,o) => s + o.amount * (o.prob/100), 0)

  const stages = ['Active','Closed','All']

  return (
    <div className="p-4 md:p-8 w-full">

      {/* Header */}
      <div className="section-header">
        <div className="rule"/>
        <h2>All Opportunities — All Reps</h2>
        <span className="ml-auto font-label text-[9px] uppercase tracking-widest text-kfi-mgray hidden md:block">
          {filtered.length} opps · {fmtM(totalPipe)} active · {fmtM(totalWtd)} weighted
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {/* Rep filter */}
        <div className="flex gap-1 flex-wrap">
          {['All',...REPS].map(r => (
            <button key={r}
              onClick={() => setRepFilter(r)}
              className={`font-label text-[9px] uppercase tracking-wider px-2.5 py-1.5 border transition-colors ${
                repFilter===r ? 'bg-kfi-navy text-white border-kfi-navy' : 'bg-white text-kfi-mgray border-kfi-lgray hover:border-kfi-navy'
              }`}>
              {r==='All' ? 'All Reps' : r.split(' ')[0][0]+'. '+r.split(' ').slice(-1)[0]}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-kfi-lgray hidden md:block"/>

        {/* Stage filter */}
        <div className="flex gap-1">
          {stages.map(s => (
            <button key={s}
              onClick={() => setStageFilter(s)}
              className={`font-label text-[9px] uppercase tracking-wider px-2.5 py-1.5 border transition-colors ${
                stageFilter===s ? 'bg-kfi-orange text-white border-kfi-orange' : 'bg-white text-kfi-mgray border-kfi-lgray hover:border-kfi-orange'
              }`}>
              {s}
            </button>
          ))}
        </div>

        {/* Target only toggle */}
        <button
          onClick={() => setTargetOnly(t => !t)}
          className={`font-label text-[9px] uppercase tracking-wider px-2.5 py-1.5 border transition-colors ${
            targetOnly ? 'bg-green-700 text-white border-green-700' : 'bg-white text-kfi-mgray border-kfi-lgray hover:border-green-700'
          }`}>
          {targetOnly ? '✓ Top 25 Only' : 'All Accounts'}
        </button>

        <span className="ml-auto font-label text-[9px] text-kfi-mgray md:hidden">
          {filtered.length} opps · {fmtM(totalPipe)}
        </span>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col gap-2">
        {filtered.map((o,i) => {
          const sc = STAGE_COLOR[o.stage] || {bg:'#f0f0f0',color:'#555'}
          return (
            <div key={i} className="bg-white p-3 border-l-4 border-kfi-navy">
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <div className="font-medium text-kfi-navy text-[11px] truncate">{o.name}</div>
                  <div className="text-[10px] text-kfi-mgray truncate">{o.account}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-headline text-sm text-kfi-navy">{fmtM(o.amount)}</div>
                  <span className="font-label text-[8px] px-1.5 py-0.5" style={{background:sc.bg,color:sc.color}}>{o.stage}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-label text-[8px] uppercase text-kfi-orange">{o.rep.split(' ')[0][0]}. {o.rep.split(' ').slice(-1)[0]}</span>
                {o.is_target && <span className="font-label text-[8px] bg-green-100 text-green-800 px-1.5 py-0.5">★ Target</span>}
                <span className="font-label text-[8px] text-kfi-mgray ml-auto">{o.created}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Sales Rep','Account','Opportunity','Stage','Amount','Prob','Wtd Amt','Created','Close Date','Target?'].map(h=>(
                <th key={h} className="kfi-th">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((o,i) => {
              const sc = STAGE_COLOR[o.stage] || {bg:'#f0f0f0',color:'#555'}
              const wtd = o.amount * (o.prob/100)
              return (
                <tr key={i} className={`${i%2===0?'':'bg-[#f7f7f7]'} hover:bg-blue-50 transition-colors`}>
                  <td className="kfi-td font-medium text-kfi-orange text-[11px] cursor-pointer hover:underline"
                    onClick={()=>setActiveTab('rep_'+o.rep.replace(/ /g,'_'))}>
                    {o.rep.split(' ')[0][0]}. {o.rep.split(' ').slice(-1)[0]}
                  </td>
                  <td className="kfi-td font-medium text-kfi-navy text-[11px] max-w-[160px]">
                    <div className="truncate">{o.account}</div>
                  </td>
                  <td className="kfi-td text-[11px] max-w-[220px]">
                    <div className="truncate">{o.name}</div>
                  </td>
                  <td className="kfi-td whitespace-nowrap">
                    <span className="font-label text-[8px] uppercase tracking-wider px-1.5 py-0.5"
                      style={{background:sc.bg,color:sc.color}}>{o.stage}</span>
                  </td>
                  <td className="kfi-td text-right font-headline text-[13px] text-kfi-navy whitespace-nowrap">
                    {o.amount>0?fmtM(o.amount):'—'}
                  </td>
                  <td className="kfi-td text-right font-label text-[10px] text-kfi-mgray">
                    {o.prob>0?o.prob+'%':'—'}
                  </td>
                  <td className="kfi-td text-right font-label text-[11px]" style={{color:wtd>0?'#1a6b35':'#ccc'}}>
                    {wtd>0?fmtM(wtd):'—'}
                  </td>
                  <td className="kfi-td font-label text-[10px] text-kfi-mgray whitespace-nowrap">{o.created}</td>
                  <td className="kfi-td font-label text-[10px] text-kfi-mgray whitespace-nowrap">{o.close}</td>
                  <td className="kfi-td text-center">
                    {o.is_target
                      ? <span className="font-label text-[8px] bg-green-100 text-green-800 px-1.5 py-0.5">★ Yes</span>
                      : <span className="font-label text-[8px] text-kfi-mgray">—</span>}
                  </td>
                </tr>
              )
            })}
            {/* Totals */}
            <tr className="bg-kfi-navy">
              <td colSpan={4} className="kfi-td text-white font-label text-[9px] uppercase tracking-wider">
                {filtered.filter(o=>o.stage!=='Closed/Lost').length} active opps
              </td>
              <td className="kfi-td text-right font-headline text-sm text-kfi-orange">{fmtM(totalPipe)}</td>
              <td className="kfi-td text-white/40 font-label text-[9px]">Active</td>
              <td className="kfi-td text-right font-headline text-sm text-green-300">{fmtM(totalWtd)}</td>
              <td colSpan={3} className="kfi-td text-white/30 font-label text-[9px] uppercase">Wtd total</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
