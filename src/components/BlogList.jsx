'use client'

import { useMemo, useState } from 'react'
import { allPosts } from '../lib/blogIndex'
import { Reveal } from './Reveal'
import { BlogCard } from './BlogCard'
import { useBlogMode } from './useBlogMode'

/* ── Blog list (/resources/blogs) ──────────────────────────────── */
/* The hero is the same compact, centred band the other resource pages use —
   heading only. Search and the topic filter sit in their own bar below it, so
   the controls read as belonging to the list they filter rather than to the
   page title. */
export const BlogList = () => {
  useBlogMode()
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')

  const categories = useMemo(
    () => ['All', ...[...new Set(allPosts.map((p) => p.category))].sort()],
    [],
  )

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allPosts.filter((p) => {
      if (active !== 'All' && p.category !== active) return false
      if (!q) return true
      // Title, standfirst and topic — everything the card itself shows.
      return `${p.title} ${p.description || ''} ${p.category}`.toLowerCase().includes(q)
    })
  }, [active, query])

  const count = visible.length

  return (
    <>
      <header className="phero phero--gradient phero--compact">
        <div className="container phero__inner">
          <Reveal as="p" className="phero__eyebrow" eager>Resources · Blog</Reveal>
          <Reveal as="h1" className="phero__headline" delay={120} eager>Enterprise insight, from the front line.</Reveal>
          <Reveal as="p" className="phero__intro" delay={220} eager>Real problems from large enterprises, and the operating-layer pattern behind them.</Reveal>
        </div>
      </header>

      <section className="blogfilter">
        <div className="container blogfilter__inner">
          <label className="blogsearch">
            <span className="u-visually-hidden">Search articles</span>
            <svg className="blogsearch__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" /><path d="M20 20l-3.6-3.6" />
            </svg>
            <input
              type="search"
              placeholder="Search articles"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>

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

          {/* aria-live: the count is the only confirmation that typing did
              anything, so it is announced rather than silently updated. */}
          <span className="bloghero__count" aria-live="polite">
            {count === 1 ? '1 article' : `${count} articles`}
            {active !== 'All' && ` in ${active}`}
          </span>
        </div>
      </section>

      <section className="bloglistwrap">
        <div className="container">
          {count === 0 ? (
            <p className="bloglist__empty">
              No articles match {query.trim() ? `“${query.trim()}”` : 'that topic'}.
            </p>
          ) : (
            <>
              {/* The featured treatment is for the top of an unfiltered list;
                  once a search is narrowing things down, an even grid reads
                  better than one card claiming to be the headline. */}
              {!query.trim() && active === 'All' && <BlogCard p={visible[0]} featured />}
              <div className="bloglist">
                {(!query.trim() && active === 'All' ? visible.slice(1) : visible)
                  .map((p) => <BlogCard key={p.slug} p={p} />)}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
