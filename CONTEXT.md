# Enterprise Singularity — website-v3 Context & Handoff

> Read this first. It gives another LLM session everything needed to work on **website-v3**
> without re-deriving the project. Scope is website-v3 only (the full designed marketing site).
> Sibling apps (`landing/` = v2, `documentation/` = docs microsite) are mentioned only where relevant.

---

## 1. What this is

**Enterprise Singularity** is an enterprise B2B SaaS platform positioned as a *unified intelligence
layer for governed, autonomous enterprises* — one platform that runs every business function on a
shared semantic core, with governed AI, on-platform engineering, and enterprise-grade governance.

**website-v3** is its premium marketing website: a homepage + a full set of product pages.
Audience is the C-suite (CIO, CTO, CEO, Chief Digital / Strategy Officers, Enterprise Architects,
large-enterprise decision makers). Design is enterprise-grade (think Microsoft / ServiceNow / SAP /
Palantir), content-first (a design team may restyle later).

The source of truth for product copy is the module one-pagers in
`../documentation/src/data/docs.js` (the docs microsite). Those are written in a *docs voice*
(second person, "X, not Y", pain framing) and are **rewritten** into the website voice here.

---

## 2. Tech stack & file map

- React 18 + Vite + **plain CSS** (no framework) + `react-router-dom` v7.
- Content-driven: components are generic and render from data files. Edit copy in data, not components.

```
website-v3/
  src/
    main.jsx        # entry: <BrowserRouter><App/></BrowserRouter>
    App.jsx         # ALL components: Nav/mega-menu, Hero, Section, Visual library, ProductPage, Home, routing
    content.js      # homepage copy: menu + hero + sections[] + finalSection + footer
    products.js     # ALL product-page data (13 pages) + slug helpers
    styles.css      # ALL homepage + product-page styles
    Blog.jsx        # Blog feature (added by a parallel session — leave intact)
    blog.css        # Blog styles (parallel session)
  public/
    architecture.png  # hero diagram (the focal hero image; ~720px, upscaled — a ~1600px export would sharpen it)
  vercel.json       # SPA rewrite so /product/* deep-links don't 404 on deploy
  CONTEXT.md        # this file
```

**Run / verify (never use plain `vite` in bash; use the preview tooling):**
- Dev server is defined in `../.claude/launch.json` under name `website-v3`.
  The port has moved around (5179 → 5182 → 5183) because parallel sessions share the folder.
- Gotcha: adding a new dependency (e.g. react-router-dom) to an **already-running** Vite server
  triggers a transient *"multiple copies of React / Invalid hook call"* error. A **fresh server
  start** fixes it (Vite re-optimizes all deps together).
- Browser-pane capture quirk: screenshots often go blank deep in the page or reset scroll. Verify
  via DOM reads (`document.querySelectorAll`) and force `.reveal { opacity:1 }` before screenshots.
  Set viewport to 1440×900 for desktop layout.

---

## 3. Brand voice (LOCKED — non-negotiable on every line)

1. **No first/second-person pronouns.** Banned: we, our, you, your, us, I. Third person from an
   enterprise perspective ("the enterprise", "the organisation"). "its/it" is fine.
2. **No "X, not Y" construct.** (e.g. never "days, not quarters"). State both halves positively.
3. **No em-dashes / en-dashes.** Use commas or full stops.
4. **No hype words:** revolutionary, game-changing, super, powerful, amazing, best, ultimate, disruptive.
5. **No competitor comparison. No negative pain framing.** State value positively.
6. Executive, business-value-first, short paragraphs.
7. When the user gives an **"essence"** for a section, it is the *idea to prove* in-voice, NOT a
   literal string to paste (e.g. "We adapt for you, not the other way around" became
   "The enterprise keeps its way of working. The platform adapts.").

---

## 4. Homepage (`content.js` + `App.jsx` Home)

Full-bleed layout: nav, hero and every section share the same left/right edges
(`.container { max-width:none; padding:0 clamp(22px,2.2vw,40px) }`). Hero is a **40/60**
text/image grid using `public/architecture.png`.

Sections (data in `content.js` `sections[]`, each rendered by `<Section>`; visual chosen by `visual.type`):

| # | id | Heading essence | Visual |
|---|----|-----------------|--------|
| Hero | — | Unified intelligence layer for governed autonomous enterprises | architecture.png (40/60) |
| 01 | innovate | Innovate. Modernise. Build for the future. | **converge** (new requirement + legacy app → engine → production-ready system) |
| 02 | platform | One enterprise platform. Every function, integrated. | **platform** (foundation stack: functions → shared services → Semantic Ontology) |
| 03 | strategy | Strategy to execution, and everything in between. | **cascade** (strategy pole → stages → execution pole + feedback loop) |
| 04 | ai | Enterprise AI, ready by intelligent agents. | **foundry** (context → AI Foundry modules → AI-ready enterprise) |
| 05 | governance | Production hardened. Built for scale. | **shield** |
| 06 | deployment | Ready for deployment. Proven by metrics. | **proof** (deployment flow band + 4 KPI cards) |
| 07 | adapt | The enterprise keeps its way of working. The platform adapts. | **ecosystem** |
| 08 | ownership | Owned by the enterprise. Free from lock-in. | **layers** |
| Final | — | The Enterprise Journey → governed autonomous enterprise | journey chips |

**Section 06 note:** this is a *merge* of the old "Production Deployment" + "Proven by Numbers".
The old vanity KPIs (100+ modules, 500+ components) were removed. Current KPIs are **illustrative
placeholders** with justification lines, to be set to real figures:
`40% Faster time to production`, `35% Lower total cost of ownership`, `80% Delivery automated`,
`50% Fewer release failures`.

---

## 5. Product pages (`products.js` + `App.jsx` ProductPage)

### Structure model (agreed with the user)
- **Combined groups → ONE page**, each module a dedicated on-page section:
  Intelligence Hub, Corporate Drivers, Trust/Governance & Assurance.
- **Functions & Engineering → ONE page PER SPACE** (each space is itself many modules):
  Functions spaces = Customers, People, Supply Chain, Operations, Finance, PMO, IT & CyberSecurity.
  Engineering spaces = AI Foundry, Engineering Toolkits, Operations Toolkits.
- **13 pages total, ~100 dedicated module sections.** All built and verified.

### Page template (identical for all 13, data-driven)
1. **Hero** — category kicker (`.phero__eyebrow`, NOT a breadcrumb), headline, intro, two CTAs.
2. **Slim value strip** (`.pstrip`) — 4 items, `value` + `label` only (no big heading; deliberately understated).
3. **Dedicated module sections** (`.modsec`) — one per module: number eyebrow (01, 02…), name,
   tagline, summary, and a capabilities panel. Alternating left/right + white/grey.
4. **How-it-works** — heading + text + a `visual` (side-by-side).
5. **Closing CTA** (`.pcta`) — dark band.

Each module object: `{ name, tagline, summary, capabilities: [6 items] }`.

### Routing (`App.jsx`)
- `/` → Home, `/product/:slug` → ProductPage. `ScrollToTop` on route change.
- Mega-menu: combined-group title + items → `/product/<group-slug>`; per-space group items →
  `/product/<slugify(item)>` (group title is a plain label). Helpers in `products.js`:
  `combinedGroups`, `perSpaceGroups`, `productHref`, `slugify`.
- Unknown slug → graceful "in progress" placeholder.
- (Parallel sessions also added `/resources/blogs` and `/industries/:slug`.)

### How-it-works visual per page (diversified, each type ≤3, all a conceptual fit)
- **foundry**: Intelligence Hub, AI Foundry, Engineering Toolkits
- **cascade**: Corporate Drivers, PMO
- **shield**: Trust/Governance & Assurance, IT & CyberSecurity
- **ecosystem**: Customers, Supply Chain
- **flow**: People, Operations
- **layers**: Finance, Operations Toolkits

---

## 6. THE COMPLETE MODULE TAXONOMY

Mega-menu **Product** has 5 groups. Under each, the modules (each = a dedicated section on its page).
Source one-pager keys live in `../documentation/src/data/docs.js` (pattern shown per group).

### Intelligence Hub — `/product/intelligence-hub` (5)  · keys `intelligence-hub-*`
1. **Semantic Ontology** — one connected truth beneath every module (the knowledge graph / AI context layer). THE differentiator.
2. **Command Center** — AI that predicts, explains, decides and acts, closed-loop across every domain.
3. **Sherlock** — automated root-cause analysis → corrective-procedure execution, reusable.
4. **Marketplace** — one catalog of products, AI agents and blueprints; self-serve, governed, subscriptions.
5. **Sentinel** — AI incident detection, investigation and automated remediation.

### Corporate Drivers — `/product/corporate-drivers` (6)  · keys `corporate-drivers-*`
1. **Strategy** — themes and corporate objectives, cascaded board → team.
2. **Business Planning** — multi-year driver-based plan, strategy-linked, bridged to the budget.
3. **Business Portfolios** — business proposals → funded outcomes, value realisation tracked.
4. **OKRs** — objectives and key results, laddered, owned and forecast.
5. **Alliances** — partnerships, JVs, SPVs, investments; health-scored, strategy-attributed.
6. **Committees** — governed direction, oversight and recorded decisions.

### Trust, Governance & Assurance — `/product/trust-governance-assurance` (6)  · keys `trust-governance-and-assurance-*`
1. **Governance** — legal/org structure, ownership, control frameworks (SOX, ISO, GDPR).
2. **Risks** — enterprise risk register, portfolio scoring, heatmaps, KRIs.
3. **Compliance** — regulatory obligations, control testing, attestation, compliance calendar.
4. **Audits** — audit universe, risk-based plan, findings to closure, SOX controls.
5. **Data Governance** — unified catalog, trusted discovery, end-to-end lineage.
6. **Explainability** — governed, recorded, explainable-by-design decisions (human + AI).

### Functions — one page per space (7 pages, 50 modules)

**Customers** — `/product/customers` (10) · keys `customers-*`
CRM · Orders · Subscribers · Plans and Products Catalog · IVR and Contact Center ·
Experience and Care · Campaigns · Surveys and Feedback · Case Management · Channel Partners

**People** — `/product/people` (6) · keys `people-*`
Workforce · Recruitment · Time and Leave · Compensation · Growth · Employee Engagement

**Supply Chain** — `/product/supply-chain` (8) · keys `supply-chain-*`
Procurement · Materials · Vendors · Warehouses · Logistics · Field Force Management ·
Contracts · MRO and Spares

**Operations** — `/product/operations` (9) · keys `operations-*`
Tickets · Incidents · Problems · Change Management · CMDB · Assets Tracker ·
Maintenance · Service Request · Knowledge Center

**Finance** — `/product/finance` (7) · keys `finance-*`
General Ledger · Accounts Payable · Accounts Receivable · Treasury · Assets Management ·
Reconciliations · Statements and Reports

**PMO** — `/product/pmo` (5) · keys `pmo-*`
Programs · Projects · Tasks · Trackers · Meetings

**IT & CyberSecurity** — `/product/it-cybersecurity` (5) · keys `it-and-cybersecurity-*`
Strategy and Governance · Build and Delivery · Infrastructure · Tools and Tech · CyberSecurity

### Engineering — one page per space (3 pages, 33 modules)

**AI Foundry** — `/product/ai-foundry` (11) · keys `ai-foundry-*`
Autonomous Agents · Conversational Agents · Custom Agents · Agent Studio · Flow Orchestrator ·
ML Studio · Forecaster · Anomaly Detector · Vision AI · Prompt Analyzer · Omnis

**Engineering Toolkits** — `/product/engineering-toolkits` (11) · keys `engineering-toolkits-*`
Innovate (idea/doc → production app) · Modernize (legacy → cloud-native, rules preserved) ·
Builders and Modellers · Integration Connectors · Data Ingester · Transformers · Data Insider ·
Business Intelligence · ProcBot · PLC · Platform (admin backbone)

**Operations Toolkits** — `/product/operations-toolkits` (11) · keys `operations-toolkits-*`
FinOps · Service Ops · Cluster Ops · Observability · SIEM and SOAR · DevSecOps · Data Ops ·
AI/ML and Agent Ops · Managed Service Ops · Process Ops · System Alerts

**Totals:** 5 + 6 + 6 (combined) + 50 (Functions) + 33 (Engineering) = **100 product-page module sections**.

> Note: the platform markets "111+ modules". The 100 above are what's split into website sections;
> the docs.js source also has overview/home keys and integrated use-case entries that are not
> separate website sections.

### Other mega-menu items (not product pages)
- **Use Cases** (`/#usecases` anchor), **Why Us** (`/#why` anchor).
- **Industries** dropdown: Telecom, Wind, Renewable, Solar, Wealth, EV, Data Center, IoT,
  Manufacturing, Construction, Oil and Gas, ATM Rollout. (Industries pages exist via a parallel
  session at `/industries/:slug`.)
- **Resources** dropdown: Blogs (`/resources/blogs`), Videos, FAQ, Glossary.

---

## 7. Visual component library (`App.jsx`, dispatched by `<Visual v={...}>`)

| type | shape | data props |
|------|-------|------------|
| `flow` | vertical step chain | `steps[]` |
| `converge` | two inputs → engine → one output (FULL-WIDTH only; used on homepage 01) | `inputs[], engine, engineSub, output, outputTags[]` |
| `platform` | foundation stack (tiles → mid band → base band) | `tiles[], mid, midChips[], base, baseSub` |
| `cascade` | two poles + staged line + side feedback loop | `top, topSub, stages[], bottom, bottomSub, loop` |
| `foundry` | input band → engine core (with module chips) → output band | `input, core, modules[], output, outputSub` |
| `ecosystem` | central hub + orbiting nodes (class `.eco`) | `hub, nodes[]` |
| `shield` | shield graphic with item chips | `items[]` |
| `layers` | stacked rows on a base | `base, stack[]` |
| `proof` | deployment flow band + KPI cards (homepage 06 only) | `flow[], kpis[]` |

**Gotcha:** `.section__body:has(.foundation)` stretches the foundation stack to match card height
(used to balance homepage Section 02). Don't reuse `platform`/`.foundation` in a narrow product
how-it-works column without accounting for this. `converge` needs full width — homepage only.

---

## 8. Key decisions & gotchas (so they aren't re-litigated)

- **Voice conversion, not copy-paste.** docs.js one-pagers are second-person + "X, not Y" + pain
  framing; every website line is rewritten to the locked voice above.
- **Module content is grounded**, adapted from each module's `promise` + `capabilities` in docs.js.
  Summaries are compressions of the source and may warrant light tuning (verified voice-clean).
- **Value metrics are qualitative** on most product pages (e.g. "Board to team", "One ledger") to
  avoid fabricated numbers; homepage Section 06 KPIs are explicit placeholders.
- **Product page refinements the user required:** kicker not breadcrumb; slim value strip not big
  KPI cards; module eyebrow is the number only (no repeated category); each module is a full
  section, not a card.
- **Balance:** side-by-side sections should not leave dead space; match visual height to the cards.
- **Parallel sessions** added a Blog feature and Industries pages in this same app — leave intact.

---

## 9. Status & how to extend

- **Homepage:** complete (hero + 8 sections + final + footer). Section 06 KPI numbers are placeholders.
- **Product pages:** all 13 complete and voice-clean.
- **Open items:** replace `public/architecture.png` with a ~1600px export; set real Section 06 KPI
  figures; wire Use Cases / Why Us / Videos / FAQ / Glossary if those pages are wanted.
- **To edit homepage copy:** `content.js`. **To edit/add a product page:** `products.js`
  (add an entry keyed by slug; it renders through the existing template automatically).
  **Components:** `App.jsx`. **Styles:** `styles.css`.

---

## 10. Session log — work done after the fork

This section narrates the work completed in the session after the fork, workstream by workstream,
with the decisions and their rationale, so the intent behind each change is preserved (not just the
end state). Three workstreams ran: **homepage refinement**, **product-page template hardening**, and
the **Industries pages** (the largest new build). A parallel session ran the **Blog** feature
concurrently in the same app.

### 10.1 Homepage — section-by-section essence and visual rethink

The user drove the homepage one section at a time. For each, they gave an **"essence"** (the idea to
prove, never a literal string) and expected it rendered in the locked voice (§3). Sequence:

- **Alignment + hero ratio.** Sections had a 1200px centered container while the hero was full-bleed,
  so section content sat indented from the hero's edge. Fix: made `.container` full-bleed
  (`max-width:none; padding:0 clamp(22px,2.2vw,40px)`) so nav, hero and every section share the exact
  left/right edges. Hero grid changed **30/60 → 40/60** (text/image). Verified all rows align at 32px.
- **05 Governance, Security & Scale** — essence "production hardened, built for scale". Heading was a
  label restatement; rewritten to **"Production hardened. Built for scale."** Paragraph and cards
  re-pointed at the two ideas (hardening + scale).
- **06 Production Deployment** — user asked to **merge 06 (Deployment) + 07 (Proven by Numbers)**.
  The old vanity KPIs (100+ modules, 500+ components) were removed as meaningless to a CFO. Essence
  **"Ready for deployment. Proven by metrics."** Built a `proof` visual (deployment flow band +
  C-suite KPI cards). KPIs were then reworked twice on feedback: 70→**40% Faster time to production**,
  **35% Lower total cost of ownership** (nudged off 40 to avoid two identical numbers), replaced the
  two "generic" ones (99.9% availability, 3x ROI) with **80% Delivery automated** and **50% Fewer
  release failures**, and every KPI description was rewritten to *justify how the number is earned*
  (mechanism, not restated benefit). Numbers are still **illustrative placeholders**.
  Sections 07/08 renumbered after the merge.
- **07 Enterprise Flexibility** — essence given as "We adapt for you, not the other way around" (which
  breaks the no-pronoun + no-"X, not Y" rules). Rendered in-voice as **"The enterprise keeps its way
  of working. The platform adapts."** — both halves stated positively. This established the standing
  rule: an "essence" is the idea to prove, not copy to paste.
- **08 Ownership & Independence** — essence: no vendor lock-in, IP protected, studio flexibility,
  tailored solutions, independent custom development. Rendered **"Owned by the enterprise. Free from
  lock-in."** with cards mapping each essence point.
- **Final journey** — was text-heavy because the paragraph enumerated the same 8 steps the journey
  chips already show. Cut the paragraph to one line ("One continuous journey of enterprise evolution,
  governed end to end."); the chips carry the sequence.
- **Section 01 visual rethink (the "winner" section).** The old dual **tracks** visual was two parallel
  word-lists whose words echoed the labels ("Modernise → Modernisation → Modern stack"), with no
  payoff. Replaced with a new **converge** visual: two very different starting points (a *new business
  requirement* and an *existing legacy application*) both flow through the Enterprise Singularity engine
  and arrive at one outcome — a production-ready, modern, owned system, live in days. Inputs are
  colour-differentiated (Innovate blue / Modernise green). `converge` is full-width only.
- **Sections 02 & 03 infographics** were rethought earlier in the arc (not just restyled): 02 → the
  **foundation stack** (functions → shared services → Semantic Ontology, showing *why* it's one
  platform); 03 → the **cascade beam** (strategy pole → staged line → execution pole + feedback loop).
- **Section 02 balance fix.** Side-by-side, the foundation stack (~250px) was shorter than the 6-card
  grid (~465px), leaving dead space. Fix scoped with `.section__body:has(.foundation){align-items:stretch}`
  + the two lower bands `flex:1 1 0` so the stack fills the column. Verified both columns = 540px.
- **Copy de-duplication pass.** Removed the Section 01 `callout` (it restated the paragraph). Killed
  "Days, not quarters" (both an "X, not Y" and a third repeat of "in days") → "Production in days".
  Rewrote Section 06 KPIs and three Section 05 cards so cross-section duplicate phrases
  ("production-hardened", "one integrated platform") each appear only in their home section.

### 10.2 Product pages — template refinements required by the user

On top of the structure model in §5, the user required (and these are now the template for all 13
product pages **and** the 12 industry pages, which share one renderer):

- Modules render as **dedicated alternating full-width sections** (`.modsec`: lead copy + capabilities
  panel, alternating left/right and white/grey), **not** small cards.
- Hero uses a plain **category kicker** (`.phero__eyebrow`), **not** a "Home / Product / X" breadcrumb
  (the breadcrumb was called out as meaningless filler).
- Value metrics are a **slim strip** (`.pstrip`, value + label only), **not** the big "Value / Why it
  matters" section with large KPI cards (that was "consuming too much space and catching focus").
- Per-module eyebrow is the **number only** (01, 02…), not "0X · Category" repeated on every module.

**Refactor:** `ProductPage` was split into a shared **`SolutionPage({ p })`** renderer plus thin
`ProductPage` / `IndustryPage` wrappers (each looks up its data map and renders the same template).
`SolutionPage` reads optional `sectionsLabel` / `sectionsHeading` (industries use "Solution areas" /
"<X>, area by area."; products default to "Modules" / "<X>, module by module.").

### 10.3 Industries pages — the main new build (all 12, `/industries/:slug`)

> Correction to §6: the Industries pages were built in **this** session (not a parallel one).

- **Route/data:** `/industries/:slug` → `IndustryPage` → shared `SolutionPage`. Data in
  `src/industries.js` (`industries` map keyed by slug + `industryHref`). Menu dropdown wired via
  `DropPanel` (`menuLabel === 'Industries'` → `/industries/<slugify(name)>`). Unbuilt slug →
  graceful "in progress" placeholder. `vercel.json` SPA rewrite already covers `/industries/*`.
- **Same template** as product pages (hero kicker → slim value strip → dedicated solution-area
  sections → closing CTA). Value strips are **qualitative** (no fabricated numbers).
- **Sourcing (all voice-rewritten from a pain-framed source into the positive locked voice):**
  - **9 verticals** adapted from the `integrated-use-cases-*` one-pagers in `../documentation/src/data/docs.js`
    (Oil & Gas, Telecom, Renewable, IoT, EV, ATM Rollout, Wealth, Construction, Manufacturing).
    Eight were drafted by **parallel subagents** (one per vertical), then reviewed and integrated.
  - **Wind** — no one-pager; sourced from the live app **`wind-rollout-v3.vercel.app`** (JS-rendered,
    so read via the browser pane, not a static fetch). It is "Vayu", a wind command center; solution
    areas = Development pipeline, Sites & turbines, Monitoring & alarms, Maintenance, Digital twin,
    Sustainability.
  - **Solar** — derived from the Renewable one-pager, refocused on PV (parks, inverters, strings,
    irradiance, performance ratio) so it reads distinct from the general Renewable page.
  - **Data Center** — no one-pager and the live app is login-gated. Sourced from the **live app via
    Claude in Chrome** (the user's authenticated session): `apps.visionwaves.com/enterprisesingularity`
    → app-launcher search → **Integrated Use Cases → Data Center** command center. Its own tagline is
    *"Plan, Deliver & Operate. A unified operating system for managing the complete data center
    lifecycle."* Views seen: Command Center / Map / Operations / Topology; estate pulse (network
    health, incidents, alarms, power headroom, delivery SPI), efficiency/cost/resilience (PUE,
    availability, MTTR, opex, carbon, N+1), a Run/Build/Capacity/Connectivity health index, and AI
    insights (diverse-path risk, subnet-exhaustion forecast, GPU/power headroom for the next
    deployment). The live app's **demo numbers were deliberately NOT hardcoded** into the page.

**Industries reference (12, each on the shared template):**

| Industry | slug | Headline essence | Solution areas |
|----------|------|------------------|----------------|
| Oil & Gas | `oil-and-gas` | The whole estate, on one command center | Production & availability · HSE safety & incidents · Asset integrity · Permits & compliance · Work orders & maintenance · Asset-network map & site triage |
| Wind | `wind` | Every wind farm, plan to on-grid | Development pipeline · Sites & turbines · Monitoring & alarms · Maintenance · Digital twin · Sustainability |
| Telecom | `telecom` | Every network site, plan to on-air | Geospatial network map · Activation pipeline · Rollout velocity & bottlenecks · RF coordination & backhaul · Permits & compliance · Operational risk & alarms |
| Renewable | `renewable` | Every renewable plant, planning to on-grid | Plant lifecycle · Construction & commissioning · Portfolio map & capacity · Live generation · Performance ratio |
| Solar | `solar` | Every solar park, planning to on-grid | Development pipeline · Parks & inverters · Monitoring & generation · Performance ratio · Maintenance · Sustainability |
| IoT | `iot` | Every connected device and use case | OT data collection & parsing · Any device type · Use-case dashboards · Config actions · OTA firmware upgrades · Processing queues & telemetry |
| EV | `ev` | The EV charging network, planned to live kWh | Site planning · Rollout funnel · Grid interconnection & DISCOM SLA · Network operations · Throughput, energy & uptime · Charging network map |
| ATM Rollout | `atm-rollout` | Every ATM site, survey to commissioning | Site delivery lifecycle · Work-order delivery · Planned vs actual execution · Delivery by program & region · Delivery velocity · Milestones & completions |
| Wealth | `wealth` | The whole wealth business on one cockpit | Group AUM & client base · Net-flow intelligence · Revenue economics · RM productivity · Client health · Compliance & board reporting |
| Construction | `construction` | The whole capital portfolio, one command center | Earned value · Critical-path & schedule risk · Cashflow & RA billing · Contractual claims & time-bars · HSE, QA & physical progress · AI agent fleet |
| Manufacturing | `manufacturing` | The whole plant, planning through logistics | Live OEE & line board · Production planning & trend · Scrap & first-pass quality · Energy per tonne & emissions · OTIF & logistics · Shop-floor approvals & permits |
| Data Center | `data-center` | Plan, deliver, operate the estate, one command center | Estate command center · Operations · Capacity & power · Change & maintenance · Efficiency, cost & resilience · Map & topology |

**Industries gotchas:** parallel subagents emitted `&amp;` HTML entities in some section names — fixed
to `&` on integration (verify any future agent-generated content for this). To refresh Data Center
content, re-open the live app via Claude in Chrome (authenticated) at the launcher path above.

### 10.4 Blog (parallel session, leave intact)
Resources → Blog at `/resources/blogs` and `/resources/blogs/:slug` (`Blog.jsx`, `blog.css`). ~180
posts (13 primary + ~167 topic, lazy-loaded), re-themed to the site via CSS-variable remap, with a
blog-reading-mode root font fix and a per-space Unsplash hero image map. Built by a parallel session.

### 10.5 Net status after this session
- **Homepage:** complete and refined (hero 40/60 full-bleed; Section 01 converge; 02 balanced;
  06 merged with justified placeholder KPIs; copy de-duplicated). Section 06 KPI numbers are placeholders.
- **Product pages:** all 13 complete on the dedicated-section template.
- **Industries:** all 12 complete on the shared `SolutionPage` template.
- **Blog:** live (parallel session).
- **Open items:** higher-res `architecture.png`; real Section 06 KPI figures; decide whether Data
  Center should show any real live-app metrics (currently qualitative by choice); Use Cases / Why Us /
  Videos / FAQ / Glossary pages if wanted.

---

## 11. Session addendum — work after the fork (continuation session, 2026-08-05)

This section is the complete record of a continuation session (resumed after a context
compaction / "fork"). It complements §1–10 above. Where §10 was authored by the concurrent
session that built Industries and several product pages, the items below were done in THIS
session: the homepage section-essence pass, the product-page template, the full Blog system,
and the Glossary. Some overlap with §10 is intentional (this is a standalone record).

### 11.1 Homepage — section essences & visuals finalised
The boss reviewed the homepage section by section; each section was sharpened to a single
"essence" and, where the infographic was weak, the visual was re-thought (concept-first, not
just restyled). Final state per section:

| # | Section | Essence (heading) | Visual |
|---|---------|-------------------|--------|
| 01 | Innovation & Modernisation | "Innovate. Modernise. Build for the future." | **converge** — two inputs (a new business requirement / a legacy application) flow through the Enterprise Singularity engine into one production-ready system (modern stack · owned · live in days). Replaced the weak dual "tracks" word-lists. |
| 02 | Unified Enterprise Platform | "One enterprise platform. Every function, integrated." | **foundation** stack (function tiles → shared services + chips → Semantic Ontology base). Stretched to match the card-grid height (`:has(.foundation)` + flex-grow) so no dead space. |
| 03 | Alignment | "Strategy to execution, and everything in between." | **cascade** beam (Strategy pole → stages → Execution pole + feedback loop). |
| 04 | AI Foundry | "Enterprise AI, ready by intelligent agents." | **foundry** — Enterprise context → AI Foundry (its agent/model modules) → AI-ready enterprise. |
| 05 | Governance, Security & Scale | "Production hardened. Built for scale." | **shield**. |
| 06 | Production Deployment | "Ready for deployment. Proven by metrics." | **MERGED 06+07.** Deployment flow band (Design→Build→Validate→Deploy→Operate) + 4 C-suite KPIs. |
| 07 | Enterprise Flexibility | "The enterprise keeps its way of working. The platform adapts." | **ecosystem** (One Platform hub). |
| 08 | Ownership & Independence | "Owned by the enterprise. Free from lock-in." | **layers** stack. |
| — | Final journey | "A foundation for autonomous enterprises." | journey chips; de-text-heavied (paragraph no longer re-lists the chips). |

- **Section 06 KPIs (placeholders, need real figures):** 40% Faster time to production · 35% Lower
  total cost of ownership · 80% Delivery automated · 50% Fewer release failures. Each carries a
  one-line justification of *how* the number is earned (mechanism, not restated benefit). Two
  generic KPIs (99.9% availability, 3x ROI) were removed as table-stakes/vague.
- **Hero:** 40/60 text/image split, full-bleed. `.container` made full-bleed globally
  (`max-width:none`, hero-matching side padding) so nav + hero + every section share the same
  left/right edges.
- **Copy de-duplication pass:** removed a Section-01 callout that repeated its paragraph; killed
  the "X, not Y" construct ("Days, not quarters" → "Production in days"); rewrote Section 06 KPI
  text so it stops echoing Sections 01/02/05; reworked Section 05 cards that restated their paragraph.

### 11.2 Product pages — the reusable template
- **Routing:** `react-router-dom`; `main.jsx` wraps `<App/>` in `<BrowserRouter>`; `App` = `<Nav/>`
  + `<Routes>` + `<Footer/>` + `<ScrollToTop/>`. `vercel.json` SPA rewrite so deep links don't 404.
- **Structure model (agreed with boss):** combined groups = one page with a dedicated SECTION per
  module (Intelligence Hub, Corporate Drivers, Trust/Governance & Assurance); per-space groups =
  one page per space (Functions → Customers/People/Supply Chain/Operations/Finance/PMO/IT &
  CyberSecurity; Engineering → AI Foundry/Engineering Toolkits/Operations Toolkits).
- **Template (`ProductPage` in App.jsx):** page hero with a plain **category kicker** (NOT a
  breadcrumb — boss rejected "Home / Product / X" as meaningless) → a **slim value strip**
  (`.pstrip`, value + label only, NOT big KPI cards) → **one dedicated `.modsec` per module**
  (lead copy + capabilities panel, alternating left/right and white/grey; eyebrow is just the
  number, no repeated category) → optional how-it-works visual → dark closing CTA.
- **Content source:** module one-pagers in `documentation/src/data/docs.js`, REWRITTEN into the
  site voice (third person, no we/our/you/your, no "X, not Y").
- **Built in this session:** Intelligence Hub, Corporate Drivers. (Other product pages built by
  the concurrent session — see §10.)
- **Mega-menu:** combined-group titles + items link to `/product/<slug>`; per-space group items
  link to `/product/<space-slug>` (title is a plain label). Helpers in `products.js`
  (`combinedGroups`, `productHref`, `slugify`).

### 11.3 Blog — full system (Resources → Blog)
Routes: `/resources/blogs` (list) and `/resources/blogs/:slug` (post). Files: `Blog.jsx`,
`blog.css`, `data/blogPosts.js` + `data/blog-bodies/*.html` (13 primary), `data/topicPosts.js` +
`data/topic-bodies/*.html` (167 topic), `data/blogImages.js`, `data/blogPool.js`,
`data/titleOverrides.js`.

- **Content — 180 posts:** 13 polished "problem-story" posts ported from the old `website/` app +
  167 topic articles extracted from `blogs/<space>/*.html` (27 spaces). Topic bodies are
  **lazy-loaded** via `import.meta.glob` so the initial bundle stays small.
- **Re-theme = CSS-variable remap:** all bodies share the same classes (fade-in, section-label,
  hook, scene-img-wrap, closing, cta-section). `blog.css` scopes the old theme vars under
  `.blog-article` and only changes their values to the brand palette (`--accent:#3b40d6`, gradients
  to brand/brand-2). One remap re-themes every article.
- **Readability fix:** ported CSS assumed an 18px root; site root is 16px, so a `blog-mode` class
  is toggled on `<html>` by the Blog components (`html.blog-mode { font-size:18px }`), reverting on
  unmount so the rest of the site is untouched. Article column widened to 1080px.
- **Images are LOCAL (boss requirement — no remote loading):** all hero/scene images downloaded to
  `public/blog-assets/<id>.jpg` and every reference rewritten to `/blog-assets/...`. 3 dead
  Unsplash 404s were repointed to valid local assets.
- **Unique images (boss: same image per category "looks odd"):** pool of **61 local photos**
  (`data/blogPool.js`); each topic post gets `POOL[i % 61]` by its index in the category-sorted
  list, so no two adjacent or same-category cards share an image. Trade-off: images are varied,
  not strictly theme-matched per space.
- **Featured ordering:** `FEATURED` slug array surfaces ~12 strongest posts at the top of the "All"
  view.
- **Filter UI:** the 40-chip wall was replaced with a `.blogbar` toolbar (live article count +
  `.blogselect` "Browse by topic" dropdown).
- **Clickbait titles (curated ~20 of 180):** `data/titleOverrides.js` (slug → title), applied as
  `titleOverrides[slug] || p.title`. Contrarian-but-defensible and true to content — NOT tabloid
  (C-suite audience). Originals intact; each is a one-line revert.

### 11.4 Glossary (Resources → Glossary, `/resources/glossary`)
Files: `Glossary.jsx`, `data/glossary.js` (hand-authored), CSS in `blog.css` (`.gloss*`).
- A REAL glossary — **plain-English definitions of terms/concepts**, not module names + marketing
  taglines. (A first attempt generated 105 module names + their one-pager "promises"; the boss
  rejected it — "this is not glossary." Rewritten by hand.)
- **88 terms across 8 sections:** Platform, AI & Agents, Data & Knowledge, Governance/Risk &
  Compliance, Security, Operations, Business & Finance, Enterprise Functions. Mix of platform terms
  (Semantic Ontology, AI Foundry, Sentinel) + industry/AI/gov/ops/finance vocabulary (MTTR, RAG,
  Hallucination, Audit Trail, DevSecOps, OKR, O2C, TCO) — same shape as the reference
  opssingularity.com/glossary.html.
- Categorized (not alphabetical), with a sticky section nav and a live search filter.
- Wired via `dropHref.Glossary` + a route in App.jsx.
- NOTE: `scratchpad/gen-glossary.mjs` (the module-promise generator behind the rejected first
  attempt) is OBSOLETE — edit `data/glossary.js` by hand.

### 11.5 Locked decisions & voice (this session)
- **Brand voice (site):** executive, third person, NO pronouns (we/our/you/your/us/i), no banned
  hype words, no competitor/pain framing, no em-dashes, no "X, not Y". Business value over tech.
- **"Essence" = the idea to prove, in-voice — never literal copy.** When the boss gives a section
  essence (even one using pronouns / "X, not Y"), render its meaning positively in-voice; do not
  paste it and do not lecture about the conflict.
- **Images:** no AI generation for bulk imagery ("167 irrelevant images"); use curated, verified,
  LOCAL web photos. Uniqueness over strict per-category theming.
- **Clickbait titles:** contrarian/defensible, true to the article, applied selectively.

### 11.6 File map (added/changed this session)
- Homepage: `src/content.js` (section essences, merged 06, KPIs, copy de-dup), `src/App.jsx`
  (Converge/Foundry/Proof components; isProof/isStacked; routes; DropPanel dropHref; Blog+Glossary
  imports), `src/styles.css` (full-bleed container, hero 40/60, `.converge`/`.foundry`/`.proof`/
  `.modsec`/`.pstrip`/`.phero`/`:has(.foundation)` fixes).
- Product data: `src/products.js` (intelligence-hub, corporate-drivers; slug helpers).
- Blog: `src/Blog.jsx`, `src/blog.css`, `src/data/blogPosts.js`, `src/data/blog-bodies/`,
  `src/data/topicPosts.js`, `src/data/topic-bodies/`, `src/data/blogImages.js`,
  `src/data/blogPool.js`, `src/data/titleOverrides.js`, `public/blog-assets/` (61 images).
- Glossary: `src/Glossary.jsx`, `src/data/glossary.js`.
- `main.jsx` imports `./blog.css`.

### 11.7 Open items (this session's scope)
- Section 06 KPI numbers are illustrative placeholders — set real figures.
- Higher-res hero `architecture.png` (~1600px).
- 3 Engineering product pages (ai-foundry, engineering-toolkits, operations-toolkits) may still be
  placeholder — confirm against §10 / `products.js`.
- Videos / FAQ Resources pages not built (Blogs + Glossary done).
- Optional: give blog imagery tighter per-space theming (reintroduces some repetition) if variety
  is not preferred.
