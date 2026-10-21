export default function TestimonialCard({ summary, name, role, image }) {
  return (
    <div className="card testimonial-card">
      <p className="testimonial-quote">“{summary}”</p>
      
      <div className="testimonial-meta">
        {image && <img src={image} alt={name} className="client-image" />}
        
        <div className="client-info">
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>

      <style>{`
        .testimonial-card { 
          border-left-color: #F59E0B; /* Safety Gold */
          display: flex; 
          flex-direction: column; 
          justify-content: space-between;
          background-color: #FFFFFF; /* White background taake text clear dikhe */
        }
        .testimonial-quote { 
          font-size: 0.98rem; 
          color: #000000 !important;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-style: italic;
        }
        .testimonial-meta { 
          display: flex; 
          align-items: center; 
          gap: 15px; 
        }
        .client-image { 
          width: 50px; 
          height: 50px; 
          border-radius: 50%; 
          object-fit: cover; 
          border: 2px solid #e2e8f0;
        }
        .client-info { 
          display: flex; 
          flex-direction: column; 
          gap: 2px; 
        }
        .client-info strong { 
          font-family: var(--font-display); 
          font-size: 0.95rem; 
          color: #000000; /* Pure Black name */
        }
        .client-info span { 
          font-size: 0.85rem; 
          color: #475569; /* Dark Gray role */
        }
      `}</style>
    </div>
  )
}