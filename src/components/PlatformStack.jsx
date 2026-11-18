import { Briefcase, Compass, Cpu, Graph, Sparkle } from '@phosphor-icons/react'
import '../platformStack.css'

/* ============================================================================
   The Entroid platform stack, drawn in HTML from `hero.stack` in content.js.
   It replaces the raster diagram (public/illustration/ill-home-hero.png): the
   text stays crisp at every size, takes the V2 palette, and is read by screen
   readers as the list it is.

   Arrangement: domain, business and technology packs stacked top to bottom,
   shaded light to deep, all resting on governed intelligence: the solid blue
   base bar that applies to every pack. Short connectors join each layer to
   the next; hovering a tier lights the base.
   ========================================================================== */

/* Presentation stays here, keyed by the copy in content.js. */
const TIER_ICONS = { domain: Compass, business: Briefcase, tech: Cpu }
const CORE_ICONS = { 'AI Foundry': Sparkle, 'Semantic Ontology': Graph }

const Flow = ({ flow }) => (
  <span className="pstack__meta">
    {flow[0]}<span className="pstack__arrow" aria-hidden="true"> → </span><span className="pstack__sr"> to </span>{flow[1]}
  </span>
)

/* A card: its name, and its journey where it has one. */
const Card = ({ it }) => (
  <li className={['pstack__card', it.wide && 'pstack__card--wide'].filter(Boolean).join(' ')}>
    <span className="pstack__name">{it.name}</span>
    {it.flow && <Flow flow={it.flow} />}
  </li>
)

const Tier = ({ layer }) => {
  const Glyph = TIER_ICONS[layer.area]
  return (
    <section className={`pstack__layer pstack__layer--${layer.area}`}>
      <h3 className="pstack__title">
        {Glyph && <Glyph className="pstack__tierIcon" weight="bold" aria-hidden="true" />}
        {layer.title}
      </h3>

      {/* Items that apply to every function listed below them: one slim
          row, name and tags on one line. */}
      {layer.across && (
        <ul className="pstack__across">
          {layer.across.map((a) => (
            <li key={a.name} className="pstack__acrossItem">
              <span className="pstack__name">{a.name}</span>
              <span className="pstack__meta">{a.tags}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="pstack__grid">
        {layer.items.map((it) => <Card key={it.name} it={it} />)}
      </ul>
    </section>
  )
}

const Core = ({ layer }) => (
  <section className="pstack__layer pstack__layer--core">
    <h3 className="pstack__title">{layer.title}</h3>
    <ul className="pstack__coreList">
      {layer.items.map((it) => {
        const Glyph = CORE_ICONS[it.name] || Sparkle
        return (
          <li key={it.name} className="pstack__coreCard">
            <span className="pstack__coreIcon"><Glyph weight="regular" aria-hidden="true" /></span>
            <span className="pstack__coreText">
              <span className="pstack__name">{it.name}</span>
              <span className="pstack__meta">{it.text}</span>
            </span>
          </li>
        )
      })}
    </ul>
  </section>
)

export const PlatformStack = ({ layers = [] }) => (
  <figure className="pstack" aria-label="The Entroid platform stack">
    {layers.map((layer) => (
      layer.area === 'core'
        ? <Core key={layer.title} layer={layer} />
        : <Tier key={layer.title} layer={layer} />
    ))}
  </figure>
)

export default PlatformStack
