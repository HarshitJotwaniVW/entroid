import { notFound } from 'next/navigation'
import { BlogPostView } from '../../../../components/BlogPostView'
import { JsonLd } from '../../../../components/JsonLd'
import { allPosts, postMeta, relatedPosts } from '../../../../lib/blogIndex'
import { postBody } from '../../../../lib/blogBodies'
import { clampDescription } from '../../../../lib/seo'
import { blogPosting, breadcrumbList, graph, webPage } from '../../../../lib/schema'

/* All 180 posts are known at build time, so each one is prerendered with its
   body already inlined — the article HTML never ships as JS. */
export const generateStaticParams = () => allPosts.map((p) => ({ slug: p.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const meta = postMeta(slug)
  if (!meta) return { title: 'Blog', robots: { index: false, follow: true } }
  return {
    title: meta.title,
    description: clampDescription(meta.description || meta.subtitle),
    alternates: { canonical: `/resources/blogs/${slug}` },
    openGraph: meta.heroImage ? { images: [meta.heroImage] } : undefined,
  }
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
