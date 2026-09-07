'use client'

import {
  Article, Bank, BatteryCharging, BookOpen, Briefcase, Broadcast, CellTower,
  ChartLineUp, ClipboardText, Crane, CreditCard, Crosshair, CurrencyCircleDollar,
  Database, Eye, Factory, GasCan, Gauge, Graph, Handshake, HardDrives, Kanban,
  MagnifyingGlass, Question, Robot, SealCheck, ShieldCheck, ShieldStar, Stack,
  Storefront, Target, Toolbox, Truck, UserCircle, Users, UsersThree, Vault,
  VideoCamera, Warning, Wind, Wrench, Compass,
} from '@phosphor-icons/react'

/* ============================================================================
   Menu iconography (Phosphor).

   One icon per navigable item, keyed by the exact `name` in content.js. Kept
   here rather than in the content file so the copy stays free of presentation.
   `Compass` is the fallback, so a new menu entry renders sensibly before it is
   given an icon of its own.
   ========================================================================== */
const ICONS = {
  // Product · Intelligence Hub
  'Semantic Ontology': Graph,
  'Command Center': Gauge,
  Sherlock: MagnifyingGlass,
  Marketplace: Storefront,
  Sentinel: ShieldCheck,

  // Product · Corporate Drivers
  Strategy: Target,
  'Business Planning': ChartLineUp,
  'Business Portfolios': Briefcase,
  OKRs: Crosshair,
  Alliances: Handshake,
  Committees: UsersThree,

  // Product · Trust, Governance & Assurance
  Governance: Bank,
  Risks: Warning,
  Compliance: ClipboardText,
  Audits: SealCheck,
  'Data Governance': Database,
  Explainability: Eye,

  // Product · Functions
  Customers: UserCircle,
  People: Users,
  'Supply Chain': Truck,
  Operations: Wrench,
  Finance: CurrencyCircleDollar,
  PMO: Kanban,
  'IT & CyberSecurity': ShieldStar,

  // Product · Engineering
  'AI Foundry': Robot,
  'Engineering Toolkits': Toolbox,
  'Operations Toolkits': Stack,

  // Industries
  Telecom: CellTower,
  Renewable: Wind,
  Wealth: Vault,
  EV: BatteryCharging,
  'Data Center': HardDrives,
  IoT: Broadcast,
  Manufacturing: Factory,
  Construction: Crane,
  'Oil and Gas': GasCan,
  'ATM Rollout': CreditCard,

  // Resources
  Blogs: Article,
  Videos: VideoCamera,
  FAQ: Question,
  Glossary: BookOpen,
}

/* Duotone reads as two tones of one hue, which is what gives the tiles their
   soft, filled look without needing a second colour per icon. */
export const NavIcon = ({ name }) => {
  const Glyph = ICONS[name] || Compass
  return <Glyph className="navicon" size={20} weight="duotone" aria-hidden="true" />
}
