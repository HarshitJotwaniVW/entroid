import { redirect } from 'next/navigation'
import { BlogPostView } from '../../../../components/BlogPostView'
import { allPosts, postMeta, relatedPosts } from '../../../../lib/blogIndex'
import { postBody } from '../../../../lib/blogBodies'

/* All 180 posts are known at build time, so each one is prerendered with its
   body already inlined — the article HTML never ships as JS. */
export const generateStaticParams = () => allPosts.map((p) => ({ slug: p.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const meta = postMeta(slug)
  if (!meta) return { title: 'Blog · Entroid' }
  return {
    title: `${meta.title} · Entroid`,
    description: meta.subtitle,
    openGraph: meta.heroImage ? { images: [meta.heroImage] } : undefined,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const meta = postMeta(slug)
  // Unknown slug: back to the listing, as the old <Navigate replace> did.
  if (!meta) redirect('/resources/blogs')

  const body = await postBody(slug)
  return <BlogPostView meta={meta} body={body} related={relatedPosts(slug, meta.category)} />
}
