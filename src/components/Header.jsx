import React from 'react'
import { REPORT_DATE } from '../data/dashboardData'

// KFI white icon — embedded so no external file needed
const KFI_ICON = '/kfi-icon.png' // place kfi-icon.png in /public, OR use the base64 below

export default function Header() {
  return (
    <>
      {/* ── MAIN HEADER ──────────────────────────────────────── */}
      <header className="bg-kfi-navy border-b-[3px] border-kfi-orange px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          {/* KFI wordmark — text fallback if no icon file */}
          <div className="flex items-center justify-center w-10 h-10 bg-kfi-orange text-white font-label font-bold text-sm tracking-widest">
            KFI
          </div>
          <div>
            <div className="font-headline text-white text-xl font-medium leading-tight">
              Kruger Family Industries
            </div>
            <div className="font-label text-[9px] uppercase tracking-widest text-white/50 mt-0.5">
              Sales Performance Dashboard
            </div>
          </div>
        </div>
        <div className="bg-white/10 border border-white/20 px-4 py-2 text-right">
          <div className="font-label text-[9px] uppercase tracking-widest text-kfi-orange">
            Last Updated
          </div>
          <div className="font-label text-sm text-white font-normal">
            {REPORT_DATE}
          </div>
        </div>
      </header>

      {/* ── UPDATE BANNER ────────────────────────────────────── */}
      <div className="bg-kfi-navy border-b-2 border-kfi-orange px-8 py-2 flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-kfi-orange flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
          ↻
        </div>
        <p className="font-label text-[10px] uppercase tracking-widest text-white/70">
          <span className="text-kfi-orange font-medium">Updates every Monday, 7pm</span>
          &nbsp;·&nbsp; Upload new Salesforce files to Claude to refresh data
          &nbsp;·&nbsp; Source: Salesforce Top 25 Target Accounts
        </p>
      </div>
    </>
  )
}
