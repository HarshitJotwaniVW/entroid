import { Faq } from '../../../components/Site'
import { JsonLd } from '../../../components/JsonLd'
import { faq } from '../../../faq'
import { clampDescription } from '../../../lib/seo'
import { faqPage, graph } from '../../../lib/schema'

const description = clampDescription(faq.intro)

export const metadata = {
  title: 'FAQ',
  description,
  alternates: { canonical: '/resources/faq' },
}

/* FAQPage carries the WebPage @id itself — it is a subtype of WebPage, so a
   separate WebPage node for the same URL would be a duplicate entity. */
const jsonLd = graph(faqPage({
  path: '/resources/faq',
  name: faq.headline,
  description,
  groups: faq.groups,
}))

export default function FaqPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Faq />
    </>
  )
}
