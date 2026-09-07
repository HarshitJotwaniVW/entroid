/**
 * Industry (vertical) page content for website-v3.
 *
 * One page per industry, same template as the product pages: hero -> value strip
 * -> a dedicated section per solution area -> closing CTA. Rendered by the shared
 * SolutionPage via the /industries/:slug route.
 *
 * Sources:
 *  - 9 verticals adapted from the integrated-use-cases one-pagers in
 *    documentation/src/data/docs.js (voice-rewritten: third person, NO pronouns,
 *    no "X, not Y", no negative pain framing — the one-pagers lead with pain,
 *    which is rewritten to positive value here).
 *  - Wind adapted from the live wind command center (wind-rollout-v3.vercel.app).
 *  - Solar derived from Renewable. Data Center is a placeholder pending content.
 */

import { slugify } from './products'

export const industryHref = (name) => `/industries/${slugify(name)}`

export const industries = {
  'oil-and-gas': {
    slug: 'oil-and-gas',
    heroImage: '/bg/industries/oil-%26-gas.jpg',
    category: 'Oil & Gas',
    eyebrow: 'Industries',
    headline: 'The whole oil and gas estate, on one command center.',
    intro:
      'Production, safety, asset integrity, permits and maintenance run on one platform across every site. Wells, pipelines and refineries share a single real-time view, with an asset-network map and a ranked attention list, so the estate is seen as a whole and the site that needs attention is surfaced first.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'Oil and gas, area by area.',

    metrics: [
      { value: 'One command center', label: 'Wells, pipelines, refineries' },
      { value: 'Safety + production', label: 'Watched together' },
      { value: 'Integrity tracked', label: 'RBI inspections' },
      { value: 'Critical site first', label: 'Attention ranked' },
    ],

    modules: [
      {
        name: 'Production & availability',
        tagline: 'Output across every site, in real time.',
        summary: 'Production and availability are tracked across wells, pipelines and refineries on one live operations view.',
        capabilities: ['Real-time production and availability', 'Wells, pipelines and refineries', 'Output in operational context', 'Fleet-wide performance'],
      },
      {
        name: 'HSE safety & incidents',
        tagline: 'Safety watched beside production.',
        summary: 'Safety metrics and incidents sit on the same view as output, so operating performance and safety are read together.',
        capabilities: ['TRIR and safety metrics', 'Incident capture and tracking', 'Safety beside production', 'HSE across every site'],
      },
      {
        name: 'Asset integrity',
        tagline: 'Integrity managed before it becomes an incident.',
        summary: 'Risk-based inspection tracks overdue inspections and assets at risk, ranked so integrity is addressed early.',
        capabilities: ['Risk-based inspection (RBI)', 'Overdue inspections flagged', 'Assets at risk ranked', 'Integrity across the estate'],
      },
      {
        name: 'Permits & compliance',
        tagline: 'Permits kept on the operations view.',
        summary: 'Permit status, approvals and compliance obligations sit beside operations, so nothing waits out of sight.',
        capabilities: ['Permit status and approvals', 'Compliance obligations tracked', 'Awaiting-approval surfaced', 'Permits beside operations'],
      },
      {
        name: 'Work orders & maintenance',
        tagline: 'Maintenance visible where operations happen.',
        summary: 'Work orders and backlog sit on the operations view, so scheduled and corrective work is managed in context.',
        capabilities: ['Work orders and backlog', 'Scheduled and corrective work', 'Maintenance beside production', 'Backlog in view'],
      },
      {
        name: 'Asset-network map & site triage',
        tagline: 'The estate on one map, ranked by attention.',
        summary: 'Wells, pipelines and refineries show on one map, with a sites-needing-attention list that surfaces the critical ones first.',
        capabilities: ['Asset-network map', 'Sites-needing-attention list', 'Critical sites surfaced first', 'Status across the basin'],
      },
    ],

    closing: {
      heading: 'The estate, seen as a whole.',
      text: 'Entroid runs oil and gas operations as one command center, ranked by what needs attention.',
      cta: 'Request a demo',
    },
  },

  wind: {
    slug: 'wind',
    heroImage: '/bg/industries/renewable.jpg',
    category: 'Wind',
    eyebrow: 'Industries',
    headline: 'Every wind farm, from planning to on-grid, on one platform.',
    intro:
      'The wind fleet runs on one command center. Development pipeline, construction, commissioning and live operations share a single view across every plant, with SCADA monitoring, alarms, maintenance and a digital twin, so the fleet is seen and steered in real time.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'Wind, area by area.',

    metrics: [
      { value: 'One command center', label: 'Every farm and turbine' },
      { value: 'Plan to on-grid', label: 'Full plant lifecycle' },
      { value: 'Live SCADA', label: 'Monitoring and alarms' },
      { value: 'Fleet availability', label: 'Operating in real time' },
    ],

    modules: [
      {
        name: 'Development pipeline',
        tagline: 'Sites from planning to commissioning.',
        summary: 'Programs and projects carry each site through planning, development, construction and commissioning to on-grid.',
        capabilities: ['Programs and projects', 'Planning, development, construction', 'Commissioning to on-grid', 'Pipeline capacity in view'],
      },
      {
        name: 'Sites & turbines',
        tagline: 'Every farm and turbine on one map.',
        summary: 'Farms and turbines show on a live generation map, with fleet status and output for every site.',
        capabilities: ['Farms and turbines', 'Live generation map', 'Running, curtailed, idle status', 'Capacity and output per site'],
      },
      {
        name: 'Monitoring & alarms',
        tagline: 'SCADA signals and faults, surfaced.',
        summary: 'SCADA monitoring surfaces active alarms by severity, with faults and warnings down to the turbine.',
        capabilities: ['SCADA monitoring', 'Active alarms by severity', 'Faults and warnings', 'Turbine-level inspection'],
      },
      {
        name: 'Maintenance',
        tagline: 'Work orders beside generation.',
        summary: 'Preventive and corrective work orders sit beside live generation, so maintenance is managed in context.',
        capabilities: ['Work orders and scheduling', 'Preventive and corrective work', 'Maintenance beside generation', 'Backlog and status'],
      },
      {
        name: 'Digital twin',
        tagline: 'A live model of every asset.',
        summary: 'A digital twin models asset performance, condition and health, so operations are informed by simulation and insight.',
        capabilities: ['Asset digital twin', 'Performance modelling', 'Condition and health', 'Simulation and insight'],
      },
      {
        name: 'Sustainability',
        tagline: 'Generation and impact, reported.',
        summary: 'Generation, carbon and ESG metrics are reported fleet-wide, so impact is measured alongside output.',
        capabilities: ['Sustainability reporting', 'Generation and carbon', 'ESG metrics', 'Fleet-wide impact'],
      },
    ],

    closing: {
      heading: 'The wind fleet, in real time.',
      text: 'Entroid runs the wind fleet as one command center, from development pipeline to live generation.',
      cta: 'Request a demo',
    },
  },

  telecom: {
    slug: 'telecom',
    heroImage: '/bg/industries/telecom.jpg',
    category: 'Telecom',
    eyebrow: 'Industries',
    headline: 'Every network site, from plan to on-air, on one command center.',
    intro:
      'The network build runs on one command center. Every macro, small-cell, DAS and C-RAN site shares a single geospatial view, with a Build, Integration and On-Air activation pipeline, RF coordination and geo-fenced permits, so the stalling stage is surfaced and sites reach on-air faster.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'Telecom, area by area.',
    metrics: [
      { value: 'Bottleneck named', label: 'The stage stalling on-air' },
      { value: 'Velocity, live', label: 'Sites per week to on-air' },
      { value: 'Permits unblocked', label: 'Jurisdictional holds surfaced early' },
      { value: 'Every site, one map', label: 'Plan to on-air, geospatial' },
    ],
    modules: [
      {
        name: 'Geospatial network map',
        tagline: 'Every site on one map.',
        summary: 'Macro, small-cell, DAS and C-RAN sites show on one geospatial map, so the whole build is seen in place.',
        capabilities: ['Macro, small-cell, DAS, C-RAN', 'Geospatial site map', 'Whole build in place', 'Backhaul and geo-fences'],
      },
      {
        name: 'Activation pipeline',
        tagline: 'Build to Integration to On-Air.',
        summary: 'Each site moves through Build, Integration and On-Air stages on one pipeline, so progress to on-air is tracked stage by stage.',
        capabilities: ['Build, Integration, On-Air stages', 'Site progress tracked', 'Stage flow in view', 'Plan to on-air pipeline'],
      },
      {
        name: 'Rollout velocity & bottlenecks',
        tagline: 'Pace to on-air, measured.',
        summary: 'Rollout velocity and stage flow are live, so the pace to on-air is measured and the highest-leverage move is surfaced.',
        capabilities: ['Sites per week to on-air', 'Bottleneck stage named', 'Highest-leverage move surfaced', 'Velocity tracked live'],
      },
      {
        name: 'RF coordination & backhaul',
        tagline: 'RF coordinated in place.',
        summary: 'RF coordination and backhaul sit on the same geospatial map as the sites, so coordination happens where the build is seen.',
        capabilities: ['RF coordination', 'Backhaul planning', 'On the site map', 'Coordinated across sites'],
      },
      {
        name: 'Permits & compliance',
        tagline: 'Jurisdictional holds, surfaced early.',
        summary: 'Permits awaiting a decision are surfaced against the sites they block, so dependencies are worked down before they stall on-air.',
        capabilities: ['Permit status and approvals', 'Geo-fenced compliance', 'Holds surfaced against sites', 'Dependencies worked early'],
      },
      {
        name: 'Operational risk & alarms',
        tagline: 'Risk on the rollout view.',
        summary: 'Operational risk index, red sites and P1 escalations sit on the rollout view, so risk is read beside the build.',
        capabilities: ['Operational risk index', 'Red sites surfaced', 'P1 alarm escalation', 'Risk beside the build'],
      },
    ],
    closing: {
      heading: 'The network build, steered to on-air.',
      text: 'Entroid runs the network rollout as one command center, from plan to on-air.',
      cta: 'Request a demo',
    },
  },
  renewable: {
    slug: 'renewable',
    heroImage: '/bg/industries/renewable.jpg',
    category: 'Renewable',
    eyebrow: 'Industries',
    headline: 'Every renewable plant, from planning to on-grid, on one platform.',
    intro:
      'The renewable fleet runs on one platform, from planning and design through construction, commissioning and on-grid generation. A portfolio map shows every plant by region and capacity band, with live generation and performance ratio per plant, so each plant is traceable from planning to power and the whole portfolio is seen together.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'Renewable, area by area.',
    metrics: [
      { value: 'Planning to power', label: 'The whole plant lifecycle' },
      { value: 'Portfolio on one map', label: 'Every plant, every status' },
      { value: 'Live generation', label: 'MW and performance ratio' },
      { value: 'Build to grid', label: 'Design, construction, commissioning' },
    ],
    modules: [
      { name: 'Plant lifecycle', tagline: 'Planning to on-grid on one platform.', summary: 'Planning, design, construction, commissioning and generation run on one platform, so each plant lifecycle is continuous from design to power.', capabilities: ['Planning and design', 'Construction and commissioning', 'On-grid operation', 'One continuous lifecycle'] },
      { name: 'Wind farms', tagline: 'Turbines and SCADA, on the fleet view.', summary: 'Wind farms and turbines run on the same platform, with SCADA monitoring, alarms and maintenance beside live generation.', capabilities: ['Farms and turbines on one map', 'SCADA monitoring and alarms', 'Turbine-level inspection', 'Maintenance beside generation'] },
      { name: 'Solar parks', tagline: 'Inverters and strings, on the fleet view.', summary: 'Solar parks, inverters and strings run on the same platform, with irradiance, performance ratio and maintenance beside live generation.', capabilities: ['Parks, inverters and strings', 'Irradiance and PV generation', 'Performance ratio per park', 'Maintenance beside generation'] },
      { name: 'Construction & commissioning', tagline: 'Delivery tracked to on-grid.', summary: 'Construction and commissioning are tracked to on-grid, so each plant reaches generation on one connected view.', capabilities: ['Construction tracking', 'Commissioning to on-grid', 'Delivery in view', 'Traceable to power'] },
      { name: 'Portfolio map & capacity', tagline: 'Every plant on one map.', summary: 'Every plant shows by region, capacity band and status on one map, so the fleet picture is available at a glance.', capabilities: ['Portfolio map', 'Region and capacity band', 'Status per plant', 'Fleet at a glance'] },
      { name: 'Live generation', tagline: 'SCADA output, plant by plant.', summary: 'SCADA generation streams live per plant, so output across the fleet is read in real time beside the build and plan.', capabilities: ['Live SCADA generation', 'Output per plant', 'Real-time refresh', 'Generation beside the plan'] },
      { name: 'Performance ratio', tagline: 'Performance seen early, plant by plant.', summary: 'Performance ratio per plant surfaces a plant running below its rating as it happens, so performance is addressed early.', capabilities: ['Performance ratio per plant', 'Rating tracked live', 'Shortfall surfaced early', 'Performance across the fleet'] },
    ],
    closing: { heading: 'The renewable fleet, from planning to power.', text: 'Entroid runs the renewable fleet on one platform, from planning and construction to live generation.', cta: 'Request a demo' },
  },

  solar: {
    slug: 'solar',
    heroImage: '/bg/industries/renewable.jpg',
    category: 'Solar',
    eyebrow: 'Industries',
    headline: 'Every solar park, from planning to on-grid, on one platform.',
    intro:
      'The solar fleet runs on one command center. Development pipeline, construction, commissioning and live generation share a single view across every park, with inverter and string monitoring, performance ratio, maintenance and a portfolio map, so the fleet is seen and steered from planning to power.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'Solar, area by area.',
    metrics: [
      { value: 'One command center', label: 'Every park and inverter' },
      { value: 'Planning to power', label: 'Full park lifecycle' },
      { value: 'Live generation', label: 'MW and performance ratio' },
      { value: 'Fleet availability', label: 'Generating in real time' },
    ],
    modules: [
      { name: 'Development pipeline', tagline: 'Solar parks from planning to commissioning.', summary: 'Programs and projects carry each solar park through planning, design, construction and commissioning to on-grid.', capabilities: ['Programs and projects', 'Planning, design, construction', 'Commissioning to on-grid', 'Pipeline capacity in view'] },
      { name: 'Parks & inverters', tagline: 'Every park and inverter on one map.', summary: 'Solar parks, inverters and strings show on a live generation map, with fleet status and output for every site.', capabilities: ['Parks, inverters and strings', 'Live generation map', 'Generating, curtailed, offline status', 'Capacity and output per park'] },
      { name: 'Monitoring & generation', tagline: 'Irradiance, inverters and faults, surfaced.', summary: 'Live monitoring surfaces irradiance and inverter output beside active alarms, with faults down to the string.', capabilities: ['Irradiance and PV generation', 'Inverter and string monitoring', 'Active alarms by severity', 'String-level inspection'] },
      { name: 'Performance ratio', tagline: 'Output measured against rating, live.', summary: 'Performance ratio per park sits beside live generation, so output is read against the plant rating in real time.', capabilities: ['Performance ratio per park', 'Output against rating', 'Live generation context', 'Fleet-wide performance'] },
      { name: 'Maintenance', tagline: 'Work orders beside generation.', summary: 'Preventive and corrective work orders sit beside live generation, so maintenance on panels and inverters is managed in context.', capabilities: ['Work orders and scheduling', 'Preventive and corrective work', 'Panels and inverters', 'Backlog and status'] },
      { name: 'Sustainability', tagline: 'Generation and impact, reported.', summary: 'Generation, carbon and ESG metrics are reported fleet-wide, so impact is measured alongside solar output.', capabilities: ['Sustainability reporting', 'Generation and carbon', 'ESG metrics', 'Fleet-wide impact'] },
    ],
    closing: { heading: 'The solar fleet, in real time.', text: 'Entroid runs the solar fleet as one command center, from development pipeline to live generation.', cta: 'Request a demo' },
  },

  iot: {
    slug: 'iot',
    heroImage: '/bg/industries/iot%3Aatm.jpg',
    category: 'IoT',
    eyebrow: 'Industries',
    headline: 'Every connected device and use case, on one platform.',
    intro:
      'The connected estate runs on one platform. OT data from any device type, from pressure gauges and temperature loggers to telecom radios, telematics and thermostats, is collected, parsed and processed into use-case dashboards, with config actions and over-the-air upgrades. Any device is onboarded once, its telemetry flows into cold-chain, fleet and telecom dashboards, and configuration and firmware are pushed from one place.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'IoT, area by area.',
    metrics: [
      { value: 'Any device, one platform', label: 'Gauges to telematics' },
      { value: 'Collect, process, act', label: 'OT data to action' },
      { value: 'OTA at scale', label: 'Firmware over the air' },
      { value: 'Dashboard per use case', label: 'Cold-chain to fleet to telecom' },
    ],
    modules: [
      { name: 'OT data collection & parsing', tagline: 'Device telemetry, collected and made readable.', summary: 'OT data from any device is collected and parsed into a readable feed, so protocol signals become usable telemetry.', capabilities: ['OT data collection', 'Protocol parsing', 'Readable telemetry', 'Across every device feed'] },
      { name: 'Any device type', tagline: 'Every device onboarded onto one platform.', summary: 'Pressure gauges, temperature loggers, telecom radios and telematics onboard onto one platform, each added once.', capabilities: ['Pressure gauges and loggers', 'Telecom radios and telematics', 'Onboarded once', 'One platform for every device'] },
      { name: 'Use-case dashboards', tagline: 'A dashboard for every use case.', summary: 'Parsed telemetry flows into use-case dashboards, from cold-chain to fleet to telecom, each tuned to its operation.', capabilities: ['Use-case dashboards', 'Cold-chain, fleet, telecom', 'Telemetry in context', 'KPIs per use case'] },
      { name: 'Config actions', tagline: 'Configuration issued where the data is read.', summary: 'Config actions are issued from the same platform that reads the telemetry, so response is immediate and governed.', capabilities: ['Config actions', 'Issued from the platform', 'Immediate and governed', 'Beside the telemetry'] },
      { name: 'OTA firmware upgrades', tagline: 'Firmware pushed over the air, at scale.', summary: 'Over-the-air upgrades push firmware to devices from the platform, so a fleet is updated centrally.', capabilities: ['OTA firmware upgrades', 'Pushed from the platform', 'Fleet updated centrally', 'At scale'] },
      { name: 'Processing queues & telemetry', tagline: 'Telemetry processed as it streams.', summary: 'Processing queues handle telemetry as it streams in, so device data is processed and dashboarded across use cases.', capabilities: ['Processing queues', 'Streaming telemetry', 'Processed across use cases', 'Correlated device data'] },
    ],
    closing: { heading: 'The connected estate, on one platform.', text: 'Entroid runs the IoT estate as one platform, from device onboarding to dashboards, config and firmware over the air.', cta: 'Request a demo' },
  },

  ev: {
    slug: 'ev',
    heroImage: '/bg/industries/ev.jpg',
    category: 'EV',
    eyebrow: 'Industries',
    headline: 'The EV charging network, planned, energized and operating, on one platform.',
    intro:
      'The EV charging network runs on one platform, from planned sites to live kilowatt-hours. AI-scored site planning, a rollout funnel from proposed to live, grid-interconnection and DISCOM SLA tracking, and live operations across throughput, energy and uptime share a single view. Sites are planned on evidence, the grid critical path is tracked from day one, and the live network is operated end to end.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'EV, area by area.',
    metrics: [
      { value: 'Plan, energize, live', label: 'The whole rollout, one funnel' },
      { value: 'Grid critical path', label: 'DISCOM SLA from day one' },
      { value: 'Sites AI-scored', label: 'Planned on evidence' },
      { value: 'Network operated', label: 'Throughput, energy and uptime' },
    ],
    modules: [
      { name: 'Site planning', tagline: 'The next site, chosen on evidence.', summary: 'AI scores candidate sites by demand and density, so the highest-scoring clusters are surfaced and capital goes to the sites that will be used.', capabilities: ['AI-scored site planning', 'Demand and density signals', 'Highest-scoring clusters surfaced', 'Capital to sites that earn'] },
      { name: 'Rollout funnel', tagline: 'Every site, proposed to live.', summary: 'Each site moves through proposed, survey, construction, commissioning and live on one funnel, so the whole rollout is tracked in one place.', capabilities: ['Proposed to live funnel', 'Survey, construction, commissioning', 'Every site through its stages', 'The whole rollout in one view'] },
      { name: 'Grid interconnection & DISCOM SLA', tagline: 'The grid critical path, tracked from day one.', summary: 'Grid interconnection, DISCOM SLAs and long-lead substation items are tracked from project start, so energization stays on the critical path and is caught early.', capabilities: ['Grid interconnection tracking', 'DISCOM SLA from day one', 'Long-lead substation items', 'Energization on the critical path'] },
      { name: 'Network operations', tagline: 'The live network, operated end to end.', summary: 'Stations across the network are operated on the same platform as the rollout, so the build pipeline and the live network are one picture.', capabilities: ['Live network operations', 'Stations across the network', 'One platform with the rollout', 'Build and live, one picture'] },
      { name: 'Throughput, energy & uptime', tagline: 'A network that earns.', summary: 'Throughput, energy delivered and uptime stream live across the network, so a live network is operated for revenue.', capabilities: ['Throughput and energy delivered', 'Uptime tracked live', 'Performance across the network', 'Operated for revenue'] },
      { name: 'Charging network map', tagline: 'The whole network on one map.', summary: 'Planned, energizing and live stations show on one charging-network map, so the rollout funnel and the live network are seen together.', capabilities: ['Charging network map', 'Planned, energizing and live', 'Funnel and network together', 'Status across the network'] },
    ],
    closing: { heading: 'The network, from plan to live kilowatt-hours.', text: 'Entroid runs the EV charging network as one platform, from AI-scored site planning to a live network that earns.', cta: 'Request a demo' },
  },

  'atm-rollout': {
    slug: 'atm-rollout',
    heroImage: '/bg/industries/iot%3Aatm.jpg',
    category: 'ATM Rollout',
    eyebrow: 'Industries',
    headline: 'Every ATM site, from survey to commissioning, tracked against plan.',
    intro:
      'ATM rollout at scale brings site surveys, civil works, installation, integration, testing and commissioning together across thousands of sites and dozens of vendors on one platform. The whole site-delivery lifecycle runs as tracked work orders, with planned-versus-actual execution over time by program, site type and project. Every ATM stays traceable through its delivery stages, delivery trends read month over month, and the rollout is steered on plan.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'ATM rollout, area by area.',
    metrics: [
      { value: 'Survey to commissioned', label: 'The whole ATM lifecycle' },
      { value: 'Planned vs actual', label: 'Delivery over time' },
      { value: 'By site type and region', label: 'Delivery trends in view' },
      { value: 'Thousands of sites, one view', label: 'Every ATM rolled up' },
    ],
    modules: [
      { name: 'Site delivery lifecycle', tagline: 'Survey to commissioning, on one platform.', summary: 'Every ATM moves through survey, installation, integration, testing and commissioning on one platform, so each site is traceable through its delivery stages.', capabilities: ['Survey to commissioning', 'Installation and integration', 'Testing and commissioning', 'Every stage traceable'] },
      { name: 'Work-order delivery', tagline: 'Every stage runs as tracked work.', summary: 'The whole site-delivery lifecycle runs as tracked work orders, so survey, civil, install and commissioning move on one system.', capabilities: ['Work-order-based delivery', 'Survey, civil, install, commissioning', 'One tracked system', 'Every stage in view'] },
      { name: 'Planned vs actual execution', tagline: 'Delivery pace, plotted over time.', summary: 'Time-phased planned-versus-actual execution shows the rollout pace month over month, so delivery is seen and steered.', capabilities: ['Planned vs actual over time', 'Starts and completions', 'Month-over-month trends', 'Real delivery pace in view'] },
      { name: 'Delivery by program and region', tagline: 'Execution, broken out where it matters.', summary: 'Execution is broken out by program, site type and region, so delivery trends read early and effort goes where it counts.', capabilities: ['By program, site type and project', 'Site type and region breakout', 'Delivery trends early', 'Focus where it counts'] },
      { name: 'Delivery velocity', tagline: 'Rollout pace, measured across every site.', summary: 'Delivery velocity is measured across the rollout, so the pace of thousands of sites is tracked and kept on plan.', capabilities: ['Delivery velocity measured', 'Pace across the rollout', 'Trends surfaced early', 'Rollout kept on plan'] },
      { name: 'Milestones and completions', tagline: 'Every completion, rolled up.', summary: 'Milestones and completions are tracked and rolled up across programs and vendors, so the whole rollout reports as one execution view.', capabilities: ['Milestones and completions', 'Across programs and vendors', 'One execution rollup', 'Rollout status in view'] },
    ],
    closing: { heading: 'The rollout, on plan.', text: 'Entroid runs ATM rollout from survey to commissioning as tracked work orders, planned versus actual, so a rollout of thousands stays on plan.', cta: 'Request a demo' },
  },

  wealth: {
    slug: 'wealth',
    heroImage: '/bg/industries/wealth.jpg',
    category: 'Wealth',
    eyebrow: 'Industries',
    headline: 'The whole wealth business on one cockpit: AUM, flows, fees and clients.',
    intro:
      'The wealth business runs on one cockpit. AUM, net flows, fee economics, relationship-manager productivity and client health share a single live view, with net-flow intelligence across subscriptions and redemptions and revenue split by fee line, so the whole book is seen together and the board report is a click away.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'Wealth, area by area.',
    metrics: [
      { value: 'One business cockpit', label: 'AUM, flows, fees and clients' },
      { value: 'Net flows, live', label: 'Subscriptions and redemptions' },
      { value: 'Revenue by fee line', label: 'Management to advisory' },
      { value: 'Board report, a click', label: 'Generated from the cockpit' },
    ],
    modules: [
      { name: 'Group AUM & client base', tagline: 'The whole book on one cockpit.', summary: 'Group AUM, client count and growth show on one business cockpit, so the book is read at a glance.', capabilities: ['Group AUM and client count', 'Growth across the book', 'The book at a glance', 'One business cockpit'] },
      { name: 'Net-flow intelligence', tagline: 'Subscriptions, redemptions and net, live.', summary: 'Subscriptions, redemptions and net flow stream by period, so a change in the book is seen as it happens.', capabilities: ['Subscriptions and redemptions', 'Net flow by period', 'Flows in the moment', 'Streamed live'] },
      { name: 'Revenue economics', tagline: 'Run-rate revenue, by fee line.', summary: 'Run-rate revenue splits by management, trail, performance, AIF and advisory fees, so the economics of the book are clear.', capabilities: ['Revenue by fee line', 'Management to advisory', 'Run-rate economics', 'Revenue by source'] },
      { name: 'RM productivity', tagline: 'AUM per relationship manager, tracked.', summary: 'AUM per relationship manager and organization productivity are tracked continuously across the whole book.', capabilities: ['AUM per relationship manager', 'Organization productivity', 'Tracked continuously', 'Productivity across the book'] },
      { name: 'Client health', tagline: 'NPS and growth, in view.', summary: 'Client NPS and growth sit on the cockpit, so client health is read alongside AUM and flows.', capabilities: ['Client NPS', 'Client growth', 'Health beside AUM', 'Sentiment in view'] },
      { name: 'Compliance & board reporting', tagline: 'The board pack, generated from the cockpit.', summary: 'Compliance and the board report are generated from the same live cockpit, so the quarterly pack is a click away.', capabilities: ['Compliance in view', 'Board report generated', 'Live from the cockpit', 'Quarterly pack, a click'] },
    ],
    closing: { heading: 'The whole book, on one cockpit.', text: 'Entroid runs the wealth business as one cockpit, with AUM, net flows, fee economics and client health live.', cta: 'Request a demo' },
  },

  construction: {
    slug: 'construction',
    heroImage: '/bg/industries/construction.jpg',
    category: 'Construction',
    eyebrow: 'Industries',
    headline: 'The whole capital portfolio, on one command center.',
    intro:
      'Scheduling, cost, billing and claims run on one platform across every capital project. Earned value, critical-path risk, cashflow, contractual claims and HSE share a single live view, with a fleet of AI agents that flag the action ahead of a slip, so the whole portfolio runs on earned value and every project is governed to plan.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'Construction, area by area.',
    metrics: [
      { value: 'Portfolio on earned value', label: 'CPI and SPI, live' },
      { value: 'Slip predicted', label: 'Critical-path risk, ahead of the milestone' },
      { value: 'Cash and claims watched', label: 'Inflow gaps and time-bars flagged' },
      { value: 'Agents flag the action', label: 'Ahead of the slip' },
    ],
    modules: [
      { name: 'Earned value', tagline: 'The portfolio on CPI and SPI.', summary: 'Every project runs on earned value, so cost and schedule performance are measured across the whole portfolio.', capabilities: ['CPI and SPI', 'EAC and VAC', 'Cost and schedule performance', 'Portfolio-wide earned value'] },
      { name: 'Critical-path & schedule risk', tagline: 'Milestone slips, caught early.', summary: 'A schedule-risk agent watches critical-path float and flags activities predicted to slip, so an EOT variation is raised before the milestone.', capabilities: ['Critical-path float', 'Schedule-risk agent', 'Slips flagged early', 'EOT variations raised ahead'] },
      { name: 'Cashflow & RA billing', tagline: 'Inflow protected ahead of time.', summary: 'Cashflow and RA billing sit on the command center, with a forecaster that surfaces the inflow horizon and the billing event to bring forward.', capabilities: ['Cashflow forecasting', 'RA billing', '90-day inflow horizon', 'Billing events surfaced'] },
      { name: 'Contractual claims & time-bars', tagline: 'Time-bars served in time.', summary: 'A claims and notice sentinel watches contractual claims and FIDIC time-bars, so a notice is acted on well within its window.', capabilities: ['Contractual claims', 'FIDIC time-bars', 'Notice sentinel', 'Claims served in time'] },
      { name: 'HSE, QA & physical progress', tagline: 'Assurance beside earned value.', summary: 'HSE, QA and physical progress sit beside cost and schedule, so assurance is read together with earned value.', capabilities: ['HSE and QA', 'Physical progress', 'Assurance in context', 'Beside cost and schedule'] },
      { name: 'AI agent fleet', tagline: 'The action flagged before the slip.', summary: 'A fleet of AI agents watches schedule, cost, cash and claims, so the action is flagged ahead of time across every project.', capabilities: ['Schedule, cost, cash, claims agents', 'Action flagged first', 'Portfolio-wide coverage', 'Ahead of the slip'] },
    ],
    closing: { heading: 'Every project, governed to plan.', text: 'Entroid runs the whole capital portfolio as one command center, across earned value, cashflow and claims.', cta: 'Request a demo' },
  },

  manufacturing: {
    slug: 'manufacturing',
    heroImage: '/bg/industries/manufacturing.jpg',
    category: 'Manufacturing',
    eyebrow: 'Industries',
    headline: 'The whole plant, planning through logistics, on one command dashboard.',
    intro:
      'The plant runs on one command dashboard, from planning through logistics. Live OEE and a line-by-line board, weekly production, scrap and first-pass quality, energy per tonne, stack emissions and OTIF share one screen, so every line, permit and tonne is seen as the shift happens.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'Manufacturing, area by area.',
    metrics: [
      { value: 'One command dashboard', label: 'Planning through logistics' },
      { value: 'Live OEE', label: 'Line by line, as the shift runs' },
      { value: 'Energy per tonne', label: 'Watched shift by shift' },
      { value: 'OTIF on one screen', label: 'Planning to delivery' },
    ],
    modules: [
      { name: 'Live OEE & line board', tagline: 'Output line by line, as the shift runs.', summary: 'OEE, output and reject show live on a line board, so the shift is run as it happens.', capabilities: ['Live OEE by line', 'Line-by-line board', 'Output and reject live', 'The shift run as it happens'] },
      { name: 'Production planning & trend', tagline: 'Planning and weekly output on one view.', summary: 'Production planning and weekly output trend sit on the operations view, so schedule and delivery are read together.', capabilities: ['Production planning', 'Weekly production trend', 'Schedule beside output', 'Planning in context'] },
      { name: 'Scrap & first-pass quality', tagline: 'Quality watched on every heat.', summary: 'Scrap and first-pass quality are tracked on every heat, so quality is seen in real time.', capabilities: ['Scrap tracking', 'First-pass quality', 'Quality on every heat', 'Caught early'] },
      { name: 'Energy per tonne & emissions', tagline: 'Energy and emissions tracked shift by shift.', summary: 'Energy per tonne and stack emissions are tracked shift by shift against last week, so drift is caught early.', capabilities: ['Energy per tonne', 'Stack emissions', 'Shift-by-shift tracking', 'Drift caught early'] },
      { name: 'OTIF & logistics', tagline: 'Planning to delivery, on one screen.', summary: 'Planning, production and OTIF sit on one dashboard, so delivery performance is read against the orders it carries.', capabilities: ['OTIF tracking', 'Planning to delivery', 'Delivery beside production', 'Orders in view'] },
      { name: 'Shop-floor approvals & permits', tagline: 'Approvals cleared in one queue.', summary: 'PRO releases, permits and calibrations clear in one approval queue on the dashboard, so work moves in context.', capabilities: ['PRO releases and permits', 'Calibrations tracked', 'One approval queue', 'Approvals on the dashboard'] },
    ],
    closing: { heading: 'The whole plant, run as one shift.', text: 'Entroid runs the plant as one command dashboard, from live OEE to OTIF.', cta: 'Request a demo' },
  },

  'data-center': {
    slug: 'data-center',
    heroImage: '/bg/industries/data-center.jpg',
    category: 'Data Center',
    eyebrow: 'Industries',
    headline: 'Plan, deliver and operate the data center estate, on one command center.',
    intro:
      'A unified operating system for the complete data center lifecycle. Capacity and connectivity planning, project delivery and live operations run across every site on one command center, with incidents, alarms, SLAs, power and efficiency in a single view, so the whole estate is seen, steered and kept resilient.',
    primaryCta: 'Request a demo',
    secondaryCta: 'Explore Platform',
    sectionsLabel: 'Solution areas',
    sectionsHeading: 'Data Center, area by area.',
    metrics: [
      { value: 'One command center', label: 'Every site, one estate' },
      { value: 'Plan, deliver, operate', label: 'The full lifecycle' },
      { value: 'Efficiency in view', label: 'PUE, availability, MTTR' },
      { value: 'Resilience scored', label: 'N+1, power headroom, health' },
    ],
    modules: [
      {
        name: 'Estate command center',
        tagline: 'The whole estate on one pulse.',
        summary: 'Network health, open incidents, critical alarms, power headroom and circuit status show on one estate pulse, so the state of every data center is read at a glance.',
        capabilities: ['Network health and health index', 'Open incidents and alarms', 'Power headroom and circuits', 'Estate pulse at a glance'],
      },
      {
        name: 'Operations',
        tagline: 'Incidents, alarms and SLAs, live.',
        summary: 'SLA-breaching and high-severity incidents sit beside critical alarms and device reachability, so the operation is steered to the issue that matters now.',
        capabilities: ['SLA-breaching and SEV1 incidents', 'Critical and major alarms', 'Device reachability', 'Incident and alarm health'],
      },
      {
        name: 'Capacity & power',
        tagline: 'Capacity planned before it runs out.',
        summary: 'Power headroom, PUE, GPU and rack capacity and subnet forecasting are tracked together, so the next deployment lands where capacity exists.',
        capabilities: ['Power headroom and PUE', 'GPU and rack capacity', 'Subnet and IP forecasting', 'Capacity for the next deployment'],
      },
      {
        name: 'Change & maintenance',
        tagline: 'Changes and maintenance, governed.',
        summary: 'Changes in flight, logged incidents and scheduled maintenance run beside operations, so every change is coordinated against the live estate.',
        capabilities: ['Changes in flight', 'Raise change and log incident', 'Scheduled maintenance', 'Change beside operations'],
      },
      {
        name: 'Efficiency, cost & resilience',
        tagline: 'Cost, carbon and resilience, measured.',
        summary: 'PUE, availability, mean MTTR, monthly opex, carbon and N+1 redundancy are measured across the estate, so efficiency and resilience are managed together.',
        capabilities: ['PUE and availability', 'Mean MTTR and monthly opex', 'Carbon per month', 'N+1 redundancy'],
      },
      {
        name: 'Map & topology',
        tagline: 'Every site and its network, mapped.',
        summary: 'An estate map and network topology surface diverse-path risk and connectivity health, so a single point of failure is seen before it isolates a site.',
        capabilities: ['Estate map across sites', 'Network topology', 'Diverse-path risk surfaced', 'Connectivity health'],
      },
    ],
    closing: {
      heading: 'The estate, planned to operated.',
      text: 'Entroid runs the data center estate as one command center, from capacity planning to live operations.',
      cta: 'Request a demo',
    },
  },
}
