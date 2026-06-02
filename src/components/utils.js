// ─── FORMAT HELPERS ─────────────────────────────────────────────
export function fmtM(v) {
  if (!v) return '$0'
  if (v >= 1e6) return '$' + (v / 1e6).toFixed(1) + 'M'
  if (v >= 1e3) return '$' + Math.round(v / 1e3) + 'K'
  return '$' + v.toLocaleString()
}

export function fmtPct(v) {
  return Math.round(v) + '%'
}

// ─── INACTIVITY STATUS ───────────────────────────────────────────
export function getStatus(days) {
  if (days <= 7)         return { cls: 'active',  label: '🟢 Active',      bg: '#e6f4ec', color: '#1a6b35' }
  if (days <= 14)        return { cls: 'warm',    label: '🟡 Warm',        bg: '#fef9e6', color: '#7a5200' }
  if (days <= 30)        return { cls: 'cooling', label: '🟠 Cooling',     bg: '#fdf0e8', color: '#8b3d00' }
  if (days >= 999)       return { cls: 'cold',    label: '🔴 No Activity', bg: '#fde8e8', color: '#8b0000' }
  return                        { cls: 'cold',    label: '🔴 Cold',        bg: '#fde8e8', color: '#8b0000' }
}

// ─── STAGE COLOR MAP ─────────────────────────────────────────────
export const STAGE_BG = {
  'Business Case':           '#dbeafe',
  'Request for Information': '#dbeafe',
  'Quote':                   '#fef9e6',
  'Design':                  '#fdf0e8',
  'Concept':                 '#f3e8ff',
  'Prototype':               '#fdf0e8',
  'Production':              '#e6f4ec',
  'Purchase Order / Awarded':'#e6f4ec',
  'Closed/Lost':             '#fde8e8',
  'Delivery':                '#e6f4ec',
  'Contract':                '#e6f4ec',
  'Request for Sample':      '#dbeafe',
}
