'use client'

import Link from 'next/link'
import { Reveal } from './Reveal'
import { BlogCard } from './BlogCard'
import { useBlogMode } from './useBlogMode'
import { authorFor } from '../lib/authors'

/* The article body is read, not browsed: animating each block in as it scrolls
   put a stutter between the reader and the next paragraph. The body renders
   plainly; only the page furniture above it still animates in. */

/* ── Blog post (/resources/blogs/:slug) ────────────────────────── */
export const BlogPostView = ({ meta, body, related = [] }) => {
  useBlogMode()
  const author = authorFor(meta.slug)

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
          <Reveal className="bpost__meta" delay={320}>
            <span>By <a className="bpost__author" href={author.url} target="_blank" rel="noopener noreferrer">{author.name}</a></span>
            <span aria-hidden="true">·</span><span>{meta.readTime}</span>
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
        {/* The answer, before the argument for it. This is the post's own
            standfirst, moved out of the hero and labelled — a reader skimming
            and an engine extracting want the same thing first, and repeating
            the sentence in both places would read as a mistake. */}
        {meta.subtitle && (
          <div className="bpost__answer">
            <p className="bpost__answerLabel">Short answer</p>
            <p className="bpost__answerText">{meta.subtitle}</p>
          </div>
        )}
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
