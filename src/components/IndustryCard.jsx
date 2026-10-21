import Icon from './Icon.jsx';

export default function IndustryCard({ title, summary }) {
  return (
    <div className="card industry-card">
      <div className="industry-card-accent"></div>
      <div className="industry-card-header">
        <div className="industry-icon-box">
          <Icon name="check" size={18} />
        </div>
        <h3>{title}</h3>
      </div>
      <p>{summary}</p>

      <style>{`
        .industry-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 32px;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }
        .industry-card-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #F59E0B;
        }
        .industry-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 14px;
        }
        .industry-icon-box {
          width: 36px;
          height: 36px;
          background: #0f172a;
          color: #F59E0B;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          flex-shrink: 0;
        }
        .industry-card h3 {
          font-size: 1.2rem;
          color: #0f172a;
          margin: 0;
          font-family: var(--font-display);
          font-weight: 700;
        }
        .industry-card p {
          color: #64748B;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>
    </div>
  )
}