// import PageBanner from '../components/PageBanner.jsx'
// import Button from '../components/Button.jsx'
// import Icon from '../components/Icon.jsx'
// import CTA from '../components/CTA.jsx'
// import { coreServices, tradeServices } from '../data/services.js'

// export default function Services() {
//   return (
//     <>
//       <PageBanner
//         kicker="Our Services"
//         title="Construction Estimating Services"
//         description="Detailed, trade-aware estimating and takeoff services for contractors across the USA, Canada and Australia."
//       />

//       <section className="section">
//         <div className="container">
//           <div className="core-service-list">
//             {coreServices.map((s) => (
//               <article id={s.slug} className="core-service" key={s.slug}>
//                 <div className="core-service-icon"><Icon name={s.icon} size={28} /></div>
//                 <div className="core-service-body">
//                   <h2>{s.title}</h2>
//                   <p>{s.summary}</p>
//                   <div className="core-service-grid">
//                     <div>
//                       <h4>What's Included</h4>
//                       <ul>
//                         {s.included.map((item) => <li key={item}><Icon name="check" size={14} />{item}</li>)}
//                       </ul>
//                     </div>
//                     <div>
//                       <h4>Benefits</h4>
//                       <ul>
//                         {s.benefits.map((item) => <li key={item}><Icon name="check" size={14} />{item}</li>)}
//                       </ul>
//                     </div>
//                   </div>
//                   <Button to="/quote" variant="dark-outline" withArrow>Request This Service</Button>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section section-alt">
//         <div className="container">
//           <div className="section-head">
//             <p className="kicker">Trade-Specific Estimating</p>
//             <h2>Specialized Estimating by Trade</h2>
//             <p>Focused takeoffs and cost estimates for individual trades, ideal for subcontractor bids.</p>
//           </div>
//           <div className="grid grid-3">
//             {tradeServices.map((t) => (
//               <div className="card" key={t.slug}>
//                 <h3>{t.title}</h3>
//                 <p>{t.summary}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <CTA />

//       <style>{`
//         .core-service-list { display: flex; flex-direction: column; gap: 64px; }
//         .core-service { display: flex; gap: 32px; scroll-margin-top: 100px; }
//         .core-service-icon {
//           width: 56px; height: 56px; flex-shrink: 0;
//           display: flex; align-items: center; justify-content: center;
//           background: var(--ink); color: var(--safety);
//         }
//         .core-service-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin: 20px 0 28px; }
//         .core-service-grid h4 { font-family: var(--font-display); font-size: 0.9rem; margin-bottom: 12px; }
//         .core-service-grid ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
//         .core-service-grid li { display: flex; gap: 8px; align-items: flex-start; font-size: 0.92rem; color: var(--ink-70); }
//         .core-service-grid li svg { color: var(--steel); flex-shrink: 0; margin-top: 3px; }
//         @media (max-width: 720px) {
//           .core-service { flex-direction: column; }
//           .core-service-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>
//     </>
//   )
// }



import PageBanner from '../components/PageBanner.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import CTA from '../components/CTA.jsx'
import { coreServices, tradeServices } from '../data/services.js'

export default function Services() {
  return (
    <div className="services-page smooth-fade-in">
      <PageBanner
        kicker="Our Services"
        title="Construction Estimating Services"
        description="Detailed, trade-aware estimating and takeoff services for contractors across the USA, Canada and Australia."
      />

      {/* CORE SERVICES */}
      <section className="section">
        <div className="container">
          <div className="core-service-list">
            {coreServices.map((s, index) => (
              <article id={s.slug} className="core-service luxury-service-card" key={s.slug}>
                <div className="core-service-icon"><Icon name={s.icon} size={28} /></div>
                <div className="core-service-body">
                  <h2>{s.title}</h2>
                  <p>{s.summary}</p>
                  <div className="core-service-grid">
                    <div>
                      <h4>What's Included</h4>
                      <ul>
                        {s.included.map((item) => <li key={item}><Icon name="check" size={14} />{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4>Benefits</h4>
                      <ul>
                        {s.benefits.map((item) => <li key={item}><Icon name="check" size={14} />{item}</li>)}
                      </ul>
                    </div>
                  </div>
                  <Button to="/quote" variant="dark-outline" withArrow>Request This Service</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRADE-SPECIFIC ESTIMATING WITH LUXURY BANNER */}
      <section className="section section-alt trade-section-bg">
        <div className="container">
          <div className="section-head text-center mx-auto" style={{maxWidth: '750px'}}>
            <p className="kicker text-warning">Trade-Specific Estimating</p>
            <h2>Specialized Estimating by Trade</h2>
            <p>Focused takeoffs and cost estimates for individual trades, ideal for subcontractor bids.</p>
          </div>
          <div className="grid grid-3">
            {tradeServices.map((t) => (
              <div className="card luxury-trade-card hover-lift" key={t.slug}>
                <div className="trade-card-accent"></div>
                <h3>{t.title}</h3>
                <p>{t.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      {/* LUXURY STYLING & ANIMATIONS */}
      <style>{`
        .core-service-list { display: flex; flex-direction: column; gap: 48px; }
        
        .core-service { 
          display: flex; 
          gap: 32px; 
          scroll-margin-top: 100px; 
          background: #ffffff;
          padding: 40px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .core-service:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: #cbd5e1;
        }

        .core-service-icon {
          width: 64px; height: 64px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: #0f172a; color: #F59E0B;
          border-radius: 8px;
          box-shadow: 0 8px 20px rgba(15,23,42,0.15);
        }

        .core-service-body h2 {
          font-size: 1.75rem;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .core-service-body > p {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .core-service-grid { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 32px; 
          margin: 20px 0 32px; 
          background: #f8fafc;
          padding: 24px;
          border-radius: 8px;
          border: 1px solid #f1f5f9;
        }
        
        .core-service-grid h4 { font-family: var(--font-display); font-size: 0.95rem; margin-bottom: 14px; color: #0f172a; }
        .core-service-grid ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .core-service-grid li { display: flex; gap: 10px; align-items: flex-start; font-size: 0.92rem; color: #334155; line-height: 1.5; }
        .core-service-grid li svg { color: #F59E0B; flex-shrink: 0; margin-top: 3px; }

        /* Trade Cards Luxury Polish */
        .luxury-trade-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 32px;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .trade-card-accent {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 4px;
          background: #F59E0B;
        }
        .luxury-trade-card h3 {
          font-size: 1.2rem;
          color: #0f172a;
          margin-bottom: 12px;
        }
        .luxury-trade-card p {
          color: #64748B;
          font-size: 0.95rem;
          line-height: 1.6;
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

        @media (max-width: 720px) {
          .core-service { flex-direction: column; padding: 24px; }
          .core-service-grid { grid-template-columns: 1fr; gap: 20px; padding: 16px; }
          .core-service-icon { width: 50px; height: 50px; }
        }
      `}</style>
    </div>
  )
}