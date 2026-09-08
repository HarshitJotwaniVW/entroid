import { Contact } from '../../components/Contact'
import { JsonLd } from '../../components/JsonLd'
import { ORG, ORG_ID, WEBSITE_ID, abs } from '../../lib/site'
import { graph, webPage } from '../../lib/schema'

const path = '/contact'
const heading = 'Request a demo'

export const metadata = {
  title: 'Contact',
  description:
    'Request a demo or speak to the Entroid team about running your enterprise on one governed operating model.',
  alternates: { canonical: path },
}

const jsonLd = graph(
  webPage({ path, name: heading, description: metadata.description, type: 'ContactPage' }),
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
)

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Contact />
    </>
  )
}
