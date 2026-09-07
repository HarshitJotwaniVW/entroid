'use client'

import { useEffect, useState } from 'react'
import {
  ChartLineUp, ChatsCircle, ClipboardText, Cloud, Compass, Gauge, Gavel, Graph,
  Key, Lightning, Lock, LockOpen, Path, PuzzlePiece, Robot, SealCheck,
  ShieldCheck, Sliders, Stack, UsersThree, Vault, Wrench,
} from '@phosphor-icons/react'
import '../showcase.css'

/* ============================================================================
   Two self-advancing section layouts.

   TabsShowcase — a rail of tabs on the left, one panel on the right. The panel
   advances on its own every ROTATE_MS and keeps going while hovered; clicking a
   tab jumps to it and restarts the countdown.

   StackCards — a run of plain white sections, each a centred head above a
   two-column grid of cards with the artwork beside it. (The name is historical:
   these used to stack as sticky cards.)
   ========================================================================== */

const ROTATE_MS = 5000

/* Tile glyphs, keyed by card title so the copy stays free of presentation.
   The positional list is the fallback for a renamed or added card. */
const STACK_ICONS = {
  'Intelligent Agents': Robot,
  'Conversational Enterprise': ChatsCircle,
  'Enterprise Automation': Lightning,
  'Multi-Agent Collaboration': UsersThree,
  'Predictive Intelligence': ChartLineUp,
  'Governed AI': ShieldCheck,
  'Governance by Design': Gavel,
  'Enterprise Security': Lock,
  'Regulatory Compliance': SealCheck,
  'Complete Auditability': ClipboardText,
  'Resilient Architecture': Cloud,
  'Enterprise Scale': Stack,
  'Enterprise Ownership': Key,
  'Freedom from Vendor Lock-in': LockOpen,
  'Protected Intellectual Property': Vault,
  'Unlimited Extensibility': PuzzlePiece,
  'Build on Your Terms': Wrench,
  'Future-Proof Platform': Compass,
  'Configurable by Design': Sliders,
  'Built to Extend': PuzzlePiece,
  'Hybrid & Cloud Ready': Cloud,
  'Works Your Way': Path,
  'Connected Enterprise': Graph,
  'Adopt at Your Pace': Gauge,
}
const STACK_FALLBACK = [Robot, PuzzlePiece, Graph, UsersThree, ShieldCheck, Stack]

/* ── Innovation & Modernisation: tab rail + rotating panel ────── */
export const TabsShowcase = ({ items = [], image, imageAlt = '' }) => {
  const [active, setActive] = useState(0)

  /* The purple rule beside the active tab is the timer: it grows top to bottom
     over ROTATE_MS and hands over to the next tab when it reaches the end.
     Hovering the panel pauses the animation, which pauses the hand-over with
     it — the bar the reader sees and the clock that moves the tabs are the
     same thing, so they cannot disagree. */
  const next = () => setActive((i) => (i + 1) % items.length)

  const shownImage = (items[active] && items[active].image) || image

  return (
    <div className="tabsx">
      <div className="tabsx__rail" role="tablist" aria-label="Innovation and modernisation">
        {items.map((c, i) => (
          <button
            key={c.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`tabsx__tab ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="tabsx__prog" aria-hidden="true">
              {i === active && (
                <i
                  key={active}
                  className="tabsx__progFill"
                  style={{ animationDuration: `${ROTATE_MS}ms` }}
                  onAnimationEnd={next}
                />
              )}
            </span>
            {c.title}
          </button>
        ))}
      </div>

      <div className="tabsx__panel">
        <div className="tabsx__bodies">
          {items.map((c, i) => (
            <div key={c.title} className={`tabsx__body ${i === active ? 'is-active' : ''}`} role="tabpanel">
              <h3 className="tabsx__title">{c.title}</h3>
              <p className="tabsx__text">{c.text}</p>
            </div>
          ))}
        </div>
        {/* A tab's own artwork if it has one, otherwise the section's. `key` on
            the src restarts the fade, so a swap reads as a change rather than a
            silent substitution. */}
        {shownImage && (
          <img
            key={shownImage}
            className="tabsx__img"
            src={shownImage}
            alt={items[active] && items[active].image ? items[active].title : imageAlt}
          />
        )}
      </div>
    </div>
  )
}

/* ── One card in the scroll-stacked deck ─────────────────────── */
const StackCard = ({ s }) => {
  const items = s.cards || []

  return (
    <section id={s.id} className="stackx">
      <div className="stackx__card">
        {/* Centred head across the card; the grid of cards and the artwork
            sit side by side beneath it. */}
        <div className="stackx__lead">
          <p className="stackx__label">{s.label}</p>
          <h2 className="stackx__heading">{s.heading}</h2>
          <p className="stackx__para">{s.paragraph}</p>
        </div>

        <div className="stackx__grid">
          <ul className="stackx__cards">
            {items.map((c, n) => {
              const Ico = STACK_ICONS[c.title] || STACK_FALLBACK[n % STACK_FALLBACK.length]
              return (
                <li key={c.title} className="stackx__tile">
                  <span className="stackx__tileIcon"><Ico weight="regular" aria-hidden="true" /></span>
                  <h3 className="stackx__tileTitle">{c.title}</h3>
                  <p className="stackx__tileText">{c.text}</p>
                </li>
              )
            })}
          </ul>

          <div className="stackx__figure">
            {s.infographic
              ? <img className="stackx__img" src={s.infographic} alt={s.heading} loading="lazy" />
              : <div className="stackx__ph" aria-hidden="true"><span>Image</span></div>}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── The deck ────────────────────────────────────────────────── */
export const StackCards = ({ group = [] }) => (
  <div className="stackg">
    {group.map((s) => <StackCard key={s.id} s={s} />)}
  </div>
)

export default StackCards
