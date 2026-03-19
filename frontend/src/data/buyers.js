// ─── BUYERS DATA ───────────────────────────────────────────────────────────────
export const buyers = {
  company: {
    headline: "Enterprise Leadership",
    tagline: "C-suite stakeholders who approve budget and set vendor strategy.",
    roles: [
      { title: "CIO / CTO", focus: "Digital transformation, AI strategy, platform consolidation", priority: "Future-proof investment, reduce vendor sprawl, accelerate AI readiness — safety of decision matters as much as value" },
      { title: "CISO", focus: "Security posture, zero trust, compliance (PCI, HIPAA, SOX)", priority: "Embedded security over bolt-on, reduced attack surface, post-quantum readiness — increasingly influential in networking decisions" },
      { title: "CFO / Procurement", focus: "TCO, ROI, subscription economics, capital allocation", priority: "CapEx-to-OpEx shift, consolidated vendor spend, measurable outcomes — use Forrester TEI studies at the validation stage" },
    ],
  },
  solutionCategory: {
    headline: "Workplace Decision Makers",
    tagline: "Directors and VPs who own the evaluation and shortlist.",
    roles: [
      { title: "VP of IT / Infrastructure", focus: "Network and UC modernization, cloud strategy, operational simplicity", priority: "Unified management, AI-driven operations, reduced MTTR — builds the business case for the CIO" },
      { title: "VP of Security", focus: "Zero trust architecture, SASE, compliance", priority: "Security fused into the fabric, not layered on top — veto power on networking and collaboration purchases" },
      { title: "VP of Workplace / Facilities", focus: "Employee experience, hybrid enablement, sustainability", priority: "Smart spaces, occupancy analytics, energy efficiency — emerging influencer in both networking and collaboration decisions" },
    ],
  },
  products: [
    {
      id: "networking",
      name: "Network Buyers",
      tagline: "Teams evaluating campus refresh, branch modernization, and Wi-Fi upgrades.",
      roles: [
        {
          id: "nb1",
          title: "Network Architect",
          focus: "Network design, capacity planning, technology selection — builds the shortlist and runs PoC",
          priorities: ["Meraki + Catalyst unification path and management flexibility", "Wi-Fi 7 readiness and single-SKU dual-mode APs", "Integration with existing security and observability stack"],
          engagementTips: ["Lead with architecture simplification — one platform, pick your management", "Show Global Overview dashboard and Smart Switch flexibility", "Address the Gartner MQ — IDC MarketScape named Cisco Leader for WLAN"],
        },
        {
          id: "nb2",
          title: "Network Operations Manager",
          focus: "Day-to-day management, troubleshooting, uptime — cares about reducing alert fatigue",
          priorities: ["Cross-Domain Operations for cross-domain troubleshooting", "Workflows Engine for automation", "ThousandEyes integration for end-to-end visibility"],
          engagementTips: ["Demo Cross-Domain Operations with real telemetry — show autonomous root-cause analysis", "Highlight AgenticOps: AI agents that fix before humans escalate", "Show cross-domain correlation: network + security + observability in one view"],
        },
        {
          id: "nb3",
          title: "IT Director (Branch/Campus)",
          focus: "Site deployments, user experience, budget — owns the refresh cycle (5-7 year cadence)",
          priorities: ["Simplified branch deployments with Cisco Unified Branch", "Single licensing model portable across management modes", "Cost-effective Wi-Fi 7 migration path"],
          engagementTips: ["Emphasize Cisco Networking Subscription — one license, 36-84 month terms", "Show zero-touch provisioning and cloud-managed fabric", "Present embedded security: post-quantum crypto and LiveProtect built in"],
        },
      ],
    },
    {
      id: "collaboration",
      name: "Collaboration Buyers",
      tagline: "Teams evaluating UCaaS migration, room modernization, and contact center transformation.",
      roles: [
        {
          id: "cb1",
          title: "UC / Collaboration Director",
          focus: "Unified communications strategy, vendor consolidation, PBX-to-cloud migration",
          priorities: ["Cloud/hybrid/on-prem calling flexibility — migrate at your own pace", "AI-powered meeting experiences and agentic capabilities", "Platform consolidation ROI across meetings, calling, and messaging"],
          engagementTips: ["Lead with hybrid calling — only vendor with cloud, on-prem, and hybrid with full parity", "Show AI Assistant: transcription, summaries, Task Agent, Translator Agent", "Reference Gartner UCaaS Leader (7 years) and 99.999% SLA across 190+ markets"],
        },
        {
          id: "cb2",
          title: "Workplace Experience Manager",
          focus: "Employee experience, space utilization, hybrid work enablement, sustainability",
          priorities: ["Smart room technology with RoomOS 26 and NVIDIA AI", "Space optimization data from Cisco Spaces", "Multi-platform device support — Webex, Teams, Zoom, Google Meet"],
          engagementTips: ["Demo Cisco Spaces: occupancy, desk booking, sustainability controls", "Show Room Bar Pro running Teams and Webex natively — open ecosystem", "Reference Omdia Leader for Smart Collaboration Devices 2025"],
        },
        {
          id: "cb3",
          title: "Contact Center / CX Director",
          focus: "Customer experience, agent productivity, self-service, CRM integration",
          priorities: ["AI-powered self-service with Webex AI Agent", "Agent assist, quality management, and automated wrap-up", "Native Salesforce, ServiceNow, and Epic integrations"],
          engagementTips: ["Demo Webex AI Agent for autonomous self-service in 50+ languages", "Show multi-agent collaboration via A2A and MCP protocols", "Reference IDC MarketScape Leader for CCaaS and 75%+ YoY agent license growth"],
        },
      ],
    },
  ],
};

