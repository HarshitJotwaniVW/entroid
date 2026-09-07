'use client'

import { useMemo, useState } from 'react'
import { allPosts } from '../lib/blogIndex'
import { Reveal } from './Reveal'
import { BlogCard } from './BlogCard'
import { useBlogMode } from './useBlogMode'

/* ── Blog list (/resources/blogs) ──────────────────────────────── */
export const BlogList = () => {
  useBlogMode()
  const [active, setActive] = useState('All')
  const categories = useMemo(
    () => ['All', ...[...new Set(allPosts.map((p) => p.category))].sort()],
    [],
  )
  const visible = active === 'All' ? allPosts : allPosts.filter((p) => p.category === active)

  return (
    <>
      <header className="phero bloghero">
        <div className="container bloghero__inner">
          <div className="bloghero__lead">
            <Reveal as="p" className="phero__eyebrow">Resources · Blog</Reveal>
            <Reveal as="h1" className="phero__headline" delay={120}>Enterprise insight, from the front line.</Reveal>
            <Reveal as="p" className="phero__intro" delay={220}>Real problems from large enterprises, and the operating-layer pattern behind them.</Reveal>
          </div>
          <Reveal className="bloghero__aside" variant="right" delay={300}>
            <label className="blogselect">
              <span className="blogselect__label">Browse by topic</span>
              <div className="blogselect__field">
                <select value={active} onChange={(e) => setActive(e.target.value)}>
                  {categories.map((c) => (
                    <option key={c} value={c}>{c === 'All' ? 'All topics' : c}</option>
                  ))}
                </select>
                <svg className="blogselect__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
              </div>
            </label>
            <span className="bloghero__count">{active === 'All' ? `${visible.length} articles` : `${visible.length} in ${active}`}</span>
          </Reveal>
        </div>
      </header>

      <section className="bloglistwrap">
        <div className="container">
          {visible.length > 0 && <BlogCard p={visible[0]} featured />}
          <div className="bloglist">
            {visible.slice(1).map((p) => <BlogCard key={p.slug} p={p} />)}
          </div>
        </div>
      </section>
    </>
  )
}
