import { Faq } from '../../../components/Site'
import { JsonLd } from '../../../components/JsonLd'
import { faq } from '../../../faq'
import { clampDescription, pageMeta } from '../../../lib/seo'
import { breadcrumbList, faqPage, graph } from '../../../lib/schema'

const description = clampDescription(faq.intro)

export const metadata = pageMeta({ title: 'FAQ', description, path: '/resources/faq' })

/* FAQPage carries the WebPage @id itself — it is a subtype of WebPage, so a
   separate WebPage node for the same URL would be a duplicate entity. */
const jsonLd = graph(faqPage({
  path: '/resources/faq',
  name: faq.headline,
  description,
  groups: faq.groups,
  breadcrumb: true,
}),
  breadcrumbList({ path: '/resources/faq', items: [{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/resources/faq' }] }),
)

export default function FaqPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Faq />
    </>
  )
}
