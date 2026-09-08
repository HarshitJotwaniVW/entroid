import Script from 'next/script'
import '../styles.css'
import '../blog.css'
import { Nav, Footer, ScrollManager } from '../components/Site'
import { SmoothScroll } from '../components/SmoothScroll'
import { JsonLd } from '../components/JsonLd'
import { IS_CANONICAL_HOST, SITE_URL } from '../lib/site'
import { graph, organization, website } from '../lib/schema'

/* Favicons. One 1080px PNG, which the browser downscales for every slot.
   The source is the brand MARK on its own — the lockup in
   public/logos/entroid-logo.svg carries the wordmark and is far too wide
   to read at 16px. */

/* Absolute base for every URL the metadata layer emits — canonicals, the
   sitemap, open-graph images. Resolved once, in lib/site.js. */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  /* `template` gives every page the ` · Entroid` suffix, so page files carry
     only their own name. `default` is the homepage's own title, since
     src/app/page.jsx sets none. */
  title: {
    default: 'Entroid — the unified, governed operating layer for the autonomous enterprise',
    template: '%s · Entroid',
  },
  description: 'Entroid — the unified, governed operating layer for the autonomous enterprise.',
  applicationName: 'Entroid',
  icons: {
    icon: '/logos/entroid-favicon.png',
    apple: '/logos/entroid-favicon.png',
  },
  /* Preview and branch deployments carry the same content as production. They
     are kept out of the index so the two never compete for it. */
  robots: IS_CANONICAL_HOST ? undefined : { index: false, follow: false },
}

/* NOTE: no `alternates.canonical` here, ever. Next merges metadata shallowly
   per top-level key, so a canonical set on the layout would be inherited by
   every page that does not set its own — pointing all 225 URLs at whatever
   this said. Canonicals belong on the individual route files. */

/* Declared once for the whole site. Page graphs reference these by @id
   instead of restating them. */
const siteGraph = graph(organization(), website())

/* Google Analytics 4. */
const GA_ID = 'G-3NQRFHK7PN'

export const viewport = {
  themeColor: '#5b46f0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Typefaces: Anta (headings), Geist (body), JetBrains Mono
            (captions, eyebrows and meta). Keep this in sync with the --font,
            --font-heading and --font-caption tokens in src/styles.css.
            Notes: the css2 API needs the families in alphabetical order. Anta
            ships a single 400 weight, so it takes no weight axis at all; Geist
            is variable and takes the full `100..900` range. The preconnects let
            the font CSS and the font files start downloading in parallel rather
            than in a chain. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anta&family=Geist:wght@100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />

        {/* Barlow and the Material Symbols glyph set are used only by the hero
            illustration (src/components/HeroIllustration.jsx), which was authored
            against them. Keep in sync with src/heroIllustration.css. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />

        {/* Reveal-on-scroll starts elements at opacity 0 and JS brings them
            in. With scripting off that never happens and the page renders
            blank, so the hidden state is undone when there is no JS to undo
            it. See .reveal in styles.css. */}
        <noscript>
          <style>{'.reveal,.stagger>*{opacity:1!important;animation:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>

        <JsonLd data={siteGraph} />
        <SmoothScroll />
        <ScrollManager />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
