// ─── CANONICAL MOMENTS ───────────────────────────────────────────────────────
// Public portfolio moments for Cisco Connectivity & Collaboration (Apr 2024 – Mar 2026).
// Sourced from Cisco Newsroom, Investor Relations, Cisco Blogs, industry coverage.

export const EVENT_TYPES = {
  CISCO_LIVE: { label: "Cisco Live", color: "#049FD9", abbrev: "CL" },
  ENTERPRISE_CONNECT: { label: "Enterprise Connect", color: "#6C5CE7", abbrev: "EC" },
  WEBEX_ONE: { label: "WebexOne", color: "#FDCB6E", abbrev: "WX1" },
  PARTNER_SUMMIT: { label: "Partner Summit", color: "#E17055", abbrev: "PS" },
  NVIDIA_GTC: { label: "NVIDIA GTC", color: "#76B900", abbrev: "GTC" },
  PRODUCT_LAUNCH: { label: "Product Launch", color: "#E84393", abbrev: "PL" },
  ORG_CHANGE: { label: "Org Change", color: "#636E72", abbrev: "ORG" },
  ISE: { label: "ISE", color: "#0984E3", abbrev: "ISE" },
};

export const moments = [
  // ─── 2024 ──────────────────────────────────────────────────────────────────
  {
    id: "ec-2024",
    type: "ENTERPRISE_CONNECT",
    title: "Enterprise Connect 2024",
    subtitle: "Orlando, FL — Collaboration device launches & Webex Suite positioning",
    date: "2024-03-25",
    dateEnd: "2024-03-28",
    speakers: ["Jeetu Patel"],
    products: ["collaboration"],
    initiatives: ["c2", "c1"],
    narrative: "Board Pro G2 launched as an AI-fueled all-in-one collaboration device with RoomOS, supporting Cisco Rooms and Microsoft Teams Rooms natively on one device. Desk Phone 9800 Series unveiled with hot-desking-first design, QR code check-in, and TPM 2.0 hardware encryption — an industry first for enterprise phones. Webex Suite positioned as the lead offer for meetings, messaging, and calling, with Cisco citing that 98% of conference rooms globally are not video-enabled.",
    decks: [
      { id: "deck-ec24-keynote", title: "Enterprise Connect 2024 Keynote", type: "keynote", pages: 32 },
      { id: "deck-ec24-devices", title: "Board Pro G2 & Desk Phone 9800 Launch Deck", type: "product-launch", pages: 20 },
    ],
    transcripts: [
      { id: "tx-ec24-keynote", title: "EC 2024 Keynote Transcript", duration: "45 min", speaker: "Jeetu Patel" },
    ],
    spaces: [
      { id: "space-ec24-prep", title: "EC 2024 — Device Launch Prep", members: 12 },
    ],
    tags: ["public", "devices", "Webex Suite", "Board Pro G2", "Desk Phone 9800"],
  },
  {
    id: "cl-2024",
    type: "CISCO_LIVE",
    title: "Cisco Live 2024",
    subtitle: "Las Vegas, NV — AI portfolio launch & $1B AI Investment Fund",
    date: "2024-06-02",
    dateEnd: "2024-06-06",
    speakers: ["Chuck Robbins", "Jeetu Patel"],
    products: ["networking", "collaboration"],
    initiatives: ["n2", "n1", "c1"],
    narrative: "AI-powered innovations launched across the entire networking, security, and observability portfolio under a 'digital resilience' theme. Cisco announced a $1 Billion Global AI Investment Fund with strategic investments in Cohere, Mistral AI, and Scale AI. Nexus HyperFabric announced in collaboration with NVIDIA for streamlined AI infrastructure. Unified Observability Experience with Splunk integration unveiled. Webex Calling highlights included native call recording at no additional cost and 15M+ users across 160+ markets. Keynotes from Chuck Robbins, with Tom Brady and Elton John headlining for 20,000+ in-person attendees and ~1M virtual.",
    decks: [
      { id: "deck-cl24-keynote", title: "Cisco Live 2024 Main Keynote", type: "keynote", pages: 48 },
      { id: "deck-cl24-ai", title: "AI Portfolio Innovation Deck", type: "breakout", pages: 30 },
      { id: "deck-cl24-nexus", title: "Nexus HyperFabric with NVIDIA", type: "product-launch", pages: 22 },
    ],
    transcripts: [
      { id: "tx-cl24-keynote", title: "Chuck Robbins Keynote Transcript", duration: "55 min", speaker: "Chuck Robbins" },
      { id: "tx-cl24-ai", title: "AI Innovation Breakout Transcript", duration: "40 min", speaker: "Multiple" },
    ],
    spaces: [
      { id: "space-cl24-prep", title: "CL 2024 — Content Prep Room", members: 22 },
    ],
    tags: ["public", "keynote", "AI investment", "$1B fund", "Nexus HyperFabric", "digital resilience"],
  },
  {
    id: "org-restructure-2024",
    type: "ORG_CHANGE",
    title: "Major Organizational Restructuring",
    subtitle: "Networking + Security + Collaboration unified under Jeetu Patel",
    date: "2024-08-14",
    speakers: ["Chuck Robbins", "Jeetu Patel"],
    products: ["networking", "collaboration"],
    initiatives: ["n2", "n3", "n1", "c1", "c2", "c3"],
    narrative: "Cisco combined Networking, Security, and Collaboration business units into one organization under Jeetu Patel as EVP and Chief Product Officer. Jonathan Davidson (EVP/GM of Networking) transitioned to advisory role after 21 years. 7% global workforce reduction (~6,000 jobs) announced as second round of layoffs in 2024. Restructuring explicitly aimed at pumping resources into three growth areas: AI networking, security, and collaboration. Splunk product line integration into the new organization planned. Cisco also acquired Robust Intelligence for AI model and data security.",
    decks: [
      { id: "deck-reorg-internal", title: "Organizational Restructuring Announcement", type: "internal", pages: 16 },
    ],
    transcripts: [
      { id: "tx-reorg-allhands", title: "All-Hands Announcement Notes", duration: "30 min", speaker: "Chuck Robbins" },
    ],
    spaces: [
      { id: "space-reorg", title: "Org Restructure — Leadership Alignment", members: 18 },
    ],
    tags: ["internal", "strategy", "org-change", "Jeetu Patel CPO", "Robust Intelligence acquisition"],
  },
  {
    id: "wxone-2024",
    type: "WEBEX_ONE",
    title: "WebexOne 2024",
    subtitle: "Ft. Lauderdale, FL — Spatial Meetings, AI Agent, Ceiling Mic Pro",
    date: "2024-10-21",
    dateEnd: "2024-10-24",
    speakers: ["Jeetu Patel"],
    products: ["collaboration"],
    initiatives: ["c1", "c2", "c3"],
    narrative: "Spatial Meetings for Apple Vision Pro unveiled as signature announcement with the 'Distance Zero' concept for immersive collaboration. Ceiling Microphone Pro launched for truly immersive meeting room audio. Webex AI Agent debuted for autonomous contact center self-service with natural-language conversational intelligence. AI-powered Vidcast evolution: upload PDF/PPT to auto-generate scripts and voice-overs. AI-generated Slido polls for real-time audience engagement. Enterprise app integrations deepened (Salesforce, ServiceNow via Glean). Jeetu Patel keynote positioned AI as natively built into every Cisco product with the 'future-proof workplaces' vision. 2,000+ in-person attendees, 15,000+ virtual.",
    decks: [
      { id: "deck-wxone24-keynote", title: "WebexOne 2024 Keynote", type: "keynote", pages: 42 },
      { id: "deck-wxone24-agent", title: "Webex AI Agent Launch Deck", type: "product-launch", pages: 24 },
      { id: "deck-wxone24-spatial", title: "Spatial Meetings — Apple Vision Pro", type: "demo", pages: 18 },
    ],
    transcripts: [
      { id: "tx-wxone24-keynote", title: "Jeetu Patel WebexOne Keynote Transcript", duration: "50 min", speaker: "Jeetu Patel" },
    ],
    spaces: [
      { id: "space-wxone24", title: "WebexOne 2024 — Content Prep", members: 14 },
    ],
    tags: ["public", "keynote", "Spatial Meetings", "Webex AI Agent", "Ceiling Mic Pro", "Apple Vision Pro"],
  },
  {
    id: "wifi7-launch",
    type: "PRODUCT_LAUNCH",
    title: "Wi-Fi 7 Portfolio Launch",
    subtitle: "Catalyst CW9176/CW9178, Unified Licensing, Global Use APs",
    date: "2024-11-12",
    speakers: ["Anurag Dhingra"],
    products: ["networking"],
    initiatives: ["n1"],
    narrative: "Cisco Wi-Fi 7 access points (Catalyst CW9176 and CW9178 series) announced, orderable immediately, shipping December 2024. Unified Networking Subscription introduced: single license covering entire Wi-Fi 7 solution across cloud and on-prem management modes. Global Use Access Points: one SKU worldwide, automatic management mode detection (Meraki or Catalyst), no country codes needed at order time. Built-in Cisco Spaces, ThousandEyes agent hosting, UWB for sub-meter location tracking, BLE 5.3, and sustainability features including circular design and plastic-free packaging.",
    decks: [
      { id: "deck-wifi7-launch", title: "Wi-Fi 7 Portfolio Launch Deck", type: "product-launch", pages: 28 },
      { id: "deck-wifi7-tech", title: "Wi-Fi 7 Technical Deep Dive", type: "breakout", pages: 36 },
    ],
    transcripts: [
      { id: "tx-wifi7-launch", title: "Wi-Fi 7 Launch Webcast Transcript", duration: "35 min", speaker: "Anurag Dhingra" },
    ],
    spaces: [
      { id: "space-wifi7", title: "Wi-Fi 7 Launch — GTM Coordination", members: 16 },
    ],
    tags: ["public", "product-launch", "Wi-Fi 7", "CW9176", "CW9178", "unified licensing"],
  },
  {
    id: "ps-2024",
    type: "PARTNER_SUMMIT",
    title: "Cisco Partner Summit 2024",
    subtitle: "Los Angeles, CA — Cisco 360 Program, AI PODS, UCS C885A",
    date: "2024-11-04",
    dateEnd: "2024-11-06",
    speakers: ["Jeetu Patel"],
    products: ["networking", "collaboration"],
    initiatives: ["n2", "n1"],
    narrative: "Cisco 360 Partner Program announced, replacing the tiered system with a value-based framework featuring Cisco Partner and Cisco Preferred Partner designations. AI PODS (preconfigured infrastructure stacks) introduced for simplified AI deployment. UCS C885A M8 Server announced for AI training/inference on NVIDIA HGX platform. Customer Assessment Incentive expanded to cover Networking and Collaboration. 'Forward as One' theme emphasized the unified portfolio approach to AI, security, and collaboration.",
    decks: [
      { id: "deck-ps24-keynote", title: "Partner Summit 2024 Keynote", type: "keynote", pages: 34 },
      { id: "deck-ps24-360", title: "Cisco 360 Partner Program Overview", type: "enablement", pages: 20 },
    ],
    transcripts: [
      { id: "tx-ps24-keynote", title: "Partner Summit Keynote Transcript", duration: "40 min", speaker: "Jeetu Patel" },
    ],
    spaces: [
      { id: "space-ps24", title: "Partner Summit 2024 — FPW Track", members: 10 },
    ],
    tags: ["partner-facing", "Cisco 360", "AI PODS", "enablement"],
  },

  // ─── 2025 ──────────────────────────────────────────────────────────────────
  {
    id: "cl-emea-2025",
    type: "CISCO_LIVE",
    title: "Cisco Live 2025 Amsterdam",
    subtitle: "Amsterdam — AI-powered networking & collaboration for EMEA",
    date: "2025-02-10",
    dateEnd: "2025-02-14",
    speakers: ["Jeetu Patel", "Anurag Dhingra"],
    products: ["networking", "collaboration"],
    initiatives: ["n1", "n2"],
    narrative: "European edition of Cisco Live showcasing AI-powered networking and collaboration advances for EMEA customers. Expanded Cisco-NVIDIA partnership announced with intent to create cross-portfolio unified architecture combining Cisco Silicon One and NVIDIA Spectrum-X networking. Additional Wi-Fi 7 portfolio announcements with entry-level to high-capacity APs. Meraki dashboard VLAN database feature for Catalyst switches launched for streamlined VLAN management across switch fleets.",
    decks: [
      { id: "deck-clemea25-keynote", title: "Cisco Live EMEA 2025 Keynote", type: "keynote", pages: 40 },
      { id: "deck-clemea25-nvidia", title: "Cisco + NVIDIA Partnership Deep Dive", type: "breakout", pages: 24 },
    ],
    transcripts: [
      { id: "tx-clemea25-keynote", title: "EMEA Keynote Transcript", duration: "48 min", speaker: "Jeetu Patel" },
    ],
    spaces: [
      { id: "space-clemea25", title: "CL EMEA 2025 — Content Room", members: 15 },
    ],
    tags: ["public", "EMEA", "Cisco-NVIDIA", "Wi-Fi 7", "Silicon One"],
  },
  {
    id: "ec-2025",
    type: "ENTERPRISE_CONNECT",
    title: "Enterprise Connect 2025",
    subtitle: "Orlando, FL — Agentic AI collaboration vision, Webex AI Agent GA",
    date: "2025-03-17",
    dateEnd: "2025-03-20",
    speakers: ["Jeetu Patel"],
    products: ["collaboration"],
    initiatives: ["c1", "c3", "c2"],
    narrative: "Agentic AI collaboration vision unveiled: AI that anticipates needs, addresses challenges, and fulfills intent autonomously. Webex AI Agent reached GA (March 31) with 24/7 self-service, natural conversational intelligence, and real-time automation. AI Assistant for Webex Contact Center launched with suggested responses and real-time transcription. Webex Calling Customer Assist launched for branch locations. AirPlay on Cisco Devices for Microsoft Teams Rooms announced. Spatial Meetings GA on Room Bar Pro. Enterprise App Search across 100+ data sources. Early adopter results: 31% reduction in self-service costs, 8% reduced average handle time, 3x faster rollout with cloud devices.",
    decks: [
      { id: "deck-ec25-keynote", title: "Enterprise Connect 2025 Keynote", type: "keynote", pages: 38 },
      { id: "deck-ec25-agent", title: "Webex AI Agent GA Launch", type: "product-launch", pages: 22 },
    ],
    transcripts: [
      { id: "tx-ec25-keynote", title: "EC 2025 Keynote Transcript", duration: "42 min", speaker: "Jeetu Patel" },
    ],
    spaces: [
      { id: "space-ec25", title: "EC 2025 — Agentic AI Content Prep", members: 11 },
    ],
    tags: ["public", "agentic AI", "Webex AI Agent GA", "contact center", "Spatial Meetings GA"],
  },
  {
    id: "gtc-2025",
    type: "NVIDIA_GTC",
    title: "NVIDIA GTC 2025",
    subtitle: "San Jose, CA — Cisco Secure AI Factory with NVIDIA",
    date: "2025-03-18",
    speakers: ["Jeetu Patel"],
    products: ["networking"],
    initiatives: ["n3", "n2"],
    narrative: "Cisco Secure AI Factory with NVIDIA unveiled: joint architecture embedding security at all layers of AI infrastructure. Reference architectures with Cisco Nexus HyperFabric AI and Nexus 9000 Series validated for NVIDIA HGX H200 and Spectrum-X. Cisco AI Defense and Cisco Hypershield integrated to protect AI workloads, models, and applications. Cisco State of AI Security report published analyzing 700+ AI-related legislation pieces and dozens of AI threat vectors.",
    decks: [
      { id: "deck-gtc25-factory", title: "Cisco Secure AI Factory with NVIDIA", type: "keynote", pages: 26 },
    ],
    transcripts: [
      { id: "tx-gtc25", title: "GTC 2025 Cisco Session Transcript", duration: "35 min", speaker: "Jeetu Patel" },
    ],
    spaces: [
      { id: "space-gtc25", title: "GTC 2025 — Cisco + NVIDIA Prep", members: 8 },
    ],
    tags: ["public", "NVIDIA", "Secure AI Factory", "AI Defense", "Hypershield"],
  },
  {
    id: "patel-president",
    type: "ORG_CHANGE",
    title: "Jeetu Patel Promoted to President",
    subtitle: "Expanded strategic authority across the entire product portfolio",
    date: "2025-05-15",
    speakers: ["Chuck Robbins", "Jeetu Patel"],
    products: ["networking", "collaboration"],
    initiatives: ["n2", "n3", "n1", "c1", "c2", "c3"],
    narrative: "Jeetu Patel promoted from EVP/CPO to President and Chief Product Officer, signaling expanded strategic authority across the entire product portfolio. Webex Calling positioned at 18M+ users across 195+ markets worldwide. Cisco itself migrated 84,000+ employees to Webex Calling — internal proof point for the platform's enterprise readiness.",
    decks: [
      { id: "deck-patel-promo", title: "Leadership Announcement — Internal", type: "internal", pages: 8 },
    ],
    transcripts: [],
    spaces: [
      { id: "space-patel-comms", title: "President Announcement — Comms", members: 6 },
    ],
    tags: ["internal", "leadership", "Jeetu Patel", "President"],
  },
  {
    id: "cl-2025",
    type: "CISCO_LIVE",
    title: "Cisco Live 2025",
    subtitle: "San Diego, CA — Biggest hardware refresh in a decade, AgenticOps debut",
    date: "2025-06-08",
    dateEnd: "2025-06-12",
    speakers: ["Chuck Robbins", "Jeetu Patel", "Anurag Dhingra"],
    products: ["networking", "collaboration"],
    initiatives: ["n2", "n1", "n3", "c1", "c2"],
    narrative: "'Biggest networking hardware refresh in a decade' announced by Anurag Dhingra. New Catalyst C9350 and C9610 Smart Switches with Silicon One chips (up to 1.6 Tbps stacked bandwidth, microsecond latency). Next-gen Wi-Fi 7 APs with beam-switching, 1,000 roams/sec, 16 spatial streams, dual 10GbE ports. Secure routers with 3x throughput. AgenticOps introduced: AI agents and humans collaborating to manage/optimize IT infrastructure. AI Canvas debuted as the first Generative UI for cross-domain IT collaboration (GA planned October 2025). Unified management platform for Meraki, Catalyst, routing, switching, wireless, and industrial devices. Room Vision PTZ cinematic multi-camera system. Webex AI Receptionist for Calling. Universal ZTNA extended to cover AI agents. Microsoft Teams Rooms natively supported on Cisco devices. Keynotes from Robbins, Patel, Centoni; 'One Cisco' portfolio integration emphasized.",
    decks: [
      { id: "deck-cl25-keynote", title: "Cisco Live 2025 Main Keynote", type: "keynote", pages: 52 },
      { id: "deck-cl25-hardware", title: "Hardware Refresh: C9350, C9610, Wi-Fi 7 APs", type: "product-launch", pages: 36 },
      { id: "deck-cl25-agenticops", title: "AgenticOps Introduction", type: "breakout", pages: 28 },
      { id: "deck-cl25-canvas", title: "AI Canvas: Generative UI for IT Collaboration", type: "demo", pages: 20 },
    ],
    transcripts: [
      { id: "tx-cl25-keynote", title: "Main Keynote Transcript", duration: "60 min", speaker: "Chuck Robbins" },
      { id: "tx-cl25-anurag", title: "Anurag Dhingra Hardware Refresh Keynote", duration: "45 min", speaker: "Anurag Dhingra" },
    ],
    spaces: [
      { id: "space-cl25-main", title: "CL 2025 — Main Content Room", members: 28 },
      { id: "space-cl25-agenticops", title: "CL 2025 — AgenticOps Track", members: 12 },
    ],
    tags: ["public", "keynote", "hardware refresh", "AgenticOps", "AI Canvas", "C9350", "C9610", "One Cisco"],
  },
  {
    id: "wxone-2025",
    type: "WEBEX_ONE",
    title: "WebexOne 2025",
    subtitle: "San Diego, CA — Connected Intelligence, RoomOS 26, five new AI agents",
    date: "2025-09-28",
    dateEnd: "2025-10-01",
    speakers: ["Jeetu Patel", "Anurag Dhingra"],
    products: ["collaboration", "networking"],
    initiatives: ["c1", "c2", "c3"],
    narrative: "'Connected Intelligence' vision unveiled: blended teams of humans and AI agents collaborating on secure Cisco platforms. RoomOS 26 announced (NVIDIA-powered): Director agent for cinematic views, Notetaker agent for transcription, Audio zones for Ceiling Mic Pro. Five new AI agents for the Webex Suite. AI Assistant upgraded with cross-interaction access to all meetings, recordings, messages, calls. Microsoft MDEP brought to NVIDIA-powered Cisco devices. Microsoft Copilot embedded in Webex Meetings. Zoom for Cisco Rooms significantly improved. AT&T Business announced as first Certified Calling Provider for Webex Calling for Government (FedRAMP). Salesforce 'Bring Your Own CCaaS' integration. AgenticOps positioned as strategic evolution. Jeetu Patel keynote: 'Connected Intelligence is the future of work'; open ecosystem approach with Microsoft, Amazon, Zoom, Salesforce. Ryan Reynolds appeared as featured speaker.",
    decks: [
      { id: "deck-wxone25-keynote", title: "WebexOne 2025 Keynote — Connected Intelligence", type: "keynote", pages: 46 },
      { id: "deck-wxone25-roomos", title: "RoomOS 26 + NVIDIA Launch Deck", type: "product-launch", pages: 28 },
      { id: "deck-wxone25-agents", title: "Five New AI Agents for Webex Suite", type: "product-launch", pages: 20 },
    ],
    transcripts: [
      { id: "tx-wxone25-keynote", title: "Jeetu Patel Keynote Transcript", duration: "52 min", speaker: "Jeetu Patel" },
    ],
    spaces: [
      { id: "space-wxone25", title: "WebexOne 2025 — Content Prep", members: 16 },
    ],
    tags: ["public", "keynote", "Connected Intelligence", "RoomOS 26", "AI agents", "Microsoft", "Salesforce", "FedRAMP"],
  },
  {
    id: "gtc-dc-2025",
    type: "NVIDIA_GTC",
    title: "NVIDIA GTC DC (Fall)",
    subtitle: "Washington, D.C. — N9100 switch, AI Defense + NeMo Guardrails",
    date: "2025-10-28",
    speakers: ["Jeetu Patel"],
    products: ["networking"],
    initiatives: ["n3", "n2"],
    narrative: "Cisco N9100 switch announced: first NVIDIA partner-developed data center switch on Spectrum-X Ethernet silicon. Cisco Secure AI Factory with NVIDIA expanded: AI Defense integrated with NVIDIA NeMo Guardrails, Splunk Observability Cloud for AI stack monitoring. First AI-native wireless stack for 6G co-developed by Cisco, NVIDIA, and telecom partners. Government-ready reference design aligned to NVIDIA AI Factory for Government.",
    decks: [
      { id: "deck-gtcdc25", title: "NVIDIA GTC DC — Cisco N9100 & AI Factory", type: "keynote", pages: 22 },
    ],
    transcripts: [
      { id: "tx-gtcdc25", title: "GTC DC Cisco Session Transcript", duration: "30 min", speaker: "Jeetu Patel" },
    ],
    spaces: [
      { id: "space-gtcdc25", title: "GTC DC 2025 — Cisco Prep", members: 7 },
    ],
    tags: ["public", "NVIDIA", "N9100", "Spectrum-X", "AI Defense", "6G"],
  },
  {
    id: "ps-2025",
    type: "PARTNER_SUMMIT",
    title: "Cisco Partner Summit 2025",
    subtitle: "San Diego, CA — Cisco IQ, Unified Edge, 360 Program update",
    date: "2025-11-03",
    dateEnd: "2025-11-05",
    speakers: ["Jeetu Patel"],
    products: ["networking", "collaboration"],
    initiatives: ["n2", "n1"],
    narrative: "Cisco 360 Partner Program progress update with spring 2026 go-live confirmed. Cisco IQ introduced: AI infused into Customer Experience (CX) services organization. Cisco Unified Edge appliance announced: all-in-one compute, networking, storage, and security for edge AI. Continued 'One Cisco' portfolio integration theme with partners showcasing cross-architecture outcomes.",
    decks: [
      { id: "deck-ps25-keynote", title: "Partner Summit 2025 Keynote", type: "keynote", pages: 32 },
      { id: "deck-ps25-edge", title: "Unified Edge Appliance Launch", type: "product-launch", pages: 18 },
    ],
    transcripts: [
      { id: "tx-ps25-keynote", title: "Partner Summit Keynote Transcript", duration: "38 min", speaker: "Jeetu Patel" },
    ],
    spaces: [
      { id: "space-ps25", title: "Partner Summit 2025 — FPW Track", members: 9 },
    ],
    tags: ["partner-facing", "Cisco IQ", "Unified Edge", "Cisco 360"],
  },

  // ─── 2026 ──────────────────────────────────────────────────────────────────
  {
    id: "ise-2026",
    type: "ISE",
    title: "ISE 2026 — Next-Gen Collaboration Devices",
    subtitle: "Barcelona, Spain — Room Kit Pro G2, Desk Pro G2, Wireless Phone 9821",
    date: "2026-02-03",
    dateEnd: "2026-02-06",
    speakers: ["Anurag Dhingra"],
    products: ["collaboration"],
    initiatives: ["c2"],
    narrative: "Room Kit Pro G2 announced: NVIDIA-powered, AVoIP-first, 8 PoE ports, 5 IP cameras, 8 microphones, up to 8K output, 25x AI processing vs. prior gen — first large-room solution supporting Microsoft MDEP. Desk Pro G2 announced: dual 4K cameras (48MP tele + 105° wide-angle), 27-inch 4K display, single USB-C, zero-touch provisioning. Wireless Phone 9821 announced: Wi-Fi 6E enterprise calling for frontline workers with rugged keypad, swappable battery, and man-down detection. Workspace Designer expanded with 3D room planning and Samsung display partnership. Platform-centric approach emphasized: all devices managed through Control Hub, same platform as networking and security infrastructure. Cisco positioned collaboration devices as 'AI infrastructure' on par with switches and APs.",
    decks: [
      { id: "deck-ise26-devices", title: "ISE 2026 — Next-Gen Device Portfolio", type: "product-launch", pages: 30 },
      { id: "deck-ise26-roomkit", title: "Room Kit Pro G2 Technical Deck", type: "breakout", pages: 22 },
    ],
    transcripts: [
      { id: "tx-ise26-launch", title: "ISE Device Launch Presentation", duration: "40 min", speaker: "Anurag Dhingra" },
    ],
    spaces: [
      { id: "space-ise26", title: "ISE 2026 — Device Launch Prep", members: 14 },
    ],
    tags: ["public", "devices", "Room Kit Pro G2", "Desk Pro G2", "Wireless Phone 9821", "NVIDIA", "Microsoft MDEP"],
  },
  {
    id: "gtc-2026",
    type: "NVIDIA_GTC",
    title: "NVIDIA GTC 2026",
    subtitle: "San Jose, CA — Secure AI Factory to edge, N9100 Spectrum-6, AI Grid",
    date: "2026-03-16",
    dateEnd: "2026-03-20",
    speakers: ["Jeetu Patel"],
    products: ["networking"],
    initiatives: ["n3", "n2"],
    narrative: "Cisco Secure AI Factory with NVIDIA expanded from data center to edge: AI deployment across entire infrastructure in weeks, not months. Cisco AI Grid with NVIDIA reference design enables service providers to offer managed edge AI services via Cisco Mobility Services Platform + NVIDIA RTX PRO Blackwell GPUs. Cisco N9100 102.4 Tbps switch powered by NVIDIA Spectrum-6 Ethernet silicon announced. Cisco AI Defense expanded to support and secure NVIDIA OpenShell runtimes and NVIDIA Agent Toolkit. Edge inferencing positioned as next frontier with NVIDIA RTX PRO 4500 Blackwell GPUs integrated across Cisco UCS and Unified Edge.",
    decks: [
      { id: "deck-gtc26-keynote", title: "GTC 2026 — Cisco AI Factory to Edge", type: "keynote", pages: 28 },
      { id: "deck-gtc26-grid", title: "Cisco AI Grid Reference Design", type: "product-launch", pages: 18 },
    ],
    transcripts: [
      { id: "tx-gtc26", title: "GTC 2026 Cisco Session Transcript", duration: "35 min", speaker: "Jeetu Patel" },
    ],
    spaces: [
      { id: "space-gtc26", title: "GTC 2026 — Cisco + NVIDIA Prep", members: 9 },
    ],
    tags: ["public", "NVIDIA", "Spectrum-6", "AI Grid", "edge AI", "AI Defense", "Blackwell"],
  },
];
