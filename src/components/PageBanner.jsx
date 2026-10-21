// Reusable page hero/banner used at the top of every inner page.
export default function PageBanner({ kicker, title, description }) {
  return (
    <section className="page-banner">
      <div className="container">
        {kicker && <p className="kicker">{kicker}</p>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  )
}
