import React from 'react'
import { REPS, REP_DATA } from '../data/dashboardData'
import { fmtM, getStatus } from './utils'
import Top5Grid from './Top5Card'
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'

const sorted = [...REPS].sort((a, b) => REP_DATA[b].pipe - REP_DATA[a].pipe)
const maxPipe = Math.max(...REPS.map(r => REP_DATA[r].pipe))
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun']
const MO_KEYS = ['1','2','3','4','5','6']

export default function TabDashboard({ setActiveTab }) {
  const totPipe  = REPS.reduce((s,r) => s + REP_DATA[r].pipe, 0)
  const totActs  = REPS.reduce((s,r) => s + REP_DATA[r].n_acts, 0)
  const totAccts = REPS.reduce((s,r) => s + REP_DATA[r].n_accts, 0)
  const totTargets = REPS.reduce((s,r) => s + REP_DATA[r].n_targets, 0)
  const teamPen  = Math.round(totAccts / totTargets * 100)

  const pipeData = sorted.map(r => ({ name: r.split(' ').slice(-1)[0], Pipeline: +(REP_DATA[r].pipe/1e6).toFixed(2) }))
  const penData  = sorted.map(r => ({ name: r.split(' ').slice(-1)[0], Penetration: REP_DATA[r].penetration }))
  const trendData = MONTHS.map((m,i) => ({
    month: m,
    Total: REPS.reduce((s,r) => s + (REP_DATA[r].monthly[MO_KEYS[i]]||0), 0),
  }))

  return (
    <div className="p-4 md:p-8 w-full">

      {/* Metric legend */}
      <div className="bg-blue-50 border border-blue-200 rounded px-3 py-2 mb-4 flex flex-wrap gap-x-6 gap-y-1">
        <span className="font-label text-[9px] text-blue-800"><strong>Target Acct Penetration %</strong> — % of a rep's assigned Top 25 accounts that have any logged SF activity (LastActivityDate is set). 100% = every assigned account has been contacted at least once. <strong>Pipeline shown here is Top 25 target accounts only.</strong> Full pipeline (all accounts) is in the Pipeline Intelligence tab.</span>
        <span className="font-label text-[9px] text-blue-700 ml-auto cursor-pointer hover:text-blue-900 print:hidden" onClick={()=>window.print()}>🖨 Print / Export</span>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 mb-5">
        {[
          { label:'Target Pipeline',    value:fmtM(totPipe),    sub:'Top 25 target accounts only' },
          { label:'Team Penetration',   value:teamPen+'%',      sub:`${totAccts} of ${totTargets} engaged — any SF activity logged` },
          { label:'Total Activities',   value:totActs,          sub:'Completed tasks on target accounts' },
          { label:'Accts Engaged',      value:totAccts,         sub:`of ${totTargets} assigned` },
          { label:'Critical Alerts',    value:'3',              sub:'Act today', orange:true },
        ].map((k,i) => (
          <div key={i} className={`kpi-card ${i===4?'col-span-2 md:col-span-1':''}`}>
            <div className="kpi-label">{k.label}</div>
            <div className={`kpi-value ${k.orange?'text-kfi-orange':''}`}>{k.value}</div>
            <div className="kpi-sub hidden sm:block">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Ranking Table */}
      <div className="section-header">
        <div className="rule"/>
        <h2>Rep Performance — Top 25 Target Accounts</h2>
        <span className="hidden md:block ml-auto font-label text-[9px] uppercase tracking-widest text-kfi-mgray">
          Pipeline & penetration on assigned target accounts only
        </span>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col gap-2 mb-5">
        {sorted.map((rep,i) => {
          const d=REP_DATA[rep]; const st=getStatus(d.days_since)
          const pct=maxPipe>0?(d.pipe/maxPipe*100).toFixed(0):0
          return (
            <div key={rep} className="bg-white p-4 border-l-4 border-kfi-navy cursor-pointer hover:bg-blue-50"
              onClick={()=>setActiveTab('rep_'+rep.replace(/ /g,'_'))}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium text-kfi-navy text-[13px]">#{i+1} {rep}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`pill pill-${st.cls}`}>{st.label}</span>
                    <span className="font-label text-[9px] text-kfi-mgray">{d.penetration}% penetration</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-headline text-lg text-kfi-navy">{fmtM(d.pipe)}</div>
                  <div className="font-label text-[9px] text-kfi-mgray uppercase">Target pipeline</div>
                </div>
              </div>
              <div className="h-1.5 bg-kfi-lgray mb-2">
                <div className="h-full bg-kfi-navy" style={{width:`${pct}%`}}/>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {[
                  {l:'Acts',   v:d.n_acts},
                  {l:'Engaged',v:`${d.n_accts}/${d.n_targets}`},
                  {l:'Never',  v:d.never},
                  {l:'Days',   v:d.days_since>=999?'∞':d.days_since+'d'},
                ].map((k,j)=>(
                  <div key={j} className="bg-kfi-lgray px-1 py-1 text-center">
                    <div className="font-label text-[7px] uppercase text-kfi-mgray">{k.l}</div>
                    <div className="font-medium text-kfi-navy text-[11px]">{k.v}</div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto bg-white mb-5">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['#','Sales Rep','Target Pipeline','Penetration','Engaged/Total','Never Touched','Activities','Days Since','Status'].map(h=>(
                <th key={h} className="kfi-th">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((rep,i) => {
              const d=REP_DATA[rep]; const st=getStatus(d.days_since)
              const pct=maxPipe>0?(d.pipe/maxPipe*100).toFixed(0):0
              const penBg=d.penetration>=50?'#e6f4ec':d.penetration>=25?'#fef9e6':'#fde8e8'
              const penFc=d.penetration>=50?'#1a6b35':d.penetration>=25?'#7a5200':'#8b0000'
              const neverBg=d.never>18?'#fde8e8':d.never>10?'#fef9e6':'#e6f4ec'
              const neverFc=d.never>18?'#8b0000':d.never>10?'#7a5200':'#1a6b35'
              return (
                <tr key={rep} className={`${i%2===0?'':'bg-[#f7f7f7]'} hover:bg-blue-50 transition-colors`}>
                  <td className="kfi-td font-label text-[10px] text-kfi-mgray">#{i+1}</td>
                  <td className="kfi-td font-medium text-kfi-navy cursor-pointer hover:text-kfi-orange hover:underline"
                    onClick={()=>setActiveTab('rep_'+rep.replace(/ /g,'_'))}>{rep}</td>
                  <td className="kfi-td min-w-[180px]">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-kfi-lgray overflow-hidden">
                        <div className="h-full bg-kfi-navy" style={{width:`${pct}%`}}/>
                      </div>
                      <span className="font-headline text-sm text-kfi-navy min-w-[65px] text-right">{fmtM(d.pipe)}</span>
                    </div>
                  </td>
                  <td className="kfi-td text-center" style={{background:penBg}}>
                    <span style={{color:penFc,fontWeight:700,fontSize:12}}>{d.penetration}%</span>
                  </td>
                  <td className="kfi-td text-center font-medium">{d.n_accts}/{d.n_targets}</td>
                  <td className="kfi-td text-center" style={{background:neverBg}}>
                    <span style={{color:neverFc,fontWeight:700,fontSize:12}}>{d.never}</span>
                  </td>
                  <td className="kfi-td">{d.n_acts}</td>
                  <td className="kfi-td font-label text-[11px]">{d.days_since>=999?'—':d.days_since+'d'}</td>
                  <td className="kfi-td"><span className={`pill pill-${st.cls}`}>{st.label}</span></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 md:p-5 border-t-[3px] border-kfi-navy">
          <h3 className="font-headline text-base text-kfi-navy font-medium mb-3">Target Account Pipeline by Rep ($M)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={pipeData} margin={{left:-10}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
              <XAxis dataKey="name" tick={{fontFamily:"'Roboto Condensed'",fontSize:9}}/>
              <YAxis tickFormatter={v=>'$'+v+'M'} tick={{fontSize:9}}/>
              <Tooltip formatter={v=>['$'+v+'M','Pipeline']}/>
              <Bar dataKey="Pipeline" fill="#19315b"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 md:p-5 border-t-[3px] border-kfi-navy">
          <h3 className="font-headline text-base text-kfi-navy font-medium mb-1">Target Account Penetration by Rep (%)</h3>
          <p className="font-label text-[9px] text-kfi-mgray mb-3">% of each rep's assigned Top 25 accounts with at least one logged SF activity. Source: Account.LastActivityDate.</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={penData} margin={{left:-10}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
              <XAxis dataKey="name" tick={{fontFamily:"'Roboto Condensed'",fontSize:9}}/>
              <YAxis tickFormatter={v=>v+'%'} tick={{fontSize:9}} domain={[0,100]}/>
              <Tooltip formatter={v=>[v+'%','Penetration']}/>
              <Bar dataKey="Penetration" fill="#e06e3d"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 md:p-5 border-t-[3px] border-kfi-navy mb-4">
        <h3 className="font-headline text-base text-kfi-navy font-medium mb-3">Monthly Activity Trend — Jan–Jun 2026</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={trendData} margin={{left:-10}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
            <XAxis dataKey="month" tick={{fontSize:9}}/>
            <YAxis tick={{fontSize:9}}/>
            <Tooltip/>
            <Legend wrapperStyle={{fontSize:10}}/>
            <Line type="monotone" dataKey="Total" stroke="#19315b" strokeWidth={2} dot={{r:3}}/>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top 5 accounts */}
      <div className="section-header" style={{marginTop:'8px'}}>
        <div className="rule"/>
        <h2>Top 5 Target Accounts by Rep</h2>
        <span className="hidden md:block ml-auto font-label text-[9px] uppercase tracking-widest text-kfi-mgray">
          Active pipeline on Top 25 assigned target accounts only
        </span>
      </div>
      <Top5Grid setActiveTab={setActiveTab}/>
    </div>
  )
}
