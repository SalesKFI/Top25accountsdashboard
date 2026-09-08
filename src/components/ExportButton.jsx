import React, { useState } from 'react'

export default function ExportButton({ label = 'Export / Print' }) {
  const [open, setOpen] = useState(false)

  const handlePrint = () => {
    setOpen(false)
    window.print()
  }

  const handleCopy = () => {
    setOpen(false)
    const url = window.location.href
    navigator.clipboard?.writeText(url).then(() => {
      alert('Link copied to clipboard')
    }).catch(() => {
      prompt('Copy this link for offline sharing:', url)
    })
  }

  return (
    <>
      {/* Print styles injected globally */}
      <style>{`
        @media print {
          /* Hide nav, buttons, controls */
          header, nav, .print\\:hidden, button, .tab-nav,
          [class*="TabNav"], [class*="TabDashboard"] > div:first-child {
            display: none !important;
          }
          /* Keep colors in print */
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { background: white !important; }
          .bg-kfi-navy { background-color: #19315b !important; color: white !important; }
          .bg-kfi-orange { background-color: #e06e3d !important; }
          /* Full width */
          .p-4, .p-6, .md\\:p-8 { padding: 12px !important; }
          /* Page breaks */
          .bg-white { break-inside: avoid; }
        }
      `}</style>

      <div className="relative print:hidden">
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-2 bg-kfi-navy text-white px-4 py-2 font-label text-[9px] uppercase tracking-wider hover:bg-kfi-navy/90 transition-colors border border-white/20"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {label}
          <svg className="w-2.5 h-2.5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        </button>

        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <div className="absolute right-0 top-full mt-1 bg-white shadow-xl border border-kfi-lgray z-50 min-w-[200px]">
              <div className="px-4 py-2 bg-kfi-navy">
                <span className="font-label text-[8px] uppercase tracking-widest text-white/60">Export Options</span>
              </div>
              <button onClick={handlePrint}
                className="flex items-center gap-3 w-full px-4 py-3 hover:bg-kfi-lgray border-b border-kfi-lgray transition-colors text-left">
                <svg className="w-4 h-4 text-kfi-navy flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <div>
                  <div className="font-label text-[10px] uppercase tracking-wider text-kfi-navy font-medium">Print / Save as PDF</div>
                  <div className="font-label text-[9px] text-kfi-mgray">Retains KFI colors and layout</div>
                </div>
              </button>
              <button onClick={handleCopy}
                className="flex items-center gap-3 w-full px-4 py-3 hover:bg-kfi-lgray transition-colors text-left">
                <svg className="w-4 h-4 text-kfi-navy flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="font-label text-[10px] uppercase tracking-wider text-kfi-navy font-medium">Copy Share Link</div>
                  <div className="font-label text-[9px] text-kfi-mgray">Send live dashboard link</div>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
