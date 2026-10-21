import { useMemo, useState } from 'react'
import { estimateCalculatorRates } from '../data/siteContent.js'

const projectTypes = Object.keys(estimateCalculatorRates)

function formatCurrency(value, country) {
  const currency = country === 'Canada' ? 'CAD' : country === 'Australia' ? 'AUD' : 'USD'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(value)
}

export default function EstimateCalculator() {
  const [projectType, setProjectType] = useState('New Construction')
  const [area, setArea] = useState('')
  const [country, setCountry] = useState('United States')
  const [complexity, setComplexity] = useState('1')

  const result = useMemo(() => {
    const parsedArea = Number(area)
    if (!parsedArea || parsedArea < 1) return null
    const rate = estimateCalculatorRates[projectType]
    const multiplier = Number(complexity)
    return { low: parsedArea * rate.low * multiplier, high: parsedArea * rate.high * multiplier }
  }, [area, projectType, complexity])

  return (
    <section className="calculator-card" aria-labelledby="calculator-title">
      <div className="calculator-copy">
        <p className="kicker">Planning Tool</p>
        <h2 id="calculator-title">Preliminary project budget range</h2>
        <p>Use this planning-only calculator to start a conversation. It is not a quote, bid or final construction estimate.</p>
      </div>
      <div className="calculator-form">
        <div className="calculator-fields">
          <label>Project type
            <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
              {projectTypes.map((type) => <option value={type} key={type}>{type}</option>)}
            </select>
          </label>
          <label>Approx. area (sq ft)
            <input min="1" inputMode="numeric" type="number" value={area} onChange={(e) => setArea(e.target.value)} placeholder="e.g. 2500" />
          </label>
          <label>Market
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
              <option>United States</option><option>Canada</option><option>Australia</option>
            </select>
          </label>
          <label>Complexity
            <select value={complexity} onChange={(e) => setComplexity(e.target.value)}>
              <option value="0.9">Lower / simple</option><option value="1">Typical</option><option value="1.2">Higher / complex</option>
            </select>
          </label>
        </div>
        <div className="calculator-result" aria-live="polite">
          {result ? <><span>Illustrative budget range</span><strong>{formatCurrency(result.low, country)} – {formatCurrency(result.high, country)}</strong><small>Based on broad planning assumptions. Scope, location, labor, materials and design detail can materially change costs.</small></> : <><span>Enter an approximate area</span><strong>—</strong><small>We’ll show a rough planning range here.</small></>}
        </div>
      </div>
      <style>{`
        .calculator-card { display:grid; grid-template-columns: .82fr 1.18fr; gap:36px; padding:40px; background:var(--white); border:1px solid var(--line); border-top:4px solid var(--safety); box-shadow:0 18px 42px rgba(14,27,43,.08); }
        .calculator-copy p { margin-bottom:0; }
        .calculator-form { display:grid; gap:20px; }
        .calculator-fields { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .calculator-fields label { display:grid; gap:7px; font-size:.83rem; font-weight:700; color:var(--ink); }
        .calculator-fields select,.calculator-fields input { width:100%; border:1px solid var(--line); padding:12px; border-radius:var(--radius); color:var(--ink); background:var(--paper); font:inherit; }
        .calculator-result { display:grid; gap:4px; padding:20px; background:var(--ink); color:var(--white); }
        .calculator-result span { color:var(--white-70); font-size:.78rem; font-weight:700; letter-spacing:.06em; text-transform:uppercase; }
        .calculator-result strong { font-family:var(--font-display); font-size:clamp(1.35rem,3vw,2rem); line-height:1.1; }
        .calculator-result small { color:var(--white-70); line-height:1.45; }
        @media (max-width:820px){ .calculator-card{grid-template-columns:1fr;}.calculator-fields{grid-template-columns:1fr;} }
      `}</style>
    </section>
  )
}
