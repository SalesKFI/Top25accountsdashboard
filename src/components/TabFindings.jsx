import React, { useState } from 'react'
import { FINDINGS, CHANGES } from '../data/dashboardData'

const SEV_COUNTS = { CRITICAL: 0, HIGH: 0, MODERATE: 0, POSITIVE: 0 }
FINDINGS.forEach(f => { if (SEV_COUNTS[f.sev] !== undefined) SEV_COUNTS[f.sev]++ })

export default function TabFindings() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <div className="p-6 max-w-[1280px]">

      {/* Summary pills */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Act Today',    value: SEV_COUNTS.CRITICAL + ' Critical', border: '#c00000' },
          { label: 'This Week',    value: SEV_COUNTS.HIGH     + ' High',     border: '#e06e3d' },
          { label: 'This Month',   value: SEV_COUNTS.MODERATE + ' Moderate', border: '#b8860b' },
          { label: 'Replicate',    value: SEV_COUNTS.POSITIVE + ' Positive', border: '#1a6b35' },
        ].map((k, i) => (
          <div key={i} className="kpi-card" style={{ borderTopColor: k.border }}>
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-value text-2xl">{k.value}</div>
          </div>
        ))}
      </div>

      {/* Findings */}
      <div className="section-header">
        <div className="rule" />
        <h2>Prioritized Findings — Week of June 1, 2026</h2>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        {FINDINGS.map((f, i) => (
          <div
            key={i}
            className={`finding-card ${f.sev}`}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className={`pill pill-${f.sev.toLowerCase()}`}>{f.sev}</span>
              <span className="font-medium text-kfi-navy text-sm">{f.rep}</span>
              <span className="ml-auto font-label text-[9px] text-kfi-mgray uppercase tracking-wider">
                {openIdx === i ? 'Click to collapse ▴' : 'Click to expand ▾'}
              </span>
            </div>
            <p className="text-[12px] text-kfi-dgray leading-relaxed">{f.finding}</p>
            {openIdx === i && (
              <div className="mt-3 pt-3 border-t border-kfi-lgray">
                <span className="font-label text-[9px] uppercase tracking-widest text-kfi-orange">
                  Recommended Action:
                </span>
                <p className="text-[12px] text-kfi-mgray mt-1 leading-relaxed">{f.action}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* What Changed */}
      <div className="section-header">
        <div className="rule" />
        <h2>What Changed — May 25 → June 1</h2>
        <span className="ml-auto font-label text-[9px] uppercase tracking-widest text-kfi-mgray">
          vs Prior Report
        </span>
      </div>

      <div className="overflow-x-auto bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-kfi-navy">
              {['Rep','Metric','Prior','Current','Change'].map(h => (
                <th key={h} className="kfi-th">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CHANGES.map((c, i) => (
              <tr key={i} className={i % 2 === 0 ? '' : 'bg-[#f7f7f7]'}>
                <td className="kfi-td font-medium text-kfi-navy">{c[0]}</td>
                <td className="kfi-td">{c[1]}</td>
                <td className="kfi-td text-kfi-mgray">{c[2]}</td>
                <td className="kfi-td font-medium">{c[3]}</td>
                <td className="kfi-td">
                  <span className={`pill pill-${c[5]}`}>{c[4]}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
