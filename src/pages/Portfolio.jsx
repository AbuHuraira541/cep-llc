// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import PageBanner from '../components/PageBanner.jsx'
// import CTA from '../components/CTA.jsx'
// import Icon from '../components/Icon.jsx'
// import { portfolio, portfolioCategories } from '../data/portfolio.js'

// export default function Portfolio() {
//   const [active, setActive] = useState('All')
//   const filtered = active === 'All' ? portfolio : portfolio.filter((project) => project.category === active)

//   return (
//     <div className="portfolio-page smooth-fade-in">
//       <PageBanner 
//         kicker="Our Work" 
//         title="Project Portfolio" 
//         description="Representative project types and estimating workflows. Explore our completed commercial, residential, and industrial cost estimations." 
//       />

//       <section className="section">
//         <div className="container">
//           {/* Filter Category Pills */}
//           <div className="portfolio-filters">
//             {portfolioCategories.map((category) => (
//               <button 
//                 key={category} 
//                 className={`filter-pill ${active === category ? 'active' : ''}`} 
//                 onClick={() => setActive(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Portfolio Grid */}
//           <div className="grid grid-3 portfolio-grid-luxury">
//             {filtered.map((project) => (
//               <article className="card portfolio-card hover-lift" key={project.id}>
//                 <div className="portfolio-img-wrapper">
//                   <img src={project.image} alt={project.type} />
//                   <span className="portfolio-tag-floating">{project.category}</span>
//                 </div>
//                 <div className="portfolio-card-body">
//                   <h2>{project.type}</h2>
//                   <p className="portfolio-location"><Icon name="location" size={14} /> {project.location}</p>
//                   <p className="portfolio-scope"><strong>Scope:</strong> {project.scope}</p>
//                   <p className="portfolio-desc">{project.description}</p>
//                   <Link to={`/portfolio/${project.slug}`} className="text-link">
//                     View Project Details <Icon name="arrow-right" size={14} />
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CTA />

//       <style>{`
//         .portfolio-filters {
//           display: flex;
//           gap: 12px;
//           flex-wrap: wrap;
//           margin-bottom: 50px;
//           justify-content: center;
//         }
//         .filter-pill {
//           font: 600 0.9rem var(--font-display);
//           padding: 12px 24px;
//           border: 1px solid #cbd5e1;
//           border-radius: 999px;
//           background: #ffffff;
//           color: #475569;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.02);
//         }
//         .filter-pill.active, .filter-pill:hover {
//           background: #0f172a;
//           color: #ffffff;
//           border-color: #0f172a;
//           transform: translateY(-2px);
//           box-shadow: 0 6px 15px rgba(15,23,42,0.15);
//         }

//         .portfolio-grid-luxury {
//           gap: 32px;
//         }

//         .portfolio-card {
//           display: flex;
//           flex-direction: column;
//           background: #ffffff;
//           border: 1px solid #e2e8f0;
//           border-radius: 12px;
//           overflow: hidden;
//           transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//           box-shadow: 0 4px 6px rgba(0,0,0,0.02);
//           height: 100%;
//         }
//         .portfolio-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 20px 40px rgba(0,0,0,0.08);
//           border-color: #cbd5e1;
//         }

//         .portfolio-img-wrapper {
//           position: relative;
//           overflow: hidden;
//           height: 220px;
//         }
//         .portfolio-card img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//         }
//         .portfolio-card:hover img {
//           transform: scale(1.05);
//         }

//         .portfolio-tag-floating {
//           position: absolute;
//           top: 16px;
//           left: 16px;
//           background: rgba(15, 23, 42, 0.85);
//           backdrop-filter: blur(4px);
//           color: #F59E0B;
//           font: 700 0.75rem var(--font-display);
//           text-transform: uppercase;
//           letter-spacing: 0.05em;
//           padding: 6px 12px;
//           border-radius: 6px;
//         }

//         .portfolio-card-body {
//           display: flex;
//           flex: 1;
//           flex-direction: column;
//           padding: 28px;
//         }
//         .portfolio-card h2 {
//           font-size: 1.25rem;
//           color: #0f172a;
//           margin-bottom: 8px;
//         }
//         .portfolio-location {
//           font-size: 0.88rem;
//           color: #64748B;
//           margin-bottom: 12px;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .portfolio-scope {
//           font-size: 0.9rem;
//           color: #334155;
//           margin-bottom: 12px;
//         }
//         .portfolio-desc {
//           color: #64748B;
//           font-size: 0.92rem;
//           line-height: 1.6;
//           margin-bottom: 20px;
//           flex-grow: 1;
//         }

//         .text-link {
//           margin-top: auto;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           font: 700 0.9rem var(--font-display);
//           color: #0f172a;
//           text-decoration: none;
//           transition: color 0.2s ease;
//         }
//         .text-link:hover {
//           color: #F59E0B;
//         }

//         .smooth-fade-in {
//           animation: fadeInSmooth 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }
//         @keyframes fadeInSmooth {
//           from { opacity: 0; transform: translateY(15px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   )
// }




import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import CTA from '../components/CTA.jsx'
import Icon from '../components/Icon.jsx'
import { portfolio, portfolioCategories } from '../data/portfolio.js'

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' 
    ? portfolio 
    : portfolio.filter((p) => p.category === active)

  return (
    <div className="portfolio-page smooth-fade-in">
      <PageBanner 
        kicker="Our Work" 
        title="Project Portfolio" 
        description="Representative project types and estimating workflows. Explore our completed commercial, residential, and industrial cost estimations." 
      />

      <section className="section">
        <div className="container">
          {/* Filter Category Pills */}
          <div className="portfolio-filters">
            {portfolioCategories.map((category) => (
              <button 
                key={category} 
                className={`filter-pill ${active === category ? 'active' : ''}`} 
                onClick={() => setActive(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-3 portfolio-grid-luxury">
            {filtered.map((project) => (
              <article className="card portfolio-card hover-lift" key={project.id || project.slug}>
                <div className="portfolio-img-wrapper">
                  <img src={project.image} alt={project.title || project.type} />
                  <span className="portfolio-tag-floating">{project.category}</span>
                </div>
                <div className="portfolio-card-body">
                  <h2>{project.title || project.type}</h2>
                  <p className="portfolio-location"><Icon name="location" size={14} /> {project.location}</p>
                  <p className="portfolio-scope"><strong>Scope:</strong> {project.scope}</p>
                  <p className="portfolio-desc">{project.description}</p>
                  <Link to={`/portfolio/${project.slug}`} className="text-link">
                    View Project Details <Icon name="arrow-right" size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <style>{`
        .portfolio-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 50px;
          justify-content: center;
        }
        .filter-pill {
          font: 600 0.9rem var(--font-display);
          padding: 12px 24px;
          border: 1px solid #cbd5e1;
          border-radius: 999px;
          background: #ffffff;
          color: #475569;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        .filter-pill.active, .filter-pill:hover {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(15,23,42,0.15);
        }

        .portfolio-grid-luxury {
          gap: 32px;
        }

        .portfolio-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          height: 100%;
        }
        .portfolio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: #cbd5e1;
        }

        .portfolio-img-wrapper {
          position: relative;
          overflow: hidden;
          height: 220px;
        }
        .portfolio-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .portfolio-card:hover img {
          transform: scale(1.05);
        }

        .portfolio-tag-floating {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(4px);
          color: #F59E0B;
          font: 700 0.75rem var(--font-display);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 6px 12px;
          border-radius: 6px;
        }

        .portfolio-card-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 28px;
        }
        .portfolio-card h2 {
          font-size: 1.25rem;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .portfolio-location {
          font-size: 0.88rem;
          color: #64748B;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .portfolio-scope {
          font-size: 0.9rem;
          color: #334155;
          margin-bottom: 12px;
        }
        .portfolio-desc {
          color: #64748B;
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .text-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font: 700 0.9rem var(--font-display);
          color: #0f172a;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .text-link:hover {
          color: #F59E0B;
        }

        .smooth-fade-in {
          animation: fadeInSmooth 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInSmooth {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media(max-width: 900px) {
          .portfolio-grid-luxury {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}