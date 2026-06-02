import React from 'react'
import { REP_DATA } from '../data/dashboardData'
import { fmtM, getStatus, STAGE_BG } from './utils'

export default function TabRepDetail({ rep }) {
  const d  = REP_DATA[rep]
  const st = getStatus(d.days_since)
  const conv = d.n_accts > 0 ? (d.n_opps / d.n_accts * 100).toFixed(1) : '0'
  const isGeoff = rep === 'Geoff Petrangelo'

  return (
    <div className="p-6 max-w-[1280px]">

      {/* Geoff note */}
      {isGeoff && (
        <div className="bg-yellow-50 border-l-4 border-kfi-orange p-3 mb-5 text-[11px] text-kfi-mgray">
          <strong>Note:</strong> Activities include Eric Cin's accounts (Ford FCSD, Scout Motors, Nissan,
          Honda, Toyota) — combined per management directive.
        </div>
      )}

      {/* Rep header */}
      <div className="flex items-start justify-between mb-5 gap-4">
        <div>
          <h1 className="font-headline text-3xl text-kfi-navy font-medium">{rep}</h1>
          <div className="flex items-center gap-3 mt-2">
            <span className="font-label text-[10px] uppercase tracking-wider text-kfi-mgray">
              Last activity: {d.last_act || 'None'}
            </span>
            <span className={`pill pill-${st.cls}`}>{st.label}</span>
          </div>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Pipeline',           value: fmtM(d.pipe) },
          { label: 'Activities',         value: d.n_acts },
          { label: 'Opportunities',      value: d.n_opps },
          { label: 'Conv. Rate',         value: conv + '%' },
        ].map((k, i) => (
          <div key={i} className="bg-kfi-lgray p-4">
            <div className="font-label text-[9px] uppercase tracking-widest text-kfi-mgray mb-1">{k.label}</div>
            <div className="font-headline text-2xl text-kfi-navy">{k.value}</div>
          </div>
        ))}
      </div>

      {/* Engaged accounts */}
      {d.accts.length > 0 && (
        <div className="mb-6">
          <div className="font-label text-[10px] uppercase tracking-widest text-kfi-orange mb-2 pb-2 border-b border-kfi-lgray">
            Engaged Target Accounts ({d.n_accts})
          </div>
          <div className="flex flex-wrap gap-2">
            {d.accts.map((a, i) => (
              <span key={i} className="bg-kfi-lgray px-2.5 py-1 font-label text-[9px] uppercase tracking-wide text-kfi-dgray">
                {a}
              </span>
            ))}
          </div>
        </div>
      )}

      {d.accts.length === 0 && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-600 p-3">
          <span className="font-label text-[10px] uppercase tracking-widest text-red-700">
            ⚠ No target accounts engaged — zero activities logged
          </span>
        </div>
      )}

      {/* Activities + Opps grid */}
      <div className="grid grid-cols-2 gap-6">

        {/* Recent Activities */}
        <div>
          <div className="font-label text-[10px] uppercase tracking-widest text-kfi-orange mb-3 pb-2 border-b border-kfi-lgray">
            Recent Activities (Latest 12)
          </div>
          {d.recent_acts.length === 0 ? (
            <div className="text-kfi-orange italic text-sm py-4">
              No activities logged in this reporting period — CRITICAL
            </div>
          ) : (
            d.recent_acts.map((a, i) => (
              <div key={i} className="py-2 border-b border-kfi-lgray">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-medium text-kfi-navy text-[11px]">{a.company}</span>
                  <span className="font-label text-[9px] text-kfi-mgray uppercase tracking-wider whitespace-nowrap flex-shrink-0">
                    {a.date}
                  </span>
                </div>
                <div className="text-[10px] text-kfi-mgray mt-0.5 truncate max-w-sm">{a.subject}</div>
              </div>
            ))
          )}
        </div>

        {/* Top Opportunities */}
        <div>
          <div className="font-label text-[10px] uppercase tracking-widest text-kfi-orange mb-3 pb-2 border-b border-kfi-lgray">
            Opportunities &amp; Pipeline (Top 10 by Amount)
          </div>
          {d.opps.length === 0 ? (
            <div className="text-kfi-mgray italic text-sm py-4">No opportunities on record.</div>
          ) : (
            d.opps.map((o, i) => {
              const stageBg = STAGE_BG[o.stage] || '#f7f7f7'
              return (
                <div key={i} className="py-2 border-b border-kfi-lgray">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-medium text-kfi-dgray text-[11px] flex-1">{o.name}</span>
                    <span className="font-headline text-sm text-kfi-navy whitespace-nowrap flex-shrink-0">
                      {fmtM(o.amount)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-label text-[8px] uppercase tracking-wider px-1.5 py-0.5"
                      style={{ background: stageBg }}>
                      {o.stage}
                    </span>
                    <span className="text-[9px] text-kfi-mgray truncate">{o.account}</span>
                    <span className="text-[9px] text-kfi-mgray ml-auto flex-shrink-0">{o.created}</span>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
