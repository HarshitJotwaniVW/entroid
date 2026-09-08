import { abs, ORG, SITE_URL } from '../../lib/site'
import { PRIMARY_SECTIONS } from '../../lib/routes'

/* /llms.txt — the emerging convention for pointing an agent at a site's most
   useful pages.

   Google has confirmed this has no bearing on Search, AI Overviews or AI Mode.
   It is here for the other crawlers and agents that do read it, and it costs
   one static file. Generated from the same inventory as the sitemap, and from
   SITE_URL, so it can never name a host the rest of the site has moved off.

   A route handler rather than a file in public/: `dynamic = 'force-static'`
   prerenders it at build time, so it is served as a static asset either way,
   but it stays in step with the route list on its own. */
export const dynamic = 'force-static'

export function GET() {
  const body = [
    `# ${ORG.name}`,
    '',
    `> ${ORG.description}`,
    '',
    `${ORG.name} unifies business applications, enterprise knowledge, data and AI on a single`,
    'governed operating model, so every business function runs as one connected enterprise',
    'rather than a set of isolated systems.',
    '',
    '## Main sections',
    '',
    ...PRIMARY_SECTIONS.map((s) => `- [${s.name}](${abs(s.path)}): ${s.note}`),
    '',
    '## Full index',
    '',
    `- [Sitemap](${abs('/sitemap.xml')}): every page on the site`,
    '',
    '## Contact',
    '',
    `- Email: ${ORG.email}`,
    `- Web: ${SITE_URL}/contact`,
    '',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
