import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function ServiceCard({ icon, title, summary, slug }) {
  return (
    <div className="card service-card">
      {icon && (
        <div className="service-icon">
          <Icon name={icon} size={26} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{summary}</p>
      <Link to={`/services${slug ? `#${slug}` : ''}`} className="service-link">
        Learn More <Icon name="arrow-right" size={14} />
      </Link>

      <style>{`
        .service-card { display: flex; flex-direction: column; height: 100%; }
        .service-icon {
          width: 48px; height: 48px;
          display: flex; align-items: center; justify-content: center;
          background: var(--ink);
          color: var(--safety);
          margin-bottom: 20px;
        }
        .service-card p { flex: 1; }
        .service-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-display); font-weight: 600; font-size: 0.88rem;
          color: var(--steel); margin-top: 8px;
        }
        .service-link:hover { color: var(--safety); }
      `}</style>
    </div>
  )
}
