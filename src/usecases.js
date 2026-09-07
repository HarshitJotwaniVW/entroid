/**
 * Use Cases page content for website-v3.
 *
 * CROSS-ENTERPRISE outcomes that only work because the whole business runs on one
 * connected model. Cards show the chain of modules each spans; the detail view at
 * /use-cases/<slug> elaborates with a step-by-step walkthrough, what it unlocks,
 * the outcome, and the modules it runs on (chips link to product pages).
 *
 * Voice: third person, no pronouns, no "X, not Y", no em-dashes, business value first.
 * `flow: true` -> chain is a sequence (arrows). `flow: false` -> a span (chips).
 */

export const useCasesHero = {
  eyebrow: 'Use Cases',
  headline: 'What one connected enterprise makes possible.',
  intro:
    'These outcomes appear when strategy, operations, finance and governance run on one connected model. Each spans many functions and dozens of modules, working as a single motion rather than a set of separate systems.',
  primaryCta: 'Request a demo',
  secondaryCta: 'Explore the platform',
}

export const useCasesLede =
  'Each use case below is an outcome, delivered by many modules working as one motion. The chain on every card names the modules it spans. What makes these outcomes possible is a single connected model of the enterprise, so work carries across functions rather than stopping at the edge of an application.'

// Chain chip label -> product page slug (used to link chips on the detail view).
export const chipProduct = {
  'Semantic Ontology': 'intelligence-hub', 'Command Center': 'intelligence-hub', Sherlock: 'intelligence-hub', Sentinel: 'intelligence-hub',
  'AI Foundry': 'ai-foundry', Forecaster: 'ai-foundry',
  Strategy: 'corporate-drivers', Portfolios: 'corporate-drivers', OKRs: 'corporate-drivers',
  Programs: 'pmo', PMO: 'pmo',
  Governance: 'trust-governance-assurance', Explainability: 'trust-governance-assurance', Audits: 'trust-governance-assurance', Compliance: 'trust-governance-assurance', Risk: 'trust-governance-assurance',
  Customers: 'customers', CRM: 'customers', Orders: 'customers',
  'Supply Chain': 'supply-chain', Procurement: 'supply-chain', Vendors: 'supply-chain', Warehouse: 'supply-chain', Logistics: 'supply-chain', Materials: 'supply-chain', Spares: 'supply-chain', 'Field Force': 'supply-chain', Contracts: 'supply-chain',
  Finance: 'finance', Receivables: 'finance', Payables: 'finance', 'General Ledger': 'finance', Treasury: 'finance',
  Operations: 'operations', Incidents: 'operations', Change: 'operations', CMDB: 'operations', Maintenance: 'operations', Assets: 'operations',
  People: 'people', Recruitment: 'people', Workforce: 'people', 'Time and Leave': 'people', Payroll: 'people', Growth: 'people',
}

export const useCaseGroups = [
  {
    tier: 'Flagship use cases',
    tierNote: 'The outcomes no point solution can claim.',
    items: [
      {
        slug: 'impact-analysis',
        theme: 'Enterprise intelligence',
        title: 'Enterprise-wide impact analysis',
        scenario: 'A supplier changes, a regulation shifts or a product is retired.',
        flow: false,
        chain: ['Semantic Ontology', 'Supply Chain', 'Customers', 'Contracts', 'Finance'],
        outcome: 'Every downstream material, order, customer and revenue exposure is seen in one motion, before the decision is made.',
        detail: 'Because every object in the enterprise, from materials and orders to customers and contracts, is modelled once and connected, a single change can be followed to everything it touches. The exposure is available before the decision is committed, while there is still time to change course.',
        steps: [
          { title: 'Everything is one connected model', text: 'Materials, orders, customers, contracts and revenue are modelled once, with the relationships between them explicit rather than inferred.' },
          { title: 'Select the change', text: 'A supplier, a regulation or a product is chosen as the starting point for the analysis.' },
          { title: 'Trace the dependencies', text: 'The platform follows every relationship outward, surfacing the materials, orders, customers and contracts that depend on it.' },
          { title: 'Quantify the exposure', text: 'Revenue, commitments and service levels at stake are totalled across the affected chain, in one view.' },
          { title: 'Decide with the full picture', text: 'The analysis is ready before the decision is committed, while there is still time to change course.' },
        ],
        capabilities: ['Impact analysis available on demand', 'One shared model, with relationships defined once', 'Full lineage from a change to everything it touches', 'AI reasoning grounded in the connected context'],
      },
      {
        slug: 'order-to-cash',
        theme: 'Value chain',
        title: 'Order to cash',
        scenario: 'From a customer order to recognised revenue and collected cash.',
        flow: true,
        chain: ['CRM', 'Orders', 'Warehouse', 'Logistics', 'Receivables', 'General Ledger'],
        outcome: 'Orders at risk from stock, credit or SLA surface early, on-time delivery rises and days sales outstanding fall.',
        detail: 'An order moves as one record from first capture to collected cash, across sales, warehouse, logistics and finance on the same connected model. Risk to the order stays visible while there is still time to act.',
        steps: [
          { title: 'Capture and qualify', text: 'The order is created against the customer 360, with credit and pricing checked as it is booked.' },
          { title: 'Reserve and fulfil', text: 'Stock is reserved and fulfilment is orchestrated across warehouse and logistics on the same record.' },
          { title: 'Invoice and age', text: 'The invoice is raised in receivables and aged from current to overdue automatically.' },
          { title: 'Collect', text: 'Overdue accounts escalate through staged collections, and status is tracked line by line.' },
          { title: 'Recognise revenue', text: 'Revenue is recognised in the general ledger, tied back to the originating order.' },
        ],
        capabilities: ['One record from quote to collected cash', 'Orders at risk from stock, credit or SLA flagged early', 'Days sales outstanding visible in real time', 'On-time, in-full delivery held to its promise'],
      },
      {
        slug: 'strategy-to-execution',
        theme: 'Alignment',
        title: 'Strategy to execution',
        scenario: 'A board sets a priority and needs to see it delivered.',
        flow: true,
        chain: ['Strategy', 'Portfolios', 'Programs', 'OKRs', 'Finance'],
        outcome: 'The priority is traced to the initiatives, spend and results delivering it, and drift is flagged early.',
        detail: 'A board theme is defined once and cascaded into portfolios, programs and objectives, each carrying its owner, value and budget. The work that delivers it links back to the theme, so leadership can follow any priority down to the initiatives behind it.',
        steps: [
          { title: 'Frame the strategy', text: 'Themes and corporate objectives are defined with owners and value, as a live model.' },
          { title: 'Fund it', text: 'Portfolios and plans align investment and budget to the strategic priorities.' },
          { title: 'Cascade to objectives', text: 'Objectives become aligned OKRs from business unit through team to individual.' },
          { title: 'Deliver through programs', text: 'Programs and projects execute against the objectives, linked back to the theme.' },
          { title: 'See and steer', text: 'Live execution status and drift signals let leadership steer continuously through the year.' },
        ],
        capabilities: ['A line of sight from board theme to team result', 'Spend and value on every objective', 'Drift caught as it happens', 'Execution status current, top to bottom'],
      },
      {
        slug: 'procure-to-pay',
        theme: 'Value chain',
        title: 'Procure to pay',
        scenario: 'From a purchase requisition to a controlled payment.',
        flow: true,
        chain: ['Procurement', 'Vendors', 'Warehouse', 'Contracts', 'Payables', 'Treasury'],
        outcome: 'Spend stays on-contract and in-budget, duplicate and over-payments are caught, and cash outflow is controlled.',
        detail: 'A requirement becomes a governed flow from requisition to payment, running on shared vendor and contract masters, with payment and cash position following in finance.',
        steps: [
          { title: 'Request', text: 'A requisition is raised and routed for approval against budget.' },
          { title: 'Source', text: 'Competitive RFx and auctions select the supplier on the shared vendor master.' },
          { title: 'Order and receive', text: 'A purchase order is issued, and goods receipt is recorded in the warehouse.' },
          { title: 'Match and approve', text: 'Three-way matching against the PO and receipt flags price and quantity variances before payment.' },
          { title: 'Pay and reconcile', text: 'Payment is released in payables and reflected in the treasury cash position.' },
        ],
        capabilities: ['Requisition to payment as one governed flow', 'Duplicate and over-payments caught before cash leaves', 'Spend held on-contract and in-budget', 'Cash outflow controlled and forecast'],
      },
      {
        slug: 'autonomous-operations',
        theme: 'Autonomous AI',
        title: 'Autonomous operations',
        scenario: 'Routine decisions run across functions without a person in every loop.',
        flow: false,
        chain: ['AI Foundry', 'Command Center', 'Operations', 'Supply Chain', 'Finance'],
        outcome: 'Agents forecast, detect, decide and act on the connected model, and escalate only the exceptions.',
        detail: 'Agents built in the AI Foundry reason on the connected model and act across functions through the Command Center, closing the loop from signal to action within policy.',
        steps: [
          { title: 'Build the agent', text: 'An agent is created in the AI Foundry, given its policy, tools and the enterprise context it reasons on.' },
          { title: 'Sense', text: 'Forecasts and anomaly signals across functions are monitored continuously.' },
          { title: 'Decide within policy', text: 'The agent evaluates options against governed rules on the connected model.' },
          { title: 'Act across functions', text: 'The decision is executed, from reordering stock to dispatching a technician to remediating an incident.' },
          { title: 'Escalate the exceptions', text: 'Routine cases close autonomously, and only what falls outside policy is raised to people.' },
        ],
        capabilities: ['Closed-loop automation across every domain', 'Agents grounded in enterprise context', 'Decisions governed and explainable', 'People freed for the exceptions'],
      },
      {
        slug: 'detect-resolve-prevent',
        theme: 'Service and operations',
        title: 'Detect, resolve, prevent',
        scenario: 'An incident or threat appears across IT and operational technology.',
        flow: true,
        chain: ['Incidents', 'Sherlock', 'Change', 'CMDB', 'Sentinel'],
        outcome: 'Root cause is found, the fix is applied and governed, and the recurring issue is engineered out.',
        detail: 'A signal from IT or operational technology becomes an incident, root cause is found automatically, a governed change applies the fix, and the pattern is captured so the same issue is prevented.',
        steps: [
          { title: 'Detect and correlate', text: 'Signals across the ecosystem are correlated into a single incident, with severity set.' },
          { title: 'Find root cause', text: 'Automated root-cause analysis links the incident to the configuration items and assets involved.' },
          { title: 'Apply a governed fix', text: 'A change is raised, assessed and approved, then deployed under control.' },
          { title: 'Update the model', text: 'The CMDB and asset records are updated so the picture stays true.' },
          { title: 'Engineer it out', text: 'The pattern is captured as a problem so the recurring issue is prevented, and threats are auto-remediated.' },
        ],
        capabilities: ['Incident correlation across IT and OT', 'Root cause to corrective action, automated', 'Mean time to resolution reduced', 'Recurring issues engineered out'],
      },
    ],
  },
  {
    tier: 'Across the enterprise',
    tierNote: 'Six more that run the operational breadth as one.',
    items: [
      {
        slug: 'decision-intelligence',
        theme: 'Enterprise intelligence',
        title: 'Cross-functional decision intelligence',
        scenario: 'A decision that needs finance, supply chain, risk and customer views at once.',
        flow: false,
        chain: ['Command Center', 'Finance', 'Supply Chain', 'Risk', 'Customers'],
        outcome: 'One decision is informed by every function at the same time, on a single connected view.',
        detail: 'A significant decision draws on every relevant function at once, on one connected model, so the trade-offs are made on a single current picture rather than assembled from separate reports.',
        steps: [
          { title: 'Frame the decision', text: 'The decision, a large order, an investment or a pricing move, is put to the connected model.' },
          { title: 'Gather every view', text: 'Margin and credit from finance, capacity from supply chain, exposure from risk and history from customers are drawn at once.' },
          { title: 'Reason on one view', text: 'The Command Center presents the trade-offs on a single, current picture.' },
          { title: 'Decide and record', text: 'The decision is made and recorded with the context it was based on.' },
          { title: 'Track the outcome', text: 'The result is followed on the same model, informing the next decision.' },
        ],
        capabilities: ['Every function in one decision', 'A single, current view of the trade-offs', 'Decisions recorded with their basis', 'Outcomes tracked on the same model'],
      },
      {
        slug: 'asset-uptime',
        theme: 'Value chain',
        title: 'Asset uptime',
        scenario: 'A critical asset trends toward failure or a spare toward stock-out.',
        flow: true,
        chain: ['Forecaster', 'Materials', 'Spares', 'Maintenance', 'Field Force', 'Assets'],
        outcome: 'Downtime is prevented, the right spare and technician are in place, and working capital is freed.',
        detail: 'Condition and forecast signals show which assets trend toward failure and which spares toward stock-out, and maintenance, spares and field force are coordinated to keep the asset running.',
        steps: [
          { title: 'Forecast the risk', text: 'Condition and forecast signals show which assets trend toward failure and which spares toward stock-out.' },
          { title: 'Plan the work', text: 'Preventive and breakdown work orders are scheduled against the assets at risk.' },
          { title: 'Position the spare', text: 'Reorder points and indents keep the right spare on the shelf before it is needed.' },
          { title: 'Dispatch the technician', text: 'Field force is matched by skill and location to the work order.' },
          { title: 'Restore and learn', text: 'Uptime is restored, and the event feeds the next forecast.' },
        ],
        capabilities: ['Downtime prevented before the asset stops', 'The right spare and technician in place', 'Working capital freed from idle stock', 'Maintenance, spares and field force as one'],
      },
      {
        slug: 'hire-to-retire',
        theme: 'Value chain',
        title: 'Hire to retire',
        scenario: 'From a hiring plan to an accurate payroll and a growing workforce.',
        flow: true,
        chain: ['Recruitment', 'Workforce', 'Time and Leave', 'Payroll', 'Growth'],
        outcome: 'Capacity stays aligned to plan, payroll runs clean, and the workforce lifecycle sits on one record.',
        detail: 'The workforce lifecycle runs on one employee record, from hiring plan and recruitment through onboarding, time, payroll and growth, so each stage carries its own data forward.',
        steps: [
          { title: 'Plan and recruit', text: 'Headcount plans drive requisitions, sourcing and offers, tracked to fill rate and budget.' },
          { title: 'Onboard to one record', text: 'A new hire becomes one employee record, with org, role and lifecycle from day one.' },
          { title: 'Run time and pay', text: 'Attendance flows into payroll-ready records, and gated payroll runs disburse accurately.' },
          { title: 'Grow', text: 'Performance cycles, goals and learning develop the workforce against the plan.' },
          { title: 'Transition', text: 'Moves and exits carry their own data, keeping capacity and cost current.' },
        ],
        capabilities: ['One employee record, hire to exit', 'Payroll drawn from clean attendance', 'Capacity aligned to plan', 'People and cost connected to the enterprise'],
      },
      {
        slug: 'multi-site-rollout',
        theme: 'Enterprise scale',
        title: 'Multi-site rollout at scale',
        scenario: 'Thousands of sites move from survey to live, on time and on budget.',
        flow: true,
        chain: ['PMO', 'Procurement', 'Field Force', 'Logistics', 'Assets', 'Finance'],
        outcome: 'Every site is tracked survey to activation on one rollout command center, with cost and schedule in view.',
        detail: 'A rollout of thousands of sites runs on one command center, with PMO, supply chain, field force and finance on the same plan, so every site is tracked to live with cost and schedule in view.',
        steps: [
          { title: 'Survey and design', text: 'Each site is surveyed and designed against a standard template.' },
          { title: 'Plan the program', text: 'PMO sequences the rollout with milestones, dependencies and budget.' },
          { title: 'Procure and deploy', text: 'Procurement and logistics supply each site, and field force executes the build.' },
          { title: 'Activate', text: 'Sites are commissioned and activated, with assets registered.' },
          { title: 'Operate', text: 'Every site moves survey to live on one rollout command center, cost and schedule in view.' },
        ],
        capabilities: ['Every site tracked survey to activation', 'One rollout command center', 'Cost and schedule visible across the program', 'PMO, supply chain, field force and finance as one'],
      },
      {
        slug: 'governance-traceable',
        theme: 'Trust and assurance',
        title: 'Governance traceable by design',
        scenario: 'An auditor or regulator asks who decided something, and on what basis.',
        flow: false,
        chain: ['Governance', 'Explainability', 'Audits', 'Risk', 'Compliance'],
        outcome: 'The full decision chain, policy and evidence are produced on demand, for people and AI alike.',
        detail: 'Governance, risk and compliance sit on the same model as the work they govern, so every decision is recorded with its policy, owner and evidence as it happens, and the full chain is produced when asked.',
        steps: [
          { title: 'Govern on the same model', text: 'Governance, risk and compliance sit on the same model as the work they govern.' },
          { title: 'Record as it happens', text: 'Each decision is captured with its policy, owner and evidence at the moment it is made.' },
          { title: 'Enforce policy', text: 'Allow and deny decisions are applied consistently across entities.' },
          { title: 'Maintain the chain', text: 'An audit chain and integrity monitoring keep every action traceable.' },
          { title: 'Produce on demand', text: 'The full decision chain, policy and evidence are produced when asked, for people and AI alike.' },
        ],
        capabilities: ['Governance traceable by design', 'Audit evidence that stands ready', 'Policy enforced consistently across entities', 'Explainable decisions, human and AI'],
      },
      {
        slug: 'forecast-driven-planning',
        theme: 'Autonomous AI',
        title: 'Forecast-driven planning',
        scenario: 'Demand, revenue and cash shift, and plans need to move with them.',
        flow: true,
        chain: ['Forecaster', 'Supply Chain', 'Finance', 'People'],
        outcome: 'Forecasts flow straight into procurement, workforce and treasury decisions, so plans track reality.',
        detail: 'Forecasts for demand, revenue and cash are produced in the AI Foundry and flow straight into the plans they should shape, so procurement, workforce and treasury move with the forecast rather than lagging it.',
        steps: [
          { title: 'Forecast', text: 'Time-series models in the AI Foundry forecast demand, revenue and cash, with accuracy tracked.' },
          { title: 'Feed the plan', text: 'Forecasts flow straight into procurement, workforce and treasury plans.' },
          { title: 'Keep assumptions visible', text: 'The drivers behind each number stay explicit and defensible.' },
          { title: 'Adjust as it moves', text: 'When the forecast shifts, the plans move with it.' },
          { title: 'Close the loop', text: 'Actuals feed back into the next forecast, so planning tracks reality.' },
        ],
        capabilities: ['Plans that move with the forecast', 'Assumptions explicit and defensible', 'Procurement, workforce and treasury aligned', 'Planning that tracks reality as it changes'],
      },
    ],
  },
]

export const useCasesClosing = {
  heading: 'One model. Outcomes across the enterprise.',
  text: 'See how these use cases apply to a specific function, industry or transformation.',
  cta: 'Request a demo',
}
