// Editable placeholder statistics — update the values in this array (or where it's used).
export default function StatBlock({ stats }) {
  return (
    <div className="stat-block">
      {stats.map((s) => (
        <div className="stat-item" key={s.label}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}

      <style>{`
        .stat-block {
          display: grid;
          grid-template-columns: repeat(${stats.length}, 1fr);
          gap: 24px;
        }
        .stat-item { border-left: 2px solid var(--safety); padding-left: 16px; }
        .stat-value { font-family: var(--font-display); font-weight: 800; font-size: 2.2rem; }
        .stat-label { font-size: 0.88rem; color: var(--white-70); margin-top: 4px; }
        @media (max-width: 760px) {
          .stat-block { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  )
}
