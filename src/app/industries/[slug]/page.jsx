import { IndustryPage } from '../../../components/Site'
import { industries } from '../../../industries'

export const generateStaticParams = () => Object.keys(industries).map((slug) => ({ slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const p = industries[slug]
  return p
    ? { title: `${p.category} · Entroid`, description: p.intro }
    : { title: 'Industry · Entroid' }
}

export default async function Page({ params }) {
  const { slug } = await params
  return <IndustryPage slug={slug} />
}
