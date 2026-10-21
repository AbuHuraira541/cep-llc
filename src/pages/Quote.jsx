import PageBanner from '../components/PageBanner.jsx'
import QuoteForm from '../components/QuoteForm.jsx'

export default function Quote() {
  return (
    <>
      <PageBanner
        kicker="Get Started"
        title="Get a Free Quote"
        description="Tell us about your project and location. It takes about five minutes to complete."
      />
      <section className="section">
        <div className="container">
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
