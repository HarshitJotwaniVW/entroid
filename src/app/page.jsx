import { Home } from '../components/Site'
import { JsonLd } from '../components/JsonLd'
import { graph, webPage } from '../lib/schema'

/* Title comes from the root layout's `default`. The description is written for
   the search result rather than lifted from the hero paragraph, which is one
   265-character sentence. */
export const metadata = {
  description:
    'Entroid unifies applications, enterprise knowledge, data and AI on one governed operating model, so every business function runs as one connected enterprise.',
  alternates: { canonical: '/' },
}

const jsonLd = graph(webPage({
  path: '/',
  name: 'Entroid — unified intelligence for governed autonomous enterprises',
  description: metadata.description,
}))

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Home />
    </>
  )
}
