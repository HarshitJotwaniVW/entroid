import { pageMeta } from '../../../lib/seo'
import { ComingSoon } from '../../../components/Site'

/* A placeholder page with about forty words on it. Kept reachable, because the
   nav links to it, but held out of the index and out of the sitemap until
   there is something here — a thin page in the index is worth less than no
   page at all. */
/* Noindexed until there is something here, but a link to it can still be
   pasted into Slack or LinkedIn, so it gets the same share card as the rest. */
export const metadata = {
  ...pageMeta({
    title: 'Videos',
    description: 'Product demos and platform walkthroughs, in production now.',
    path: '/resources/videos',
  }),
  alternates: undefined,
  robots: { index: false, follow: true },
}

export default function VideosPage() {
  return (
    <ComingSoon
      eyebrow="Resources · Videos"
      title="The video library is coming soon."
      text="Product demos and platform walkthroughs are in production. In the meantime, the blog and product pages cover the platform in depth."
    />
  )
}
