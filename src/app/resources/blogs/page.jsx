import { pageMeta } from '../../../lib/seo'
import { BlogList } from '../../../components/BlogList'
import { JsonLd } from '../../../components/JsonLd'
import { ORG_ID, WEBSITE_ID, abs } from '../../../lib/site'
import { breadcrumbList, graph, webPage } from '../../../lib/schema'

const description = 'Real problems from large enterprises, and the operating-layer pattern behind them.'

export const metadata = pageMeta({ title: 'Blog', description, path: '/resources/blogs' })

/* The listing itself is a Blog; individual posts declare BlogPosting and point
   back here. No ItemList of all 180 posts — a large payload for a listing that
   filters client-side, and every post is in the sitemap already. */
const jsonLd = graph(
  webPage({ path: '/resources/blogs', name: 'Blog', description, breadcrumb: true }),
  {
    '@type': 'Blog',
    '@id': `${abs('/resources/blogs')}#blog`,
    url: abs('/resources/blogs'),
    name: 'Entroid Blog',
    description,
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en',
  },
  breadcrumbList({ path: '/resources/blogs', items: [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/resources/blogs' }] }),
)

export default function BlogsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogList />
    </>
  )
}
