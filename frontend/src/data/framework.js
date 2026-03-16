// ─── FRAMEWORK DATA ────────────────────────────────────────────────────────────
export const fw = {
  company: {
    headline: "One Cisco",
    tagline: "One platform for the Agentic AI era.",
    description: "Cisco uniquely combines networking, security, observability, and collaboration into a single platform where each capability compounds the value of every other. Under one product organization, Cisco's breadth becomes its greatest differentiator — when customers combine networking and collaboration on Cisco, the integrated experience is unmatched by any point-solution vendor. Platforms, not products, deliver at the pace the AI era demands.",
  },
  solutionCategory: {
    headline: "Futureproof Workplace",
    tagline: "Modernize everywhere people work and connect.",
    vision: "Cisco helps organizations build intelligent, secure, AI-ready work environments — reducing costs, improving sustainability, attracting the best talent, and preparing for a future where human workers and AI agents operate side by side. Analyst frameworks from Gartner, Forrester, and IDC all converge on the same insight: workplace modernization is no longer optional.",
    solution: "The Secure Network Architecture transforms campus, branch, and collaboration infrastructure through three pillars: AgenticOps that automate IT operations, security fused directly into the network fabric, and next-generation devices purpose-built for AI workloads.",
    pillars: [
      { label: "AgenticOps for Operational Simplicity" },
      { label: "Security Fused into the Network" },
      { label: "Devices Ready for AI" },
    ],
  },
  products: [
    {
      id: "networking",
      name: "Cisco Networking",
      subtitle: "Campus & Branch",
      tagline: "One network. Your choice of management. Built for AI.",
      description: "Cisco unifies Meraki and Catalyst into a single networking platform — one hardware lineup, one licensing model, your choice of cloud or on-prem management. AI-native assurance from ThousandEyes, agentic operations via AI Canvas, enterprise-grade Wi-Fi 7, and zero-trust security embedded at every layer deliver the infrastructure for the AI era. Recognized as a Leader in the IDC MarketScape for Enterprise WLAN and a five-time Gartner Magic Quadrant Leader for SD-WAN.",
      initiatives: [
        {
          id: "n1",
          name: "Meraki + Catalyst Unification",
          tagline: "One platform. Pick how you deploy.",
          description: "Cisco converges Meraki and Catalyst into a single architecture — unified hardware on Silicon One ASICs, unified licensing via Cisco Networking Subscription, and a single Global Overview dashboard. New Wi-Fi 7 APs ship as one SKU that boots into Meraki cloud or Catalyst controller mode. No more either/or — deploy cloud-managed, on-prem, or hybrid, and switch at any time.",
          projects: [
            { name: "Smart Switches (C9350/C9610)", detail: "Silicon One-powered switches manageable via Meraki Dashboard or Catalyst Center — same hardware, customer chooses management mode" },
            { name: "Global Overview Dashboard", detail: "Single cloud dashboard providing unified visibility into both Meraki and Catalyst Center-managed networks — beta November 2025" },
            { name: "Cisco Networking Subscription", detail: "One license covering Wireless, Switching, and WAN across Essentials and Advantage tiers — portable across management modes, 36-84 month terms" },
          ],
        },
        {
          id: "n2",
          name: "AgenticOps & AI-Powered Network Operations",
          tagline: "From reactive alerts to autonomous action.",
          description: "AgenticOps transforms IT with AI Canvas — the industry's first generative UI for cross-domain troubleshooting, powered by the Deep Network Model trained on 40M+ tokens of CCIE-level expertise. AI agents continuously monitor telemetry, correlate anomalies, test fixes against digital twins, and only escalate to humans when necessary. Gartner's 2025 Hype Cycle calls Agent-Native I&O the biggest disruption since cloud.",
          projects: [
            { name: "AI Canvas", detail: "Multiplayer generative workspace unifying NetOps, SecOps, and DevOps with real-time telemetry from Meraki, ThousandEyes, and Splunk — GA October 2025" },
            { name: "Cisco AI Assistant", detail: "Natural language automation for switch migration, Wi-Fi setup, device onboarding, and root-cause analysis directly in the Meraki Dashboard" },
            { name: "Workflows Engine", detail: "Low/no-code cross-domain automation spanning Meraki, Catalyst Center, SD-WAN Manager, ISE, Nexus, and third-party apps" },
          ],
        },
        {
          id: "n3",
          name: "Wi-Fi 7 & Secure Infrastructure",
          tagline: "Enterprise-grade wireless with security built in.",
          description: "Cisco's Wi-Fi 7 portfolio delivers the bandwidth, latency, and reliability demanded by AI workloads and hybrid workers. Single-SKU, dual-mode APs eliminate region-specific ordering. Every device embeds ThousandEyes synthetic testing and zero-trust security — from post-quantum cryptography on Secure Routers to LiveProtect on switches. Dell'Oro forecasts Wi-Fi 7 will drive double-digit WLAN growth through 2026.",
          projects: [
            { name: "CW9172I Series", detail: "Industry's first Wi-Fi 7 certified high-density AP for branches, stores, and clinics — with built-in ThousandEyes active testing" },
            { name: "CW9179F Series", detail: "Flagship Wi-Fi 7 APs for stadiums, large venues, and high-density campus environments" },
            { name: "Cisco 8000 Secure Routers", detail: "Single-box branch WAN with native SD-WAN, L7 NGFW, and post-quantum cryptography at 3x prior throughput" },
          ],
        },
      ],
    },
    {
      id: "collaboration",
      name: "Collaboration",
      subtitle: "Webex & Intelligent Workspaces",
      tagline: "Connected Intelligence — where people and AI work better together.",
      description: "Cisco's Collaboration portfolio encompasses Webex Suite, Webex Calling, Webex Contact Center, AI-powered devices on RoomOS, and Cisco Spaces. The Connected Intelligence vision connects people to people, people to AI, and AI to AI — all secured on Cisco infrastructure. Gartner Magic Quadrant Leader for UCaaS (7 consecutive years) and Meeting Solutions (12 consecutive years). Omdia named Cisco best-in-class for Smart Collaboration Devices 2025.",
      initiatives: [
        {
          id: "c1",
          name: "AI-Powered Meetings & Calling",
          tagline: "Every interaction smarter. Migrate at your own pace.",
          description: "Webex embeds AI across every interaction — summaries, real-time translation in 50+ languages, action items, and agentic capabilities including Task Agent, Polling Agent, Meeting Scheduler, and Translator Agent. As the only vendor supporting cloud, on-prem, and hybrid calling with full feature parity, Cisco gives organizations a path forward at any stage of their cloud journey. 18M+ Webex Calling users across 190+ markets.",
          projects: [
            { name: "AI Assistant for Webex", detail: "Real-time transcription, meeting summaries, action items, and catch-me-up in 50+ languages — plus Ask AI Assistant to search across all prior calls, meetings, and messages" },
            { name: "Webex Calling (Cloud / Hybrid / On-Prem)", detail: "99.999% SLA — industry-first Hybrid model lets UCM customers keep on-prem infrastructure while gaining cloud AI features incrementally" },
            { name: "AI Receptionist", detail: "Always-on virtual receptionist for Webex Calling — automates routine queries, transfers calls, and schedules appointments" },
          ],
        },
        {
          id: "c2",
          name: "Intelligent Workspaces & Devices",
          tagline: "Bring people back to the office — on purpose.",
          description: "Cisco collaboration devices run RoomOS 26 powered by NVIDIA — transforming rooms into AI-powered environments with Notetaker Agent for in-room transcription, Director Agent for cinematic camera views, and Audio Zones for precision capture. Devices run Webex, Microsoft Teams, Zoom, and Google Meet natively — an open-ecosystem approach analysts are actively tracking as a strategic differentiator.",
          projects: [
            { name: "Room Bar Pro & Board Pro G2", detail: "Dual 48MP AI cameras, multi-platform support (Cisco Rooms + MTR/Zoom/Google Meet), edge-based AI processing" },
            { name: "Ceiling Microphone Pro", detail: "64 mic elements, eight adaptive AI beams, directional voice detection with Audio Zones for digital sound boundaries" },
            { name: "Cisco Spaces", detail: "Smart workspace platform leveraging the Meraki network as a sensor — occupancy, desk booking, sustainability controls, UWB asset tracking, and AI-powered indoor navigation" },
          ],
        },
        {
          id: "c3",
          name: "Contact Center & Customer Experience",
          tagline: "AI-powered CX from self-service to agent assist.",
          description: "Webex Contact Center infuses AI across the customer journey — from autonomous self-service to real-time agent assist and AI-powered quality management. Multi-agent collaboration via industry-standard A2A and MCP protocols enables interoperability with third-party AI agents. IDC MarketScape Leader for CCaaS. Native integrations with Salesforce, ServiceNow, and Epic.",
          projects: [
            { name: "Webex AI Agent", detail: "Autonomous and guided self-service with natural language understanding across 50+ languages, intent routing, and multi-agent orchestration" },
            { name: "AI Assistant for Contact Center", detail: "Suggested responses, real-time transcription, mid-call summaries, automated wrap-up, and AI quality management for agent coaching" },
            { name: "Salesforce & Epic Integrations", detail: "Bring Your Own Contact Center for Salesforce (GA Q1 2026) and Epic healthcare integration for vertical-specific CX workflows" },
          ],
        },
      ],
    },
  ],
};
