import PageBanner from '../components/PageBanner.jsx'
import CTA from '../components/CTA.jsx'
import { processSteps } from '../data/services.js'
import Icon from '../components/Icon.jsx'

export default function HowItWorks() {
  return (
    <div className="how-it-works-page smooth-fade-in">
      <PageBanner
        kicker="Our Process"
        title="How It Works"
        description="A straightforward five-step process from the moment you send us your plans to the day you receive your finished estimate."
      />

      {/* IMAGE 1: HERO WORKFLOW BANNER */}
      <section className="section section-tight pb-0">
        <div className="container">
          <div className="process-hero-banner shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Construction Estimating Workflow" 
              className="process-banner-img"
            />
            <div className="process-banner-overlay">
              <span className="kicker text-warning">Streamlined Execution</span>
              <h2>Designed for Tight Bid Deadlines</h2>
              <p>We combine digital takeoff software with experienced human oversight to deliver precise numbers fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="section">
        <div className="container">
          <div className="steps-wrapper mx-auto">
            <ol className="steps-list">
              {processSteps.map((step, i) => (
                <li className="luxury-step-card hover-lift" key={step.title}>
                  <div className="steps-index-box">
                    <span className="steps-index">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="steps-content">
                    <h2>{step.title}</h2>
                    <p>{step.summary}</p>
                  </div>
                  <div className="step-check-icon">
                    <Icon name="check" size={16} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 3-IMAGE GALLERY GRID (IMAGES 2, 3, AND 4) */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head text-center mx-auto" style={{maxWidth: '700px'}}>
            <p className="kicker text-warning">Visual Insight</p>
            <h2>Precision in Every Phase</h2>
            <p>From initial blueprint review to final workbook delivery, see how our team handles your project.</p>
          </div>
          
          <div className="grid grid-3 process-gallery-grid">
            <div className="gallery-card hover-lift">
              <img 
                src="https://images.pexels.com/photos/8308917/pexels-photo-8308917.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Blueprint Takeoff" 
              />
              <div className="gallery-info">
                <h3>1. Detailed Takeoffs</h3>
                <p>Precise measurement of materials straight from architectural drawings.</p>
              </div>
            </div>

            <div className="gallery-card hover-lift">
              <img 
                src="https://images.pexels.com/photos/4394165/pexels-photo-4394165.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Cost Analysis" 
              />
              <div className="gallery-info">
                <h3>2. Localized Pricing</h3>
                <p>Pricing adjusted accurately according to your specific region or city.</p>
              </div>
            </div>

            <div className="gallery-card hover-lift">
              <img 
                src="https://images.pexels.com/photos/5849579/pexels-photo-5849579.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Final Review" 
              />
              <div className="gallery-info">
                <h3>3. Cross-Checked Delivery</h3>
                <p>Final reports reviewed by senior estimators before hitting your inbox.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA title="Ready to Start Your Estimate?" />

      <style>{`
        /* Cinematic Banner Styling */
        .process-hero-banner {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          max-height: 380px;
          margin-bottom: 20px;
        }
        .process-banner-img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          display: block;
        }
        .process-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.3));
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px;
          color: #ffffff;
        }
        .process-banner-overlay h2 {
          color: #ffffff;
          font-size: 2rem;
          margin: 6px 0;
        }
        .process-banner-overlay p {
          color: rgba(255, 255, 255, 0.8);
          max-width: 700px;
          margin: 0;
          font-size: 1.05rem;
        }

        /* Steps Layout */
        .steps-wrapper { 
          max-width: 850px; 
        }
        .steps-list { 
          list-style: none; 
          margin: 0; 
          padding: 0; 
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .luxury-step-card {
          display: flex;
          align-items: center;
          gap: 28px;
          background: #ffffff;
          padding: 32px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          position: relative;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .luxury-step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          border-color: #cbd5e1;
        }

        .steps-index-box {
          width: 65px;
          height: 65px;
          background: #0f172a;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 20px rgba(15,23,42,0.15);
        }

        .steps-index {
          font-family: var(--font-display); 
          font-weight: 800; 
          font-size: 1.5rem;
          color: #F59E0B;
        }

        .steps-content {
          flex-grow: 1;
        }

        .steps-list h2 { 
          margin-bottom: 6px; 
          font-size: 1.25rem;
          color: #0f172a;
        }

        .steps-content p {
          color: #64748B;
          margin: 0;
          line-height: 1.6;
          font-size: 0.98rem;
        }

        .step-check-icon {
          width: 32px;
          height: 32px;
          background: #f1f5f9;
          color: #F59E0B;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* 3-Image Gallery Grid Styling */
        .process-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .gallery-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }

        .gallery-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .gallery-info {
          padding: 24px;
        }

        .gallery-info h3 {
          font-size: 1.15rem;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .gallery-info p {
          color: #64748B;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Smooth Cinematic Fade-in Animation */
        .smooth-fade-in {
          animation: fadeInSmooth 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInSmooth {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .process-gallery-grid {
            grid-template-columns: 1fr;
          }
          .luxury-step-card { 
            flex-direction: column; 
            align-items: flex-start;
            gap: 16px;
            padding: 24px;
          }
          .steps-index-box {
            width: 50px;
            height: 50px;
          }
          .steps-index {
            font-size: 1.2rem;
          }
          .process-banner-overlay {
            padding: 24px;
          }
          .process-banner-overlay h2 {
            font-size: 1.5rem;
          }
          .step-check-icon {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}