'use client'

import Link from 'next/link'
import { Reveal } from './Reveal'
import { BlogCard } from './BlogCard'
import { useBlogMode } from './useBlogMode'

/* The article body is read, not browsed: animating each block in as it scrolls
   put a stutter between the reader and the next paragraph. The body renders
   plainly; only the page furniture above it still animates in. */

/* ── Blog post (/resources/blogs/:slug) ────────────────────────── */
export const BlogPostView = ({ meta, body, related = [] }) => {
  useBlogMode()

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
          <Reveal as="h1" className="bpost__title" delay={120} eager>{meta.title}</Reveal>
          {meta.subtitle && <Reveal as="p" className="bpost__sub" delay={220} eager>{meta.subtitle}</Reveal>}
          <Reveal className="bpost__meta" delay={320}>
            <span>{meta.readTime}</span><span aria-hidden="true">·</span><span>Entroid</span>
            {/* Only the primary posts carry a date. It is rendered here rather
                than only in the BlogPosting markup, so the structured data
                describes something the reader can actually see. */}
            {meta.publishDate && (
              <>
                <span aria-hidden="true">·</span>
                <time dateTime={meta.publishDate}>
                  {new Date(`${meta.publishDate}T00:00:00Z`).toLocaleDateString('en-GB', {
                    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
                  })}
                </time>
              </>
            )}
          </Reveal>
        </div>
      </header>

      <div className="blog-article">
        {body
          ? <article dangerouslySetInnerHTML={{ __html: body }} />
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
