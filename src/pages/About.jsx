import PageBanner from '../components/PageBanner.jsx'
import StatBlock from '../components/StatBlock.jsx'
import CTA from '../components/CTA.jsx'
import Icon from '../components/Icon.jsx'

const stats = [
  { value: '500+', label: 'Projects Estimated' },
  { value: '3', label: 'Countries Served' },
  { value: '15+', label: 'Trades Covered' },
  { value: '24/7', label: 'Support Availability' },
]

export default function About() {
  return (
    <>
      <PageBanner
        kicker="About CEP"
        title="Estimating Support Built Around Contractor Workflows"
        description="CEP Construction Estimation Partner LLC provides construction estimating and quantity takeoff services to contractors across the USA, Canada and Australia."
      />

      {/* MISSION & VISION WITH IMAGE */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 align-center" style={{gap: '4rem'}}>
            <div>
              <div className="section-head mb-4">
                <p className="kicker">Who We Are</p>
                <h2>Driven by Precision & Accuracy</h2>
              </div>
              <div className="about-content-box">
                <h3>Our Mission</h3>
                <p>
                  To give contractors and builders accurate, well-organized estimates and takeoffs
                  so they can spend less time on paperwork and more time winning and running projects.
                </p>
                
                <h3 className="mt-4">Our Vision</h3>
                <p>
                  To be a dependable estimating partner for construction professionals across North
                  America and Australia, known for accuracy and clear communication.
                </p>
              </div>
            </div>
            <div className="image-showcase">
              <img src="/images/about-mission.jpg" alt="CEP Estimating Team at Work" className="premium-img shadow-lg" />
              <div className="image-badge">
                <strong>USA • CA • AUS</strong><br/>International Standards
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH & WHY US WITH IMAGE */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-2 align-center" style={{gap: '4rem'}}>
            <div className="image-showcase order-mobile-2">
              <img src="/images/about-approach.jpg" alt="Construction Blueprints Review" className="premium-img shadow-lg" />
            </div>
            <div className="order-mobile-1">
              <div className="section-head mb-4">
                <p className="kicker">How We Work</p>
                <h2>Our Approach & Commitment</h2>
              </div>
              <div className="about-content-box">
                <h3>Our Approach</h3>
                <p>
                  Every project starts with a careful review of your plans and scope. Quantities are
                  measured directly from the documents you provide, then cross-checked before pricing
                  is applied. Estimates are delivered in a format that fits into your existing bidding
                  process.
                </p>
                
                <h3 className="mt-4">Why Contractors Work With Us</h3>
                <p>
                  Contractors come to CEP for a second set of eyes on a bid, extra estimating capacity
                  during busy periods, or a dedicated partner for trade-specific takeoffs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <StatBlock stats={stats} />
          <p className="about-disclaimer">Figures shown are professional metrics based on active client project delivery.</p>
        </div>
      </section>

      <CTA title="Let's Talk About Your Next Project" buttonLabel="Get a Free Quote" />

      <style>{`
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .align-center { align-items: center; }
        
        .image-showcase { position: relative; width: 100%; border-radius: 12px; }
        .premium-img { width: 100%; height: auto; object-fit: cover; border-radius: 12px; min-height: 420px; max-height: 500px; }
        .shadow-lg { box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
        
        .image-badge { position: absolute; bottom: -20px; left: -20px; background: #0f172a; color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #F59E0B; box-shadow: 0 10px 20px rgba(0,0,0,0.2); font-size: 0.9rem; }
        .image-badge strong { color: #F59E0B; font-size: 1.1rem; display: block; margin-bottom: 2px; }

        .about-content-box h3 { font-size: 1.2rem; color: #0f172a; margin-bottom: 8px; font-family: var(--font-display); font-weight: 700; }
        .about-content-box p { color: #475569; line-height: 1.7; margin-bottom: 1.2rem; }
        
        .about-disclaimer { margin-top: 24px; font-size: 0.8rem; color: rgba(255,255,255,0.5); }

        @media (max-width: 991px) {
          .grid-2 { grid-template-columns: 1fr; gap: 2rem !important; }
          .order-mobile-1 { order: 1; }
          .order-mobile-2 { order: 2; margin-top: 2rem; }
          .image-badge { left: 20px; bottom: 20px; }
          .premium-img { min-height: 300px; }
        }
      `}</style>
    </>
  )
}