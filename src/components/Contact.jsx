'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { dialCodes } from '../data/countries'
import { detectTimezone, FALLBACK_TIMEZONE, timezones } from '../data/timezones'

/* ============================================================================
   Contact (/contact) — the demo request.

   Every call to action on the site lands here: the nav button, the in-page
   "Request a demo" buttons, and the closing CTA on all 180 articles. So the
   page has to work whether or not the mail service behind it is configured —
   the panel on the left carries the email and phone as live links, which is
   the fallback when the form cannot send.

   No page hero: the two panels are the page. The dark panel states what a demo
   is, the light one collects the details.
   ========================================================================== */

/* Shown on the dark panel. Deliberately the four things a reader wants to know
   before giving out a work email. */
const PROMISES = [
  'A walkthrough tailored to the enterprise',
  'Straight answers to specific questions',
  'The platform, end to end',
  'No commitment',
]

const CONTACT_EMAIL = 'contact@entroid.ai'
const CONTACT_PHONE = '+91 90983 62236'

const EMPTY = {
  fullName: '', email: '', jobTitle: '', company: '',
  phoneCode: '+91', phone: '',
  remarks: '', schedule: 'skip',
  preferredDate: '', preferredTime: '', timezone: FALLBACK_TIMEZONE,
  company_website: '',
}

const BackArrow = () => (
  <svg className="dreq__backArrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
)

const Check = () => (
  <svg className="dreq__check" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export const Contact = () => {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [state, setState] = useState('idle') // idle | sending | sent | failed
  const [notice, setNotice] = useState('')

  /* The reader's own zone, filled in after mount. Reading it during render
     would give the server a different answer to the browser and break
     hydration, so the field starts on the fallback and corrects itself. */
  useEffect(() => {
    setValues((v) => ({ ...v, timezone: detectTimezone() }))
  }, [])

  const set = (name) => (e) => {
    const { value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (state === 'sending') return
    setState('sending')
    setErrors({})
    setNotice('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        setValues(EMPTY)
        setState('sent')
        return
      }
      if (data.errors) {
        setErrors(data.errors)
        setState('idle')
        return
      }
      setNotice(data.error || 'The message could not be sent.')
      setState('failed')
    } catch {
      setNotice('The message could not be sent. Please check your connection, or email us directly.')
      setState('failed')
    }
  }

  /* One field, wired to state and to whatever the server said about it. */
  const field = (name, label, { type = 'text', required = false, placeholder, autoComplete } = {}) => (
    <div className="dreq__field">
      <label className="dreq__label" htmlFor={`dreq-${name}`}>
        {label}{required && <span className="dreq__req" aria-hidden="true"> *</span>}
      </label>
      <input
        className={`dreq__input ${errors[name] ? 'is-invalid' : ''}`}
        id={`dreq-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        value={values[name]}
        onChange={set(name)}
        aria-invalid={errors[name] ? 'true' : undefined}
        aria-describedby={errors[name] ? `dreq-${name}-error` : undefined}
      />
      {errors[name] && <p className="dreq__error" id={`dreq-${name}-error`}>{errors[name]}</p>}
    </div>
  )

  return (
    <section className="dreq">
      <div className="dreq__panel">

        <aside className="dreq__aside">
          {/* The reversed lockup, not the mark plus live text — the panel is
              ink, and the supplied lockup sets its wordmark in near-black. */}
          <div className="dreq__brand">
            <img src="/logos/entroid-logo-white.svg" alt="Entroid" />
          </div>

          <h1 className="dreq__asideTitle">See the platform in action.</h1>
          <p className="dreq__asideText">
            A specialist walks the enterprise through Entroid, shaped around its goals.
          </p>

          <ul className="dreq__promises">
            {PROMISES.map((p) => <li key={p}><Check />{p}</li>)}
          </ul>

          <div className="dreq__asideContact">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, '')}`}>{CONTACT_PHONE}</a>
          </div>
        </aside>

        <div className="dreq__main">
          {state === 'sent' ? (
            <div className="dreq__sent" role="status">
              <h2 className="dreq__title">Thank you — the request is in.</h2>
              <p className="dreq__lede">
                A specialist will follow up shortly. For anything urgent,{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> reaches the team directly.
              </p>

              {/* The way out. Without it this state is a dead end — the form
                  is gone and the only route on is the nav, well above the
                  fold. A Link, not history.back(): someone who landed here
                  from an email or a shared URL has nothing to go back to. */}
              <div className="dreq__sentActions">
                <Link href="/" className="btn btn--primary btn--lg">
                  <BackArrow />
                  Back to home
                </Link>
              </div>
            </div>
          ) : (
            <>
              <h2 className="dreq__title">Book a demo</h2>
              <p className="dreq__lede">Share a few details and the team will follow up.</p>

              <form className="dreq__form" onSubmit={onSubmit} noValidate>
                {field('fullName', 'Full name', { required: true, autoComplete: 'name' })}

                {field('email', 'Work email', {
                  type: 'email', required: true, placeholder: 'name@company.com', autoComplete: 'email',
                })}

                <div className="dreq__row">
                  {field('jobTitle', 'Job title', { autoComplete: 'organization-title' })}
                  {field('company', 'Company', { required: true, autoComplete: 'organization' })}
                </div>

                <div className="dreq__field">
                  <label className="dreq__label" htmlFor="dreq-phone">
                    Phone<span className="dreq__req" aria-hidden="true"> *</span>
                  </label>
                  <div className="dreq__phone">
                    <select
                      className="dreq__input dreq__select dreq__code"
                      id="dreq-phoneCode"
                      name="phoneCode"
                      aria-label="Country calling code"
                      value={values.phoneCode}
                      onChange={set('phoneCode')}
                    >
                      {dialCodes.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                    <input
                      className={`dreq__input ${errors.phone ? 'is-invalid' : ''}`}
                      id="dreq-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="90983 62236"
                      autoComplete="tel"
                      required
                      value={values.phone}
                      onChange={set('phone')}
                      aria-invalid={errors.phone ? 'true' : undefined}
                      aria-describedby={errors.phone ? 'dreq-phone-error' : undefined}
                    />
                  </div>
                  {errors.phone && <p className="dreq__error" id="dreq-phone-error">{errors.phone}</p>}
                </div>

                <div className="dreq__field">
                  <label className="dreq__label" htmlFor="dreq-remarks">Remarks</label>
                  <textarea
                    className="dreq__input dreq__area"
                    id="dreq-remarks"
                    name="remarks"
                    rows={4}
                    value={values.remarks}
                    onChange={set('remarks')}
                  />
                </div>

                <fieldset className="dreq__schedule">
                  <legend className="dreq__label">Would you like to schedule a meeting?</legend>
                  <div className="dreq__choices">
                    {[['skip', 'Skip for now'], ['book', 'Schedule a meeting']].map(([value, label]) => (
                      <label
                        key={value}
                        className={`dreq__choice ${values.schedule === value ? 'is-on' : ''}`}
                        htmlFor={`dreq-schedule-${value}`}
                      >
                        <input
                          id={`dreq-schedule-${value}`}
                          type="radio"
                          name="schedule"
                          value={value}
                          checked={values.schedule === value}
                          onChange={set('schedule')}
                        />
                        {label}
                      </label>
                    ))}
                  </div>

                  {/* These only exist once a meeting is actually wanted — empty
                      date and time inputs above the submit button read as more
                      things to fill in. Date, time and zone are separate
                      fields: a bare `datetime-local` carries no zone, so a
                      "10:30" from Chicago and one from Mumbai look identical
                      by the time they reach the inbox. */}
                  {values.schedule === 'book' && (
                    <div className="dreq__when">
                      <div className="dreq__row">
                        <div className="dreq__field">
                          <label className="dreq__label" htmlFor="dreq-preferredDate">
                            Preferred date<span className="dreq__req" aria-hidden="true"> *</span>
                          </label>
                          <input
                            className={`dreq__input ${errors.preferredDate ? 'is-invalid' : ''}`}
                            id="dreq-preferredDate"
                            name="preferredDate"
                            type="date"
                            value={values.preferredDate}
                            onChange={set('preferredDate')}
                            aria-invalid={errors.preferredDate ? 'true' : undefined}
                            aria-describedby={errors.preferredDate ? 'dreq-preferredDate-error' : undefined}
                          />
                          {errors.preferredDate && (
                            <p className="dreq__error" id="dreq-preferredDate-error">{errors.preferredDate}</p>
                          )}
                        </div>

                        <div className="dreq__field">
                          <label className="dreq__label" htmlFor="dreq-preferredTime">
                            Preferred time<span className="dreq__req" aria-hidden="true"> *</span>
                          </label>
                          <input
                            className={`dreq__input ${errors.preferredTime ? 'is-invalid' : ''}`}
                            id="dreq-preferredTime"
                            name="preferredTime"
                            type="time"
                            value={values.preferredTime}
                            onChange={set('preferredTime')}
                            aria-invalid={errors.preferredTime ? 'true' : undefined}
                            aria-describedby={errors.preferredTime ? 'dreq-preferredTime-error' : undefined}
                          />
                          {errors.preferredTime && (
                            <p className="dreq__error" id="dreq-preferredTime-error">{errors.preferredTime}</p>
                          )}
                        </div>
                      </div>

                      <div className="dreq__field">
                        <label className="dreq__label" htmlFor="dreq-timezone">Time zone</label>
                        <select
                          className="dreq__input dreq__select"
                          id="dreq-timezone"
                          name="timezone"
                          value={values.timezone}
                          onChange={set('timezone')}
                        >
                          {timezones.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
                        </select>
                      </div>
                    </div>
                  )}
                </fieldset>

                {/* Hidden from people, irresistible to bots. Anything arriving
                    with this filled in is dropped server-side. */}
                <div className="dreq__trap" aria-hidden="true">
                  <label htmlFor="dreq-company-website">Do not fill this in</label>
                  <input
                    id="dreq-company-website"
                    name="company_website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.company_website}
                    onChange={set('company_website')}
                  />
                </div>

                {state === 'failed' && (
                  <p className="dreq__notice" role="alert">
                    {notice} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> always works.
                  </p>
                )}

                <button className="btn btn--primary btn--lg dreq__submit" type="submit" disabled={state === 'sending'}>
                  {state === 'sending' ? 'Sending…' : 'Submit'}
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  )
}

export default Contact
