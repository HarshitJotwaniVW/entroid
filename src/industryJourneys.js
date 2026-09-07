/**
 * End-to-end operational "journey" per industry, added on top of the existing
 * industries.js content (kept untouched) to give each Industry page the same depth
 * as the Use Cases detail pages: a step-by-step walkthrough of how the vertical runs
 * on the platform. Keyed by industry slug; each is 5 stages of {title, text}.
 *
 * Grounded in each industry's own solution areas. Voice: third person, no pronouns,
 * no "X, not Y", no em-dashes, business value first.
 */

export const industryJourneys = {
  'oil-and-gas': [
    { title: 'Produce across the estate', text: 'Production and availability stream live from wells, pipelines and refineries onto one operations view.' },
    { title: 'Watch safety beside output', text: 'HSE metrics and incidents sit on the same view as production, so operating performance and safety are read together.' },
    { title: 'Manage integrity ahead of failure', text: 'Risk-based inspection ranks overdue inspections and assets at risk, so integrity is addressed before it becomes an incident.' },
    { title: 'Keep permits in view', text: 'Permit status, approvals and compliance obligations sit beside operations, so nothing waits out of sight.' },
    { title: 'Rank the estate by attention', text: 'An asset-network map and a sites-needing-attention list surface the critical site first.' },
  ],
  wind: [
    { title: 'Develop to on-grid', text: 'Programs and projects carry each site through planning, construction and commissioning to on-grid.' },
    { title: 'See the fleet generate', text: 'Farms and turbines show on a live generation map, with output for every site.' },
    { title: 'Surface faults early', text: 'SCADA monitoring surfaces active alarms by severity, down to the turbine.' },
    { title: 'Maintain in context', text: 'Preventive and corrective work orders sit beside live generation.' },
    { title: 'Model and report', text: 'A digital twin informs operations, and generation, carbon and ESG are reported fleet-wide.' },
  ],
  telecom: [
    { title: 'Map every site', text: 'Macro, small-cell, DAS and C-RAN sites show on one geospatial map.' },
    { title: 'Move through activation', text: 'Each site progresses through Build, Integration and On-Air on one pipeline.' },
    { title: 'Coordinate RF and backhaul', text: 'RF coordination and backhaul sit on the same map as the sites.' },
    { title: 'Unblock permits early', text: 'Jurisdictional holds are surfaced against the sites they block, so dependencies are worked down before they stall on-air.' },
    { title: 'Steer to on-air', text: 'Rollout velocity and the bottleneck stage are live, so the highest-leverage move is surfaced.' },
  ],
  renewable: [
    { title: 'Plan and design', text: 'Each wind farm and solar park is planned and designed on one platform.' },
    { title: 'Build to on-grid', text: 'Construction and commissioning are tracked to on-grid.' },
    { title: 'See the portfolio', text: 'Wind farms and solar parks show together by technology, region and capacity on one map.' },
    { title: 'Generate live', text: 'SCADA output streams per plant in real time, wind and solar side by side.' },
    { title: 'Watch performance', text: 'Performance ratio surfaces a wind farm or solar park running below rating as it happens.' },
  ],
  solar: [
    { title: 'Develop the pipeline', text: 'Programs and projects carry each park through planning and construction to on-grid.' },
    { title: 'See parks and inverters', text: 'Parks, inverters and strings show on a live generation map.' },
    { title: 'Monitor generation', text: 'Irradiance and inverter output sit beside active alarms, down to the string.' },
    { title: 'Measure performance', text: 'Performance ratio per park reads output against rating, live.' },
    { title: 'Maintain in context', text: 'Work orders on panels and inverters sit beside generation.' },
  ],
  iot: [
    { title: 'Onboard any device', text: 'Any device type, from gauges to telematics, onboards onto one platform, each added once.' },
    { title: 'Collect and parse', text: 'OT data is collected and parsed into readable telemetry.' },
    { title: 'Dashboard per use case', text: 'Telemetry flows into cold-chain, fleet and telecom dashboards.' },
    { title: 'Act from the platform', text: 'Config actions are issued from the same platform that reads the data.' },
    { title: 'Upgrade over the air', text: 'Firmware is pushed to the fleet over the air, at scale.' },
  ],
  ev: [
    { title: 'Plan on evidence', text: 'AI scores candidate sites by demand and density, so capital goes to the sites that will be used.' },
    { title: 'Roll out the funnel', text: 'Each site moves from proposed to live on one funnel.' },
    { title: 'Track the grid critical path', text: 'Grid interconnection and DISCOM SLAs are tracked from day one.' },
    { title: 'Operate the live network', text: 'Stations are operated on the same platform as the rollout.' },
    { title: 'Measure what earns', text: 'Throughput, energy delivered and uptime stream live across the network.' },
  ],
  'atm-rollout': [
    { title: 'Survey and design', text: 'Each ATM starts with a site survey against a standard template.' },
    { title: 'Deliver as tracked work', text: 'Survey, civil, install, integration and commissioning run as tracked work orders.' },
    { title: 'Track planned versus actual', text: 'Time-phased execution shows the rollout pace month over month.' },
    { title: 'Break out by program and region', text: 'Execution is broken out by program, site type and region.' },
    { title: 'Roll up to one view', text: 'Milestones and completions roll up across programs and vendors.' },
  ],
  wealth: [
    { title: 'See the whole book', text: 'Group AUM, client count and growth show on one cockpit.' },
    { title: 'Read net flows live', text: 'Subscriptions, redemptions and net flow stream by period.' },
    { title: 'Split the revenue', text: 'Run-rate revenue splits by fee line, from management to advisory.' },
    { title: 'Track productivity and health', text: 'AUM per relationship manager and client NPS sit on the cockpit.' },
    { title: 'Report to the board', text: 'Compliance and the board pack are generated from the live cockpit.' },
  ],
  construction: [
    { title: 'Run on earned value', text: 'Every project runs on CPI and SPI across the whole portfolio.' },
    { title: 'Predict the slip', text: 'A schedule-risk agent flags activities predicted to slip, so an extension of time is raised early.' },
    { title: 'Protect the cash', text: 'A forecaster surfaces the inflow horizon and the billing event to bring forward.' },
    { title: 'Serve claims in time', text: 'A sentinel watches contractual claims and time-bars, so a notice is acted on within its window.' },
    { title: 'Let the agents flag the action', text: 'A fleet of agents watches schedule, cost, cash and claims across every project.' },
  ],
  manufacturing: [
    { title: 'Run the shift live', text: 'OEE, output and reject show line by line as the shift runs.' },
    { title: 'Plan against output', text: 'Production planning and weekly trend sit beside the line board.' },
    { title: 'Watch quality on every heat', text: 'Scrap and first-pass quality are tracked in real time.' },
    { title: 'Track energy and emissions', text: 'Energy per tonne and stack emissions are watched shift by shift.' },
    { title: 'Deliver OTIF', text: 'Planning, production and OTIF sit on one screen, so delivery is read against its orders.' },
  ],
  'data-center': [
    { title: 'See the estate pulse', text: 'Network health, open incidents, critical alarms and power headroom show on one pulse.' },
    { title: 'Steer to what matters', text: 'SLA-breaching incidents and critical alarms are surfaced first.' },
    { title: 'Plan capacity ahead', text: 'Power headroom, PUE and rack capacity guide the next deployment.' },
    { title: 'Govern change', text: 'Changes in flight and scheduled maintenance run beside live operations.' },
    { title: 'Measure efficiency and resilience', text: 'PUE, availability, MTTR, carbon and N+1 redundancy are measured across the estate.' },
  ],
}
