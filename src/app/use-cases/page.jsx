import { UseCases } from '../../components/Site'
import { JsonLd } from '../../components/JsonLd'
import { useCasesHero } from '../../usecases'
import { clampDescription, pageMeta } from '../../lib/seo'
import { breadcrumbList, graph, webPage } from '../../lib/schema'

const description = clampDescription(useCasesHero.intro)

export const metadata = pageMeta({ title: 'Use Cases', description, path: '/use-cases' })

const jsonLd = graph(webPage({ path: '/use-cases', name: useCasesHero.headline, description, breadcrumb: true }),
  breadcrumbList({ path: '/use-cases', items: [{ name: 'Home', path: '/' }, { name: 'Use Cases', path: '/use-cases' }] }),
)

export default function UseCasesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <UseCases />
    </>
  )
}
