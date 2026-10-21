import { Link } from 'react-router-dom'
import { company } from '../data/siteContent.js'

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand"><div className="footer-logo"><span className="brand-mark">CEP</span><span>{company.name}</span></div><p>Professional construction estimating, quantity takeoff and bid preparation services for contractors across the USA, Canada and Australia.</p><Link className="footer-quote" to="/quote">Start a quote request →</Link></div>
      <div className="footer-col"><h4>Services</h4><ul><li><Link to="/services#construction-estimating">Construction Estimating</Link></li><li><Link to="/services#quantity-takeoff">Quantity Takeoff</Link></li><li><Link to="/services#material-takeoff">Material Takeoff</Link></li><li><Link to="/services#cost-estimation">Cost Estimation</Link></li><li><Link to="/services#bid-preparation">Bid Preparation</Link></li></ul></div>
      <div className="footer-col"><h4>Explore</h4><ul><li><Link to="/about">About Us</Link></li><li><Link to="/how-it-works">How It Works</Link></li><li><Link to="/portfolio">Portfolio</Link></li><li><Link to="/insights">Construction Insights</Link></li><li><Link to="/faq">FAQ</Link></li></ul></div>
      <div className="footer-col"><h4>Markets</h4><ul>{company.markets.map((market) => <li key={market}>{market}</li>)}</ul><h4 className="footer-contact-head">Contact</h4><ul><li><a href={`mailto:${company.email}`}>{company.email}</a></li><li><a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}>{company.phone}</a></li><li><Link to="/contact">Contact CEP</Link></li></ul></div>
    </div>
    <div className="container footer-bottom"><p>© 2026 CEP Construction Estimation Partner LLC. All Rights Reserved.</p><div className="footer-legal"><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms &amp; Conditions</Link></div><div className="footer-social"><span>Frontend demonstration site</span></div></div>
    <style>{`
      .footer{background:var(--ink);color:var(--white);padding-top:72px}.footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;padding-bottom:56px;border-bottom:1px solid var(--line-dark)}.footer-logo{display:flex;align-items:center;gap:10px;font:600 1rem var(--font-display);margin-bottom:16px}.footer-brand p{color:var(--white-50);font-size:.92rem}.footer-quote{display:inline-block;color:var(--safety);font:700 .9rem var(--font-display);margin-top:7px}.footer-col h4{color:var(--white);font-size:.95rem;margin-bottom:16px}.footer-contact-head{margin-top:24px}.footer-col ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px}.footer-col li,.footer-col a{color:var(--white-50);font-size:.9rem}.footer-col a:hover{color:var(--white)}.footer-bottom{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;padding:24px 0;font-size:.82rem;color:var(--white-50)}.footer-legal{display:flex;gap:20px}.footer-legal a{color:var(--white-50)}.footer-legal a:hover{color:var(--white)}@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr}}@media(max-width:560px){.footer-grid{grid-template-columns:1fr}.footer-bottom{flex-direction:column;align-items:flex-start}}
    `}</style>
  </footer>
}
