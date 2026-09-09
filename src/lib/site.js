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

/* ── Social sharing ──────────────────────────────────────────────
   The default share card: 1200x630, the ratio Facebook, LinkedIn and X all
   crop to. Pages with real artwork of their own (the 180 articles) pass their
   own image instead; everything else shares this one.

   JPEG deliberately, not the WebP the site uses elsewhere — X does not render
   WebP in cards at all, and LinkedIn is unreliable with it, so a WebP share
   image silently shows as no image on the two platforms that matter most. */
export const OG_IMAGE = '/og-image.jpg'
export const OG_IMAGE_W = 1200
export const OG_IMAGE_H = 630
export const OG_IMAGE_ALT = `${brand.name} — the unified, governed operating layer for the autonomous enterprise`

/* The brand's X account as `@handle`, read off the footer link rather than
   written out again — the same URL already feeds `ORG.sameAs` below, and two
   copies of an account name are two things to keep in step. Null if the
   footer ever drops the link, which omits twitter:site and twitter:creator;
   the card still renders large without them. */
const X_URL = (footer.social.find((s) => s.name === 'X') || {}).to

export const TWITTER_HANDLE = X_URL
  ? `@${X_URL.replace(/\/+$/, '').split('/').pop()}`
  : null

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

  /* What the organisation is expert in, taken from the taxonomy the site is
     actually built on — the product modules and the industries with real
     pages — rather than a keyword list. Every entry here is a subject the
     site demonstrably covers, which is the only version of this property
     worth emitting.

     `foundingDate` and `numberOfEmployees` are deliberately absent until
     someone supplies the real figures. Both are checkable facts about a
     company, and a guess is worse than an omission. */
  knowsAbout: [
    'Enterprise AI governance',
    'Semantic ontology',
    'Enterprise resource planning',
    'Autonomous enterprise operations',
    'Governed AI agents',
    'Enterprise data governance',
    'Finance',
    'Supply Chain',
    'Operations',
    'People',
    'Customers',
    'PMO',
    'IT & CyberSecurity',
    'AI Foundry',
    'Trust, Governance & Assurance',
    'Oil & Gas',
    'Telecom',
    'Manufacturing',
    'Construction',
    'Renewable energy',
    'Wealth management',
  ],
}
