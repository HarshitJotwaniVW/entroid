import { BlogList } from '../../../components/BlogList'
import { JsonLd } from '../../../components/JsonLd'
import { ORG_ID, WEBSITE_ID, abs } from '../../../lib/site'
import { graph, webPage } from '../../../lib/schema'

const description = 'Real problems from large enterprises, and the operating-layer pattern behind them.'

export const metadata = {
  title: 'Blog',
  description,
  alternates: { canonical: '/resources/blogs' },
}

/* The listing itself is a Blog; individual posts declare BlogPosting and point
   back here. No ItemList of all 180 posts — a large payload for a listing that
   filters client-side, and every post is in the sitemap already. */
const jsonLd = graph(
  webPage({ path: '/resources/blogs', name: 'Blog', description }),
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
)

export default function BlogsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogList />
    </>
  )
}
