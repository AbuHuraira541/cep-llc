import PageBanner from '../components/PageBanner.jsx'

export default function Legal({ title }) {
  return (
    <>
      <PageBanner kicker="Legal" title={title} />
      <section className="section">
        <div className="container">
          <p>This is placeholder legal text. Replace this page with your actual {title.toLowerCase()} before launch.</p>
        </div>
      </section>
    </>
  )
}
