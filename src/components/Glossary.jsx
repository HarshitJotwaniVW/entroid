'use client'

import { useMemo, useState } from 'react'
import { glossary, glossaryIntro } from '../data/glossary'
import { Reveal } from './Reveal'

const sslug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export const Glossary = () => {
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()
  const total = useMemo(() => glossary.reduce((n, s) => n + s.terms.length, 0), [])

  const sections = useMemo(() => {
    if (!query) return glossary
    return glossary
      .map((s) => ({ ...s, terms: s.terms.filter((t) => t.term.toLowerCase().includes(query) || t.def.toLowerCase().includes(query)) }))
      .filter((s) => s.terms.length)
  }, [query])

  return (
    <>
      <header className="phero phero--gradient phero--compact">
        <div className="container phero__inner">
          <Reveal as="p" className="phero__eyebrow" eager>Resources · Glossary</Reveal>
          <Reveal as="h1" className="phero__headline" delay={120} eager>Glossary</Reveal>
          <Reveal as="p" className="phero__intro" delay={220} eager>{glossaryIntro}</Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container gloss__layout">
          <aside className="gloss__nav">
            <input
              className="gloss__search"
              type="search"
              placeholder={`Search ${total} terms`}
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <nav className="gloss__navlist">
              {glossary.map((s) => <a key={s.section} href={`#${sslug(s.section)}`}>{s.section}</a>)}
            </nav>
          </aside>

          <div className="gloss__main">
            {sections.length === 0 && <p className="gloss__empty">No terms match “{q}”.</p>}
            {sections.map((s) => (
              <section key={s.section} id={sslug(s.section)} className="gloss__section">
                <Reveal as="h2" className="gloss__h">{s.section}</Reveal>
                <Reveal as="dl" variant="fade" className="gloss__list stagger">
                  {s.terms.map((t) => (
                    <div key={t.term} className="gloss__entry">
                      <dt className="gloss__term">{t.term}</dt>
                      <dd className="gloss__def">{t.def}</dd>
                    </div>
                  ))}
                </Reveal>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
