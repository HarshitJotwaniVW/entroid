'use client'

import { useEffect, useRef, useState } from 'react'
import '../heroIllustration.css'

/* The hero illustration is drawn on a fixed 1280x760 canvas so the orbits,
   link paths and chip positions can be authored in absolute coordinates.
   The stage is then scaled down to whatever width the hero column gives it. */
const STAGE_W = 1280
const STAGE_H = 760

/* Product chips flanking the core. `side` picks the violet (left) or teal
   (right) treatment; `width` is the track the chip aligns inside. */
const chips = [
  { side: 'left', label: 'AI Agents', icon: 'smart_toy', left: 230, top: 122, width: 200, delay: 1.05, float: 6.4, floatDelay: 1.9 },
  { side: 'left', label: 'Conversational Agents', icon: 'forum', left: 150, top: 222, width: 230, delay: 1.2, float: 7.2, floatDelay: 2.4 },
  { side: 'left', label: 'ML Studio', icon: 'psychology', left: 240, top: 322, width: 160, delay: 1.35, float: 6.8, floatDelay: 3.1 },
  { side: 'right', label: 'Forecaster', icon: 'insights', left: 850, top: 122, width: 190, delay: 1.1, float: 6.6, floatDelay: 2.1 },
  { side: 'right', label: 'Vision AI', icon: 'visibility', left: 900, top: 222, width: 170, delay: 1.25, float: 7.4, floatDelay: 2.7 },
  { side: 'right', label: 'Anomaly Detection', icon: 'monitor_heart', left: 880, top: 322, width: 220, delay: 1.4, float: 6.2, floatDelay: 3.4 },
]

/* Dashed signal paths from each chip into the core, with the node dot that
   sits at the core end of the path. */
const links = [
  { d: 'M 430 150 L 528 208', side: 'left', dur: 12, x: 528, y: 208 },
  { d: 'M 380 250 L 512 278', side: 'left', dur: 14, x: 512, y: 278 },
  { d: 'M 400 350 L 522 342', side: 'left', dur: 13, x: 522, y: 342 },
  { d: 'M 850 150 L 752 208', side: 'right', dur: 12.5, x: 752, y: 208 },
  { d: 'M 900 250 L 768 278', side: 'right', dur: 15, x: 768, y: 278 },
  { d: 'M 880 350 L 758 342', side: 'right', dur: 13.5, x: 758, y: 342 },
]

const pillars = [
  { label: 'Unified Semantic Model', tone: 'violet', delay: 0.5 },
  { label: 'AI & Automation Layer', tone: 'blue', delay: 0.62 },
  { label: 'Integration & Workflow', tone: 'teal', delay: 0.74 },
  { label: 'Security & Governance', tone: 'steel', delay: 0.86 },
]

const HeroIllustration = () => {
  const frameRef = useRef(null)
  const [scale, setScale] = useState(1)

  /* Keep the stage exactly as wide as its frame. The frame holds the artwork's
     aspect ratio in CSS, so matching the width matches the height too. */
  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    const fit = () => setScale(frame.clientWidth / STAGE_W)
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(frame)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      className="esHero"
      ref={frameRef}
      role="img"
      aria-label="Entroid at the centre of a constellation of AI products, resting on a unified semantic model, AI and automation, integration and workflow, and security and governance"
    >
      <img src="../dist/Entroid-hero.svg" alt="" width="100%" />
      {/* <div className="esHero__stage" style={{ '--es-hero-scale': scale }} aria-hidden="true">
        <div className="esHero__glow" />

        <div className="esHero__orbit"><div className="esHero__orbitBand" /></div>
        <div className="esHero__ring"><div className="esHero__ringBand" /></div>

        <div className="esHero__pulse" />
        <div className="esHero__pulse esHero__pulse--teal" />

        

        <svg className="esHero__links" viewBox={`0 0 ${STAGE_W} ${STAGE_H}`} width={STAGE_W} height={STAGE_H}>
          <defs>
            <linearGradient id="esHeroLinkLeft" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.72" />
            </linearGradient>
            <linearGradient id="esHeroLinkRight" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#5eead4" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#5eead4" stopOpacity="0.68" />
            </linearGradient>
          </defs>
          {links.map((l) => (
            <path
              key={l.d}
              className="esHero__link"
              d={l.d}
              stroke={`url(#${l.side === 'left' ? 'esHeroLinkLeft' : 'esHeroLinkRight'})`}
              style={{ animationDuration: `${l.dur}s` }}
            />
          ))}
          {links.map((l) => (
            <circle key={`${l.x}-${l.y}`} cx={l.x} cy={l.y} r="3" fill={l.side === 'left' ? '#a78bfa' : '#5eead4'} />
          ))}
        </svg>

        <div className="esHero__beam" />

        <div className="esHero__core">
          <div className="esHero__coreFloat">
            <div className="esHero__sphere">
              <img
                className="esHero__mark"
                src="/logos/entroid-favicon.png"
                width="92"
                height="92"
                alt=""
                aria-hidden="true"
              />
              <div className="esHero__wordmark">Entroid</div>
            </div>
          </div>
        </div>

        {chips.map((c) => (
          <div
            key={c.label}
            className={`esHero__chip esHero__chip--${c.side}`}
            style={{ left: c.left, top: c.top, width: c.width, animationDelay: `${c.delay}s` }}
          >
            <div style={{ animation: `esChipFloat ${c.float}s ease-in-out ${c.floatDelay}s infinite` }}>
              <div className="esHero__chipBody">
                {c.side === 'right' && <span className="esHero__icon">{c.icon}</span>}
                <span className="esHero__chipLabel">{c.label}</span>
                {c.side === 'left' && <span className="esHero__icon">{c.icon}</span>}
              </div>
            </div>
          </div>
        ))}

        <div className="esHero__pillars">
          {pillars.map((p) => (
            <div
              key={p.label}
              className={`esHero__pillar esHero__pillar--${p.tone}`}
              style={{ animationDelay: `${p.delay}s` }}
            >
              <div className="esHero__pillarBody">
                <span className="esHero__icon">check_circle</span>
                <span className="esHero__pillarLabel">{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default HeroIllustration
