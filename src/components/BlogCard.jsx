'use client'

import Link from 'next/link'
import { authorFor } from '../lib/authors'
import { Reveal } from './Reveal'

/* Each card reveals on its own as it scrolls into view — the listing is long,
   so a single container-level cascade would fire far too early. */
export const BlogCard = ({ p, featured }) => (
  <Reveal as={Link} href={`/resources/blogs/${p.slug}`} className={`blogcard${featured ? ' blogcard--featured' : ''}`}>
    <div className="blogcard__media">
      {p.heroImage
        ? <img src={p.heroImage} alt={p.heroImageAlt || p.title} loading="lazy" />
        : <span className="blogcard__ph" aria-hidden="true" />}
    </div>
    <div className="blogcard__body">
      <span className="blogcard__cat">{p.category}</span>
      <h3 className="blogcard__title">{p.title}</h3>
      {p.description && <p className="blogcard__excerpt">{p.description}</p>}
      <span className="blogcard__meta">
        <span className="blogcard__author">{authorFor(p.slug).name}</span>
        <span aria-hidden="true"> · </span>{p.readTime}
      </span>
    </div>
  </Reveal>
)
