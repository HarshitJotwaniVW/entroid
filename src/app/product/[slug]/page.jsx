import { ProductPage } from '../../../components/Site'
import { products } from '../../../products'

/* Every product/space page is known at build time, so prerender them all. */
export const generateStaticParams = () => Object.keys(products).map((slug) => ({ slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const p = products[slug]
  return p
    ? { title: `${p.category} · Entroid`, description: p.intro }
    : { title: 'Product · Entroid' }
}

export default async function Page({ params }) {
  const { slug } = await params
  return <ProductPage slug={slug} />
}
