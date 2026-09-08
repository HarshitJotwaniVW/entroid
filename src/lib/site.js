/* ============================================================================
   The site's own identity: where it lives, and who it is.

   ONE source of truth for the origin. Canonical tags, the sitemap, robots.txt,
   llms.txt, open-graph image URLs and every schema.org @id are built from
   SITE_URL, so a domain migration is one environment variable, not a sweep
   through the codebase.

   The fallback chain, in order:

     NEXT_PUBLIC_SITE_URL              set this in Vercel (Production scope) the
                                       moment a custom domain exists
     VERCEL_PROJECT_PRODUCTION_URL     the project's STABLE production host.
                                       Vercel sets it on every build, previews
                                       included, and it upgrades to the custom
                                       domain automatically once one is attached
     http://localhost:3000             local dev (matches `npm run dev`)

   Deliberately NOT VERCEL_URL. That is the per-deployment host — a different
   name on every single build — and Vercel serves `noindex` from superseded
   deployments. Canonicals built from it would point every page at a URL that
   goes noindex on the next deploy, which un-indexes the site a deploy at a
   time. It is the one variable that must never appear here.
   ========================================================================== */

import { brand, footer } from '../content'

const fromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

/* No trailing slash, so `${SITE_URL}${path}` is always well formed. */
export const SITE_URL = fromEnv.replace(/\/+$/, '')

/* Only the real production deployment may claim canonicals, appear in the
   sitemap or invite crawlers. Preview builds are noindexed instead, so they
   never compete with production for the same content. Off Vercel entirely
   (local, CI) this is true, so a local build behaves like the real thing. */
export const IS_CANONICAL_HOST =
  !process.env.VERCEL || process.env.VERCEL_ENV === 'production'

/* '/why-us' -> 'https://…/why-us'. '/' keeps its slash; everything else has
   none, matching Next's default `trailingSlash: false` routing. */
export const abs = (path = '/') =>
  path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

/* Stable schema.org node identifiers. Every page's graph references these
   rather than restating the organisation, so the whole site resolves to one
   entity rather than 225 copies of it. */
export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

/* The organisation as structured data sees it. The address is spelled out as
   a PostalAddress rather than parsed out of `footer.address`, which is a
   display array and free to be re-line-broken at any time. */
export const ORG = {
  name: brand.name,
  legalName: brand.name,
  description: footer.tagline,
  email: footer.email,
  telephone: footer.phone,
  logo: '/logos/entroid-favicon.png',
  image: '/logos/entroid-logo.svg',
  address: {
    streetAddress: 'C21 Business Park, Ring Road',
    addressLocality: 'Indore',
    addressRegion: 'MP',
    postalCode: '452010',
    addressCountry: 'IN',
  },
  /* Already in the footer on every page — the audit reported these as missing
     because its crawler skipped icon-only links with no text node. */
  sameAs: footer.social.map((s) => s.to),
}
