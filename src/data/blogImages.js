/**
 * Per-space hero images for the topic blog articles.
 * Every URL is a verified-loading Unsplash photo (same source/style as the 13
 * primary posts), mapped one-per-space by theme, so each category has its own
 * consistent visual identity instead of a gradient placeholder.
 */
const U = (id) => `/blog-assets/${id}.jpg`

export const categoryHero = {
  'aiops': U('1558494949-ef010cbdcc31'),            // server room / ops monitoring
  'app-gen': U('1461749280684-dccba630e2f6'),       // code on screen
  'audits': U('1589829545856-d10d557cf95f'),        // documents + magnifier
  'autonomous-agents': U('1531746790731-6c087fecd65a'), // robotics / automation
  'business-intelligence': U('1460925895917-afdab827c52f'), // analytics desk
  'constructos': U('1541888946425-d81bb19240f5'),   // construction site
  'conversational-agents': U('1556742049-0cfed4f6a45d'), // chat / interface
  'crm': U('1521791136064-7986c2920216'),           // handshake / relationship
  'data-governance': U('1526374965328-7f61d4dc18c5'), // network / lineage
  'devsecops': U('1550751827-4bd374c3f58b'),        // cybersecurity / code
  'enterprise-strategy': U('1507003211169-0a1dd7228f2d'), // executive / strategy
  'finance-erp': U('1554224155-6726b3ff858f'),      // financial documents
  'finops': U('1451187580459-43490279c0fa'),        // cloud
  'grc': U('1563013544-824ae1b704d3'),              // governance / boardroom
  'ipaas': U('1544197150-b99a580bb7a8'),            // integration / connectivity
  'it-asset-endpoint': U('1517336714731-489689fd1ca8'), // devices / laptops
  'it-service-management': U('1504328345606-18bbc8c9d7d1'), // operations desk
  'manufacturing': U('1565043666747-69f6646db940'), // factory floor
  'mlops': U('1677442136019-21780ecad995'),         // AI / ML
  'ontology': U('1551288049-bebda4e38f71'),         // data / graph
  'people-hcm': U('1600880292203-757bb62b4baf'),    // team / people
  'ppm': U('1517245386807-bb43f82c33c4'),           // planning board
  'process-mining': U('1543286386-713bdd548da4'),   // dashboards / flow
  'procurement': U('1450101499163-c8848c66ca85'),   // contract signing
  'siem-soar': U('1614064641938-3bbee52942c7'),     // security lock
  'vision-ai': U('1581092160607-ee22621dd758'),     // industrial vision / scanning
  'wealthos': U('1533750349088-cd871a92f312'),      // wealth / growth
}

// Used if a space has no mapping (real photo, never a gradient).
export const DEFAULT_HERO = U('1578575437130-527eed3abbec')

export const heroFor = (post) =>
  post.heroImage || categoryHero[post.categorySlug] || DEFAULT_HERO
