import PageBanner from '../components/PageBanner.jsx'
import FAQ from '../components/FAQ.jsx'
import CTA from '../components/CTA.jsx'
import { faqs } from '../data/faqs.js'

export default function FAQPage() {
  return (
    <>
      <PageBanner
        kicker="Support"
        title="Frequently Asked Questions"
        description="Answers to common questions about our estimating and takeoff process."
      />

      <section className="section">
        <div className="container">
          <div className="faq-page-wrap">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTA title="Still Have Questions?" buttonLabel="Contact Us" to="/contact" />

      <style>{`
        .faq-page-wrap { max-width: 800px; }
      `}</style>
    </>
  )
}
