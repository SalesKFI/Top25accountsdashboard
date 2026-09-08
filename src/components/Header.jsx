import React from 'react'
import { REPORT_DATE } from '../data/dashboardData'

export default function Header() {
  return (
    <header className="bg-kfi-navy border-b-[3px] border-kfi-orange px-4 md:px-8 flex items-center justify-between h-14 md:h-16">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-kfi-orange text-white font-label font-bold text-xs tracking-widest flex-shrink-0">
          KFI
        </div>
        <div>
          <div className="font-headline text-white text-base md:text-xl font-medium leading-tight">
            Kruger Family Industries
          </div>
          <div className="font-label text-[8px] md:text-[9px] uppercase tracking-widest text-white/50 mt-0.5 hidden sm:block">
            Sales Performance Dashboard · Live Salesforce Data
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
          <span className="font-label text-[9px] uppercase tracking-widest text-white/50">Live · Updates Mondays</span>
        </div>
        <div className="bg-white/10 border border-white/20 px-3 py-1.5 text-right flex-shrink-0">
          <div className="font-label text-[8px] uppercase tracking-widest text-kfi-orange">Updated</div>
          <div className="font-label text-xs md:text-sm text-white font-normal">{REPORT_DATE}</div>
        </div>
      </div>
    </header>
  )
}
