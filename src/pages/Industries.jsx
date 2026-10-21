import PageBanner from '../components/PageBanner.jsx'
import CTA from '../components/CTA.jsx'
import IndustryCard from '../components/IndustryCard.jsx'
import Icon from '../components/Icon.jsx'

const industryDetails = [
  { title: 'General Contractors', summary: 'Full-scope estimates covering every trade involved in a project, organized so you can move straight into your bid.' },
  { title: 'Subcontractors', summary: 'Focused, trade-specific takeoffs sized to exactly the scope you are bidding, without unrelated line items.' },
  { title: 'Residential Builders', summary: 'Repeatable estimating support for single- and multi-family builds, from foundation through finishes.' },
  { title: 'Commercial Contractors', summary: 'Estimates for retail, office, hospitality and mixed-use projects, including tenant improvement scope.' },
  { title: 'Industrial Contractors', summary: 'Cost and quantity estimates for warehouses, plants and other industrial facilities.' },
  { title: 'Developers', summary: 'Early-stage cost visibility to support feasibility studies and project go/no-go decisions.' },
  { title: 'Architects', summary: 'Independent quantity and cost checks to support design-stage budgeting conversations with clients.' },
  { title: 'Construction Companies', summary: 'Ongoing estimating capacity that scales with your bid volume, without adding in-house headcount.' },
]

export default function Industries() {
  return (
    <div className="industries-page smooth-fade-in">
      <PageBanner
        kicker="Industries We Serve"
        title="Estimating Support Across the Construction Industry"
        description="Whatever side of the project you're on, CEP tailors estimates and takeoffs to how you actually bid and build."
      />

      {/* LUXURY VISUAL FEATURE BANNER */}
      <section className="section section-tight pb-0">
        <div className="container">
          <div className="industries-hero-image-wrapper shadow-lg">
            <img 
              src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Construction Industries We Support" 
              className="industries-banner-img"
            />
            <div className="industries-banner-overlay">
              <span className="kicker text-warning">Global Expertise</span>
              <h2>Tailored Estimating for Every Sector</h2>
              <p>Built to match the distinct budgeting, takeoff, and bidding workflows of your specific market.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2 industries-grid">
            {industryDetails.map((i) => (
              <IndustryCard key={i.title} title={i.title} summary={i.summary} />
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <style>{`
        .industries-grid { 
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px; 
        }

        /* Cinematic Banner Styling */
        .industries-hero-image-wrapper {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          max-height: 400px;
        }
        .industries-banner-img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          display: block;
        }
        .industries-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.3));
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px;
          color: #ffffff;
        }
        .industries-banner-overlay h2 {
          color: #ffffff;
          font-size: 2rem;
          margin: 8px 0;
        }
        .industries-banner-overlay p {
          color: rgba(255, 255, 255, 0.8);
          max-width: 700px;
          margin: 0;
          font-size: 1.05rem;
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
          .industries-grid { 
            grid-template-columns: 1fr; 
          }
          .industries-banner-overlay {
            padding: 24px;
          }
          .industries-banner-overlay h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}