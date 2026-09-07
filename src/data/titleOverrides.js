/**
 * Clickbait / controversial title overrides for a CURATED subset of posts.
 * Keyed by slug -> punchier, forced-to-click headline. Each stays true to the
 * article's actual argument (no bait-and-switch); the rest of the ~180 posts
 * keep their original titles. Displayed title only (card + hero); article
 * bodies are unaffected. Remove a line to revert that post to its original.
 */
export const titleOverrides = {
  // Primary posts
  'ai-chatbot-wrong-pricing': 'Your AI Chatbot Just Gave 47 Customers a Deal Nobody Authorized.',
  'vendor-renewed-at-3x-market-rate': 'A Vendor Charged You 3× Market Rate for Six Months. Nobody Noticed.',

  // Finance & ERP
  'finance-erp-reconciliation-is-a-symptom': "Stop Automating Reconciliation. You're Perfecting a Problem That Shouldn't Exist.",
  'finance-erp-the-goal-is-no-close': "Every 'Faster Close' Vendor Is Selling You the Wrong Goal.",

  // Business Intelligence
  'business-intelligence-dashboard-is-a-recommendation': 'Your Dashboard Has Never Made a Single Decision.',

  // Procurement
  'procurement-autonomous-agent-cant-buy': "Your 'Autonomous' Procurement Agent Can't Actually Buy Anything.",

  // MLOps
  'mlops-you-ranked-model-governance': "You Bought the #1 AI Governance Tool. It Still Can't Prove One Decision Was Authorized.",
  'mlops-deployed-endpoint-is-not-production': 'A Deployed Model Is Not in Production. It Is a Prediction With No Owner.',

  // IT Service Management
  'it-service-management-cmdb-is-a-photograph': "Your CMDB Is a Photograph of a System That's Already Changed.",

  // Data Governance
  'data-governance-your-ai-governance-is-a-catalog-entry': "Your 'AI Governance' Is a Catalog Entry. The Agent Is About to Act Anyway.",

  // Wealthos
  'wealthos-a-fee-change-is-a-money-movement': "That 'Settings Change' Just Moved Client Money. Nobody Approved It.",

  // SIEM & SOAR
  'siem-soar-soar-asks-300-other-tools': 'Your SOAR Has Never Contained a Threat. It Just Asks 300 Other Tools To.',

  // Vision AI
  'vision-ai-we-alerted-someone-is-not-an-osha-defense': "'We Sent an Alert' Won't Hold Up When OSHA Asks Who Stopped the Line.",

  // People & HCM
  'people-hcm-offboarding-is-a-security-incident': 'Every Employee You Offboarded Is Still a Door Into Your Systems.',

  // Enterprise Strategy
  'enterprise-strategy-the-cascade-diagram-changes-nothing': 'Your Strategy Cascade Diagram Has Changed Nothing.',

  // Conversational Agents
  'conversational-agents-who-guards-the-guardrail': "Your AI Guardrail Is Just Another AI You Also Can't Trust.",

  // Ontology
  'ontology-the-accuracy-trap': "Fewer Hallucinations Won't Save You. Your 'Accurate' AI Is Still Ungoverned.",

  // FinOps
  'finops-if-cost-control-needs-a-committee': "If Controlling Cloud Cost Needs a Committee, You Don't Control It.",

  // Process Mining
  'process-mining-keylog-your-employees': 'You Shouldn’t Have to Keylog Your Own Employees to Understand Your Process.',

  // CRM
  'crm-record-is-not-the-runtime': "Your 360° Customer View Still Can't Fulfill a Single Order.",
}
