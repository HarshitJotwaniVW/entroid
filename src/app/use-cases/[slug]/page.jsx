import { UseCaseDetail } from '../../../components/Site'
import { useCaseGroups } from '../../../usecases'

const allUseCases = useCaseGroups.flatMap((g) => g.items)

export const generateStaticParams = () => allUseCases.map((u) => ({ slug: u.slug }))

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const u = allUseCases.find((x) => x.slug === slug)
  return { title: u ? `${u.title} · Entroid` : 'Use Cases · Entroid' }
}

export default async function Page({ params }) {
  const { slug } = await params
  return <UseCaseDetail slug={slug} />
}
