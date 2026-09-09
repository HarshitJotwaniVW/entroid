import { WhyUs } from '../../components/Site'
import { JsonLd } from '../../components/JsonLd'
import { whyUs } from '../../whyus'
import { clampDescription, pageMeta } from '../../lib/seo'
import { breadcrumbList, graph, webPage } from '../../lib/schema'

const description = clampDescription(whyUs.hero.intro)

export const metadata = pageMeta({ title: 'Why Us', description, path: '/why-us' })

const jsonLd = graph(webPage({ path: '/why-us', name: whyUs.hero.headline, description, breadcrumb: true }),
  breadcrumbList({ path: '/why-us', items: [{ name: 'Home', path: '/' }, { name: 'Why Us', path: '/why-us' }] }),
)

export default function WhyUsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <WhyUs />
    </>
  )
}
