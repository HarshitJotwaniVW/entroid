'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import '../chainFlow.css'

/* ============================================================================
   Serpentine card chain (Enterprise Flexibility).

   The cards run down the centre of the section. Between each pair, a curved
   arrow leaves one card's side edge, bows outwards and comes back into the
   same side of the next card — right, then left, then right again — so the eye
   is walked down the column rather than dropped straight through it.

   The curves are measured, not guessed: the card edges and vertical midpoints
   are read from the laid-out DOM and re-read on resize, so a card that grows a
   line taller keeps its arrow attached. Until the first measurement (and on the
   server) the overlay is simply empty; the cards stand on their own, since the
   arrows are decoration rather than content.

   Each arrow is drawn twice — a light grey track and a brand-purple overlay
   clipped by stroke-dashoffset — and the overlay is revealed as that link
   crosses the lower part of the viewport.
   ========================================================================== */

/* How far the curve bows away from the column, in px. */
const BOW = 72
/* The arrow fills as its link travels from the fill line to the top of it. */
const FILL_LINE = .78

export const ChainFlow = ({ items = [] }) => {
  const wrapRef = useRef(null)
  const cardRefs = useRef([])
  const [links, setLinks] = useState([])
  const [box, setBox] = useState({ w: 0, h: 0 })

  /* Measure every card against the wrapper, then build one link per gap. A
     link's side alternates, starting on the right. */
  const measure = useCallback(() => {
    const wrap = wrapRef.current
    const cards = cardRefs.current.filter(Boolean)
    if (!wrap || cards.length < 2) return

    const w = wrap.getBoundingClientRect()
    const boxes = cards.map((el) => {
      const r = el.getBoundingClientRect()
      return { left: r.left - w.left, right: r.right - w.left, mid: r.top - w.top + r.height / 2, top: r.top - w.top, bottom: r.bottom - w.top }
    })

    setBox({ w: w.width, h: w.height })
    setLinks(boxes.slice(0, -1).map((a, i) => {
      const b = boxes[i + 1]
      const right = i % 2 === 0
      const x = right ? a.right : a.left
      const out = right ? x + BOW : x - BOW
      // A symmetric cubic: straight out of the edge, straight back into it.
      const d = `M ${x} ${a.mid} C ${out} ${a.mid} ${out} ${b.mid} ${x} ${b.mid}`
      // Arrowhead at the far end, pointing back into the card's edge.
      const dir = right ? 1 : -1
      const head = `M ${x + dir * 9} ${b.mid - 7} L ${x} ${b.mid} L ${x + dir * 9} ${b.mid + 7}`
      return { d, head, top: a.mid, height: Math.max(1, b.mid - a.mid) }
    }))
  }, [])

  useEffect(() => {
    measure()
    const ro = new ResizeObserver(measure)
    if (wrapRef.current) ro.observe(wrapRef.current)
    cardRefs.current.forEach((el) => el && ro.observe(el))
    window.addEventListener('resize', measure)
    // Web fonts land after first paint and change the card heights with them.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure)
    return () => { ro.disconnect(); window.removeEventListener('resize', measure) }
  }, [measure, items.length])

  /* Scroll-driven fill, one progress value per link. */
  const [fill, setFill] = useState([])
  useEffect(() => {
    if (!links.length) return
    let queued = 0
    const run = () => {
      const wrap = wrapRef.current
      if (!wrap) return
      const wt = wrap.getBoundingClientRect().top
      const line = window.innerHeight * FILL_LINE
      setFill(links.map((l) => {
        const p = (line - (wt + l.top)) / l.height
        return Math.min(Math.max(p, 0), 1)
      }))
    }
    const onScroll = () => { if (!queued) queued = requestAnimationFrame(() => { queued = 0; run() }) }
    run()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (queued) cancelAnimationFrame(queued)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [links])

  return (
    <div className="chain" ref={wrapRef}>
      <svg className="chain__wires" width={box.w} height={box.h} viewBox={`0 0 ${box.w || 1} ${box.h || 1}`} aria-hidden="true">
        {links.map((l, i) => {
          const p = fill[i] || 0
          return (
            <g key={i}>
              <path className="chain__track" d={l.d} />
              <path className="chain__track" d={l.head} />
              <path className="chain__live" d={l.d} pathLength="1" style={{ strokeDasharray: 1, strokeDashoffset: 1 - p }} />
              <path className="chain__live" d={l.head} pathLength="1" style={{ strokeDasharray: 1, strokeDashoffset: p >= 1 ? 0 : 1 }} />
            </g>
          )
        })}
      </svg>

      <ol className="chain__cards">
        {items.map((c, i) => (
          <li key={c.title} className="chain__card card" ref={(el) => { cardRefs.current[i] = el }}>
            {/* <span className="chain__num">{String(i + 1).padStart(2, '0')}</span> */}
            <h3 className="chain__title">{c.title}</h3>
            <p className="chain__text">{c.text}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ChainFlow
