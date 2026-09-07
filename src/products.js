/**
 * Product page content for website-v3.
 *
 * STRUCTURE (per the agreed model):
 *  - "Combined" groups = ONE page, with a DEDICATED SECTION per module:
 *      Intelligence Hub, Corporate Drivers, Trust/Governance & Assurance.
 *  - "Per-space" groups = ONE page PER SPACE, each space page carrying a
 *    dedicated section per module inside it:
 *      Functions (Customers, People, Supply Chain, Operations, Finance, PMO,
 *      IT & CyberSecurity) and Engineering (AI Foundry, Engineering Toolkits,
 *      Operations Toolkits).
 *
 * Every page is the SAME template: hero -> (optional value band) -> a dedicated
 * section per module -> (optional how-it-works) -> closing CTA.
 *
 * Copy is adapted from the module one-pagers in documentation/src/data/docs.js,
 * rewritten into the website voice: third person, NO pronouns (we/our/you/your),
 * no "X, not Y", no hype words, business value over technical detail.
 */

export const slugify = (s) =>
  s.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

// Groups that render as a single combined page: title -> slug.
export const combinedGroups = {
  'Intelligence Hub': 'intelligence-hub',
  'Corporate Drivers': 'corporate-drivers',
  'Trust, Governance & Assurance': 'trust-governance-assurance',
}

// Groups where each menu item is its own space page (/product/<slugify(item)>).
export const perSpaceGroups = ['Functions', 'Engineering']

// Resolve the route for a mega-menu item, given its group title.
// Combined groups render every module on one page, so the item deep-links to
// its own section (#module-slug). Per-space items are each their own page.
export const productHref = (groupTitle, itemName) =>
  combinedGroups[groupTitle]
    ? `/product/${combinedGroups[groupTitle]}#${slugify(itemName)}`
    : `/product/${slugify(itemName)}`

export const products = {
  'intelligence-hub': {
    slug: 'intelligence-hub',
    category: 'Intelligence Hub',
    eyebrow: 'Product',
    headline: 'One connected truth, and the intelligence to act on it.',
    intro:
      'The Intelligence Hub is the semantic core of the enterprise and the AI that reasons on it. One connected model gives every module the same meaning, and closed-loop intelligence predicts, explains, decides and acts, so enterprise AI is grounded in trusted context.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',

    metrics: [
      { value: 'One model', label: 'Beneath every module' },
      { value: 'AI-ready', label: 'Context for every agent' },
      { value: 'Closed loop', label: 'Predict, explain, decide, act' },
      { value: 'Auto-remediated', label: 'Detect to resolve' },
    ],

    modules: [
      {
        name: 'Semantic Ontology',
        tagline: 'One connected truth beneath every module.',
        summary: 'A shared enterprise model defines objects, relationships and lifecycle once, so every module reads from one connected truth and every AI agent reasons on trusted context.',
        capabilities: ['Enterprise knowledge graph', 'Object and schema modelling', 'Typed relationships', 'Impact analysis and lineage', 'Lifecycle and state control', 'Governed AI context layer'],
      },
      {
        name: 'Command Center',
        tagline: 'AI that predicts, explains, decides and acts, in a closed loop.',
        summary: 'Intelligence spans every domain, from forecasting and scenario building to plain-language answers and autonomous monitoring, closing the loop from insight to action.',
        capabilities: ['Predictive AI and forecasting', 'Generative scenario and model builders', 'Analytical root-cause narratives', 'Conversational, plain-language answers', 'Autonomous round-the-clock monitoring', 'Closed-loop automation across every domain'],
      },
      {
        name: 'Sherlock',
        tagline: 'From root cause to corrective action, automated and reusable.',
        summary: 'Root-cause analysis and the corrective procedures that follow are automated, governed and reusable, so recurring issues are resolved through a proven flow.',
        capabilities: ['Automated root-cause analysis', 'Corrective-procedure flows', 'Build, deploy and execute', 'Recurring, streaming and on-demand', 'Flow and deployment approvals', 'Execution queues at scale'],
      },
      {
        name: 'Marketplace',
        tagline: 'Products, agents and blueprints, self-serve and governed.',
        summary: 'A single catalog lists products, AI agents and solution blueprints with features, pricing and tiers, so capabilities are discovered, subscribed and managed under governed access.',
        capabilities: ['Consolidated offerings catalog', 'AI agents and solution blueprints', 'Features, pricing and tiers', 'Self-serve select and subscribe', 'Subscription and usage management', 'Governed access and billing'],
      },
      {
        name: 'Sentinel',
        tagline: 'Incidents detected, investigated and remediated by AI.',
        summary: 'Signals across the ecosystem are correlated into incidents, investigated for root cause and remediated automatically, so issues are resolved early and tracked to closure.',
        capabilities: ['Cross-ecosystem incident correlation', 'AI investigation and root-cause detection', 'Automated remediation', 'Detect, investigate, analyse, act, resolve', 'MTTD and MTTR with health pulse', 'Severity, aging and module heatmap'],
      },
    ],

    flowHeading: 'Grounded intelligence, in a closed loop.',
    flowText:
      'Enterprise objects, relationships and lifecycle are modelled once in the Semantic Ontology, intelligence reasons on that trusted context, and the loop closes from prediction to action across every domain.',
    visual: {
      type: 'image',
      src: '/illustration/intelligence-hub.png',
      alt: 'The Intelligence Hub: enterprise objects, relationships and lifecycle modelled once, with intelligence reasoning on that context and closing the loop from prediction to action.',
    },

    closing: {
      heading: 'One truth. Intelligence that acts.',
      text: 'The Intelligence Hub grounds enterprise AI in a connected model and closes the loop from insight to action.',
      cta: 'Request a demo',
    },
  },

  'corporate-drivers': {
    slug: 'corporate-drivers',
    category: 'Corporate Drivers',
    eyebrow: 'Product',
    headline: 'Strategy, cascaded from the boardroom to the team.',
    intro:
      'Corporate Drivers connect enterprise strategy to the work that delivers it. Direction is set as themes and objectives, funded through planning and portfolios, cascaded into aligned objectives, and governed by the right decision bodies, so intent set at the top reaches execution on the ground and stays measurable throughout.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',

    metrics: [
      { value: 'Board to team', label: 'One line of sight', text: 'Strategy cascades from board theme to team key result, aligned end to end.' },
      { value: 'Live', label: 'Execution status', text: 'Initiative progress stays current, so strategy is steered continuously through the year.' },
      { value: 'Strategy-linked', label: 'Plans and portfolios', text: 'Plans, budgets and portfolios tie to the strategic themes they are meant to fund.' },
      { value: 'On the record', label: 'Governed decisions', text: 'Direction and oversight are decided by the right body and traceably recorded.' },
    ],

    // Each module renders as its own dedicated section.
    modules: [
      {
        name: 'Strategy',
        tagline: 'From board theme to team result.',
        summary: 'Strategy is framed as themes and corporate objectives with owners and value, then cascaded into aligned objectives so direction reaches every level of the enterprise.',
        capabilities: ['Themes and corporate objectives', 'Owners and value on each objective', 'Cascade from board to business unit to team', 'A live line of sight from theme to result'],
      },
      {
        name: 'Business Planning',
        tagline: 'The long-range plan, linked to strategy and the budget.',
        summary: 'The multi-year financial plan is built driver-based and strategy-linked, versioned and board-approved, and bridged to the annual operating budget.',
        capabilities: ['Multi-year revenue, cost, margin and cash', 'Driver-based, defensible assumptions', 'Version control and board approval', 'Long-range plan bridged to the operating budget'],
      },
      {
        name: 'Business Portfolios',
        tagline: 'From business proposal to funded outcome.',
        summary: 'Business proposals move from idea to funded outcome through distributed planning, with value realisation tracked across the portfolio.',
        capabilities: ['Structured business proposals and cases', 'Distributed planning across business units', 'Portfolio prioritisation and funding', 'Value realisation tracked to outcome'],
      },
      {
        name: 'OKRs',
        tagline: 'Goals that ladder up, aligned and owned.',
        summary: 'Objectives and key results ladder up from the individual to the enterprise, each aligned, owned and honestly forecast.',
        capabilities: ['Objective and key-result mapping', 'Cascade from corporate to teams', 'Ownership on every objective', 'Honest progress and forecast'],
      },
      {
        name: 'Alliances',
        tagline: 'The partnership ecosystem, scored and attributed.',
        summary: 'Strategic partnerships, joint ventures, SPVs and investments are managed as one ecosystem, health-scored and attributed to the strategy each covers.',
        capabilities: ['Partnerships, JVs, SPVs and investments', 'Ecosystem health scoring', 'Strategy coverage and white-space', 'Value attributed to each alliance'],
      },
      {
        name: 'Committees',
        tagline: 'Governed decisions, on the record.',
        summary: 'Direction, oversight and decisions are made by the right governance body and recorded, so accountability is clear and every call is traceable.',
        capabilities: ['Direction and oversight bodies', 'Responsible, recorded decisions', 'Delegation of authority', 'A full decision trail'],
      },
    ],

    flowHeading: 'From direction to delivery, in one line of sight.',
    flowText:
      'Strategy set at the board becomes plans, portfolios and objectives, is delivered through governed execution, and returns as performance and insight that informs the next cycle.',
    visual: {
      type: 'cascade',
      top: 'Board strategy',
      topSub: 'Themes and objectives',
      stages: ['Business planning', 'Portfolios', 'OKRs', 'Committees'],
      bottom: 'Team execution',
      bottomSub: 'Aligned results',
      loop: 'Performance & Insights',
    },

    closing: {
      heading: 'Set the strategy. See it executed.',
      text: 'Corporate Drivers turn direction into aligned, governed execution across the enterprise.',
      cta: 'Request a demo',
    },
  },

  'trust-governance-assurance': {
    slug: 'trust-governance-assurance',
    category: 'Trust, Governance & Assurance',
    eyebrow: 'Product',
    headline: 'Governed by design. Evidenced on demand.',
    intro:
      'Trust, Governance and Assurance establish control across the enterprise. Structure, ownership and frameworks are defined, risk and compliance are scored and evidenced, audit runs to closure, data is catalogued and traceable, and every decision is recorded and explainable, so assurance is built into the platform.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',

    metrics: [
      { value: 'Every entity', label: 'Structure and ownership' },
      { value: 'Portfolio-scored', label: 'Enterprise risk' },
      { value: 'Evidenced', label: 'Controls and compliance' },
      { value: 'Explainable', label: 'Every decision' },
    ],

    modules: [
      {
        name: 'Governance',
        tagline: 'Every entity, its ownership and the frameworks that govern it.',
        summary: 'The legal and organisational structure of the enterprise is modelled with ownership, materiality and the control frameworks that apply, from SOX to ISO to GDPR.',
        capabilities: ['Legal-entity and org structure tree', 'Ownership, tiers and materiality', 'Business units, sites and cost centres', 'Control frameworks (SOX, ISO, GDPR)', 'Multi-tenant and joint ventures', 'Auditor and delegation of authority'],
      },
      {
        name: 'Risks',
        tagline: 'The enterprise risk register, scored as a portfolio.',
        summary: 'Risks are registered, scored on likelihood and impact, adjusted for correlation across the portfolio, heat-mapped and treated through mitigation plans and key risk indicators.',
        capabilities: ['Enterprise risk register', 'Inherent scoring, likelihood and impact', 'Correlation-adjusted portfolio score', 'Risk heatmap and severity tiers', 'Mitigation plans and KRIs', 'Loss events and second-line review'],
      },
      {
        name: 'Compliance',
        tagline: 'Regulatory obligations, owned and control-tested.',
        summary: 'Regulatory obligations are registered and mapped to owners, control-tested with evidence, attested through workflows and tracked on a compliance calendar with a live health score.',
        capabilities: ['Regulatory obligations register', 'Obligation, regulation and owner mapping', 'Control testing and evidence', 'Attestation workflows', 'Deadlines, status and health score', 'Compliance calendar'],
      },
      {
        name: 'Audits',
        tagline: 'A mapped universe, a risk-based plan, findings to closure.',
        summary: 'Internal audit runs on a mapped audit universe and a risk-based plan, through the full engagement lifecycle, with findings and SOX control testing tracked to closure.',
        capabilities: ['Audit universe and risk ranking', 'Risk-based annual audit plan', 'Engagement lifecycle, plan to follow-up', 'Findings and SOX control testing', 'Coverage of high-risk entities', 'Audit metrics and reporting'],
      },
      {
        name: 'Data Governance',
        tagline: 'Data that can be found, trusted and traced.',
        summary: 'One catalog makes data discoverable and trusted, with end-to-end lineage, ownership, quality and certification, classification and access governance.',
        capabilities: ['Unified data catalog', 'Trusted discovery and search', 'End-to-end data lineage', 'Ownership, quality and certification', 'Classification and sensitivity', 'Access policy and governance'],
      },
      {
        name: 'Explainability',
        tagline: 'Every decision governed, recorded and explainable.',
        summary: 'Decisions are recorded with their allow or deny posture, policy is enforced across entities, and an audit chain keeps every action traceable and explainable by design, for people and AI alike.',
        capabilities: ['Governed decision records', 'Policy enforcement across entities', 'Decision activity by entity and module', 'Allow and deny posture and trend', 'Audit chain and integrity monitoring', 'Explainable by design, human and AI'],
      },
    ],

    flowHeading: 'Trust, evidenced end to end.',
    flowText:
      'Structure and frameworks define what is governed, risk and compliance are scored and evidenced, audit assures the controls, data is catalogued and traced, and every decision is recorded and explainable.',
    visual: {
      type: 'image',
      src: '/illustration/trust-governance-%26-assurance.png',
      alt: 'Trust, Governance and Assurance: governance, risk, compliance, audit, data and explainability evidenced end to end.',
    },

    closing: {
      heading: 'Governed. Evidenced. Explainable.',
      text: 'Trust, Governance and Assurance build control and accountability into the enterprise platform.',
      cta: 'Request a demo',
    },
  },

  // ── Functions: one page per space ──────────────────────────────────────────
  finance: {
    slug: 'finance', category: 'Finance', eyebrow: 'Product',
    headline: 'One source of financial truth, from ledger to statement.',
    intro:
      'Finance runs on one live ledger. Postings, payables, receivables, treasury, fixed assets and reconciliation draw from a single source, and statutory statements and management insight are produced on demand, so numbers stay trusted and close runs on schedule.',
    primaryCta: 'Request a demo', secondaryCta: 'Explore Platform',
    metrics: [
      { value: 'One ledger', label: 'Source of financial truth' },
      { value: 'Live', label: 'Trial balance and positions' },
      { value: 'Matched', label: 'Payables and reconciliations' },
      { value: 'On demand', label: 'Statements and reports' },
    ],
    modules: [
      { name: 'General Ledger', tagline: 'One ledger, one source of financial truth.', viz: { type: 'match', inputs: ['Debits', 'Credits'], result: 'Always in balance' }, screen: { tabs: ['Overview', 'Ledger', 'Reports'], kpis: [{ v: 'Balanced', l: 'Trial balance' }, { v: '06', l: 'Open period' }, { v: '1,240', l: 'Journals' }], chart: { type: 'bars', bars: [{ label: 'Assets', v: 82 }, { label: 'Liabilities', v: 64 }, { label: 'Equity', v: 38 }, { label: 'Revenue', v: 71 }, { label: 'Expense', v: 56 }] }, rows: ['Journal JV-4471 posted', 'Period 06 trial balance in balance', 'Ledger exported'] }, summary: 'The general ledger is the single source of financial truth, with a chart of accounts, controlled manual journals, a live trial balance by period and one-click export.', capabilities: ['General ledger and live trial balance', 'Chart of accounts', 'Controlled manual journals', 'Period balances and close', 'AI accounting agents', 'Ledger export and reporting'] },
      { name: 'Accounts Payable', tagline: 'From supplier invoice to payment, matched and approved.', viz: { type: 'flow', steps: ['Invoice', '3-way match', 'Approve', 'Pay'] }, screen: { tabs: ['Overview', 'Invoices', 'Payments'], kpis: [{ v: '312', l: 'Open invoices' }, { v: '98%', l: 'On-time payment' }, { v: '0', l: 'Match exceptions' }], chart: { type: 'trend', points: [28, 40, 52, 61, 74, 88], label: 'Invoices cleared this month' }, rows: ['3-way match cleared: PO-8841', 'Approval routed to controller', 'Payment run scheduled'] }, summary: 'Supplier invoices are captured, three-way matched against purchase order and goods receipt, variance-flagged, approved and tracked to payment, so exceptions are caught and cash outflow stays controlled.', capabilities: ['Supplier invoice capture', 'Three-way matching (PO, receipt, invoice)', 'Variance and exception flags', 'Approval workflow', 'Payment and due tracking', 'AP aging and AI assistant'] },
      { name: 'Accounts Receivable', tagline: 'From customer invoice to cash, aged and collected.', viz: { type: 'bars', bars: [{ label: 'Current', v: 64 }, { label: '1-30', v: 22 }, { label: '31-60', v: 9 }, { label: '61-90+', v: 5 }], caption: 'Aged, then collected' }, screen: { tabs: ['Overview', 'Aging', 'Collections'], kpis: [{ v: '38', l: 'Days sales outstanding' }, { v: '64%', l: 'Current' }, { v: '5%', l: '90+ days' }], chart: { type: 'bars', bars: [{ label: 'Current', v: 64 }, { label: '1-30', v: 22 }, { label: '31-60', v: 9 }, { label: '61-90+', v: 5 }] }, rows: ['Reminder sent to ACME Corp', 'Collection stage advanced', 'Payment received: INV-2290'] }, summary: 'Customer invoices are issued and aged from current to 90-plus days, overdue accounts escalate through staged collections, and status is tracked account by account, so cash comes in faster.', capabilities: ['Customer invoicing', 'AR aging (current to 90+ days)', 'Staged collections and dunning', 'Collection stage tracking', 'Status: open, partial, overdue', 'DSO visibility and AI assistant'] },
      { name: 'Treasury', tagline: 'The whole cash position, consolidated and forecast.', viz: { type: 'hub', center: 'Cash position', nodes: ['Accounts', 'Entities', 'Currencies', 'Facilities'] }, screen: { tabs: ['Overview', 'Positions', 'Forecast'], kpis: [{ v: '12', l: 'Bank accounts' }, { v: '4', l: 'Currencies' }, { v: 'Positive', l: 'Net liquidity' }], chart: { type: 'trend', points: [40, 52, 49, 61, 67, 75], label: 'Rolling cash forecast' }, rows: ['Intercompany funding executed', 'FX positions refreshed', 'Facility headroom updated'] }, summary: 'Cash is consolidated across accounts, entities and currencies, committed facilities and net liquidity are tracked, a rolling forecast is projected, and entities are funded intercompany from one view.', capabilities: ['Consolidated cash position', 'Multi-entity and multi-currency', 'Bank account positioning', 'Committed facilities and headroom', 'Rolling cash forecast', 'Intercompany funding and AI assistant'] },
      { name: 'Assets Management', tagline: 'From capitalization to disposal, depreciated and on the books.', viz: { type: 'trend', points: [82, 68, 56, 44, 33, 21], label: 'Net book value, capitalization to disposal' }, screen: { tabs: ['Overview', 'Register', 'Depreciation'], kpis: [{ v: '2,140', l: 'Assets on register' }, { v: 'WDV', l: 'Method' }, { v: 'Live', l: 'Net book value' }], chart: { type: 'trend', points: [82, 68, 56, 44, 33, 21], label: 'Net book value to disposal' }, rows: ['Depreciation posted to ledger', 'Asset AC-118 disposed', 'Register reconciled to GL'] }, summary: 'The fixed-asset register runs end to end, from capitalization through rule-based depreciation to disposal, posting depreciation straight to the ledger, so the register and the general ledger stay in step.', capabilities: ['Fixed-asset register', 'Capitalization and asset master', 'Depreciation by rule (straight-line, WDV)', 'Live net book value', 'Disposal and asset lifecycle', 'GL-posted journals and AI assistant'] },
      { name: 'Reconciliations', tagline: 'Bank statement and books, matched to zero.', viz: { type: 'match', inputs: ['Bank statement', 'Books'], result: 'Matched to zero' }, screen: { tabs: ['Overview', 'Matching', 'History'], kpis: [{ v: '0.00', l: 'Difference' }, { v: '100%', l: 'Matched' }, { v: '8', l: 'Accounts' }], chart: { type: 'bars', bars: [{ label: 'Matched', v: 96 }, { label: 'Unmatched', v: 4 }] }, rows: ['Bank statement imported', 'Auto-match complete', 'Difference reconciled to zero'] }, summary: 'The bank statement is imported and auto-matched against the books, unmatched lines are surfaced, and outstanding checks, deposits in transit and charges are tracked until the difference is zero.', capabilities: ['Bank statement import', 'Auto-match to the books', 'Unmatched-line workspace', 'Outstanding checks and deposits in transit', 'Bank charges and interest posting', 'Reconciliation history and AI assistant'] },
      { name: 'Statements and Reports', tagline: 'Statutory statements to management insight, off one ledger.', viz: { type: 'stack', items: ['Balance Sheet', 'P&L', 'Cash Flow', 'Trial Balance'], base: 'One live ledger' }, screen: { tabs: ['Overview', 'Statements', 'Reports'], kpis: [{ v: 'On demand', l: 'Statements' }, { v: '4', l: 'Core reports' }, { v: 'Scheduled', l: 'Delivery' }], chart: { type: 'stack', items: ['Balance Sheet', 'P&L', 'Cash Flow', 'Trial Balance'], base: 'One live ledger' }, rows: ['Balance Sheet generated', 'P&L scheduled monthly', 'Board pack exported'] }, summary: 'Statutory statements, the Balance Sheet, P&L, Cash Flow and Trial Balance, and ledger, AP, AR, fixed-asset, bank and management reports are drawn from the live ledger on demand or scheduled.', capabilities: ['Statutory financial statements', 'Balance Sheet, P&L, Cash Flow, Trial Balance', 'Ledger, AP and AR reports', 'Fixed-asset and bank reports', 'Management analytics (budget vs actual, cost and profit centre)', 'Scheduled reports and AI assistant'] },
    ],
    flowHeading: 'Every number, off one ledger.',
    flowText: 'Transactions post to the general ledger, payables, receivables, treasury, assets and reconciliation all draw from that single source, and statements and reports are produced from the same live truth.',
    visual: { type: 'layers', base: 'General Ledger', stack: ['Statements and Reports', 'Treasury and Fixed Assets', 'Payables and Receivables'] },
    closing: { heading: 'One ledger. Every number, trusted.', text: 'Finance runs from posting to statement on a single live source of financial truth.', cta: 'Request a demo' },
  },

  customers: {
    slug: 'customers', category: 'Customers', eyebrow: 'Product',
    headline: 'Every customer, from first touch to lasting loyalty.',
    intro:
      'Customers brings sales, orders, service, subscriptions and marketing onto one platform with a single customer view. Interactions are handled by AI and human agents together, and every stage from acquisition to care to renewal runs on shared context.',
    primaryCta: 'Request a demo', secondaryCta: 'Explore Platform',
    metrics: [
      { value: 'Customer 360', label: 'One view of every customer' },
      { value: 'AI and human', label: 'Every interaction' },
      { value: 'Touch to won', label: 'One pipeline' },
      { value: 'Order to cash', label: 'Tracked end to end' },
    ],
    modules: [
      { name: 'CRM', tagline: 'From first touch to won, one pipeline.', summary: 'Leads are captured and scored, quotes and deals move through pipeline stages, and a single customer 360 view drives forecast and win analytics.', capabilities: ['Lead capture and scoring', 'Quote and proposal management', 'Deal and pipeline stages', 'Customer 360 (B2B and B2C)', 'Forecast and win analytics', 'Sales performance insights'] },
      { name: 'Orders', tagline: 'From order to cash, tracked end to end.', summary: 'The order lifecycle runs from booked to invoiced to paid, with receivables, aging, SLA and credit-risk monitoring in one flow.', capabilities: ['Order lifecycle management', 'Booked, invoiced and paid pipeline', 'Receivables and collections', 'Order aging and DSO', 'SLA-breach monitoring', 'Credit-limit and risk alerts'] },
      { name: 'Subscribers', tagline: 'From provisioning to billing, one subscriber base.', summary: 'Provisioning, subscriptions, usage, billing and channel performance are managed across one subscriber base with revenue and quality analytics.', capabilities: ['Provisioning and activation', 'Subscriptions and offerings (RGU)', 'Usage and revenue analytics', 'Billing and payment information', 'Channel and regional performance', 'CES and network-quality signals'] },
      { name: 'Plans and Products Catalog', tagline: 'One catalog for every product and plan.', summary: 'Products, plans, offerings and bundles are catalogued with versioning, lifecycle, pricing and portfolio performance.', capabilities: ['Product and plan catalog', 'Offerings and bundles', 'Versioning and lifecycle', 'Pricing and commercial offers', 'Subscription and revenue metrics', 'Portfolio performance'] },
      { name: 'IVR and Contact Center', tagline: 'Voice and chat, run by AI and human as one workforce.', summary: 'Voice and chat share one queue, handled by an AI and human agent workforce grounded in knowledge and unified customer context, with quality governance on every interaction.', capabilities: ['AI and human agent workforce', 'Voice (IVR) and chat, one queue', 'Knowledge-base grounding', 'Tools that resolve interactions', 'Unified customer context', 'Quality governance on every interaction'] },
      { name: 'Experience and Care', tagline: 'Support health at a glance, action in a click.', summary: 'A CX health cockpit brings customer 360, case and SLA tracking, issue analytics and at-risk triage together, with one-click case, order or task creation.', capabilities: ['CX health cockpit', 'Customer 360 and information', 'Case and SLA tracking', 'Issue-category analytics', 'At-risk case triage', 'One-click case, order or task'] },
      { name: 'Campaigns', tagline: 'From impression to conversion, one campaign view.', summary: 'Multi-channel campaigns and offers are tracked from impressions and click-through to conversions, with funnel, budget and channel analytics.', capabilities: ['Multi-channel campaigns', 'Offers and marketing initiatives', 'Impressions, CTR and CPC tracking', 'Conversions and funnel analytics', 'Channel budget and cost analysis', 'Source, device and subscriber insight'] },
      { name: 'Surveys and Feedback', tagline: 'From survey to sentiment, one feedback loop.', summary: 'NPS, CSAT and CES surveys are designed, released and collected, with sentiment and loyalty analytics feeding a closed feedback loop to action.', capabilities: ['NPS, CSAT and CES surveys', 'Survey design and release', 'Custom and standard surveys', 'Response collection and rate', 'Sentiment and loyalty analytics', 'Feedback loop to action'] },
      { name: 'Case Management', tagline: 'From complaint to closed, on the clock.', summary: 'Complaints are intake-structured and run through a case lifecycle with priority and SLA triage, response and resolution SLAs, and case analytics.', capabilities: ['Structured complaint intake', 'Case lifecycle and closure', 'Priority and SLA triage', 'Response and resolution SLAs', 'Case analytics and trends', 'Enterprise and retail views'] },
      { name: 'Channel Partners', tagline: 'From onboarding to payout, one partner base.', summary: 'Partners are engaged across their lifecycle with contracts, payments and commissions, and sales, churn and activation analytics attributed by region and partner type.', capabilities: ['Partner engagement lifecycle', 'Partner contracts', 'Payments and commissions', 'Sales and performance analytics', 'Churn, ARPU and activation tracking', 'Region and partner-type attribution'] },
    ],
    flowHeading: 'One customer, one view.',
    flowText: 'Sales, orders, service, subscriptions and marketing share a single customer 360, so every team acts on the same context and every interaction builds on the last.',
    visual: { type: 'ecosystem', hub: 'Customer 360', nodes: ['CRM', 'Orders', 'Subscribers', 'Care', 'Campaigns', 'Partners'] },
    closing: { heading: 'Every customer, one view.', text: 'Customers unifies acquisition, service and loyalty on one platform with a single view of every customer.', cta: 'Request a demo' },
  },

  people: {
    slug: 'people', category: 'People', eyebrow: 'Product',
    headline: 'The workforce, from hire to exit, on one platform.',
    intro:
      'People runs the employee lifecycle end to end. Workforce, recruitment, time and pay, growth and engagement share one employee master, so every stage from hire to exit runs on one clean record.',
    primaryCta: 'Request a demo', secondaryCta: 'Explore Platform',
    metrics: [
      { value: 'One master', label: 'Hire to exit' },
      { value: 'Payroll-ready', label: 'Time and attendance' },
      { value: 'One loop', label: 'Review to growth' },
      { value: 'Self-serve', label: 'The employee day' },
    ],
    modules: [
      { name: 'Workforce', tagline: 'One employee master, from hire to exit.', summary: 'Employee master data, org structure and lifecycle events run on one record, with probation, notice, capacity planning and onboarding and offboarding.', capabilities: ['Employee master data', 'Org structure and hierarchy', 'Lifecycle events (hire to exit)', 'Probation and notice tracking', 'Workforce capacity planning', 'Onboarding and offboarding'] },
      { name: 'Recruitment', tagline: 'From hiring plan to signed offer, one flow.', summary: 'Hiring plans and headcount drive requisitions, sourcing, interview loops and offers, tracked to fill-rate and budget.', capabilities: ['Hiring plans and headcount', 'Requisitions and approvals', 'Sourcing and candidate pipeline', 'Interview loops and scheduling', 'Offer roll-out', 'Fill-rate and budget tracking'] },
      { name: 'Time and Leave', tagline: 'From clock-in to payroll, one clean record.', summary: 'Attendance, shifts, timesheets and leave run on one record with regularization workflows and payroll-ready attendance.', capabilities: ['Clock-in, clock-out and muster', 'Shifts and rosters', 'Timesheets', 'Leave and accruals', 'Regularization workflow', 'Payroll-ready attendance'] },
      { name: 'Compensation', tagline: 'From inputs to disbursal, one payroll run.', summary: 'Gated payroll runs handle statutory filings, variance review, reimbursements, off-cycle and full-and-final, and total rewards.', capabilities: ['Gated payroll runs', 'Statutory filings (TDS, PF, ESIC, PT)', 'Variance review and corrections', 'Travel and expense reimbursement', 'Off-cycle and full-and-final', 'Total rewards'] },
      { name: 'Growth', tagline: 'From review to growth, one talent loop.', summary: 'Performance cycles, goals and OKRs, calibration, learning paths and skill development run as one talent loop.', capabilities: ['Performance review cycles', 'Goals and OKRs', 'Calibration and 9-box', 'Learning paths', 'Skill development', 'Performance plans and AI assists'] },
      { name: 'Employee Engagement', tagline: 'The employee day, self-served in one place.', summary: 'Employee self-service brings leave, attendance, payslips, documents, letters, tasks and policies into one place with an AI helpdesk.', capabilities: ['Employee self-service', 'Leave and attendance', 'Payslips and documents', 'Letters and requests', 'Tasks, goals and policies', 'AI helpdesk'] },
    ],
    flowHeading: 'One record, hire to exit.',
    flowText: 'Recruitment, workforce, time, pay, growth and engagement share one employee master, so the whole lifecycle runs on one clean record.',
    visual: { type: 'flow', steps: ['Hire', 'Onboard', 'Grow', 'Exit'] },
    closing: { heading: 'The workforce, on one record.', text: 'People runs the full employee lifecycle on one shared master, from hire to exit.', cta: 'Request a demo' },
  },

  'supply-chain': {
    slug: 'supply-chain', category: 'Supply Chain', eyebrow: 'Product',
    headline: 'From source to delivery, one connected chain.',
    intro:
      'Supply Chain connects procurement, materials, vendors, warehousing, logistics and field force on one platform. Requisition to payment, dock to dispatch and pickup to delivery run on shared masters, so the chain moves as one.',
    primaryCta: 'Request a demo', secondaryCta: 'Explore Platform',
    metrics: [
      { value: 'Requisition to pay', label: 'One procurement flow' },
      { value: 'One master', label: 'Materials and vendors' },
      { value: 'Dock to dispatch', label: 'Live warehouse flow' },
      { value: 'Pickup to delivery', label: 'Tracked logistics' },
    ],
    modules: [
      { name: 'Procurement', tagline: 'From requisition to payment, one procurement flow.', summary: 'Requisition-to-pay runs with competitive RFx and auctions, purchase orders, invoicing and a supplier collaboration hub, assisted by an AI procurement manager.', capabilities: ['Requisition-to-pay flow', 'RFx and competitive auctions', 'Purchase order management', 'Invoice, acceptance and payment', 'Supplier collaboration hub', 'AI Procurement Manager'] },
      { name: 'Materials', tagline: 'One material master, ready to build and buy.', summary: 'A governed material master holds BOMs, kits and components with procurement-readiness gating, inventory health and supplier and category links.', capabilities: ['Governed material master', 'BOM, kits and components', 'Procurement-readiness gating', 'Inventory and stock health', 'Supplier and category links', 'Warranty and AI insights'] },
      { name: 'Vendors', tagline: 'One vendor master, qualified and shared.', summary: 'Vendors are onboarded and qualified onto one shared master, with RFx, work assignments, contracts, ratings, blacklisting and concentration-risk insight.', capabilities: ['Onboarding and qualification', 'One vendor master, shared', 'RFx and work assignments', 'Vendor contracts and ratings', 'Blacklist and offboarding', 'Concentration and risk insight'] },
      { name: 'Warehouses', tagline: 'From dock to dispatch, one live flow.', summary: 'Inbound receipts and QC, put-away, real-time multi-site inventory, picking, dispatch and returns run on one live flow with OTIF and exception alerts.', capabilities: ['Inbound receipts and QC', 'Put-away and bin/zone control', 'Real-time multi-site inventory', 'Picking, dispatch and carriers', 'Transfers, returns and adjustments', 'OTIF, expiry and exception alerts'] },
      { name: 'Logistics', tagline: 'From pickup to delivery, one tracked flow.', summary: 'Shipments are planned and booked across carriers with live tracking and ETA, proof of delivery, exceptions and returns, and freight cost and SLA analytics.', capabilities: ['Shipment planning and booking', 'Multi-carrier management', 'Live tracking and ETA', 'Proof of delivery (POD)', 'Exceptions and returns (RMA)', 'Freight cost and SLA analytics'] },
      { name: 'Field Force Management', tagline: 'From dispatch to done, on one map.', summary: 'Jobs are scheduled and dispatched by skill and location, with a live agent map, job lifecycle tracking, ratings and workforce capacity.', capabilities: ['Job scheduling and dispatch', 'Skill and location matching', 'Live agent map and status', 'Job lifecycle tracking', 'Agent ratings and performance', 'Workforce capacity and load'] },
      { name: 'Contracts', tagline: 'From proposal to renewal, one governed record.', summary: 'Contracts run from AI proposal generation through redline negotiation and clause libraries to obligation tracking and renewal alerts, with instant retrieval.', capabilities: ['AI proposal generation', 'Redline negotiation and amendments', 'Clause libraries and templates', 'Obligation and commitment tracking', 'Milestone, renewal and expiry alerts', 'Instant contract retrieval'] },
      { name: 'MRO and Spares', tagline: 'Spares on the shelf, machines running.', summary: 'Spares and consumables are catalogued with reorder points and indents, breakdown and preventive work orders, technician scheduling, and AMC contracts.', capabilities: ['Spares and consumables catalog', 'Reorder points and indents', 'Breakdown and preventive work orders', 'Technician load and scheduling', 'Issues, returns and assets', 'AMC contracts and visits'] },
    ],
    flowHeading: 'One connected chain.',
    flowText: 'Procurement, materials, vendors, warehousing, logistics and field force run on shared masters, so demand flows to delivery without the handoffs between systems.',
    visual: { type: 'ecosystem', hub: 'One Supply Chain', nodes: ['Procurement', 'Materials', 'Vendors', 'Warehouses', 'Logistics', 'Field Force'] },
    closing: { heading: 'Source to delivery, connected.', text: 'Supply Chain runs procurement, warehousing, logistics and field force on one connected platform.', cta: 'Request a demo' },
  },

  operations: {
    slug: 'operations', category: 'Operations', eyebrow: 'Product',
    headline: 'Service and operations, from raised to resolved.',
    intro:
      'Operations runs the service and asset estate on one platform. Tickets, incidents, problems, change, configuration, assets, maintenance and knowledge share one view across IT and OT, so issues move from raised to resolved and recurring ones are engineered out.',
    primaryCta: 'Request a demo', secondaryCta: 'Explore Platform',
    metrics: [
      { value: 'Raised to resolved', label: 'On SLA' },
      { value: 'IT and OT', label: 'One view' },
      { value: 'Root cause', label: 'To permanent fix' },
      { value: 'One CI map', label: 'Blast radius included' },
    ],
    modules: [
      { name: 'Tickets', tagline: 'From raised to resolved, on SLA.', summary: 'The ticket lifecycle runs with SLA tracking and breach alerts, priority and aging triage, automated routing, and field and IT tickets in one queue.', capabilities: ['Ticket lifecycle management', 'SLA tracking and breach alerts', 'Priority and aging triage', 'Process automation and routing', 'Resolution and throughput analytics', 'Field and IT tickets, one queue'] },
      { name: 'Incidents', tagline: 'From disruption to restored, minimum downtime.', summary: 'Incidents are triaged by severity and priority with MTTR and SLA tracking, escalation and major-incident handling across IT and OT.', capabilities: ['Incident lifecycle and triage', 'Severity and priority management', 'MTTR and SLA tracking', 'Category and trend analytics', 'Escalation and major-incident handling', 'IT and OT incidents, one view'] },
      { name: 'Problems', tagline: 'From recurring incident to permanent fix.', summary: 'Root-cause analysis links incidents to problems and corrective and preventive actions, with known-error tracking and hotspot analytics.', capabilities: ['Root-cause analysis (RCA)', 'Incident-linked problems', 'Corrective and preventive actions', 'Severity and impact prioritisation', 'Known-error and backlog tracking', 'Trend and hotspot analytics'] },
      { name: 'Change Management', tagline: 'From request to rollout, change under control.', summary: 'Change requests run through CAB approvals, risk and impact assessment, freeze windows and emergency handling, with success-rate analytics.', capabilities: ['Change request lifecycle', 'CAB approvals and workflow', 'Risk and impact assessment', 'Freeze-window enforcement', 'Emergency change handling', 'Success-rate and trend analytics'] },
      { name: 'CMDB', tagline: 'One trusted CI map, blast radius included.', summary: 'Configuration items, service topology and dependencies are mapped with impact analysis, CMDB health and hygiene, across IT and OT.', capabilities: ['Configuration item (CI) inventory', 'Service topology and dependencies', 'Relationship and impact mapping', 'CMDB health and hygiene', 'CI status and environment', 'IT and OT configuration items'] },
      { name: 'Assets Tracker', tagline: 'From buy to retire, one asset register.', summary: 'The asset register tracks ownership, location, utilization, depreciation and warranty across IT and OT enterprise assets.', capabilities: ['Asset register and lifecycle', 'Ownership and location tracking', 'Utilization monitoring', 'Depreciation and asset value', 'Warranty and expiry alerts', 'IT and OT enterprise assets'] },
      { name: 'Maintenance', tagline: 'From schedule to done, maintenance on time.', summary: 'Preventive and corrective maintenance runs with work-order scheduling across lines of business, on-time analytics and AI-assisted decisions.', capabilities: ['Preventive and corrective maintenance', 'Work-order scheduling and tracking', 'Multi-line-of-business O&M', 'On-time and delay analytics', 'AI-assisted decisions', 'Asset uptime and performance'] },
      { name: 'Service Request', tagline: 'From request to fulfilled, one auditable flow.', summary: 'A service request catalog runs standardized fulfilment with approvals, audit trail, SLA tracking and self-service backlog visibility.', capabilities: ['Service request catalog', 'Standardized fulfilment workflows', 'Approvals and audit trail', 'SLA tracking and overdue alerts', 'Category and priority analytics', 'Self-service and backlog visibility'] },
      { name: 'Knowledge Center', tagline: 'One repository for everything the organisation knows.', summary: 'A central repository holds documents and articles in access-controlled spaces, with authoring, AI knowledge search, sharing and usage analytics.', capabilities: ['Central document and article repository', 'Spaces with access controls', 'Authoring and publishing', 'AI knowledge search (Ask AI)', 'Sharing and collaboration', 'Engagement and usage analytics'] },
    ],
    flowHeading: 'Raised to resolved, then engineered out.',
    flowText: 'Tickets and incidents are detected and triaged, resolved against SLA, and recurring ones become problems with permanent fixes, all on one configuration and asset map.',
    visual: { type: 'flow', steps: ['Detect', 'Triage', 'Resolve', 'Prevent'] },
    closing: { heading: 'From raised to resolved.', text: 'Operations runs the service and asset estate on one platform across IT and OT.', cta: 'Request a demo' },
  },

  pmo: {
    slug: 'pmo', category: 'PMO', eyebrow: 'Product',
    headline: 'Programs to tasks, tracked to done.',
    intro:
      'PMO turns strategy into delivery. Programs, projects, tasks, corrective actions and meetings run on one fabric with earned-value and planned-versus-actual tracking, so every commitment is followed through to done.',
    primaryCta: 'Request a demo', secondaryCta: 'Explore Platform',
    metrics: [
      { value: 'Earned value', label: 'Program health' },
      { value: 'Planned vs actual', label: 'Project delivery' },
      { value: 'AI-ranked', label: 'The right task next' },
      { value: 'To verified close', label: 'Corrective actions' },
    ],
    modules: [
      { name: 'Programs', tagline: 'Program performance, financial health and risk, one dashboard.', summary: 'Programs and portfolios are governed on earned value with cost and schedule variance, CPI and SPI indices, forecast to complete, and cross-project risk rollup.', capabilities: ['Program and portfolio dashboard', 'Earned-value management (PV, EV, AC)', 'Cost and schedule variance (CV, SV)', 'CPI and SPI performance indices', 'Forecast to complete (BAC, EAC, ETC, VAC)', 'Risks, issues and cross-project rollup'] },
      { name: 'Projects', tagline: 'Project execution, planned versus actual, over time and across sites.', summary: 'Project execution is tracked planned-versus-actual and time-phased, with starts, completions and milestones, delivery velocity and gap tracking by program and site.', capabilities: ['Project execution dashboard', 'Planned vs actual, time-phased', 'Starts, completions and milestones', 'Delivery velocity and gap tracking', 'By program, site type and project', 'Work-order-based delivery'] },
      { name: 'Tasks', tagline: 'The right task next, AI-ranked and auto-routed.', summary: 'Tasks are created, assigned and delegated with AI priority ranking by risk and due date, auto-delegation and escalation, and meeting-to-task capture.', capabilities: ['Task creation, assignment and delegation', 'Priorities and status tracking', 'Overdue, due-today and at-risk views', 'AI priority ranking (risk and due date)', 'Auto-delegation and escalation', 'Meeting-to-task capture and AI insights'] },
      { name: 'Trackers', tagline: 'From finding to verified fix, tracked to close.', summary: 'Corrective and preventive actions are tracked from finding to verified closure, linked to issues, with at-risk flags and an audit and SOX evidence trail.', capabilities: ['CAPA tracker (corrective and preventive)', 'Findings and issues linkage', 'Assignee, due date and milestones', 'Status: planned, in-progress, verified', 'At-risk and overdue flags', 'Audit and SOX evidence trail'] },
      { name: 'Meetings', tagline: 'From agenda to action, meetings that go somewhere.', summary: 'Meetings run with smart scheduling, agendas and minutes, RSVP and quorum, integrated conferencing, and action items that become tracked tasks.', capabilities: ['Smart scheduling and recurrence', 'Day, week, month and agenda views', 'Agenda and minutes', 'RSVP, roles and quorum tracking', 'Integrated conferencing (Teams, Zoom, Meet, Webex)', 'Action items to tracked tasks and AI summary'] },
    ],
    flowHeading: 'Strategy to done, tracked.',
    flowText: 'Programs govern the portfolio on earned value, projects track planned versus actual, tasks are AI-ranked and routed, and corrective actions and meetings close the loop to done.',
    visual: { type: 'cascade', top: 'Programs', topSub: 'Earned value and risk', stages: ['Projects', 'Tasks', 'Trackers'], bottom: 'Delivered', bottomSub: 'Tracked to done', loop: 'Performance & rollup' },
    closing: { heading: 'Every commitment, tracked to done.', text: 'PMO turns programs and projects into tasks and follow-through on one delivery fabric.', cta: 'Request a demo' },
  },

  'it-cybersecurity': {
    slug: 'it-cybersecurity', category: 'IT & CyberSecurity', eyebrow: 'Product',
    headline: 'IT, plan to secure, on one platform.',
    intro:
      'IT and CyberSecurity runs the whole function on one platform. Investment and governance, build and delivery, infrastructure, service and security share one view, so IT is planned to ROI, delivered through CI/CD, run across clouds and secured in the loop.',
    primaryCta: 'Request a demo', secondaryCta: 'Explore Platform',
    metrics: [
      { value: 'Governed to ROI', label: 'IT investment' },
      { value: 'Plan to production', label: 'Build and delivery' },
      { value: 'One pane', label: 'Multi-cloud estate' },
      { value: 'In the loop', label: 'Security' },
    ],
    modules: [
      { name: 'Strategy and Governance', tagline: 'IT investment governed to ROI, roadmap and architecture in one view.', summary: 'The IT investment portfolio, spend and demand are governed to ROI with roadmap and OKRs, a value-versus-risk map, and architecture standards under ARB governance.', capabilities: ['IT investment portfolio and spend', 'ROI, value delivery and demand', 'Roadmap and OKRs', 'Business value vs investment-risk map', 'Architecture standards and ARB governance', 'AI Portfolio Copilot'] },
      { name: 'Build and Delivery', tagline: 'From plan to production, sprints, releases and RAID on one view.', summary: 'Programs, projects and sprints run with boards, burndown and velocity, RAID and requirements, releases and CI/CD deployments, and capacity-based resourcing.', capabilities: ['Programs, projects and sprints', 'Sprint board, burndown and velocity', 'RAID log and requirements', 'Releases and deployments (CI/CD)', 'Resource allocation vs capacity', 'AI Delivery Copilot'] },
      { name: 'Infrastructure', tagline: 'The cloud estate, one pane across AWS, Azure and GCP.', summary: 'A multi-cloud inventory spans AWS, Azure, GCP and Kubernetes with platform uptime, cloud cost and FinOps, backup, disaster recovery and cloud security posture.', capabilities: ['Multi-cloud inventory (AWS, Azure, GCP, K8s)', 'Platform uptime and availability', 'Cloud cost and FinOps', 'Backup and recovery', 'Disaster recovery and continuity', 'Cloud security posture (CSPM) and AI Copilot'] },
      { name: 'Tools and Tech', tagline: 'The service desk and the tech estate, on one console.', summary: 'ITSM incident, problem, change and request run with SLA management, CMDB and knowledge, software asset management, SaaS FinOps and vendor lifecycle.', capabilities: ['ITSM: incident, problem, change, request', 'SLA management and major-incident bridge', 'CMDB, knowledge and change calendar', 'Software asset management (SAM)', 'SaaS and cloud FinOps', 'Vendor lifecycle and AI Service Copilot'] },
      { name: 'CyberSecurity', tagline: 'Threats detected, access governed, SOC and identity on one platform.', summary: 'Threat detection and alert correlation, vulnerability and patch assessment, and MITRE ATT&CK detection run alongside identity lifecycle, access certification, MFA, SSO and privileged access.', capabilities: ['Threat detection and alert correlation', 'Vulnerability, patch and config assessment', 'MITRE ATT&CK, FIM and malware detection', 'Identity lifecycle (joiner-mover-leaver)', 'Access certification, MFA and SSO', 'Privileged access, SoD and AI copilots'] },
    ],
    flowHeading: 'Plan to secure, in one loop.',
    flowText: 'IT investment is governed to ROI, delivery runs plan to production through CI/CD, infrastructure runs across clouds with FinOps, and security is in the loop from identity to the SOC.',
    visual: { type: 'shield', items: ['Strategy', 'Delivery', 'Infrastructure', 'Service', 'Identity', 'SOC'] },
    closing: { heading: 'The whole of IT, on one platform.', text: 'IT and CyberSecurity runs investment, delivery, infrastructure, service and security on one platform.', cta: 'Request a demo' },
  },

  // ── Engineering: one page per space ────────────────────────────────────────
  'ai-foundry': {
    slug: 'ai-foundry', category: 'AI Foundry', eyebrow: 'Product',
    headline: 'Intelligent agents and models, built, run and governed.',
    intro:
      'AI Foundry is where enterprise AI is built and operated. Agents that decide and act, conversational and custom agents, ML and forecasting models, vision and orchestration are created, deployed and governed as one fleet, grounded in enterprise context.',
    primaryCta: 'Request a demo', secondaryCta: 'Explore Platform',
    metrics: [
      { value: 'Plain English', label: 'Describe it, it builds' },
      { value: 'One fleet', label: 'Agents built and governed' },
      { value: 'Feature to model', label: 'The whole ML lifecycle' },
      { value: 'Closed loop', label: 'Detect, forecast, act' },
    ],
    modules: [
      { name: 'Autonomous Agents', tagline: 'Business processes that run themselves, end to end.', summary: 'Agents make complex decisions, integrate across systems and execute multi-step processes autonomously through domain-specific agentic flows, at parallel scale.', capabilities: ['Autonomous multi-step execution', 'Complex decision trees', 'Cross-system integration', 'Domain-specific agentic flows', 'Parallel execution at scale', 'Completion, cost and time metrics'] },
      { name: 'Conversational Agents', tagline: 'Chat and voice agents that resolve, human-like and low-cost.', summary: 'Chat, voice and flow-driven agents hold natural, context-aware dialogue and complete tasks across channels, built without code and measured on success, cost and reach.', capabilities: ['Chat, voice and flow-driven agents', 'Natural-language, context-aware dialogue', 'Tasks completed end to end', 'Multi-channel deployment', 'Success, cost and reach metrics', 'No-code agent builder'] },
      { name: 'Custom Agents', tagline: 'Describe the automation in plain English, get a governed working agent.', summary: 'Agents are created from a plain-language description, with event monitoring, business rules and custom work instructions, through a governed draft-to-approved lifecycle.', capabilities: ['Natural-language agent creation', 'Described in words, built by the platform', 'Event monitoring and business rules', 'Custom work instructions', 'Governed lifecycle (draft to approved)', 'Manage, edit and export'] },
      { name: 'Agent Studio', tagline: 'Mission control for the AI agent fleet.', summary: 'The whole agent fleet is built, deployed, operated and governed from one console, with fleet-wide success, cost and reach and operational governance at scale.', capabilities: ['Build, deploy and operate agents', 'Chat, voice and flow-driven agents', 'Fleet-wide success, cost and reach', 'One operational console', 'Operational governance at scale', 'Generative-AI management for the organisation'] },
      { name: 'Flow Orchestrator', tagline: 'Multi-agent workflows, modelled visually and orchestrated end to end.', summary: 'A visual modeler orchestrates multiple agents and connected processors for data, AI and integration into end-to-end automated flows, versioned and reusable.', capabilities: ['Visual workflow modeler', 'Multi-agent orchestration', 'Connected processors (data, AI, integration)', 'End-to-end automated execution', 'Versioning and lifecycle (new to approved)', 'Reusable, shareable flows'] },
      { name: 'ML Studio', tagline: 'From feature to production model, the whole ML lifecycle.', summary: 'One studio runs projects, datasets and experiments, feature engineering, notebooks and AutoML, with one-click deployment and live model monitoring.', capabilities: ['Projects, datasets and experiments', 'Feature engineering and pipelines', 'Notebooks and AutoML', 'Experiment tracking', 'One-click model deployment (API)', 'Live monitoring (latency, health, volume)'] },
      { name: 'Forecaster', tagline: 'Time-series forecasting for any metric, accuracy tracked.', summary: 'Forecasting projects auto-select the best algorithm across ingested sources, tracking forecast metrics and accuracy through guided, no-code wizards.', capabilities: ['Time-series forecasting projects', 'AutoML algorithm selection (ARIMA, Prophet)', 'Multi-source data ingestion (CSV, DB, API)', 'Forecast metrics and KPIs', 'Accuracy tracking (weighted MAPE)', 'Guided wizards, no code'] },
      { name: 'Anomaly Detector', tagline: 'Anomalies caught the moment they appear.', summary: 'Metrics are monitored continuously against learned baselines, with alerts, anomaly forecasts and automated actions, triaged system-wide.', capabilities: ['Automatic anomaly detection', 'Continuous metric monitoring', 'Learned baselines (no manual thresholds)', 'Alerts and anomaly forecasts', 'Automated actions on anomalies', 'System-wide triage and watchlist'] },
      { name: 'Vision AI', tagline: 'Images and video into structured data, built as flows.', summary: 'Vision processors for object, text, face and motion compose into no-code visual flows over images and video streams, deployed in real time.', capabilities: ['Vision processors (object, text, face, motion)', 'Annotators for human-readable overlays', 'Visual flows (no-code composition)', 'Image and video-stream processing', 'Real-time deployment', 'Component playbook (48 components)'] },
      { name: 'Prompt Analyzer', tagline: 'Prompts as strategic assets, tested and certified.', summary: 'A central prompt library tests, certifies and versions prompts with success-rate and execution metrics, keeping quality consistent across agents and flows.', capabilities: ['Central prompt library', 'Prompt testing and certification', 'Release management and versioning', 'Success-rate and execution metrics', 'Consistency and quality control', 'Linked to agents and agentic flows'] },
      { name: 'Omnis', tagline: 'An AI researcher that works the long task and delivers the report.', summary: 'Goal-driven research runs long-horizon, multi-step tasks across enterprise data, cross-referencing and reasoning to report-grade deliverables, with resumable history.', capabilities: ['Goal-driven AI research', 'Long-horizon, multi-step tasks', 'Integrated across enterprise data', 'Cross-referencing and reasoning', 'Report-grade deliverables', 'Task history and resumption'] },
    ],
    flowHeading: 'From build to production, one fleet.',
    flowText: 'Agents and models are built from enterprise context, orchestrated into flows, deployed and governed from one console, and measured on success, cost and accuracy in production.',
    visual: { type: 'foundry', input: 'Enterprise context · data', core: 'AI Foundry', modules: ['Autonomous Agents', 'Conversational Agents', 'ML Studio', 'Forecaster', 'Vision AI', 'Flow Orchestrator'], output: 'Agents and models in production', outputSub: 'Built, run and governed as one fleet' },
    closing: { heading: 'Enterprise AI, built to run.', text: 'AI Foundry builds, runs and governs the agents and models that make the enterprise intelligent.', cta: 'Request a demo' },
  },

  'engineering-toolkits': {
    slug: 'engineering-toolkits', category: 'Engineering Toolkits', eyebrow: 'Product',
    headline: 'Build new, modernise old, without leaving the platform.',
    intro:
      'Engineering Toolkits turn requirements into running systems. New applications are generated from an idea, legacy systems are modernised with their rules preserved, and builders, integration, data pipelines and analytics are all created on-platform and governed.',
    primaryCta: 'Request a demo', secondaryCta: 'Explore Platform',
    metrics: [
      { value: 'Idea to app', label: 'Complete and production-ready' },
      { value: 'Legacy to modern', label: 'Business rules preserved' },
      { value: 'No-code', label: 'Builders and integration' },
      { value: 'Any source', label: 'Data pipelines and BI' },
    ],
    modules: [
      { name: 'Innovate', tagline: 'An idea, a conversation or a document, into a production-ready app.', summary: 'A complete, production-ready enterprise application is generated from an idea, conversation or document, with data model, workflows and UI, on-platform, governed and data-connected.', capabilities: ['Idea, conversation or document to app', 'Complete, production-ready applications', 'Data model, workflows and UI generated', 'On-platform, governed and data-connected', 'Delivered in minutes', 'Reusable app gallery'] },
      { name: 'Modernize', tagline: 'Legacy code into a modern, cloud-native app, every rule preserved.', summary: 'Legacy code is reverse-engineered, business rules are extracted, and the system is rebuilt cloud-native on a modern stack with documentation auto-generated.', capabilities: ['Legacy code reverse-engineering', 'Auto-generated HLD, LLD and API docs', 'Business-rule extraction', 'Modern, cloud-native rebuild', 'Any stack (Java, .NET, Ruby, Node, Python)', 'Rule-preserving migration'] },
      { name: 'Builders and Modellers', tagline: 'Tailor the platform without code, and see how it runs.', summary: 'No-code builders and modelers design workflows, forms and models and tailor platform features, with execution intelligence, bottleneck detection and upgrade-safe changes.', capabilities: ['No-code builders and modelers', 'Workflow, form and model design', 'Tailor platform features and services', 'Execution intelligence (conformance, variants)', 'Bottleneck detection and heatmaps', 'On-platform, upgrade-safe'] },
      { name: 'Integration Connectors', tagline: 'One integration layer to connect the whole stack, without glue code.', summary: 'Pre-built connectors and a secure integration builder connect enterprise and third-party systems through one governed, central layer, with reusable connections and monitoring.', capabilities: ['Pre-built system connectors', 'Secure, scalable integration builder', 'Enterprise and third-party systems', 'Governed, central integration layer', 'Reusable connections', 'Monitoring and error handling'] },
      { name: 'Data Ingester', tagline: 'Describe the pipeline, ingest any source at scale.', summary: 'AI-built ETL and log-based CDC pipelines intake big data from diverse sources through a source-to-destination builder, with orchestration and plain-language run summaries.', capabilities: ['AI-built ETL pipelines', 'CDC (log-based) sync', 'Big-data intake from diverse sources', 'Source-to-destination flow builder', 'Orchestration and cluster planning', 'Plain-language run summaries'] },
      { name: 'Transformers', tagline: 'Raw data into ready data, transformed at scale.', summary: 'Big-data transformations cleanse, join, aggregate and reshape data, persisting to queryable stores as a pipeline-native, scale-out and governed step.', capabilities: ['Big-data transformations', 'Cleanse, join, aggregate and reshape', 'Persistence to queryable stores', 'Pipeline-native (with ingestion)', 'Scale-out processing', 'Governed, reusable transforms'] },
      { name: 'Data Insider', tagline: 'Data as a product, governed APIs and plain-English queries.', summary: 'Data pools become governed APIs served to apps and AI agents, with plain-language queries, API operations and monitoring, and MCP orchestration for agents.', capabilities: ['Data-as-API framework', 'Governed API builder from data pools', 'Talk-to-data (plain-language queries)', 'API Ops (health, latency, usage)', 'MCP orchestration for AI agents', 'API monitoring (P95, P99, volume)'] },
      { name: 'Business Intelligence', tagline: 'Describe it, and AI builds the datasets, dashboards and reports.', summary: 'AI agents build datasets, widgets, dashboards and scheduled narrative reports from plain language, with metric governance so every number agrees.', capabilities: ['AI agents for datasets, widgets and dashboards', 'Plain-language build and compose', 'Scheduled narrative reports', 'Metric governance (one KPI definition)', 'Anomaly watch and insight digest', 'Governed sharing and review'] },
      { name: 'ProcBot', tagline: 'SoPs and MoPs as governed automation, run across the estate.', summary: 'Standard and maintenance operating procedures become reusable automation scripts, executed across systems on schedule with approval-gated governance and SLA monitoring.', capabilities: ['Reusable SoP and MoP automation scripts', 'Distributed execution across systems', 'Recurring, on-demand and one-time scheduling', 'Approval-gated governance', 'Execution monitoring and SLAs', 'SRE and NRE enablement'] },
      { name: 'PLC', tagline: 'The whole product lifecycle, requirement to release.', summary: 'Products, modules and requirements are tracked requirement-to-release with sprints, velocity, defects and release readiness, as agile product development in one view.', capabilities: ['Products, modules and requirements', 'Requirement-to-release traceability', 'Sprints and velocity', 'Defects and quality tracking', 'Release readiness', 'Agile PDLC in one view'] },
      { name: 'Platform', tagline: 'One admin backbone for every module.', summary: 'Roles, hierarchy and organisational structure are configured once and shared across every module, with reporting chains, role assignment and central configuration.', capabilities: ['Organisational roles and hierarchy', 'Divisions and departments', 'Reporting chain (any depth)', 'Shared admin across modules', 'Role-to-user assignment', 'Central configuration'] },
    ],
    flowHeading: 'From requirement to running system.',
    flowText: 'New applications are generated from an idea, legacy systems are modernised with rules preserved, and integration, data pipelines and analytics are built on-platform and governed.',
    visual: { type: 'foundry', input: 'Idea · legacy · data', core: 'Engineering Toolkits', modules: ['Innovate', 'Modernize', 'Builders', 'Integration', 'Data Pipelines', 'BI'], output: 'Running, governed systems', outputSub: 'Built new, modernised, integrated and analysed' },
    closing: { heading: 'Build anything, on one platform.', text: 'Engineering Toolkits build, modernise, integrate and analyse without leaving the platform.', cta: 'Request a demo' },
  },

  'operations-toolkits': {
    slug: 'operations-toolkits', category: 'Operations Toolkits', eyebrow: 'Product',
    headline: 'Operate and secure the whole estate.',
    intro:
      'Operations Toolkits run and secure the platform estate. Cost, service, cluster and data operations, observability, security operations and DevSecOps share one control surface, so the estate is watched, optimised, secured and kept to SLA.',
    primaryCta: 'Request a demo', secondaryCta: 'Explore Platform',
    metrics: [
      { value: 'Before the invoice', label: 'Cloud cost intelligence' },
      { value: 'Petabyte scale', label: 'Observability' },
      { value: 'Detect and respond', label: 'Security operations' },
      { value: 'One loop', label: 'Security and delivery' },
    ],
    modules: [
      { name: 'FinOps', tagline: 'Cost intelligence before the invoice.', summary: 'Multi-cloud cost across AWS, Azure and GCP is rightsized by AI, with anomaly detection, budgets, ML forecasting and daily run-rate projection.', capabilities: ['Multi-cloud cost (AWS, Azure, GCP)', 'AI rightsizing', 'Anomaly detection', 'Budgets and alerts', 'ML forecasting', 'Daily run-rate and projection'] },
      { name: 'Service Ops', tagline: 'End-to-end service observability, unified.', summary: 'Service health and Apdex, dependency topology and blast radius, distributed tracing and log analytics are correlated with ML-powered insights.', capabilities: ['Service health and Apdex', 'Dependency topology and blast radius', 'Distributed tracing', 'Log analytics', 'ML-powered insights', 'Trace-to-log correlation'] },
      { name: 'Cluster Ops', tagline: 'Healthy clusters at enterprise scale.', summary: 'Nodes, namespaces, workloads and autoscaling, config and secrets, storage, network and RBAC are managed with rolled-up health and rightsizing.', capabilities: ['Nodes and namespaces', 'Workloads and autoscaling', 'Config and secrets', 'Storage and PVCs', 'Network and RBAC', 'Rolled-up health and rightsizing'] },
      { name: 'Observability', tagline: 'See everything, at petabyte scale.', summary: 'OpenTelemetry-native collection correlates logs, metrics and traces at petabyte scale, with a dashboard builder, controlled retention and open, governed deployment.', capabilities: ['OpenTelemetry-native collection', 'Logs, metrics and traces, correlated', 'Petabyte-scale storage', 'Dashboard builder', 'Open and governed (on-prem, air-gapped)', 'Retention control'] },
      { name: 'SIEM and SOAR', tagline: 'Detect the threat, respond automatically.', summary: 'Threat detection and hunting map to MITRE ATT&CK, with vulnerability and malware assessment, file-integrity monitoring, SOAR playbooks and continuous compliance evidence.', capabilities: ['Threat detection and hunting', 'MITRE ATT&CK mapping', 'Vulnerability and malware assessment', 'File-integrity monitoring', 'SOAR automation playbooks', 'Continuous compliance evidence'] },
      { name: 'DevSecOps', tagline: 'Security and delivery, in one loop.', summary: 'Shift-left scanning, software supply chain and SBOM, change and risk gates, GitOps delivery, release trains and artifact signing run as one secure delivery loop.', capabilities: ['Shift-left scanning (SCA, SAST, secrets, IaC)', 'Software supply chain and SBOM', 'Change and risk gates', 'GitOps delivery', 'Release trains', 'Artifact signing and provenance'] },
      { name: 'Data Ops', tagline: 'Every data pipeline, watched and optimised.', summary: 'Ingestion and CDC, batch and streaming pipelines are capacity-forecast and AI-optimised, with SMART governance and end-to-end lineage.', capabilities: ['Ingestion and CDC', 'Batch and streaming', 'Capacity forecasting', 'AI optimization', 'SMART governance', 'End-to-end lineage'] },
      { name: 'AI, ML and Agent Ops', tagline: 'Every model and agent, healthy in production.', summary: 'Agent and model telemetry, quality and feedback, cost per agent and model, knowledge grounding and governed access keep AI healthy in production, integrated with Agent Studio.', capabilities: ['Agent and model telemetry', 'Quality and feedback', 'Cost per agent and model', 'Knowledge grounding', 'Governed access (RBAC)', 'Agent Studio integration'] },
      { name: 'Managed Service Ops', tagline: 'The managed estate, under one control surface.', summary: 'Incident command, blast-radius impact ranking, service topology, SLA and error budgets and what-if failure simulation run over a governed, operator-confirmed map.', capabilities: ['Incident command', 'Blast-radius impact ranking', 'Service topology and dependency graph', 'SLA and error budgets', 'What-if failure simulation', 'Governed, operator-confirmed mapping'] },
      { name: 'Process Ops', tagline: 'See how work really flows.', summary: 'A live process pulse and process mining surface bottlenecks and predict SLA breaches across systems end to end, with case timeline replay.', capabilities: ['Live process pulse', 'Process mining', 'Bottleneck discovery', 'SLA breach prediction', 'Cross-system, end-to-end', 'Case timeline replay'] },
      { name: 'System Alerts', tagline: 'Every alert in one inbox, triaged to SLA.', summary: 'A unified alert inbox breaks alerts down by severity, tracks aging and acknowledgement, and routes notifications automatically with resolution and SLA compliance.', capabilities: ['Unified alert inbox', 'Severity breakdown (critical to low)', 'Alert aging and acknowledgement', 'Resolution and SLA compliance', 'Automated notification routing', 'Alert trend and closed-alert insight'] },
    ],
    flowHeading: 'Watched, optimised, secured.',
    flowText: 'Cost, service, cluster and data operations are observed and optimised, security operations and DevSecOps secure the estate, and alerts and incidents are resolved to SLA.',
    visual: { type: 'layers', base: 'One control surface', stack: ['Security and compliance ops', 'Service and cluster ops', 'Cost and data ops'] },
    closing: { heading: 'The estate, operated and secured.', text: 'Operations Toolkits run, optimise and secure the whole platform estate from one control surface.', cta: 'Request a demo' },
  },
}
