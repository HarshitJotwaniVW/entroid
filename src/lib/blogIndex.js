import { blogPosts } from '../data/blogPosts'
import { topicPosts } from '../data/topicPosts'
import { DEFAULT_HERO } from '../data/blogImages'
import { POOL } from '../data/blogPool'
import { titleOverrides } from '../data/titleOverrides'

/* ============================================================================
   The unified listing index (metadata only), shared by the listing page, the
   post page and its "keep reading" rail. No browser APIs, so it is safe on
   both sides of the server/client boundary.
   ========================================================================== */

/* Unique-per-post images: walk the (category-sorted) topic posts and hand each
   the next image in the pool, so no two adjacent or same-category cards match. */
export const topicImg = {}
topicPosts.forEach((p, i) => { topicImg[p.slug] = POOL[i % POOL.length] })

/* Strongest posts, surfaced at the top of the "All" view (in this order). */
const FEATURED = [
  'cfo-closes-books-in-5-days',
  'finops-you-were-allowed-to-overspend',
  'ppm-green-because-someone-typed-green',
  'ai-chatbot-wrong-pricing',
  'ceo-asked-are-we-on-track',
  'process-mining-the-agent-knew-the-policy',
  'crm-record-is-not-the-runtime',
  'business-intelligence-dashboard-is-a-recommendation',
  'auditor-asked-who-approved-this',
  'conversational-agents-your-support-bot-cant-run-your-company',
  'vendor-renewed-at-3x-market-rate',
  'mlops-you-ranked-model-governance',
]

const rawPosts = [
  ...blogPosts.map((p) => ({
    slug: p.slug, title: titleOverrides[p.slug] || p.title, description: p.description || p.subtitle,
    category: p.category, heroImage: p.heroImage, heroImageAlt: p.heroImageAlt, readTime: p.readTime,
  })),
  ...topicPosts.map((p) => ({
    slug: p.slug, title: titleOverrides[p.slug] || p.title, description: p.subtitle, category: p.category,
    heroImage: topicImg[p.slug] || DEFAULT_HERO, heroImageAlt: p.title, readTime: p.readTime,
  })),
]
const bySlug = Object.fromEntries(rawPosts.map((p) => [p.slug, p]))
const featuredSet = new Set(FEATURED)

export const allPosts = [
  ...FEATURED.map((s) => bySlug[s]).filter(Boolean),
  ...rawPosts.filter((p) => !featuredSet.has(p.slug)),
]

/* Everything a post page needs above its body — the same shape the old
   router-side lookup produced, for either kind of post. */
export const postMeta = (slug) => {
  const primary = blogPosts.find((p) => p.slug === slug)
  if (primary) {
    return {
      title: titleOverrides[slug] || primary.title, subtitle: primary.subtitle,
      category: primary.category, heroImage: primary.heroImage,
      heroImageAlt: primary.heroImageAlt, readTime: primary.readTime,
    }
  }
  const topic = topicPosts.find((p) => p.slug === slug)
  if (topic) {
    return {
      title: titleOverrides[slug] || topic.title, subtitle: topic.subtitle,
      category: topic.category, heroImage: topicImg[topic.slug] || DEFAULT_HERO,
      heroImageAlt: topic.title, readTime: topic.readTime,
    }
  }
  return null
}

export const relatedPosts = (slug, category) =>
  allPosts.filter((p) => p.slug !== slug && p.category === category).slice(0, 2)
