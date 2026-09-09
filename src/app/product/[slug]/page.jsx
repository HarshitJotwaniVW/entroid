import { ProductPage } from '../../../components/Site'
import { JsonLd } from '../../../components/JsonLd'
import { products } from '../../../products'
import { clampDescription, pageMeta } from '../../../lib/seo'
import { breadcrumbList, graph, softwareApplication, webPage } from '../../../lib/schema'

/* Every product/space page is known at build time, so prerender them all. */
export const generateStaticParams = () => Object.keys(products).map((slug) => ({ slug }))

/* The footer links three product slugs that have no page yet — functions,
   engineering and service-as-software. They render the in-progress placeholder
   at HTTP 200, which is a soft 404: near-identical thin pages, linked from
   every page on the site. `dynamicParams` stays on (turning them into hard
   404s would break a sitewide footer link), so instead they are held out of
   the index and given no canonical, and the sitemap skips them. */
const missing = { robots: { index: false, follow: true } }

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const p = products[slug]
  if (!p) return { title: 'Product', ...missing }
  return pageMeta({
    title: p.category,
    description: p.metaDescription || clampDescription(p.intro),
    path: `/product/${slug}`,
  })
}

export default async function Page({ params }) {
  const { slug } = await params
  const p = products[slug]
  if (!p) return <ProductPage slug={slug} />

  const path = `/product/${slug}`
  /* Home -> {category}, two levels. There is no /product index route in this
     app, so a middle crumb pointing at one would 404 and invalidate the whole
     BreadcrumbList. */
  const description = p.metaDescription || clampDescription(p.intro)
  /* `featureList` takes the module names the page is actually built from —
     the capability bullets underneath them run to sixty-odd strings per page,
     which is a keyword dump rather than a feature list. */
  const features = (p.modules || []).map((m) => m.name).filter(Boolean)

  const jsonLd = graph(
    webPage({ path, name: p.headline, description, breadcrumb: true }),
    softwareApplication({ path, name: `Entroid ${p.category}`, description, features }),
    breadcrumbList({ path, items: [{ name: 'Home', path: '/' }, { name: p.category, path }] }),
  )

  return (
    <>
      <JsonLd data={jsonLd} />
      <ProductPage slug={slug} />
    </>
  )
}
