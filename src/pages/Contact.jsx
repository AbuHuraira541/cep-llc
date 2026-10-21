import { useState } from 'react'

import PageBanner from '../components/PageBanner.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'

import {
  countries,
  countryFieldLabels,
  getRegionsForCountry,
  validatePostalCode,
} from '../data/locations.js'

const projectTypes = [
  'New Construction',
  'Renovation',
  'Addition',
  'Tenant Improvement',
  'Other',
]

const serviceOptions = [
  'Construction Estimating',
  'Quantity Takeoff',
  'Material Takeoff',
  'Labor Estimation',
  'Cost Estimation',
  'Bid Preparation',
]

const contactMethods = ['Email', 'Phone']

const initialState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: '',
  region: '',
  postal: '',
  projectType: '',
  service: '',
  description: '',
  preferredContact: 'Email',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const regions = getRegionsForCountry(form.country)

  const labels =
    countryFieldLabels[form.country] || {
      region: 'State/Province',
      postal: 'Postal/ZIP Code',
    }

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
    setSubmitError('')
  }

  function validate() {
    const next = {}

    if (!form.fullName.trim()) {
      next.fullName = 'Full name is required.'
    }

    if (!form.email.trim()) {
      next.email = 'Email is required.'
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Enter a valid email address.'
    }

    if (!form.phone.trim()) {
      next.phone = 'Phone is required.'
    }

    if (!form.country) {
      next.country = 'Please select a country.'
    }

    if (!form.region) {
      next.region = `Please select a ${labels.region.toLowerCase()}.`
    }

    if (!form.postal.trim()) {
      next.postal = `${labels.postal} is required.`
    } else {
      const postalError = validatePostalCode(form.country, form.postal)

      if (postalError) {
        next.postal = postalError
      }
    }

    if (!form.projectType) {
      next.projectType = 'Please select a project type.'
    }

    if (!form.service) {
      next.service = 'Please select a service.'
    }

    if (!form.description.trim()) {
      next.description = 'Please describe your project.'
    }

    if (!form.message.trim()) {
      next.message = 'Message is required.'
    }

    setErrors(next)

    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()

    setSubmitError('')

    if (!validate()) {
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch(
        'http://127.0.0.1:8000/api/contact/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name: form.fullName,
            company_name: form.companyName,
            email: form.email,
            phone: form.phone,
            country: form.country,
            region: form.region,
            postal: form.postal,
            project_type: form.projectType,
            service: form.service,
            description: form.description,
            preferred_contact: form.preferredContact,
            message: form.message,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        console.error('Contact API Error:', data)

        throw new Error(
          data?.detail || 'Failed to send your message.'
        )
      }

      console.log('Contact message saved:', data)

      setSent(true)
    } catch (error) {
      console.error('Contact submission error:', error)

      setSubmitError(
        'Something went wrong while sending your message. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageBanner
        kicker="Get In Touch"
        title="Contact CEP"
        description="Have a question before requesting a quote? Send us a message and our team will get back to you."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Business Information</h2>

            <ul className="info-list">
              <li>
                <Icon name="mail" size={18} />
                <span>cepestimationllc@gmail.com</span>
              </li>

              <li>
                <Icon name="phone" size={18} />
                <span>+1 5056449848</span>
              </li>

              <li>
                <Icon name="clock" size={18} />
                <span>
                  Mon–Fri, 9:00 AM – 6:00 PM (multiple time zones supported)
                </span>
              </li>

              <li>
                <Icon name="pin" size={18} />
                <span>
                  Serving clients across the United States, Canada and
                  Australia
                </span>
              </li>
            </ul>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="quote-success">
                <div className="quote-success-icon">
                  <Icon name="check" size={26} />
                </div>

                <h2>Message Sent</h2>

                <p>
                  Thanks for reaching out. Our team will respond to your
                  message shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="fullName">
                      Full Name *
                    </label>

                    <input
                      id="fullName"
                      value={form.fullName}
                      onChange={(e) =>
                        update('fullName', e.target.value)
                      }
                    />

                    {errors.fullName && (
                      <p className="field-error">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="companyName">
                      Company Name
                    </label>

                    <input
                      id="companyName"
                      value={form.companyName}
                      onChange={(e) =>
                        update('companyName', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="email">
                      Email *
                    </label>

                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        update('email', e.target.value)
                      }
                    />

                    {errors.email && (
                      <p className="field-error">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="phone">
                      Phone *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        update('phone', e.target.value)
                      }
                    />

                    {errors.phone && (
                      <p className="field-error">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="country">
                    Country *
                  </label>

                  <select
                    id="country"
                    value={form.country}
                    onChange={(e) => {
                      update('country', e.target.value)
                      update('region', '')
                    }}
                  >
                    <option value="">
                      Choose a country…
                    </option>

                    {countries.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>

                  {errors.country && (
                    <p className="field-error">
                      {errors.country}
                    </p>
                  )}
                </div>

                {form.country && (
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="region">
                        {labels.region} *
                      </label>

                      <select
                        id="region"
                        value={form.region}
                        onChange={(e) =>
                          update('region', e.target.value)
                        }
                      >
                        <option value="">
                          Choose {labels.region.toLowerCase()}…
                        </option>

                        {regions.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>

                      {errors.region && (
                        <p className="field-error">
                          {errors.region}
                        </p>
                      )}
                    </div>

                    <div className="field">
                      <label htmlFor="postal">
                        {labels.postal} *
                      </label>

                      <input
                        id="postal"
                        value={form.postal}
                        onChange={(e) =>
                          update('postal', e.target.value)
                        }
                      />

                      {errors.postal && (
                        <p className="field-error">
                          {errors.postal}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="projectType">
                      Project Type *
                    </label>

                    <select
                      id="projectType"
                      value={form.projectType}
                      onChange={(e) =>
                        update('projectType', e.target.value)
                      }
                    >
                      <option value="">
                        Select…
                      </option>

                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>

                    {errors.projectType && (
                      <p className="field-error">
                        {errors.projectType}
                      </p>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="service">
                      Service Required *
                    </label>

                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) =>
                        update('service', e.target.value)
                      }
                    >
                      <option value="">
                        Select…
                      </option>

                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>

                    {errors.service && (
                      <p className="field-error">
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="description">
                    Project Description *
                  </label>

                  <textarea
                    id="description"
                    rows={3}
                    value={form.description}
                    onChange={(e) =>
                      update('description', e.target.value)
                    }
                  />

                  {errors.description && (
                    <p className="field-error">
                      {errors.description}
                    </p>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="preferredContact">
                    Preferred Contact Method
                  </label>

                  <select
                    id="preferredContact"
                    value={form.preferredContact}
                    onChange={(e) =>
                      update('preferredContact', e.target.value)
                    }
                  >
                    {contactMethods.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">
                    Message *
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      update('message', e.target.value)
                    }
                  />

                  {errors.message && (
                    <p className="field-error">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p className="submit-error">
                    {submitError}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  block
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 56px;
          align-items: start;
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .info-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-list li {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          font-size: 0.95rem;
          color: var(--ink-70);
        }

        .info-list svg {
          color: var(--safety);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-form-wrap {
          background: var(--white);
          border: 1px solid var(--line);
          border-left: 3px solid var(--steel);
          padding: 36px;
          border-radius: var(--radius);
        }

        .field {
          margin-bottom: 20px;
        }

        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 560px) {
          .field-row {
            grid-template-columns: 1fr;
          }
        }

        label {
          display: block;
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        input,
        select,
        textarea {
          width: 100%;
          font-family: inherit;
          font-size: 0.95rem;
          padding: 12px 14px;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: var(--white);
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-color: var(--steel);
        }

        .field-error {
          color: var(--safety-dark);
          font-size: 0.82rem;
          margin: 6px 0 0;
        }

        .submit-error {
          color: var(--safety-dark);
          font-size: 0.88rem;
          margin: -4px 0 16px;
        }

        .quote-success {
          text-align: center;
          padding: 20px 0;
        }

        .quote-success-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--safety);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
      `}</style>
    </>
  )
}