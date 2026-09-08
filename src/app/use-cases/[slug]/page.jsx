import { UseCaseDetail } from '../../../components/Site'
import { JsonLd } from '../../../components/JsonLd'
import { useCaseGroups } from '../../../usecases'
import { describe } from '../../../lib/seo'
import { breadcrumbList, graph, webPage } from '../../../lib/schema'

const allUseCases = useCaseGroups.flatMap((g) => g.items)

export const generateStaticParams = () => allUseCases.map((u) => ({ slug: u.slug }))

const missing = { robots: { index: false, follow: true } }

/* No single field is the right length on its own: `scenario` is a one-line
   setup and `outcome` is what comes of it, so the two together read as a
   complete description and clamp cleanly at the join. */
const descriptionFor = (u) => describe(u.scenario, u.outcome)

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const u = allUseCases.find((x) => x.slug === slug)
  if (!u) return { title: 'Use Cases', ...missing }
  return {
    title: u.title,
    description: descriptionFor(u),
    alternates: { canonical: `/use-cases/${slug}` },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const u = allUseCases.find((x) => x.slug === slug)
  if (!u) return <UseCaseDetail slug={slug} />

  const path = `/use-cases/${slug}`
  // /use-cases is a real page, so this trail gets its middle level.
  const jsonLd = graph(
    webPage({ path, name: u.title, description: descriptionFor(u), breadcrumb: true }),
    breadcrumbList({
      path,
      items: [{ name: 'Home', path: '/' }, { name: 'Use Cases', path: '/use-cases' }, { name: u.title, path }],
    }),
  )

  return (
    <>
      <JsonLd data={jsonLd} />
      <UseCaseDetail slug={slug} />
    </>
  )
}
