'use client'

import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  brand,
  finalSection,
  footer,
  hero,
  heroProof,
  menu,
  navCta,
  sections,
} from '../content'
import { PlatformOrbit } from './PlatformOrbit'
import { StackCards, TabsShowcase } from './Showcase'
import {
  ArrowRight, Brain, Buildings, CheckCircle, Code, Compass, FacebookLogo, Gauge,
  Graph, InstagramLogo, Key, LinkedinLogo, PencilRuler, RocketLaunch, ShieldCheck,
  SquaresFour, Stack, XLogo, YoutubeLogo,
} from '@phosphor-icons/react'
import { ChainFlow } from './ChainFlow'
import { products, productHref, combinedGroups, slugify } from '../products'
import { useCasesHero, useCasesLede, useCaseGroups, useCasesClosing, chipProduct } from '../usecases'
import { industries } from '../industries'
import { industryJourneys } from '../industryJourneys'
import { moduleScreens } from '../screens'
import { whyUs } from '../whyus'
import { faq } from '../faq'
import { Reveal } from './Reveal'
import { NavIcon } from './navIcons'

/* ============================================================================
   Entroid homepage (website-v3).
   Data-driven from content.js. Design-forward, enterprise-grade.
   ========================================================================== */

/* A small set of restrained line icons, chosen per card index. */
const ICONS = [
  'M4 7h16M4 12h16M4 17h10',                                  // lines
  'M12 3l8 4v6c0 4-3.4 7-8 8-4.6-1-8-4-8-8V7l8-4z',            // shield
  'M4 5h16v10H4zM8 19h8M12 15v4',                              // monitor
  'M4 12h4l3-8 4 16 3-8h4',                                    // pulse
  'M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z',        // grid
  'M12 3v18M3 12h18',                                          // plus/connect
  'M6 3v12a3 3 0 006 0V5a2 2 0 014 0v14',                      // route
  'M4 18V9m5 9V5m5 13v-7m5 7V8',                               // bars
]
const Icon = ({ i }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={ICONS[i % ICONS.length]} />
  </svg>
)

/* TWO LOCKUPS. The supplied one (public/logos/entroid-logo.svg) sets the
   wordmark in near-black, which reads on the nav's light bar and disappears on
   ink; entroid-logo-white.svg is the same artwork reversed out, used on the
   footer's dark ground and by the nav while it sits over a hero photograph.

   `alt` rather than `aria-hidden`: the lockup is the only thing naming the
   site in the header, so it has to carry the name. */
/* Both lockups ship, and the nav's `nav--onDark` class chooses between them.
   Rendering both and cross-fading beats swapping `src`, which flashes the
   first time the reversed file is fetched. Only one carries the alt text; the
   other is decorative, or a screen reader would read the name twice. */
const BrandLockup = ({ className = '' }) => (
  <span className={`brandLockup ${className}`}>
    <img className="brandLockup__ink" src="/logos/entroid-logo.svg" alt={brand.name} />
    <img className="brandLockup__white" src="/logos/entroid-logo-white.svg" alt="" aria-hidden="true" />
  </span>
)


/* Position children on a circle (ecosystem constellation). */
const onCircle = (index, total, radiusPct) => {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2
  const x = Math.cos(angle) * radiusPct
  const y = Math.sin(angle) * radiusPct
  return { transform: `translate(-50%, -50%) translate(${x}%, ${y}%)` }
}

/* ── Navigation (mega-menu) ─────────────────────────────────── */
const Caret = () => (
  <svg className="nav__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

/* An item tile: Phosphor glyph in a tinted square, name, supporting line.
   Shared by the mega panel and the smaller dropdowns so both read as one
   component at two widths. */
const NavCard = ({ name, desc, href, onNavigate }) => (
  <Link href={href} onClick={onNavigate} className={`navcard ${desc ? '' : 'navcard--simple'}`}>
    <span className="navcard__icon"><NavIcon name={name} /></span>
    <span className="navcard__text">
      <span className="navcard__name">{name}</span>
      {desc && <span className="navcard__desc">{desc}</span>}
    </span>
  </Link>
)

/* The group headings are the menu: hovering one swaps the item grid beside it.
   Six columns of items at once was a wall of text; one group at a time keeps
   the panel compact and lets each group's items breathe.

   Every group's items stay in the DOM — the inactive ones are only hidden —
   so all product links remain crawlable, which a render-the-active-one-only
   panel would have quietly cost. */
const MegaPanel = ({ groups, onNavigate }) => {
  const [active, setActive] = useState(0)

  /* Groups with a page of their own drive the rail and its panes. The per-space
     groups (Functions, Engineering) have no landing page, so rather than hiding
     their spaces behind a rail click they stand permanently in the aside. */
  const railGroups = groups.filter((g) => combinedGroups[g.title])
  const asideGroups = groups.filter((g) => !combinedGroups[g.title])

  return (
    <div className="mega">
      <div className="container mega__card">
        <div className="mega__nav" role="tablist" aria-label="Product groups">
          {railGroups.map((g, i) => (
            <button
              key={g.title}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`mega__navItem ${i === active ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <span>{g.title}</span>
              <Caret />
            </button>
          ))}
        </div>

        <div className="mega__panes">
          {railGroups.map((g, i) => {
            // Combined groups have one page of their own (the heading links to
            // it); per-space groups route each item to its own space page.
            const combined = combinedGroups[g.title]
            return (
              <div key={g.title} className={`mega__pane ${i === active ? 'is-active' : ''}`} role="tabpanel">
                {/* Combined groups have a page of their own, so the heading is a
                    link to it; per-space groups get the same heading as a plain
                    label, so no pane is left without one. */}
                {combined
                  ? (
                    <Link href={`/product/${combined}`} className="mega__paneLink" onClick={onNavigate}>
                      {g.title} overview
                    </Link>
                  )
                  : <p className="mega__paneLabel">{g.title}</p>}
                <ul className="mega__items">
                  {g.items.map((it) => (
                    <li key={it.name}>
                      <NavCard name={it.name} desc={it.desc} href={productHref(g.title, it.name)} onNavigate={onNavigate} />
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mega__aside">
          {asideGroups.map((g) => (
            <div className="mega__asideCol" key={g.title}>
              <p className="mega__railTitle">{g.title}</p>
              <ul>
                {g.items.map((it) => (
                  <li key={it.name}>
                    <Link href={productHref(g.title, it.name)} className="mega__railLink" onClick={onNavigate}>
                      {it.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Known dropdown destinations (others are placeholders until built).
const dropHref = { Blogs: '/resources/blogs', Videos: '/resources/videos', FAQ: '/resources/faq', Glossary: '/resources/glossary' }
const DropPanel = ({ items, menuLabel, onNavigate }) => (
  <div className={`drop ${items.length > 6 ? 'drop--wide' : ''}`}>
    <ul>
      {items.map((raw) => {
        // Items may be a plain string or { name, desc } (two-line treatment).
        const it = typeof raw === 'string' ? { name: raw } : raw
        const to = menuLabel === 'Industries' ? `/industries/${slugify(it.name)}` : dropHref[it.name]
        return (
          <li key={it.name}>
            {to
              ? <NavCard name={it.name} desc={it.desc} href={to} onNavigate={onNavigate} />
              : (
                <span className={`navcard navcard--dead ${it.desc ? '' : 'navcard--simple'}`}>
                  <span className="navcard__icon"><NavIcon name={it.name} /></span>
                  <span className="navcard__text">
                    <span className="navcard__name">{it.name}</span>
                    {it.desc && <span className="navcard__desc">{it.desc}</span>}
                  </span>
                </span>
              )}
          </li>
        )
      })}
    </ul>
  </div>
)

/* Below this the bar always shows: near the top of the page there is nothing to
   gain by hiding it, and hiding it there makes the first scroll feel twitchy. */
const NAV_REVEAL_AT = 120

/* Height of the nav bar, matching --nav-h in styles.css. Used to decide when a
   hero has finished passing behind it. */
const NAV_H = 76

export const Nav = () => {
  const [open, setOpen] = useState(null)
  const [hidden, setHidden] = useState(false)
  // At the very top the bar is transparent over the hero; past that it takes
  // the white fade so it stays legible over whatever is behind it.
  const [scrolled, setScrolled] = useState(false)
  /* True while a dark hero photograph is still passing behind the bar — the
     industry pages. The ink lockup and the grey menu labels vanish against it,
     so both are reversed out for as long as it is there. */
  const [onDark, setOnDark] = useState(false)
  const pathname = usePathname()
  const close = () => setOpen(null)

  /* Measured from the page rather than passed down: the nav lives in the root
     layout and has no way of being told what the page below it looks like.
     Any hero that paints a photograph carries `.phero--image`, so asking the
     document keeps the two decoupled — a new page type with a dark hero picks
     this up for free. Re-runs on navigation, since the element changes. */
  useEffect(() => {
    const hero = document.querySelector('.phero--image')
    if (!hero) { setOnDark(false); return undefined }

    let queued = 0
    const measure = () => {
      // The bar is over the photograph until the hero's foot passes under it.
      setOnDark(hero.getBoundingClientRect().bottom > NAV_H)
    }
    const onScroll = () => {
      if (queued) return
      queued = requestAnimationFrame(() => { queued = 0; measure() })
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (queued) cancelAnimationFrame(queued)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathname])

  /* Hide on the way down, show on the way up. Reads `window.scrollY` rather
     than Lenis's own value so it works identically before Lenis has started
     and for anyone whose reduced-motion setting has turned it off. */
  useEffect(() => {
    let last = window.scrollY
    let queued = 0

    const run = () => {
      const y = window.scrollY
      const delta = y - last
      setScrolled(y > 8)
      // Ignore sub-pixel jitter, which smooth scrolling produces plenty of.
      if (Math.abs(delta) > 4) {
        setHidden(y > NAV_REVEAL_AT && delta > 0)
        last = y
      }
      if (y <= NAV_REVEAL_AT) setHidden(false)
    }

    const onScroll = () => {
      if (queued) return
      queued = requestAnimationFrame(() => { queued = 0; run() })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      if (queued) cancelAnimationFrame(queued)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // A panel open while the bar slides away would be left floating: close it.
  useEffect(() => { if (hidden) setOpen(null) }, [hidden])

  return (
    <nav
      className={[
        'nav',
        hidden && 'nav--hidden',
        scrolled && 'nav--scrolled',
        // The scrolled state paints the bar white, which wins over the hero.
        onDark && !scrolled && 'nav--onDark',
      ].filter(Boolean).join(' ')}
      onMouseLeave={close}
    >
      <div className="container nav__inner">
        <Link href="/" className="nav__brand" onClick={close} aria-label={`${brand.name} home`}>
          <BrandLockup className="nav__logo" />
        </Link>
        <ul className="nav__menu">
          {menu.map((item) => {
            const hasPanel = Boolean(item.mega || item.dropdown)
            const cls = `nav__top ${open === item.label && hasPanel ? 'is-open' : ''}`
            // Home -> "/", other in-page anchors -> "/#id"; panels are hover triggers.
            const to = item.label === 'Home' ? '/' : item.href && item.href.startsWith('/') ? item.href : item.href && item.href.startsWith('#') ? `/${item.href}` : null
            return (
              <li key={item.label} className="nav__item" onMouseEnter={() => setOpen(hasPanel ? item.label : null)}>
                {to ? (
                  <Link className={cls} href={to} onClick={close}>{item.label}{hasPanel && <Caret />}</Link>
                ) : (
                  <span className={cls}>{item.label}{hasPanel && <Caret />}</span>
                )}
                {item.dropdown && open === item.label && <DropPanel items={item.dropdown} menuLabel={item.label} onNavigate={close} />}
              </li>
            )
          })}
        </ul>
        <Link href="/#platform" className="btn btn--primary btn--sm nav__cta">{navCta}</Link>
      </div>
      {menu.map((item) => item.mega && open === item.label && <MegaPanel key={item.label} groups={item.mega} onNavigate={close} />)}
    </nav>
  )
}

/* ── Hero ───────────────────────────────────────────────────── */
/* The trailing arrow badge, as on the primary CTA. Decorative — the button's
   own label already says what it does. */
const CtaArrow = () => (
  <span className="btn__arrow" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h13M12 5l7 7-7 7" />
    </svg>
  </span>
)

/* The hero's right-hand visual. Until `hero.image` is set in content.js this
   holds the space at the final aspect ratio, so dropping the artwork in later
   changes no layout. */
const HeroMedia = () => (
  hero.image
    ? <img className="heromedia__img" src={hero.image} alt={hero.imageAlt || ''} />
    : (
      <div className="heromedia" aria-hidden="true">
        <span className="heromedia__label">Image</span>
      </div>
    )
)

const Hero = () => (
  <header className="hero">
    <div className="container hero__inner">
      <div className="hero__lead">
        <Reveal as="p" className="hero__eyebrow" variant="up" eager>{hero.eyebrow}</Reveal>
        <Reveal as="h1" className="hero__headline" variant="up" delay={140} eager>
          {/* Broken where the copy says to break, rather than wherever the
              column happens to run out. */}
          {(hero.headlineLines || [hero.headline]).map((line, i, all) => (
            <Fragment key={line}>{line}{i < all.length - 1 && <br />}</Fragment>
          ))}
        </Reveal>
        <Reveal as="p" className="hero__description" variant="up" delay={270} eager>{hero.description}</Reveal>
        <Reveal className="hero__ctas" variant="up" delay={400} eager>
          <Link href="/contact" className="btn btn--primary btn--arrow">{hero.primaryCta}<CtaArrow /></Link>
        </Reveal>

        {/* A real <ul>: three parallel claims are a list, and a screen reader
            should announce them as one. The tick is decorative — the text says
            everything, so it carries no label of its own. */}
        <Reveal as="ul" className="heropoints" variant="up" delay={480} eager>
          {hero.points.map((t) => (
            <li key={t} className="heropoints__item">
              <CheckCircle className="heropoints__tick" weight="fill" aria-hidden="true" />
              {t}
            </li>
          ))}
        </Reveal>
      </div>
      <Reveal className="hero__figure" variant="zoom" delay={240}><HeroMedia /></Reveal>
    </div>

    {/* The three proof points, inside the hero. One plate divided into three
        rather than three plates: at this width the gaps between separate cards
        read as more of a break than the facts warrant. Full width under both
        columns — squeezed into the text column they would wrap one per line. */}
    <div className="container hero__proof">
      <Reveal as="div" variant="fade" className="hero__proofCard stagger" delay={520}>
        {heroProof.map((p) => (
          <div key={p.title} className="hero__proofCell">
            <p className="pstrip__value">{p.title}</p>
            <p className="pstrip__label">{p.text}</p>
          </div>
        ))}
      </Reveal>
    </div>
  </header>
)

/* ── Visuals ────────────────────────────────────────────────── */
const Flow = ({ steps }) => (
  <div className="flow">
    {steps.map((s, i) => (
      <div key={s}>
        <div className={`flow__node ${i === steps.length - 1 ? 'flow__node--last' : ''}`}>
          <b>{i + 1}</b>{s}
        </div>
        {i < steps.length - 1 && <div className="flow__arrow" />}
      </div>
    ))}
  </div>
)

const Ecosystem = ({ hub, nodes }) => (
  <div className="eco">
    <div className="eco__rings" />
    <div className="eco__hub">{hub}</div>
    {nodes.map((n, i) => (
      <div key={n} className="eco__node" style={onCircle(i, nodes.length, 155)}>{n}</div>
    ))}
  </div>
)

const Shield = ({ items }) => (
  <div className="shield">
    <div className="shield__frame">
      <svg className="shield__svg" viewBox="0 0 100 110" fill="none" aria-hidden="true">
        <path d="M50 4 L92 20 V54 C92 82 74 98 50 106 C26 98 8 82 8 54 V20 Z"
          fill="#f6f7f9" stroke="#3b40d6" strokeWidth="1.4" />
        <path d="M50 4 L92 20 V54 C92 82 74 98 50 106 C26 98 8 82 8 54 V20 Z"
          fill="url(#sg)" opacity=".08" />
        <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6a5cf0" /><stop offset="1" stopColor="#3b40d6" />
        </linearGradient></defs>
      </svg>
      <div className="shield__grid">
        {items.map((it) => <div key={it} className="shield__item">{it}</div>)}
      </div>
    </div>
  </div>
)

/* Section 06 (merged): "ready for deployment, proven by metrics".
   A compact deployment path, then the C-suite value metrics that prove it,
   each carrying a one-line proof of the number. */
/* The delivery path, drawn rather than listed. Each stage is a node on one
   continuous rail, and the rail loops back from the last stage to the first
   because delivery here is a cycle, not a finish line. Icons carry the meaning
   at a glance; the strip is a fixed 240px so it reads as a diagram with weight
   rather than a row of chips. */
const DEPLOY_ICONS = [PencilRuler, Code, CheckCircle, RocketLaunch, Gauge]
const DEPLOY_NOTES = ['Model the requirement', 'Assemble and configure', 'Test and govern', 'Release to production', 'Run, measure, improve']

const DeployPath = ({ steps = [] }) => (
  <Reveal as="div" variant="fade" className="dpath">
    <div className="dpath__rail" aria-hidden="true" />
    <ol className="dpath__steps">
      {steps.map((step, i) => {
        const Ico = DEPLOY_ICONS[i % DEPLOY_ICONS.length]
        return (
          <li key={step} className="dpath__step">
            <span className="dpath__node"><Ico weight="regular" aria-hidden="true" /></span>
            <span className="dpath__name">{step}</span>
            <span className="dpath__note">{DEPLOY_NOTES[i] || ''}</span>
          </li>
        )
      })}
    </ol>
    <div className="dpath__loop" aria-hidden="true">
      <svg viewBox="0 0 100 24" preserveAspectRatio="none"><path d="M2 2 C 2 20, 98 20, 98 2" /></svg>
      <span className="dpath__loopLabel">Continuous delivery</span>
    </div>
  </Reveal>
)

/* The figure above the KPIs is either the section's illustration or, without
   one, the drawn delivery path. */
const Proof = ({ flow, kpis, disclaimer, infographic, infographicAlt = '' }) => (
  <div className="proof">
    {infographic ? (
      <Reveal className="proof__fig" variant="fade">
        <InfographicFigure img={infographic} alt={infographicAlt} />
      </Reveal>
    ) : flow && <DeployPath steps={flow} />}
    <Reveal as="div" variant="fade" className="proof__kpis stagger">
      {kpis.map((k) => (
        <div key={k.label} className="kpi">
          {k.prefix && <div className="kpi__prefix">{k.prefix}</div>}
          <div className="kpi__value">{k.value}</div>
          <div className="kpi__label">{k.label}</div>
          <p className="kpi__text">{k.text}</p>
        </div>
      ))}
    </Reveal>
    {disclaimer && <Reveal as="p" className="proof__disclaimer">{disclaimer}</Reveal>}
  </div>
)

const Layers = ({ base, stack }) => (
  <div className="layers">
    {stack.map((s, i) => (
      <div key={s} className={`layers__row ${i === 0 ? 'layers__row--top' : ''}`}>{s}</div>
    ))}
    <div className="layers__base">{base}</div>
  </div>
)

/* Section 01 (winner): the idea is "two very different starting points, one
   engine, one production-ready outcome". A new requirement and a legacy app
   both converge through Entroid into a live, modern, owned system. */
const Converge = ({ inputs, engine, engineSub, output, outputTags }) => (
  <div className="converge">
    <div className="converge__col">
      {inputs.map((it) => (
        <div key={it.tag} className="converge__in">
          <span className={`converge__tag converge__tag--${it.tag.toLowerCase()}`}>{it.tag}</span>
          <span className="converge__inLabel">{it.label}</span>
        </div>
      ))}
    </div>
    <div className="converge__merge" aria-hidden="true">
      <svg viewBox="0 0 64 132" fill="none" preserveAspectRatio="none">
        <path d="M0 30 C34 30, 30 66, 60 66" stroke="var(--brand)" strokeWidth="2" strokeDasharray="5 5" opacity=".65" />
        <path d="M0 102 C34 102, 30 66, 60 66" stroke="var(--brand)" strokeWidth="2" strokeDasharray="5 5" opacity=".65" />
        <path d="M56 60 l8 6 -8 6" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="converge__engine">
      <span className="converge__engineTitle">{engine}</span>
      {engineSub && <span className="converge__engineSub">{engineSub}</span>}
    </div>
    <div className="converge__arrow" aria-hidden="true" />
    <div className="converge__out">
      <span className="converge__outTitle">{output}</span>
      {outputTags && (
        <div className="converge__tags">
          {outputTags.map((t) => <span key={t} className="converge__chip">{t}</span>)}
        </div>
      )}
    </div>
  </div>
)

/* Section 02: the idea is "everything runs on one shared foundation".
   Functions on top, shared services in the middle, one ontology/data base beneath. */
const Platform = ({ tiles, mid, midChips, base, baseSub }) => (
  <div className="foundation">
    <div className="foundation__tiles">
      {tiles.map((t) => <div key={t} className="foundation__tile">{t}</div>)}
    </div>
    <div className="foundation__band foundation__band--mid">
      <span className="foundation__bandTitle">{mid}</span>
      {midChips && (
        <div className="foundation__chips">
          {midChips.map((c) => <span key={c} className="foundation__chip">{c}</span>)}
        </div>
      )}
    </div>
    <div className="foundation__band foundation__band--base">
      <span className="foundation__bandTitle">{base}</span>
      {baseSub && <span className="foundation__bandSub">{baseSub}</span>}
    </div>
  </div>
)

/* Section 03: the idea is "one aligned line, strategy to execution, with a feedback loop".
   Two poles joined by a single line, the in-between stages as points on it. */
const Cascade = ({ top, topSub, stages, bottom, bottomSub, loop }) => (
  <div className="beam">
    <div className="beam__main">
      <div className="beam__pole beam__pole--top">
        <span className="beam__poleLabel">{top}</span>
        {topSub && <span className="beam__poleSub">{topSub}</span>}
      </div>
      <div className="beam__line">
        {stages.map((s) => <span key={s} className="beam__stage">{s}</span>)}
      </div>
      <div className="beam__pole beam__pole--bottom">
        <span className="beam__poleLabel">{bottom}</span>
        {bottomSub && <span className="beam__poleSub">{bottomSub}</span>}
      </div>
    </div>
    <div className="beam__loop" title={loop}>
      <svg className="beam__loopArrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V5M6 11l6-6 6 6" />
      </svg>
      <span className="beam__loopLabel">{loop}</span>
    </div>
  </div>
)

/* Section 04: the idea is "intelligent agents make the enterprise AI-ready".
   Enterprise context flows into the AI Foundry (its agent and model modules),
   and out comes an AI-ready enterprise. The modules are the proof, held inside
   the engine that produces the intelligence. */
const Foundry = ({ input, core, modules, output, outputSub }) => (
  <div className="foundry">
    <div className="foundry__io foundry__io--in">{input}</div>
    <div className="foundry__arrow" aria-hidden="true" />
    <div className="foundry__core">
      <span className="foundry__coreTitle">{core}</span>
      <div className="foundry__mods">
        {modules.map((m) => <span key={m} className="foundry__mod">{m}</span>)}
      </div>
    </div>
    <div className="foundry__arrow" aria-hidden="true" />
    <div className="foundry__io foundry__io--out">
      <span className="foundry__outTitle">{output}</span>
      {outputSub && <span className="foundry__outSub">{outputSub}</span>}
    </div>
  </div>
)

/* Section 01 infographic: Innovate + Modernise converge through the platform
   into a production-ready solution. Native and responsive (replaces a PNG). */
const IM_ICON = {
  bulb: 'M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.5.4.5 1 .5 2.1h6c0-1.1 0-1.7.5-2.1A6 6 0 0012 3z',
  server: 'M4 5h16v6H4zM4 13h16v6H4zM7 8h.01M7 16h.01',
  ai: 'M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7z',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  flow: 'M6 4h5v4H6zM13 16h5v4h-5zM8.5 8v4a2 2 0 002 2h5',
  book: 'M5 4h10a2 2 0 012 2v14a3 3 0 00-3-2H5z',
  link: 'M9 15l6-6M10.5 6.5l1-1a3 3 0 014 4l-1 1M13.5 17.5l-1 1a3 3 0 01-4-4l1-1',
  layers: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5',
  shield: 'M12 3l8 4v6c0 4-3.4 7-8 8-4.6-1-8-4-8-8V7z',
  lock: 'M6 10V8a6 6 0 0112 0v2M5 10h14v10H5z',
  rocket: 'M5 15c-1.2 1.8-1 4-1 4s2.2.2 4-1M13 5c3 1 5 3 6 6l-7 7-5-5 6-8zM14.5 9.5h.01',
}
const ImIco = ({ k }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={IM_ICON[k]} /></svg>
)
const IM_MODS = ['ai', 'grid', 'flow', 'book', 'link']
const IM_OUTS = ['layers', 'shield', 'lock', 'ai', 'rocket']
const InnovateFlow = ({ v }) => (
  <div className="imf">
    <div className="imf__top">
      <div className="imf__side">
        <div className="imf__kicker imf__kicker--in"><b>{v.innovate.kicker}</b><span>{v.innovate.kickerSub}</span></div>
        <div className="imf__node">
          <span className="imf__nodeIcon"><ImIco k="bulb" /></span>
          <span className="imf__nodeTitle">{v.innovate.title}</span>
          <span className="imf__nodeSub">{v.innovate.sub}</span>
          <span className="imf__link imf__link--r" aria-hidden="true">
            <i className="imf__linkDot" /><i className="imf__linkLine" />
            <svg className="imf__linkHead" viewBox="0 0 8 12"><path d="M1 1l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </div>
        <ul className="imf__list">
          {v.innovate.items.map((it) => <li key={it}><span className="imf__dot imf__dot--in" />{it}</li>)}
        </ul>
      </div>

      <div className="imf__core">
        <div className="imf__coreHead">
          <span className="imf__coreMark" />
          <span className="imf__coreTitle">{v.core.title}</span>
          <span className="imf__coreSub">{v.core.sub}</span>
        </div>
        <div className="imf__mods">
          {v.core.modules.map((m, i) => (
            <div key={m} className="imf__mod">
              <span className="imf__modIcon"><ImIco k={IM_MODS[i % IM_MODS.length]} /></span>
              <span className="imf__modLabel">{m}</span>
            </div>
          ))}
        </div>
        <div className="imf__band">
          {v.core.band.map((b, i) => (
            <span key={b} className="imf__bandItem">{i > 0 && <i className="imf__bandDot" />}<span>{b}</span></span>
          ))}
        </div>
      </div>

      <div className="imf__side imf__side--mod">
        <div className="imf__kicker imf__kicker--mod"><b>{v.modernise.kicker}</b><span>{v.modernise.kickerSub}</span></div>
        <div className="imf__node">
          <span className="imf__nodeIcon imf__nodeIcon--mod"><ImIco k="server" /></span>
          <span className="imf__nodeTitle">{v.modernise.title}</span>
          <span className="imf__nodeSub">{v.modernise.sub}</span>
          <span className="imf__link imf__link--l" aria-hidden="true">
            <i className="imf__linkDot" /><i className="imf__linkLine" />
            <svg className="imf__linkHead" viewBox="0 0 8 12"><path d="M1 1l6 5-6 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </div>
        <ul className="imf__list">
          {v.modernise.items.map((it) => <li key={it}><span className="imf__dot imf__dot--mod" />{it}</li>)}
        </ul>
      </div>
    </div>

    <div className="imf__arrow" aria-hidden="true" />

    <div className="imf__out">
      <div className="imf__outTitle">{v.output.title}</div>
      <div className="imf__outGrid">
        {v.output.items.map((o, i) => (
          <div key={o.t} className="imf__outItem">
            <span className="imf__outIcon"><ImIco k={IM_OUTS[i % IM_OUTS.length]} /></span>
            <span className="imf__outT">{o.t}</span>
            <span className="imf__outS">{o.s}</span>
          </div>
        ))}
      </div>
    </div>

    {v.tagline && <div className="imf__tag">{v.tagline}</div>}
  </div>
)

/* ── Unified Enterprise Platform infographic (section 02) ─────── */
const PIG_ICONS = {
  users: 'M8.5 11a3 3 0 100-6 3 3 0 000 6zM3 20a5.5 5.5 0 0111 0M16 11a3 3 0 000-6M21 20a5.5 5.5 0 00-4-5.3',
  user: 'M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0114 0',
  money: 'M3 6h18v12H3zM12 15a3 3 0 100-6 3 3 0 000 6zM6.5 9v6M17.5 9v6',
  truck: 'M3 6h11v9H3zM14 9h3.5L21 12v3h-7zM7 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
  briefcase: 'M4 7h16v13H4zM9 7V4h6v3M4 12h16',
  gear: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19 12c0-.5 0-.9-.1-1.3l2-1.5-2-3.4-2.3 1a7 7 0 00-2.3-1.3L14 3h-4l-.3 2.2a7 7 0 00-2.3 1.3l-2.3-1-2 3.4 2 1.5c0 .4-.1.8-.1 1.3s.1.9.1 1.3l-2 1.5 2 3.4 2.3-1a7 7 0 002.3 1.3L10 21h4l.3-2.2a7 7 0 002.3-1.3l2.3 1 2-3.4-2-1.5c.1-.4.1-.8.1-1.3z',
  wrench: 'M15 6a3.5 3.5 0 01-4.7 4.4L5 16l-1 3 3-1 5.6-5.3A3.5 3.5 0 0018 8l-1.8 1.8-2-2L16 6z',
  shield: 'M12 3l8 3v6c0 4-3.4 7-8 8-4.6-1-8-4-8-8V6l8-3z',
  shieldCheck: 'M12 3l8 3v6c0 4-3.4 7-8 8-4.6-1-8-4-8-8V6l8-3zM9 11.5l2 2 4-4',
  spark: 'M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z',
  flow: 'M5 4h5v4H5zM14 16h5v4h-5zM7.5 8v3.5A2.5 2.5 0 0010 14h4',
  doc: 'M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h5',
  bot: 'M9 4v2.5M15 4v2.5M6 7h12v11H6zM9.5 12h.01M14.5 12h.01M10 15.5h4',
  nodes: 'M6 6a2 2 0 100-4 2 2 0 000 4zM18 8a2 2 0 100-4 2 2 0 000 4zM17 20a2 2 0 100-4 2 2 0 000 4zM6 6v4a4 4 0 004 4h1M16 6.5l-4 3',
  db: 'M12 3c4.4 0 8 1.2 8 2.8S16.4 8.6 12 8.6 4 7.4 4 5.8 7.6 3 12 3zM4 5.8v12.4C4 19.8 7.6 21 12 21s8-1.2 8-2.8V5.8M4 12c0 1.6 3.6 2.8 8 2.8s8-1.2 8-2.8',
  chart: 'M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-7',
  chip: 'M8 8h8v8H8zM9.5 3v3M14.5 3v3M9.5 18v3M14.5 18v3M3 9.5h3M3 14.5h3M18 9.5h3M18 14.5h3',
  bell: 'M6.5 16V11a5.5 5.5 0 1111 0v5l1.8 2H4.7zM10 20a2 2 0 004 0',
  globe: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3.5 12h17M12 3c2.4 2.5 3.4 6 3.4 9s-1 6.5-3.4 9c-2.4-2.5-3.4-6-3.4-9s1-6.5 3.4-9z',
  arrowUR: 'M7 17L17 7M9 7h8v8',
  layers: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5',
  gauge: 'M12 13l3.5-3M4.5 17a8 8 0 1115 0z',
  refresh: 'M20 12a8 8 0 10-2.3 5.6M20 6v5h-5',
  rocket: 'M6 15c-1.2 1.5-1.4 4-1.4 4s2.5-.2 4-1.4M9.5 15L7 12.5C7.5 7 11.5 4 17.5 4 17.5 10 14.5 14 9 14.5zM14.5 9.5a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
}
const PIcon = ({ n }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={PIG_ICONS[n] || PIG_ICONS.grid} />
  </svg>
)
const PIG_FUNCTIONS = [['Customers', 'user'], ['Finance', 'money'], ['People', 'users'], ['Supply Chain', 'truck'], ['Projects', 'briefcase'], ['Operations', 'gear'], ['Engineering', 'wrench'], ['Governance', 'shield'], ['AI & Innovation', 'spark']]
const PIG_SERVICES = [['Identity Management', 'shield'], ['Workflow Engine', 'flow'], ['Business Rules', 'doc'], ['Automation', 'bot'], ['Integration Hub', 'nodes'], ['Data Pipelines', 'db'], ['Analytics & Reporting', 'chart'], ['AI Services & Agents', 'chip'], ['Notifications & Communications', 'bell'], ['Document Services', 'doc']]
const PIG_KNOWLEDGE = [['One Enterprise Knowledge', 'layers'], ['One Enterprise Context', 'nodes'], ['One Governance Model', 'shield'], ['One Trusted Data Foundation', 'db']]
const PIG_SOURCES = [['ERP', 'grid'], ['CRM', 'user'], ['HRIS', 'users'], ['PLM', 'gear'], ['Legacy Systems', 'db'], ['Databases', 'db'], ['External Systems', 'nodes'], ['APIs & Services', 'flow']]
const PIG_POSSIBILITIES = [['Build New Applications', 'arrowUR'], ['Extend Existing Applications', 'layers'], ['Embed AI Everywhere', 'spark'], ['Adapt & Scale With Confidence', 'gauge']]
const PIG_OUTCOMES = [['Connected Enterprise', 'Every function works together as one.', 'rocket'], ['Real-time Collaboration', 'Shared processes and information across the enterprise.', 'refresh'], ['Consistent & Governed', 'One set of standards, policies and governance.', 'shieldCheck'], ['Better Decisions', 'Unified data and knowledge drive better outcomes.', 'chart'], ['Faster & Efficient', 'Fewer silos, less complexity, more value delivered.', 'gauge']]

const PlatformInfographic = () => (
  <div className="pig">
    <div className="pig__rail">
      <span className="pig__railLabel">Business Functions</span>
      <div className="pig__funcs">
        {PIG_FUNCTIONS.map(([label, ic]) => (
          <div key={label} className="pig__func"><span className="pig__ico"><PIcon n={ic} /></span><span>{label}</span></div>
        ))}
      </div>
    </div>

    <div className="pig__mid">
      <aside className="pig__side">
        <h5 className="pig__sideTitle">Enterprise Systems &amp; Data Sources</h5>
        <ul className="pig__sideList">
          {PIG_SOURCES.map(([label, ic]) => (
            <li key={label}><span className="pig__ico pig__ico--sm"><PIcon n={ic} /></span>{label}</li>
          ))}
        </ul>
      </aside>

      <div className="pig__slab">
        <div className="pig__slabBar">
          <span className="pig__slabMark" />
          <span className="pig__slabName">Entroid</span>
          <span className="pig__slabDiv" />
          <span className="pig__slabKicker">Unified Enterprise Platform</span>
        </div>
        <div className="pig__panel">
          <div className="pig__panelLabel">Shared Enterprise Services</div>
          <div className="pig__services">
            {PIG_SERVICES.map(([label, ic]) => (
              <div key={label} className="pig__svc"><span className="pig__ico"><PIcon n={ic} /></span><span className="pig__svcLabel">{label}</span></div>
            ))}
          </div>
        </div>
        <div className="pig__panel pig__panel--know">
          <div className="pig__knowHead">
            <span className="pig__ico pig__ico--globe"><PIcon n="globe" /></span>
            <div><div className="pig__knowTitle">Enterprise Knowledge Foundation</div><div className="pig__knowSub">Semantic Enterprise Ontology Model (SEOM)</div></div>
          </div>
          <div className="pig__knowRow">
            {PIG_KNOWLEDGE.map(([label, ic]) => (
              <div key={label} className="pig__know"><span className="pig__ico pig__ico--sm"><PIcon n={ic} /></span>{label}</div>
            ))}
          </div>
        </div>
      </div>

      <aside className="pig__side pig__side--right">
        <h5 className="pig__sideTitle">One Platform. Endless Possibilities.</h5>
        <ul className="pig__sideList">
          {PIG_POSSIBILITIES.map(([label, ic]) => (
            <li key={label}><span className="pig__ico pig__ico--sm"><PIcon n={ic} /></span>{label}</li>
          ))}
        </ul>
      </aside>
    </div>

    <div className="pig__outcomes">
      {PIG_OUTCOMES.map(([title, text, ic]) => (
        <div key={title} className="pig__outcome">
          <span className="pig__ico pig__ico--round"><PIcon n={ic} /></span>
          <div className="pig__outcomeTitle">{title}</div>
          <div className="pig__outcomeText">{text}</div>
        </div>
      ))}
    </div>
  </div>
)

/* Renders a section's infographic PNG (from public/). Falls back to the HTML
   rebuild only for the platform image; other sections just show their PNG. */
const InfographicFigure = ({ img, alt = '' }) => {
  const [ok, setOk] = useState(true)
  if (!ok) return img === '/unified-platform.png' ? <PlatformInfographic /> : null
  return <img className="pig__img" src={img} alt={alt} onError={() => setOk(false)} />
}

const Visual = ({ v }) => {
  if (!v) return null
  if (v.type === 'flow') return <Flow steps={v.steps} />
  if (v.type === 'innovateFlow') return <InnovateFlow v={v} />
  if (v.type === 'image') return <img className="section__img" src={v.src} alt={v.alt} loading="lazy" />
  if (v.type === 'converge') return <Converge inputs={v.inputs} engine={v.engine} engineSub={v.engineSub} output={v.output} outputTags={v.outputTags} />
  if (v.type === 'platform') return <Platform tiles={v.tiles} mid={v.mid} midChips={v.midChips} base={v.base} baseSub={v.baseSub} />
  if (v.type === 'cascade') return <Cascade top={v.top} topSub={v.topSub} stages={v.stages} bottom={v.bottom} bottomSub={v.bottomSub} loop={v.loop} />
  if (v.type === 'foundry') return <Foundry input={v.input} core={v.core} modules={v.modules} output={v.output} outputSub={v.outputSub} />
  if (v.type === 'ecosystem') return <Ecosystem hub={v.hub} nodes={v.nodes} />
  if (v.type === 'shield') return <Shield items={v.items} />
  if (v.type === 'layers') return <Layers base={v.base} stack={v.stack} />
  return null
}

/* ── Cards ──────────────────────────────────────────────────── */
/* The grid reveals as one unit; `stagger` cascades the cards inside it. */
const Cards = ({ items, wide }) => (
  <Reveal as="div" variant="fade" className={`cards stagger ${wide ? 'cards--wide' : ''}`}>
    {items.map((c, i) => (
      <div key={c.title} className="card">
        <div className="card__icon"><Icon i={i} /></div>
        <div className="card__title">{c.title}</div>
        <div className="card__text">{c.text}</div>
      </div>
    ))}
  </Reveal>
)

/* ── Bento grid ─────────────────────────────────────────────── */
/* Six cards in varied tile sizes around a seventh tile in the middle of the
   grid. Every tile is placed explicitly (see .bento in styles.css), so the
   source order stays 1..6 however the grid is arranged. The bottom row runs
   three to a row at one width, so Operations, Performance Management and
   Insights & Decisions read as one set.

   Each tile is a photograph — the artwork carries the tile, so there is no
   icon and the copy sits over it, top left, under a scrim. The middle tile is
   artwork only: it carries no copy, in place of the brand mark that used to
   sit there.

   Images are looked up from the card title: the files in
   /illustration/strategy-&-execution are named after the cards they belong to,
   so the copy in content.js stays free of asset paths. A title with no matching
   file simply renders as a plain tile. */
const BENTO_SEATS = ['a', 'b', 'c', 'd', 'e', 'f']

const BENTO_DIR = '/illustration/strategy-%26-execution'

/* 'Programmes & Projects' → 'programmes-%26-projects'. The ampersand is kept
   (it is in the filenames) but percent-encoded, since these strings go into a
   CSS url(). */
const bentoImage = (title) =>
  `${BENTO_DIR}/${title.toLowerCase().trim().replace(/\s+/g, '-').replace(/&/g, '%26')}.webp`

/* The middle tile's artwork. Its own file, since it belongs to no card. */
const BENTO_MID_IMAGE = `${BENTO_DIR}/entroid-center.webp`

const BentoGrid = ({ items }) => (
  <Reveal as="div" variant="fade" className="bento stagger">
    {items.map((c, i) => (
      <div
        key={c.title}
        className={`card bento__cell bento__cell--${BENTO_SEATS[i] || 'f'}`}
        style={{ backgroundImage: `url('${bentoImage(c.title)}')` }}
      >
        <div className="bento__body">
          <div className="card__title">{c.title}</div>
          <div className="card__text">{c.text}</div>
        </div>
      </div>
    ))}

    <div
      className="card bento__cell bento__cell--mid"
      aria-hidden="true"
      style={{ backgroundImage: `url('${BENTO_MID_IMAGE}')` }}
    />
  </Reveal>
)

/* ── Section ────────────────────────────────────────────────── */
const Section = ({ s, index }) => {
  const alt = index % 2 === 1
  const reverse = index % 2 === 1
  // Proof section: a deployment path plus C-suite value metrics, each with a proof line.
  const isProof = Array.isArray(s.kpis)
  // Wide visuals render full-width above the card grid, not in a half column.
  // `layout: 'stacked'` opts an image section into the same treatment.
  const isStacked = s.layout === 'stacked' || (s.visual && s.visual.type === 'innovateFlow')
  // A photographic visual is the artwork itself, so it drops the panel framing
  // the drawn diagrams get and runs the full width of the container.
  const imageVisual = s.visual && s.visual.type === 'image'
  // Other image visuals sit beside a compact card grid so both read on one screen.
  const isImage = !isStacked && imageVisual
  // Bento: the cards themselves are the visual, arranged around a brand tile.
  const isBento = s.layout === 'bento'
  // Cards only: no visual at all, the grid runs full width three to a row.
  const isCardsOnly = s.layout === 'cards'
  // Tabs: a rail on the left driving one rotating panel on the right.
  const isTabs = s.layout === 'tabs'
  // Chain: a centred column of cards joined by curved, scroll-filled arrows.
  const isChain = s.layout === 'chain'
  // The orbit consumes the cards itself, one per node, so no card grid is drawn.
  const isOrbit = s.visual && s.visual.type === 'orbit'

  const head = (
    <Reveal as="div" className="section__head section__head--split">
      <p className="section__label">{s.label}</p>
      <div className="section__headRow">
        <h2 className="section__heading">{s.heading}</h2>
        <p className="section__para">{s.paragraph}</p>
      </div>
    </Reveal>
  )

  return (
    <section id={s.id} className={`section ${alt ? 'section--alt' : ''} ${s.theme === 'dark' ? 'section--dark' : ''} ${s.surface ? `section--${s.surface}` : ''}`}>
      <div className="container">
        {/* The orbit pins its own heading inside the sticky stage, so that the
            section title stays on screen for the whole sequence. */}
        {!isOrbit && head}

        {isProof ? (
          <Proof flow={s.flow} kpis={s.kpis} disclaimer={s.disclaimer} infographic={s.infographic} infographicAlt={s.heading} />
        ) : isChain ? (
          <ChainFlow items={s.cards} />
        ) : isTabs ? (
          <TabsShowcase items={s.cards} image={s.visual && s.visual.src} imageAlt={s.visual ? s.visual.alt : ''} />
        ) : isCardsOnly ? (
          <Cards items={s.cards} wide />
        ) : isBento ? (
          <BentoGrid items={s.cards} />
        ) : isOrbit ? (
          <PlatformOrbit cards={s.cards} brandName={brand.name} head={head} />
        ) : s.infographic ? (
          <div className="section__full">
            <div className={`pigrow ${reverse ? 'pigrow--rev' : ''}`}>
              <Reveal className="pigrow__fig" variant={reverse ? 'right' : 'left'}>
                <InfographicFigure img={s.infographic} alt={s.heading} />
              </Reveal>
              {s.cards && <div className="pigrow__cards"><Cards items={s.cards} /></div>}
            </div>
          </div>
        ) : isImage ? (
          <div className={`section__imgrow ${reverse ? 'section__imgrow--rev' : ''}`}>
            <Reveal className="section__imgfig visual" variant={reverse ? 'right' : 'left'}><Visual v={s.visual} /></Reveal>
            <div className="section__imgcards"><Cards items={s.cards} /></div>
          </div>
        ) : isStacked ? (
          <div className="section__stack">
            <Reveal className={`section__visual visual ${imageVisual ? 'section__visual--bare' : ''}`} variant="zoom"><Visual v={s.visual} /></Reveal>
            <Cards items={s.cards} wide />
          </div>
        ) : (
          <div className={`section__body ${reverse ? 'section__body--reverse' : ''}`}>
            <div><Cards items={s.cards} /></div>
            <Reveal className="section__visual visual" variant={reverse ? 'left' : 'right'} delay={140}><Visual v={s.visual} /></Reveal>
          </div>
        )}

        {s.callout && <Reveal as="p" className="callout">{s.callout}</Reveal>}
      </div>
    </section>
  )
}

/* ── Final journey ──────────────────────────────────────────── */
/* Fixed steps per row, so the arrows can be placed between boxes and never
   left dangling at a wrap — which is exactly what the old free-flowing
   flex-wrap version did. */
const JOURNEY_PER_ROW = 3

const chunk = (list, size) => list.reduce((out, item, i) => {
  if (i % size === 0) out.push([])
  out[out.length - 1].push(item)
  return out
}, [])


const Final = () => (
  <section className="section final">
    <div className="container">
      <Reveal as="p" className="final__label">{finalSection.label}</Reveal>
      <Reveal as="h2" className="final__heading" delay={120}>{finalSection.heading}</Reveal>
      <Reveal as="p" className="final__para" delay={210}>{finalSection.paragraph}</Reveal>
      {/* One illustration, or the drawn boxes if the artwork is removed. */}
      {finalSection.illustration ? (
        <Reveal variant="fade" className="journeyFig">
          <img src={finalSection.illustration} alt={finalSection.journey.join(' → ')} loading="lazy" />
        </Reveal>
      ) : (
        <Reveal as="div" variant="fade" className="journey stagger">
          {chunk(finalSection.journey, JOURNEY_PER_ROW).map((row, r) => (
            <div className="journey__row" key={row[0]}>
              {row.map((j, i) => (
                <Fragment key={j}>
                  <span className="journey__step">
                    <span className="journey__num">{String(r * JOURNEY_PER_ROW + i + 1).padStart(2, '0')}</span>
                    <span className="journey__label">{j}</span>
                  </span>
                  {/* Arrows sit between boxes only, never trailing a row. */}
                  {i < row.length - 1 && (
                    <span className="journey__arrow" aria-hidden="true"><ArrowRight weight="bold" /></span>
                  )}
                </Fragment>
              ))}
            </div>
          ))}
        </Reveal>
      )}
      <Reveal>
        <p className="final__cta">{finalSection.cta}</p>
        <div className="final__actions">
          <Link href="/contact" className="btn btn--onDark btn--arrow">{finalSection.ctaButton}<CtaArrow /></Link>
        </div>
      </Reveal>
    </div>
  </section>
)

/* ── Footer ─────────────────────────────────────────────────── */
/* Keyed by the `name` in footer.social, so the copy stays free of presentation.
   `Compass` is the fallback, so a new network renders sensibly before it is
   given a glyph of its own. */
const SOCIAL_ICONS = {
  LinkedIn: LinkedinLogo,
  X: XLogo,
  Facebook: FacebookLogo,
  Instagram: InstagramLogo,
  YouTube: YoutubeLogo,
}

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <Reveal as="div" variant="fade" className="footer__top stagger">
        <div className="footer__brandCol">
          <div className="footer__brand"><img className="footer__logo" src="/logos/entroid-logo-white.svg" alt={brand.name} /></div>
          <p className="footer__tag">{footer.tagline}</p>

          <address className="footer__contact">
            {footer.address && footer.address.map((line) => <span key={line}>{line}</span>)}
            {footer.phone && <a href={`tel:${footer.phone.replace(/[^+\d]/g, '')}`}>{footer.phone}</a>}
            {footer.email && <a href={`mailto:${footer.email}`}>{footer.email}</a>}
          </address>

          {footer.social && (
            <div className="footer__social">
              {footer.social.map((sx) => {
                const Glyph = SOCIAL_ICONS[sx.name] || Compass
                return (
                  <a
                    key={sx.name}
                    href={sx.to}
                    className="footer__socialLink"
                    aria-label={sx.name}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Glyph weight="fill" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          )}
        </div>

        {footer.columns.map((c) => (
          <div key={c.title} className="footer__col">
            <h4>{c.title}</h4>
            {c.links.map((l) => <Link key={l.label} href={l.to}>{l.label}</Link>)}
          </div>
        ))}
      </Reveal>
      <Reveal as="div" className="footer__bottom">© Entroid. Enterprise-grade platform for governed autonomous enterprises.</Reveal>
    </div>
  </footer>
)

/* ── Product (category) page ────────────────────────────────── */
/* Small check glyph for capability lists. */
const CheckIcon = () => (
  <svg className="capchk" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

/* ── Per-module mini diagrams ───────────────────────────────────
   A small library of parameterized figures. Each module carries a `viz`
   object ({ type, ...data }) and gets a relevant diagram in its section,
   without a bespoke one-off SVG per module. */
const MvFlow = ({ steps }) => (
  <div className="mviz mviz--flow">
    {steps.map((s, i) => (
      <span key={s} className="mviz__step">
        <span className="mviz__stepBox">{s}</span>
        {i < steps.length - 1 && <span className="mviz__arrow">→</span>}
      </span>
    ))}
  </div>
)
const MvMatch = ({ inputs, result }) => (
  <div className="mviz mviz--match">
    <div className="mviz__inputs">{inputs.map((x) => <span key={x} className="mviz__inBox">{x}</span>)}</div>
    <span className="mviz__matchTo">→</span>
    <div className="mviz__matchResult"><CheckIcon /><span>{result}</span></div>
  </div>
)
const MvBars = ({ bars, caption }) => (
  <div className="mviz mviz--bars">
    {bars.map((b) => (
      <div key={b.label} className="mviz__barRow">
        <span className="mviz__barLabel">{b.label}</span>
        <span className="mviz__barTrack"><span className="mviz__barFill" style={{ width: `${b.v}%` }} /></span>
      </div>
    ))}
    {caption && <div className="mviz__cap">{caption}</div>}
  </div>
)
const MvStat = ({ value, label, chips }) => (
  <div className="mviz mviz--stat">
    <div className="mviz__statVal">{value}</div>
    <div className="mviz__statLabel">{label}</div>
    {chips && <div className="mviz__chips">{chips.map((c) => <span key={c} className="mviz__chip">{c}</span>)}</div>}
  </div>
)
const MvStack = ({ items, base }) => (
  <div className="mviz mviz--stack">
    {items.map((x) => <span key={x} className="mviz__row">{x}</span>)}
    {base && <span className="mviz__base">{base}</span>}
  </div>
)
const MvHub = ({ center, nodes }) => (
  <div className="mviz mviz--hub">
    <span className="mviz__hubCore">{center}</span>
    <div className="mviz__hubNodes">{nodes.map((n) => <span key={n} className="mviz__hubNode">{n}</span>)}</div>
  </div>
)
const MvTrend = ({ points = [78, 62, 52, 40, 30, 20], label }) => {
  const w = 120, h = 46
  const pts = points.map((p, i) => `${(i / (points.length - 1)) * w},${h - (p / 100) * h}`).join(' ')
  return (
    <div className="mviz mviz--trend">
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="mviz__spark">
        <polyline points={pts} fill="none" stroke="var(--brand)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label && <div className="mviz__cap">{label}</div>}
    </div>
  )
}
const MiniViz = ({ v }) => {
  if (!v) return null
  if (v.type === 'flow') return <MvFlow steps={v.steps} />
  if (v.type === 'match') return <MvMatch inputs={v.inputs} result={v.result} />
  if (v.type === 'bars') return <MvBars bars={v.bars} caption={v.caption} />
  if (v.type === 'stat') return <MvStat value={v.value} label={v.label} chips={v.chips} />
  if (v.type === 'stack') return <MvStack items={v.items} base={v.base} />
  if (v.type === 'hub') return <MvHub center={v.center} nodes={v.nodes} />
  if (v.type === 'trend') return <MvTrend points={v.points} label={v.label} />
  return null
}

/* A large, realistic product-screen mockup that showcases each module at
   scale (window chrome, tabs, KPI tiles, a chart and an activity feed). This
   is the showcase visual, not a small diagram. Falls back to the module viz +
   capabilities when a page has not authored an explicit screen spec yet. */
const ModuleScreen = ({ name, screen = {}, viz, caps = [] }) => {
  const tabs = screen.tabs || ['Overview', 'Detail', 'Reports']
  const kpis = screen.kpis || []
  const chart = screen.chart || viz
  const rows = screen.rows || caps.slice(0, 3)
  return (
    <div className="mscreen" aria-hidden="true">
      <div className="mscreen__bar">
        <span className="mscreen__dot" /><span className="mscreen__dot" /><span className="mscreen__dot" />
        <span className="mscreen__barTitle">{name}</span>
        <span className="mscreen__live">Live</span>
      </div>
      <div className="mscreen__tabs">
        {tabs.map((t, i) => <span key={t} className={`mscreen__tab ${i === 0 ? 'is-active' : ''}`}>{t}</span>)}
      </div>
      <div className="mscreen__body">
        {kpis.length > 0 && (
          <div className="mscreen__kpis">
            {kpis.map((k) => (
              <div key={k.l} className="mscreen__kpi">
                <span className="mscreen__kpiV">{k.v}</span>
                <span className="mscreen__kpiL">{k.l}</span>
              </div>
            ))}
          </div>
        )}
        {chart && <div className="mscreen__chart"><MiniViz v={chart} /></div>}
        {rows.length > 0 && (
          <ul className="mscreen__rows">
            {rows.map((r) => (
              <li key={r}><span className="mscreen__rowDot" /><span className="mscreen__rowText">{r}</span><span className="mscreen__rowMeta">✓</span></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

/* Icons for the "how it runs" steps, by position: these journeys read as one
   progression — map it, build it, connect it, clear the blockers, go live —
   and the step titles differ per industry, so the sequence is what carries the
   meaning rather than any one title. The final step is always the launch mark,
   whatever the count. */
const JOURNEY_ICONS = [Compass, Stack, Graph, ShieldCheck, Gauge]

const journeyIcon = (i, total) =>
  (i === total - 1 ? RocketLaunch : JOURNEY_ICONS[i % JOURNEY_ICONS.length])

/* Shared renderer for product and industry pages (same template).
   `journey` + `relatedItems` are optional (industry pages pass them).

   The hero is a single centred column on one of two grounds. A page with a
   `heroImage` (a path under /public — the industry pages) runs that photograph
   raw behind the copy; every other page, product pages included, takes the
   brand gradient with the infinity pattern rising out of the foot of it. */
const SolutionPage = ({ p, journey, relatedItems }) => (
    <div className="solpage">
      <header
        className={[
          'phero',
          p.heroImage ? 'phero--image' : 'phero--gradient',
          // A page with hero artwork runs two columns, copy left; without one
          // the copy is a single centred column.
          p.heroFigure && 'phero--split',
        ].filter(Boolean).join(' ')}
        style={p.heroImage ? { backgroundImage: `url('${p.heroImage}')` } : undefined}
      >
        <div className="container phero__inner">
          <div className="phero__lead">
            <Reveal as="p" className="phero__eyebrow" eager>{p.category}</Reveal>
            <Reveal as="h1" className="phero__headline" delay={120} eager>{p.headline}</Reveal>
            <Reveal as="p" className="phero__intro" delay={220} eager>{p.intro}</Reveal>
            <Reveal className="phero__ctas" delay={330} eager>
              <Link href="/contact" className="btn btn--primary btn--arrow">{p.primaryCta}<CtaArrow /></Link>
            </Reveal>
          </div>

          {p.heroFigure && (
            <Reveal className="phero__figure" variant="zoom" delay={210}>
              <img src={p.heroFigure} alt={p.heroFigureAlt || ''} />
            </Reveal>
          )}

          {/* The value cards close the hero, in a row beneath the lead. */}
          {p.metrics && (
            <Reveal as="div" variant="fade" className="pstrip__row stagger" delay={420}>
              {p.metrics.map((m) => (
                <div className="pstrip__item" key={m.label}>
                  <div className="pstrip__value">{m.value}</div>
                  <div className="pstrip__label">{m.label}</div>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </header>

      <div className="modintro">
        <div className="container">
          <Reveal as="div" className="section__head section__head--split" style={{ marginBottom: 0 }}>
            <p className="section__label">{p.sectionsLabel || 'Modules'}</p>
            <div className="section__headRow">
              <h2 className="section__heading">{p.sectionsHeading || `${p.category}, module by module.`}</h2>
              {p.modulesIntro && <p className="section__para">{p.modulesIntro}</p>}
            </div>
          </Reveal>
        </div>
      </div>
      <section className="modgrid">
        <div className="container">
          <Reveal as="div" variant="fade" className="modcards stagger">
            {p.modules.map((m, i) => (
              <article key={m.name} id={slugify(m.name)} className="modcard">
                <span className="modcard__icon"><Icon i={i} /></span>
                <h3 className="modcard__title">{m.name}</h3>
                {m.tagline && <p className="modcard__tagline">{m.tagline}</p>}
                <p className="modcard__summary">{m.summary}</p>
                <ul className="modcard__caps">
                  {(m.capabilities || m.points || []).slice(0, 6).map((c) => (
                    <li key={c}><CheckIcon />{c}</li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {journey && journey.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <Reveal as="div" className="section__head section__head--split">
              <p className="section__label">How it runs</p>
              <div className="section__headRow">
                <h2 className="section__heading">{p.category}, end to end.</h2>
              </div>
            </Reveal>
            <Reveal as="ol" variant="fade" className="journeyx stagger">
              {journey.map((s, i) => {
                const Ico = journeyIcon(i, journey.length)
                // The last step is where the work lands, so it is the one
                // filled in brand colour rather than outlined like the rest.
                const last = i === journey.length - 1
                return (
                  <li key={s.title} className={`journeyx__step ${last ? 'is-final' : ''}`}>
                    <span className="journeyx__icon"><Ico weight="regular" aria-hidden="true" /></span>
                    <h3 className="journeyx__title">{s.title}</h3>
                    <p className="journeyx__text">{s.text}</p>
                  </li>
                )
              })}
            </Reveal>
          </div>
        </section>
      )}

      {p.visual && (
        <section className="section section--warm pflow">
          <div className="container">
            <Reveal as="div" className="section__head section__head--split">
              <p className="section__label">How it works</p>
              <div className="section__headRow">
                <h2 className="section__heading">{p.flowHeading}</h2>
                <p className="section__para">{p.flowText}</p>
              </div>
            </Reveal>
            <Reveal className="section__visual visual" variant="zoom" delay={140}><Visual v={p.visual} /></Reveal>
          </div>
        </section>
      )}

      {relatedItems && relatedItems.length > 0 && (
        <section className="section">
          <div className="container">
            <Reveal as="div" className="section__head section__head--split">
              <p className="section__label">Related</p>
              <div className="section__headRow">
                <h2 className="section__heading">More industries</h2>
              </div>
            </Reveal>
            <Reveal as="div" variant="fade" className="uccards uccards--three stagger">
              {relatedItems.map((r) => (
                <Link href={`/industries/${r.slug}`} key={r.slug} className="uc uc--link">
                  <p className="uc__theme">Industry</p>
                  <h3 className="uc__title">{r.category}</h3>
                  <p className="uc__scenario">{r.headline}</p>
                  <span className="uc__more">Explore →</span>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {p.closing && (
        <section className="section pcta">
          <div className="container">
            <Reveal>
              <h2 className="pcta__heading">{p.closing.heading}</h2>
              <p className="pcta__text">{p.closing.text}</p>
              <div className="pcta__actions">
                <Link href="/contact" className="btn btn--onDark btn--arrow">{p.closing.cta}<CtaArrow /></Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </div>
  )

const InProgress = ({ slug, kind }) => (
  <section className="section">
    <div className="container phero__inner">
      <p className="phero__eyebrow">{kind}</p>
      <h1 className="phero__headline">This {kind.toLowerCase()} page is in progress.</h1>
      <p className="phero__intro">The {String(slug || '').replace(/-/g, ' ')} page is being prepared. The platform overview is available in the meantime.</p>
      <Link href="/" className="btn btn--primary">Back to overview</Link>
    </div>
  </section>
)

export const ProductPage = ({ slug }) => {
  const p = products[slug]
  return p ? <SolutionPage p={p} /> : <InProgress slug={slug} kind="Product" />
}

// Wind and Solar are covered by the Renewable page, not peer industries.
const renewableSubs = ['wind', 'solar']

export const IndustryPage = ({ slug }) => {
  const p = industries[slug]
  if (!p) return <InProgress slug={slug} kind="Industry" />
  const peers = Object.keys(industries).filter((k) => !renewableSubs.includes(k))
  const idx = peers.indexOf(slug)
  const relatedItems = idx === -1
    ? peers.slice(0, 3).map((k) => industries[k])
    : [1, 2, 3].map((k) => industries[peers[(idx + k) % peers.length]])
  return <SolutionPage p={p} journey={industryJourneys[slug]} relatedItems={relatedItems} />
}

/* ── Home page ──────────────────────────────────────────────── */
/* Consecutive `layout: 'stack'` sections are handed to one <StackCards> so they
   can stack against each other; everything else renders as a normal section. */
const groupSections = (list) => list.reduce((out, s, i) => {
  const prev = out[out.length - 1]
  if (s.layout === 'stack') {
    if (prev && prev.type === 'stack') prev.items.push(s)
    else out.push({ type: 'stack', items: [s] })
  } else {
    out.push({ type: 'section', s, i })
  }
  return out
}, [])

export const Home = () => (
  <div className="home">
    <Hero />
    {groupSections(sections).map((b, k) => (
      b.type === 'stack'
        ? <StackCards key={`stack-${b.items[0].id}`} group={b.items} />
        : <Section key={b.s.id} s={b.s} index={b.i} />
    ))}
    <Final />
  </div>
)

/* On navigation: scroll to the hash target if present (footer anchors and
   deep-linked module sections), otherwise reset to the top. The target may
   mount a frame after the route changes, so retry across a few frames.

   Routed through Lenis when it is running. Lenis's stylesheet sets
   `scroll-behavior: auto !important`, so `scrollIntoView({behavior:'smooth'})`
   would jump rather than glide; its own `scrollTo` is what animates. The
   native calls stay as the fallback for before hydration and for anyone whose
   reduced-motion setting has turned Lenis off. */
const NAV_OFFSET = 84

export const ScrollManager = () => {
  const pathname = usePathname()
  useEffect(() => {
    const hash = window.location.hash

    if (!hash) {
      if (window.lenis) window.lenis.scrollTo(0, { immediate: true })
      else window.scrollTo(0, 0)
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    let raf, tries = 0
    const go = () => {
      const el = document.getElementById(id)
      if (el) {
        // Mirrors the sections' own `scroll-margin-top`, which Lenis does not
        // read for itself.
        if (window.lenis) window.lenis.scrollTo(el, { offset: -NAV_OFFSET })
        else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (tries++ < 20) raf = requestAnimationFrame(go)
    }
    raf = requestAnimationFrame(go)
    return () => cancelAnimationFrame(raf)
  }, [pathname])
  return null
}

/* ── Use Cases page ─────────────────────────────────────────── */
const UseCaseChain = ({ chain, flow }) => (
  <div className={`uc__chain ${flow ? 'uc__chain--flow' : ''}`}>
    {chain.map((c, j) => (
      <span key={c} className="uc__step">
        <span className="uc__chip">{c}</span>
        {flow && j < chain.length - 1 && <span className="uc__arrow" aria-hidden="true">→</span>}
      </span>
    ))}
  </div>
)

export const UseCases = () => (
  <>
    <header className="phero phero--gradient phero--compact">
      <div className="container phero__inner">
        <Reveal as="p" className="phero__eyebrow" eager>{useCasesHero.eyebrow}</Reveal>
        <Reveal as="h1" className="phero__headline" delay={120} eager>{useCasesHero.headline}</Reveal>
        <Reveal as="p" className="phero__intro" delay={220} eager>{useCasesHero.intro}</Reveal>
        <Reveal className="phero__ctas" delay={330}>
          <Link href="/contact" className="btn btn--primary">{useCasesHero.primaryCta}</Link>
        </Reveal>
      </div>
    </header>

    <div className="uclede">
      <div className="container"><Reveal as="p" className="uclede__text">{useCasesLede}</Reveal></div>
    </div>

    {/* id: the footer deep-links to each tier (/use-cases#<slugified tier>). */}
    {useCaseGroups.map((g) => (
      <section key={g.tier} id={slugify(g.tier)} className="section">
        <div className="container">
          <Reveal as="div" className="section__head section__head--split">
            <p className="section__label"><b>{g.tier}</b></p>
            <h2 className="section__heading">{g.tierNote}</h2>
          </Reveal>
          <Reveal as="div" variant="fade" className="uccards stagger">
            {g.items.map((u) => (
              <Link href={`/use-cases/${u.slug}`} key={u.slug} className="uc uc--link">
                <p className="uc__theme">{u.theme}</p>
                <h3 className="uc__title">{u.title}</h3>
                <p className="uc__scenario">{u.scenario}</p>
                <UseCaseChain chain={u.chain} flow={u.flow} />
                <p className="uc__outcome">{u.outcome}</p>
                <span className="uc__more">See how it works →</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    ))}

    <section className="section pcta">
      <div className="container">
        <Reveal>
          <h2 className="pcta__heading">{useCasesClosing.heading}</h2>
          <p className="pcta__text">{useCasesClosing.text}</p>
          <Link href="/contact" className="btn btn--primary btn--lg">{useCasesClosing.cta}</Link>
        </Reveal>
      </div>
    </section>
  </>
)

/* ── Why Us (/why-us): differentiators + founding team + beliefs ── */
/* Icons for the Why Us cards, keyed by title so the content file stays free of
   presentation, with a positional fallback for anything renamed. Drawn bare —
   no tile, no tint — at the heading ink, matching the card icons elsewhere. */
const WHY_ICONS = {
  'One connected model': Graph,
  'Governed AI, generated in': ShieldCheck,
  'Engineered, not just configured': Stack,
  'Every function, one platform': SquaresFour,
  'Owned by the enterprise': Key,
  'Built for production': RocketLaunch,
  'Governed by default': ShieldCheck,
  'AI generated in, not bolted on': Brain,
  'Proven at enterprise scale': Buildings,
}
const WHY_FALLBACK = [Graph, ShieldCheck, Stack, SquaresFour, Key, RocketLaunch]

const whyIcon = (title, i) => WHY_ICONS[title] || WHY_FALLBACK[i % WHY_FALLBACK.length]

export const WhyUs = () => (
  <>
    <header className="phero phero--gradient phero--compact">
      <div className="container phero__inner">
        <Reveal as="p" className="phero__eyebrow" eager>{whyUs.hero.eyebrow}</Reveal>
        <Reveal as="h1" className="phero__headline" delay={120} eager>{whyUs.hero.headline}</Reveal>
        <Reveal as="p" className="phero__intro" delay={220} eager>{whyUs.hero.intro}</Reveal>
        <Reveal className="phero__ctas" delay={330}>
          <Link href="/contact" className="btn btn--primary">{whyUs.hero.primaryCta}</Link>
        </Reveal>
      </div>
    </header>

    {/* Section ids are deep-linked from the footer — keep them in sync with
        the "Why Us" column in content.js. */}
    <section id="what-sets-it-apart" className="wsec">
      <div className="container">
        <Reveal as="div" className="whead">
          <p className="whead__label">{whyUs.pillarsLabel}</p>
          <h2 className="whead__heading">{whyUs.pillarsHeading}</h2>
        </Reveal>
        <Reveal as="div" variant="fade" className="pillars stagger">
          {whyUs.pillars.map((p, i) => {
            const Ico = whyIcon(p.title, i)
            return (
              <div key={p.title} className="pillar">
                <span className="pillar__icon"><Ico weight="regular" aria-hidden="true" /></span>
                <div className="pillar__title">{p.title}</div>
                <p className="pillar__text">{p.text}</p>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>

    <section id="founding-team" className="wsec wsec--alt">
      <div className="container">
        <Reveal as="div" className="whead">
          <p className="whead__label">{whyUs.team.label}</p>
          <h2 className="whead__heading">{whyUs.team.heading}</h2>
          <p className="whead__lede">{whyUs.team.lede}</p>
        </Reveal>
        <Reveal as="div" variant="fade" className="founders stagger">
          {whyUs.team.founders.map((f) => (
            <div key={f.name} className="founder">
              <div className="founder__avatar">{f.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</div>
              <div className="founder__body">
                <div className="founder__name">{f.name}</div>
                <div className="founder__role">{f.role}</div>
                <p className="founder__bio">{f.bio}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>

    <section id="how-its-built" className="wsec">
      <div className="container">
        <Reveal as="div" className="whead">
          <p className="whead__label">{whyUs.beliefsLabel}</p>
          <h2 className="whead__heading">{whyUs.beliefsHeading}</h2>
        </Reveal>
        <Reveal as="div" variant="fade" className="beliefs stagger">
          {whyUs.beliefs.map((b, i) => {
            const Ico = whyIcon(b.title, i)
            return (
              /* Same `pillar` markup as "What sets it apart" above — the two
                 sections are one set of cards, laid out two-up instead of
                 three-up. */
              <div key={b.title} className="pillar">
                <span className="pillar__icon"><Ico weight="regular" aria-hidden="true" /></span>
                <div className="pillar__title">{b.title}</div>
                <p className="pillar__text">{b.text}</p>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>

    <section className="section pcta">
      <div className="container">
        <Reveal>
          <h2 className="pcta__heading">{whyUs.closing.heading}</h2>
          <p className="pcta__text">{whyUs.closing.text}</p>
          <Link href="/contact" className="btn btn--primary btn--lg">{whyUs.closing.cta}</Link>
        </Reveal>
      </div>
    </section>
  </>
)

/* ── Use Case detail (elaborated: steps, what it unlocks, runs-on, related) ── */
export const UseCaseDetail = ({ slug }) => {
  const all = useCaseGroups.flatMap((g) => g.items)
  const idx = all.findIndex((x) => x.slug === slug)
  const u = all[idx]
  if (!u) {
    return (
      <section className="section">
        <div className="container phero__inner">
          <p className="phero__eyebrow"><Link href="/use-cases">Use Cases</Link></p>
          <h1 className="phero__headline">This use case is in progress.</h1>
          <Link href="/use-cases" className="btn btn--primary">All use cases</Link>
        </div>
      </section>
    )
  }
  const related = [1, 2, 3].map((k) => all[(idx + k) % all.length])
  return (
    <>
      <header className="phero phero--gradient phero--compact">
        <div className="container phero__inner">
          <Reveal as="p" className="phero__eyebrow"><Link href="/use-cases">Use Cases</Link> · {u.theme}</Reveal>
          <Reveal as="h1" className="phero__headline" delay={120} eager>{u.title}</Reveal>
          <Reveal as="p" className="phero__intro" delay={220} eager>{u.scenario}</Reveal>
          <Reveal className="phero__ctas" delay={330}>
            <Link href="/contact" className="btn btn--primary">Book a demo</Link>
            <Link href="/use-cases" className="btn btn--ghost">All use cases</Link>
          </Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="ucd">
            <div className="ucd__lead">
              <Reveal as="p" className="section__label"><b>How it comes together</b></Reveal>
              <Reveal as="p" className="ucd__detail" delay={100}>{u.detail}</Reveal>
              <Reveal as="ol" variant="fade" className="ucd__steps stagger">
                {u.steps.map((s, i) => (
                  <li key={s.title} className="ucd__step">
                    <span className="ucd__stepNum">{String(i + 1).padStart(2, '0')}</span>
                    <div className="ucd__stepBody">
                      <h4 className="ucd__stepTitle">{s.title}</h4>
                      <p className="ucd__stepText">{s.text}</p>
                    </div>
                  </li>
                ))}
              </Reveal>
              <Reveal className="ucd__outcome" variant="zoom">
                <span className="ucd__outcomeLabel">Outcome</span>
                <p>{u.outcome}</p>
              </Reveal>
            </div>
            <aside className="ucd__side">
              <Reveal className="ucd__panel" variant="right">
                <p className="ucd__sideLabel">What it unlocks</p>
                <ul className="ucd__caps">
                  {u.capabilities.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </Reveal>
              <Reveal className="ucd__panel" variant="right" delay={160}>
                <p className="ucd__sideLabel">Runs on</p>
                <div className="ucd__chips">
                  {u.chain.map((c) => (
                    chipProduct[c]
                      ? <Link key={c} href={`/product/${chipProduct[c]}`} className="ucd__chip ucd__chip--link">{c} →</Link>
                      : <span key={c} className="ucd__chip">{c}</span>
                  ))}
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal as="div" className="section__head" style={{ maxWidth: 820 }}>
            <p className="section__label"><b>Related</b></p>
            <h2 className="section__heading">More use cases</h2>
          </Reveal>
          <Reveal as="div" variant="fade" className="uccards uccards--three stagger">
            {related.map((r) => (
              <Link href={`/use-cases/${r.slug}`} key={r.slug} className="uc uc--link">
                <p className="uc__theme">{r.theme}</p>
                <h3 className="uc__title">{r.title}</h3>
                <p className="uc__scenario">{r.scenario}</p>
                <span className="uc__more">See how it works →</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section pcta">
        <div className="container">
          <Reveal>
            <h2 className="pcta__heading">{useCasesClosing.heading}</h2>
            <p className="pcta__text">{useCasesClosing.text}</p>
            <Link href="/contact" className="btn btn--primary btn--lg">{useCasesClosing.cta}</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* ── Coming soon (unbuilt resources) ──────────────────────────── */
export const ComingSoon = ({ eyebrow, title, text }) => (
  <section className="soon">
    <div className="container">
      <Reveal as="div" className="soon__inner" eager>
        {/* <p className="soon__eyebrow">{eyebrow}</p> */}
        <span className="soon__badge">Coming soon</span>
        <h1 className="soon__title">{title}</h1>
        <p className="soon__text">{text}</p>
        <div className="soon__ctas">
          <Link href="/" className="btn btn--primary">Back to home</Link>
          <Link href="/resources/blogs" className="btn btn--ghost">Read the blog</Link>
        </div>
      </Reveal>
    </div>
  </section>
)

/* ── FAQ (/resources/faq): categorised, accordion answers ─────── */
export const Faq = () => (
  <>
    <header className="phero phero--gradient phero--compact">
      <div className="container phero__inner">
        <Reveal as="p" className="phero__eyebrow" eager>Resources · FAQ</Reveal>
        <Reveal as="h1" className="phero__headline" delay={120} eager>{faq.headline}</Reveal>
        <Reveal as="p" className="phero__intro" delay={220} eager>{faq.intro}</Reveal>
      </div>
    </header>
    <section className="faqwrap">
      <div className="container">
        <div className="faqgroups">
          {faq.groups.map((g) => (
            <Reveal as="div" key={g.title} variant="fade" className="faqgroup stagger">
              <h2 className="tabsx__title">{g.title}</h2>
              {g.items.map((it) => (
                <details key={it.q} className="faqitem">
                  <summary className="faqitem__q">{it.q}<span className="faqitem__icon" aria-hidden="true" /></summary>
                  <div className="faqitem__a">{it.a}</div>
                </details>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <section className="section pcta">
      <div className="container">
        <Reveal>
          <h2 className="pcta__heading">{faq.closing.heading}</h2>
          <p className="pcta__text">{faq.closing.text}</p>
          <Link href="/contact" className="btn btn--primary btn--lg">{faq.closing.cta}</Link>
        </Reveal>
      </div>
    </section>
  </>
)
