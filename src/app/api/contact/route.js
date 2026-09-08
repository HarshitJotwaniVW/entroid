/* ============================================================================
   Demo requests from /contact, delivered through Resend.

   Resend's REST API is called with plain fetch rather than the `resend` SDK,
   which keeps package.json untouched — the SDK is a thin wrapper over this one
   endpoint. Three environment variables, none with a safe default:

     RESEND_API_KEY      from resend.com/api-keys. Needs "Sending access" only
     CONTACT_TO_EMAIL    where requests land; any address, no verification
                         needed on the receiving side
     CONTACT_FROM_EMAIL  the sender. MUST be on a domain verified in Resend
                         (resend.com/domains) — Resend rejects anything else,
                         so a gmail.com or outlook.com sender will not work

   Until all three are set the endpoint answers 503 and the form shows the
   direct email address instead, so the page is never a dead end.
   ========================================================================== */

const ENDPOINT = 'https://api.resend.com/emails'

/* Node's runtime, not edge. This form is submitted rarely, so a warm edge
   cold-start buys nothing, and `console.error` lands in the Vercel function
   log where a misconfiguration is actually findable. */
export const runtime = 'nodejs'

const json = (body, status) => Response.json(body, { status })

const clean = (v, max) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max)

/* A key derived from the submission itself, so a double-click or a retry after
   a network wobble collapses into one email — Resend returns the original
   result for a repeated key within 24 hours instead of sending again. It has
   to be STABLE for the same content: a fresh random value per request would
   make every retry look like a new enquiry, which is the opposite of the
   point. Two genuinely different enquiries hash differently and both send. */
const idempotencyKey = async (parts) => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(parts.join('\u0000')))
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 64)
}

/* Anything interpolated into the HTML body is attacker-controlled — it is
   whatever was typed into the form. */
const esc = (v) => String(v ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

export async function POST(request) {
  let payload
  try {
    payload = await request.json()
  } catch {
    return json({ error: 'Malformed request.' }, 400)
  }

  /* A hidden field no person can see, let alone fill in. Bots fill every input
     they find, so anything arriving with this set is dropped — answering 200
     so the sender learns nothing from the response. */
  if (clean(payload.company_website, 200)) return json({ ok: true }, 200)

  const fullName = clean(payload.fullName, 160)
  const email = clean(payload.email, 200)
  const jobTitle = clean(payload.jobTitle, 120)
  const company = clean(payload.company, 160)
  const phoneCode = clean(payload.phoneCode, 6)
  const phone = clean(payload.phone, 32)
  const remarks = clean(payload.remarks, 5000)
  const wantsMeeting = clean(payload.schedule, 8) === 'book'
  const preferredDate = clean(payload.preferredDate, 20)
  const preferredTime = clean(payload.preferredTime, 20)
  const timezone = clean(payload.timezone, 60)

  const errors = {}
  if (!fullName) errors.fullName = 'Please enter your name.'
  if (!email) errors.email = 'Please enter your work email.'
  // Deliberately loose: the only real test of an address is delivering to it.
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'That does not look like an email address.'
  if (!company) errors.company = 'Please enter your company.'
  if (!phone) errors.phone = 'Please enter a phone number.'
  else if (phone.replace(/\D/g, '').length < 6) errors.phone = 'That phone number looks too short.'
  if (wantsMeeting && !preferredDate) errors.preferredDate = 'Please choose a date.'
  if (wantsMeeting && !preferredTime) errors.preferredTime = 'Please choose a time.'
  if (Object.keys(errors).length) return json({ errors }, 422)

  const key = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!key || !to || !from) {
    // Named individually in the log so the missing one is obvious on deploy.
    console.error('Contact form unconfigured. Missing:', [
      !key && 'RESEND_API_KEY', !to && 'CONTACT_TO_EMAIL', !from && 'CONTACT_FROM_EMAIL',
    ].filter(Boolean).join(', '))
    return json({ error: 'The demo request form is not configured yet. Please email us directly.' }, 503)
  }

  /* The zone is carried through: without it a "10:30" from Chicago and one
     from Mumbai are indistinguishable by the time this lands in an inbox. */
  const meeting = wantsMeeting
    ? `${preferredDate} at ${preferredTime}${timezone ? ` (${timezone})` : ''}`
    : 'No meeting requested.'

  const rows = [
    ['Name', fullName],
    ['Work email', email],
    jobTitle && ['Job title', jobTitle],
    ['Company', company],
    ['Phone', `${phoneCode} ${phone}`.trim()],
    ['Meeting', meeting],
    ['Remarks', remarks || '—'],
  ].filter(Boolean)

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')
  const html = `<table style="border-collapse:collapse;font:14px/1.5 -apple-system,Segoe UI,sans-serif">${
    rows.map(([k, v]) => `<tr>
      <td style="padding:6px 16px 6px 0;color:#6b7280;vertical-align:top;white-space:nowrap">${esc(k)}</td>
      <td style="padding:6px 0;color:#0a0f1f;white-space:pre-wrap">${esc(v)}</td>
    </tr>`).join('')
  }</table>`

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': await idempotencyKey([from, to, email, company, text]),
      },
      body: JSON.stringify({
        from,
        to: [to],
        // So a reply goes to the person who wrote in, not the sending domain.
        reply_to: email,
        subject: `Demo request — ${fullName}, ${company}`,
        text,
        html,
      }),
    })

    if (!res.ok) {
      /* Resend's message names the account and the reason — an unverified
         sending domain, a revoked key. Useful in the deploy log, not something
         to hand back to whoever filled in the form. */
      console.error('Resend rejected the message:', res.status, await res.text())
      return json({ error: 'The request could not be sent. Please email us directly.' }, 502)
    }
  } catch (err) {
    console.error('Demo request send failed:', err)
    return json({ error: 'The request could not be sent. Please email us directly.' }, 502)
  }

  return json({ ok: true }, 200)
}
