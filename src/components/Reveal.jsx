'use client'

import { useEffect, useRef } from 'react'

/* ============================================================================
   Reveal-on-scroll.

   Elements start hidden and animate in the first time they scroll into view
   (once — the observer disconnects after firing, so nothing re-animates on
   scroll-back).

     variant  motion to use: up (default) | fade | left | right | zoom
     delay    ms offset, so neighbouring elements cascade instead of popping
              together
     as       element/component to render (defaults to div; anything that
              forwards a ref works, e.g. next/link's Link)

   Add `stagger` to the className of a grid or list and its direct children
   cascade in sequence once the container itself is in view — see styles.css.
   Motion is disabled wholesale under `prefers-reduced-motion`.
   ========================================================================== */

/* How far the element must travel up the viewport before it starts animating.
   -28% means its top has to pass 72% of the viewport height, so the entrance
   plays where the reader is actually looking. Triggering on first contact with
   the bottom edge instead (the obvious choice) means the animation runs in the
   bottom sliver of the screen and is already over by the time the element is
   in comfortable view — it reads as "nothing animated at all". */
const TRIGGER_INSET = '-28%'

/* The inset above has one blind spot: elements inside the last screenful of the
   document can never reach the 72% line, because there's no scroll left to push
   them there. They would stay hidden permanently. One shared listener (not one
   per element) releases whatever is still pending once the page bottoms out. */
const pending = new Set()
let guardBound = false

const flushAtBottom = () => {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
  if (!atBottom) return
  // Copy first: each show() mutates the set it is iterating.
  ;[...pending].forEach((show) => show())
}

const bindGuard = () => {
  if (guardBound) return
  guardBound = true
  window.addEventListener('scroll', flushAtBottom, { passive: true })
  window.addEventListener('resize', flushAtBottom, { passive: true })
}

/* Shared with Blog.jsx, whose article bodies are injected as raw HTML and so
   can't be wrapped in the component below. Returns a cleanup function. */
export const revealOnScroll = (el) => {
  if (!el) return () => {}
  // No observer support: show the content outright rather than hiding it.
  if (typeof IntersectionObserver === 'undefined') { el.classList.add('is-visible'); return () => {} }

  /* Anything already on screen at first paint has nothing to scroll into: the
     reader can see it, so it animates in now rather than waiting for a scroll
     that may never come. The trigger inset above deliberately sits at 72% of
     the viewport, which left in-view-but-low content (the hero's CTA row) stuck
     at opacity 0 until the page was scrolled. */
  const box = el.getBoundingClientRect()
  if (box.top < window.innerHeight && box.bottom > 0) {
    el.classList.add('is-visible')
    return () => {}
  }

  const show = () => {
    el.classList.add('is-visible')
    pending.delete(show)
    io.disconnect()
  }
  const io = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) show() },
    { rootMargin: `0px 0px ${TRIGGER_INSET} 0px` },
  )

  io.observe(el)
  pending.add(show)
  bindGuard()
  // A page too short to scroll never fires the guard's scroll event, so give it
  // one run after layout settles.
  requestAnimationFrame(flushAtBottom)

  return () => { pending.delete(show); io.disconnect() }
}

/* `eager` is for content that is on screen at first paint — page headlines,
   hero copy. Everything else starts at opacity 0 and is brought in by the
   observer above, which cannot run until React has hydrated; for the element
   that is the page's Largest Contentful Paint that means it is painted
   invisible and does not count as a paint at all, so LCP ends up waiting on
   hydration plus the entrance animation.

   An eager element ships with `is-visible` already on it. The same animation
   plays, driven by CSS alone from the first frame, and the observer is skipped
   entirely — there is nothing for it to wait for. */
export const Reveal = ({ as: Tag = 'div', className = '', variant = '', delay = 0, eager = false, style, children, ...rest }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (eager) return undefined
    return revealOnScroll(ref.current)
  }, [eager])

  const cls = ['reveal', variant && `reveal--${variant}`, eager && 'is-visible', className]
    .filter(Boolean).join(' ')
  const css = delay ? { ...style, '--reveal-delay': `${delay}ms` } : style
  return <Tag ref={ref} className={cls} style={css} {...rest}>{children}</Tag>
}
