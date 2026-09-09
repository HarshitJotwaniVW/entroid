/**
 * Entroid — homepage content (website-v3).
 * ALL copy lives here; components are generic and render this data.
 *
 * BRAND VOICE (locked): executive, strategic, credible, enterprise-grade.
 * Third person only — NO we/our/you/your/us/i. No banned words (revolutionary,
 * game-changing, super, powerful, amazing, best, ultimate, disruptive). No
 * competitor comparison. No negative "pain point" framing. No em-dashes.
 * Business value over technical implementation. Each section stays inside its
 * own scope (no cross-topic bleed), per the brief.
 *
 * Numbers in the "Proven" section are illustrative placeholders to be set to
 * real figures.
 */

export const brand = { name: 'Entroid' }
export const navCta = 'Book a demo'

export const menu = [
  { label: 'Home', href: '#top' },
  {
    label: 'Product',
    mega: [
      {
        title: 'Intelligence Hub',
        items: [
          { name: 'Semantic Ontology', desc: 'Domain classes, properties, life cycle, relationships and configs' },
          { name: 'Command Center', desc: 'AI insights with an integrated approach to closed-loop automation' },
          { name: 'Sherlock', desc: 'Auto root cause analysis and corrective procedure execution' },
          { name: 'Marketplace', desc: 'Products and agents consolidated listing and subscriptions management' },
          { name: 'Sentinel', desc: 'AI-based incident investigation and remediation' },
        ],
      },
      {
        title: 'Corporate Drivers',
        items: [
          { name: 'Strategy', desc: 'Articulate strategy elements as themes and corporate objectives' },
          { name: 'Business Planning', desc: 'Align operating plans, budgets, business models and investments to strategy' },
          { name: 'Business Portfolios', desc: 'Value realisations via distributed planning and business proposals' },
          { name: 'OKRs', desc: 'Objective mapping, KRAs and cascade from corporate to teams' },
          { name: 'Alliances', desc: 'Strategic partnerships, JVs, SPVs, investments and ecosystem plays' },
          { name: 'Committees', desc: 'Direction, oversight and responsible decision making' },
        ],
      },
      {
        title: 'Trust, Governance & Assurance',
        items: [
          { name: 'Governance', desc: 'Board policies, charters, delegation-of-authority and control frameworks' },
          { name: 'Risks', desc: 'Enterprise risk register, KRIs, heat-maps and mitigation plans' },
          { name: 'Compliance', desc: 'Regulatory obligations, control testing and attestation workflows' },
          { name: 'Audits', desc: 'Audit plan, fieldwork, findings and SOX controls' },
          { name: 'Data Governance', desc: 'Unified catalogue for trusted discovery, governance and end-to-end lineage' },
          { name: 'Explainability', desc: 'Ensures every action is traceable, verifiable and explainable by design' },
        ],
      },
      {
        title: 'Functions',
        items: [
          { name: 'Customers', desc: 'CRM, orders, subscribers, contact center, care and campaigns' },
          { name: 'People', desc: 'Workforce, recruitment, time and leave, compensation and growth' },
          { name: 'Supply Chain', desc: 'Procurement, materials, vendors, warehouses, logistics and field force' },
          { name: 'Operations', desc: 'Tickets, incidents, problems, change, CMDB, assets and maintenance' },
          { name: 'Finance', desc: 'Ledger, payables, receivables, treasury, assets and reporting' },
          { name: 'PMO', desc: 'Programs, projects, tasks, trackers and meetings' },
          { name: 'IT & CyberSecurity', desc: 'IT strategy, delivery, infrastructure, service and cybersecurity' },
        ],
      },
      {
        title: 'Engineering',
        items: [
          { name: 'AI Foundry', desc: 'AI agents, ML studio, forecasting, vision AI and orchestration' },
          { name: 'Engineering Toolkits', desc: 'Builders, integration, data pipelines, Innovate, Modernize and BI' },
          { name: 'Operations Toolkits', desc: 'FinOps, service and cluster ops, observability, SIEM and DevSecOps' },
        ],
      },
    ],
  },
  { label: 'Use Cases', href: '/use-cases' },
  {
    label: 'Industries',
    // Each item carries a second-line description (same two-line treatment as Product).
    dropdown: [
      { name: 'Telecom', desc: 'Every network site, plan to on air' },
      { name: 'Renewable', desc: 'Wind and solar, plan to generation' },
      { name: 'Wealth', desc: 'The whole wealth business, one cockpit' },
      { name: 'EV', desc: 'The charging network, plan to live kWh' },
      { name: 'Data Center', desc: 'Plan, deliver and operate the estate' },
      { name: 'IoT', desc: 'Every connected device and use case' },
      { name: 'Manufacturing', desc: 'The whole plant, planning to logistics' },
      { name: 'Construction', desc: 'The capital portfolio, earned value to claims' },
      { name: 'Oil and Gas', desc: 'The whole estate, production to compliance' },
      { name: 'ATM Rollout', desc: 'Every ATM site, survey to live' },
    ],
  },
  {
    label: 'Resources',
    dropdown: [
      { name: 'Blogs', desc: 'Stories and engineering insights' },
      { name: 'Videos', desc: 'Demos and platform walkthroughs' },
      { name: 'FAQ', desc: 'Common questions answered' },
      { name: 'Glossary', desc: 'Platform and enterprise terms defined' },
    ],
  },
  { label: 'Why Us', href: '/why-us' },
]

/* The "get started" rail on the right of the Product mega panel. Plain text
   links, no icons — it is the quick path out of the panel, not a third column
   of products. */
export const megaRail = {
  title: 'Get started',
  items: [
    { label: 'Use cases', to: '/use-cases' },
    { label: 'Why Entroid', to: '/why-us' },
    { label: 'Blogs', to: '/resources/blogs' },
    { label: 'FAQ', to: '/resources/faq' },
    { label: 'Glossary', to: '/resources/glossary' },
  ],
}

export const hero = {
  // eyebrow: 'Entroid',
  headline: 'Unified Intelligence Fabric for Governed Autonomous Enterprises',
  /* The same words, broken where they should break. Left to wrap on its own
     the headline lands on four ragged lines; these two are balanced and hold
     their shape as the column changes width. The single string above stays for
     anywhere that needs the headline as plain text. */
  headlineLines: ['Unified Intelligence Fabric for', 'Governed Autonomous Enterprises'],
  description:
    'Entroid unifies organisations, knowledge and systems through governed AI, thereby enabling autonomous operations. It empowers enterprises to align strategy with execution, accelerate innovation, and modernise applications while maintaining compliance, governance, and control.',
  primaryCta: 'Book a demo',
  /* Three ticks under the CTA — the whole proposition in three words and a
     short phrase. Kept to single terms so they sit on one line together; the
     supporting detail lives in the cards at the foot of the hero. */
  points: ['Unified.', 'Autonomous.', 'Governed and owned by you.'],
  image: '/illustration/ill-home-hero.png',
  imageAlt:
    'The Entroid platform stack: Governed Intelligence built on the AI Foundry and the Semantic Ontology, Domain Packs for vertical solutions, innovation and modernisation, Business Packs spanning every organisation function alongside Corporate Drivers and the Trust Fabric, and Technology Packs providing modeller studios, platform governance and cloud-native infrastructure.',
}

/* Three proof points, sitting directly under the hero: what the platform is
   certified against, where it already runs, and who the company answers to.
   Straight facts, no CTA — they are there to be believed, not clicked. */
export const heroProof = [

  {
    title: 'AI that runs the work, and answers to you',
    text: 'Autonomous agents, bounded and audited · explainable by design · air-gapped ready',
  },
  {
    title: 'Model-Native Architecture',
    text: 'Strategy · Operations · Finance · Governance · AI on one connected model',
  },
    {
    title: 'Enterprise-Grade Security & Compliance',
    text: 'SOC 2 · ISO 27001 · GDPR · Security and data-protection frameworks',
  }
]

export const sections = [
  {
    id: 'innovate',
    number: '01',
    label: 'Innovation & Modernisation',
    heading: 'Modernise without rebuilding your enterprise.',
    paragraph:
      'Entroid enables organisations to innovate faster and modernise legacy systems on a single enterprise platform. Build production-ready solutions or transform existing applications while preserving business logic, accelerating delivery, and reducing the complexity, cost and risk of enterprise transformation.',
    // Per-tab artwork. A tab without an `image` falls back to the section
    // visual below, so these can be filled in a card at a time.
    cards: [
      { title: 'Concept to Production', text: 'Turn business requirements into production-ready enterprise solutions through a single, continuous delivery process.', image: '/illustration/concept-to-production.webp' },
      { title: 'Continuous Delivery', text: 'Design, build, test and deploy through one integrated workflow, eliminating delays and unnecessary handoffs.', image: '/illustration/continuous-delivery.webp' },
      { title: 'Modernise Legacy Applications', text: 'Transform legacy applications onto a modern technology stack while preserving business rules, processes and enterprise knowledge.', image: '/illustration/modernise-legacy-applications.webp' },
      { title: 'Accelerated Enterprise Delivery', text: 'Accelerate implementation using reusable enterprise capabilities, configurable modules and AI-assisted development.', image: '/illustration/accelerated-enterprise-delivery.webp' },
      { title: 'Full Enterprise Ownership', text: 'Own, maintain and extend your solutions independently without vendor lock-in or proprietary dependencies.', image: '/illustration/full-enterprise-ownership.webp' },
      { title: 'Go Live in Days', text: 'Deliver new business capabilities and modernised applications in days instead of months.', image: '/illustration/go-live-in-days.webp' },
    ],
    // Left tab rail; the panel on the right rotates through the cards.
    layout: 'tabs',
    visual: {
      type: 'image',
      src: '/innovation-modernisation.png',
      alt: 'Innovation and Modernisation: a new business need and a legacy application both flow through Entroid into a production-ready enterprise solution.',
    },
  },
  {
    id: 'platform',
    number: '02',
    theme: 'dark',
    label: 'Unified Enterprise Platform',
    heading: 'One platform. One enterprise. One operating model.',
    paragraph:
      'Entroid unifies business applications, enterprise knowledge, data and AI on a single operating model. Shared enterprise capabilities are built once and reused everywhere, enabling every business function to work as one connected enterprise instead of isolated systems.',
    cards: [
      { title: 'One Platform for Every Function', text: 'Run every business function on a unified platform with shared capabilities, consistent experiences and a common operating model.' },
      { title: 'Shared Enterprise Services', text: 'Identity, workflows, notifications, integrations and automation are built once and reused across the entire enterprise.' },
      { title: 'One Source of Enterprise Knowledge', text: 'Business data, processes and enterprise knowledge are connected into one trusted foundation for every application and AI agent.' },
      { title: 'Connected Business Operations', text: 'Business functions collaborate through shared processes and real-time information instead of disconnected systems.' },
      { title: 'Built-in Integration', text: 'Applications, data and external systems connect through a unified platform without complex point-to-point integrations.' },
      { title: 'Enterprise-Wide Consistency', text: 'Common standards, reusable services and shared governance deliver consistent operations across the entire enterprise.' },
    ],
    // Rendered as the scroll-driven orbit: Entroid at the centre, the six cards
    // above arriving one at a time on a dashed ring around it.
    visual: { type: 'orbit' },
  },
  {
    id: 'strategy',
    number: '03',
    label: 'Strategy & Execution',
    heading: 'Connect strategy, execution and every decision in between.',
    paragraph:
      'Entroid connects strategy, portfolios, programmes, projects and operations on a single operating model. Every investment, initiative and business activity remains aligned with strategic objectives, while real-time performance and AI-driven insights continuously guide execution and decision-making.',
    cards: [
      { title: 'Strategy', text: 'Define enterprise strategy, objectives and priorities that guide every investment, initiative and business decision.' },
      { title: 'Portfolio Management', text: 'Prioritise investments and allocate resources to initiatives that deliver the greatest strategic value.' },
      { title: 'Programmes & Projects', text: 'Coordinate programmes and projects through a unified execution model that keeps delivery aligned with business outcomes.' },
      { title: 'Operations', text: 'Connect day-to-day operations with strategic priorities so every team contributes to measurable enterprise goals.' },
      { title: 'Performance Management', text: 'Measure progress with real-time KPIs, business outcomes and operational performance across every level of the enterprise.' },
      { title: 'Insights & Decisions', text: 'Transform enterprise data into actionable intelligence that continuously improves planning, execution and business performance.' },
    ],
    // Bento grid: the six cards in varied tile sizes around a central Entroid
    // tile, in place of a standalone image.
    layout: 'bento',
    theme: 'dark',
  },
  {
    id: 'ai',
    number: '04',
    layout: 'stack',
    label: 'Enterprise AI',
    heading: 'Enterprise AI that understands your business.',
    paragraph:
      'Entroid embeds AI into every business function through a governed enterprise AI platform. Built on enterprise context, knowledge and data, AI agents understand your organisation, collaborate across workflows, automate complex work and continuously improve decisions while remaining secure, explainable and under enterprise control.',
    infographic: '/illustration/enterprise-ai.webp',
    cards: [
      { title: 'Intelligent Agents', text: 'Purpose-built AI agents understand enterprise context, reason across business processes and execute work with human oversight.' },
      { title: 'Conversational Enterprise', text: 'Interact with enterprise knowledge, applications and workflows using natural language across every business function.' },
      { title: 'Enterprise Automation', text: 'Automate repetitive and complex business processes through AI-driven workflows and intelligent orchestration.' },
      { title: 'Multi-Agent Collaboration', text: 'Multiple specialised AI agents collaborate, coordinate decisions and complete end-to-end enterprise processes.' },
      { title: 'Predictive Intelligence', text: 'Forecast business outcomes, detect risks and uncover opportunities using enterprise-wide data and AI models.' },
      { title: 'Governed AI', text: 'Deploy AI securely with enterprise governance, explainability, permissions and complete operational control.' },
    ],
    visual: {
      type: 'foundry',
      input: 'Enterprise context · ontology · data',
      core: 'AI Foundry',
      modules: ['Autonomous Agents', 'Conversational Agents', 'Custom Agents', 'Agent Studio', 'Flow Orchestrator', 'ML Studio', 'Forecaster', 'Vision AI'],
      output: 'AI-ready enterprise',
      outputSub: 'Intelligent agents in every workflow',
    },
  },
  {
    id: 'governance',
    number: '05',
    layout: 'stack',
    infographic: '/illustration/governance-security-%26-scale.webp',
    label: 'Governance, Security & Scale',
    heading: 'Governed by design. Trusted at enterprise scale.',
    paragraph:
      'Entroid is engineered for enterprise trust. Governance, security and compliance are embedded into every application, workflow and AI interaction, while a resilient cloud-native architecture ensures the performance, scalability and operational continuity that mission-critical organisations depend on.',
    cards: [
      { title: 'Governance by Design', text: 'Policies, approvals and delegated authority are enforced consistently across applications, workflows and AI.' },
      { title: 'Enterprise Security', text: 'Protect enterprise data, users and AI interactions through built-in security, identity and access controls.' },
      { title: 'Regulatory Compliance', text: 'Support regulatory obligations with configurable controls, evidence collection and compliance monitoring.' },
      { title: 'Complete Auditability', text: 'Every decision, workflow and AI action is fully traceable with comprehensive audit history and operational transparency.' },
      { title: 'Resilient Architecture', text: 'Cloud-native architecture designed for high availability, fault tolerance and continuous business operations.' },
      { title: 'Enterprise Scale', text: 'Confidently support millions of transactions, thousands of users and global enterprise workloads.' },
    ],
  },
  {
    id: 'ownership',
    number: '08',
    layout: 'stack',
    label: 'Ownership & Independence',
    heading: 'Own your platform. Control your future.',
    paragraph:
      'Entroid gives organisations complete ownership of their enterprise solutions, intellectual property and future roadmap. Build, extend and evolve applications on an open, enterprise-grade platform without vendor lock-in, while retaining the freedom to innovate, customise and grow on your own terms.',
    infographic: '/illustration/ownership-%26-independence.webp',
    cards: [
      { title: 'Enterprise Ownership', text: 'Own your applications, configurations, data models and enterprise solutions without dependency on proprietary platforms.' },
      { title: 'Freedom from Vendor Lock-in', text: 'Open standards and portable architecture give your organisation the flexibility to evolve independently.' },
      { title: 'Protected Intellectual Property', text: 'Your business logic, enterprise knowledge and intellectual property remain fully owned and controlled by your organisation.' },
      { title: 'Unlimited Extensibility', text: 'Build, customise and extend enterprise capabilities without platform restrictions or closed ecosystems.' },
      { title: 'Build on Your Terms', text: 'Empower internal teams and partners to develop, enhance and maintain enterprise solutions independently.' },
      { title: 'Future-Proof Platform', text: 'Adopt new technologies, AI capabilities and business innovations without rebuilding or replacing your enterprise foundation.' },
    ],
    visual: {
      type: 'layers',
      base: 'Open platform foundation',
      stack: ['Owned by the enterprise', 'Tailored enterprise solutions', 'Studio and custom development'],
    },
  },
  {
    id: 'adapt',
    number: '07',
    label: 'Enterprise Flexibility',
    heading: 'Your business evolves. Your platform evolves with it.',
    paragraph:
      'Every enterprise is different. Entroid adapts to your operating model, business processes and technology landscape instead of forcing standardisation. Configure, extend and evolve the platform at your own pace while preserving the ways of working that make your organisation unique.',
    layout: 'stack',
    infographic: '/illustration/enterprise-flexibility.webp',
    cards: [
      { title: 'Configurable by Design', text: 'Adapt applications, workflows and business rules without custom development or platform limitations.' },
      { title: 'Built to Extend', text: 'Add new capabilities, AI agents and business services as your organisation evolves without disrupting existing operations.' },
      { title: 'Hybrid & Cloud Ready', text: 'Deploy across cloud, on-premises or hybrid environments while maintaining one consistent enterprise platform.' },
      { title: 'Works Your Way', text: 'Support existing business processes and operating models instead of forcing organisations to adopt predefined processes.' },
      { title: 'Connected Enterprise', text: 'Integrate seamlessly with existing enterprise applications, data and external systems without replacing them.' },
      { title: 'Adopt at Your Pace', text: 'Roll out capabilities incrementally across business units, departments or regions with minimal operational disruption.' },
    ],

  },
  {
    id: 'deployment',
    number: '06',
    surface: 'warm',
    label: 'Enterprise Deployment',
    heading: 'Built for production from day one.',
    paragraph:
      'Entroid transforms enterprise delivery into a continuous, automated process. From business idea to production, built-in automation, reusable enterprise capabilities and AI-assisted delivery reduce implementation time, lower operational costs and accelerate business innovation, while maintaining enterprise-grade governance, security and operational readiness.',
    // The illustration stands in for the drawn deployment path below; `flow`
    // is the fallback the section renders if the artwork is ever removed.
    infographic: '/illustration/enterprise-deployment.webp',
    flow: ['Design', 'Build', 'Validate', 'Deploy', 'Operate'],
    kpis: [
      { prefix: 'Up to', value: '40%', label: 'Faster Time to Production', text: 'Reusable enterprise capabilities, automation and AI-assisted delivery accelerate the journey from business requirements to production.' },
      { prefix: 'Up to', value: '35%', label: 'Lower Total Cost of Ownership', text: 'Consolidate technologies, integrations and operational processes on a unified enterprise platform to reduce long-term operating costs.' },
      { prefix: 'Up to', value: '45%', label: 'More Capacity for Innovation', text: 'Reduce engineering effort through automation, allowing teams to focus on delivering new business value instead of repetitive implementation work.' },
      { prefix: 'Up to', value: '60%', label: 'Less Audit & Compliance Effort', text: 'Built-in governance, traceability and automated evidence collection significantly reduce manual audit preparation and compliance activities.' },
    ],
    disclaimer: 'Illustrative outcomes based on customer implementations and typical enterprise transformation programmes. Actual results may vary depending on implementation scope, organisation size and operational maturity.',
  },
]

export const finalSection = {
  label: 'The Enterprise Journey',
  heading: 'A foundation for autonomous enterprises.',
  paragraph:
    'One continuous journey of enterprise evolution, governed end to end.',
  // The journey renders as one illustration; `journey` is the fallback the
  // section falls back to (nine boxes and arrows) if the artwork is removed.
  illustration: '/illustration/the-enterprise-journey.webp',
  journey: [
    'Innovation',
    'Modernisation',
    'Unified Platform',
    'Strategy Execution',
    'Enterprise AI',
    'Governance',
    'Deployment',
    'Scale',
    'Continuous Evolution',
  ],
  // cta: 'Start the journey towards a governed autonomous enterprise.',
  ctaButton: 'Book a demo',
}

export const footer = {
  tagline: 'Unified intelligence layer for governed autonomous enterprises.',
  address: ['C21 Business Park, Ring Road', 'Indore, MP 452010, India'],
  phone: '+91 94253 27013',
  email: 'contact@entroid.ai',
  social: [
    { name: 'LinkedIn', to: 'https://www.linkedin.com/company/entroid' },
    { name: 'X', to: 'https://x.com/entroid_ai' },
    { name: 'Facebook', to: 'https://www.facebook.com/entroid' },
    { name: 'Instagram', to: 'https://www.instagram.com/entroid_/' },
    { name: 'YouTube', to: 'https://www.youtube.com/@Entroid' },
  ],
  // Every link resolves to a real destination: homepage section anchors (/#id),
  // product and industry routes, and the built resources.
  // The footer mirrors the header navigation, one column per top-level menu.
  // Platform entries are the homepage section anchors (their ids live in
  // `sections` below); Products and Industries reuse the mega-menu / dropdown
  // destinations; Use Cases and Why Us deep-link to their on-page subsections
  // (those ids are set in App.jsx — keep the two in sync).
  columns: [
    { title: 'Platform', links: [
      { label: 'Innovation & Modernisation', to: '/#innovate' },
      { label: 'Unified Enterprise Platform', to: '/#platform' },
      { label: 'Strategy & Execution', to: '/#strategy' },
      { label: 'Enterprise AI', to: '/#ai' },
      // No homepage section for this yet, so it resolves to the product
      // placeholder the same way Functions and Engineering do.
      { label: 'Service as Software', to: '/product/service-as-software' },
      { label: 'Governance, Security & Scale', to: '/#governance' },
      { label: 'Enterprise Deployment', to: '/#deployment' },
      { label: 'Enterprise Flexibility', to: '/#adapt' },
      { label: 'Ownership & Independence', to: '/#ownership' },
    ] },
    { title: 'Products', links: [
      { label: 'Intelligence Hub', to: '/product/intelligence-hub' },
      { label: 'Corporate Drivers', to: '/product/corporate-drivers' },
      { label: 'Trust, Governance & Assurance', to: '/product/trust-governance-assurance' },
      // Functions and Engineering are per-space groups: each menu item is its
      // own page and the group itself has no landing page yet, so these two
      // currently resolve to the "in progress" placeholder.
      { label: 'Functions', to: '/product/functions' },
      { label: 'Engineering', to: '/product/engineering' },
    ] },
    { title: 'Industries', links: [
      { label: 'Telecom', to: '/industries/telecom' },
      { label: 'Renewable', to: '/industries/renewable' },
      { label: 'Wealth', to: '/industries/wealth' },
      { label: 'EV', to: '/industries/ev' },
      { label: 'Data Center', to: '/industries/data-center' },
      { label: 'IoT', to: '/industries/iot' },
      { label: 'Manufacturing', to: '/industries/manufacturing' },
      { label: 'Construction', to: '/industries/construction' },
      { label: 'Oil and Gas', to: '/industries/oil-and-gas' },
      { label: 'ATM Rollout', to: '/industries/atm-rollout' },
    ] },
    { title: 'Use Cases', links: [
      { label: 'All use cases', to: '/use-cases' },
      { label: 'Flagship use cases', to: '/use-cases#flagship-use-cases' },
      { label: 'Across the enterprise', to: '/use-cases#across-the-enterprise' },
    ] },
    { title: 'Resources', links: [
      { label: 'Blogs', to: '/resources/blogs' },
      { label: 'Videos', to: '/resources/videos' },
      { label: 'FAQ', to: '/resources/faq' },
      { label: 'Glossary', to: '/resources/glossary' },
    ] },
    { title: 'Why Us', links: [
      { label: 'Overview', to: '/why-us' },
      { label: 'What sets it apart', to: '/why-us#what-sets-it-apart' },
      { label: 'The founding team', to: '/why-us#founding-team' },
      { label: 'How the platform is built', to: '/why-us#how-its-built' },
    ] },
  ],
}
