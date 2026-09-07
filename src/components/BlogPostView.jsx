'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Reveal, revealOnScroll } from './Reveal'
import { BlogCard } from './BlogCard'
import { useBlogMode } from './useBlogMode'

/* Post bodies arrive as raw HTML, so they can't be wrapped in <Reveal>.
   Instead, tag every top-level block in the article and reveal each as it
   scrolls in — same look, applied after the markup is injected. */
const useRevealChildren = (key) => {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const cleanups = Array.from(root.children).map((k) => {
      k.classList.add('reveal')
      return revealOnScroll(k)
    })
    return () => cleanups.forEach((fn) => fn())
  }, [key])
  return ref
}

/* ── Blog post (/resources/blogs/:slug) ────────────────────────── */
export const BlogPostView = ({ meta, body, related = [] }) => {
  useBlogMode()
  const articleRef = useRevealChildren(body)

  return (
    <>
      <header className="bpost__hero">
        {meta.heroImage
          ? <img className="bpost__heroImg" src={meta.heroImage} alt={meta.heroImageAlt} loading="eager" />
          : <div className="bpost__heroImg bpost__heroImg--ph" aria-hidden="true" />}
        <div className="bpost__heroScrim" aria-hidden="true" />
        <div className="container bpost__heroInner">
          <Reveal as="p" className="bpost__crumb">
            <Link href="/resources/blogs">Blog</Link> <span>·</span> {meta.category}
          </Reveal>
          <Reveal as="h1" className="bpost__title" delay={120}>{meta.title}</Reveal>
          {meta.subtitle && <Reveal as="p" className="bpost__sub" delay={220}>{meta.subtitle}</Reveal>}
          <Reveal className="bpost__meta" delay={320}>
            <span>{meta.readTime}</span><span aria-hidden="true">·</span><span>Entroid</span>
          </Reveal>
        </div>
      </header>

      <div className="blog-article">
        {body
          ? <article ref={articleRef} dangerouslySetInnerHTML={{ __html: body }} />
          : <article className="blog-loading"><p>Loading…</p></article>}
      </div>

      {related.length > 0 && (
        <aside className="bpost__more">
          <div className="container">
            <Reveal as="p" className="section__label"><b>Keep reading</b> Blog</Reveal>
            <div className="bloglist bloglist--two">
              {related.map((r) => <BlogCard key={r.slug} p={r} />)}
            </div>
          </div>
        </aside>
      )}
    </>
  )
}
