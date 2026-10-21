import React from 'react';
import Button from './Button.jsx';
import Icon from './Icon.jsx';

// 1. Purani 'import VIDEO_SRC...' wali lines delete kar dein.
// 2. Unki jagah ye variables banayen. (Public folder ki files hamesha '/' se start hoti hain)
const VIDEO_SRC = "/videos/video1.mp4";

// Agar aapki fallback image bhi public folder mein hai toh usko aise link karein ("/fallback.jpg"), 
// warna temporary taur par ye external link use kar lein:
const FALLBACK_IMAGE = "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster={FALLBACK_IMAGE}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      
      {/* Overlay to ensure text is readable over the video */}
      <div className="hero-overlay" />

      <div className="container hero-content">
        <p className="hero-markets smooth-reveal">USA &nbsp;•&nbsp; CANADA &nbsp;•&nbsp; AUSTRALIA</p>
        <h1 className="smooth-reveal delay-1">CEP Construction Estimation Partner LLC</h1>
        <p className="hero-tagline smooth-reveal delay-2">Professional Construction Estimating &amp; Quantity Takeoff Services</p>
        <p className="hero-desc smooth-reveal delay-2">
          Accurate estimating and detailed quantity takeoffs helping contractors, builders and
          construction professionals bid with confidence across the USA, Canada and Australia.
        </p>
        
        <div className="hero-actions smooth-reveal delay-3">
          <Button to="/quote" variant="primary">Get a Free Quote</Button>
          <Button to="/services" variant="outline">View Our Services</Button>
        </div>

        {/* LUXURY FLOATING TRUST PANEL */}
        <div className="hero-trust-panel smooth-reveal delay-4">
          <div className="trust-item"><span className="trust-icon">✦</span> Detailed Takeoffs</div>
          <div className="trust-item"><span className="trust-icon">✦</span> Bid-Ready Estimates</div>
          <div className="trust-item"><span className="trust-icon">✦</span> Confidential Handling</div>
        </div>
      </div>

      <a href="#trust" className="hero-scroll" aria-label="Scroll to next section">
        <Icon name="chevron-down" size={22} />
      </a>

      <style>{`
        .hero {
          position: relative;
          height: 100svh;
          min-height: 700px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--ink);
        }
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          filter: brightness(0.85);
        }
        
        /* Cinematic Gradient Overlay */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(14,27,43,0.5) 0%, rgba(14,27,43,0.85) 60%, rgba(14,27,43,0.98) 100%);
          z-index: 1;
        }
        
        .hero-content { 
          position: relative; 
          z-index: 2; 
          color: var(--white); 
          padding-top: 40px; 
          max-width: 950px;
        }
        
        .hero-markets {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          color: #F59E0B;
          margin-bottom: 24px;
          margin-left: 250px; /* Is value ko barha kar aap mazeed right par la sakte hain */
        }
        
        .hero h1 { 
          color: var(--white); 
          max-width: 18ch; 
          margin-bottom: 20px;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          font-weight: 800;
        }
        
        .hero-tagline {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.3rem;
          color: var(--white);
          max-width: 45ch;
          margin-bottom: 16px;
        }
        
        .hero-desc { 
          color: var(--white-70); 
          max-width: 58ch; 
          font-size: 1.1rem; 
          line-height: 1.7;
          margin-bottom: 40px; 
        }
        
        .hero-actions { 
          display: flex; 
          gap: 16px; 
          flex-wrap: wrap; 
          margin-bottom: 48px;
        }

        /* Glassmorphism Trust Panel */
        .hero-trust-panel {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 2rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.2rem 2.5rem;
          border-radius: 8px;
        }
        .trust-item {
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.03em;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .trust-icon { color: #F59E0B; font-size: 1.2rem; }
        
        .hero-scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          color: var(--white-70);
          animation: bob 2.2s ease-in-out infinite;
          transition: color 0.3s ease;
        }
        .hero-scroll:hover { color: #F59E0B; }

        /* =========================================
           SMOOTH LUXURY ANIMATIONS
        ========================================= */
        .smooth-reveal {
          opacity: 0;
          transform: translateY(30px);
          animation: luxuryReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }
        .delay-4 { animation-delay: 0.6s; }

        @keyframes luxuryReveal {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bob {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        @media (max-width: 620px) {
          .hero { height: auto; padding-top: 120px; padding-bottom: 80px; }
          .hero-actions { flex-direction: column; align-items: flex-start; }
          .hero-actions .btn { width: 100%; }
          .hero-trust-panel { flex-direction: column; gap: 1rem; padding: 1.5rem; width: 100%; }
        }
      `}</style>
    </section>
  );
}