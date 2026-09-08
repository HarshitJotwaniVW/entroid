/* ============================================================================
   Every URL this site serves.

   One inventory, shared by sitemap.js, robots.js and llms.txt, so the three
   cannot drift apart. Built from the same data the route files' own
   generateStaticParams read, so a new product or industry appears in all of
   them the moment it is added to the content file.

   Held out deliberately:
     /resources/videos   a placeholder with about forty words on it, noindexed
                         until there is something there
     /product/functions, /product/engineering, /product/service-as-software
                         linked from the footer but not real pages yet; they
                         render the in-progress placeholder at HTTP 200, so
                         they are noindexed and excluded rather than offered
                         to crawlers as content
     #anchor deep links  fragments of pages already listed, not URLs

   Safe to import from a server file: blogIndex.js pulls in only plain data
   modules — the `server-only` import lives in blogBodies.js, which is reached
   solely from the blog post page.
   ========================================================================== */

import { products } from '../products'
import { industries } from '../industries'
import { useCaseGroups } from '../usecases'
import { allPosts } from '../lib/blogIndex'
import { blogPosts } from '../data/blogPosts'

/* Hand-ordered rather than derived, because priority is an editorial judgement
   about what matters, not something the file tree knows. */
export const STATIC_ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/why-us', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/use-cases', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/resources/blogs', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/resources/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources/glossary', priority: 0.6, changeFrequency: 'monthly' },
]

/* Only the 13 primary posts carry a date. Passing `undefined` for the rest
   leaves lastModified off that entry entirely, which is the honest answer —
   stamping the build time on all 180 would tell crawlers the whole archive
   changed on every deploy. */
const publishedAt = Object.fromEntries(
  blogPosts.filter((p) => p.publishDate).map((p) => [p.slug, p.publishDate]),
)

export const allRoutes = () => [
  ...STATIC_ROUTES,
  ...Object.keys(products).map((slug) => ({
    path: `/product/${slug}`, priority: 0.9, changeFrequency: 'monthly',
  })),
  ...Object.keys(industries).map((slug) => ({
    path: `/industries/${slug}`, priority: 0.8, changeFrequency: 'monthly',
  })),
  ...useCaseGroups.flatMap((g) => g.items).map((u) => ({
    path: `/use-cases/${u.slug}`, priority: 0.7, changeFrequency: 'monthly',
  })),
  ...allPosts.map((p) => ({
    path: `/resources/blogs/${p.slug}`,
    priority: 0.5,
    changeFrequency: 'yearly',
    lastModified: publishedAt[p.slug],
  })),
]

/* The handful of pages worth naming for an agent skim-reading the site. */
export const PRIMARY_SECTIONS = [
  { path: '/', name: 'Home', note: 'Unified intelligence for governed autonomous enterprises' },
  { path: '/why-us', name: 'Why Entroid', note: 'What sets the platform apart, and the team building it' },
  { path: '/use-cases', name: 'Use cases', note: 'Outcomes that span strategy, operations, finance and governance' },
  { path: '/resources/faq', name: 'FAQ', note: 'Direct answers about the platform, AI core, deployment and ownership' },
  { path: '/resources/glossary', name: 'Glossary', note: 'Plain-English definitions of 88 platform, AI, data and governance terms' },
  { path: '/resources/blogs', name: 'Blog', note: 'Enterprise problems and the operating-layer pattern behind them' },
  { path: '/contact', name: 'Contact', note: 'Request a demo or speak to the team' },
]
