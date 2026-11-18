'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

/* ============================================================================
   Homepage sections carried over from entroid V2 (the static V6 site), in the
   V2 theme. Markup and copy follow ../entroid_v2/index.html; styles live in
   src/homeV2.css, scoped under .v2home. Class names that V1 already uses
   globally (hero, section, container, btn, flow, ...) carry a `v2-` prefix so
   the two stylesheets never meet.
   ========================================================================== */

/* Stroke icon sprite, rendered once per page and referenced with <use>. */
export const V2Sprite = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7" /></symbol>
      <symbol id="i-dep-public" viewBox="0 0 24 24"><path className="duo" d="M7 18.5h10.5a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.7-1.3A4.7 4.7 0 0 0 7 18.5z" /><path d="M7 18.5h10.5a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.7-1.3A4.7 4.7 0 0 0 7 18.5z" /></symbol>
      <symbol id="i-dep-private" viewBox="0 0 24 24"><path className="duo" d="M6 16.5h7.5V13a2.5 2.5 0 0 1 .8-1.8 5.4 5.4 0 0 0-9.1-2A4.6 4.6 0 0 0 6 16.5z" /><path d="M11 16.5H6a4.6 4.6 0 0 1-.8-9.2 5.4 5.4 0 0 1 10.4 1.4" /><rect x="13" y="13.5" width="8" height="6.5" rx="1.4" /><path d="M14.8 13.5v-1.6a2.2 2.2 0 0 1 4.4 0v1.6" /></symbol>
      <symbol id="i-dep-sovereign" viewBox="0 0 24 24"><path className="duo" d="M5.5 4.5h12l-2.4 4 2.4 4h-12z" /><path d="M5.5 21V3.5M5.5 4.5h12l-2.4 4 2.4 4h-12" /></symbol>
      <symbol id="i-dep-onprem" viewBox="0 0 24 24"><rect className="duo" x="4.5" y="3" width="15" height="18" rx="1.5" /><rect x="4.5" y="3" width="15" height="18" rx="1.5" /><path d="M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10.5 21v-2.5h3V21" /></symbol>
      <symbol id="i-dep-airgap" viewBox="0 0 24 24"><circle className="duo" cx="12" cy="12" r="9" /><path d="M2.5 8.8a14 14 0 0 1 4.6-2.8M10 5.1a14 14 0 0 1 11.5 3.7M5.4 12.2a9.5 9.5 0 0 1 3.4-2M13.6 10.1a9.5 9.5 0 0 1 5 2.1M8.7 15.6a4.7 4.7 0 0 1 6.6 0M12 19h.01M3.5 3.5l17 17" /></symbol>
      <symbol id="i-trend" viewBox="0 0 24 24"><path d="M4 17l5.5-5.5 4 4L20 9" /><path d="M15 9h5v5" /></symbol>
      <symbol id="i-stopwatch" viewBox="0 0 24 24"><circle className="duo" cx="12" cy="13.5" r="7.5" /><circle cx="12" cy="13.5" r="7.5" /><path d="M12 13.5V9.5M12 13.5l2.8 2M10 2.5h4M12 2.5V6M18.2 6.8l1.4-1.4" /></symbol>
      <symbol id="i-coins" viewBox="0 0 24 24"><ellipse className="duo" cx="9" cy="17.5" rx="6" ry="2.5" /><path d="M3 14.5v3c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-3M3 14.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5S12.3 12 9 12s-6 1.1-6 2.5z" /><circle className="duo" cx="15.5" cy="8.5" r="5.5" /><circle cx="15.5" cy="8.5" r="5.5" /><path d="M17.2 6.6c-.4-.6-1-.9-1.7-.9-1 0-1.8.6-1.8 1.4s.8 1.1 1.8 1.4 1.8.6 1.8 1.4-.8 1.4-1.8 1.4c-.8 0-1.4-.3-1.8-.9M15.5 4.8v1M15.5 11.4v1" /></symbol>
      <symbol id="i-seal" viewBox="0 0 24 24"><circle className="duo" cx="12" cy="9.5" r="6.5" /><circle cx="12" cy="9.5" r="6.5" /><path d="M9.3 9.6l1.8 1.8 3.6-3.6M8.4 14.9 7 21.5l5-2.3 5 2.3-1.4-6.6" /></symbol>
      <symbol id="i-git" viewBox="0 0 24 24"><circle className="duo" cx="6.5" cy="5.5" r="2.5" /><circle className="duo" cx="6.5" cy="18.5" r="2.5" /><circle className="duo" cx="17.5" cy="8" r="2.5" /><circle cx="6.5" cy="5.5" r="2.5" /><circle cx="6.5" cy="18.5" r="2.5" /><circle cx="17.5" cy="8" r="2.5" /><path d="M6.5 8v8M17.5 10.5c0 3.8-4.6 3.6-8.6 6.3" /></symbol>
      <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></symbol>
      <symbol id="i-chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></symbol>
      <symbol id="i-file" viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /></symbol>
      <symbol id="i-orchestrate" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.5" /><circle cx="5" cy="6" r="1.8" /><circle cx="19" cy="6" r="1.8" /><circle cx="5" cy="18" r="1.8" /><circle cx="19" cy="18" r="1.8" /><path d="M6.5 7.2l3.6 3M17.5 7.2l-3.6 3M6.5 16.8l3.6-3M17.5 16.8l-3.6-3" /></symbol>
      <symbol id="i-channels" viewBox="0 0 24 24"><rect x="2.5" y="4.5" width="13" height="10" rx="1.5" /><path d="M6 18.5h6M9 14.5v4" /><rect x="17" y="8.5" width="4.5" height="10" rx="1.2" /></symbol>
      <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z" /><path d="M8.8 12l2.2 2.2 4.2-4.4" /></symbol>
      <symbol id="i-audit" viewBox="0 0 24 24"><path d="M9 3.5h6v2H9z" /><path d="M7.5 4.5H6A1.5 1.5 0 0 0 4.5 6v13.5A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 18 4.5h-1.5" /><path d="M8.5 13l2.3 2.3 4.7-4.8" /></symbol>
      <symbol id="i-pulse" viewBox="0 0 24 24"><path d="M3 12h4l2.5-6 5 12 2.5-6h4" /></symbol>
      <symbol id="i-cloud" viewBox="0 0 24 24"><path d="M7 18.5h10.5a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.7-1.3A4.7 4.7 0 0 0 7 18.5z" /></symbol>
      <symbol id="i-server" viewBox="0 0 24 24"><rect x="3.5" y="4" width="17" height="6.5" rx="1.5" /><rect x="3.5" y="13.5" width="17" height="6.5" rx="1.5" /><path d="M7 7.25h.01M7 16.75h.01" /></symbol>
      <symbol id="i-deploy" viewBox="0 0 24 24"><path d="M12 3l8.5 4.5L12 12 3.5 7.5z" /><path d="M3.5 12L12 16.5 20.5 12" /><path d="M3.5 16.5L12 21l8.5-4.5" /></symbol>
      <symbol id="i-layers" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></symbol>
      <symbol id="i-bot" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16.5h5" /></symbol>
      <symbol id="i-users" viewBox="0 0 24 24"><path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" /><circle cx="10" cy="8" r="3.5" /><path d="M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35M15.5 4.6a3.5 3.5 0 0 1 0 6.8" /></symbol>
      <symbol id="i-scale" viewBox="0 0 24 24"><path d="M12 4v16M7 20h10M5 7h14" /><path d="M5 7l-2.5 6a2.5 2.5 0 0 0 5 0zM19 7l-2.5 6a2.5 2.5 0 0 0 5 0z" /></symbol>
      <symbol id="i-wallet" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M16.5 14.5h.01" /></symbol>
      <symbol id="i-truck" viewBox="0 0 24 24"><rect x="1.5" y="5" width="13" height="11" rx="1" /><path d="M14.5 9h4l3 3v4h-7z" /><circle cx="6" cy="18" r="2" /><circle cx="17.5" cy="18" r="2" /></symbol>
      <symbol id="i-cog" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" /></symbol>
      <symbol id="i-chart" viewBox="0 0 24 24"><path d="M6 20V14M12 20V4M18 20v-9" /></symbol>
      <symbol id="i-megaphone" viewBox="0 0 24 24"><path d="M3.5 10v4h3l7 4.5v-13l-7 4.5z" /><path d="M17 9a4 4 0 0 1 0 6" /></symbol>
      <symbol id="i-flask" viewBox="0 0 24 24"><path d="M9 3h6M10 3v6l-5.5 9.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" /><path d="M7.5 15h9" /></symbol>
      <symbol id="i-blocks" viewBox="0 0 24 24"><rect x="3.5" y="13" width="7" height="7" rx="1" /><rect x="13.5" y="13" width="7" height="7" rx="1" /><rect x="8.5" y="4" width="7" height="7" rx="1" /></symbol>
      <symbol id="i-plug" viewBox="0 0 24 24"><path d="M9 3v5M15 3v5" /><path d="M6 8h12v3a6 6 0 0 1-12 0z" /><path d="M12 17v4" /></symbol>
      <symbol id="i-scatter" viewBox="0 0 24 24"><rect x="3" y="3.5" width="6" height="6" rx="1" /><rect x="15" y="5" width="6" height="6" rx="1" /><rect x="5" y="14.5" width="6" height="6" rx="1" /><rect x="15.5" y="15" width="5" height="5" rx="1" /></symbol>
      <symbol id="i-lock" viewBox="0 0 24 24"><rect x="4.5" y="10.5" width="15" height="10" rx="2" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 14.5v2.5" /></symbol>
      <symbol id="i-key" viewBox="0 0 24 24"><circle cx="8" cy="15" r="4.5" /><path d="M11.2 11.8L20 3M16 7l3 3M14 9l2 2" /></symbol>
      <symbol id="i-unlock" viewBox="0 0 24 24"><rect x="4.5" y="10.5" width="15" height="10" rx="2" /><path d="M8 10.5V7.5a4 4 0 0 1 7.7-1.5M12 14.5v2.5" /></symbol>
      <symbol id="i-plus" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="3" /><path d="M12 8v8M8 12h8" /></symbol>
      <symbol id="i-refresh" viewBox="0 0 24 24"><path d="M20 12a8 8 0 0 1-14.3 4.9M4 12a8 8 0 0 1 14.3-4.9" /><path d="M18.5 3v4.5H14M5.5 21v-4.5H10" /></symbol>
      <symbol id="i-code" viewBox="0 0 24 24"><path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15" /></symbol>
      <symbol id="i-bolt" viewBox="0 0 24 24"><path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11H12z" /></symbol>
      <symbol id="i-chat" viewBox="0 0 24 24"><path d="M4.5 5.5h15a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 3.5V17.5h-1A1.5 1.5 0 0 1 3 16V7a1.5 1.5 0 0 1 1.5-1.5z" /><path d="M7.5 10h9M7.5 13h6" /></symbol>
      <symbol id="i-cube" viewBox="0 0 24 24"><path d="M12 2.8l8.5 4.7v9L12 21.2l-8.5-4.7v-9z" /><path d="M3.5 7.5L12 12.2l8.5-4.7M12 12.2v9" /></symbol>
      <symbol id="i-wrench" viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.1l-5.8 5.8a1.8 1.8 0 0 0 2.5 2.5l5.8-5.8a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.4-.4-.4-2.4z" /></symbol>
      <symbol id="i-flow" viewBox="0 0 24 24"><rect x="2.5" y="9" width="5" height="6" rx="1.2" /><rect x="9.5" y="9" width="5" height="6" rx="1.2" /><rect x="16.5" y="9" width="5" height="6" rx="1.2" /><path d="M7.5 12h2M14.5 12h2" /><path d="M12 9V5.5h7V9" /></symbol>
      <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></symbol>
      <symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></symbol>
  </svg>
)

const Ico = ({ id, ...rest }) => (
  <svg className="v6-ico" aria-hidden="true" {...rest}><use href={`#i-${id}`} /></svg>
)

/* Wraps each V2 block so the scoped stylesheet applies. */
export const V2 = ({ children }) => <div className="v2home">{children}</div>

/* ── Hero: any one of three inputs, the agent army, the business app ── */
const INPUT_LINES = ['M0,15.5 C55,15.5 50,50 100,50', 'M0,50 L100,50', 'M0,84.5 C55,84.5 50,50 100,50']
const ROSTER = [
  ['chat', 'Business Analyst'], ['blocks', 'Architect'], ['code', 'Developer'], ['lock', 'Security'],
  ['flask', 'Validation'], ['scale', 'Governance'], ['deploy', 'DevOps'],
]
const APP_ROWS = [
  ['orchestrate', 'Ontology-based AI orchestration'], ['channels', 'Multi-channel interfaces'],
  ['lock', 'Standards-compliant security'], ['scale', 'Built-in governance'],
  ['pulse', 'AI SRE-enabled operations'], ['cloud', 'Cloud and AI-native'],
]
const TRUST = [
  ['shield', 'SOC 2 Type II-aligned · ISO 27001 · GDPR', 'Security and data protection frameworks'],
  ['users', '10+ enterprises in production', 'Air-gapped, on-prem and cloud deployments'],
  ['audit', 'Trusted intelligence', 'Every decision is explainable and traceable'],
]

export const V2Hero = () => {
  const flowRef = useRef(null)

  /* Aim each input connector at its card's real centre, as V2's main.js did. */
  useEffect(() => {
    const root = flowRef.current
    if (!root) return undefined
    const svg = root.querySelector('.flow-streams svg')
    const cards = root.querySelectorAll('.flow-inputs .inp-card')
    if (!svg || cards.length !== 3) return undefined
    const paths = svg.querySelectorAll('path')
    const pct = (card) => {
      const s = svg.getBoundingClientRect()
      const r = card.getBoundingClientRect()
      if (!s.height) return 50
      return Math.max(0, Math.min(100, ((r.top + r.height / 2) - s.top) / s.height * 100)).toFixed(2)
    }
    const update = () => {
      const y = [...cards].map(pct)
      y.forEach((v, i) => {
        paths[i].setAttribute('d', `M0,${v} C55,${v} 50,50 100,50`)
        paths[i + 3].setAttribute('d', `M0,${v} L6,${v}`)
      })
    }
    update()
    window.addEventListener('resize', update)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <header className="v2-hero">
      <div className="v2-container">
        {/* Everything above the trust strip. It takes the hero's spare height,
            so the trust strip always sits at the very bottom of the hero. */}
        <div className="v2-hero-main">
        <h1>Modernise and Build <em>@&nbsp;AI&nbsp;Speed</em></h1>
        <p className="v2-hero-sub">Turns legacy apps or ideas into a production&#8209;ready enterprise solution</p>
        <ul className="v6-hero-tags" aria-label="Key benefits">
          <li><Ico id="bolt" />Time&#8209;to&#8209;market advantage</li>
          <li><Ico id="cube" />Production&#8209;hardened core</li>
        </ul>
        <Link href="/contact" className="v2-btn btn-primary v6-hero-cta">Talk to us</Link>

        <div
          className="v2-flow"
          ref={flowRef}
          role="img"
          aria-label="A business conversation, a requirements document or a legacy codebase goes to the agent army (business analyst, architect, developer, security, validation, governance and DevOps agents), working through think, build and operate, which delivers a live business app: ontology-based AI orchestration, multi-channel interfaces, standards-compliant security, built-in governance, AI SRE-enabled operations, and cloud and AI-native infrastructure."
        >
          <div className="flow-inputs">
            <div className="inp-card inp-conv">
              <div className="inp-hd"><span className="inp-ico" aria-hidden="true"><Ico id="chat" /></span>Conversations</div>
              <div className="inp-bubble">&ldquo;Build a procurement system with vendor onboarding, multi-level approvals, and spend analytics.&rdquo;</div>
            </div>
            <div className="inp-card inp-doc">
              <div className="inp-hd"><span className="inp-ico" aria-hidden="true"><Ico id="file" /></span>Specifications</div>
              <div className="inp-file">Procurement_Requirements_v2.pdf</div>
              <div className="inp-lines"><div className="inp-line" /><div className="inp-line" /><div className="inp-line" /></div>
            </div>
            <div className="inp-card inp-code">
              <div className="inp-hd"><span className="inp-ico" aria-hidden="true"><Ico id="code" /></span>Legacy code</div>
              <div className="inp-code-snip"><span className="k">public class</span> OrderServiceImpl{'\n    '}<span className="k">extends</span> BaseStrutsAction</div>
            </div>
          </div>

          <div className="flow-arrow" aria-hidden="true">↓</div>
          <div className="flow-streams" aria-hidden="true">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              {INPUT_LINES.map((d) => <path key={d} d={d} stroke="#1c56d8" />)}
              <path className="stub" d="M0,15.5 L6,15.5" stroke="#1c56d8" />
              <path className="stub" d="M0,50 L6,50" stroke="#1c56d8" />
              <path className="stub" d="M0,84.5 L6,84.5" stroke="#1c56d8" />
              <path className="stub" d="M94,50 L100,50" stroke="#1c56d8" />
            </svg>
          </div>

          <div className="flow-core">
            <div className="core-hd">
              <img src="/v2/entroid-mark-v6.svg" alt="" width="26" height="26" />
              <div className="core-hd-name">Agent army</div>
            </div>
            <div className="core-roster">
              {ROSTER.map(([icon, name]) => (
                <div key={name} className="core-row"><Ico id={icon} /><b>{name}</b></div>
              ))}
            </div>
          </div>

          <div className="flow-arrow" aria-hidden="true">↓</div>
          <div className="flow-streams" aria-hidden="true">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 L100,50" stroke="#0a7d5a" />
              <path className="stub" d="M0,50 L6,50" stroke="#0a7d5a" />
              <path className="stub" d="M94,50 L100,50" stroke="#0a7d5a" />
            </svg>
          </div>

          <div className="sys-card">
            <div className="sys-hd">
              <span className="sys-title">Your business app</span>
              <span className="sys-live">LIVE</span>
            </div>
            <div className="sys-rows">
              {APP_ROWS.map(([icon, label]) => (
                <div key={label} className="sys-row"><i><Ico id={icon} /></i><b>{label}</b></div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Full-width band so its top border runs edge to edge; the strip
          inside stays on the content column. */}
      <div className="v2-hero-foot">
        <div className="v2-container">
          <ul className="hero-proof v6-trust" aria-label="Why enterprises trust Entroid">
            {TRUST.map(([icon, title, text]) => (
              <li key={title}><Ico id={icon} /><b>{title}</b><span>{text}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

/* ── Problems: blocked at every stage ── */
const BLOCKERS = [
  ['Start', 'wrench', 'Each new idea starts ', 'from a blank page'],
  ['Modernise', 'server', 'The legacy system ', 'nobody dares to touch'],
  ['Build', 'bot', 'Apps treat AI as ', 'an add‑on, not the core'],
  ['Launch', 'flask', 'AI pilots that impress, then ', 'never reach production'],
  ['Run', 'scatter', 'Tools pile up, and ', 'none of them talk to each other'],
  ['Change', 'lock', 'Every change waits a quarter ', 'in the vendor’s queue'],
]

export const V2Problems = () => {
  const ref = useRef(null)

  /* The blocked path draws itself once, when it scrolls into view. Skipped
     when it is already on screen or motion is reduced, so it never hides. */
  useEffect(() => {
    const root = ref.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!root || reduce || !('IntersectionObserver' in window)) return undefined
    if (root.getBoundingClientRect().top < window.innerHeight * 0.85) return undefined
    root.classList.add('v6-anim')
    let done = 0
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return
      root.classList.add('is-in')
      io.disconnect()
      done = setTimeout(() => root.classList.add('is-done'), 2600)
    }, { threshold: 0.3 })
    io.observe(root)
    return () => { io.disconnect(); clearTimeout(done) }
  }, [])

  return (
    <section className="v2-section section-soft" id="problems" aria-labelledby="problems-h">
      <div className="v2-container">
        <div className="sec-head center">
          <h2 className="sec-h2" id="problems-h">Building an enterprise solution is challenging</h2>
        </div>
        <div className="v6-blocks-wrap" data-blockers ref={ref}>
          <ol className="v6-blocks" role="list" aria-label="Where delivery gets blocked, stage by stage">
            {BLOCKERS.map(([stage, icon, lead, strong], i) => (
              <li key={stage} className="v6-blk" style={{ '--i': i }}>
                <span className="v6-blk-stage">{stage}<span className="v6-sr">: </span></span>
                <div className="v6-blk-tile">
                  <span className="icon-tile"><Ico id={icon} /></span>
                  <span className="v6-blk-t">{lead}<strong>{strong}</strong></span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ── Solution: eight answers around the Entroid hub ── */
const ANSWERS = [
  ['layers', 'Faster start:', 'leading enterprise use cases, already built in'],
  ['refresh', 'Legacy, modernised:', 'moved to a modern cloud‑native stack'],
  ['flow', 'AI‑ready by design:', 'agents work inside the app, not just on top'],
  ['shield', 'Compliant by default:', 'governance, security and ops built in'],
  ['orchestrate', 'One source of truth:', 'a single platform for all your data needs'],
  ['unlock', 'No vendor lock‑in:', 'your team configures and controls the Studio'],
  ['plug', 'Works with what you run:', '2,000+ connectors to existing enterprise applications'],
  ['cloud', 'Deployment flexibility:', 'on‑prem, cloud, air‑gapped, sovereign'],
]

export const V2Solution = () => (
  <section className="v2-section" id="solution" aria-labelledby="solution-h">
    <div className="v2-container">
      <div className="sec-head center">
        <h2 className="sec-h2" id="solution-h">Entroid helps achieve results</h2>
      </div>
      <div className="v6-hub">
        <div className="v6-hub-core"><span className="v6-hub-mark"><img src="/v2/entroid-mark-v6.svg" alt="Entroid" width="44" height="44" /></span></div>
        <ul className="v6-hub-list" role="list">
          {ANSWERS.map(([icon, lead, text]) => (
            <li key={lead} className="v6-hub-item">
              <span className="icon-tile"><Ico id={icon} /></span>
              <span className="v6-sol1-t"><strong>{lead}</strong> {text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

/* ── Impact: faster to ship, cheaper to run, easier to audit ── */
const IMPACT = [
  ['stopwatch', 'From idea to a live', 'system in days'],
  ['coins', 'More budget for the business,', 'less for the build'],
  ['seal', 'Audit-ready from', 'the first release'],
  ['git', 'Zero exit cost:', 'the code is yours'],
]

export const V2Impact = () => (
  <section className="v2-section v6-impact-section" id="impact" aria-labelledby="impact-h">
    <div className="v2-container">
      <div className="sec-head center">
        <h2 className="sec-h2" id="impact-h">
          <span className="v6-nw">Faster to ship.</span> <span className="v6-nw">Cheaper to run.</span> <span className="v6-nw">Easier to audit</span>
        </h2>
      </div>
      <div className="v6-band v6-band-text">
        {IMPACT.map(([icon, a, b]) => (
          <div key={icon} className="v6-band-item">
            <span className="icon-tile it-blue v6-impact-ico"><Ico id={icon} /></span>
            <div className="v6-band-h"><span className="v6-band-l">{a}</span> <span className="v6-band-l">{b}</span></div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/* ── Deployment: from public cloud to air-gapped ── */
const SPECTRUM = [
  ['dep-public', 'Public cloud'], ['dep-private', 'Private cloud'], ['dep-sovereign', 'Sovereign'],
  ['dep-onprem', 'On‑prem'], ['dep-airgap', 'Air‑gapped'],
]
/* Each card: the assurance as its title, and the mechanism behind it as one
   short footer line. */
const ASSURANCES = [
  ['air-gapped', 'server', 'Air‑gapped deployment, AI included', 'Zero data egress · signed offline updates'],
  ['ops-ready', 'pulse', 'Operated by AI SRE from day one', 'Evidence-backed root cause · approved fixes'],
  ['production-hardened', 'shield', 'Production hardened', 'Zero‑trust · runtime protection · vault, WAF, identity'],
]

export const V2Deployment = () => (
  <section className="v2-section section-soft" id="deployment" aria-labelledby="deployment-h">
    <div className="v2-container">
      <div className="sec-head center">
        <h2 className="sec-h2" id="deployment-h"><span className="v6-nw">Deploy anywhere.</span> <span className="v6-nw">Stay compliant</span></h2>
      </div>
      <div className="v6-spec">
        <div className="v6-spec-scale" aria-hidden="true"><span>More control</span></div>
        <ol className="v6-spec-row" role="list" aria-label="Deployment options, from least to most control">
          {SPECTRUM.map(([icon, label], k) => (
            <li key={icon} className="v6-spec-item" style={{ '--k': k }}>
              <span className="v6-spec-ico"><Ico id={icon} /></span><span className="v6-spec-t">{label}</span>
            </li>
          ))}
        </ol>
      </div>
      <ul className="v6-assure" role="list">
        {ASSURANCES.map(([id, icon, title, mechanism]) => (
          <li key={id} className="dep-card" id={id}>
            <span className="icon-tile dep-card__icon"><Ico id={icon} /></span>
            <h3 className="dep-card__title">{title}</h3>
            <p className="dep-card__meta">{mechanism}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

/* ── Modules: use cases already built, by domain ── */
const MODULES = [
  ['users', 'Customer & Revenue', 'Sales, service and accounts'],
  ['scale', 'GRC & Audit', 'Risk, controls and compliance'],
  ['wallet', 'HR & Finance', 'People, payroll and accounting'],
  ['truck', 'Supply Chain', 'Procurement, vendors, inventory'],
  ['cog', 'Operations & PMO', 'Projects, resources, portfolios'],
  ['chart', 'Strategy & Performance', 'Goals, KPIs and scorecards'],
  ['megaphone', 'Marketing & Communications', 'Campaigns, content and brand'],
]

export const V2Modules = () => (
  <section className="v2-section" id="modules" aria-labelledby="modules-h">
    <div className="v2-container">
      <div className="sec-head center">
        <h2 className="sec-h2" id="modules-h"><span className="v6-nw">Go live sooner</span> <span className="v6-nw">with use cases already built</span></h2>
      </div>
      <div className="mod-grid v6-mods">
        {MODULES.map(([icon, name, desc]) => (
          <div key={name} className="mod-card">
            <span className="icon-tile it-blue"><Ico id={icon} /></span>
            <div className="mod-name">{name}</div><div className="v6-mod-desc">{desc}</div>
          </div>
        ))}
        <div className="mod-card v6-mod-note">
          <span className="icon-tile it-blue"><Ico id="blocks" /></span>
          <div className="mod-name">Tailored to your organisation</div><div className="v6-mod-desc">Configured to how you work</div>
        </div>
      </div>
    </div>
  </section>
)
