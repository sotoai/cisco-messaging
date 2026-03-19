import { C } from "../theme";

// ─── STORY THUMBNAILS ────────────────────────────────────────────────────────────

export const storyThumbnails = {
  "st-1": { // Mercy Health — hospital network
    grad: ["#0d7377", "#14919b"],
    icon: (s) => <g transform={`translate(${s(160)},${s(70)}) scale(${s(1)})`}><path d="M-30 -20h60v40h-60z" fill="none" stroke="#fff" strokeWidth="2" opacity=".3"/><path d="M-5 -30v20M-15 -20h20" stroke="#fff" strokeWidth="3" opacity=".6"/><rect x="-20" y="-8" width="8" height="16" rx="1" fill="#fff" opacity=".2"/><rect x="12" y="-8" width="8" height="16" rx="1" fill="#fff" opacity=".2"/><rect x="-4" y="4" width="8" height="16" rx="1" fill="#fff" opacity=".2"/></g>,
    scene: (s) => <><rect x={s(20)} y={s(120)} width={s(280)} height={s(4)} rx={s(2)} fill="#fff" opacity=".08"/><circle cx={s(50)} cy={s(50)} r={s(15)} fill="#fff" opacity=".06"/><circle cx={s(270)} cy={s(40)} r={s(20)} fill="#fff" opacity=".05"/></>,
  },
  "st-2": { // Stanford Children's — telehealth
    grad: ["#6366f1", "#818cf8"],
    icon: (s) => <g transform={`translate(${s(160)},${s(65)}) scale(${s(1)})`}><rect x="-35" y="-22" width="70" height="44" rx="4" fill="none" stroke="#fff" strokeWidth="2" opacity=".4"/><circle cx="0" cy="-5" r="10" fill="none" stroke="#fff" strokeWidth="2" opacity=".3"/><path d="M-8 8a12 12 0 0124 0" fill="none" stroke="#fff" strokeWidth="2" opacity=".3"/><circle cx="25" cy="-15" r="4" fill="#4ade80" opacity=".6"/></g>,
    scene: (s) => <><rect x={s(30)} y={s(115)} width={s(80)} height={s(3)} rx={s(1)} fill="#fff" opacity=".1"/><rect x={s(30)} y={s(125)} width={s(50)} height={s(3)} rx={s(1)} fill="#fff" opacity=".07"/></>,
  },
  "st-3": { // Broward Schools — campus wifi
    grad: ["#0891b2", "#22d3ee"],
    icon: (s) => <g transform={`translate(${s(160)},${s(65)}) scale(${s(1)})`}><rect x="-25" y="-5" width="50" height="30" rx="2" fill="none" stroke="#fff" strokeWidth="2" opacity=".3"/><path d="M-25 25h50" stroke="#fff" strokeWidth="2" opacity=".3"/><path d="M0 -25a25 25 0 00-20 10M0 -25a25 25 0 0120 10M0 -18a18 18 0 00-13 7M0 -18a18 18 0 0113 7" fill="none" stroke="#fff" strokeWidth="2" opacity=".4"/><circle cx="0" cy="-10" r="2" fill="#fff" opacity=".6"/></g>,
    scene: (s) => <><rect x={s(40)} y={s(115)} width={s(60)} height={s(20)} rx={s(2)} fill="#fff" opacity=".05"/><rect x={s(110)} y={s(115)} width={s(60)} height={s(20)} rx={s(2)} fill="#fff" opacity=".05"/><rect x={s(180)} y={s(115)} width={s(60)} height={s(20)} rx={s(2)} fill="#fff" opacity=".05"/></>,
  },
  "st-4": { // ASU — hybrid learning
    grad: ["#b91c1c", "#ef4444"],
    icon: (s) => <g transform={`translate(${s(160)},${s(65)}) scale(${s(1)})`}><path d="M0 -28l30 15-30 15-30-15z" fill="none" stroke="#fff" strokeWidth="2" opacity=".4"/><path d="M-30 2l30 15 30-15" fill="none" stroke="#fff" strokeWidth="2" opacity=".2"/><path d="M30-13v20M27 12l3 5 3-5" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".3"/></g>,
    scene: (s) => <><rect x={s(40)} y={s(110)} width={s(100)} height={s(3)} rx={s(1)} fill="#fff" opacity=".08"/><rect x={s(40)} y={s(120)} width={s(70)} height={s(3)} rx={s(1)} fill="#fff" opacity=".06"/></>,
  },
  "st-5": { // City of Atlanta — security
    grad: ["#1e293b", "#334155"],
    icon: (s) => <g transform={`translate(${s(160)},${s(65)}) scale(${s(1)})`}><path d="M0-30c-20 0-30 10-30 10v20c0 15 30 28 30 28s30-13 30-28v-20s-10-10-30-10z" fill="none" stroke="#fff" strokeWidth="2" opacity=".35"/><path d="M-8 2l6 6 14-14" fill="none" stroke="#4ade80" strokeWidth="2.5" opacity=".6"/></g>,
    scene: (s) => <><rect x={s(20)} y={s(120)} width={s(260)} height={s(2)} rx={s(1)} fill="#fff" opacity=".06"/><circle cx={s(50)} cy={s(130)} r={s(3)} fill="#4ade80" opacity=".15"/><circle cx={s(80)} cy={s(130)} r={s(3)} fill="#4ade80" opacity=".15"/><circle cx={s(110)} cy={s(130)} r={s(3)} fill="#4ade80" opacity=".15"/></>,
  },
  "st-6": { // VA Medical — converged
    grad: ["#1e3a5f", "#2563eb"],
    icon: (s) => <g transform={`translate(${s(160)},${s(65)}) scale(${s(1)})`}><path d="M-5 -25v15M-15 -15h20" stroke="#fff" strokeWidth="3" opacity=".5"/><rect x="-30" y="-5" width="25" height="35" rx="2" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".3"/><rect x="5" y="-5" width="25" height="35" rx="2" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".3"/><path d="M-5 10h10" stroke="#fff" strokeWidth="1.5" opacity=".2" strokeDasharray="2 2"/></g>,
    scene: (s) => <><rect x={s(30)} y={s(120)} width={s(240)} height={s(3)} rx={s(1)} fill="#fff" opacity=".07"/></>,
  },
  "st-7": { // BMW — smart factory
    grad: ["#374151", "#4b5563"],
    icon: (s) => <g transform={`translate(${s(160)},${s(65)}) scale(${s(1)})`}><rect x="-35" y="0" width="70" height="25" rx="2" fill="none" stroke="#fff" strokeWidth="2" opacity=".3"/><path d="M-20 0v-20h15v20M5 0v-15h15v15" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".25"/><circle cx="-12" cy="-8" r="3" fill="#fbbf24" opacity=".5"/><circle cx="12" cy="-5" r="3" fill="#fbbf24" opacity=".5"/><path d="M-30 25h60" stroke="#fff" strokeWidth="1" opacity=".15"/></g>,
    scene: (s) => <><rect x={s(20)} y={s(115)} width={s(40)} height={s(25)} rx={s(1)} fill="#fff" opacity=".04"/><rect x={s(70)} y={s(115)} width={s(40)} height={s(25)} rx={s(1)} fill="#fff" opacity=".04"/><rect x={s(120)} y={s(115)} width={s(40)} height={s(25)} rx={s(1)} fill="#fff" opacity=".04"/></>,
  },
  "st-8": { // Siemens — collaboration
    grad: ["#0f766e", "#2dd4bf"],
    icon: (s) => <g transform={`translate(${s(160)},${s(65)}) scale(${s(1)})`}><rect x="-35" y="-20" width="30" height="20" rx="3" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".35"/><rect x="5" y="-20" width="30" height="20" rx="3" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".35"/><rect x="-15" y="5" width="30" height="20" rx="3" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".35"/><path d="M-5 0l-5 5M5 0l5 5" stroke="#fff" strokeWidth="1" opacity=".2"/></g>,
    scene: (s) => <><circle cx={s(60)} cy={s(130)} r={s(8)} fill="#fff" opacity=".05"/><circle cx={s(100)} cy={s(125)} r={s(12)} fill="#fff" opacity=".04"/><circle cx={s(250)} cy={s(135)} r={s(10)} fill="#fff" opacity=".04"/></>,
  },
  "st-9": { // Nordstrom — retail wifi
    grad: ["#78350f", "#d97706"],
    icon: (s) => <g transform={`translate(${s(160)},${s(65)}) scale(${s(1)})`}><rect x="-30" y="-15" width="60" height="40" rx="3" fill="none" stroke="#fff" strokeWidth="2" opacity=".3"/><path d="M-30 -5h60" stroke="#fff" strokeWidth="1.5" opacity=".2"/><path d="M-10 5v15M0 0v20M10 5v15" stroke="#fff" strokeWidth="2" opacity=".15"/><path d="M0 -25a20 20 0 00-15 8M0 -25a20 20 0 0115 8" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".3"/><circle cx="0" cy="-18" r="2" fill="#fff" opacity=".5"/></g>,
    scene: (s) => <><rect x={s(20)} y={s(120)} width={s(260)} height={s(2)} rx={s(1)} fill="#fff" opacity=".07"/></>,
  },
  "st-10": { // Sephora — contact center
    grad: ["#831843", "#ec4899"],
    icon: (s) => <g transform={`translate(${s(160)},${s(65)}) scale(${s(1)})`}><circle cx="0" cy="-10" r="18" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".3"/><path d="M-18 -10a18 18 0 00-6 2v10a4 4 0 004 4h2M18 -10a18 18 0 016 2v10a4 4 0 01-4 4h-2" fill="none" stroke="#fff" strokeWidth="2" opacity=".35"/><circle cx="-5" cy="-12" r="2" fill="#fff" opacity=".3"/><circle cx="5" cy="-12" r="2" fill="#fff" opacity=".3"/><path d="M-6 -4a8 8 0 0012 0" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".3"/></g>,
    scene: (s) => <><rect x={s(40)} y={s(115)} width={s(60)} height={s(3)} rx={s(1)} fill="#fff" opacity=".08"/><rect x={s(40)} y={s(123)} width={s(40)} height={s(3)} rx={s(1)} fill="#fff" opacity=".06"/></>,
  },
  "st-11": { // JPMorgan — trading floor
    grad: ["#0c4a6e", "#0284c7"],
    icon: (s) => <g transform={`translate(${s(160)},${s(65)}) scale(${s(1)})`}><path d="M-30 20l10-15 10 8 10-25 10 12 10-8 10 15" fill="none" stroke="#fff" strokeWidth="2" opacity=".4"/><path d="M-30 20h70" stroke="#fff" strokeWidth="1" opacity=".2"/><rect x="20" y="-20" width="15" height="15" rx="2" fill="none" stroke="#4ade80" strokeWidth="1.5" opacity=".4"/><path d="M24 -16l4 4 6-8" fill="none" stroke="#4ade80" strokeWidth="1.5" opacity=".5"/></g>,
    scene: (s) => <><rect x={s(20)} y={s(115)} width={s(50)} height={s(2)} rx={s(1)} fill="#4ade80" opacity=".08"/><rect x={s(80)} y={s(118)} width={s(50)} height={s(2)} rx={s(1)} fill="#f87171" opacity=".06"/><rect x={s(140)} y={s(113)} width={s(50)} height={s(2)} rx={s(1)} fill="#4ade80" opacity=".08"/></>,
  },
  "st-12": { // Umpqua Bank — video banking
    grad: ["#4338ca", "#7c3aed"],
    icon: (s) => <g transform={`translate(${s(160)},${s(65)}) scale(${s(1)})`}><rect x="-30" y="-18" width="45" height="36" rx="4" fill="none" stroke="#fff" strokeWidth="2" opacity=".35"/><path d="M15 -10l18-8v36l-18-8z" fill="none" stroke="#fff" strokeWidth="2" opacity=".3"/><circle cx="-8" cy="-3" r="8" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".2"/><circle cx="-8" cy="-6" r="3" fill="#fff" opacity=".15"/></g>,
    scene: (s) => <><rect x={s(30)} y={s(115)} width={s(90)} height={s(3)} rx={s(1)} fill="#fff" opacity=".08"/><rect x={s(30)} y={s(123)} width={s(60)} height={s(3)} rx={s(1)} fill="#fff" opacity=".06"/></>,
  },
};

export function StoryThumbnail({ storyId, width = 320, height = 180, style = {} }) {
  const t = storyThumbnails[storyId];
  if (!t) return <div style={{ width, height, background: C.accentSoft, ...style }} />;
  const s = (v) => v * width / 320;
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice" style={{ display: "block", ...style }}>
      <defs>
        <linearGradient id={`sg-${storyId}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={t.grad[0]} />
          <stop offset="100%" stopColor={t.grad[1]} />
        </linearGradient>
      </defs>
      <rect width={width} height={height} fill={`url(#sg-${storyId})`} />
      {/* Subtle grid pattern */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1={0} y1={s(i * 25)} x2={width} y2={s(i * 25)} stroke="#fff" strokeWidth="0.5" opacity=".04" />
      ))}
      {Array.from({ length: 14 }).map((_, i) => (
        <line key={`v${i}`} x1={s(i * 25)} y1={0} x2={s(i * 25)} y2={height} stroke="#fff" strokeWidth="0.5" opacity=".04" />
      ))}
      {t.scene(s)}
      {t.icon(s)}
      {/* Cisco logo mark */}
      <text x={s(16)} y={s(170)} fontSize={s(9)} fill="#fff" opacity=".25" fontFamily="Inter, sans-serif" fontWeight="500">CISCO</text>
    </svg>
  );
}

// ─── STORIES DATA ────────────────────────────────────────────────────────────────
export const stories = [
  {
    id: "st-1", customer: "Mercy Health System", industry: "healthcare",
    summary: "Unified 200+ clinical sites on Meraki cloud-managed networking with AI-driven operations.",
    problem: "Mercy operated a fragmented network across 200+ clinical sites spanning four states. Each facility ran different hardware generations with separate management consoles, creating blind spots in patient-critical applications and a mean time to repair exceeding 4 hours. Compliance audits flagged inconsistent security policies across sites.",
    solution: "Cisco deployed a unified Meraki + Catalyst networking fabric across all sites with a single cloud dashboard for visibility. Cross-Domain Operations provided autonomous root-cause analysis for application performance issues, while embedded zero-trust security enforced consistent policies hospital-wide. ThousandEyes integration delivered end-to-end monitoring from the EHR application through to the clinical endpoint.",
    outcome: "Mean time to repair dropped 40% in the first quarter. The unified licensing model saved $2.1M annually in operational costs. Security audit findings decreased by 65%, and network uptime exceeded 99.97% across all clinical sites.",
    metrics: [{ value: "40%", label: "MTTR reduction" }, { value: "$2.1M", label: "Annual savings" }, { value: "200+", label: "Sites unified" }],
    tags: { products: ["networking"], initiatives: ["n1", "n2"], verticals: ["healthcare"], buyerRoles: ["cio", "nb2", "nb3"] },
    videoUrl: null, deckSlideCount: 12, date: "2025-11",
  },
  {
    id: "st-2", customer: "Stanford Children's Health", industry: "healthcare",
    summary: "Transformed hybrid care delivery with AI-powered telehealth and smart clinical spaces.",
    problem: "Stanford Children's struggled with fragmented video platforms for telehealth visits. Clinicians used three different tools for patient consultations, internal meetings, and family conferences. Room systems were underutilized at 30% occupancy, and families in rural areas reported poor telehealth quality.",
    solution: "Cisco deployed Webex-powered telehealth across all departments with AI-driven noise removal and real-time translation for multilingual families. Smart room systems with RoomOS and occupancy sensors optimized clinical space usage. AI Assistant provided automatic transcription and clinical summary drafts for provider documentation.",
    outcome: "Telehealth visit completion rates increased from 72% to 94%. Room utilization improved to 68%. Clinicians saved an average of 12 minutes per encounter on documentation through AI-assisted summaries, reclaiming over 15,000 clinical hours annually.",
    metrics: [{ value: "94%", label: "Visit completion" }, { value: "68%", label: "Room utilization" }, { value: "15K hrs", label: "Time reclaimed" }],
    tags: { products: ["collaboration"], initiatives: ["c1", "c2"], verticals: ["healthcare"], buyerRoles: ["cb1", "cb2"] },
    videoUrl: null, deckSlideCount: 10, date: "2025-09",
  },
  {
    id: "st-3", customer: "Broward County Public Schools", industry: "education",
    summary: "Modernized networking for 270 schools with Wi-Fi 7 and unified cloud management.",
    problem: "Broward County's aging network infrastructure couldn't support the explosion of student devices and cloud-based learning applications across 270 schools. Peak-hour Wi-Fi congestion caused application timeouts, and the IT team of 15 managed 40,000+ access points with no centralized visibility.",
    solution: "Cisco provided a phased Wi-Fi 7 rollout with dual-mode access points manageable through either Meraki Dashboard or Catalyst Center. The Cisco Networking Subscription consolidated licensing across wireless, switching, and WAN. Zero-touch provisioning enabled the small IT team to deploy new schools in under 48 hours.",
    outcome: "Student application timeouts decreased by 85%. The IT team deployed 12 new school sites in one semester with zero on-site visits. Annual networking costs decreased 30% through consolidated subscriptions, and the district passed its first clean E-Rate audit in three years.",
    metrics: [{ value: "85%", label: "Fewer timeouts" }, { value: "30%", label: "Cost reduction" }, { value: "270", label: "Schools connected" }],
    tags: { products: ["networking"], initiatives: ["n1", "n3"], verticals: ["education"], buyerRoles: ["nb1", "nb3", "cio"] },
    videoUrl: null, deckSlideCount: 14, date: "2025-10",
  },
  {
    id: "st-4", customer: "Arizona State University", industry: "education",
    summary: "Deployed AI-first collaboration across 80,000-student campus for hybrid learning at scale.",
    problem: "ASU's rapid expansion to 80,000+ students across five campuses strained its collaboration infrastructure. Faculty used inconsistent video tools, lecture recordings lacked searchability, and international students (22% of enrollment) faced language barriers in virtual office hours and group projects.",
    solution: "Cisco deployed Webex as the unified collaboration platform with AI Assistant providing real-time transcription, translation in 100+ languages, and intelligent meeting summaries. Smart classrooms with Cisco Room Bar systems enabled hybrid lectures with automatic camera framing. Webex AI Agent handled routine student service inquiries for admissions and financial aid.",
    outcome: "Student satisfaction with hybrid learning jumped from 61% to 89%. International student engagement in virtual sessions increased 45%. The AI Agent resolved 60% of routine inquiries without human intervention, freeing 8 full-time-equivalent staff positions for higher-value advising.",
    metrics: [{ value: "89%", label: "Student satisfaction" }, { value: "45%", label: "Engagement lift" }, { value: "60%", label: "AI self-service" }],
    tags: { products: ["collaboration"], initiatives: ["c1", "c2", "c3"], verticals: ["education"], buyerRoles: ["cb1", "cb2", "cb3"] },
    videoUrl: null, deckSlideCount: 11, date: "2025-08",
  },
  {
    id: "st-5", customer: "City of Atlanta", industry: "government",
    summary: "Secured citywide network infrastructure with AI-powered operations and zero-trust architecture.",
    problem: "Atlanta's network spanned 150+ municipal buildings with aging infrastructure and inconsistent security policies. After a ransomware incident disrupted city services for five days, leadership mandated a complete network security overhaul. The IT team lacked visibility into lateral movement threats and had no automated incident response.",
    solution: "Cisco deployed AgenticOps across the city's network fabric with Cross-Domain Operations providing cross-domain threat correlation. Post-quantum cryptography was enabled on all WAN links between facilities. ThousandEyes monitored citizen-facing application performance end-to-end, while Workflows Engine automated threat containment and compliance reporting.",
    outcome: "The city achieved zero successful lateral movement incidents in the first year. Mean time to detect threats dropped from 72 hours to under 15 minutes. Automated compliance reporting saved 2,000 staff hours annually, and citizen digital service uptime reached 99.95%.",
    metrics: [{ value: "0", label: "Lateral breaches" }, { value: "<15min", label: "Detection time" }, { value: "99.95%", label: "Service uptime" }],
    tags: { products: ["networking"], initiatives: ["n2", "n3"], verticals: ["government"], buyerRoles: ["ciso", "nb2", "vpSecurity"] },
    videoUrl: null, deckSlideCount: 13, date: "2025-12",
  },
  {
    id: "st-6", customer: "VA Medical Center Network", industry: "government",
    summary: "Integrated secure networking and telehealth collaboration across 170 VA medical facilities.",
    problem: "The VA's 170 medical facilities operated siloed networking and collaboration systems that couldn't support the surge in veteran telehealth demand. Network security policies varied by region, video quality for remote consultations was unreliable, and clinicians wasted time switching between platforms for different care scenarios.",
    solution: "Cisco delivered a converged networking and collaboration solution: unified Meraki + Catalyst networking with embedded security for all facilities, plus Webex-powered telehealth with HIPAA-compliant recording and AI-assisted clinical documentation. Smart rooms in specialty clinics enabled remote specialist consultations with diagnostic-quality video.",
    outcome: "Veteran telehealth appointments increased 120% with 96% satisfaction scores. Network security incidents dropped 70% through unified zero-trust policies. Specialist wait times decreased from 45 days to 12 days through remote consultation capabilities, serving an additional 50,000 veterans annually.",
    metrics: [{ value: "120%", label: "Telehealth growth" }, { value: "70%", label: "Fewer incidents" }, { value: "50K+", label: "More vets served" }],
    tags: { products: ["networking", "collaboration"], initiatives: ["n1", "n3", "c1"], verticals: ["government"], buyerRoles: ["cio", "vpIt", "cb1"] },
    videoUrl: null, deckSlideCount: 16, date: "2025-07",
  },
  {
    id: "st-7", customer: "BMW Manufacturing", industry: "manufacturing",
    summary: "Connected 12 smart factory floors with unified industrial networking and AI-driven operations.",
    problem: "BMW's manufacturing network across 12 production facilities ran separate OT and IT networks with no unified visibility. Unplanned downtime cost $22,000 per minute on the assembly line. Network troubleshooting required physical site visits, and the convergence of IT/OT created security blind spots exploitable by supply-chain attacks.",
    solution: "Cisco unified IT/OT networking under a single Catalyst fabric with industrial-grade switches and Meraki Dashboard for cloud management. Cross-Domain Operations provided predictive failure detection across the converged network. Embedded microsegmentation isolated OT devices from IT traffic while maintaining operational visibility.",
    outcome: "Unplanned network-related downtime dropped 75%, saving an estimated $18M annually. Network troubleshooting shifted from on-site visits to remote AI-assisted resolution for 90% of incidents. The unified IT/OT security posture passed BMW's internal penetration testing with zero critical findings.",
    metrics: [{ value: "75%", label: "Less downtime" }, { value: "$18M", label: "Annual savings" }, { value: "90%", label: "Remote resolution" }],
    tags: { products: ["networking"], initiatives: ["n1", "n2"], verticals: ["manufacturing"], buyerRoles: ["cio", "nb1", "nb2"] },
    videoUrl: null, deckSlideCount: 12, date: "2025-06",
  },
  {
    id: "st-8", customer: "Siemens Smart Factory", industry: "manufacturing",
    summary: "Deployed intelligent workspaces and AI collaboration for globally distributed engineering teams.",
    problem: "Siemens' engineering teams across 15 countries struggled with collaboration on complex product designs. Time-zone differences and language barriers slowed design review cycles from days to weeks. Physical prototype reviews required expensive international travel, and meeting rooms were poorly equipped for hybrid design sessions.",
    solution: "Cisco deployed smart collaboration rooms with Cisco Board Pro systems for interactive 3D design reviews across locations. AI Assistant provided real-time translation for multilingual engineering reviews and automated action-item tracking. Webex integrated with Siemens' PLM tools for contextual collaboration directly within design workflows.",
    outcome: "Design review cycle time compressed from 18 days to 5 days. International travel for design reviews decreased 60%, saving $4.2M annually. Engineering productivity improved 25% through reduced context-switching and AI-assisted documentation.",
    metrics: [{ value: "72%", label: "Faster reviews" }, { value: "$4.2M", label: "Travel savings" }, { value: "25%", label: "Productivity gain" }],
    tags: { products: ["collaboration"], initiatives: ["c1", "c2"], verticals: ["manufacturing"], buyerRoles: ["cb1", "cb2", "vpWorkplace"] },
    videoUrl: null, deckSlideCount: 10, date: "2025-10",
  },
  {
    id: "st-9", customer: "Nordstrom", industry: "retail",
    summary: "Modernized 350 store networks with Wi-Fi 7 for seamless omnichannel retail experiences.",
    problem: "Nordstrom's in-store technology initiatives — mobile POS, clienteling apps, inventory RFID — were constrained by aging Wi-Fi infrastructure across 350 locations. Peak shopping periods saw 40% packet loss on associate devices. Each store network was managed independently, creating a patchwork of configurations and security policies.",
    solution: "Cisco deployed Wi-Fi 7 access points across all stores with Meraki cloud management for centralized policy and monitoring. Cisco Spaces provided real-time customer journey analytics and heat mapping. The unified networking subscription consolidated per-store licensing into a single enterprise agreement with portable licenses.",
    outcome: "Associate device reliability improved to 99.8% during peak periods. Clienteling app adoption doubled as associates trusted the network. Real-time customer analytics drove a 12% increase in cross-sell conversion, and network operational costs decreased 35% through centralized management.",
    metrics: [{ value: "99.8%", label: "Device reliability" }, { value: "12%", label: "Cross-sell lift" }, { value: "35%", label: "OpEx reduction" }],
    tags: { products: ["networking"], initiatives: ["n1", "n3"], verticals: ["retail"], buyerRoles: ["nb3", "vpIt", "cio"] },
    videoUrl: null, deckSlideCount: 11, date: "2025-11",
  },
  {
    id: "st-10", customer: "Sephora", industry: "retail",
    summary: "Transformed customer experience with AI-powered contact center and omnichannel engagement.",
    problem: "Sephora's contact center handled 2M+ monthly interactions across chat, voice, and social channels with average handle times of 8 minutes. Customers frequently repeated information across channels, beauty advisors lacked real-time product knowledge during calls, and peak-season staffing required 200+ temporary agents with 3-week training cycles.",
    solution: "Cisco deployed Webex Contact Center with AI Agent handling routine inquiries — order status, product recommendations, and appointment booking — in 30+ languages. Agent Assist provided real-time product knowledge and purchase history during live interactions. Quality Management AI automatically scored interactions and identified coaching opportunities.",
    outcome: "AI Agent resolved 55% of routine inquiries autonomously, reducing live agent volume by 40%. Average handle time dropped to 4.5 minutes. Customer satisfaction increased from 78% to 91%, and seasonal agent onboarding compressed from 3 weeks to 4 days through AI-assisted training.",
    metrics: [{ value: "55%", label: "AI self-service" }, { value: "91%", label: "CSAT score" }, { value: "40%", label: "Volume reduction" }],
    tags: { products: ["collaboration"], initiatives: ["c3"], verticals: ["retail"], buyerRoles: ["cb3", "cio"] },
    videoUrl: null, deckSlideCount: 13, date: "2025-09",
  },
  {
    id: "st-11", customer: "JPMorgan Chase", industry: "financial",
    summary: "Secured global trading floor network with post-quantum cryptography and AI-driven operations.",
    problem: "JPMorgan's trading floor network across 60 global locations demanded sub-millisecond latency and zero tolerance for outages. Growing regulatory requirements for data sovereignty and quantum-readiness created compliance pressure. The network team managed 500,000+ endpoints with legacy monitoring tools that generated 10,000+ daily alerts, most false positives.",
    solution: "Cisco deployed a unified Meraki + Catalyst fabric with post-quantum cryptographic protocols on all inter-site links. Cross-Domain Operations correlated alerts across network, security, and application domains to reduce noise by 95%. ThousandEyes provided transaction-path visibility for latency-sensitive trading applications. Microsegmentation isolated trading systems from corporate networks.",
    outcome: "Alert noise dropped 95%, from 10,000 daily to under 500 actionable items. Network-related trading outages went to zero for 14 consecutive months. The bank achieved quantum-readiness certification ahead of schedule, and annual network operations costs decreased $12M through automation.",
    metrics: [{ value: "95%", label: "Alert reduction" }, { value: "0", label: "Trading outages" }, { value: "$12M", label: "OpEx savings" }],
    tags: { products: ["networking"], initiatives: ["n1", "n2", "n3"], verticals: ["financial"], buyerRoles: ["ciso", "nb1", "nb2", "cio"] },
    videoUrl: null, deckSlideCount: 15, date: "2025-12",
  },
  {
    id: "st-12", customer: "Umpqua Bank", industry: "financial",
    summary: "Reimagined branch experience with AI-powered video banking and smart collaboration spaces.",
    problem: "Umpqua's 200+ branches were transitioning to a hybrid advisory model, but legacy video systems couldn't support reliable customer consultations with remote specialists. Branch advisors lacked tools for secure document sharing during sessions, and the contact center struggled to route complex financial inquiries to the right specialist.",
    solution: "Cisco deployed Webex-powered video banking kiosks in branches with end-to-end encryption and secure document collaboration. AI-powered routing in Webex Contact Center matched customer inquiries to specialist expertise in real time. Smart meeting rooms in flagship branches used Cisco Room systems for high-value client presentations.",
    outcome: "Remote specialist consultations increased 180%, enabling Umpqua to serve complex financial needs in branches without dedicated specialists. Customer Net Promoter Score improved 22 points. Branch operating costs decreased 20% by optimizing specialist coverage across the network.",
    metrics: [{ value: "180%", label: "More consultations" }, { value: "+22 pts", label: "NPS improvement" }, { value: "20%", label: "Cost reduction" }],
    tags: { products: ["collaboration"], initiatives: ["c1", "c3"], verticals: ["financial"], buyerRoles: ["cb1", "cb3", "vpWorkplace"] },
    videoUrl: null, deckSlideCount: 10, date: "2025-08",
  },
];

