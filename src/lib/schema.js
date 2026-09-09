/* ============================================================================
   schema.org node builders.

   Pure functions, no React — every page composes the nodes it needs into one
   `@graph` and hands it to <JsonLd>. One graph per page rather than several
   sibling <script> tags, so nodes can reference each other by @id and the
   crawler sees one connected description of the page instead of several
   unrelated fragments.

   The organisation and the website are declared ONCE, in the root layout.
   Every other node points at them by @id. Restating them per page would give
   the site 225 competing copies of the same entity, which is the opposite of
   what structured data is for.
   ========================================================================== */

import { abs, ORG, ORG_ID, SITE_URL, WEBSITE_ID } from './site'
import { authorFor } from './authors'
import { anchorSlug, clampDescription } from './seo'

const CONTEXT = 'https://schema.org'

/* Drop empty values so a missing field is absent rather than null — a null
   datePublished is worse than no datePublished. */
const clean = (obj) => Object.fromEntries(
  Object.entries(obj).filter(([, v]) => v !== undefined && v !== null && v !== ''),
)

export const graph = (...nodes) => ({
  '@context': CONTEXT,
  '@graph': nodes.flat().filter(Boolean),
})

/* Ids are derived from the page URL, so they are stable and unique without a
   registry to keep in step. */
const pageId = (path) => `${abs(path)}#webpage`
const crumbId = (path) => `${abs(path)}#breadcrumb`

/* ── Sitewide (root layout only) ─────────────────────────────── */

export const organization = () => clean({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: ORG.name,
  legalName: ORG.legalName,
  url: `${SITE_URL}/`,
  description: ORG.description,
  logo: clean({ '@type': 'ImageObject', url: abs(ORG.logo) }),
  image: abs(ORG.image),
  email: ORG.email,
  telephone: ORG.telephone,
  address: clean({ '@type': 'PostalAddress', ...ORG.address }),
  contactPoint: clean({
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: ORG.email,
    telephone: ORG.telephone,
    areaServed: 'Worldwide',
    availableLanguage: 'English',
  }),
  sameAs: ORG.sameAs,
  knowsAbout: ORG.knowsAbout,
  /* Emitted only when a real value exists in ORG — `clean` drops them
     otherwise, so an unknown founding date is absent rather than guessed. */
  foundingDate: ORG.foundingDate,
  numberOfEmployees: ORG.numberOfEmployees
    ? clean({ '@type': 'QuantitativeValue', ...ORG.numberOfEmployees })
    : undefined,
})

/* No SearchAction / sitelinks searchbox: there is no site-wide search
   endpoint to point one at. The glossary's filter is client-side only, and
   declaring a search URL that does not resolve is false markup. */
export const website = () => clean({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: ORG.name,
  description: ORG.description,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
})

/* ── Per page ────────────────────────────────────────────────── */

export const webPage = ({ path, name, description, breadcrumb = false, type = 'WebPage' }) => clean({
  '@type': type,
  '@id': pageId(path),
  url: abs(path),
  name,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  inLanguage: 'en',
  breadcrumb: breadcrumb ? { '@id': crumbId(path) } : undefined,
})

/* `items` is [{ name, path }]. A trail entry without a `path` is emitted as a
   label with no `item` — correct for the last crumb, and the only safe way to
   name a level that has no page of its own.

   There is no /product or /industries index route in this app, so those trails
   must go Home -> {page} directly. An `item` URL that 404s invalidates the
   whole BreadcrumbList. */
export const breadcrumbList = ({ path, items }) => clean({
  '@type': 'BreadcrumbList',
  '@id': crumbId(path),
  itemListElement: items.map((it, i) => clean({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.path ? abs(it.path) : undefined,
  })),
})

/* ── /resources/faq ──────────────────────────────────────────── */

/* FAQPage, not QAPage. QAPage is for user-submitted answers to a single
   question — Google's own documentation names "an FAQ page written by the site
   itself" as an invalid use of it, and allows only one Question per page.
   These 15 pairs are editorial, one canonical answer each, so FAQPage is the
   accurate type. Google retired the FAQ rich result in May 2026, so this earns
   no SERP decoration; it is here because it states the question and answer
   boundaries explicitly for the crawlers and answer engines that read them. */
/* ── SoftwareApplication (product modules) ───────────────────────
   Each product page describes a module of one platform, so it is a
   SoftwareApplication rather than a Product: there is nothing here with a
   price, a SKU or a shipping weight.

   Deliberately WITHOUT `offers` and `aggregateRating`. Pricing is not
   published, and a rating nobody left is fabricated review data — the kind
   that earns a manual action rather than a rich result. An `offers` block
   with no price is also what makes Search Console report "missing field
   price" forever, so leaving it out is both honest and quieter. */
export const softwareApplication = ({ path, name, description, features }) => clean({
  '@type': 'SoftwareApplication',
  '@id': `${abs(path)}#software`,
  name,
  description,
  url: abs(path),
  applicationCategory: 'BusinessApplication',
  /* The platform runs air-gapped, on-prem and in cloud, so it is not tied to
     one operating system. */
  operatingSystem: 'Web-based, on-premise, air-gapped or cloud',
  publisher: { '@id': ORG_ID },
  provider: { '@id': ORG_ID },
  isPartOf: { '@id': `${SITE_URL}/#platform` },
  inLanguage: 'en',
  featureList: features && features.length ? features : undefined,
})

export const faqPage = ({ path, name, description, groups, breadcrumb = false }) => clean({
  '@type': 'FAQPage',
  '@id': pageId(path),
  url: abs(path),
  name,
  description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  inLanguage: 'en',
  breadcrumb: breadcrumb ? { '@id': crumbId(path) } : undefined,
  // Flattened across groups: schema.org has no construct for FAQ subsections.
  mainEntity: groups.flatMap((g) => g.items).map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  })),
})

/* ── /resources/glossary ─────────────────────────────────────── */

/* One set holding all 88 terms, rather than one set per section. The eight
   sections are page groupings, not eight separately published vocabularies,
   and DefinedTermSet has no property for nesting another set inside it.
   Section membership is lost in the flattening; each term instead carries its
   own anchor, so a definition can be cited on its own. */
export const definedTermSet = ({ path, name, description, sections }) => {
  const setId = `${abs(path)}#glossary`
  return [
    clean({
      '@type': 'DefinedTermSet',
      '@id': setId,
      url: abs(path),
      name,
      description,
      inLanguage: 'en',
      publisher: { '@id': ORG_ID },
      hasDefinedTerm: sections.flatMap((s) => s.terms.map((t) => clean({
        '@type': 'DefinedTerm',
        name: t.term,
        description: t.def,
        inDefinedTermSet: { '@id': setId },
        /* The term's own anchor, not its section's — a definition that
           resolves to a shared heading is not separately citable. Matches the
           id Glossary.jsx puts on each entry. */
        url: `${abs(path)}#${anchorSlug(t.term)}`,
      }))),
    }),
  ]
}

/* ── /resources/blogs/[slug] ─────────────────────────────────── */

/* BlogPosting rather than Article: these live under /resources/blogs and read
   as posts. `author` is the Person who wrote it, with their LinkedIn profile as
   `url`, which is what lets a search engine tie the byline to a real identity
   rather than to the company.

   Dates are emitted only where a real one exists (13 of the 180 posts carry a
   publishDate; the rest have none). A build-time date on the others would
   change on every deploy and read as manufactured freshness. */
export const blogPosting = ({ path, meta }) => clean({
  '@type': 'BlogPosting',
  '@id': `${abs(path)}#article`,
  mainEntityOfPage: { '@id': pageId(path) },
  url: abs(path),
  // Google truncates headlines past ~110 characters; the <h1> keeps the full one.
  headline: clampDescription(meta.title, 110),
  description: meta.subtitle || meta.description,
  image: meta.heroImage ? abs(meta.heroImage) : undefined,
  articleSection: meta.articleSection || meta.category,
  datePublished: meta.publishDate || undefined,
  dateModified: meta.publishDate || undefined,
  author: {
    '@type': 'Person',
    name: authorFor(meta.slug).name,
    url: authorFor(meta.slug).url,
  },
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
})
