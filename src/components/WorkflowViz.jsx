/**
 * Hero visual: scattered inputs → coordinated workflow → systems updated.
 * Pure SVG + SMIL so it renders server-side and costs no JS.
 */
const INPUTS = [
  { y: 60, label: 'Inbound leads' },
  { y: 140, label: 'Email' },
  { y: 220, label: 'CRM' },
  { y: 300, label: 'Spreadsheets' },
  { y: 380, label: 'Chats' },
]
const OUTPUTS = [
  { y: 110, label: 'Qualified', sub: 'rules + AI' },
  { y: 220, label: 'Routed', sub: 'right human' },
  { y: 330, label: 'Recorded', sub: 'systems synced' },
]
const CX = 290
const CY = 220

export default function WorkflowViz({ className = '' }) {
  const inPaths = INPUTS.map((n) => `M128 ${n.y} C 210 ${n.y}, 220 ${CY}, ${CX - 46} ${CY}`)
  const outPaths = OUTPUTS.map((n) => `M${CX + 46} ${CY} C 370 ${CY}, 380 ${n.y}, 432 ${n.y}`)

  return (
    <svg viewBox="0 0 600 440" className={className} role="img" aria-label="Scattered tasks flowing into a coordinated LogicaWork workflow">
      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1f6bff" stopOpacity=".55" />
          <stop offset="100%" stopColor="#1f6bff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wire" x1="0" x2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".06" />
          <stop offset="100%" stopColor="#1f6bff" stopOpacity=".55" />
        </linearGradient>
        <linearGradient id="wire-out" x1="0" x2="1">
          <stop offset="0%" stopColor="#1f6bff" stopOpacity=".7" />
          <stop offset="100%" stopColor="#ccddff" stopOpacity=".35" />
        </linearGradient>
      </defs>

      {/* wires */}
      {inPaths.map((d, i) => (
        <path key={`i${i}`} id={`in${i}`} d={d} fill="none" stroke="url(#wire)" strokeWidth="1.4" strokeDasharray="3 5" />
      ))}
      {outPaths.map((d, i) => (
        <path key={`o${i}`} id={`out${i}`} d={d} fill="none" stroke="url(#wire-out)" strokeWidth="1.6" />
      ))}

      {/* packets: inputs move irregularly, outputs move in rhythm */}
      {inPaths.map((d, i) => (
        <circle key={`pi${i}`} r="3.2" fill="#ccddff">
          <animateMotion dur={`${2.2 + (i % 3) * 0.7}s`} begin={`${i * 0.37}s`} repeatCount="indefinite" path={d} />
          <animate attributeName="opacity" values="0;1;1;0" dur={`${2.2 + (i % 3) * 0.7}s`} begin={`${i * 0.37}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {outPaths.map((d, i) => (
        <circle key={`po${i}`} r="4" fill="#1f6bff">
          <animateMotion dur="1.8s" begin={`${i * 0.6}s`} repeatCount="indefinite" path={d} />
          <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* input chips */}
      {INPUTS.map((n, i) => (
        <g key={n.label} transform={`translate(8 ${n.y - 17})`}>
          <rect width="120" height="34" rx="9" fill="#111" stroke="rgba(255,255,255,.12)" />
          <circle cx="16" cy="17" r="3.5" fill={i % 2 ? '#8c8a87' : '#cfccc4'}>
            <animate attributeName="opacity" values="1;.3;1" dur={`${1.6 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          <text x="28" y="21.5" fill="rgba(255,255,255,.75)" fontSize="12" fontFamily="JetBrains Mono, monospace">
            {n.label}
          </text>
        </g>
      ))}

      {/* core */}
      <circle cx={CX} cy={CY} r="110" fill="url(#core-glow)" />
      <g transform={`translate(${CX} ${CY})`}>
        <circle r="70" fill="none" stroke="rgba(31,107,255,.35)" strokeDasharray="2 6">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="24s" repeatCount="indefinite" />
        </circle>
        <circle r="56" fill="none" stroke="rgba(204,221,255,.18)" strokeDasharray="40 12">
          <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="16s" repeatCount="indefinite" />
        </circle>
        <rect x="-46" y="-46" width="92" height="92" rx="22" fill="#0b0f1a" stroke="#1f6bff" strokeWidth="1.5" />
        {/* chip pins */}
        {[-24, -8, 8, 24].map((p) => (
          <g key={p} stroke="rgba(31,107,255,.7)" strokeWidth="1.4">
            <line x1={p} y1="-46" x2={p} y2="-54" />
            <line x1={p} y1="46" x2={p} y2="54" />
            <line x1="-46" y1={p} x2="-54" y2={p} />
            <line x1="46" y1={p} x2="54" y2={p} />
          </g>
        ))}
        <text y="-4" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800" fontFamily="Outfit, sans-serif">
          LOGICA
        </text>
        <text y="14" textAnchor="middle" fill="#1f6bff" fontSize="15" fontWeight="800" fontFamily="Outfit, sans-serif">
          WORK
        </text>
        <text y="32" textAnchor="middle" fill="rgba(255,255,255,.45)" fontSize="7.5" letterSpacing="1.5" fontFamily="JetBrains Mono, monospace">
          WORKFLOW
        </text>
      </g>

      {/* outputs */}
      {OUTPUTS.map((n, i) => (
        <g key={n.label} transform={`translate(432 ${n.y - 24})`}>
          <rect width="160" height="48" rx="12" fill="rgba(31,107,255,.08)" stroke="rgba(31,107,255,.55)" />
          <rect x="12" y="15" width="18" height="18" rx="5" fill="#1f6bff" />
          <path d="M16.5 24l3 3 6-6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="40" y="22" fill="#fff" fontSize="13.5" fontWeight="700" fontFamily="Outfit, sans-serif">
            {n.label}
          </text>
          <text x="40" y="37" fill="rgba(204,221,255,.6)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            {n.sub}
          </text>
          <rect x="0" y="0" width="160" height="48" rx="12" fill="none" stroke="#ccddff" strokeOpacity="0">
            <animate attributeName="stroke-opacity" values="0;.9;0" dur="1.8s" begin={`${i * 0.6 + 1.6}s`} repeatCount="indefinite" />
          </rect>
        </g>
      ))}
    </svg>
  )
}
