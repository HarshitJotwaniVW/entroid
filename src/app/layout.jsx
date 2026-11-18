import Script from 'next/script'
import '../styles.css'
import '../blog.css'
import '../homeV2.css'
import '../theme.css'
import { Nav, Footer, ScrollManager } from '../components/Site'
import { SmoothScroll } from '../components/SmoothScroll'
import { JsonLd } from '../components/JsonLd'
import { IS_CANONICAL_HOST, OG_IMAGE, OG_IMAGE_ALT, OG_IMAGE_H, OG_IMAGE_W, SITE_URL, TWITTER_HANDLE } from '../lib/site'
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

  /* The fallback share card, for anything that does not build its own with
     `pageMeta` — the 404 among them. Every real route overrides this whole key
     (Next merges metadata shallowly, one top-level key at a time), which is
     why `pageMeta` repeats siteName and locale rather than inheriting them. */
  openGraph: {
    type: 'website',
    siteName: 'Entroid',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, width: OG_IMAGE_W, height: OG_IMAGE_H, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    ...(TWITTER_HANDLE ? { site: TWITTER_HANDLE, creator: TWITTER_HANDLE } : {}),
    images: [OG_IMAGE],
  },
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
  themeColor: '#1c56d8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Typefaces (V2 theme): Inter Tight (headings), Inter (body) and IBM
            Plex Mono (captions), self-hosted from public/fonts and declared
            with @font-face at the top of src/styles.css. The two used above
            the fold are preloaded. */}
        <link rel="preload" href="/fonts/inter-tight-500-700-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/inter-400-600-latin.woff2" as="font" type="font/woff2" crossOrigin="" />

        {/* Reveal-on-scroll starts elements at opacity 0 and JS brings them
            in. With scripting off that never happens and the page renders
            blank, so the hidden state is undone when there is no JS to undo
            it. See .reveal in styles.css. */}
        <noscript>
          <style>{'.reveal,.stagger>*{opacity:1!important;animation:none!important}'}</style>
        </noscript>
      </head>
      {/* Grammarly and similar extensions write their own attributes onto
          <body> (`data-gr-ext-installed`, `data-new-gr-c-s-check-loaded`)
          before React hydrates, which React then reports as a mismatch against
          the server HTML. Nothing in this app renders those attributes, and we
          cannot stop an extension writing them, so the warning is suppressed
          for this one element.

          Scope matters: suppressHydrationWarning silences attribute and text
          differences on THIS element only — it does not extend to the tree
          below, so a real mismatch inside the app is still reported. */}
      <body suppressHydrationWarning>
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
