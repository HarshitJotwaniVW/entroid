import { abs, IS_CANONICAL_HOST } from '../lib/site'
import { allRoutes } from '../lib/routes'

/* /sitemap.xml, generated at build time from lib/routes.js.

   225 URLs, well inside the 50,000-URL limit, so one flat sitemap rather than
   a sitemap index.

   `lastModified` is set only for blog posts, from the date in each post's data
   entry. A build timestamp on every entry would tell crawlers the entire site
   changed on every deploy, which is a freshness signal they learn to discount.

   Preview deployments emit nothing: their content is production's, and a
   sitemap served from a preview host would offer crawlers a second copy of
   every page. */
export default function sitemap() {
  if (!IS_CANONICAL_HOST) return []

  return allRoutes().map((r) => ({
    url: abs(r.path),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    /* Passed through as the plain YYYY-MM-DD from the data, a valid sitemap
       date, so <lastmod> reads exactly like the page's own dates. Wrapping it
       in a Date would add a midnight-UTC time the source never had. */
    ...(r.lastModified ? { lastModified: r.lastModified } : {}),
  }))
}
