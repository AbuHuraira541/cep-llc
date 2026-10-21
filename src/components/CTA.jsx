import Button from './Button.jsx'

export default function CTA({ title = 'Ready to Get Your Project Estimated?', description, buttonLabel = 'Get a Free Quote', to = '/quote' }) {
  return (
    <section className="cta section-tight">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <Button to={to} variant="primary" withArrow>{buttonLabel}</Button>
      </div>

      <style>{`
        .cta { background: var(--ink); color: var(--white); }
        .cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; }
        .cta h2 { color: var(--white); margin-bottom: 6px; }
        .cta p { color: var(--white-70); margin-bottom: 0; }
      `}</style>
    </section>
  )
}
