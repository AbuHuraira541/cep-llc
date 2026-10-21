import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import StatBlock from '../components/StatBlock.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import IndustryCard from '../components/IndustryCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import CTA from '../components/CTA.jsx'
import FAQ from '../components/FAQ.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import EstimateCalculator from '../components/EstimateCalculator.jsx'

// Data Imports
import { media } from '../data/images.js' // NEW: Image URLs
import { softwareTools } from '../data/siteContent.js'
import { coreServices, industries, whyChoose, processSteps } from '../data/services.js'
import { testimonials } from '../data/testimonials.js'
import { portfolio } from '../data/portfolio.js'
import { faqs } from '../data/faqs.js'

const stats = [
  { value: '500+', label: 'Projects Estimated' },
  { value: '3', label: 'Markets Served' },
  { value: '24/7', label: 'Support Availability' },
  { value: '100%', label: 'Professional Estimates' },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section id="trust" className="section-dark section-tight">
        <div className="container">
          <StatBlock stats={stats} />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center mx-auto" style={{maxWidth: '800px'}}>
            <p className="kicker">What We Do</p>
            <h2>Estimating Services Built for Bidding Contractors</h2>
            <p>From full project estimates to focused quantity takeoffs, CEP supports every stage of your bid preparation with precision and accuracy.</p>
          </div>
          <div className="grid grid-3">
            {coreServices.map((s) => (
              <ServiceCard key={s.slug} icon={s.icon} title={s.title} summary={s.summary} slug={s.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CEP (NOW WITH IMAGE LAYOUT) */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-2 align-center" style={{gap: '4rem'}}>
            <div>
              <div className="section-head mb-4">
                <p className="kicker">Why CEP</p>
                <h2>Why Contractors Choose CEP</h2>
                <p>We don't just count materials; we provide strategic bidding advantages through detailed, transparent, and accurate cost data.</p>
              </div>
              <div className="why-list-wrapper">
                {whyChoose.map((w) => (
                  <div className="why-item" key={w.title}>
                    <Icon name="check" size={18} />
                    <div>
                      <h3>{w.title}</h3>
                      <p>{w.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-showcase">
              <img src={media.whyUs} alt="Professional Construction Estimator" className="premium-img shadow-lg" />
              <div className="image-badge">
                <strong>15+ Years</strong><br/>Combined Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Who We Serve</p>
            <h2>Industries We Support</h2>
          </div>
          <div className="grid grid-3">
            {industries.map((i) => <IndustryCard key={i.slug} title={i.title} summary={i.summary} />)}
          </div>
        </div>
      </section>

      {/* PROCESS (NOW WITH IMAGE LAYOUT) */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2 align-center" style={{gap: '4rem'}}>
            <div className="image-showcase order-mobile-2">
               <img src={media.process} alt="Construction Planning and Blueprints" className="premium-img shadow-lg" />
            </div>
            <div className="order-mobile-1">
              <div className="section-head">
                <p className="kicker text-warning">Our Process</p>
                <h2>How It Works</h2>
                <p className="text-light">A streamlined workflow designed to get you accurate numbers before your bid deadline.</p>
              </div>
              <ol className="process-list">
                {processSteps.map((step, i) => (
                  <li key={step.title}>
                    <span className="process-index">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p className="text-muted-light">{step.summary}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Button to="/how-it-works" variant="outline" withArrow>See the Full Process</Button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: WHAT WE NEED (Added for length and conversion) */}
      <section className="section bg-light border-y">
        <div className="container">
          <div className="grid grid-2 align-center" style={{gap: '4rem'}}>
             <div>
                <div className="section-head">
                  <p className="kicker">Project Kickoff</p>
                  <h2>What We Need to Start</h2>
                  <p>To provide accurate, localized pricing for your specific market, we request the following details when you submit a project:</p>
                </div>
                <ul className="premium-checklist">
                  <li><Icon name="check" size={16}/> <strong>Project Location</strong> (For localized pricing)</li>
                  <li><Icon name="check" size={16}/> <strong>Construction Drawings</strong> & Specifications</li>
                  <li><Icon name="check" size={16}/> <strong>Scope of Work</strong> & Trade Requirements</li>
                  <li><Icon name="check" size={16}/> <strong>Project Schedule</strong> & Deadlines</li>
                </ul>
                <div className="mt-4">
                  <Button to="/quote" variant="primary">Upload Your Plans</Button>
                </div>
             </div>
             <div className="image-showcase">
                <img src={media.requirements} alt="Project Requirements" className="premium-img shadow-lg" />
             </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section">
        <div className="container">
          <div className="section-head flex-between">
            <div>
              <p className="kicker">Recent Work</p>
              <h2>Portfolio Preview</h2>
            </div>
            <Button to="/portfolio" variant="dark-outline" withArrow className="hide-mobile">View Full Portfolio</Button>
          </div>
          <div className="grid grid-3">
            {portfolio.slice(0, 3).map((p, index) => (
              <div 
                className="card portfolio-preview-card with-bg-image" 
                key={p.id}
                style={{backgroundImage: `linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.1) 100%), url(${index === 0 ? media.portfolio1 : index === 1 ? media.portfolio2 : media.portfolio3})`}}
              >
                <div className="portfolio-content">
                  <span className="portfolio-tag text-warning">{p.category}</span>
                  <h3>{p.type}</h3>
                  <p><Icon name="location" size={14}/> {p.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section-more show-mobile-only text-center mt-4">
             <Button to="/portfolio" variant="dark-outline" withArrow>View Full Portfolio</Button>
          </div>
        </div>
      </section>

      {/* ESTIMATE CALCULATOR */}
      <section className="section section-alt border-y">
        <div className="container">
          <EstimateCalculator />
        </div>
      </section>

      {/* TOOLS & TECHNOLOGY */}
      <section className="section">
        <div className="container text-center">
          <div className="section-head mx-auto" style={{maxWidth: '700px'}}>
            <p className="kicker">Technology</p>
            <h2>Industry-Standard Tools</h2>
            <p>Our estimating process is structured around practical plan review and transparent workbooks.</p>
          </div>
          <div className="grid grid-4 tool-grid text-start">
            {softwareTools.map((tool) => <div className="tool-card hover-lift" key={tool.name}><span>{tool.name.slice(0, 2).toUpperCase()}</span><h3>{tool.name}</h3><p>{tool.description}</p></div>)}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-head text-center">
            <p className="kicker text-warning">Client Feedback</p>
            <h2>What Contractors Say</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.map((t) => <TestimonialCard key={t.name + t.role} {...t} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-light">
        <div className="container mx-auto" style={{maxWidth: '800px'}}>
          <div className="section-head text-center">
            <p className="kicker">Common Questions</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <FAQ items={faqs.slice(0, 5)} />
          <div className="section-more text-center">
            <Link to="/faq" className="see-all-link">See all FAQs <Icon name="arrow-right" size={14} /></Link>
          </div>
        </div>
      </section>

      <CTA />

      {/* PREMIUM CSS STYLES FOR IMAGES & LAYOUT */}
      <style>{`
        /* Existing Styles Preserved */
        .why-item { display: flex; gap: 14px; margin-bottom: 24px; }
        .why-item svg { color: var(--safety, #F59E0B); flex-shrink: 0; margin-top: 4px; }
        .why-item h3 { margin-bottom: 6px; font-size: 1.1rem; }
        .why-item p { margin-bottom: 0; color: var(--text-muted); }

        .process-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
        .process-list li { display: flex; gap: 24px; align-items: flex-start; padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .process-list li:first-child { border-top: 1px solid rgba(255,255,255,0.1); }
        .process-index { font-family: var(--font-display); font-weight: 800; font-size: 1.6rem; color: var(--safety, #F59E0B); flex-shrink: 0; width: 50px; }
        .process-list h3 { color: #fff; margin-bottom: 4px; }
        .text-muted-light { color: #94a3b8; }

        .tool-grid { gap: 20px; }
        .tool-card { background: #fff; border: 1px solid #e2e8f0; padding: 30px; border-radius: 8px; transition: all 0.3s ease; }
        .tool-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.05); border-color: var(--safety, #F59E0B); }
        .tool-card span { display:inline-flex; width:40px; height:40px; align-items:center; justify-content:center; background:#0f172a; color:#F59E0B; font-weight:bold; border-radius: 4px; margin-bottom:20px; }
        .tool-card h3 { font-size:1.1rem; margin-bottom:10px; }

        .see-all-link { display: inline-flex; align-items: center; gap: 6px; font-weight: 600; color: #475569; margin-top: 8px; text-decoration: none; }
        .see-all-link:hover { color: var(--safety, #F59E0B); }

        /* NEW STYLES FOR IMAGE LAYOUTS */
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .align-center { align-items: center; }
        .flex-between { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; }
        
        .image-showcase { position: relative; width: 100%; border-radius: 12px; }
        .premium-img { width: 100%; height: auto; object-fit: cover; border-radius: 12px; min-height: 450px; max-height: 550px; }
        .shadow-lg { box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
        
        .image-badge { position: absolute; bottom: -20px; left: -20px; background: #0f172a; color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #F59E0B; box-shadow: 0 10px 20px rgba(0,0,0,0.2); font-size: 0.9rem; }
        .image-badge strong { color: #F59E0B; font-size: 1.5rem; display: block; margin-bottom: 5px; }

        .premium-checklist { list-style: none; padding: 0; }
        .premium-checklist li { margin-bottom: 15px; display: flex; align-items: center; gap: 10px; font-size: 1.05rem; }
        .premium-checklist li svg { color: #F59E0B; }

        /* PORTFOLIO IMAGE CARDS - TEXT FORCED TO WHITE */
        .portfolio-preview-card.with-bg-image { 
          min-height: 350px; 
          background-size: cover; 
          background-position: center; 
          border-radius: 12px;
          display: flex; 
          align-items: flex-end; 
          padding: 24px;
          transition: transform 0.3s ease;
          border: none;
        }
        .portfolio-preview-card.with-bg-image:hover { transform: translateY(-8px); }
        .portfolio-content { position: relative; z-index: 2; width: 100%; }
        .portfolio-preview-card.with-bg-image h3 { color: #FFFFFF !important; font-size: 1.25rem; margin-bottom: 6px; }
        .portfolio-preview-card.with-bg-image p { color: #F1F5F9 !important; display: flex; align-items: center; gap: 6px; margin: 0; }
        .portfolio-tag { display: inline-block; font-weight: bold; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; color: #F59E0B !important; }
        
        /* RESPONSIVE FIXES */
        .show-mobile-only { display: none; }
        @media (max-width: 991px) {
          .grid-2 { grid-template-columns: 1fr; gap: 2rem !important; }
          .order-mobile-1 { order: 1; }
          .order-mobile-2 { order: 2; margin-top: 2rem; }
          .image-badge { left: 20px; bottom: 20px; }
          .premium-img { min-height: 300px; }
        }
        @media (max-width: 768px) {
          .hide-mobile { display: none; }
          .show-mobile-only { display: block; }
          .flex-between { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  )
}