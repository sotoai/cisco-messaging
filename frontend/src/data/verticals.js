// ─── VERTICAL OVERLAYS ────────────────────────────────────────────────────────
export const verticals = {
  general: { label: "General", solutionTagline: null, products: null },
  healthcare: {
    label: "Healthcare",
    solutionTagline: "Modernize clinical environments and connect care everywhere.",
    products: [
      {
        id: "networking",
        tagline: "Clinical-grade networks that protect patients and power AI diagnostics.",
        description: "Cisco delivers HIPAA-ready campus and clinical networks — clinical-grade Wi-Fi 7 for real-time telemetry, IoMT device segmentation via Cisco Cyber Vision, and AI-native assurance across hospitals, clinics, and ambulatory sites. Recognized in the KLAS Research Best in KLAS for Networking and Gartner as a Leader for Healthcare Networking Infrastructure.",
        initiatives: [
          { id: "hn1", name: "Clinical Network Modernization", tagline: "One resilient network from OR to outpatient.", projects: [
            { name: "Clinical-Grade Wi-Fi 7", detail: "CW9172I APs with dedicated IoMT SSID, low-latency roaming for mobile nurses, and real-time location services for asset tracking" },
            { name: "IoMT Device Segmentation", detail: "Cisco Cyber Vision + ISE auto-classify and micro-segment infusion pumps, monitors, and imaging systems — zero trust for medical devices" },
            { name: "Meraki Health Cloud", detail: "Cloud-managed networking purpose-built for multi-site health systems — unified dashboard across hospitals, clinics, and telehealth hubs" },
          ]},
          { id: "hn2", name: "AI-Powered Clinical Operations", tagline: "From alarm fatigue to autonomous triage.", projects: [
            { name: "AI Canvas for Health IT", detail: "Cross-domain troubleshooting correlating network, security, and clinical application telemetry — MTTR reduction for EHR connectivity issues" },
            { name: "ThousandEyes for Epic/Cerner", detail: "Synthetic monitoring of EHR application paths from nurse station to data center — proactive alerting before clinicians notice degradation" },
            { name: "Automated Compliance Reporting", detail: "Catalyst Center compliance audit for HIPAA, HITECH, and Joint Commission requirements — continuous posture validation" },
          ]},
          { id: "hn3", name: "Secure Healthcare Infrastructure", tagline: "Embedded security for connected care.", projects: [
            { name: "Medical Device Visibility", detail: "Full inventory and risk scoring of 10,000+ IoMT device types — integrates with Medigate, Claroty, and Cisco Vulnerability Management" },
            { name: "Ransomware Defense for Hospitals", detail: "Hybrid Mesh Firewall with network segmentation isolating clinical, guest, and IoMT zones — microsegmentation at the switch port level" },
            { name: "Post-Quantum Secure Telehealth", detail: "Cisco 8000 Secure Routers with post-quantum cryptography protecting PHI across site-to-site and remote care connections" },
          ]},
        ],
      },
      {
        id: "collaboration",
        tagline: "Connected care — from virtual visits to clinical team coordination.",
        description: "Webex powers telehealth, clinical collaboration, and patient engagement across the care continuum. Epic-integrated contact center workflows, HIPAA-compliant video visits, and AI-powered clinical communication reduce clinician burnout and improve patient outcomes. Frost & Sullivan recognized Webex as a Leader in Telehealth Platforms.",
        initiatives: [
          { id: "hc1", name: "Virtual Care & Telehealth", tagline: "Extend the exam room to any screen.", projects: [
            { name: "Webex for Telehealth", detail: "HIPAA-compliant virtual visits with AI noise removal, real-time translation for 50+ languages, and Epic MyChart integration for patient scheduling" },
            { name: "AI Clinical Summaries", detail: "Automatic visit documentation and structured SOAP notes from Webex AI Assistant — reducing after-hours charting burden for physicians" },
            { name: "Remote Patient Monitoring Hub", detail: "Webex Desk devices as bedside communication hubs — nurse call, entertainment, care team rounding, and patient education in one endpoint" },
          ]},
          { id: "hc2", name: "Clinical Team Collaboration", tagline: "Break down silos between care teams.", projects: [
            { name: "Webex Messaging for Care Teams", detail: "HIPAA-compliant messaging with role-based channels — instant consult requests, lab result notifications, and shift handoff summaries" },
            { name: "Expert on Demand (XoD)", detail: "AR-assisted remote expert guidance for surgical teams, radiology consults, and medical device technicians using RealWear smart glasses" },
            { name: "Cisco Spaces for Hospitals", detail: "Real-time wayfinding for patients, asset tracking for wheelchairs and equipment, and occupancy analytics for waiting rooms and common areas" },
          ]},
          { id: "hc3", name: "Patient Experience & Contact Center", tagline: "AI-powered patient access and engagement.", projects: [
            { name: "Webex AI Agent for Patient Access", detail: "Autonomous appointment scheduling, prescription refill requests, and insurance verification — 24/7 self-service in 50+ languages" },
            { name: "Epic-Integrated Contact Center", detail: "Native Epic integration surfaces patient context, visit history, and care gaps directly in the agent workspace — reducing handle time by 30%" },
            { name: "AI Quality Management for Healthcare", detail: "Automated compliance monitoring for patient interactions — HCAHPS-aligned scoring and coaching recommendations for access center staff" },
          ]},
        ],
      },
    ],
  },
  education: {
    label: "Education",
    solutionTagline: "Modernize campuses and classrooms for the AI-powered learning era.",
    products: [
      {
        id: "networking",
        tagline: "Secure, high-performance campus networks built for digital learning.",
        description: "Cisco provides E-Rate eligible, CIPA-compliant campus networks powering hybrid learning, campus safety, and student success. Meraki cloud management simplifies operations across distributed K-12 districts, while Catalyst supports research-grade connectivity for higher education. Named a Leader in the IDC MarketScape for Education Networking.",
        initiatives: [
          { id: "en1", name: "Connected Campus & Hybrid Learning", tagline: "Seamless connectivity from lecture hall to dorm.", projects: [
            { name: "Wi-Fi 7 for High-Density Campuses", detail: "CW9179F APs supporting 1,000+ concurrent students in lecture halls, stadiums, and student unions with seamless roaming" },
            { name: "Meraki for K-12 Districts", detail: "Cloud-managed networking across hundreds of sites — centralized content filtering (CIPA), E-Rate eligible, with zero-touch deployment" },
            { name: "SD-WAN for Multi-Campus Districts", detail: "Secure, resilient WAN connecting campuses to cloud-hosted SIS, LMS, and assessment platforms with application-aware routing" },
          ]},
          { id: "en2", name: "Campus Safety & Security", tagline: "Protect students, staff, and visitors.", projects: [
            { name: "Meraki Smart Cameras", detail: "AI-powered video analytics for campus perimeter monitoring, vaping detection, and occupancy alerts — no NVR required" },
            { name: "Emergency Notification Integration", detail: "Network-triggered lockdown protocols with IoT sensor integration — automated door locks, PA announcements, and first responder alerts" },
            { name: "Zero Trust for Student Data", detail: "ISE-based identity services protecting FERPA-regulated student data — role-based access for faculty, students, guests, and IoT devices" },
          ]},
          { id: "en3", name: "AI-Powered IT Operations for Education", tagline: "Do more with smaller IT teams.", projects: [
            { name: "AI Assistant for Education IT", detail: "Natural language troubleshooting for campus Wi-Fi issues — 'Why can't students connect in Building 4?' resolved in seconds" },
            { name: "ThousandEyes for SaaS Learning Platforms", detail: "End-to-end visibility into Canvas, Google Workspace, and Zoom performance — isolate ISP vs. campus network vs. cloud provider issues" },
            { name: "Automated Device Onboarding", detail: "Zero-touch enrollment for Chromebooks, iPads, and BYOD — 10,000+ devices provisioned per district in hours, not weeks" },
          ]},
        ],
      },
      {
        id: "collaboration",
        tagline: "Engage every learner — in the classroom, at home, or on campus.",
        description: "Webex powers hybrid classrooms, virtual office hours, and student services across K-12 and higher education. AI-powered transcription and translation support diverse learners, while Webex Contact Center transforms enrollment and student support. Cisco is a founding partner of the Digital Equity Initiative reaching 500M+ learners.",
        initiatives: [
          { id: "ec1", name: "Hybrid & Flexible Learning", tagline: "Every seat in every classroom is a front row seat.", projects: [
            { name: "Webex Classroom", detail: "AI-powered hybrid teaching with automatic camera framing, whiteboard capture, and real-time transcription for in-person and remote students" },
            { name: "Lecture Capture & AI Notes", detail: "Automatic recording with AI-generated summaries, chapter markers, and searchable transcripts — integrated with LMS platforms" },
            { name: "Real-Time Translation for ESL Students", detail: "Live translation in 50+ languages supporting multilingual classrooms — closing the comprehension gap for English language learners" },
          ]},
          { id: "ec2", name: "Smart Campus Spaces", tagline: "Data-driven campus experiences.", projects: [
            { name: "Cisco Spaces for Campus", detail: "Occupancy analytics for libraries, labs, and study spaces — students find available rooms via mobile app, facilities optimize HVAC" },
            { name: "Digital Signage & Wayfinding", detail: "Webex-powered digital signage for campus announcements, event schedules, and interactive wayfinding for visitors and new students" },
            { name: "Room Devices for Faculty Offices", detail: "Desk Pro for virtual office hours and advising sessions — AI noise removal ensures clear audio even in open-plan faculty areas" },
          ]},
          { id: "ec3", name: "Student Services & Enrollment", tagline: "AI-powered student support at scale.", projects: [
            { name: "Webex AI Agent for Admissions", detail: "24/7 autonomous enrollment support — application status, financial aid guidance, and campus tour scheduling in 50+ languages" },
            { name: "Student Help Desk Contact Center", detail: "Webex Contact Center for IT support, housing, and financial services — AI routing based on student profile and issue complexity" },
            { name: "Alumni Engagement Platform", detail: "Webex Events for virtual commencement, alumni reunions, and donor cultivation — scalable to 100,000+ concurrent attendees" },
          ]},
        ],
      },
    ],
  },
  government: {
    label: "Government",
    solutionTagline: "Modernize mission-critical infrastructure for secure, citizen-centric services.",
    products: [
      {
        id: "networking",
        tagline: "FedRAMP-authorized networks securing the mission from campus to edge.",
        description: "Cisco Meraki for Government achieved FedRAMP Moderate authorization in 2025, bringing cloud-managed simplicity to federal, state, and local agencies. Combined with Catalyst's IL5-capable infrastructure and Security Cloud Control's FedRAMP-authorized firewall management, Cisco provides the compliance-first networking stack government demands.",
        initiatives: [
          { id: "gn1", name: "Compliant Cloud-Managed Networking", tagline: "FedRAMP simplicity for government IT.", projects: [
            { name: "Meraki for Government (FedRAMP)", detail: "FedRAMP Moderate + StateRAMP Moderate authorized — cloud-managed wireless, switching, SD-WAN, and security for federal, state, and local agencies" },
            { name: "Catalyst for Classified Networks", detail: "On-prem management via Catalyst Center for IL4/IL5 environments — air-gapped deployments with full automation capability" },
            { name: "Security Cloud Control (FedRAMP)", detail: "Centralized firewall management achieving FedRAMP authorization — Hybrid Mesh Firewall with zero-touch provisioning for branch offices" },
          ]},
          { id: "gn2", name: "Zero Trust & Cybersecurity Mandates", tagline: "Meeting EO 14028 and CISA directives.", projects: [
            { name: "Universal ZTNA for Government", detail: "Identity-driven access for users, devices, and AI agents — aligning to CISA Zero Trust Maturity Model and OMB M-22-09" },
            { name: "FIPS 140-2/3 Validated Encryption", detail: "End-to-end encryption across all Cisco networking platforms — validated for CJIS, IRS 1075, and FISMA compliance" },
            { name: "Post-Quantum Cryptography", detail: "Cisco 8000 Secure Routers with CNSA 2.0 algorithms protecting classified and sensitive traffic against future quantum threats" },
          ]},
          { id: "gn3", name: "Smart Cities & IoT Infrastructure", tagline: "Connected communities from public safety to transit.", projects: [
            { name: "City-Wide Wi-Fi & Wireless Backhaul", detail: "Cisco Ultra-Reliable Wireless Backhaul for public safety cameras, traffic signals, and digital equity initiatives" },
            { name: "IoT for Public Safety", detail: "Meraki Smart Cameras with AI analytics for gunshot detection, license plate recognition, and crowd monitoring — no NVR required" },
            { name: "Emergency Vehicle Preemption (EVP)", detail: "C-V2X connected vehicle infrastructure enabling emergency vehicle priority at intersections — reducing response times" },
          ]},
        ],
      },
      {
        id: "collaboration",
        tagline: "Secure collaboration for government workforce and citizen services.",
        description: "Webex for Government delivers FedRAMP High authorized collaboration across meetings, messaging, calling, and contact center. IL5-capable deployments serve DoD and intelligence community requirements. Webex powers secure hybrid work for 2M+ government users while transforming citizen engagement through AI-powered contact centers.",
        initiatives: [
          { id: "gc1", name: "Secure Government Collaboration", tagline: "FedRAMP High. IL5 capable. Zero compromise.", projects: [
            { name: "Webex for Government (FedRAMP High)", detail: "End-to-end encrypted meetings, messaging, and calling authorized at FedRAMP High — serving civilian and defense agencies" },
            { name: "Secure Hybrid Work for Government", detail: "Webex Calling with E911 for teleworking federal employees — maintaining continuity of operations (COOP) in any scenario" },
            { name: "Cross-Agency Collaboration", detail: "Federated messaging and meetings across agency boundaries — interoperable with Microsoft Teams GCC and Zoom for Government" },
          ]},
          { id: "gc2", name: "Mission-Ready Workspaces", tagline: "Classified to unclassified — devices for every clearance level.", projects: [
            { name: "Room Devices for SCIFs", detail: "Cisco Room Kit with air-gapped deployment options — camera privacy shutters, hardware mute, and TEMPEST-aligned configurations" },
            { name: "Desk Pro for Federal Offices", detail: "Hot desking for federal hybrid workers — CAC/PIV card authentication integration, persistent personal settings across locations" },
            { name: "Cisco Spaces for Government Buildings", detail: "Occupancy analytics and space optimization for GSA-managed buildings — energy efficiency reporting aligned to sustainability mandates" },
          ]},
          { id: "gc3", name: "Citizen Services & Contact Center", tagline: "AI-powered citizen engagement at government scale.", projects: [
            { name: "Webex AI Agent for Citizen Services", detail: "24/7 autonomous support for benefits inquiries, permit applications, and appointment scheduling — multilingual support for diverse populations" },
            { name: "311/211 Contact Center Modernization", detail: "Webex Contact Center replacing legacy ACD with AI routing, real-time transcription, and automated case creation in CRM" },
            { name: "Accessible Communications (Section 508)", detail: "Real-time captioning, screen reader compatibility, and TTY/RTT support meeting Section 508 and ADA requirements" },
          ]},
        ],
      },
    ],
  },
  manufacturing: {
    label: "Manufacturing",
    solutionTagline: "Connect and protect the smart factory — from shop floor to top floor.",
    products: [
      {
        id: "networking",
        tagline: "Industrial networking that converges IT and OT for Industry 4.0.",
        description: "Cisco's industrial networking portfolio connects 52,000+ manufacturing customers across 139 countries. Purpose-built ruggedized switches, Ultra-Reliable Wireless Backhaul (URWB) for AGVs and robotics, and Cyber Vision for OT security deliver the converged IT/OT infrastructure that smart manufacturing demands. Winner of IoT Breakthrough Awards for Industrial Wireless and OT Security.",
        initiatives: [
          { id: "mn1", name: "IT/OT Network Convergence", tagline: "One network from ERP to PLC.", projects: [
            { name: "Industrial Ethernet Switches (IE3500/IE9300)", detail: "Ruggedized switches for factory floors — operating in -40°C to 75°C, DIN-rail mount, with Catalyst Center or Meraki management" },
            { name: "URWB for AGVs & Robotics", detail: "Ultra-Reliable Wireless Backhaul with <10ms latency and zero-packet-loss handoffs — 50% fewer APs than standard Wi-Fi for mobile automation" },
            { name: "Unified IT/OT Dashboard", detail: "Single management plane spanning enterprise campus and factory floor networks — correlated views across Catalyst Center and Cyber Vision" },
          ]},
          { id: "mn2", name: "OT Security & Cyber Vision", tagline: "See every asset. Protect every process.", projects: [
            { name: "Cisco Cyber Vision", detail: "Passive OT asset discovery and vulnerability assessment — identifies PLCs, HMIs, and SCADA systems without disrupting production" },
            { name: "Industrial Microsegmentation", detail: "Hybrid Mesh Firewall extending zero-trust segmentation to OT zones — isolating production cells without recabling" },
            { name: "Secure Remote Access for OT", detail: "Cisco Secure Equipment Access for third-party vendor maintenance — audited, time-limited access to specific industrial assets" },
          ]},
          { id: "mn3", name: "AI-Powered Industrial Operations", tagline: "Predictive, autonomous, and always-on.", projects: [
            { name: "ThousandEyes for Industrial Networks", detail: "Enterprise Agents on IE switches and IR routers — end-to-end visibility from MES to cloud across the industrial DMZ" },
            { name: "Edge AI with Cisco + NVIDIA", detail: "AI inference at the factory edge for quality inspection, predictive maintenance, and safety zone enforcement" },
            { name: "Industrial Wireless Design Validated", detail: "Cisco Validated Designs for automotive, pharma, and food/beverage manufacturing — pre-tested architectures reducing deployment risk" },
          ]},
        ],
      },
      {
        id: "collaboration",
        tagline: "Connect frontline workers and bridge the shop floor to the boardroom.",
        description: "Webex enables manufacturing collaboration from the executive suite to the factory floor. Expert on Demand with AR-assisted guidance reduces equipment downtime, while Webex Contact Center powers customer service and dealer support. Digital signage and kiosk solutions deliver real-time production dashboards and safety messaging to every worker.",
        initiatives: [
          { id: "mc1", name: "Frontline Worker Communication", tagline: "Every worker connected. Every shift informed.", projects: [
            { name: "Expert on Demand (XoD)", detail: "AR-assisted remote guidance for equipment repair and quality checks — technicians see expert annotations overlaid on live camera via RealWear" },
            { name: "Webex for Frontline Workers", detail: "Push-to-talk, shift handoff messaging, and safety alerts on ruggedized devices — no email or desk required" },
            { name: "Digital Signage for Production Floors", detail: "Real-time OEE dashboards, safety metrics, and shift schedules displayed on Cisco Board devices across factory zones" },
          ]},
          { id: "mc2", name: "Smart Factory Collaboration Spaces", tagline: "Hybrid meetings that include the factory.", projects: [
            { name: "Room Kit for Control Rooms", detail: "Noise-canceling room systems for factory control rooms and war rooms — industrial-grade audio in high-ambient-noise environments" },
            { name: "Cisco Spaces for Facilities", detail: "Occupancy and environmental monitoring across manufacturing facilities — temperature, humidity, and air quality dashboards" },
            { name: "Cross-Site Engineering Collaboration", detail: "Webex Meetings with AI translation enabling global R&D teams to co-design across time zones and languages" },
          ]},
          { id: "mc3", name: "Customer & Dealer Support", tagline: "AI-powered service from order to aftermarket.", projects: [
            { name: "Webex AI Agent for Dealer Support", detail: "Autonomous order status, parts availability, and warranty claim processing for dealer networks — 24/7 self-service" },
            { name: "Contact Center for Field Service", detail: "AI-routed dispatch for field service technicians — skill-based routing with real-time parts inventory integration" },
            { name: "Remote Commissioning & Training", detail: "Webex Events for virtual product launches, dealer training, and customer commissioning sessions at global scale" },
          ]},
        ],
      },
    ],
  },
  retail: {
    label: "Retail",
    solutionTagline: "Connect and protect retail in the AI era — digital resilience at the core.",
    products: [
      {
        id: "networking",
        tagline: "Cloud-managed store networks with built-in intelligence and security.",
        description: "Cisco Meraki powers tens of thousands of retail locations worldwide with cloud-managed networking that combines Wi-Fi, security, smart cameras, and IoT sensors in a single dashboard. Cisco Spaces transforms the network into a customer analytics platform — delivering online-level insights to physical stores. Cisco's retail positioning for 2025 centers on Digital Resilience.",
        initiatives: [
          { id: "rn1", name: "Connected Store Infrastructure", tagline: "One dashboard from flagship to pop-up.", projects: [
            { name: "Meraki for Retail Stores", detail: "Cloud-managed Wi-Fi, switching, security, and cameras across thousands of locations — zero-touch deployment for new store openings" },
            { name: "Guest Wi-Fi & Customer Analytics", detail: "Branded captive portal with Cisco Spaces analytics — dwell time, visit frequency, and customer journey mapping across the sales floor" },
            { name: "SD-WAN for Distributed Retail", detail: "Application-aware routing prioritizing POS, inventory, and surveillance traffic — cellular failover ensuring every transaction completes" },
          ]},
          { id: "rn2", name: "Store Intelligence & Analytics", tagline: "Online-level insights for physical stores.", projects: [
            { name: "Cisco Spaces Location Analytics", detail: "Foot traffic heatmaps, conversion funnels, and A/B testing for store layouts — leveraging existing Meraki APs as sensors" },
            { name: "Meraki Smart Cameras for Loss Prevention", detail: "AI-powered video analytics for shrinkage detection, people counting, and queue management — cloud-stored with no NVR" },
            { name: "ThousandEyes for E-Commerce", detail: "End-to-end monitoring of online storefront performance — detect CDN, payment gateway, and third-party API degradation before customers notice" },
          ]},
          { id: "rn3", name: "Secure Retail & PCI Compliance", tagline: "Protect every transaction. Every endpoint.", projects: [
            { name: "PCI DSS Network Segmentation", detail: "Meraki auto-segments POS, back-office, guest, and IoT networks — simplified PCI scope reduction with centralized policy management" },
            { name: "Ransomware Protection for Retail", detail: "Hybrid Mesh Firewall protecting distributed store networks — automated threat containment preventing lateral movement across locations" },
            { name: "IoT Security for Smart Stores", detail: "Automated profiling and policy enforcement for digital price tags, smart shelves, self-checkout kiosks, and environmental sensors" },
          ]},
        ],
      },
      {
        id: "collaboration",
        tagline: "Empower associates, engage customers, and transform the shopping experience.",
        description: "Webex powers retail from corporate collaboration to store-level customer engagement. AI-powered contact center transforms omnichannel customer service, while digital signage and Webex devices enable immersive in-store experiences. Cisco showcased the future of retail at NRF 2025 with the Cisco Store concept demonstrating digital-first, scalable solutions.",
        initiatives: [
          { id: "rc1", name: "Omnichannel Customer Engagement", tagline: "Every channel. One seamless experience.", projects: [
            { name: "Webex AI Agent for Retail", detail: "Autonomous order tracking, returns processing, and product recommendations — conversational AI across voice, chat, and social channels" },
            { name: "Contact Center for Retail", detail: "AI-routed customer service with real-time sentiment analysis — escalation to store associates for high-value interactions" },
            { name: "Proactive Customer Outreach", detail: "AI-triggered notifications for delivery updates, loyalty rewards, and personalized promotions via Webex Connect CPaaS" },
          ]},
          { id: "rc2", name: "Store Associate Enablement", tagline: "Informed associates. Better experiences.", projects: [
            { name: "Webex for Frontline Retail", detail: "Task management, shift scheduling, and instant communication for store teams — accessible on personal or shared devices" },
            { name: "Expert on Demand for Retail", detail: "AR-guided remote support for visual merchandising, equipment maintenance, and new store setup — corporate experts assist any location" },
            { name: "Digital Signage & Kiosks", detail: "Webex-powered interactive displays for product information, wayfinding, and self-service checkout — dynamic content from corporate HQ" },
          ]},
          { id: "rc3", name: "Corporate Retail Collaboration", tagline: "Connect HQ to every store, every market.", projects: [
            { name: "Webex Suite for Retail HQ", detail: "Unified meetings, messaging, and calling for merchandising, marketing, and supply chain teams — AI summaries for every meeting" },
            { name: "Town Halls & Training at Scale", detail: "Webex Events for seasonal training, product launches, and all-hands — reaching 100,000+ associates simultaneously" },
            { name: "Cisco Spaces for Retail HQ", detail: "Hot desking and space optimization for corporate offices — sustainability reporting aligned to ESG commitments" },
          ]},
        ],
      },
    ],
  },
  financial: {
    label: "Financial Services",
    solutionTagline: "Modernize branches, secure transactions, and transform financial experiences.",
    products: [
      {
        id: "networking",
        tagline: "Compliant, resilient branch networks built for financial-grade security.",
        description: "Cisco delivers PCI DSS, SOX, and FINRA-compliant networking for banks, insurers, and capital markets firms. Meraki SD-WAN has driven 40% cost savings across financial services branch networks while delivering 20x more bandwidth. Zero-trust segmentation, post-quantum cryptography, and AI-powered operations meet the stringent demands of financial regulators.",
        initiatives: [
          { id: "fn1", name: "Branch Network Transformation", tagline: "From costly MPLS to intelligent SD-WAN.", projects: [
            { name: "Meraki SD-WAN for Branches", detail: "Replace MPLS with broadband + cellular — 40% cost savings across branch networks with 4G/5G failover ensuring every transaction completes" },
            { name: "Wi-Fi 7 for Modern Branches", detail: "High-density, low-latency wireless for advisor workstations, customer Wi-Fi, and IoT devices — dual-band supporting legacy ATM/kiosk connectivity" },
            { name: "Zero-Touch Branch Deployment", detail: "Cloud-managed provisioning for new branch openings — router, switch, AP, and firewall configured remotely in minutes, not weeks" },
          ]},
          { id: "fn2", name: "Financial-Grade Security & Compliance", tagline: "Meet every regulation. Reduce every risk.", projects: [
            { name: "PCI DSS Network Segmentation", detail: "Automated cardholder data environment isolation — Meraki auto-segments POS, ATM, and teller networks from general corporate traffic" },
            { name: "Zero Trust for Financial Data", detail: "Universal ZTNA with ISE identity services — role-based access for tellers, advisors, auditors, and third-party vendors" },
            { name: "Catalyst Center Compliance Audit", detail: "Continuous compliance posture validation across SOX, PCI, and FINRA requirements — automated remediation for configuration drift" },
          ]},
          { id: "fn3", name: "Resilient Trading & Operations", tagline: "Zero downtime for markets that never sleep.", projects: [
            { name: "Low-Latency Campus Networks", detail: "Catalyst 9000 fabric with <1ms switching for trading floors — deterministic performance for algorithmic and high-frequency trading" },
            { name: "ThousandEyes for SaaS Banking", detail: "End-to-end monitoring of core banking SaaS, payment gateways, and market data feeds — proactive detection of third-party degradation" },
            { name: "Post-Quantum Cryptography", detail: "Cisco 8000 Secure Routers protecting inter-branch and data center traffic with CNSA 2.0 algorithms — future-proofing against quantum threats" },
          ]},
        ],
      },
      {
        id: "collaboration",
        tagline: "Compliant collaboration that transforms client engagement and employee productivity.",
        description: "Webex powers secure financial services collaboration with end-to-end encryption, archiving compliance, and AI-powered client engagement. Umpqua Bank migrated to Webex Contact Center in five months, achieving significant improvements in client satisfaction. NatWest, Royal Bank of Canada, and First Horizon Bank are recognized Webex CX award winners.",
        initiatives: [
          { id: "fc1", name: "Compliant Communications", tagline: "Every conversation captured. Every regulation met.", projects: [
            { name: "Webex with Archiving Compliance", detail: "Integration with Smarsh, Global Relay, and Veritas for FINRA, MiFID II, and Dodd-Frank communication archiving requirements" },
            { name: "Webex Calling for Financial Advisors", detail: "99.999% SLA with E911 for remote advisors — call recording, transcription, and AI summaries for compliance and coaching" },
            { name: "End-to-End Encryption", detail: "Zero-trust security model with customer-managed encryption keys — ensuring financial data never transits unencrypted channels" },
          ]},
          { id: "fc2", name: "Client Engagement & Virtual Banking", tagline: "Premium experiences for every client interaction.", projects: [
            { name: "Virtual Financial Advisor", detail: "Webex video meetings for wealth management consultations — screen sharing for portfolio reviews, document co-browsing for applications" },
            { name: "Desk Pro for Branch Modernization", detail: "Video banking kiosks connecting branch visitors with remote specialists — extending expert availability to every location" },
            { name: "Webex Events for Investor Relations", detail: "Secure, compliant webcasting for earnings calls, shareholder meetings, and client seminars — scalable to 100,000+ attendees" },
          ]},
          { id: "fc3", name: "AI-Powered Financial CX", tagline: "Intelligent service from self-service to advisor.", projects: [
            { name: "Webex AI Agent for Banking", detail: "Autonomous balance inquiries, transaction disputes, and card activation — 8% reduction in call abandonment, 22% reduction in handle time" },
            { name: "AI Agent for Fraud Detection", detail: "Real-time fraud pattern recognition with guided agent workflows — automated card blocking and customer notification" },
            { name: "Webex Contact Center for Insurance", detail: "AI-routed claims processing with real-time transcription — automated FNOL capture and adjuster assignment based on claim complexity" },
          ]},
        ],
      },
    ],
  },
};

