import { useState } from 'react'
import Icon from './Icon.jsx'
import Button from './Button.jsx'
import { countries, countryFieldLabels, getRegionsForCountry, validatePostalCode } from '../data/locations.js'
import { submitQuoteRequest } from '../services/api.js'

const projectTypes = ['New Construction', 'Renovation', 'Addition', 'Tenant Improvement', 'Other']
const serviceOptions = [
  'Construction Estimating', 'Quantity Takeoff', 'Material Takeoff',
  'Labor Estimation', 'Cost Estimation', 'Bid Preparation',
]
const contactMethods = ['Email', 'Phone']

const initialState = {
  country: '',
  region: '',
  postal: '',
  projectType: '',
  service: '',
  description: '',
  estimatedValue: '',
  projectLocation: '',
  deadline: '',
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  preferredContact: 'Email',
  files: [],
}

const STEP_LABELS = ['Location', 'Project', 'Contact', 'Files', 'Review']

export default function QuoteForm() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false) // Loading state backend ke liye

  const regions = getRegionsForCountry(form.country)
  const labels = countryFieldLabels[form.country] || { region: 'State/Province', postal: 'Postal/ZIP Code' }

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function validateStep(current) {
    const next = {}
    if (current === 0) {
      if (!form.country) next.country = 'Please select a country.'
      if (!form.region) next.region = `Please select a ${labels.region.toLowerCase()}.`
      if (!form.postal.trim()) next.postal = `${labels.postal} is required.`
      else { const postalError = validatePostalCode(form.country, form.postal); if (postalError) next.postal = postalError }
    }
    if (current === 1) {
      if (!form.projectType) next.projectType = 'Please select a project type.'
      if (!form.service) next.service = 'Please select a service.'
      if (!form.description.trim()) next.description = 'Please describe your project.'
    }
    if (current === 2) {
      if (!form.fullName.trim()) next.fullName = 'Full name is required.'
      if (!form.email.trim()) next.email = 'Email is required.'
      else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
      if (!form.phone.trim()) next.phone = 'Phone number is required.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function goNext() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, STEP_LABELS.length - 1))
  }
  function goBack() {
    setStep((s) => Math.max(s - 1, 0))
  }

  function handleFiles(e) {
    const list = Array.from(e.target.files || [])
    update('files', list)
  }

  // --- BACKEND SE CONNECTED SUBMISSION FUNCTION ---
  async function handleSubmit(e) {
    e.preventDefault()
    
    // Check karein ke saare steps valid hain ya nahi
    if (validateStep(0) && validateStep(1) && validateStep(2)) {
      setLoading(true)
      try {
        // Backend API ko data aur files bhejna
        await submitQuoteRequest(form)
        setSubmitted(true)
      } catch (err) {
        console.error("Submission error:", err)
        alert("Failed to submit quote to backend. Make sure Django server is running.")
      } finally {
        setLoading(false)
      }
    } else {
      // Agar koi step incomplete hai toh wahan wapas le jayein
      for (let s = 0; s <= 2; s++) {
        if (!validateStep(s)) { setStep(s); break }
      }
    }
  }

  if (submitted) {
    return (
      <div className="quote-success">
        <div className="quote-success-icon"><Icon name="check" size={28} /></div>
        <h2>Thank you!</h2>
        <p>
          Your quote request has been submitted successfully and saved to the database. 
          Our team will review your project information and contact you shortly.
        </p>
        <Button to="/" variant="primary">Return Home</Button>
      </div>
    )
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <ol className="quote-steps">
        {STEP_LABELS.map((label, i) => (
          <li key={label} className={i === step ? 'active' : i < step ? 'done' : ''}>
            <span className="quote-step-index">{i < step ? <Icon name="check" size={13} /> : i + 1}</span>
            <span className="quote-step-label">{label}</span>
          </li>
        ))}
      </ol>

      <div className="quote-panel">
        {step === 0 && (
          <fieldset>
            <legend>Location</legend>
            <div className="field">
              <label htmlFor="country">Select Country *</label>
              <select
                id="country"
                value={form.country}
                onChange={(e) => { update('country', e.target.value); update('region', '') }}
              >
                <option value="">Choose a country…</option>
                {countries.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.country && <p className="field-error">{errors.country}</p>}
            </div>

            {form.country && (
              <>
                <div className="field">
                  <label htmlFor="region">{labels.region} *</label>
                  <select id="region" value={form.region} onChange={(e) => update('region', e.target.value)}>
                    <option value="">Choose {labels.region.toLowerCase()}…</option>
                    {regions.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {errors.region && <p className="field-error">{errors.region}</p>}
                </div>

                <div className="field">
                  <label htmlFor="postal">{labels.postal} *</label>
                  <input
                    id="postal"
                    type="text"
                    value={form.postal}
                    onChange={(e) => update('postal', e.target.value)}
                    placeholder={labels.postal}
                  />
                  {errors.postal && <p className="field-error">{errors.postal}</p>}
                </div>
              </>
            )}
          </fieldset>
        )}

        {step === 1 && (
          <fieldset>
            <legend>Project Information</legend>
            <div className="field-row">
              <div className="field">
                <label htmlFor="projectType">Project Type *</label>
                <select id="projectType" value={form.projectType} onChange={(e) => update('projectType', e.target.value)}>
                  <option value="">Select…</option>
                  {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.projectType && <p className="field-error">{errors.projectType}</p>}
              </div>
              <div className="field">
                <label htmlFor="service">Service Required *</label>
                <select id="service" value={form.service} onChange={(e) => update('service', e.target.value)}>
                  <option value="">Select…</option>
                  {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <p className="field-error">{errors.service}</p>}
              </div>
            </div>

            <div className="field">
              <label htmlFor="description">Project Description *</label>
              <textarea
                id="description"
                rows={4}
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                placeholder="Briefly describe the scope of your project…"
              />
              {errors.description && <p className="field-error">{errors.description}</p>}
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="estimatedValue">Estimated Project Value</label>
                <input id="estimatedValue" type="text" value={form.estimatedValue} onChange={(e) => update('estimatedValue', e.target.value)} placeholder="e.g. $250,000" />
              </div>
              <div className="field">
                <label htmlFor="projectLocation">Project Location</label>
                <input id="projectLocation" type="text" value={form.projectLocation} onChange={(e) => update('projectLocation', e.target.value)} placeholder="City / site address" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="deadline">Project Deadline</label>
              <input id="deadline" type="date" value={form.deadline} onChange={(e) => update('deadline', e.target.value)} />
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend>Contact Information</legend>
            <div className="field-row">
              <div className="field">
                <label htmlFor="fullName">Full Name *</label>
                <input id="fullName" type="text" value={form.fullName} onChange={(e) => update('fullName', e.target.value)} />
                {errors.fullName && <p className="field-error">{errors.fullName}</p>}
              </div>
              <div className="field">
                <label htmlFor="companyName">Company Name</label>
                <input id="companyName" type="text" value={form.companyName} onChange={(e) => update('companyName', e.target.value)} />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} />
                {errors.email && <p className="field-error">{errors.email}</p>}
              </div>
              <div className="field">
                <label htmlFor="phone">Phone *</label>
                <input id="phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                {errors.phone && <p className="field-error">{errors.phone}</p>}
              </div>
            </div>
            <div className="field">
              <label htmlFor="preferredContact">Preferred Contact Method</label>
              <select id="preferredContact" value={form.preferredContact} onChange={(e) => update('preferredContact', e.target.value)}>
                {contactMethods.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
          </fieldset>
        )}

        {/* STEP 3: FILES UPLOAD */}
        {step === 3 && (
          <fieldset>
            <legend>Project Files</legend>
            <p className="field-hint">
              Attach plans or supporting documents (PDF, DWG, Excel, images). Files will be securely uploaded to the database.
            </p>
            <label className="upload-drop" htmlFor="files">
              <Icon name="upload" size={26} />
              <span>Click to choose files</span>
              <span className="upload-types">PDF · DWG · XLS/XLSX · JPG · PNG</span>
              <input
                id="files"
                type="file"
                multiple
                accept=".pdf,.dwg,.xls,.xlsx,.jpg,.jpeg,.png"
                onChange={handleFiles}
                hidden
              />
            </label>
            {form.files.length > 0 && (
              <ul className="upload-list">
                {form.files.map((f) => <li key={f.name}>📎 {f.name}</li>)}
              </ul>
            )}
          </fieldset>
        )}

        {/* STEP 4: REVIEW & SUBMIT */}
        {step === 4 && (
          <fieldset>
            <legend>Review &amp; Submit</legend>
            <div className="review-grid">
              <ReviewGroup title="Location" rows={[
                ['Country', form.country],
                [labels.region, form.region],
                [labels.postal, form.postal],
              ]} />
              <ReviewGroup title="Project" rows={[
                ['Project Type', form.projectType],
                ['Service', form.service],
                ['Description', form.description],
                ['Estimated Value', form.estimatedValue || '—'],
                ['Project Location', form.projectLocation || '—'],
                ['Deadline', form.deadline || '—'],
              ]} />
              <ReviewGroup title="Contact" rows={[
                ['Full Name', form.fullName],
                ['Company', form.companyName || '—'],
                ['Email', form.email],
                ['Phone', form.phone],
                ['Preferred Contact', form.preferredContact],
              ]} />
              <ReviewGroup title="Files" rows={[
                ['Attached', form.files.length ? form.files.map((f) => f.name).join(', ') : 'No files attached'],
              ]} />
            </div>
          </fieldset>
        )}
      </div>

      <div className="quote-actions">
        {step > 0 ? (
          <Button type="button" variant="dark-outline" onClick={goBack}>Back</Button>
        ) : <span />}

        {step < STEP_LABELS.length - 1 ? (
          <Button type="button" variant="primary" onClick={goNext}>Continue</Button>
        ) : (
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Quote Request'}
          </Button>
        )}
      </div>

      <style>{`
        /* Styles unchanged */
        .quote-form { max-width: 760px; }
        .quote-steps { display: flex; list-style: none; padding: 0; margin: 0 0 40px; border-bottom: 1px solid var(--line); }
        .quote-steps li { flex: 1; display: flex; align-items: center; gap: 8px; padding-bottom: 16px; border-bottom: 3px solid transparent; color: var(--ink-50); font-size: 0.85rem; font-family: var(--font-display); font-weight: 600; }
        .quote-steps li.active { color: var(--ink); border-color: var(--safety); }
        .quote-steps li.done { color: var(--steel); }
        .quote-step-index { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--paper-dim); font-size: 0.75rem; flex-shrink: 0; }
        .quote-steps li.active .quote-step-index { background: var(--safety); color: var(--white); }
        .quote-steps li.done .quote-step-index { background: var(--steel); color: var(--white); }
        .quote-step-label { display: none; }
        @media (min-width: 640px) { .quote-step-label { display: inline; } }
        fieldset { border: none; padding: 0; margin: 0; }
        legend { font-family: var(--font-display); font-weight: 700; font-size: 1.15rem; margin-bottom: 20px; padding: 0; }
        .field { margin-bottom: 20px; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 620px) { .field-row { grid-template-columns: 1fr; } }
        label { display: block; font-size: 0.88rem; font-weight: 600; margin-bottom: 8px; color: var(--ink); }
        input, select, textarea { width: 100%; font-family: inherit; font-size: 0.95rem; padding: 12px 14px; border: 1px solid var(--line); border-radius: var(--radius); background: var(--white); color: var(--ink); }
        input:focus, select:focus, textarea:focus { border-color: var(--steel); }
        textarea { resize: vertical; }
        .field-error { color: var(--safety-dark); font-size: 0.82rem; margin: 6px 0 0; }
        .field-hint { font-size: 0.88rem; margin-bottom: 20px; }
        .upload-drop { display: flex; flex-direction: column; align-items: center; gap: 6px; border: 1.5px dashed var(--line); border-radius: var(--radius); padding: 40px 20px; text-align: center; color: var(--ink-70); cursor: pointer; transition: border-color 0.2s ease; }
        .upload-drop:hover { border-color: var(--steel); }
        .upload-types { font-size: 0.78rem; color: var(--ink-50); }
        .upload-list { margin: 16px 0 0; padding-left: 18px; font-size: 0.88rem; color: var(--ink-70); }
        .review-grid { display: grid; gap: 24px; }
        .review-group h4 { font-family: var(--font-display); font-size: 0.92rem; margin-bottom: 10px; color: var(--steel); }
        .review-row { display: flex; gap: 12px; padding: 8px 0; border-bottom: 1px solid var(--line); font-size: 0.9rem; }
        .review-row span:first-child { flex: 0 0 40%; color: var(--ink-50); }
        .review-row span:last-child { flex: 1; }
        .quote-actions { display: flex; justify-content: space-between; margin-top: 36px; }
        .quote-success { text-align: center; max-width: 460px; margin: 0 auto; padding: 40px 0; }
        .quote-success-icon { width: 56px; height: 56px; border-radius: 50%; background: var(--safety); color: var(--white); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
      `}</style>
    </form>
  )
}

function ReviewGroup({ title, rows }) {
  return (
    <div className="review-group">
      <h4>{title}</h4>
      {rows.map(([label, value]) => (
        <div className="review-row" key={label}>
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  )
}
