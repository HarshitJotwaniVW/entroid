import { abs, IS_CANONICAL_HOST, SITE_URL } from '../lib/site'

/* AI crawlers, named explicitly.

   `User-agent: *` already allows all of these, so the named block changes
   nothing today. It is here to make the stance deliberate and legible: the
   absence of a robots.txt is not a decision, and a host-level default or a WAF
   rule flipping later would silently reverse it. Listed by name, the intent
   survives. */
const AI_CRAWLERS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-User', 'Claude-SearchBot',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended',
  'CCBot', 'meta-externalagent',
]

export default function robots() {
  /* Previews carry the same content as production. Keep them out entirely
     rather than letting two hosts compete for the same pages. */
  if (!IS_CANONICAL_HOST) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: abs('/sitemap.xml'),
    host: SITE_URL,
  }
}
