'use client'

import '../heroRays.css'

/* ── Hero god rays ───────────────────────────────────────────────
   Light spilling into the hero from a source off the top-left corner.
   See src/heroRays.css for how a beam is drawn; this file only
   describes the fan.

   angle — rotation from straight down. Negative swings the beam toward
           the bottom-right, so the whole fan rakes across the section.
   width — beam thickness in px before blurring
   blur  — how soft the beam is; wider beams are softer, which is what
           keeps the narrow ones reading as the bright shafts
   color — the beam's core colour, feathered to transparent at its edges
   delay — offsets the sway so the fan never moves as one block */
const beams = [
  { angle: -104, width: 250, blur: 68, color: 'rgba(103, 91, 232, .22)', delay: 0 },
  { angle: -94, width: 110, blur: 28, color: 'rgba(103, 91, 232, .42)', delay: -4 },
  { angle: -84, width: 400, blur: 96, color: 'rgba(68, 50, 255, 0.22)', delay: -8 },
  { angle: -76, width: 66, blur: 17, color: 'rgba(214, 234, 255, .62)', delay: -2 },
  { angle: -66, width: 280, blur: 82, color: 'rgba(52, 106, 252, .24)', delay: -11 },
  { angle: -58, width: 120, blur: 32, color: 'rgba(160, 202, 255, .38)', delay: -6 },
  { angle: -46, width: 78, blur: 21, color: 'rgba(198, 224, 255, .36)', delay: -9 },
  { angle: -36, width: 420, blur: 108, color: 'rgba(44, 84, 236, .18)', delay: -17 },
]

const HeroRays = () => (
  <div className="heroRays" aria-hidden="true">
    <div className="heroRays__wash" />
    <div className="heroRays__beams">
      {beams.map((b) => (
        <div
          key={b.angle}
          className="heroRays__beam"
          style={{
            '--beam-angle': `${b.angle}deg`,
            '--beam-color': b.color,
            width: b.width,
            marginLeft: -b.width / 2,
            filter: `blur(${b.blur}px)`,
            transform: `rotate(${b.angle}deg)`,
            animationDelay: `${b.delay}s`,
          }}
        >
          <div className="heroRays__beamBody" />
        </div>
      ))}
    </div>
    <div className="heroRays__source" />
    <div className="heroRays__vignette" />
  </div>
)

export default HeroRays
