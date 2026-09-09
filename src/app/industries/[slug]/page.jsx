import { IndustryPage } from '../../../components/Site'
import { JsonLd } from '../../../components/JsonLd'
import { industries } from '../../../industries'
import { clampDescription, pageMeta } from '../../../lib/seo'
import { breadcrumbList, graph, webPage } from '../../../lib/schema'

export const generateStaticParams = () => Object.keys(industries).map((slug) => ({ slug }))

/* Unknown slug: the in-progress placeholder renders at 200, so keep it out of
   the index rather than letting a thin page be crawled. */
const missing = { robots: { index: false, follow: true } }

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const p = industries[slug]
  if (!p) return { title: 'Industry', ...missing }
  return pageMeta({
    title: p.category,
    description: p.metaDescription || clampDescription(p.intro),
    path: `/industries/${slug}`,
  })
}

export default async function Page({ params }) {
  const { slug } = await params
  const p = industries[slug]
  if (!p) return <IndustryPage slug={slug} />

  const path = `/industries/${slug}`
  // No /industries index route either — Home -> {category}, same as product.
  const jsonLd = graph(
    webPage({ path, name: p.headline, description: p.metaDescription || clampDescription(p.intro), breadcrumb: true }),
    breadcrumbList({ path, items: [{ name: 'Home', path: '/' }, { name: p.category, path }] }),
  )

  return (
    <>
      <JsonLd data={jsonLd} />
      <IndustryPage slug={slug} />
    </>
  )
}
