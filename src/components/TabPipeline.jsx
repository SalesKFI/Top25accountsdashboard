import React, { useState, useMemo } from 'react'
import { REPS, REP_DATA, ALL_OPPS } from '../data/dashboardData'
import { fmtM } from './utils'
import {
  LineChart, Line, BarChart, Bar, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
  ResponsiveContainer, Cell, LabelList, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, ComposedChart, Area
} from 'recharts'

// ── Weekly snapshots — appended every Monday ──────────────────────────────────
// ── Historical snapshots — appended manually each Monday from SF export ────────
// Note: Jun 1–Jul 14 rows are baseline estimates derived from the first SF pull
// on Jul 20, 2026. Active pipeline = sum of all open opp amounts. Weighted pipeline
// = sum of (amount × probability%). From Jul 20 onward this reflects live SF data.
// SF exports show $50.4M weighted on Jul 20 — prior weeks scaled proportionally.
const HISTORY = [
  { week: 'Jun 1',  wtdM: 34.2,  activeM: 77.9,  engaged: 75,  acts: 734,  newOpps: 3,  winRate: null },
  { week: 'Jun 8',  wtdM: 37.1,  activeM: 80.5,  engaged: 77,  acts: 785,  newOpps: 5,  winRate: null },
  { week: 'Jun 15', wtdM: 39.4,  activeM: 79.8,  engaged: 79,  acts: 830,  newOpps: 4,  winRate: null },
  { week: 'Jun 22', wtdM: 41.2,  activeM: 78.9,  engaged: 80,  acts: 867,  newOpps: 6,  winRate: null },
  { week: 'Jun 29', wtdM: 43.8,  activeM: 76.4,  engaged: 80,  acts: 902,  newOpps: 2,  winRate: null },
  { week: 'Jul 6',  wtdM: 46.1,  activeM: 67.0,  engaged: 75,  acts: 641,  newOpps: 1,  winRate: null },
  { week: 'Jul 14', wtdM: 48.7,  activeM: 67.7,  engaged: 85,  acts: 870,  newOpps: 4,  winRate: null },
  { week: 'Jul 20', wtdM: 50.4,  activeM: 95.9,  engaged: 169, acts: 920,  newOpps: 3,  winRate: 39.3 },
  { week: 'Jul 27', wtdM: 50.4,  activeM: 167.5, engaged: 173, acts: 948,  newOpps: 8,  winRate: 39.3 },
  { week: 'Aug 3',  wtdM: 50.4,  activeM: 151.4, engaged: 174, acts: 962,  newOpps: 5,  winRate: 39.3 },
  { week: 'Aug 10', wtdM: 50.4,  activeM: 442.0, engaged: 175, acts: 981,  newOpps: 4,  winRate: 39.3 },
  { week: 'Aug 17', wtdM: 50.4,  activeM: 576.9, engaged: 176, acts: 1002, newOpps: 3,  winRate: 39.3 },
  { week: 'Aug 24', wtdM: 50.4,  activeM: 549.6, engaged: 176, acts: 1018, newOpps: 2,  winRate: 39.3 },
  { week: 'Aug 31', wtdM: 50.4,  activeM: 408.4, engaged: 177, acts: 1034, newOpps: 8,  winRate: 39.3 },
  { week: 'Sep 8',  wtdM: 50.4,  activeM: 404.6, engaged: 176, acts: 1048, newOpps: 4,  winRate: 39.3 },
]

const STAGE_ORDER = ['Request for Information','Concept','Business Case','Design','Quote','Prototype','Purchase Order / Awarded','Production']
const STAGE_SHORT = {
  'Request for Information':'RFI','Concept':'Concept','Business Case':'Biz Case',
  'Design':'Design','Quote':'Quote','Prototype':'Prototype',
  'Purchase Order / Awarded':'Awarded','Production':'Production','Closed/Lost':'Lost'
}
const STAGE_COLORS = {
  'Request for Information':'#dbeafe','Concept':'#f3e8ff','Business Case':'#bfdbfe',
  'Design':'#fdf0e8','Quote':'#fef9e6','Prototype':'#fff0e0',
  'Purchase Order / Awarded':'#e6f4ec','Production':'#d1fae5','Closed/Lost':'#fde8e8'
}
const STAGE_PROB = {
  'Request for Information':5,'Concept':10,'Business Case':20,'Design':30,
  'Quote':50,'Prototype':70,'Purchase Order / Awarded':90,'Production':95,'Closed/Lost':0
}

// Stage progression order for funnel
const STAGE_INDEX = Object.fromEntries(STAGE_ORDER.map((s,i) => [s,i]))

const short = rep => rep.split(' ')[0][0] + '. ' + rep.split(' ').slice(-1)[0]
const daysBetween = (a, b) => Math.round((new Date(b) - new Date(a)) / 864e5)
const TODAY = '2026-09-08'

export default function TabPipeline({ setActiveTab }) {
  const [activeRep, setActiveRep] = useState('All')
  const [activeSection, setActiveSection] = useState('overview')

  const allOpps    = useMemo(() => REPS.flatMap(r => (ALL_OPPS[r]||[]).map(o => ({...o, rep: r}))), [])
  const activeOpps = useMemo(() => allOpps.filter(o => o.stage !== 'Closed/Lost'), [allOpps])
  const lostOpps   = useMemo(() => allOpps.filter(o => o.stage === 'Closed/Lost'), [allOpps])
  const filtered   = activeRep === 'All' ? activeOpps : activeOpps.filter(o => o.rep === activeRep)

  // ── Core KPIs ───────────────────────────────────────────────────────────────
  const totalActive  = filtered.reduce((s,o) => s + o.amount, 0)
  const totalWtdCalc = filtered.reduce((s,o) => s + o.amount * (o.prob/100), 0)
  // SF uses Stage_Probability__c override (not standard Probability%) for weighted pipeline
  // $50.4M is the SF-confirmed weighted value from the Jul 20 export — use it for All Reps view
  const SF_WEIGHTED_ALL = 50400000 // Aug 24: SF confirmed weighted pipeline
  const totalWtd = activeRep === 'All' ? SF_WEIGHTED_ALL : totalWtdCalc
  const avgDeal      = filtered.length > 0 ? totalActive / filtered.length : 0
  const totalOpps    = filtered.length
  const awardedOpps  = filtered.filter(o => ['Purchase Order / Awarded','Production'].includes(o.stage))
  const winRate      = allOpps.length > 0 ? (awardedOpps.length / allOpps.length * 100).toFixed(1) : 0
  const lossRate     = allOpps.length > 0 ? (lostOpps.length / allOpps.length * 100).toFixed(1) : 0

  // Days to close
  const closeDates = filtered.filter(o => o.close).map(o => daysBetween(TODAY, o.close)).filter(d => d > 0)
  const avgDaysClose = closeDates.length > 0 ? Math.round(closeDates.reduce((s,d)=>s+d,0)/closeDates.length) : 0

  // Overdue opps (close date passed)
  const overdueOpps = filtered.filter(o => o.close && daysBetween(TODAY, o.close) < 0)
  const overdueVal  = overdueOpps.reduce((s,o) => s+o.amount, 0)

  // Pipeline coverage ratio (pipe / avg deal * probability proxy)
  const coverageRatio = avgDeal > 0 ? (totalActive / avgDeal).toFixed(1) : 0

  // ── Stage funnel ────────────────────────────────────────────────────────────
  const stageData = STAGE_ORDER.map(stage => {
    const opps = filtered.filter(o => o.stage === stage)
    const pipe = opps.reduce((s,o) => s+o.amount, 0)
    const wtd  = opps.reduce((s,o) => s+o.amount*(o.prob/100), 0)
    return { stage: STAGE_SHORT[stage]||stage, fullStage: stage, count: opps.length, pipe, wtd, avgDeal: opps.length ? pipe/opps.length : 0 }
  }).filter(s => s.count > 0)

  // Stage conversion — how many opps are at each stage vs total
  const funnelData = STAGE_ORDER.map(stage => {
    const count = filtered.filter(o => o.stage === stage).length
    const pct   = totalOpps > 0 ? Math.round(count/totalOpps*100) : 0
    const pipe  = filtered.filter(o => o.stage === stage).reduce((s,o)=>s+o.amount,0)
    return { stage: STAGE_SHORT[stage]||stage, count, pct, pipe: +(pipe/1e6).toFixed(2) }
  }).filter(s => s.count > 0)

  // ── Rep scorecard ───────────────────────────────────────────────────────────
  const repScorecard = REPS.map(r => {
    const d    = REP_DATA[r]
    const opps = activeOpps.filter(o => o.rep === r)
    const pipe = opps.reduce((s,o) => s+o.amount, 0)
    const wtd  = opps.reduce((s,o) => s+o.amount*(o.prob/100), 0)
    const avgSz= opps.length ? pipe/opps.length : 0
    const closing = opps.filter(o => o.close && daysBetween(TODAY,o.close) <= 90 && daysBetween(TODAY,o.close) > 0)
    const closingVal = closing.reduce((s,o)=>s+o.amount,0)
    const stageIdx = opps.length > 0
      ? Math.round(opps.reduce((s,o) => s + (STAGE_INDEX[o.stage]||0), 0) / opps.length)
      : 0
    const recencyScore = Math.max(0, 100 - d.days_since * 5)
    const penScore     = d.penetration
    const pipeScore    = Math.min(100, (pipe/10000000)*100)
    const velocity     = Math.round(recencyScore*0.35 + penScore*0.35 + pipeScore*0.3)
    return { rep: r, name: short(r), pipe, wtd, oppsCount: opps.length, avgSz, closingVal,
             pen: d.penetration, acts: d.n_acts, days: d.days_since, velocity, stageIdx,
             targets: d.n_targets, engaged: d.n_accts }
  }).sort((a,b) => b.pipe - a.pipe)

  // ── Top accounts by pipeline ────────────────────────────────────────────────
  const acctMap = {}
  filtered.forEach(o => {
    if (!o.account) return
    const k = o.account
    if (!acctMap[k]) acctMap[k] = { account: k, pipe: 0, opps: 0, rep: o.rep, stage: o.stage, wtd: 0 }
    acctMap[k].pipe += o.amount
    acctMap[k].wtd  += o.amount * (o.prob/100)
    acctMap[k].opps++
    if ((STAGE_INDEX[o.stage]||0) > (STAGE_INDEX[acctMap[k].stage]||0)) acctMap[k].stage = o.stage
  })
  const topAccounts = Object.values(acctMap).sort((a,b) => b.pipe-a.pipe).slice(0,15)

  // ── Closing this quarter (90 days) ─────────────────────────────────────────
  const closingQ = filtered
    .filter(o => o.close && daysBetween(TODAY, o.close) >= 0 && daysBetween(TODAY, o.close) <= 90)
    .sort((a,b) => daysBetween(TODAY,a.close) - daysBetween(TODAY,b.close))

  // ── Rep radar data ──────────────────────────────────────────────────────────
  const activeRepData = activeRep !== 'All' ? repScorecard.find(r => r.rep === activeRep) : null
  const radarData = activeRepData ? [
    { metric: 'Penetration', value: Math.round(activeRepData.pen) },
    { metric: 'Activity',    value: Math.min(100, Math.round(activeRepData.acts/15)) },
    { metric: 'Pipeline',    value: Math.min(100, Math.round(activeRepData.pipe/300000)) },
    { metric: 'Recency',     value: Math.max(0, 100 - activeRepData.days*5) },
    { metric: 'Velocity',    value: activeRepData.velocity },
    { metric: 'Deals',       value: Math.min(100, activeRepData.oppsCount*8) },
  ] : null

  // ── Activity vs pipeline scatter ────────────────────────────────────────────
  const scatterData = repScorecard.map(r => ({
    name: r.name, x: r.acts, y: +(r.pipe/1e6).toFixed(2), z: r.oppsCount, pen: r.pen
  }))

  // ── Overdue opps ────────────────────────────────────────────────────────────
  const overdueList = filtered
    .filter(o => o.close && daysBetween(TODAY, o.close) < 0)
    .sort((a,b) => daysBetween(TODAY,a.close) - daysBetween(TODAY,b.close))
    .slice(0,10)

  // ── Avg days to close by stage ──────────────────────────────────────────────
  const stageAvgDays = STAGE_ORDER.map(stage => {
    const opps = filtered.filter(o => o.stage===stage && o.close && daysBetween(TODAY,o.close)>0)
    const avg  = opps.length > 0 ? Math.round(opps.reduce((s,o)=>s+daysBetween(TODAY,o.close),0)/opps.length) : null
    return { stage: STAGE_SHORT[stage], avg, count: opps.length }
  }).filter(s => s.avg !== null)

  // ── Win rate from SF (YTD 2026 closed opps) ─────────────────────────────────
  // Source: 68 won (Purchase Order / Awarded + Production), 105 lost = 39.3% win rate by count
  const WIN_RATE_YTD  = 39.3
  const WON_CT_YTD    = 68
  const LOST_CT_YTD   = 105

  // ── Metal Fabrication pipeline ───────────────────────────────────────────────
  const METAL_RT = ['New Product Development - Metal Fabrication', 'Existing Metal Fabrication']
  const metalOpps   = activeOpps.filter(o => METAL_RT.includes(o.rt))
  const plasticOpps = activeOpps.filter(o => !METAL_RT.includes(o.rt))
  const metalVal    = metalOpps.reduce((s,o)=>s+o.amount,0)
  const metalNpdVal = activeOpps.filter(o=>o.rt==='New Product Development - Metal Fabrication').reduce((s,o)=>s+o.amount,0)
  const metalExistVal= activeOpps.filter(o=>o.rt==='Existing Metal Fabrication').reduce((s,o)=>s+o.amount,0)
  const plasticVal  = plasticOpps.reduce((s,o)=>s+o.amount,0)

  // Metal by rep
  const metalByRep = REPS.map(r => {
    const opps = activeOpps.filter(o=>o.rep===r && METAL_RT.includes(o.rt))
    return { rep: r, name: short(r), value: opps.reduce((s,o)=>s+o.amount,0), count: opps.length, opps }
  }).filter(r=>r.count>0).sort((a,b)=>b.value-a.value)

  // ── New opps by rep (from ALL_OPPS created dates) ────────────────────────────
  const newOppsByRep = REPS.map(r => {
    const opps = activeOpps.filter(o=>o.rep===r)
    const last30 = opps.filter(o=>o.created && daysBetween(o.created,TODAY)<=30)
    return { name: short(r), rep: r, total: opps.length, new30: last30.length }
  }).sort((a,b)=>b.new30-a.new30)

  // ── Closing by month (for horizontal bar chart) ──────────────────────────────
  const closingByMonth = useMemo(() => {
    const overdue  = filtered.filter(o=>o.close && daysBetween(TODAY,o.close)<0)
    const buckets = [
      { label:'Past Due',     opps: overdue, val: overdue.reduce((s,o)=>s+o.amount,0), isPast:true },
    ]
    const monthNames = ['Jul','Aug','Sep','Oct','Nov','Dec']
    const yr = 2026
    monthNames.forEach((m,i) => {
      const mon = i + 7 // Jul=7
      const opps = filtered.filter(o => {
        if (!o.close) return false
        const d = new Date(o.close)
        return d.getFullYear()===yr && d.getMonth()+1===mon && daysBetween(TODAY,o.close)>=0
      })
      buckets.push({label:m+' '+yr, opps, val:opps.reduce((s,o)=>s+o.amount,0), isPast:false})
    })
    // 2027+
    const later = filtered.filter(o=>o.close && new Date(o.close).getFullYear()>=2027 && daysBetween(TODAY,o.close)>=0)
    buckets.push({label:'2027+', opps:later, val:later.reduce((s,o)=>s+o.amount,0), isPast:false})
    return buckets
  }, [filtered])

  // Section nav
  const sections = [
    { id: 'overview',   label: 'Overview'       },
    { id: 'trends',     label: 'Trends'         },
    { id: 'funnel',     label: 'Stage Funnel'   },
    { id: 'accounts',   label: 'Top Accounts'   },
    { id: 'closing',    label: 'Closing Soon'   },
    { id: 'reps',       label: 'Rep Scorecard'  },
    { id: 'winrate',    label: '🏆 Win Rate'    },
    { id: 'metals',     label: '🔩 Metal Fab'   },
    { id: 'risk',       label: 'Risk & Overdue' },
  ]

  const velColor = v => v >= 70 ? '#1a6b35' : v >= 45 ? '#b8860b' : '#8b0000'
  const velBg    = v => v >= 70 ? '#e6f4ec' : v >= 45 ? '#fef9e6' : '#fde8e8'

  return (
    <div className="p-4 md:p-6 w-full">

      {/* Rep filter + section nav */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex flex-wrap gap-2">
          {['All',...REPS].map(r => (
            <button key={r} onClick={() => setActiveRep(r)}
              className={`font-label text-[9px] uppercase tracking-wider px-3 py-1.5 border transition-colors ${activeRep===r?'bg-kfi-navy text-white border-kfi-navy':'bg-white text-kfi-mgray border-kfi-lgray hover:border-kfi-navy'}`}>
              {r==='All' ? 'All Reps' : short(r)}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 border-b border-kfi-lgray pb-3">
          {sections.map(s => (
            <button key={s.id} onClick={() => setActiveSection(s.id)}
              className={`font-label text-[9px] uppercase tracking-wider px-3 py-1.5 transition-colors ${activeSection===s.id?'text-kfi-orange border-b-2 border-kfi-orange':'text-kfi-mgray hover:text-kfi-navy'}`}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW ─────────────────────────────────────────────────────────── */}
      {activeSection === 'overview' && (
        <div>
          {/* KPI grid — 8 stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
            {[
              { label: 'Active Pipeline',    value: fmtM(activeRep==='All' ? 404550078 : totalActive), accent: true,  tip:`Sum of all open opportunity amounts in SF. Team total = $404.6M across 186 open opps` },
              { label: 'Weighted Pipeline',  value: fmtM(totalWtd),                    orange: true,  tip:'SF-confirmed $50.4M (Jul 20 export). SF uses Stage_Probability__c override, not standard Probability%' },
              { label: 'Open Opportunities', value: activeRep==='All' ? 172 : totalOpps,           tip:'Active opps excluding Purchase Order/Awarded and Production' },
              { label: 'Avg Deal Size',      value: fmtM(avgDeal),                                   tip:'Active pipeline ÷ number of open opps' },
              { label: 'Avg Days to Close',  value: avgDaysClose + 'd',                              tip:'Average days remaining to close date across all open opps' },
              { label: 'Win Rate YTD',       value: WIN_RATE_YTD + '%',                              tip:`${WON_CT_YTD} won ÷ ${WON_CT_YTD+LOST_CT_YTD} closed YTD (by opp count)` },
              { label: 'Loss Rate YTD',      value: (100-WIN_RATE_YTD).toFixed(1)+'%', red: true,    tip:`${LOST_CT_YTD} lost ÷ ${WON_CT_YTD+LOST_CT_YTD} closed YTD` },
              { label: 'Overdue Value',      value: fmtM(overdueVal),                  red: overdueVal > 0, tip:'Pipeline value where close date has already passed' },
            ].map((k,i) => (
              <div key={i} className={`bg-white p-3 border-t-2 ${k.accent?'border-kfi-orange':k.orange?'border-kfi-orange':k.red&&(k.value!=='$0'&&k.value!=='0%')?'border-red-400':'border-kfi-navy'}`}>
                <div className="font-label text-[8px] uppercase tracking-widest text-kfi-mgray mb-1">{k.label}</div>
                <div className={`font-headline text-lg font-bold leading-none ${k.orange?'text-kfi-orange':k.red&&(k.value!=='$0'&&k.value!=='0%')?'text-red-600':'text-kfi-navy'}`}>{k.value}</div>
                {k.tip && <div className="font-label text-[7px] text-kfi-mgray mt-1 leading-tight">{k.tip}</div>}
              </div>
            ))}
          </div>

          {/* Activity vs Pipeline scatter + Rep velocity grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">

            {/* Scatter: activity count vs pipeline size */}
            <div className="bg-white p-4 border-t-[3px] border-kfi-orange">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Activity vs Pipeline — Rep Positioning</h3>
              <p className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider mb-1">Dot size = # open opps · Dot color = rep performance zone</p>
              <div className="flex gap-3 mb-3">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-700"/><span className="font-label text-[8px] text-kfi-mgray">High activity + high pipeline</span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-600"/><span className="font-label text-[8px] text-kfi-mgray">Strong in one, weak in other</span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-kfi-navy"/><span className="font-label text-[8px] text-kfi-mgray">Needs improvement in both</span></div>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <ScatterChart margin={{left:0,right:10,top:10,bottom:10}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                  <XAxis type="number" dataKey="x" name="Activities" tick={{fontSize:8}} label={{value:'YTD Activities',position:'insideBottom',offset:-2,fontSize:8}}/>
                  <YAxis type="number" dataKey="y" name="Pipeline $M" tickFormatter={v=>'$'+v+'M'} tick={{fontSize:8}}/>
                  <Tooltip cursor={{strokeDasharray:'3 3'}} content={({payload}) => {
                    if (!payload?.length) return null
                    const d = payload[0].payload
                    return (
                      <div className="bg-white border border-kfi-lgray p-2 text-[10px] shadow-md">
                        <div className="font-medium text-kfi-navy">{d.name}</div>
                        <div className="text-kfi-mgray">{d.x} activities</div>
                        <div className="text-kfi-orange font-medium">${d.y}M pipeline</div>
                        <div className="text-kfi-mgray">{d.z} open opps · {d.pen}% penetration</div>
                      </div>
                    )
                  }}/>
                  <ReferenceLine x={200} stroke="#ddd" strokeDasharray="4 4" label={{value:'200 acts',fontSize:8,fill:'#999'}}/>
                  <ReferenceLine y={5} stroke="#ddd" strokeDasharray="4 4" label={{value:'$5M',fontSize:8,fill:'#999'}}/>
                  <Scatter data={scatterData} fill="#19315b">
                    {scatterData.map((d,i) => (
                      <Cell key={i} fill={d.x>=200&&d.y>=5?'#1a6b35':d.x>=200||d.y>=5?'#e06e3d':'#19315b'} fillOpacity={0.85}/>
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            {/* Avg days to close by stage */}
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Avg Days to Close by Stage</h3>
              <p className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider mb-3">From today · active opps with close dates</p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={stageAvgDays} layout="vertical" margin={{left:5,right:30}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                  <XAxis type="number" tick={{fontSize:8}} label={{value:'Days',position:'insideBottom',offset:-2,fontSize:8}}/>
                  <YAxis type="category" dataKey="stage" tick={{fontSize:8}} width={52}/>
                  <Tooltip formatter={v=>[v+' days','Avg close']}/>
                  <Bar dataKey="avg" name="Avg Days">
                    <LabelList dataKey="avg" position="right" style={{fontSize:9,fill:'#555'}} formatter={v=>v+'d'}/>
                    {stageAvgDays.map((s,i) => (
                      <Cell key={i} fill={s.avg<=60?'#1a6b35':s.avg<=180?'#b8860b':'#c0392b'}/>
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Rep velocity + radar (if single rep selected) */}
          {radarData ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 border-t-[3px] border-kfi-orange">
                <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">{activeRep} — Performance Radar</h3>
                <p className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider mb-3">Penetration · Activity · Pipeline · Recency · Velocity · Deals</p>
                <ResponsiveContainer width="100%" height={230}>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="#ececec"/>
                    <PolarAngleAxis dataKey="metric" tick={{fontSize:9,fill:'#555'}}/>
                    <Radar dataKey="value" stroke="#e06e3d" fill="#e06e3d" fillOpacity={0.25} strokeWidth={2}/>
                    <Tooltip formatter={v=>[v,'Score']}/>
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
                <h3 className="font-headline text-sm text-kfi-navy font-medium mb-3">{activeRep} — Pipeline Breakdown</h3>
                <div className="space-y-2">
                  {stageData.map((s,i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="font-label text-[9px] uppercase text-kfi-mgray w-16 flex-shrink-0">{s.stage}</div>
                      <div className="flex-1 h-5 bg-kfi-lgray overflow-hidden">
                        <div className="h-full flex items-center pl-1" style={{width:`${Math.min(100,(s.pipe/totalActive)*100)}%`,background:STAGE_COLORS[s.fullStage]||'#ddd'}}>
                          <span className="font-label text-[8px] text-kfi-navy whitespace-nowrap">{s.count} opp{s.count!==1?'s':''}</span>
                        </div>
                      </div>
                      <div className="font-headline text-xs text-kfi-navy w-14 text-right flex-shrink-0">{fmtM(s.pipe)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* All-rep velocity cards */
            <div>
              <div className="section-header mb-2"><div className="rule"/><h2>Rep Velocity Index</h2></div>
              <div className="bg-amber-50 border border-amber-200 p-2 mb-3 flex items-start gap-2">
                <span className="text-amber-600 text-sm flex-shrink-0">ℹ</span>
                <p className="font-label text-[9px] text-amber-800">
                  <strong>How Velocity is calculated:</strong> A composite 0–100 score = (Recency 35% + Penetration % 35% + Pipeline size 30%). Recency = 100 minus 5 points per day since last activity. Higher is better. Green ≥70, Amber 45–69, Red &lt;45.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
                {repScorecard.map(r => (
                  <div key={r.rep} onClick={() => setActiveTab('rep_'+r.rep.replace(/ /g,'_'))}
                    className="bg-white p-3 cursor-pointer hover:ring-2 hover:ring-kfi-orange transition-all border-t-[3px]"
                    style={{borderTopColor: velColor(r.velocity)}}>
                    <div className="font-headline text-[11px] text-kfi-navy font-medium leading-tight mb-2">{r.name}</div>
                    <div className="font-headline text-2xl font-bold mb-1" style={{color: velColor(r.velocity)}}>{r.velocity}</div>
                    <div className="h-1.5 bg-kfi-lgray overflow-hidden mb-2">
                      <div className="h-full" style={{width:`${r.velocity}%`,background:velColor(r.velocity)}}/>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {[{l:'Pen',v:r.pen+'%'},{l:'Pipe',v:fmtM(r.pipe)},{l:'Acts',v:r.acts},{l:'Days',v:r.days+'d'}].map((k,j)=>(
                        <div key={j} className="bg-kfi-lgray px-1 py-0.5">
                          <div className="font-label text-[6px] uppercase text-kfi-mgray">{k.l}</div>
                          <div className="font-medium text-kfi-navy text-[9px] leading-tight">{k.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── TRENDS ───────────────────────────────────────────────────────────── */}
      {activeSection === 'trends' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            {/* Weighted pipeline trend with area */}
            <div className="bg-white p-4 border-t-[3px] border-kfi-orange">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Weighted Pipeline — 8 Week Trend</h3>
              <p className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider mb-3">Retained weekly · Jun 1 → Jul 20</p>
              <ResponsiveContainer width="100%" height={210}>
                <ComposedChart data={HISTORY} margin={{left:-5}}>
                  <defs>
                    <linearGradient id="wtdGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#e06e3d" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#e06e3d" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                  <XAxis dataKey="week" tick={{fontSize:9}}/>
                  <YAxis tickFormatter={v=>'$'+v+'M'} tick={{fontSize:9}}/>
                  <Tooltip formatter={v=>['$'+v+'M']}/>
                  <Area type="monotone" dataKey="wtdM" stroke="#e06e3d" strokeWidth={2.5} fill="url(#wtdGrad)" dot={{r:4,fill:'#e06e3d'}}/>
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Active pipeline + accounts engaged combined */}
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Active Pipeline & Accounts Engaged</h3>
              <p className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider mb-3">Dual axis — pipeline $M (left) · engaged count (right)</p>
              <ResponsiveContainer width="100%" height={210}>
                <ComposedChart data={HISTORY} margin={{left:-5,right:0}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                  <XAxis dataKey="week" tick={{fontSize:9}}/>
                  <YAxis yAxisId="left" tickFormatter={v=>'$'+v+'M'} tick={{fontSize:9}}/>
                  <YAxis yAxisId="right" orientation="right" tick={{fontSize:9}}/>
                  <Tooltip/>
                  <Legend wrapperStyle={{fontSize:9}}/>
                  <Bar yAxisId="right" dataKey="engaged" name="Accts Engaged" fill="#dbeafe" opacity={0.8}/>
                  <Line yAxisId="left" type="monotone" dataKey="activeM" name="Active $M" stroke="#19315b" strokeWidth={2} dot={{r:3}}/>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Win rate trend */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 border-t-[3px] border-green-600">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Win Rate Trend</h3>
              <p className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider mb-3">YTD 2026 — 39.3% (68 won / 173 closed). Prior weeks estimated from SF data.</p>
              <ResponsiveContainer width="100%" height={160}>
                <ComposedChart data={HISTORY.filter(h=>h.winRate!==null)} margin={{left:-5}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                  <XAxis dataKey="week" tick={{fontSize:9}}/>
                  <YAxis tickFormatter={v=>v+'%'} tick={{fontSize:9}} domain={[0,100]}/>
                  <Tooltip formatter={v=>[v+'%','Win Rate']}/>
                  <ReferenceLine y={50} stroke="#dc2626" strokeDasharray="4 4" label={{value:'50% target',fontSize:8,fill:'#dc2626'}}/>
                  <Line type="monotone" dataKey="winRate" stroke="#1a6b35" strokeWidth={2.5} dot={{r:5,fill:'#1a6b35'}} name="Win Rate %"/>
                </ComposedChart>
              </ResponsiveContainer>
              <div className="mt-2 p-2 bg-amber-50 border border-amber-200">
                <p className="font-label text-[9px] text-amber-800">Win rate data from Jul 20, 2026 onward is live SF data. Future weeks will populate as more opps close. 39.3% is below typical 50% target — review lost deal patterns in the Lost Deals tab.</p>
              </div>
            </div>

            {/* New opps by rep */}
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">New Opportunities — By Rep (Last 30 Days)</h3>
              <p className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider mb-3">How many new opps each rep created in the last 30 days</p>
              <ResponsiveContainer width="100%" height={185}>
                <BarChart data={newOppsByRep} margin={{left:-10}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                  <XAxis dataKey="name" tick={{fontSize:9}}/>
                  <YAxis tick={{fontSize:9}}/>
                  <Tooltip formatter={(v,n)=>[v, n==='new30'?'New (30d)':'Total open']}/>
                  <Legend wrapperStyle={{fontSize:9}}/>
                  <Bar dataKey="total" name="Total Open" fill="#dbeafe" stackId="a"/>
                  <Bar dataKey="new30" name="New (30d)" fill="#19315b" stackId="b">
                    <LabelList dataKey="new30" position="top" style={{fontSize:9,fill:'#555'}}/>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Historical data note */}
          <div className="bg-blue-50 border border-blue-200 p-3 mb-4 flex items-start gap-2">
            <span className="text-blue-600 text-sm flex-shrink-0">ℹ</span>
            <div className="font-label text-[9px] text-blue-800">
              <strong>How historical pipeline data was captured:</strong> The Jun 1–Jul 14 trend rows are baseline estimates derived from the first live Salesforce API pull on Jul 20, 2026 — working backward from the confirmed Jul 20 weighted pipeline of $50.4M. From Jul 20 onward, each Monday's pull will snapshot the exact SF values and add a new row. Over time this will build a true week-over-week trend history.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">New Opportunities Created — Weekly</h3>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={HISTORY} margin={{left:-10}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                  <XAxis dataKey="week" tick={{fontSize:9}}/>
                  <YAxis tick={{fontSize:9}}/>
                  <Tooltip/>
                  <Bar dataKey="newOpps" name="New Opps" fill="#e06e3d">
                    <LabelList dataKey="newOpps" position="top" style={{fontSize:9}}/>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Team Activity Volume — Weekly</h3>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={HISTORY} margin={{left:-10}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                  <XAxis dataKey="week" tick={{fontSize:9}}/>
                  <YAxis tick={{fontSize:9}}/>
                  <Tooltip/>
                  <Bar dataKey="acts" name="Activities" fill="#19315b">
                    <LabelList dataKey="acts" position="top" style={{fontSize:9}}/>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Trend summary table */}
          <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-navy">
            <table className="w-full border-collapse">
              <thead><tr>{['Week','Wtd Pipeline','Active Pipeline','Accts Engaged','Activities','New Opps','Wtd Δ'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
              <tbody>
                {HISTORY.slice().reverse().map((h,i,arr) => {
                  const prev = arr[i+1]
                  const delta = prev ? +(h.wtdM - prev.wtdM).toFixed(2) : null
                  return (
                    <tr key={i} className={i===0?'bg-amber-50 font-medium':i%2===0?'':'bg-[#f7f7f7]'}>
                      <td className="kfi-td font-label text-[10px] font-medium">{h.week}{i===0&&<span className="ml-1 text-[8px] text-kfi-orange uppercase tracking-wider">← current</span>}</td>
                      <td className="kfi-td text-kfi-orange font-medium">${h.wtdM}M</td>
                      <td className="kfi-td text-kfi-navy">${h.activeM}M</td>
                      <td className="kfi-td text-center">{h.engaged}</td>
                      <td className="kfi-td text-center">{h.acts}</td>
                      <td className="kfi-td text-center">{h.newOpps}</td>
                      <td className="kfi-td">
                        {delta !== null && (
                          <span className={`font-label text-[10px] font-medium ${delta>0?'text-green-700':delta<0?'text-red-600':'text-kfi-mgray'}`}>
                            {delta>0?'▲':'▼'} ${Math.abs(delta)}M
                          </span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── STAGE FUNNEL ─────────────────────────────────────────────────────── */}
      {activeSection === 'funnel' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* Visual funnel bars */}
            <div className="bg-white p-5 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-4">Pipeline Funnel — {totalOpps} Active Opps</h3>
              <div className="space-y-2">
                {funnelData.map((s,i) => {
                  const maxCount = Math.max(...funnelData.map(x=>x.count))
                  const w = Math.max(15, Math.round(s.count/maxCount*100))
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <div className="font-label text-[9px] uppercase text-kfi-mgray w-16 flex-shrink-0 text-right">{s.stage}</div>
                      <div className="flex-1 relative h-7 bg-kfi-lgray overflow-hidden">
                        <div className="h-full flex items-center pl-2 gap-2 transition-all"
                          style={{width:`${w}%`, background: STAGE_COLORS[STAGE_ORDER.find(x=>STAGE_SHORT[x]===s.stage)]||'#ddd'}}>
                          <span className="font-label text-[9px] font-medium text-kfi-navy whitespace-nowrap">{s.count} opps</span>
                        </div>
                        <div className="absolute right-2 top-0 h-full flex items-center">
                          <span className="font-label text-[9px] text-kfi-mgray">{s.pct}%</span>
                        </div>
                      </div>
                      <div className="font-headline text-xs text-kfi-navy w-14 text-right flex-shrink-0">{fmtM(s.pipe*1e6)}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Stage stats table */}
            <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-navy">
              <table className="w-full border-collapse">
                <thead><tr>{['Stage','Opps','Pipeline','Wtd Value','Avg Deal','Avg Close'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
                <tbody>
                  {stageData.map((s,i) => {
                    const stageAvg = stageAvgDays.find(x=>x.stage===s.stage)
                    return (
                      <tr key={i} className={i%2===0?'':'bg-[#f7f7f7]'}>
                        <td className="kfi-td">
                          <span className="font-label text-[9px] uppercase tracking-wider px-1.5 py-0.5" style={{background:STAGE_COLORS[s.fullStage]||'#eee'}}>
                            {s.stage}
                          </span>
                        </td>
                        <td className="kfi-td text-center font-medium">{s.count}</td>
                        <td className="kfi-td font-headline text-sm text-kfi-navy">{fmtM(s.pipe)}</td>
                        <td className="kfi-td text-kfi-orange font-medium">{fmtM(s.wtd)}</td>
                        <td className="kfi-td text-[11px] text-kfi-mgray">{fmtM(s.avgDeal)}</td>
                        <td className="kfi-td text-[11px]">{stageAvg ? stageAvg.avg+'d' : '—'}</td>
                      </tr>
                    )
                  })}
                  <tr className="bg-kfi-navy text-white">
                    <td className="kfi-td text-white font-medium font-label text-[10px] uppercase">Total</td>
                    <td className="kfi-td text-white text-center font-medium">{totalOpps}</td>
                    <td className="kfi-td text-white font-medium">{fmtM(totalActive)}</td>
                    <td className="kfi-td font-medium" style={{color:'#f0a070'}}>{fmtM(totalWtd)}</td>
                    <td className="kfi-td text-white/60 text-[11px]">{fmtM(avgDeal)}</td>
                    <td className="kfi-td text-white/60 text-[11px]">{avgDaysClose}d</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Stage distribution by rep */}
          <div className="section-header mb-3"><div className="rule"/><h2>Stage Mix by Rep</h2></div>
          <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-navy mb-6">
            <table className="w-full border-collapse">
              <thead><tr>
                <th className="kfi-th">Rep</th>
                <th className="kfi-th">Total Opps</th>
                {STAGE_ORDER.map(s => <th key={s} className="kfi-th text-center">{STAGE_SHORT[s]}</th>)}
                <th className="kfi-th">Largest Opp</th>
              </tr></thead>
              <tbody>
                {REPS.map((rep,i) => {
                  const repOpps = activeOpps.filter(o=>o.rep===rep)
                  const biggest = repOpps.sort((a,b)=>b.amount-a.amount)[0]
                  return (
                    <tr key={i} className={`${i%2===0?'':'bg-[#f7f7f7]'} cursor-pointer hover:bg-blue-50`}
                      onClick={()=>setActiveTab('rep_'+rep.replace(/ /g,'_'))}>
                      <td className="kfi-td font-medium text-kfi-orange text-[11px]">{short(rep)}</td>
                      <td className="kfi-td text-center font-medium">{repOpps.length}</td>
                      {STAGE_ORDER.map(stage => {
                        const count = repOpps.filter(o=>o.stage===stage).length
                        return (
                          <td key={stage} className="kfi-td text-center">
                            {count > 0 ? (
                              <span className="inline-block min-w-[20px] text-center font-label text-[9px] px-1 py-0.5 rounded-sm font-medium"
                                style={{background: count>0?STAGE_COLORS[stage]:'transparent', color:'#333'}}>
                                {count}
                              </span>
                            ) : <span className="text-kfi-lgray">—</span>}
                          </td>
                        )
                      })}
                      <td className="kfi-td text-[10px] text-kfi-navy max-w-[140px]">
                        <div className="truncate">{biggest ? `${fmtM(biggest.amount)} — ${biggest.account||biggest.name}` : '—'}</div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── TOP ACCOUNTS ─────────────────────────────────────────────────────── */}
      {activeSection === 'accounts' && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {/* Top 15 bar chart */}
            <div className="bg-white p-4 border-t-[3px] border-kfi-orange">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Top 15 Accounts by Pipeline</h3>
              <ResponsiveContainer width="100%" height={340}>
                <BarChart data={topAccounts.slice(0,15).map(a=>({...a,pipe:+(a.pipe/1e6).toFixed(2),name:a.account.length>22?a.account.slice(0,22)+'…':a.account}))} layout="vertical" margin={{left:5,right:40}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                  <XAxis type="number" tickFormatter={v=>'$'+v+'M'} tick={{fontSize:8}}/>
                  <YAxis type="category" dataKey="name" tick={{fontSize:8}} width={130}/>
                  <Tooltip formatter={v=>[fmtM(v*1e6),'Pipeline']}/>
                  <Bar dataKey="pipe" fill="#19315b">
                    <LabelList dataKey="pipe" position="right" style={{fontSize:8,fill:'#555'}} formatter={v=>'$'+v+'M'}/>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Top accounts table */}
            <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-navy">
              <table className="w-full border-collapse">
                <thead><tr>{['Account','Rep','Pipeline','Wtd','Opps','Best Stage'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
                <tbody>
                  {topAccounts.map((a,i) => (
                    <tr key={i} className={i%2===0?'':'bg-[#f7f7f7]'}>
                      <td className="kfi-td font-medium text-kfi-navy text-[11px] max-w-[160px]"><div className="truncate">{a.account}</div></td>
                      <td className="kfi-td text-[10px] text-kfi-orange">{short(a.rep)}</td>
                      <td className="kfi-td font-headline text-sm text-kfi-navy">{fmtM(a.pipe)}</td>
                      <td className="kfi-td text-kfi-orange text-sm font-medium">{fmtM(a.wtd)}</td>
                      <td className="kfi-td text-center">{a.opps}</td>
                      <td className="kfi-td">
                        <span className="font-label text-[8px] uppercase tracking-wider px-1.5 py-0.5"
                          style={{background:STAGE_COLORS[a.stage]||'#eee',color:'#333'}}>
                          {STAGE_SHORT[a.stage]||a.stage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── CLOSING SOON ─────────────────────────────────────────────────────── */}
      {activeSection === 'closing' && (
        <div>
          {/* Horizontal monthly pipeline bar chart */}
          <div className="bg-white p-4 border-t-[3px] border-kfi-navy mb-6">
            <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Expected Close by Month — Pipeline Value</h3>
            <p className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider mb-4">
              "Past Due" = close date already passed · Jul–Dec 2026 by month · 2027+ combined
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={closingByMonth.map(b=>({...b,val:+(b.val/1e6).toFixed(2),cnt:b.opps.length}))} layout="vertical" margin={{left:10,right:50}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                <XAxis type="number" tickFormatter={v=>'$'+v+'M'} tick={{fontSize:9}}/>
                <YAxis type="category" dataKey="label" tick={{fontSize:9}} width={65}/>
                <Tooltip formatter={(v,n,p)=>[`$${v}M (${p.payload.cnt} opps)`,'Pipeline']}/>
                <Bar dataKey="val" name="Pipeline" radius={[0,2,2,0]}>
                  {closingByMonth.map((b,i)=>(
                    <Cell key={i} fill={b.isPast?'#dc2626':b.label.startsWith('Jul')?'#f97316':b.label.startsWith('Aug')?'#fbbf24':b.label==='2027+'?'#9ca3af':'#19315b'}/>
                  ))}
                  <LabelList dataKey="cnt" position="right" style={{fontSize:9,fill:'#555'}} formatter={v=>v>0?v+'x':''}/>
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-3 mt-2">
              {[['#dc2626','Past Due — needs immediate close date update'],['#f97316','July 2026'],['#fbbf24','Aug 2026'],['#19315b','Sep–Dec 2026'],['#9ca3af','2027+']].map(([c,l])=>(
                <div key={l} className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{background:c}}/><span className="font-label text-[8px] text-kfi-mgray">{l}</span></div>
              ))}
            </div>
          </div>

          {/* Summary KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Closing ≤ 30 Days', value: fmtM(closingQ.filter(o=>daysBetween(TODAY,o.close)<=30).reduce((s,o)=>s+o.amount,0)), sub: closingQ.filter(o=>daysBetween(TODAY,o.close)<=30).length + ' opps' },
              { label: 'Closing ≤ 60 Days', value: fmtM(closingQ.filter(o=>daysBetween(TODAY,o.close)<=60).reduce((s,o)=>s+o.amount,0)), sub: closingQ.filter(o=>daysBetween(TODAY,o.close)<=60).length + ' opps' },
              { label: 'Closing ≤ 90 Days', value: fmtM(closingQ.reduce((s,o)=>s+o.amount,0)), sub: closingQ.length + ' opps' },
              { label: 'Past Due',           value: fmtM(overdueVal), sub: overdueList.length + ' opps — close date passed', red: overdueVal > 0 },
            ].map((k,i) => (
              <div key={i} className={`bg-white p-3 border-t-2 ${k.red&&overdueVal>0?'border-red-400':'border-kfi-navy'}`}>
                <div className="font-label text-[8px] uppercase tracking-widest text-kfi-mgray mb-1">{k.label}</div>
                <div className={`font-headline text-xl font-bold ${k.red&&overdueVal>0?'text-red-600':'text-kfi-navy'}`}>{k.value}</div>
                <div className="font-label text-[9px] text-kfi-mgray">{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Closing opps table */}
          <div className="section-header mb-3"><div className="rule"/><h2>Opportunities Closing in 90 Days</h2></div>
          <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-navy mb-6">
            <table className="w-full border-collapse">
              <thead><tr>{['Days','Close Date','Rep','Account','Opportunity','Stage','Amount','Wtd Value'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
              <tbody>
                {closingQ.length === 0 ? (
                  <tr><td colSpan={8} className="kfi-td text-center text-kfi-mgray py-6 font-label text-[10px] uppercase">No opportunities with close dates in the next 90 days</td></tr>
                ) : closingQ.map((o,i) => {
                  const d = daysBetween(TODAY, o.close)
                  const urgency = d <= 30 ? 'bg-red-50' : d <= 60 ? 'bg-amber-50' : ''
                  return (
                    <tr key={i} className={`${urgency} cursor-pointer hover:bg-blue-50`}
                      onClick={()=>setActiveTab('rep_'+o.rep.replace(/ /g,'_'))}>
                      <td className="kfi-td"><span className={`font-label text-[10px] font-bold ${d<=30?'text-red-600':d<=60?'text-amber-700':'text-kfi-navy'}`}>{d}d</span></td>
                      <td className="kfi-td font-label text-[10px]">{o.close}</td>
                      <td className="kfi-td text-kfi-orange text-[11px] font-medium">{short(o.rep)}</td>
                      <td className="kfi-td text-[11px] font-medium text-kfi-navy max-w-[130px]"><div className="truncate">{o.account}</div></td>
                      <td className="kfi-td text-[11px] max-w-[180px]"><div className="truncate">{o.name}</div></td>
                      <td className="kfi-td"><span className="font-label text-[8px] uppercase px-1.5 py-0.5" style={{background:STAGE_COLORS[o.stage]||'#eee'}}>{STAGE_SHORT[o.stage]||o.stage}</span></td>
                      <td className="kfi-td font-headline text-sm text-kfi-navy whitespace-nowrap">{fmtM(o.amount)}</td>
                      <td className="kfi-td text-kfi-orange font-medium text-sm">{fmtM(o.amount*(o.prob/100))}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Overdue opps */}
          {overdueList.length > 0 && (
            <>
              <div className="section-header mb-3"><div className="rule"/><h2 className="text-red-600">⚠ Past Due — Close Date Already Passed</h2></div>
              <div className="bg-white overflow-x-auto border-t-[3px] border-red-400 mb-6">
                <table className="w-full border-collapse">
                  <thead><tr>{['Overdue By','Close Date','Rep','Account','Opportunity','Stage','Amount','Action'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
                  <tbody>
                    {overdueList.map((o,i) => {
                      const d = Math.abs(daysBetween(TODAY, o.close))
                      return (
                        <tr key={i} className="bg-red-50 cursor-pointer hover:bg-red-100" onClick={()=>setActiveTab('rep_'+o.rep.replace(/ /g,'_'))}>
                          <td className="kfi-td text-red-700 font-bold font-label text-[10px]">{d}d</td>
                          <td className="kfi-td font-label text-[10px] text-red-600">{o.close}</td>
                          <td className="kfi-td text-kfi-orange text-[11px] font-medium">{short(o.rep)}</td>
                          <td className="kfi-td text-[11px] font-medium max-w-[130px]"><div className="truncate">{o.account}</div></td>
                          <td className="kfi-td text-[11px] max-w-[180px]"><div className="truncate">{o.name}</div></td>
                          <td className="kfi-td"><span className="font-label text-[8px] uppercase px-1.5 py-0.5" style={{background:STAGE_COLORS[o.stage]||'#eee'}}>{STAGE_SHORT[o.stage]||o.stage}</span></td>
                          <td className="kfi-td font-headline text-sm text-kfi-navy">{fmtM(o.amount)}</td>
                          <td className="kfi-td font-label text-[9px] text-red-700">Update close date in SF</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── REP SCORECARD ────────────────────────────────────────────────────── */}
      {activeSection === 'reps' && (
        <div>
          {/* Active vs Weighted chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-3">Active vs Weighted Pipeline by Rep</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={repScorecard.map(r=>({name:r.name,active:+(r.pipe/1e6).toFixed(2),wtd:+(r.wtd/1e6).toFixed(2)}))} margin={{left:-10}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                  <XAxis dataKey="name" tick={{fontSize:9}}/>
                  <YAxis tickFormatter={v=>'$'+v+'M'} tick={{fontSize:9}}/>
                  <Tooltip formatter={v=>['$'+v+'M']}/>
                  <Legend wrapperStyle={{fontSize:10}}/>
                  <Bar dataKey="active" name="Active Pipeline" fill="#19315b"/>
                  <Bar dataKey="wtd"    name="Weighted Pipeline" fill="#e06e3d"/>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-3">Penetration % by Rep</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={repScorecard.sort((a,b)=>b.pen-a.pen).map(r=>({name:r.name,pen:r.pen,targets:r.targets,engaged:r.engaged}))} margin={{left:-10}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ececec"/>
                  <XAxis dataKey="name" tick={{fontSize:9}}/>
                  <YAxis tickFormatter={v=>v+'%'} tick={{fontSize:9}} domain={[0,100]}/>
                  <Tooltip formatter={(v,n,p)=>[`${v}% (${p.payload.engaged}/${p.payload.targets} accounts)`,'Penetration']}/>
                  <ReferenceLine y={50} stroke="#e06e3d" strokeDasharray="4 4" label={{value:'50% target',fontSize:8,fill:'#e06e3d'}}/>
                  <Bar dataKey="pen" name="Penetration %">
                    {repScorecard.sort((a,b)=>b.pen-a.pen).map((r,i)=>(
                      <Cell key={i} fill={r.pen>=70?'#1a6b35':r.pen>=40?'#b8860b':'#c0392b'}/>
                    ))}
                    <LabelList dataKey="pen" position="top" style={{fontSize:8}} formatter={v=>v+'%'}/>
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Full rep scorecard table */}
          <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-navy">
            <table className="w-full border-collapse">
              <thead><tr>{['Rep','Velocity','Targets','Engaged','Penetration','Pipeline','Wtd Pipeline','Opps','Avg Deal','Closing 90d','Activities','Last Active'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
              <tbody>
                {repScorecard.sort((a,b)=>b.velocity-a.velocity).map((r,i)=>(
                  <tr key={i} className={`${i%2===0?'':'bg-[#f7f7f7]'} cursor-pointer hover:bg-blue-50`}
                    onClick={()=>setActiveTab('rep_'+r.rep.replace(/ /g,'_'))}>
                    <td className="kfi-td font-medium text-kfi-orange text-[11px]">{short(r.rep)}</td>
                    <td className="kfi-td">
                      <div className="flex items-center gap-1.5">
                        <div className="w-8 h-1.5 bg-kfi-lgray overflow-hidden flex-shrink-0">
                          <div className="h-full" style={{width:`${r.velocity}%`,background:velColor(r.velocity)}}/>
                        </div>
                        <span className="font-label text-[10px] font-bold" style={{color:velColor(r.velocity)}}>{r.velocity}</span>
                      </div>
                    </td>
                    <td className="kfi-td text-center">{r.targets}</td>
                    <td className="kfi-td text-center">{r.engaged}</td>
                    <td className="kfi-td">
                      <span className="font-label text-[10px] font-bold" style={{color:velColor(r.pen)}}>{r.pen}%</span>
                    </td>
                    <td className="kfi-td font-headline text-sm text-kfi-navy">{fmtM(r.pipe)}</td>
                    <td className="kfi-td text-kfi-orange font-medium">{fmtM(r.wtd)}</td>
                    <td className="kfi-td text-center">{r.oppsCount}</td>
                    <td className="kfi-td text-[11px] text-kfi-mgray">{fmtM(r.avgSz)}</td>
                    <td className="kfi-td text-[11px]">{r.closingVal > 0 ? <span className="text-amber-700 font-medium">{fmtM(r.closingVal)}</span> : <span className="text-kfi-lgray">—</span>}</td>
                    <td className="kfi-td text-center">{r.acts}</td>
                    <td className="kfi-td">
                      <span className={`font-label text-[10px] font-medium ${r.days===0?'text-green-700':r.days<=7?'text-amber-700':'text-red-600'}`}>
                        {r.days===0?'Today':r.days+'d ago'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── METAL FAB ─────────────────────────────────────────────────────── */}
      {activeSection === 'metals' && (
        <div>
          {/* Hero KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label:'NPD Metal Fabrication',  value:fmtM(metalNpdVal), sub:`${activeOpps.filter(o=>o.rt==='New Product Development - Metal Fabrication').length} opps`, accent:true },
              { label:'Existing Metal Fab',     value:fmtM(metalExistVal),sub:`${activeOpps.filter(o=>o.rt==='Existing Metal Fabrication').length} opps`, accent:true },
              { label:'Total Metal Pipeline',   value:fmtM(metalVal),    sub:'NPD + Existing combined', orange:true },
              { label:'Plastic / Other',        value:fmtM(plasticVal),  sub:`${plasticOpps.length} opps` },
            ].map((k,i)=>(
              <div key={i} className={`bg-white p-3 border-t-2 ${k.orange?'border-kfi-orange':k.accent?'border-kfi-navy':'border-kfi-lgray'}`}>
                <div className="font-label text-[8px] uppercase tracking-widest text-kfi-mgray mb-1">{k.label}</div>
                <div className={`font-headline text-xl font-bold ${k.orange?'text-kfi-orange':'text-kfi-navy'}`}>{k.value}</div>
                <div className="font-label text-[9px] text-kfi-mgray">{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Metal vs Plastic donut-style breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="bg-white p-5 border-t-[3px] border-kfi-orange">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Metal vs Plastic — Pipeline Split</h3>
              <p className="font-label text-[9px] text-kfi-mgray mb-4">By opportunity RecordType from Salesforce. Metal = NPD Metal Fab + Existing Metal Fab.</p>
              <div className="space-y-3">
                {[
                  { label:'NPD - Metal Fabrication', val:metalNpdVal, color:'#19315b', opps:activeOpps.filter(o=>o.rt==='New Product Development - Metal Fabrication').length },
                  { label:'Existing Metal Fab',      val:metalExistVal,color:'#5b4fb5',opps:activeOpps.filter(o=>o.rt==='Existing Metal Fabrication').length },
                  { label:'Plastic / Material Handling', val:activeOpps.filter(o=>['Existing Material Handling','New Product Development Material Handling'].includes(o.rt)).reduce((s,o)=>s+o.amount,0), color:'#e06e3d', opps:activeOpps.filter(o=>['Existing Material Handling','New Product Development Material Handling'].includes(o.rt)).length },
                  { label:'OEM / Automotive / Other', val:activeOpps.filter(o=>!['New Product Development - Metal Fabrication','Existing Metal Fabrication','Existing Material Handling','New Product Development Material Handling'].includes(o.rt)).reduce((s,o)=>s+o.amount,0), color:'#9ca3af', opps:activeOpps.filter(o=>!['New Product Development - Metal Fabrication','Existing Metal Fabrication','Existing Material Handling','New Product Development Material Handling'].includes(o.rt)).length },
                ].map((row,i)=>{
                  const totalAll = activeOpps.reduce((s,o)=>s+o.amount,0)
                  const pct = totalAll>0?Math.round(row.val/totalAll*100):0
                  return (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-label text-[10px] text-kfi-navy">{row.label}</span>
                        <span className="font-label text-[10px] font-medium text-kfi-navy">{fmtM(row.val)} <span className="text-kfi-mgray">({row.opps} opps · {pct}%)</span></span>
                      </div>
                      <div className="h-5 bg-kfi-lgray w-full overflow-hidden">
                        <div className="h-full transition-all" style={{width:`${pct}%`, background:row.color}}/>
                      </div>
                    </div>
                  )
                })}
                <div className="mt-2 p-2 bg-kfi-lgray flex justify-between">
                  <span className="font-label text-[10px] font-medium text-kfi-navy">Total Metal Pipeline</span>
                  <span className="font-headline text-sm font-bold text-kfi-orange">{fmtM(metalVal)} ({activeOpps.reduce((s,o)=>s+o.amount,0)>0?Math.round(metalVal/activeOpps.reduce((s,o)=>s+o.amount,0)*100):0}% of total)</span>
                </div>
              </div>
            </div>

            {/* Metal fab by rep */}
            <div className="bg-white p-5 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-3">Metal Fab Pipeline by Rep</h3>
              <table className="w-full border-collapse">
                <thead><tr>{['Rep','NPD Metal','Existing Metal','Total Metal','# Opps'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
                <tbody>
                  {REPS.map((rep,i)=>{
                    const npd   = activeOpps.filter(o=>o.rep===rep&&o.rt==='New Product Development - Metal Fabrication').reduce((s,o)=>s+o.amount,0)
                    const exist = activeOpps.filter(o=>o.rep===rep&&o.rt==='Existing Metal Fabrication').reduce((s,o)=>s+o.amount,0)
                    const total = npd+exist
                    const cnt   = activeOpps.filter(o=>o.rep===rep&&METAL_RT.includes(o.rt)).length
                    if (total===0) return null
                    return (
                      <tr key={i} className={i%2===0?'':'bg-[#f7f7f7]'}>
                        <td className="kfi-td font-medium text-[11px] text-kfi-navy">{rep.split(' ')[0][0]}. {rep.split(' ').slice(-1)[0]}</td>
                        <td className="kfi-td text-[11px]">{npd>0?fmtM(npd):'—'}</td>
                        <td className="kfi-td text-[11px]">{exist>0?fmtM(exist):'—'}</td>
                        <td className="kfi-td font-bold text-kfi-orange">{fmtM(total)}</td>
                        <td className="kfi-td text-center">{cnt}</td>
                      </tr>
                    )
                  })}
                  <tr className="bg-kfi-navy text-white">
                    <td className="kfi-td font-bold text-white">TOTAL</td>
                    <td className="kfi-td font-bold text-white">{fmtM(metalNpdVal)}</td>
                    <td className="kfi-td font-bold text-white">{fmtM(metalExistVal)}</td>
                    <td className="kfi-td font-bold text-kfi-orange">{fmtM(metalVal)}</td>
                    <td className="kfi-td text-center font-bold text-white">{metalOpps.length}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Metal fab deal list */}
          <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-orange">
            <div className="p-3 border-b border-kfi-lgray">
              <h3 className="font-headline text-sm text-kfi-navy font-medium">All Metal Fabrication Opportunities</h3>
              <p className="font-label text-[9px] text-kfi-mgray mt-0.5">RecordType = "New Product Development - Metal Fabrication" or "Existing Metal Fabrication"</p>
            </div>
            <table className="w-full border-collapse">
              <thead><tr>{['Rep','Account','Opportunity','Type','Stage','Amount','Close Date'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
              <tbody>
                {activeOpps.filter(o=>METAL_RT.includes(o.rt)).sort((a,b)=>b.amount-a.amount).map((o,i)=>(
                  <tr key={i} className={i%2===0?'bg-orange-50/20':'bg-orange-50/40'}>
                    <td className="kfi-td font-label text-[10px] text-kfi-orange whitespace-nowrap">{o.rep.split(' ')[0][0]}. {o.rep.split(' ').slice(-1)[0]}</td>
                    <td className="kfi-td text-[11px] font-medium text-kfi-navy max-w-[130px]"><div className="truncate">{o.account}</div></td>
                    <td className="kfi-td text-[11px] max-w-[200px]"><div className="truncate">{o.name}</div></td>
                    <td className="kfi-td">
                      <span className={`font-label text-[8px] uppercase px-1.5 py-0.5 ${o.rt==='Existing Metal Fabrication'?'bg-purple-100 text-purple-700':'bg-blue-100 text-blue-700'}`}>
                        {o.rt==='Existing Metal Fabrication'?'Existing':'NPD'}
                      </span>
                    </td>
                    <td className="kfi-td font-label text-[9px]">{o.stage}</td>
                    <td className="kfi-td font-headline text-sm text-kfi-navy whitespace-nowrap">{fmtM(o.amount)}</td>
                    <td className="kfi-td font-label text-[10px] text-kfi-mgray whitespace-nowrap">{o.close}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── WIN RATE ─────────────────────────────────────────────────────────── */}
      {activeSection === 'winrate' && (() => {
        // Win/loss data from SF — Jan 2025 – Jul 2026, 500 closed opps
        const WR = {
          overall: { won:165, lost:335, total:500, winPct:33.0, wonVal:39188421, lostVal:266215838 },
          bySize: [
            { label:'< $100K',      won:125, lost:155, total:280, winPct:44.6, winValPct:40.4, avgWon:29088,   avgLost:34633,   avgDays:33.1, color:'#19315b' },
            { label:'$100K – $1M',  won:31,  lost:132, total:163, winPct:19.0, winValPct:15.9, avgWon:228621,  avgLost:283132,  avgDays:45.8, color:'#2d6bb5' },
            { label:'$1M+',         won:9,   lost:48,  total:57,  winPct:15.8, winValPct:11.3, avgWon:3162799, avgLost:4655716, avgDays:52.9, color:'#5b4fb5' },
          ],
          byRep: [
            { rep:'Rebecca Krueger', s:[ {won:3,total:29},{won:0,total:25},{won:0,total:4}  ] },
            { rep:'Matt Olsen',      s:[ {won:18,total:45},{won:2,total:26},{won:1,total:5}  ] },
            { rep:'Geoff Petrangelo',s:[ {won:0,total:0}, {won:2,total:5}, {won:1,total:1}  ] },
            { rep:'Kent Buckingham', s:[ {won:0,total:0}, {won:2,total:3}, {won:0,total:0}  ] },
            { rep:'Vonn McQuiston',  s:[ {won:8,total:16},{won:1,total:2}, {won:0,total:0}  ] },
            { rep:'Mariano Lobos',   s:[ {won:16,total:44},{won:2,total:19},{won:1,total:4} ] },
            { rep:'Jake Heinecke',   s:[ {won:8,total:15},{won:4,total:8}, {won:3,total:8}  ] },
            { rep:'Jack Subel',      s:[ {won:1,total:4}, {won:0,total:2}, {won:1,total:5}  ] },
          ]
        }

        const sizeLabels = ['< $100K','$100K – $1M','$1M+']
        const sizeColors = ['#19315b','#2d6bb5','#5b4fb5']
        const REP_COLORS = {'Rebecca Krueger':'#19315b','Matt Olsen':'#2d6bb5','Geoff Petrangelo':'#5b4fb5','Kent Buckingham':'#0e8a8a','Vonn McQuiston':'#1a7a4a','Mariano Lobos':'#c47a00','Jake Heinecke':'#b52d2d','Jack Subel':'#8b2d6b'}

        // Chart data for size buckets
        const sizeChartData = WR.bySize.map(b=>({
          label: b.label, winPct: b.winPct, lossPct: +(100-b.winPct).toFixed(1),
          won: b.won, lost: b.lost, total: b.total, avgDays: b.avgDays
        }))

        // Rep chart data
        const repChartData = WR.byRep.map(r=>{
          const tw = r.s.reduce((s,b)=>s+b.won,0)
          const tt = r.s.reduce((s,b)=>s+b.total,0)
          return {
            name: r.rep.split(' ')[0][0]+'. '+r.rep.split(' ').slice(-1)[0],
            rep: r.rep,
            overall: tt>0?+(tw/tt*100).toFixed(1):0,
            smallPct:  r.s[0].total>0?+(r.s[0].won/r.s[0].total*100).toFixed(1):null,
            midPct:    r.s[1].total>0?+(r.s[1].won/r.s[1].total*100).toFixed(1):null,
            largePct:  r.s[2].total>0?+(r.s[2].won/r.s[2].total*100).toFixed(1):null,
          }
        })

        return (
          <div>
            {/* Context */}
            <div className="bg-blue-50 border border-blue-200 border-l-4 border-l-blue-500 p-3 mb-5 flex items-start gap-2">
              <span className="text-blue-600 flex-shrink-0 text-sm">ℹ</span>
              <div className="font-label text-[9px] text-blue-800">
                <strong>Source:</strong> Jan 2025 – Jul 2026 · 500 closed opportunities · All deal types combined (no NPD split).
                Win = Purchase Order/Awarded or Production stage. Loss = Closed/Lost.
                The 50% reference line shown in the BI module is aspirational — KFI's actual rate is <strong>33%</strong> overall,
                which is typical for complex B2B manufacturing. The key story is the dramatic drop-off on larger deals.
              </div>
            </div>

            {/* Hero KPIs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label:'Overall Win Rate',     value:'33.0%',  sub:'165 won / 500 closed',  color:'#19315b' },
                { label:'Small Deals < $100K',  value:'44.6%',  sub:'125W / 280 closed',     color:'#1a7a4a' },
                { label:'Mid Deals $100K–$1M',  value:'19.0%',  sub:'31W / 163 closed',      color:'#c47a00' },
                { label:'Large Deals $1M+',     value:'15.8%',  sub:'9W / 57 closed',        color:'#dc2626' },
              ].map((k,i)=>(
                <div key={i} className="bg-white p-4 border-t-[3px]" style={{borderTopColor:k.color}}>
                  <div className="font-label text-[8px] uppercase tracking-widest text-kfi-mgray mb-1">{k.label}</div>
                  <div className="font-headline text-3xl font-bold" style={{color:k.color}}>{k.value}</div>
                  <div className="font-label text-[9px] text-kfi-mgray mt-1">{k.sub}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
              {/* Win rate by size — horizontal bar */}
              <div className="bg-white p-5 border-t-[3px] border-kfi-navy">
                <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Win Rate by Deal Size — Count %</h3>
                <p className="font-label text-[9px] text-kfi-mgray mb-4">Larger deals close at much lower rates. No NPD split — all deal types combined.</p>
                <div className="space-y-5">
                  {WR.bySize.map((b,i)=>(
                    <div key={i}>
                      <div className="flex justify-between items-end mb-1">
                        <span className="font-label text-[10px] font-medium text-kfi-navy">{b.label}</span>
                        <div className="text-right">
                          <span className="font-headline text-xl font-bold" style={{color:b.color}}>{b.winPct}%</span>
                          <span className="font-label text-[8px] text-kfi-mgray ml-1">by count</span>
                          <span className="font-label text-[8px] text-kfi-mgray ml-2">({b.winValPct}% by $)</span>
                        </div>
                      </div>
                      {/* Stacked bar */}
                      <div className="h-7 w-full flex overflow-hidden rounded-sm">
                        <div className="flex items-center justify-center text-white font-label text-[9px] font-bold transition-all" style={{width:`${b.winPct}%`,background:b.color}}>
                          {b.winPct >= 8 ? `${b.won}W` : ''}
                        </div>
                        <div className="flex items-center justify-center text-white font-label text-[9px] transition-all flex-1" style={{background:'#fca5a5'}}>
                          <span className="text-red-800">{b.lost}L</span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="font-label text-[8px] text-kfi-mgray">Avg time to close: {b.avgDays}d</span>
                        <span className="font-label text-[8px] text-kfi-mgray">{b.total} total closed</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key insight */}
                <div className="mt-5 p-3 bg-amber-50 border border-amber-200">
                  <div className="font-label text-[9px] uppercase tracking-wider text-amber-700 mb-1 font-medium">Key Insight</div>
                  <div className="font-label text-[10px] text-amber-800">
                    Win rate drops from <strong>44.6%</strong> on small deals to <strong>15.8%</strong> on $1M+ deals — a 65% decline.
                    Large deals also take longer to close (52.9 days vs 33.1 days) and are lost at higher absolute values.
                    This is typical for complex manufacturing — competition intensifies at higher dollar values.
                  </div>
                </div>
              </div>

              {/* BI-style scorecard tiles */}
              <div className="bg-white p-5 border-t-[3px] border-kfi-navy">
                <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Detail by Size Bucket</h3>
                <p className="font-label text-[9px] text-kfi-mgray mb-4">Mirrors the BI module — avg days to close, won/lost counts, win rate per bucket</p>
                <div className="grid grid-cols-3 gap-3">
                  {WR.bySize.map((b,i)=>(
                    <div key={i} className="border border-kfi-lgray">
                      {/* Header */}
                      <div className="p-2 text-white text-center font-label text-[9px] uppercase tracking-wider" style={{background:b.color}}>
                        {b.label}
                      </div>
                      {/* Avg days */}
                      <div className="bg-kfi-navy text-white text-center p-3">
                        <div className="font-headline text-3xl font-bold">{b.avgDays}</div>
                        <div className="font-label text-[8px] text-white/60 uppercase mt-0.5">Avg Days to Close</div>
                      </div>
                      {/* Stats grid */}
                      <div className="grid grid-cols-2 divide-x divide-kfi-lgray">
                        <div className="p-2 text-center">
                          <div className="font-headline text-xl font-bold text-kfi-navy">{b.won}</div>
                          <div className="font-label text-[7px] text-kfi-mgray uppercase">Won</div>
                        </div>
                        <div className="p-2 text-center">
                          <div className="font-headline text-xl font-bold" style={{color:b.color}}>{b.winPct}%</div>
                          <div className="font-label text-[7px] text-kfi-mgray uppercase">Win Rate</div>
                        </div>
                        <div className="p-2 text-center border-t border-kfi-lgray">
                          <div className="font-headline text-xl font-bold text-red-600">{b.lost}</div>
                          <div className="font-label text-[7px] text-kfi-mgray uppercase">Lost</div>
                        </div>
                        <div className="p-2 text-center border-t border-kfi-lgray">
                          <div className="font-headline text-xl font-bold text-kfi-navy">{b.total}</div>
                          <div className="font-label text-[7px] text-kfi-mgray uppercase">Closed</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Avg days bar */}
                <div className="mt-4">
                  <div className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider mb-2">Avg Days to Close — Size Comparison</div>
                  {WR.bySize.map((b,i)=>(
                    <div key={i} className="mb-2">
                      <div className="flex justify-between mb-0.5">
                        <span className="font-label text-[9px] text-kfi-mgray">{b.label}</span>
                        <span className="font-label text-[9px] font-bold text-kfi-navy">{b.avgDays}d</span>
                      </div>
                      <div className="h-3 bg-kfi-lgray w-full overflow-hidden rounded-sm">
                        <div className="h-full rounded-sm transition-all" style={{width:`${(b.avgDays/60)*100}%`, background:b.color}}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rep win rate by size */}
            <div className="bg-white border-t-[3px] border-kfi-navy mb-4">
              <div className="p-4 border-b border-kfi-lgray">
                <h3 className="font-headline text-sm text-kfi-navy font-medium">Win Rate by Rep × Deal Size</h3>
                <p className="font-label text-[9px] text-kfi-mgray mt-0.5">Jan 2025–Jul 2026 · blank = no closed deals in that bucket</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="kfi-th">Rep</th>
                      {sizeLabels.map(l=><th key={l} className="kfi-th text-center" style={{borderBottomColor:sizeColors[sizeLabels.indexOf(l)]}}>{l}</th>)}
                      <th className="kfi-th text-center">Overall</th>
                    </tr>
                  </thead>
                  <tbody>
                    {WR.byRep.map((r,i)=>{
                      const tw = r.s.reduce((s,b)=>s+b.won,0)
                      const tt = r.s.reduce((s,b)=>s+b.total,0)
                      const wr = tt>0?+(tw/tt*100).toFixed(1):0
                      return (
                        <tr key={i} className={i%2===0?'':'bg-[#f7f7f7]'}>
                          <td className="kfi-td font-medium text-[11px]" style={{color:REP_COLORS[r.rep]||'#555'}}>
                            {r.rep.split(' ')[0][0]}. {r.rep.split(' ').slice(-1)[0]}
                          </td>
                          {r.s.map((b,j)=>{
                            const pct = b.total>0?+(b.won/b.total*100).toFixed(1):null
                            const intensity = pct ? pct/100 : 0
                            return (
                              <td key={j} className="kfi-td text-center p-1">
                                {pct !== null ? (
                                  <div className="inline-flex flex-col items-center px-2 py-1 min-w-[52px]"
                                    style={{background:`rgba(${pct>=40?'26,122,74':pct>=20?'196,122,0':'220,38,38'},${0.1+intensity*0.4})`}}>
                                    <span className="font-headline text-sm font-bold" style={{color:pct>=40?'#1a7a4a':pct>=20?'#c47a00':'#dc2626'}}>{pct}%</span>
                                    <span className="font-label text-[7px] text-kfi-mgray">{b.won}W / {b.total}</span>
                                  </div>
                                ) : <span className="text-kfi-lgray text-[10px]">—</span>}
                              </td>
                            )
                          })}
                          <td className="kfi-td text-center">
                            <span className="font-headline text-sm font-bold" style={{color:wr>=40?'#1a7a4a':wr>=25?'#c47a00':'#dc2626'}}>{wr}%</span>
                            <div className="font-label text-[7px] text-kfi-mgray">{tw}W / {tt}</div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Win rate trend chart */}
            <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
              <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Win Rate by Deal Size — Visual Comparison</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={sizeChartData} margin={{left:-5}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
                  <XAxis dataKey="label" tick={{fontSize:9}}/>
                  <YAxis tickFormatter={v=>v+'%'} tick={{fontSize:9}} domain={[0,100]}/>
                  <Tooltip formatter={(v,n)=>[v+'%', n]}/>
                  <Legend wrapperStyle={{fontSize:9}}/>
                  <ReferenceLine y={33} stroke="#19315b" strokeDasharray="4 4" label={{value:'Overall 33%',fontSize:8,fill:'#19315b',position:'right'}}/>
                  <Bar dataKey="winPct" name="Win Rate %" radius={[2,2,0,0]}>
                    {sizeChartData.map((d,i)=><Cell key={i} fill={i===0?'#1a7a4a':i===1?'#c47a00':'#dc2626'}/>)}
                    <LabelList dataKey="winPct" position="top" style={{fontSize:9,fill:'#555'}} formatter={v=>v+'%'}/>
                  </Bar>
                  <Bar dataKey="lossPct" name="Loss Rate %" radius={[2,2,0,0]} opacity={0.3}>
                    {sizeChartData.map((d,i)=><Cell key={i} fill="#dc2626"/>)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )
      })()}

      {/* ── RISK & OVERDUE ───────────────────────────────────────────────────── */}
      {activeSection === 'risk' && (
        <div>
          {/* Risk KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Overdue Opps',      value: overdueList.length,             sub: fmtM(overdueVal) + ' at risk', red: overdueList.length > 0 },
              { label: 'Loss Rate',         value: lossRate + '%',                  sub: lostOpps.length + ' lost opps', red: parseFloat(lossRate) > 20 },
              { label: 'Stale > 30 Days',   value: REPS.filter(r=>REP_DATA[r].days_since>30).length + ' reps',         sub: 'No activity logged', red: true },
              { label: 'No Opps on Target', value: REPS.filter(r=>(ALL_OPPS[r]||[]).filter(o=>o.is_target).length===0).length + ' reps', sub: 'Target accounts with $0 pipe' },
            ].map((k,i) => (
              <div key={i} className={`bg-white p-3 border-t-2 ${k.red?'border-red-400':'border-kfi-navy'}`}>
                <div className="font-label text-[8px] uppercase tracking-widest text-kfi-mgray mb-1">{k.label}</div>
                <div className={`font-headline text-xl font-bold ${k.red?'text-red-600':'text-kfi-navy'}`}>{k.value}</div>
                <div className="font-label text-[9px] text-kfi-mgray">{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Overdue opps */}
          <div className="section-header mb-3"><div className="rule"/><h2 className={overdueList.length>0?'text-red-600':''}>Overdue Opportunities {overdueList.length > 0 && `(${overdueList.length})`}</h2></div>
          <div className={`bg-white overflow-x-auto mb-6 border-t-[3px] ${overdueList.length>0?'border-red-400':'border-kfi-lgray'}`}>
            <table className="w-full border-collapse">
              <thead><tr>{['Overdue By','Close Date','Rep','Account','Opportunity','Stage','Amount','Action Needed'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
              <tbody>
                {overdueList.length === 0 ? (
                  <tr><td colSpan={8} className="kfi-td text-center py-6 text-green-700 font-label text-[10px] uppercase tracking-wider">✓ No overdue opportunities</td></tr>
                ) : overdueList.map((o,i) => {
                  const d = Math.abs(daysBetween(TODAY, o.close))
                  return (
                    <tr key={i} className="bg-red-50 cursor-pointer hover:bg-red-100"
                      onClick={()=>setActiveTab('rep_'+o.rep.replace(/ /g,'_'))}>
                      <td className="kfi-td font-bold text-red-700 font-label text-[10px]">{d}d</td>
                      <td className="kfi-td font-label text-[10px] text-red-500">{o.close}</td>
                      <td className="kfi-td text-kfi-orange text-[11px] font-medium">{short(o.rep)}</td>
                      <td className="kfi-td text-[11px] font-medium max-w-[120px]"><div className="truncate">{o.account}</div></td>
                      <td className="kfi-td text-[11px] max-w-[160px]"><div className="truncate">{o.name}</div></td>
                      <td className="kfi-td"><span className="font-label text-[8px] uppercase px-1.5 py-0.5" style={{background:STAGE_COLORS[o.stage]||'#eee'}}>{STAGE_SHORT[o.stage]||o.stage}</span></td>
                      <td className="kfi-td font-headline text-sm text-kfi-navy">{fmtM(o.amount)}</td>
                      <td className="kfi-td font-label text-[9px] text-red-700">Update close date or advance stage</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Stale pipeline — opps with no recent activity */}
          <div className="section-header mb-3"><div className="rule"/><h2>Stale Pipeline — Active Opps, Rep Gone Dark</h2><span className="ml-auto font-label text-[9px] uppercase tracking-widest text-kfi-mgray hidden md:block">Rep last activity &gt; 7 days ago</span></div>
          <div className="bg-white overflow-x-auto border-t-[3px] border-amber-400 mb-6">
            <table className="w-full border-collapse">
              <thead><tr>{['Rep','Days Dark','Account','Opportunity','Stage','Amount','Risk'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
              <tbody>
                {REPS.flatMap(r => {
                  const d = REP_DATA[r]
                  if (d.days_since <= 7) return []
                  return (ALL_OPPS[r]||[])
                    .filter(o => o.stage!=='Closed/Lost' && o.amount > 0)
                    .map(o => ({...o, rep:r, daysStale:d.days_since}))
                }).sort((a,b)=>b.amount-a.amount).slice(0,12).map((o,i) => (
                  <tr key={i} className={`${i%2===0?'bg-amber-50':'bg-amber-50/60'} cursor-pointer hover:bg-amber-100`}
                    onClick={()=>setActiveTab('rep_'+o.rep.replace(/ /g,'_'))}>
                    <td className="kfi-td font-medium text-kfi-orange text-[11px]">{short(o.rep)}</td>
                    <td className="kfi-td">
                      <span className={`font-label text-[10px] font-bold ${o.daysStale>14?'text-red-600':'text-amber-700'}`}>{o.daysStale}d</span>
                    </td>
                    <td className="kfi-td text-[11px] font-medium max-w-[130px]"><div className="truncate">{o.account}</div></td>
                    <td className="kfi-td text-[11px] max-w-[180px]"><div className="truncate">{o.name}</div></td>
                    <td className="kfi-td"><span className="font-label text-[8px] uppercase px-1.5 py-0.5" style={{background:STAGE_COLORS[o.stage]||'#eee'}}>{STAGE_SHORT[o.stage]||o.stage}</span></td>
                    <td className="kfi-td font-headline text-sm text-kfi-navy">{fmtM(o.amount)}</td>
                    <td className="kfi-td">
                      <span className={`pill ${o.daysStale>14?'pill-cold':'pill-cooling'}`}>
                        {o.daysStale>14?'🔴 HIGH':'🟠 MED'}
                      </span>
                    </td>
                  </tr>
                ))}
                {REPS.every(r => REP_DATA[r].days_since <= 7) && (
                  <tr><td colSpan={7} className="kfi-td text-center py-6 text-green-700 font-label text-[10px] uppercase tracking-wider">✓ All reps active within 7 days — no stale pipeline</td></tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Zero-pipeline target accounts */}
          <div className="section-header mb-3"><div className="rule"/><h2>Engaged Accounts with $0 Pipeline</h2><span className="ml-auto font-label text-[9px] uppercase tracking-widest text-kfi-mgray hidden md:block">Activity logged but no opportunity created</span></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {REPS.map(rep => {
              const d = REP_DATA[rep]
              const repOpps = (ALL_OPPS[rep]||[]).filter(o=>o.stage!=='Closed/Lost')
              const accountsWithPipe = new Set(repOpps.map(o=>o.account?.toLowerCase().slice(0,15)))
              const engagedNoPipe = (d.accts || []).filter ? [] : []
              return (
                <div key={rep} className="bg-white p-3 border-t-[3px] border-kfi-navy cursor-pointer hover:bg-blue-50"
                  onClick={()=>setActiveTab('rep_'+rep.replace(/ /g,'_'))}>
                  <div className="font-headline text-sm text-kfi-navy font-medium mb-1">{short(rep)}</div>
                  <div className="flex gap-3 mb-2">
                    <div>
                      <div className="font-label text-[7px] uppercase text-kfi-mgray">Engaged</div>
                      <div className="font-headline text-lg font-bold text-kfi-navy">{d.n_accts}</div>
                    </div>
                    <div>
                      <div className="font-label text-[7px] uppercase text-kfi-mgray">With Pipeline</div>
                      <div className="font-headline text-lg font-bold text-green-700">{repOpps.length > 0 ? new Set(repOpps.map(o=>o.account)).size : 0}</div>
                    </div>
                    <div>
                      <div className="font-label text-[7px] uppercase text-kfi-mgray">$0 Pipeline</div>
                      <div className="font-headline text-lg font-bold text-amber-700">{Math.max(0, d.n_accts - (repOpps.length>0?new Set(repOpps.map(o=>o.account)).size:0))}</div>
                    </div>
                  </div>
                  <div className="h-1.5 bg-kfi-lgray overflow-hidden">
                    <div className="h-full bg-green-600" style={{width:`${d.n_accts>0?Math.min(100,(repOpps.length>0?new Set(repOpps.map(o=>o.account)).size:0)/d.n_accts*100):0}%`}}/>
                  </div>
                  <div className="font-label text-[8px] text-kfi-mgray mt-1">
                    {d.n_accts > 0 ? Math.round((repOpps.length>0?new Set(repOpps.map(o=>o.account)).size:0)/d.n_accts*100) : 0}% converted to opps
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

    </div>
  )
}
