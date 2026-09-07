'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/* ============================================================================
   Smooth scrolling (Lenis).

   Lenis wraps the browser's own scroll rather than transforming the page, which
   is the reason it is safe here: this site leans on native scroll behaviour in
   several places that a transform-based smooth-scroll library would break.

     · position: sticky      the pinned orbit stage and the stacked card deck
     · window.scrollY        the orbit's beat sequence and the chain's arrow fill
     · IntersectionObserver  every reveal-on-scroll entrance
     · scroll events         both of the above are driven by them

   All of those keep working because the document really does scroll.

   `respectReducedMotion` is on by default, so smoothing turns itself off for
   anyone who asks for reduced motion.

   The instance is put on `window.lenis` so ScrollManager can route anchor jumps
   through it: Lenis's own stylesheet forces `scroll-behavior: auto`, which
   would otherwise make `scrollIntoView({ behavior: 'smooth' })` land instantly.
   ========================================================================== */

export const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      // Lenis runs its own requestAnimationFrame loop.
      autoRaf: true,
      // Interpolation per frame. Lower is slower and heavier; this is close to
      // the default and keeps the scroll responsive rather than floaty.
      lerp: 0.12,
      wheelMultiplier: 1,
      // Touch devices already have momentum scrolling of their own; smoothing
      // on top of it fights the platform.
      syncTouch: false,
    })

    window.lenis = lenis
    return () => {
      lenis.destroy()
      if (window.lenis === lenis) delete window.lenis
    }
  }, [])

  return null
}

export default SmoothScroll
