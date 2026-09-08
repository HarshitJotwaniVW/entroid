import { Glossary } from '../../../components/Glossary'
import { JsonLd } from '../../../components/JsonLd'
import { glossary, glossaryIntro } from '../../../data/glossary'
import { definedTermSet, graph, webPage } from '../../../lib/schema'

const path = '/resources/glossary'

export const metadata = {
  title: 'Glossary',
  description: glossaryIntro,
  alternates: { canonical: path },
}

/* Built here, on the server, from the full `glossary` array — NOT from inside
   Glossary.jsx, which is a client component whose section list is filtered by
   the search box on every keystroke. Rendering the graph from that state would
   let a crawler capture whatever subset happened to be on screen. */
const jsonLd = graph(
  webPage({ path, name: 'Glossary', description: glossaryIntro }),
  definedTermSet({ path, name: 'Entroid Glossary', description: glossaryIntro, sections: glossary }),
)

export default function GlossaryPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Glossary />
    </>
  )
}
