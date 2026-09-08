/**
 * IANA time zones offered on the demo-request form, ordered west to east.
 *
 * A curated list rather than `Intl.supportedValuesOf('timeZone')`, which
 * returns 400+ entries — most of them aliases nobody would pick from a select.
 * These cover the business centres the site is actually read in.
 *
 * `label` carries the standard-time offset for orientation only; the IANA `id`
 * is what gets submitted, so daylight saving resolves correctly whatever the
 * label says.
 */
export const FALLBACK_TIMEZONE = 'Asia/Kolkata'

export const timezones = [
  { id: 'Pacific/Honolulu', label: 'Honolulu (UTC−10:00)' },
  { id: 'America/Anchorage', label: 'Anchorage (UTC−09:00)' },
  { id: 'America/Los_Angeles', label: 'Los Angeles (UTC−08:00)' },
  { id: 'America/Denver', label: 'Denver (UTC−07:00)' },
  { id: 'America/Mexico_City', label: 'Mexico City (UTC−06:00)' },
  { id: 'America/Chicago', label: 'Chicago (UTC−06:00)' },
  { id: 'America/New_York', label: 'New York (UTC−05:00)' },
  { id: 'America/Toronto', label: 'Toronto (UTC−05:00)' },
  { id: 'America/Bogota', label: 'Bogotá (UTC−05:00)' },
  { id: 'America/Sao_Paulo', label: 'São Paulo (UTC−03:00)' },
  { id: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires (UTC−03:00)' },
  { id: 'UTC', label: 'UTC (UTC+00:00)' },
  { id: 'Europe/London', label: 'London (UTC+00:00)' },
  { id: 'Europe/Dublin', label: 'Dublin (UTC+00:00)' },
  { id: 'Europe/Lisbon', label: 'Lisbon (UTC+00:00)' },
  { id: 'Europe/Paris', label: 'Paris (UTC+01:00)' },
  { id: 'Europe/Berlin', label: 'Berlin (UTC+01:00)' },
  { id: 'Europe/Madrid', label: 'Madrid (UTC+01:00)' },
  { id: 'Europe/Amsterdam', label: 'Amsterdam (UTC+01:00)' },
  { id: 'Europe/Zurich', label: 'Zurich (UTC+01:00)' },
  { id: 'Europe/Stockholm', label: 'Stockholm (UTC+01:00)' },
  { id: 'Europe/Warsaw', label: 'Warsaw (UTC+01:00)' },
  { id: 'Africa/Lagos', label: 'Lagos (UTC+01:00)' },
  { id: 'Europe/Athens', label: 'Athens (UTC+02:00)' },
  { id: 'Europe/Helsinki', label: 'Helsinki (UTC+02:00)' },
  { id: 'Africa/Cairo', label: 'Cairo (UTC+02:00)' },
  { id: 'Africa/Johannesburg', label: 'Johannesburg (UTC+02:00)' },
  { id: 'Europe/Istanbul', label: 'Istanbul (UTC+03:00)' },
  { id: 'Europe/Moscow', label: 'Moscow (UTC+03:00)' },
  { id: 'Asia/Riyadh', label: 'Riyadh (UTC+03:00)' },
  { id: 'Africa/Nairobi', label: 'Nairobi (UTC+03:00)' },
  { id: 'Asia/Tehran', label: 'Tehran (UTC+03:30)' },
  { id: 'Asia/Dubai', label: 'Dubai (UTC+04:00)' },
  { id: 'Asia/Karachi', label: 'Karachi (UTC+05:00)' },
  { id: 'Asia/Kolkata', label: 'India — Kolkata, Mumbai, Delhi (UTC+05:30)' },
  { id: 'Asia/Colombo', label: 'Colombo (UTC+05:30)' },
  { id: 'Asia/Kathmandu', label: 'Kathmandu (UTC+05:45)' },
  { id: 'Asia/Dhaka', label: 'Dhaka (UTC+06:00)' },
  { id: 'Asia/Bangkok', label: 'Bangkok (UTC+07:00)' },
  { id: 'Asia/Jakarta', label: 'Jakarta (UTC+07:00)' },
  { id: 'Asia/Singapore', label: 'Singapore (UTC+08:00)' },
  { id: 'Asia/Hong_Kong', label: 'Hong Kong (UTC+08:00)' },
  { id: 'Asia/Shanghai', label: 'Shanghai (UTC+08:00)' },
  { id: 'Asia/Kuala_Lumpur', label: 'Kuala Lumpur (UTC+08:00)' },
  { id: 'Australia/Perth', label: 'Perth (UTC+08:00)' },
  { id: 'Asia/Manila', label: 'Manila (UTC+08:00)' },
  { id: 'Asia/Tokyo', label: 'Tokyo (UTC+09:00)' },
  { id: 'Asia/Seoul', label: 'Seoul (UTC+09:00)' },
  { id: 'Australia/Adelaide', label: 'Adelaide (UTC+09:30)' },
  { id: 'Australia/Brisbane', label: 'Brisbane (UTC+10:00)' },
  { id: 'Australia/Sydney', label: 'Sydney (UTC+10:00)' },
  { id: 'Pacific/Auckland', label: 'Auckland (UTC+12:00)' },
]

const known = new Set(timezones.map((t) => t.id))

/* The browser's own zone, if it is one this list offers. Called after mount,
   never during render: reading it on the server would produce a different
   value to the client and break hydration. */
export const detectTimezone = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    return known.has(tz) ? tz : FALLBACK_TIMEZONE
  } catch {
    return FALLBACK_TIMEZONE
  }
}
