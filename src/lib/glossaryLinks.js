import { glossary } from '../data/glossary'
import { anchorSlug } from './seo'

/* ============================================================================
   Links from blog posts and product pages to the glossary entries they use.

   Runs on the server at build time, so the links are in the HTML that crawlers
   read and no glossary data ships to the browser.

   Each link goes to the term's own anchor on /resources/glossary. That is the
   same anchor Glossary.jsx puts on the entry, and the same URL the
   DefinedTerm structured data uses.
   ========================================================================== */

const GLOSSARY_PATH = '/resources/glossary'
export const glossaryHref = (term) => `${GLOSSARY_PATH}#${anchorSlug(term)}`

/* Not matched automatically. These are everyday words ("agent", "control",
   "incident") that would turn half of every sentence into a link, or "Entroid"
   itself. They still have glossary entries; they just aren't linked from text. */
const NEVER = new Set([
  'Entroid', 'Module', 'Space', 'Agent', 'Governance', 'Compliance', 'Control',
  'Endpoint', 'Remediation', 'Incident', 'Portfolio', 'Inference', 'Forecasting',
  'Modernization',
])

/* "Finance", "People", "Customers" and the rest are the names of the product
   pages themselves, not vocabulary. */
const NEVER_SECTIONS = new Set(['Enterprise Functions'])

/* Entroid's own product names. They only mean Entroid's feature on Entroid's
   pages. In a blog post "Sentinel" is usually Microsoft Sentinel, and
   "marketplace" is usually any marketplace. */
const PRODUCT_ONLY = new Set(['Sherlock', 'Sentinel', 'Command Center', 'Marketplace'])

const ACRONYM = /^[A-Z][A-Z0-9]{1,5}$/
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/* "Retrieval-Augmented Generation (RAG)" matches either the name or the
   acronym; "SOX (Sarbanes-Oxley)" the same, the other way round. Acronyms must
   be in capitals ("SLA", not "sla"). Spaces and hyphens are interchangeable
   ("human in the loop" finds Human-in-the-Loop), "&" also matches the HTML
   "&amp;", and a plural "s" is allowed. */
const variantsOf = (term) => {
  const m = term.match(/^(.*?)\s*\((.*)\)$/)
  return (m ? [m[1], m[2]] : [term]).map((v) => v.trim()).filter(Boolean).map((v) => {
    if (ACRONYM.test(v)) return { source: escape(v), acronym: v }
    const words = v.split(/[\s-]+/).map((w) => (w === '&' ? '(?:&|&amp;)' : escape(w)))
    return { source: words.join('[\\s-]+'), acronym: null }
  })
}

const build = (scope) => {
  const alts = []
  for (const s of glossary) {
    if (NEVER_SECTIONS.has(s.section)) continue
    for (const t of s.terms) {
      if (NEVER.has(t.term)) continue
      if (scope === 'blog' && PRODUCT_ONLY.has(t.term)) continue
      for (const v of variantsOf(t.term)) alts.push({ ...v, term: t.term, def: t.def })
    }
  }
  /* Longest first, so "Semantic Ontology" wins over "Ontology" when both
     start at the same place. */
  alts.sort((a, b) => b.source.length - a.source.length)
  const re = new RegExp(
    `(?<![\\w-])(?:${alts.map((a) => `(${a.source}(?:e?s)?)`).join('|')})(?![\\w-])`,
    'gi',
  )
  return { re, alts }
}

const MATCHERS = { blog: build('blog'), product: build('product') }

/* Calls `onMatch(entry, text, index)` for each term found in `text`, in order.
   Lower-case versions of acronyms are skipped here, because the regex itself
   has to be case-insensitive for the full names. */
const scan = (matcher, text, onMatch) => {
  const { re, alts } = matcher
  re.lastIndex = 0
  let m
  while ((m = re.exec(text))) {
    const i = m.slice(1).findIndex((g) => g !== undefined)
    const a = alts[i]
    const exactAcronym = a.acronym && m[0].startsWith(a.acronym) && /^(?:e?s)?$/.test(m[0].slice(a.acronym.length))
    if (a.acronym && !exactAcronym) continue
    onMatch(a, m[0], m.index)
  }
}

const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/* ── Blog bodies ─────────────────────────────────────────────────

   Links the FIRST use of each term, and at most MAX_LINKS terms per post, so
   the article stays readable. Only text inside paragraphs and list items is
   touched. Headings, existing links, SVG diagrams (whose labels are <text>
   elements), styles and scripts are left alone. */
const MAX_LINKS = 8
const LINKABLE = new Set(['p', 'li', 'td'])
const UNTOUCHABLE = new Set(['a', 'svg', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'style', 'script', 'button', 'code', 'pre'])
const VOID = new Set(['br', 'img', 'hr', 'input', 'meta', 'link', 'source', 'wbr', 'col', 'area'])

export const linkGlossaryTerms = (html) => {
  if (!html) return html
  const used = new Set()
  let linkable = 0
  let untouchable = 0

  return html.split(/(<[^>]+>)/).map((part) => {
    if (part.startsWith('<')) {
      const t = part.match(/^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/)
      if (!t || part.endsWith('/>') || VOID.has(t[2].toLowerCase())) return part
      const name = t[2].toLowerCase()
      const step = t[1] ? -1 : 1
      if (LINKABLE.has(name)) linkable = Math.max(0, linkable + step)
      if (UNTOUCHABLE.has(name)) untouchable = Math.max(0, untouchable + step)
      return part
    }
    if (!part || linkable === 0 || untouchable > 0 || used.size >= MAX_LINKS) return part

    let out = ''
    let last = 0
    scan(MATCHERS.blog, part, (a, text, index) => {
      if (used.has(a.term) || used.size >= MAX_LINKS) return
      used.add(a.term)
      out += part.slice(last, index)
      out += `<a class="gloss-link" href="${glossaryHref(a.term)}" title="${attr(a.def)}">${text}</a>`
      last = index + text.length
    })
    return last === 0 ? part : out + part.slice(last)
  }).join('')
}

/* ── Product pages ───────────────────────────────────────────────

   Every glossary term used anywhere in the page's copy, in the order it first
   appears, for the "Key terms" list at the foot of the page. */
const MAX_TERMS = 12

const stringsIn = (v) =>
  typeof v === 'string' ? [v]
    : Array.isArray(v) ? v.flatMap(stringsIn)
      : v && typeof v === 'object' ? Object.values(v).flatMap(stringsIn)
        : []

export const glossaryTermsIn = (data) => {
  const found = new Map()
  for (const text of stringsIn(data)) {
    scan(MATCHERS.product, text, (a) => {
      if (!found.has(a.term)) found.set(a.term, { term: a.term, def: a.def, href: glossaryHref(a.term) })
    })
  }
  return [...found.values()].slice(0, MAX_TERMS)
}
