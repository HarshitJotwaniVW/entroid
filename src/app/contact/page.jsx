import { pageMeta } from '../../lib/seo'
import { Contact } from '../../components/Contact'
import { JsonLd } from '../../components/JsonLd'
import { ORG, ORG_ID, WEBSITE_ID, abs } from '../../lib/site'
import { breadcrumbList, graph, webPage } from '../../lib/schema'

const path = '/contact'
const heading = 'Request a demo'

export const metadata = pageMeta({
  title: 'Contact',
  description:
    'Request a demo or speak to the Entroid team about running your enterprise on one governed operating model.',
  path,
})

const jsonLd = graph(
  webPage({ path, name: heading, description: metadata.description, type: 'ContactPage', breadcrumb: true }),
  {
    '@type': 'ContactPoint',
    '@id': `${abs(path)}#contactpoint`,
    contactType: 'sales',
    email: ORG.email,
    telephone: ORG.telephone,
    areaServed: 'Worldwide',
    availableLanguage: 'English',
    url: abs(path),
    // Ties the contact details to the organisation declared in the layout.
    parentOrganization: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
  },
  breadcrumbList({ path: path, items: [{ name: 'Home', path: '/' }, { name: 'Contact', path: path }] }),
)

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Contact />
    </>
  )
}
