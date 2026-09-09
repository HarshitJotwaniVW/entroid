import { notFound } from 'next/navigation'
import { BlogPostView } from '../../../../components/BlogPostView'
import { JsonLd } from '../../../../components/JsonLd'
import { allPosts, postMeta, relatedPosts } from '../../../../lib/blogIndex'
import { postBody } from '../../../../lib/blogBodies'
import { clampDescription, pageMeta } from '../../../../lib/seo'
import { blogImageSize, ogSafe } from '../../../../data/blogImageSizes'
import { authorFor } from '../../../../lib/authors'
import { blogPosting, breadcrumbList, graph, webPage } from '../../../../lib/schema'

/* All 180 posts are known at build time, so each one is prerendered with its
   body already inlined — the article HTML never ships as JS. */
export const generateStaticParams = () => allPosts.map((p) => ({ slug: p.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const meta = postMeta(slug)
  if (!meta) return { title: 'Blog', robots: { index: false, follow: true } }
  /* An article, not a page: `article:published_time` and the rest are what a
     crawler reads to date and attribute the piece. The post's own hero
     photograph makes a better share card than the generic plate, so it wins
     where there is one. */
  /* Only a landscape hero makes a usable card; a portrait one would be
     cropped to a strip through its middle, so those fall back to the plate. */
  const card = meta.heroImage && ogSafe(meta.heroImage) ? meta.heroImage : null
  /* `article:author` takes the profile URL, not the display name — that is the
     form the property is specified in, and it resolves to a real profile. */
  const author = authorFor(slug)

  return pageMeta({
    title: meta.title,
    description: clampDescription(meta.description || meta.subtitle),
    path: `/resources/blogs/${slug}`,
    image: card || undefined,
    imageAlt: card ? (meta.heroImageAlt || meta.title) : undefined,
    imageSize: card ? blogImageSize(card) : null,
    type: 'article',
    openGraph: {
      ...(meta.publishDate ? { publishedTime: meta.publishDate } : {}),
      authors: [author.url],
      ...(meta.category ? { section: meta.category } : {}),
    },
  })
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const meta = postMeta(slug)
  /* An unknown slug is a missing page, so say so. Redirecting to the listing
     instead — which is what this did — is Google's textbook soft 404. */
  if (!meta) notFound()

  const path = `/resources/blogs/${slug}`
  const description = clampDescription(meta.description || meta.subtitle)
  const jsonLd = graph(
    webPage({ path, name: meta.title, description, breadcrumb: true }),
    blogPosting({ path, meta }),
    breadcrumbList({
      path,
      items: [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/resources/blogs' },
        // The category has no page of its own, so it is named, not linked.
        { name: meta.category },
        { name: meta.title, path },
      ],
    }),
  )

  const body = await postBody(slug)
  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogPostView meta={meta} body={body} related={relatedPosts(slug, meta.category)} />
    </>
  )
}
