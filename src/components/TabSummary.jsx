import React from 'react'
import { REPS, REP_DATA } from '../data/dashboardData'
import { fmtM, getStatus } from './utils'

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep']
const MO_KEYS = ['1','2','3','4','5','6','7','8','9']
const maxPipe = Math.max(...REPS.map(r => REP_DATA[r].pipe))

export default function TabSummary({ setActiveTab }) {
  const sorted   = [...REPS].sort((a,b) => REP_DATA[b].pipe - REP_DATA[a].pipe)
  const totPipe  = REPS.reduce((s,r) => s+REP_DATA[r].pipe, 0)
  const totActs  = REPS.reduce((s,r) => s+REP_DATA[r].n_acts, 0)
  const totOpps  = REPS.reduce((s,r) => s+REP_DATA[r].n_opps, 0)
  const totAccts = REPS.reduce((s,r) => s+REP_DATA[r].n_accts, 0)

  return (
    <div className="p-4 md:p-8 w-full">

      {/* Metric legend */}
      <div className="bg-blue-50 border border-blue-200 rounded px-3 py-2 mb-4 flex flex-wrap gap-x-4 gap-y-1 items-center">
        <span className="font-label text-[9px] text-blue-800"><strong>Conv Rate</strong> — Open opportunities ÷ engaged accounts. Shows how often activity converts to a tracked opp. E.g. 50% = 1 opp for every 2 accounts touched.</span>
        <span className="font-label text-[9px] text-blue-700 ml-auto cursor-pointer hover:text-blue-900 print:hidden" onClick={()=>window.print()}>🖨 Print / Export</span>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 mb-5">
        {[
          { label:'Total Pipeline',   value:fmtM(totPipe) },
          { label:'Total Opps',       value:totOpps },
          { label:'Total Activities', value:totActs },
          { label:'Accts Engaged',    value:totAccts },
          { label:'Team Conv Rate',   value:(totOpps/Math.max(totAccts,1)*100).toFixed(1)+'%', tip:'Opps ÷ engaged accts' },
        ].map((k,i) => (
          <div key={i} className={`kpi-card ${i===4?'col-span-2 md:col-span-1':''}`}>
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-value">{k.value}</div>
            {k.tip && <div className="font-label text-[8px] text-kfi-mgray">{k.tip}</div>}
          </div>
        ))}
      </div>

      {/* Scorecard — mobile cards */}
      <div className="section-header"><div className="rule"/><h2>Team Scorecard</h2></div>
      <div className="md:hidden flex flex-col gap-2 mb-6">
        {sorted.map((rep,i) => {
          const d = REP_DATA[rep]; const st = getStatus(d.days_since)
          const pct = maxPipe>0?(d.pipe/maxPipe*100).toFixed(0):0
          return (
            <div key={rep} className="bg-white p-4 border-l-4 border-kfi-navy cursor-pointer hover:bg-blue-50"
              onClick={() => setActiveTab('rep_'+rep.replace(/ /g,'_'))}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium text-kfi-navy text-[13px]">{rep}</div>
                  <span className={`pill pill-${st.cls} mt-1`}>{st.label}</span>
                </div>
                <div className="text-right">
                  <div className="font-headline text-lg text-kfi-navy">{fmtM(d.pipe)}</div>
                  <div className="font-label text-[9px] text-kfi-mgray uppercase">{d.n_opps} opps</div>
                </div>
              </div>
              <div className="h-1.5 bg-kfi-lgray">
                <div className="h-full bg-kfi-navy" style={{width:`${pct}%`}}/>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {[{l:'Acts',v:d.n_acts},{l:'Accts',v:d.n_accts},{l:'Days',v:d.days_since>=999?'∞':d.days_since+'d'}].map((k,j)=>(
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

      {/* Scorecard — desktop table */}
      <div className="hidden md:block overflow-x-auto bg-white mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>{['Sales Rep','Activities','Target Accts','Opps','Pipeline','Pipeline Bar','Conv Rate','Days Since','Status'].map(h=>(
              <th key={h} className="kfi-th">{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {sorted.map((rep,i) => {
              const d=REP_DATA[rep]; const st=getStatus(d.days_since)
              const pct=maxPipe>0?(d.pipe/maxPipe*100).toFixed(0):0
              const conv=d.n_accts>0?(d.n_opps/d.n_accts*100).toFixed(0):0
              return (
                <tr key={rep} className={`${i%2===0?'':'bg-[#f7f7f7]'}`}>
                  <td className="kfi-td font-medium text-kfi-navy cursor-pointer hover:text-kfi-orange hover:underline"
                    onClick={()=>setActiveTab('rep_'+rep.replace(/ /g,'_'))}>{rep}</td>
                  <td className="kfi-td">{d.n_acts}</td>
                  <td className="kfi-td">{d.n_accts}</td>
                  <td className="kfi-td">{d.n_opps}</td>
                  <td className="kfi-td font-headline text-sm text-kfi-navy">{fmtM(d.pipe)}</td>
                  <td className="kfi-td min-w-[100px]"><div className="h-2 bg-kfi-lgray"><div className="h-full bg-kfi-navy" style={{width:`${pct}%`}}/></div></td>
                  <td className="kfi-td">{conv}%</td>
                  <td className="kfi-td font-label text-[11px]">{d.days_since>=999?'—':d.days_since+'d'}</td>
                  <td className="kfi-td"><span className={`pill pill-${st.cls}`}>{st.label}</span></td>
                </tr>
              )
            })}
            <tr className="bg-kfi-navy">
              <td className="kfi-td text-white font-medium">Team Totals</td>
              <td className="kfi-td text-white font-medium">{totActs}</td>
              <td className="kfi-td text-white font-medium">{totAccts}</td>
              <td className="kfi-td text-white font-medium">{totOpps}</td>
              <td className="kfi-td font-headline text-sm text-kfi-orange font-medium">{fmtM(totPipe)}</td>
              <td colSpan={4} className="kfi-td text-white/30 font-label text-[9px] uppercase">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Monthly trend */}
      <div className="section-header"><div className="rule"/><h2>Monthly Activity Trend</h2></div>
      <div className="overflow-x-auto bg-white mb-6 -mx-4 md:mx-0">
        <table className="min-w-[600px] md:min-w-0 w-full border-collapse">
          <thead>
            <tr>{['Sales Rep',...MONTHS,'Total','Trend'].map(h=>(
              <th key={h} className="kfi-th">{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {REPS.map((rep,i) => {
              const mo=REP_DATA[rep].monthly
              const total=MO_KEYS.reduce((s,k)=>s+(mo[k]||0),0)
              const prev=mo['5']||0; const curr=mo['6']||0; const diff=curr-prev
              const tColor=diff>0?'#1a6b35':diff<0?'#8b0000':'#666'
              return (
                <tr key={rep} className={i%2===0?'':'bg-[#f7f7f7]'}>
                  <td className="kfi-td font-medium text-kfi-navy text-[11px] cursor-pointer hover:text-kfi-orange hover:underline"
                    onClick={()=>setActiveTab('rep_'+rep.replace(/ /g,'_'))}>{rep}</td>
                  {MO_KEYS.map(k=>{
                    const v=mo[k]||0
                    const bg=v>10?'#e6f4ec':v>0?'#fef9e6':'#fde8e8'
                    return <td key={k} className="kfi-td text-center font-label text-[10px]" style={{background:bg}}>{v||'—'}</td>
                  })}
                  <td className="kfi-td text-center font-label font-medium bg-kfi-lgray">{total}</td>
                  <td className="kfi-td text-center font-label text-[10px]" style={{color:tColor}}>
                    {diff>0?`▲ +${diff}`:diff<0?`▼ ${diff}`:'→'}
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
