import { UseCases } from '../../components/Site'
import { JsonLd } from '../../components/JsonLd'
import { useCasesHero } from '../../usecases'
import { clampDescription } from '../../lib/seo'
import { graph, webPage } from '../../lib/schema'

const description = clampDescription(useCasesHero.intro)

export const metadata = {
  title: 'Use Cases',
  description,
  alternates: { canonical: '/use-cases' },
}

const jsonLd = graph(webPage({ path: '/use-cases', name: useCasesHero.headline, description }))

export default function UseCasesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <UseCases />
    </>
  )
}
