import { abs, IS_CANONICAL_HOST, SITE_URL } from '../lib/site'

/* AI crawlers, named explicitly.

   `User-agent: *` already allows all of these, so the named block changes
   nothing today. It is here to make the stance deliberate and legible: the
   absence of a robots.txt is not a decision, and a host-level default or a WAF
   rule flipping later would silently reverse it. Listed by name, the intent
   survives.

   Search and AI crawlers, listed by name. A crawler that matches a named group
   ignores `User-agent: *` completely, so every group has to repeat the same
   PRIVATE_PATHS. If it didn't, the bots named here could crawl paths that
   everyone else is kept out of.

   Cloudflare's managed robots.txt (if it's turned on) adds its own
   `Disallow: /` groups for several of these bots ahead of this output. That is
   set in the Cloudflare dashboard, and nothing in this file can override it. */
const AI_CRAWLERS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
  'PerplexityBot', 'Perplexity-User',
  'Googlebot', 'Google-Extended',
  'Bingbot', 'Applebot-Extended',
  'CCBot', 'meta-externalagent',
]

/* Server endpoints, not pages. /api/contact only accepts form POSTs. */
const PRIVATE_PATHS = ['/api/']

export default function robots() {
  /* Previews carry the same content as production. Keep them out entirely
     rather than letting two hosts compete for the same pages. */
  if (!IS_CANONICAL_HOST) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE_PATHS },
      { userAgent: AI_CRAWLERS, allow: '/', disallow: PRIVATE_PATHS },
    ],
    sitemap: abs('/sitemap.xml'),
    host: SITE_URL,
  }
}
