import '../styles.css'
import '../blog.css'
import { Nav, Footer, ScrollManager } from '../components/Site'
import { SmoothScroll } from '../components/SmoothScroll'

/* Favicons. One 1080px PNG, which the browser downscales for every slot.
   The source is the brand MARK on its own — the lockup in
   public/logos/entroid-logo.svg carries the wordmark and is far too wide
   to read at 16px. */
/* Absolute base for the open-graph image URLs on blog posts. Set
   NEXT_PUBLIC_SITE_URL to the production domain; on Vercel previews the
   deployment URL stands in. */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:5179')

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Entroid',
  description: 'Entroid — the unified, governed operating layer for the autonomous enterprise.',
  icons: {
    icon: '/logos/entroid-favicon.png',
    apple: '/logos/entroid-favicon.png',
  },
}

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
      </head>
      <body>
        <SmoothScroll />
        <ScrollManager />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
