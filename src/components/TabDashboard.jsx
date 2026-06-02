import React from 'react'
import { REPS, REP_DATA } from '../data/dashboardData'
import { fmtM, getStatus } from './utils'
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'

const sorted = [...REPS].sort((a, b) => REP_DATA[b].pipe - REP_DATA[a].pipe)
const maxPipe = Math.max(...REPS.map(r => REP_DATA[r].pipe))

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun']
const MO_KEYS = ['1','2','3','4','5','6']

export default function TabDashboard({ setActiveTab }) {
  // Team totals
  const totPipe  = REPS.reduce((s, r) => s + REP_DATA[r].pipe, 0)
  const totActs  = REPS.reduce((s, r) => s + REP_DATA[r].n_acts, 0)
  const totOpps  = REPS.reduce((s, r) => s + REP_DATA[r].n_opps, 0)
  const totAccts = REPS.reduce((s, r) => s + REP_DATA[r].n_accts, 0)

  // Chart data
  const pipeData = sorted.map(r => ({
    name: r.split(' ').slice(-1)[0],
    Pipeline: +(REP_DATA[r].pipe / 1e6).toFixed(2),
  }))

  const actData = sorted.map(r => ({
    name: r.split(' ').slice(-1)[0],
    Activities: REP_DATA[r].n_acts,
  }))

  const trendData = MONTHS.map((m, i) => ({
    month: m,
    Total: REPS.reduce((s, r) => s + (REP_DATA[r].monthly[MO_KEYS[i]] || 0), 0),
  }))

  return (
    <div className="p-6 max-w-[1280px]">

      {/* KPI Row */}
      <div className="grid grid-cols-5 gap-3 mb-6">
        {[
          { label: 'Total Pipeline',   value: fmtM(totPipe),        sub: 'All 10 reps' },
          { label: 'Total Opps',       value: totOpps,              sub: 'This period' },
          { label: 'Total Activities', value: totActs,              sub: 'Target accounts' },
          { label: 'Accts Engaged',    value: totAccts,             sub: 'Unique accounts' },
          { label: 'Critical Alerts',  value: '1',                  sub: 'Act today', orange: true },
        ].map((k, i) => (
          <div key={i} className="kpi-card">
            <div className="kpi-label">{k.label}</div>
            <div className={`kpi-value ${k.orange ? 'text-kfi-orange' : ''}`}>{k.value}</div>
            <div className="kpi-sub">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* Ranking Table */}
      <div className="section-header">
        <div className="rule" />
        <h2>Rep Performance Ranking</h2>
        <span className="ml-auto font-label text-[9px] uppercase tracking-widest text-kfi-mgray">
          Sorted by pipeline value
        </span>
      </div>

      <div className="overflow-x-auto bg-white mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['#','Sales Rep','Pipeline','Activities','Opps','Target Accts','Days Since','Status'].map(h => (
                <th key={h} className="kfi-th">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((rep, i) => {
              const d   = REP_DATA[rep]
              const st  = getStatus(d.days_since)
              const pct = maxPipe > 0 ? (d.pipe / maxPipe * 100).toFixed(0) : 0
              const rowBg = i % 2 === 0 ? '' : 'bg-[#f7f7f7]'
              return (
                <tr key={rep} className={`${rowBg} hover:bg-blue-50 transition-colors`}>
                  <td className="kfi-td font-label text-[10px] text-kfi-mgray">#{i + 1}</td>
                  <td
                    className="kfi-td font-medium text-kfi-navy cursor-pointer hover:text-kfi-orange hover:underline"
                    onClick={() => setActiveTab('rep_' + rep.replace(/ /g, '_'))}
                  >
                    {rep}
                  </td>
                  <td className="kfi-td min-w-[180px]">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-kfi-lgray overflow-hidden">
                        <div className="h-full bg-kfi-navy" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="font-headline text-sm text-kfi-navy min-w-[60px] text-right">
                        {fmtM(d.pipe)}
                      </span>
                    </div>
                  </td>
                  <td className="kfi-td">{d.n_acts}</td>
                  <td className="kfi-td">{d.n_opps}</td>
                  <td className="kfi-td">{d.n_accts}</td>
                  <td className="kfi-td font-label text-[11px]">
                    {d.days_since >= 999 ? '—' : d.days_since + 'd'}
                  </td>
                  <td className="kfi-td">
                    <span className={`pill pill-${st.cls}`}>{st.label}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="bg-white p-5 border-t-[3px] border-kfi-navy">
          <h3 className="font-headline text-base text-kfi-navy font-medium mb-4">Pipeline by Rep ($M)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={pipeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ececec" />
              <XAxis dataKey="name" tick={{ fontFamily: "'Roboto Condensed'", fontSize: 10 }} />
              <YAxis tickFormatter={v => '$' + v + 'M'} tick={{ fontSize: 10 }} />
              <Tooltip formatter={v => ['$' + v + 'M', 'Pipeline']} />
              <Bar dataKey="Pipeline" fill="#19315b" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-5 border-t-[3px] border-kfi-navy">
          <h3 className="font-headline text-base text-kfi-navy font-medium mb-4">Activities by Rep</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={actData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ececec" />
              <XAxis dataKey="name" tick={{ fontFamily: "'Roboto Condensed'", fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="Activities" fill="#e06e3d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-5 border-t-[3px] border-kfi-navy">
        <h3 className="font-headline text-base text-kfi-navy font-medium mb-4">
          Monthly Activity Trend — Target Accounts (Jan–Jun 2026)
        </h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ececec" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Total" stroke="#19315b" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
