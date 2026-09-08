import { WhyUs } from '../../components/Site'
import { JsonLd } from '../../components/JsonLd'
import { whyUs } from '../../whyus'
import { clampDescription } from '../../lib/seo'
import { graph, webPage } from '../../lib/schema'

const description = clampDescription(whyUs.hero.intro)

export const metadata = {
  title: 'Why Us',
  description,
  alternates: { canonical: '/why-us' },
}

const jsonLd = graph(webPage({ path: '/why-us', name: whyUs.hero.headline, description }))

export default function WhyUsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <WhyUs />
    </>
  )
}
