'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Graph, PlugsConnected, PuzzlePiece, SealCheck, SquaresFour, UsersThree,
} from '@phosphor-icons/react'
import '../platformOrbit.css'

/* ============================================================================
   Unified Enterprise Platform orbit (homepage section 02).

   The section heading is passed in and pinned with the graphic, so the reader
   keeps the context while the cards arrive.

   Entroid sits at the centre with the six capability cards banked either side:
   1-3 down the right column, 4-6 down the left. A dashed ring is drawn around
   the mark, then the cards arrive one at a time, each lighting up its own node
   on the ring. Cards accumulate — once a card is in, it stays in — so the
   section finishes as a complete picture rather than a slideshow.

   The sequence is driven by scroll position, not by a timer, so the reader sets
   the pace. A tall track (`.porb`) provides the scroll distance; the stage
   inside it is sticky, so the graphic holds still while the page scrolls past.

   Everything is in the DOM from the first render — cards that have not arrived
   yet are only faded, never removed, and they hold their slot so nothing
   reflows — which keeps the copy readable to crawlers, to AI agents and to
   anyone without JavaScript. Before the effect runs the `is-ready` class is
   absent and CSS shows the whole thing at rest.
   ========================================================================== */

/* Icons live here rather than in content.js so the copy stays free of
   presentation. Keyed by card title, with a positional fallback so a renamed or
   reordered card still renders something sensible. */
const ICONS = {
  'One Platform for Every Function': SquaresFour,
  'Shared Enterprise Services': PuzzlePiece,
  'One Source of Enterprise Knowledge': Graph,
  'Connected Business Operations': UsersThree,
  'Built-in Integration': PlugsConnected,
  'Enterprise-Wide Consistency': SealCheck,
}
const FALLBACK = [SquaresFour, PuzzlePiece, Graph, UsersThree, PlugsConnected, SealCheck]

const iconFor = (title, i) => ICONS[title] || FALLBACK[i % FALLBACK.length]

/* Which beat a card arrives on, given its index in the array.

   The left bank arrives top to bottom, then the right bank arrives BOTTOM to
   top. That is not the reading order — it is the ring's order. The sequence
   travels once around the circle anti-clockwise: down the left arc, across the
   bottom, and back up the right arc, so each node lands next to the one before
   it rather than jumping the diagram. Placement is unaffected; only the timing
   is. */
const beatFor = (i, total, half) => (i >= half ? i - half : total - 1 - i)

/* Where each card's node sits on the ring, in degrees clockwise from twelve
   o'clock. Cards 1-3 take the right arc top to bottom, cards 4-6 the left arc,
   so every node points at the column its card is in. Any card count other than
   six falls back to an even spread. */
const SEATS = [-60, 0, 60, -120, 180, 120]

const seat = (i, total) => {
  const deg = total === SEATS.length ? SEATS[i] : -90 + (360 / total) * i
  const a = deg * (Math.PI / 180)
  return { left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%` }
}

/* The scroll track is divided into STEPS equal beats (see --porb-step in the
   stylesheet, which must stay in sync). Beat 0 is Entroid alone, the ring is
   drawn at RING_AT, and card i lands on beat CARDS_AT + i. The remainder after
   the last card is deliberate: it holds the completed graphic on screen for a
   moment before the stage unpins. */
const STEPS = 8
const RING_AT = 0.55
const CARDS_AT = 1.35

export const PlatformOrbit = ({ cards = [], brandName = 'Entroid', head = null }) => {
  const trackRef = useRef(null)
  // -1 = no card yet. `ring` gates the dashed circle, one beat ahead of card 1.
  const [phase, setPhase] = useState({ ring: false, active: -1 })
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    setReady(true)

    let queued = 0
    let last = ''

    const measure = () => {
      // Scrolled distance through the track, 0..1, where 1 is the moment the
      // sticky stage reaches the bottom of the track and unpins.
      const top = track.getBoundingClientRect().top + window.scrollY
      const span = track.offsetHeight - window.innerHeight
      const p = span > 0 ? (window.scrollY - top) / span : 1
      const t = Math.min(Math.max(p, 0), 1) * STEPS

      const next = {
        ring: t >= RING_AT,
        active: t >= CARDS_AT ? Math.min(cards.length - 1, Math.floor(t - CARDS_AT)) : -1,
      }
      // Scroll fires far more often than the sequence actually advances; only
      // re-render on a real beat change.
      const key = `${next.ring}:${next.active}`
      if (key === last) return
      last = key
      setPhase(next)
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
  }, [cards.length])

  const cls = ['porb', ready && 'is-ready', phase.ring && 'is-ringed'].filter(Boolean).join(' ')

  /* Split point between the two columns: the first half banks down the right,
     the rest down the left. Cards are direct children of the same grid as the
     ring, each placed by row and column, so a row's height is shared across
     both sides and the two banks line up exactly. Source order stays 1..6. */
  const half = Math.ceil(cards.length / 2)

  const Card = ({ c, i }) => {
    const right = i < half
    const seatStyle = { '--porb-col': right ? 3 : 1, '--porb-row': (right ? i : i - half) + 1 }
    // The card carries the same icon as its node, so the pair reads as one.
    const Ico = iconFor(c.title, i)
    const beat = beatFor(i, cards.length, half)
    return (
      <article
        className={[
          'porb__card',
          right ? 'porb__card--right' : 'porb__card--left',
          beat <= phase.active && 'is-shown',
          beat === phase.active && 'is-active',
        ].filter(Boolean).join(' ')}
        style={seatStyle}
      >
        <span className="porb__cardIcon"><Ico weight="regular" aria-hidden="true" /></span>
        <h3 className="porb__cardTitle">{c.title}</h3>
        <p className="porb__cardText">{c.text}</p>
      </article>
    )
  }

  return (
    <div className={cls} ref={trackRef} style={{ '--porb-steps': STEPS }}>
      <div className="porb__stage">
        {/* Inside the sticky stage, so the section title stays on screen for
            the whole sequence instead of scrolling away above it. */}
        {head && <div className="porb__head">{head}</div>}

        <div className="porb__inner">

          {cards.slice(0, half).map((c, i) => <Card key={c.title} c={c} i={i} />)}

          <div className="porb__ring" style={{ '--porb-rows': half }}>
            <span className="porb__glow" aria-hidden="true" />
            <svg className="porb__circle" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="49.5" />
            </svg>

            {cards.map((c, i) => {
              const Ico = iconFor(c.title, i)
              const beat = beatFor(i, cards.length, half)
              const state = beat === phase.active ? 'is-active' : beat < phase.active ? 'is-shown' : ''
              return (
                <span key={c.title} className={`porb__node ${state}`} style={seat(i, cards.length)} title={c.title}>
                  <Ico weight="duotone" aria-hidden="true" />
                </span>
              )
            })}

            <div className="porb__core">
              <span className="porb__mark">
                <img src="/logos/entroid-favicon.png" alt="" aria-hidden="true" />
              </span>
              <span className="porb__name">{brandName}</span>
            </div>
          </div>

          {cards.slice(half).map((c, i) => <Card key={c.title} c={c} i={half + i} />)}

        </div>
      </div>
    </div>
  )
}

export default PlatformOrbit
