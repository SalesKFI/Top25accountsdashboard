import React, { useState, useMemo, useEffect } from 'react'
import { ALL_OPPS, REPS } from '../data/dashboardData'
import { fmtM } from './utils'
import {
  BarChart, Bar, ComposedChart, Area, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell,
  ResponsiveContainer, LabelList, ReferenceLine
} from 'recharts'

// ── FORECAST LOGIC ────────────────────────────────────────────────────────────
// "Go Get" = credible active opps from SF weighted by a conservative closing rate.
// This EXCLUDES recurring/repeat business which doesn't live in SF (mostly automotive).
// Historical recurring revenue baseline ≈ $5M/month (estimated from KFI BI data).
// Seasonal index applied based on typical manufacturing/CPG buy patterns.

const TODAY = '2026-07-27'
const TODAY_D = new Date(TODAY)

// Stage-based credibility filter — only "credible" opps count toward Go Get
// Quote/Prototype/Production Tool are the most credible
const STAGE_CREDIBILITY = {
  'Request for Information': 0.05,
  'Concept':                 0.08,
  'Request for Sample':      0.10,
  'Business Case':           0.12,
  'Design':                  0.20,
  'Quote':                   0.45,
  'QEC':                     0.45,
  'Testing':                 0.50,
  'Prototype':               0.65,
  'Production Tool':         0.75,
  'Purchase Order / Awarded':0.90,
  'Production':              0.95,
}

// Conservative close rate applied on top of stage credibility
const CONSERVATIVE_FACTOR = 0.70  // 70% of weighted = conservative estimate

// Recurring business seasonal index (monthly multipliers, Jan=1.0)
const SEASONAL = {
  'Jan':0.80, 'Feb':0.88, 'Mar':0.95, 'Apr':1.02,
  'May':1.05, 'Jun':1.10, 'Jul':0.90, 'Aug':0.85,
  'Sep':1.05, 'Oct':1.10, 'Nov':1.00, 'Dec':0.85
}
const RECURRING_BASE = 5000000  // $5M/month baseline

const MONTHS_FWD = ['Jul','Aug','Sep','Oct','Nov','Dec']
const MONTH_NUMS = {Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12}

function getMonthLabel(closeDate) {
  if (!closeDate) return null
  const d = new Date(closeDate)
  if (d < TODAY_D) return 'Past Due'
  const y = d.getFullYear()
  const m = d.getMonth() + 1
  if (y > 2026) return '2027+'
  const names = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return names[m] + ' 2026'
}

export default function TabForecast() {
  const [showRecurring, setShowRecurring] = useState(true)
  const [credFilter, setCredFilter] = useState('all')
  const [repFilter, setRepFilter] = useState('All')

  // ── Shared recurring edits via JSONBin.io ────────────────────────────────────
  // Free cloud KV — edits sync across ALL users/devices in real time.
  // SETUP: Go to https://jsonbin.io → sign up free → create a bin with the
  // DEFAULT_RECURRING object below → paste your Bin ID and Master Key here.
  // Until then, values save to localStorage (per-browser only).
  const JSONBIN_BIN_ID  = '6a6f7d3fda38895dfeb0478b'
  const JSONBIN_API_KEY = '$2a$10$nE.msfnnm9Xfd3c7LjQ9A.FlnaUmopGa6yTcvnRvQY4cKzFnz8KDG'
  const JSONBIN_ENABLED = JSONBIN_BIN_ID !== '' && JSONBIN_API_KEY !== ''
  const JSONBIN_URL     = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`

  const DEFAULT_RECURRING = {Jul:4500000,Aug:4200000,Sep:5000000,Oct:5200000,Nov:5000000,Dec:4000000}

  const [recurringEdits, setRecurringEditsState] = useState(() => {
    try {
      const saved = localStorage.getItem('kfi_recurring_edits')
      return saved ? JSON.parse(saved) : DEFAULT_RECURRING
    } catch { return DEFAULT_RECURRING }
  })
  const [editingMonth, setEditingMonth] = useState(null)
  const [syncStatus,   setSyncStatus]   = useState('idle') // idle | loading | saving | saved | error
  const [saveTimer,    setSaveTimer]    = useState(null)

  // On mount — load shared values from JSONBin if configured
  useEffect(() => {
    if (!JSONBIN_ENABLED) return
    setSyncStatus('loading')
    fetch(JSONBIN_URL + '/latest', {
      headers: { 'X-Master-Key': JSONBIN_API_KEY, 'X-Bin-Meta': 'false' }
    })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        // JSONBin wraps response: { record: { recurring: {...} } }
        // but with X-Bin-Meta: false it returns the record directly
        const rec = data?.record?.recurring || data?.recurring || null
        if (rec) {
          setRecurringEditsState(rec)
          try { localStorage.setItem('kfi_recurring_edits', JSON.stringify(rec)) } catch {}
        }
        setSyncStatus('idle')
      })
      .catch(() => setSyncStatus('idle'))
  }, [])

  // Save — debounced 1.5s, writes to JSONBin + localStorage
  const setRecurringEdits = (newVal) => {
    setRecurringEditsState(newVal)
    try { localStorage.setItem('kfi_recurring_edits', JSON.stringify(newVal)) } catch {}

    if (!JSONBIN_ENABLED) return  // localStorage only if not configured

    setSyncStatus('saving')
    if (saveTimer) clearTimeout(saveTimer)
    setSaveTimer(setTimeout(() => {
      fetch(JSONBIN_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Master-Key': JSONBIN_API_KEY },
        body: JSON.stringify({ recurring: newVal, updatedAt: new Date().toISOString() })
      })
        .then(r => { setSyncStatus(r.ok ? 'saved' : 'error') })
        .catch(() => setSyncStatus('error'))
        .finally(() => setTimeout(() => setSyncStatus('idle'), 3000))
    }, 1500))
  }

  const allOpps = useMemo(() =>
    REPS.flatMap(r => (ALL_OPPS[r]||[]).map(o=>({...o,rep:r}))), [])

  // Filter to active, non-placeholder opps
  const activeOpps = useMemo(() => allOpps.filter(o =>
    o.amount > 100 &&  // exclude $1 placeholders
    !['Purchase Order / Awarded','Production','Closed/Lost'].includes(o.stage)
  ), [allOpps])

  const filtered = useMemo(() =>
    repFilter === 'All' ? activeOpps : activeOpps.filter(o=>o.rep===repFilter),
  [activeOpps, repFilter])

  // Build monthly buckets
  const monthBuckets = useMemo(() => {
    const buckets = {
      'Past Due': {opps:[], raw:0, credible:0, conservative:0},
      ...MONTHS_FWD.reduce((a,m)=>({...a,[m+' 2026']:{opps:[],raw:0,credible:0,conservative:0}}),{}),
      '2027+': {opps:[], raw:0, credible:0, conservative:0},
    }
    filtered.forEach(o => {
      const label = getMonthLabel(o.close)
      if (!label || !buckets[label]) return
      const cred = STAGE_CREDIBILITY[o.stage] || 0.05
      const credVal = o.amount * cred
      const consVal = credVal * CONSERVATIVE_FACTOR
      buckets[label].opps.push(o)
      buckets[label].raw         += o.amount
      buckets[label].credible    += credVal
      buckets[label].conservative+= consVal
    })
    return buckets
  }, [filtered])

  // Chart data — Jul through Dec + 2027+
  const chartData = useMemo(() => {
    const rows = []
    const pd = monthBuckets['Past Due']
    rows.push({month:'Past Due',label:'Past Due',raw:+(pd.raw/1e6).toFixed(2),goGet:+(pd.credible/1e6).toFixed(2),conservative:+(pd.conservative/1e6).toFixed(2),recurring:0,total:+(pd.conservative/1e6).toFixed(2),cnt:pd.opps.length,isPast:true})
    MONTHS_FWD.forEach(m => {
      const key = m + ' 2026'
      const b   = monthBuckets[key]
      const rec = showRecurring ? (recurringEdits[m] || 0) : 0
      const consVal = b.conservative
      rows.push({month:m,label:key,raw:+(b.raw/1e6).toFixed(2),goGet:+(b.credible/1e6).toFixed(2),conservative:+(consVal/1e6).toFixed(2),recurring:+(rec/1e6).toFixed(2),total:+((consVal+rec)/1e6).toFixed(2),cnt:b.opps.length,isPast:false})
    })
    const later = monthBuckets['2027+']
    rows.push({month:'2027+',label:'2027+',raw:+(later.raw/1e6).toFixed(2),goGet:+(later.credible/1e6).toFixed(2),conservative:+(later.conservative/1e6).toFixed(2),recurring:0,total:+(later.conservative/1e6).toFixed(2),cnt:later.opps.length,isPast:false})
    return rows
  }, [monthBuckets, showRecurring, recurringEdits])

  // KPIs
  const fwdMonths = chartData.filter(d=>!d.isPast && d.month !== '2027+')
  const totalGoGet     = fwdMonths.reduce((s,d)=>s+d.goGet,0)
  const totalConservative = fwdMonths.reduce((s,d)=>s+d.conservative,0)
  const totalRecurring = fwdMonths.reduce((s,d)=>s+d.recurring,0)
  const totalForecast  = fwdMonths.reduce((s,d)=>s+d.total,0)
  const avgMonthly     = fwdMonths.length > 0 ? totalForecast / fwdMonths.length : 0
  const pastDueVal     = monthBuckets['Past Due'].raw

  // Drill state
  const [drillMonth, setDrillMonth] = useState(null)
  const drillOpps = drillMonth
    ? filtered.filter(o=>getMonthLabel(o.close)===(drillMonth==='Past Due'?'Past Due':drillMonth))
        .sort((a,b)=>b.amount-a.amount)
    : null

  const REP_COLORS = {
    'Rebecca Krueger':'#19315b','Matt Olsen':'#2d6bb5','Geoff Petrangelo':'#5b4fb5',
    'Kent Buckingham':'#0e8a8a','Vonn McQuiston':'#1a7a4a','Mariano Lobos':'#c47a00',
    'Jake Heinecke':'#b52d2d','Jack Subel':'#8b2d6b',
  }
  const sn = r => r.split(' ')[0][0]+'. '+r.split(' ').slice(-1)[0]

  return (
    <div className="p-4 md:p-6 w-full">

      {/* Context note */}
      <div className="bg-amber-50 border border-amber-200 border-l-4 border-l-amber-500 p-3 mb-5">
        <div className="font-label text-[9px] uppercase tracking-widest text-amber-700 font-medium mb-1">About This Forecast</div>
        <div className="font-label text-[10px] text-amber-800 leading-relaxed">
          <strong>"Go Get"</strong> = active SF opportunities weighted by a conservative stage-based closing probability (e.g. Quote = 45%, Prototype = 65%) × 70% conservative factor.
          &nbsp;<strong>Recurring Business</strong> ≈ $5M/month baseline (seasonal) — this covers repeat/auto business not tracked in SF.
          &nbsp;<strong>Important:</strong> Most automotive and repeat business is excluded from SF, so this forecast understates total revenue. Dates and amounts in SF directly drive these numbers — garbage in, garbage out.
        </div>
      </div>

      {/* Hero KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
        {[
          {label:'Go Get (Credible)',       value:fmtM(totalGoGet*1e6),         sub:'Stage-weighted SF opps',    accent:true},
          {label:'Conservative Go Get',     value:fmtM(totalConservative*1e6),  sub:'Go Get × 70%',             orange:true},
          {label:'Recurring Baseline',      value:fmtM(totalRecurring*1e6),     sub:'$5M/mo × seasonal (6mo)'},
          {label:'Total 6-Month Forecast',  value:fmtM(totalForecast*1e6),      sub:'Conservative + Recurring', accent:true},
          {label:'Avg Monthly Forecast',    value:fmtM(avgMonthly*1e6),         sub:'Jul–Dec 2026 avg'},
          {label:'Past Due Pipeline',       value:fmtM(pastDueVal),             sub:'Close date already passed', red:true},
        ].map((k,i)=>(
          <div key={i} className={`bg-white p-3 border-t-2 ${k.red?'border-red-500':k.accent?'border-kfi-orange':k.orange?'border-kfi-orange':'border-kfi-navy'}`}>
            <div className="font-label text-[8px] uppercase tracking-widest text-kfi-mgray mb-1">{k.label}</div>
            <div className={`font-headline text-xl font-bold leading-none ${k.red?'text-red-600':k.accent?'text-kfi-orange':k.orange?'text-amber-600':'text-kfi-navy'}`}>{k.value}</div>
            <div className="font-label text-[8px] text-kfi-mgray mt-1">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        {/* Rep filter */}
        <div className="flex flex-wrap gap-1">
          {['All',...REPS].map(r=>(
            <button key={r} onClick={()=>setRepFilter(r)}
              className={`font-label text-[9px] uppercase tracking-wider px-2.5 py-1.5 border transition-colors ${repFilter===r?'text-white border-transparent':'bg-white text-kfi-mgray border-kfi-lgray hover:border-kfi-navy'}`}
              style={repFilter===r?{background:r==='All'?'#19315b':REP_COLORS[r]||'#19315b',borderColor:'transparent'}:{}}>
              {r==='All'?'All':sn(r)}
            </button>
          ))}
        </div>
        {/* Recurring toggle */}
        <button onClick={()=>setShowRecurring(v=>!v)}
          className={`ml-auto flex items-center gap-2 px-3 py-1.5 border font-label text-[9px] uppercase tracking-wider transition-colors ${showRecurring?'bg-kfi-navy text-white border-kfi-navy':'bg-white text-kfi-mgray border-kfi-lgray'}`}>
          <span>{showRecurring?'✓':''}</span> Include Recurring ~$5M/mo
        </button>
      </div>

      {/* Main forecast bar chart */}
      <div className="bg-white p-5 border-t-[3px] border-kfi-orange mb-5">
        <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Monthly Revenue Forecast — Jul–Dec 2026</h3>
        <p className="font-label text-[9px] text-kfi-mgray mb-1">Click any bar to see the underlying deals. Past Due = close date already passed in SF.</p>
        <p className="font-label text-[9px] text-kfi-mgray mb-4">
          Conservative Go Get = SF opps × stage credibility × 70%.
          {showRecurring && ' Recurring = seasonal $5M/month baseline added on top.'}
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <ComposedChart data={chartData} onClick={d=>d?.activeLabel&&setDrillMonth(drillMonth===d.activeLabel?null:d.activeLabel)} margin={{left:-5,right:10}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
            <XAxis dataKey="month" tick={{fontSize:9}}/>
            <YAxis tickFormatter={v=>'$'+v+'M'} tick={{fontSize:9}}/>
            <Tooltip formatter={(v,n)=>['$'+v+'M', n]}
              labelFormatter={l=>`${l} — click to drill`}/>
            <Legend wrapperStyle={{fontSize:9}}/>
            {showRecurring && (
              <Bar dataKey="recurring" name="Recurring Est." stackId="a" fill="#e5e7eb" opacity={0.9}/>
            )}
            <Bar dataKey="conservative" name="Conservative Go Get" stackId="a" cursor="pointer"
              radius={showRecurring?[0,0,0,0]:[2,2,0,0]}>
              {chartData.map((d,i)=>(
                <Cell key={i}
                  fill={d.isPast?'#dc2626':drillMonth===d.month?'#e06e3d':'#19315b'}
                  fillOpacity={drillMonth&&drillMonth!==d.month&&drillMonth!=='Past Due'?0.4:1}/>
              ))}
              {showRecurring && <LabelList dataKey="total" position="top" style={{fontSize:9,fill:'#555'}} formatter={v=>v>0?'$'+v+'M':''}/>}
              {!showRecurring && <LabelList dataKey="conservative" position="top" style={{fontSize:9,fill:'#555'}} formatter={v=>v>0?'$'+v+'M':''}/>}
            </Bar>
            <ReferenceLine y={avgMonthly} stroke="#e06e3d" strokeDasharray="4 4"
              label={{value:'Avg/mo',fontSize:8,fill:'#e06e3d',position:'right'}}/>
          </ComposedChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap gap-4 mt-2">
          {[
            ['#19315b','Conservative Go Get (SF opps)'],
            ...(showRecurring?[['#e5e7eb','Recurring Est. (~$5M/mo)']]:[]),
            ['#dc2626','Past Due — needs date update'],
            ['#e06e3d','Monthly average line'],
          ].map(([c,l])=>(
            <div key={l} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{background:c}}/>
              <span className="font-label text-[8px] text-kfi-mgray">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Go Get vs Raw pipeline comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        <div className="bg-white p-4 border-t-[3px] border-kfi-navy">
          <h3 className="font-headline text-sm text-kfi-navy font-medium mb-1">Raw Pipeline vs Conservative Go Get</h3>
          <p className="font-label text-[9px] text-kfi-mgray mb-3">Shows how much of the raw SF pipeline is actually credible at each stage</p>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={chartData.filter(d=>!d.isPast&&d.month!=='2027+')} margin={{left:-5}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
              <XAxis dataKey="month" tick={{fontSize:9}}/>
              <YAxis tickFormatter={v=>'$'+v+'M'} tick={{fontSize:9}}/>
              <Tooltip formatter={v=>['$'+v+'M']}/>
              <Legend wrapperStyle={{fontSize:9}}/>
              <Bar dataKey="raw" name="Raw SF Pipeline" fill="#dbeafe" opacity={0.9} radius={[2,2,0,0]}/>
              <Bar dataKey="goGet" name="Stage-Weighted Go Get" fill="#2d6bb5" radius={[2,2,0,0]}/>
              <Bar dataKey="conservative" name="Conservative (×70%)" fill="#19315b" radius={[2,2,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly forecast table */}
        <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-navy">
          <div className="p-3 border-b border-kfi-lgray">
            <h3 className="font-headline text-sm text-kfi-navy font-medium">Monthly Forecast Breakdown</h3>
          </div>
          <table className="w-full border-collapse">
            <thead><tr>
              {['Month','Deals','Raw SF','Go Get','Conservative',showRecurring?'Recurring':'','Total'].filter(Boolean).map(h=><th key={h} className="kfi-th">{h}</th>)}
            </tr></thead>
            <tbody>
              {chartData.map((d,i)=>(
                <tr key={i}
                  className={`cursor-pointer ${d.isPast?'bg-red-50':drillMonth===d.month?'bg-blue-50':i%2===0?'':'bg-[#f7f7f7]'} hover:bg-blue-50`}
                  onClick={()=>setDrillMonth(drillMonth===d.month?null:d.month)}>
                  <td className="kfi-td font-label text-[10px] font-medium whitespace-nowrap">
                    {d.month}{d.isPast&&<span className="ml-1 text-[8px] text-red-600 uppercase">past due</span>}
                  </td>
                  <td className="kfi-td text-center text-[11px]">{d.cnt}</td>
                  <td className="kfi-td text-[11px] text-kfi-mgray">${d.raw}M</td>
                  <td className="kfi-td text-[11px] text-blue-700">${d.goGet}M</td>
                  <td className="kfi-td text-[11px] font-medium text-kfi-navy">${d.conservative}M</td>
                  {showRecurring && <td className="kfi-td text-[11px] text-kfi-mgray">${d.recurring}M</td>}
                  <td className={`kfi-td font-headline text-sm ${d.isPast?'text-red-600':'text-kfi-orange'}`}>${d.total}M</td>
                </tr>
              ))}
              {/* Totals row */}
              <tr className="bg-kfi-navy text-white">
                <td className="kfi-td font-bold text-white text-[10px]">Jul–Dec Total</td>
                <td className="kfi-td text-center text-white">{fwdMonths.reduce((s,d)=>s+d.cnt,0)}</td>
                <td className="kfi-td text-white text-[11px]">${fwdMonths.reduce((s,d)=>s+d.raw,0).toFixed(1)}M</td>
                <td className="kfi-td text-white text-[11px]">${totalGoGet.toFixed(1)}M</td>
                <td className="kfi-td text-white text-[11px]">${totalConservative.toFixed(1)}M</td>
                {showRecurring && <td className="kfi-td text-white text-[11px]">${totalRecurring.toFixed(1)}M</td>}
                <td className="kfi-td font-bold text-kfi-orange">${totalForecast.toFixed(1)}M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* JSONBin setup banner — only shows if not yet configured */}
      {!JSONBIN_ENABLED && showRecurring && (
        <div className="bg-amber-50 border border-amber-300 border-l-4 border-l-amber-500 p-3 mb-4 flex items-start gap-2">
          <span className="text-amber-600 flex-shrink-0">⚙</span>
          <div className="font-label text-[9px] text-amber-800">
            <strong>One-time setup to share recurring edits across all users:</strong>{' '}
            Go to <span className="font-mono bg-amber-100 px-1">jsonbin.io</span> → sign up free → click "Create Bin" → paste{' '}
            <span className="font-mono bg-amber-100 px-1">{'{"recurring":{"Jul":4500000,"Aug":4200000,"Sep":5000000,"Oct":5200000,"Nov":5000000,"Dec":4000000}}'}</span>{' '}
            → copy the Bin ID and Master Key → paste them into <span className="font-mono bg-amber-100 px-1">TabForecast.jsx</span> lines 67–68.
            Until then, edits save to this browser only.
          </div>
        </div>
      )}

      {/* Editable recurring business by month */}
      {showRecurring && (
        <div className="bg-white border-t-[3px] border-kfi-navy p-5 mb-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-headline text-sm text-kfi-navy font-medium">Recurring Business — Editable Monthly Estimate</h3>
              <p className="font-label text-[9px] text-kfi-mgray mt-0.5">Click any month to edit. Changes sync across all users and devices automatically.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 min-w-[140px]">
                {syncStatus === 'saving' && <><div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0"/><span className="font-label text-[8px] text-amber-600 uppercase tracking-wider">Saving...</span></>}
                {syncStatus === 'saved'  && <><div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"/><span className="font-label text-[8px] text-green-600 uppercase tracking-wider">Saved — all users synced ✓</span></>}
                {syncStatus === 'error'  && <><div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"/><span className="font-label text-[8px] text-red-500 uppercase tracking-wider">Saved locally only</span></>}
              </div>
              <button onClick={()=>{ setRecurringEdits(DEFAULT_RECURRING); localStorage.removeItem('kfi_recurring_edits') }}
                className="font-label text-[9px] uppercase tracking-wider px-3 py-1.5 border border-kfi-lgray text-kfi-mgray hover:border-kfi-navy transition-colors whitespace-nowrap">
                Reset to Defaults
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {MONTHS_FWD.map(m=>(
              <div key={m} className={`border-2 p-3 cursor-pointer transition-all ${editingMonth===m?'border-kfi-orange bg-orange-50':'border-kfi-lgray hover:border-kfi-navy'}`}
                onClick={()=>setEditingMonth(editingMonth===m?null:m)}>
                <div className="font-label text-[9px] uppercase tracking-wider text-kfi-mgray mb-1">{m} 2026</div>
                {editingMonth===m ? (
                  <div onClick={e=>e.stopPropagation()}>
                    <div className="font-label text-[8px] text-kfi-mgray mb-1">Enter $ amount:</div>
                    <input
                      type="number"
                      defaultValue={recurringEdits[m]}
                      className="w-full border border-kfi-navy px-2 py-1 font-label text-[11px] text-kfi-navy"
                      onBlur={e=>{
                        const val = parseFloat(e.target.value)
                        if (!isNaN(val)) setRecurringEdits(prev=>({...prev,[m]:val}))
                        setEditingMonth(null)
                      }}
                      onKeyDown={e=>{
                        if (e.key==='Enter') {
                          const val = parseFloat(e.target.value)
                          if (!isNaN(val)) setRecurringEdits(prev=>({...prev,[m]:val}))
                          setEditingMonth(null)
                        }
                      }}
                      autoFocus
                    />
                  </div>
                ) : (
                  <>
                    <div className="font-headline text-lg font-bold text-kfi-navy">{fmtM(recurringEdits[m])}</div>
                    <div className="font-label text-[7px] text-kfi-mgray mt-0.5">click to edit</div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 p-2 bg-blue-50 border border-blue-200">
            <div className="font-label text-[9px] text-blue-800">
              <strong>Note from Nate:</strong> Automotive repeat orders alone = ~$4M/mo. Total recurring likely $5M+ but hard to calculate precisely. <strong>Edits are shared across all users</strong> — if Nate changes August on his laptop, you'll see it when you load the page. Uses JSONBin cloud storage with localStorage as offline fallback. Recurring revenue is NOT tracked in Salesforce.
            </div>
          </div>
        </div>
      )}

      {/* Drill — deal list */}
      {drillOpps && (
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px bg-kfi-lgray flex-1"/>
            <h2 className="font-headline text-sm font-medium text-kfi-navy whitespace-nowrap">
              {drillMonth} — {drillOpps.length} deals · {fmtM(drillOpps.reduce((s,o)=>s+o.amount,0))} raw
            </h2>
            <div className="h-px bg-kfi-lgray flex-1"/>
            <button onClick={()=>setDrillMonth(null)} className="font-label text-[9px] uppercase text-kfi-mgray hover:text-kfi-navy flex-shrink-0">✕ close</button>
          </div>
          <div className="bg-white overflow-x-auto border-t-[3px] border-kfi-orange">
            <table className="w-full border-collapse">
              <thead><tr>{['Rep','Account','Opportunity','Stage','Credibility','Amount','Go Get'].map(h=><th key={h} className="kfi-th">{h}</th>)}</tr></thead>
              <tbody>
                {drillOpps.map((o,i)=>{
                  const cred = STAGE_CREDIBILITY[o.stage]||0.05
                  return (
                    <tr key={i} className={i%2===0?'':'bg-[#f7f7f7]'}>
                      <td className="kfi-td text-[11px] font-medium whitespace-nowrap" style={{color:REP_COLORS[o.rep]||'#555'}}>{sn(o.rep)}</td>
                      <td className="kfi-td text-[11px] font-medium text-kfi-navy max-w-[120px]"><div className="truncate">{o.account}</div></td>
                      <td className="kfi-td text-[11px] max-w-[200px]"><div className="truncate">{o.name}</div></td>
                      <td className="kfi-td">
                        <span className="font-label text-[8px] uppercase px-1 py-0.5 bg-blue-50 text-blue-700">{o.stage}</span>
                      </td>
                      <td className="kfi-td text-center font-bold text-[11px]" style={{color:cred>=0.5?'#1a7a4a':cred>=0.2?'#c47a00':'#9ca3af'}}>{Math.round(cred*100)}%</td>
                      <td className="kfi-td font-headline text-sm text-kfi-navy whitespace-nowrap">{fmtM(o.amount)}</td>
                      <td className="kfi-td font-headline text-sm text-kfi-orange whitespace-nowrap">{fmtM(o.amount*cred*CONSERVATIVE_FACTOR)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Stage credibility legend */}
      <div className="mt-5 bg-white p-4 border-t-[3px] border-kfi-navy">
        <h3 className="font-headline text-sm text-kfi-navy font-medium mb-3">Stage Credibility Reference</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {Object.entries(STAGE_CREDIBILITY).filter(([s])=>!['Purchase Order / Awarded','Production'].includes(s)).map(([stage,pct])=>(
            <div key={stage} className="flex items-center justify-between p-2 bg-kfi-lgray">
              <span className="font-label text-[9px] text-kfi-navy">{stage}</span>
              <span className={`font-label text-[10px] font-bold ${pct>=0.5?'text-green-700':pct>=0.2?'text-amber-700':'text-red-600'}`}>{Math.round(pct*100)}%</span>
            </div>
          ))}
        </div>
        <div className="mt-2 font-label text-[9px] text-kfi-mgray">Conservative factor: 70% applied on top of stage credibility. These rates can be adjusted to match KFI's historical close rates per stage.</div>
      </div>
    </div>
  )
}
