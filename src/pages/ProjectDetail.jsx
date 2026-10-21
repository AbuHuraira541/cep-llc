// import { Link, useParams } from 'react-router-dom'
// import Button from '../components/Button.jsx'
// import CTA from '../components/CTA.jsx'
// import Icon from '../components/Icon.jsx'
// import { getProjectBySlug } from '../data/portfolio.js'

// export default function ProjectDetail() {
//   const { slug } = useParams()
//   const project = getProjectBySlug(slug)

//   if (!project) {
//     return (
//       <section className="section project-empty smooth-fade-in">
//         <div className="container text-center" style={{padding: '120px 0'}}>
//           <h1>Project Not Found</h1>
//           <p style={{color: '#64748B', margin: '15px 0 25px'}}>The project you are looking for does not exist or has been removed.</p>
//           <Link className="btn btn-primary" to="/portfolio" style={{padding: '12px 24px', background: '#0f172a', color: '#fff', borderRadius: '6px', textDecoration: 'none'}}>
//             ← Back to Portfolio
//           </Link>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <div className="project-detail-page smooth-fade-in">
//       {/* CINEMATIC HERO HEADER */}
//       <section className="project-hero">
//         <img src={project.image} alt={project.type} />
//         <div className="project-overlay" />
//         <div className="container project-hero-content">
//           <Link to="/portfolio" className="back-link">
//             ← Back to Portfolio
//           </Link>
//           <span className="project-tag-badge">{project.category}</span>
//           <h1>{project.type}</h1>
//           <p className="project-hero-location">{project.location}</p>
//         </div>
//       </section>

//       {/* PROJECT SNAPSHOT & DELIVERABLES */}
//       <section className="section">
//         <div className="container project-layout">
//           <div>
//             <p className="kicker">Project Detailed Overview</p>
//             <h2>Comprehensive Bid Support & Takeoff Execution</h2>
//             <p className="project-main-desc">{project.description}</p>
            
//             <div className="project-facts">
//               <div>
//                 <small>Project Location</small>
//                 <strong>{project.location}</strong>
//               </div>
//               <div>
//                 <small>Service Scope</small>
//                 <strong>{project.scope}</strong>
//               </div>
//               <div>
//                 <small>Delivery Timeline</small>
//                 <strong>{project.timeline || '5 Business Days'}</strong>
//               </div>
//               <div>
//                 <small>Takeoff Accuracy</small>
//                 <strong className="text-warning">{project.accuracy || '99.0%'}</strong>
//               </div>
//             </div>
//           </div>

//           <aside className="project-sidebar shadow-lg">
//             <h3>Key Deliverables</h3>
//             <ul>
//               {project.deliverables && project.deliverables.map((item, index) => (
//                 <li key={index}>✓ {item}</li>
//               ))}
//             </ul>
//             <Button to="/quote" variant="primary" block>Start a Similar Project</Button>
//           </aside>
//         </div>
//       </section>

//       {/* CHALLENGE & APPROACH CASE GRID */}
//       <section className="section section-alt border-y">
//         <div className="container case-grid">
//           <div className="case-box">
//             <p className="kicker text-warning">The Challenge</p>
//             <h2>Navigating Complex Requirements</h2>
//             <p>{project.challenge}</p>
//           </div>
//           <div className="case-box">
//             <p className="kicker text-warning">Our Approach</p>
//             <h2>Strategic Execution & Takeoffs</h2>
//             <p>{project.solution}</p>
//           </div>
//         </div>
//       </section>

//       {/* CLIENT FEEDBACK QUOTE SECTION */}
//       {project.clientFeedback && (
//         <section className="section">
//           <div className="container mx-auto" style={{maxWidth: '850px'}}>
//             <div className="project-feedback-card">
//               <span className="feedback-quote-mark">“</span>
//               <p className="feedback-text">{project.clientFeedback}</p>
//               <div className="feedback-meta">
//                 <strong>Verified Client Review</strong>
//                 <span>{project.type} Project Stakeholder</span>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       <CTA title="Have a project with a similar scope?" />

//       <style>{`
//         .project-hero {
//           height: 540px;
//           position: relative;
//           display: flex;
//           align-items: flex-end;
//           overflow: hidden;
//           background: #0f172a;
//         }
//         .project-hero > img, .project-overlay {
//           position: absolute;
//           inset: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
//         .project-overlay {
//           background: linear-gradient(0deg, rgba(15,23,42,0.96) 10%, rgba(15,23,42,0.4) 100%);
//         }
//         .project-hero-content {
//           position: relative;
//           color: #ffffff;
//           padding-bottom: 60px;
//           z-index: 2;
//         }
//         .back-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           color: rgba(255,255,255,0.8);
//           font: 600 0.9rem var(--font-display);
//           text-decoration: none;
//           margin-bottom: 16px;
//           transition: color 0.2s;
//         }
//         .back-link:hover { color: #F59E0B; }
        
//         .project-tag-badge {
//           display: inline-block;
//           background: #F59E0B;
//           color: #0f172a;
//           font: 700 0.75rem var(--font-display);
//           letter-spacing: 0.08em;
//           text-transform: uppercase;
//           padding: 4px 10px;
//           border-radius: 4px;
//           margin-bottom: 12px;
//         }
//         .project-hero-content h1 {
//           margin: 0;
//           font-size: 2.5rem;
//           color: #ffffff;
//         }
//         .project-hero-location {
//           color: rgba(255,255,255,0.8);
//           margin-top: 10px;
//           font-size: 1.05rem;
//         }

//         .project-layout {
//           display: grid;
//           grid-template-columns: 1.3fr 0.7fr;
//           gap: 60px;
//           align-items: start;
//         }
//         .project-main-desc {
//           font-size: 1.08rem;
//           color: #475569;
//           line-height: 1.8;
//           margin-top: 16px;
//         }

//         .project-facts {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 1px;
//           margin-top: 40px;
//           background: #e2e8f0;
//           border-radius: 8px;
//           overflow: hidden;
//           border: 1px solid #e2e8f0;
//         }
//         .project-facts div {
//           display: flex;
//           flex-direction: column;
//           gap: 6px;
//           background: #ffffff;
//           padding: 22px 24px;
//         }
//         .project-facts small {
//           font: 700 0.72rem var(--font-display);
//           color: #64748B;
//           text-transform: uppercase;
//           letter-spacing: 0.06em;
//         }
//         .project-facts strong {
//           color: #0f172a;
//           font-size: 1.05rem;
//         }
//         .text-warning { color: #D97706 !important; }

//         .project-sidebar {
//           background: #0f172a;
//           color: #ffffff;
//           padding: 36px;
//           border-radius: 12px;
//           border-left: 4px solid #F59E0B;
//         }
//         .project-sidebar h3 {
//           color: #ffffff;
//           font-size: 1.3rem;
//           margin-bottom: 20px;
//         }
//         .project-sidebar ul {
//           padding: 0;
//           margin: 0 0 32px;
//           list-style: none;
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//         }
//         .project-sidebar li {
//           color: rgba(255,255,255,0.85);
//           font-size: 0.95rem;
//           border-bottom: 1px solid rgba(255,255,255,0.1);
//           padding-bottom: 12px;
//         }

//         .case-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 50px;
//         }
//         .case-box h2 {
//           font-size: 1.5rem;
//           margin: 8px 0 16px;
//           color: #0f172a;
//         }
//         .case-box p {
//           color: #475569;
//           line-height: 1.7;
//           font-size: 1.02rem;
//           margin: 0;
//         }

//         .project-feedback-card {
//           background: #ffffff;
//           border: 1px solid #e2e8f0;
//           border-left: 6px solid #F59E0B;
//           padding: 40px;
//           border-radius: 12px;
//           position: relative;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.03);
//           text-align: center;
//         }
//         .feedback-quote-mark {
//           font-size: 4rem;
//           font-family: serif;
//           color: #F59E0B;
//           line-height: 1;
//           display: block;
//           margin-bottom: -15px;
//         }
//         .feedback-text {
//           font-size: 1.15rem;
//           color: #1E293B;
//           font-style: italic;
//           line-height: 1.7;
//           margin-bottom: 20px;
//         }
//         .feedback-meta {
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//         }
//         .feedback-meta strong {
//           font-family: var(--font-display);
//           font-size: 0.95rem;
//           color: #0f172a;
//         }
//         .feedback-meta span {
//           font-size: 0.85rem;
//           color: #64748B;
//         }

//         .smooth-fade-in {
//           animation: fadeInSmooth 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }
//         @keyframes fadeInSmooth {
//           from { opacity: 0; transform: translateY(15px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @media(max-width: 900px) {
//           .project-layout, .case-grid {
//             grid-template-columns: 1fr;
//             gap: 40px;
//           }
//           .project-hero {
//             height: 420px;
//           }
//           .project-hero-content h1 {
//             font-size: 2rem;
//           }
//           .project-facts {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }



import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { portfolio } from '../data/portfolio.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Local static data se matching slug wala project dhoondna
    const foundProject = portfolio.find(p => p.slug === slug)
    if (foundProject) {
      setProject(foundProject)
    }
    setLoading(false)
  }, [slug])

  if (loading) return <div className="container" style={{padding:'100px'}}>Loading...</div>
  
  if (!project) {
    return (
      <section className="section project-empty smooth-fade-in">
        <div className="container text-center" style={{padding: '120px 0'}}>
          <h1>Project Not Found</h1>
          <p style={{color: '#64748B', margin: '15px 0 25px'}}>The project you are looking for does not exist or has been removed.</p>
          <Link className="btn btn-primary" to="/portfolio" style={{padding: '12px 24px', background: '#0f172a', color: '#fff', borderRadius: '6px', textDecoration: 'none'}}>
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    )
  }

  // Field names fallback (chahe title ho ya type, dono handle honge)
  const projectTitle = project.title || project.type
  const projectImage = project.image

  return (
    <div className="project-detail-page smooth-fade-in">
      {/* CINEMATIC HERO HEADER */}
      <section className="project-hero">
        <img src={projectImage} alt={projectTitle} />
        <div className="project-overlay" />
        <div className="container project-hero-content">
          <Link to="/portfolio" className="back-link">
            ← Back to Portfolio
          </Link>
          <span className="project-tag-badge">{project.category}</span>
          <h1>{projectTitle}</h1>
          <p className="project-hero-location">{project.location}</p>
        </div>
      </section>

      {/* PROJECT SNAPSHOT & DELIVERABLES */}
      <section className="section">
        <div className="container project-layout">
          <div>
            <p className="kicker">Project Detailed Overview</p>
            <h2>Comprehensive Bid Support & Takeoff Execution</h2>
            <p className="project-main-desc">{project.description}</p>
            
            <div className="project-facts">
              <div>
                <small>Project Location</small>
                <strong>{project.location}</strong>
              </div>
              <div>
                <small>Service Scope</small>
                <strong>{project.scope}</strong>
              </div>
              <div>
                <small>Delivery Timeline</small>
                <strong>{project.timeline || '5 Business Days'}</strong>
              </div>
              <div>
                <small>Takeoff Accuracy</small>
                <strong className="text-warning">{project.accuracy || '99.0%'}</strong>
              </div>
            </div>
          </div>

          <aside className="project-sidebar shadow-lg">
            <h3>Key Deliverables</h3>
            <ul>
              {project.deliverables && project.deliverables.map((item, index) => (
                <li key={index}>✓ {item}</li>
              ))}
            </ul>
            <Link to="/quote" className="btn btn-primary" style={{display:'block', textAlign:'center', background:'#F59E0B', color:'#0f172a', padding:'12px', borderRadius:'6px', fontWeight:'bold', textDecoration:'none'}}>Start a Similar Project</Link>
          </aside>
        </div>
      </section>

      {/* CHALLENGE & APPROACH CASE GRID */}
      <section className="section section-alt border-y">
        <div className="container case-grid">
          <div className="case-box">
            <p className="kicker text-warning">The Challenge</p>
            <h2>Navigating Complex Requirements</h2>
            <p>{project.challenge}</p>
          </div>
          <div className="case-box">
            <p className="kicker text-warning">Our Approach</p>
            <h2>Strategic Execution & Takeoffs</h2>
            <p>{project.solution}</p>
          </div>
        </div>
      </section>

      {/* CLIENT FEEDBACK QUOTE SECTION */}
      {project.clientFeedback && (
        <section className="section">
          <div className="container mx-auto" style={{maxWidth: '850px'}}>
            <div className="project-feedback-card">
              <span className="feedback-quote-mark">“</span>
              <p className="feedback-text">{project.clientFeedback}</p>
              <div className="feedback-meta">
                <strong>Verified Client Review</strong>
                <span>{projectTitle} Project Stakeholder</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <style>{`
        .project-hero {
          height: 540px;
          position: relative;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: #0f172a;
        }
        .project-hero > img, .project-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .project-overlay {
          background: linear-gradient(0deg, rgba(15,23,42,0.96) 10%, rgba(15,23,42,0.4) 100%);
        }
        .project-hero-content {
          position: relative;
          color: #ffffff;
          padding-bottom: 60px;
          z-index: 2;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.8);
          font: 600 0.9rem var(--font-display);
          text-decoration: none;
          margin-bottom: 16px;
          transition: color 0.2s;
        }
        .back-link:hover { color: #F59E0B; }
        
        .project-tag-badge {
          display: inline-block;
          background: #F59E0B;
          color: #0f172a;
          font: 700 0.75rem var(--font-display);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
          margin-bottom: 12px;
        }
        .project-hero-content h1 {
          margin: 0;
          font-size: 2.5rem;
          color: #ffffff;
        }
        .project-hero-location {
          color: rgba(255,255,255,0.8);
          margin-top: 10px;
          font-size: 1.05rem;
        }

        .project-layout {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 60px;
          align-items: start;
        }
        .project-main-desc {
          font-size: 1.08rem;
          color: #475569;
          line-height: 1.8;
          margin-top: 16px;
        }

        .project-facts {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          margin-top: 40px;
          background: #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }
        .project-facts div {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: #ffffff;
          padding: 22px 24px;
        }
        .project-facts small {
          font: 700 0.72rem var(--font-display);
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .project-facts strong {
          color: #0f172a;
          font-size: 1.05rem;
        }
        .text-warning { color: #D97706 !important; }

        .project-sidebar {
          background: #0f172a;
          color: #ffffff;
          padding: 36px;
          border-radius: 12px;
          border-left: 4px solid #F59E0B;
        }
        .project-sidebar h3 {
          color: #ffffff;
          font-size: 1.3rem;
          margin-bottom: 20px;
        }
        .project-sidebar ul {
          padding: 0;
          margin: 0 0 32px;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .project-sidebar li {
          color: rgba(255,255,255,0.85);
          font-size: 0.95rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 12px;
        }

        .case-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }
        .case-box h2 {
          font-size: 1.5rem;
          margin: 8px 0 16px;
          color: #0f172a;
        }
        .case-box p {
          color: #475569;
          line-height: 1.7;
          font-size: 1.02rem;
          margin: 0;
        }

        .project-feedback-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-left: 6px solid #F59E0B;
          padding: 40px;
          border-radius: 12px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          text-align: center;
        }
        .feedback-quote-mark {
          font-size: 4rem;
          font-family: serif;
          color: #F59E0B;
          line-height: 1;
          display: block;
          margin-bottom: -15px;
        }
        .feedback-text {
          font-size: 1.15rem;
          color: #1E293B;
          font-style: italic;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .feedback-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .feedback-meta strong {
          font-family: var(--font-display);
          font-size: 0.95rem;
          color: #0f172a;
        }
        .feedback-meta span {
          font-size: 0.85rem;
          color: #64748B;
        }

        .smooth-fade-in {
          animation: fadeInSmooth 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInSmooth {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media(max-width: 900px) {
          .project-layout, .case-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .project-hero {
            height: 420px;
          }
          .project-hero-content h1 {
            font-size: 2rem;
          }
          .project-facts {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}