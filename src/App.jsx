import { useState } from "react";
// ─── CISCO BRAND COLORS ────────────────────────────────────────────────────────
const CISCO_BLUE = "#049FD9";
const CISCO_DARK = "#00262B";
const CISCO_MID  = "#005073";
// ─── FRAMEWORK DATA ────────────────────────────────────────────────────────────
const fw = {
  company: {
    purpose: "The macro unification narrative — why all of Cisco's portfolio is stronger together than any single piece.",
    headline: "One Cisco",
    tagline: "The network. The security. The collaboration. One platform. One partner. One Cisco.",
    description: "One Cisco reflects how Cisco uniquely combines networking, security, observability, and collaboration with AI embedded throughout — delivering compounding value that no point-solution vendor can match. When we combine two or three parts of Cisco, we are unbeatable. The breadth of the portfolio is the differentiator — positioned correctly.",
  },
  solutionCategory: {
    purpose: "Positions the solution category — the strategic 'why us' for customers modernizing campus, branch, and collaboration environments.",
    headline: "Futureproof Workplace",
    tagline: "Modernize how business happens, everywhere it happens.",
    vision: "Cisco helps organizations create work environments that boost productivity, enhance employee and customer experience, and simplify IT — with networking, security, and collaboration unified on a single AI-powered platform.",
    solution: "Only Cisco unifies campus and branch networking, secure connectivity, and collaboration into an integrated, AI-driven platform. By converging these domains, we eliminate the silos that drive complexity and cost — delivering consistent experiences for employees, customers, and IT teams across every location.",
    pillars: [
      { label: "Frictionless Experiences", icon: "✦" },
      { label: "Productivity & Agility", icon: "✦" },
      { label: "Safety & Security", icon: "✦" },
      { label: "Efficiency & Cost Savings", icon: "✦" },
    ],
  },
  purposeLabels: {
    product: "The specific product that solves a distinct problem within the Futureproof Workplace — the 'what we built.'",
    initiative: "The buying triggers and IT/business budget categories that drive adoption of each product.",
    project: "Real use cases that show how customers activate each initiative in their environment.",
  },
  products: [
    {
      id: "meraki",
      name: "Cisco Meraki",
      subtitle: "Campus & Branch Networking",
      tagline: "Simplify your network. Amplify your business.",
      description: "Cisco Meraki delivers cloud-managed networking across campus and branch — unifying Wi-Fi, switching, SD-WAN, and security in a single dashboard. Now converging with Catalyst, Meraki gives IT teams the simplicity of cloud management with the power of enterprise-grade infrastructure, backed by AI-native assurance and ThousandEyes visibility.",
      color: "#00AECD",
      darkColor: "#005073",
      bg: "#E8F8FC",
      icon: "〇",
      initiatives: [
        {
          id: "m1",
          name: "AI-Powered Network Operations",
          tagline: "From reactive to proactive, without the headcount.",
          description: "AI Canvas and AgenticOps transform how IT teams manage campus and branch networks — automating routine tasks, proactively surfacing issues, and enabling non-specialist teams to operate at expert level. Meraki Dashboard + ThousandEyes + Splunk deliver end-to-end visibility in a single pane of glass.",
          projects: [
            { name: "AI Canvas for Campus/Branch", detail: "Conversational AI for network troubleshooting, provisioning, and optimization across Meraki and Catalyst" },
            { name: "ThousandEyes Assurance", detail: "Real-time visibility into network performance from AP to application, including Microsoft Azure" },
            { name: "AgenticOps Automation", detail: "Agentic AI that automates switch migrations, Wi-Fi setup, and device onboarding with a single prompt" },
          ],
        },
        {
          id: "m2",
          name: "Secure Campus & Branch Access",
          tagline: "Security embedded, not bolted on.",
          description: "Cisco delivers a cloud-managed, identity-driven architecture that unites access control and cloud security within the Meraki Dashboard — addressing the dual challenge of securing an expanding attack surface with limited IT resources.",
          projects: [
            { name: "Cisco Access Manager", detail: "Identity-based access control via Meraki Dashboard — powered by ISE, deployed as SaaS, no hardware required" },
            { name: "Hybrid Mesh Firewall", detail: "AI-driven security enforcement across Meraki, Catalyst, and ASA for consistent branch and campus protection" },
            { name: "Zero Trust Branch (SASE)", detail: "Meraki SD-WAN integrated with Cisco Secure Access for full SASE coverage at every branch location" },
          ],
        },
        {
          id: "m3",
          name: "Meraki + Catalyst Unification",
          tagline: "One hardware. Your choice of management.",
          description: "For years, organizations had to choose between Meraki's simplicity and Catalyst's enterprise power. Now they get both — unified hardware, licensing, and management in a 'pick how you want to deploy' model. Cloud-managed, on-prem, or hybrid. No compromise.",
          projects: [
            { name: "Unified Hardware Platform", detail: "Cisco Smart Switches (9350/9610) manageable via Meraki Dashboard or Catalyst Center — same hardware, your choice" },
            { name: "Global Overview Dashboard", detail: "Single cloud dashboard with direct visibility into both Meraki and Catalyst-managed networks" },
            { name: "Cloud-Managed Fabric", detail: "Scalable, secure architecture that simplifies provisioning and management of large campus sites" },
          ],
        },
      ],
    },
    {
      id: "sdwan",
      name: "Catalyst SD-WAN",
      subtitle: "Branch Connectivity & WAN",
      tagline: "Connect every branch. Secure every path.",
      description: "Cisco Catalyst SD-WAN connects distributed branches to cloud, data center, and campus resources with intelligent traffic management, embedded security, and centralized control. With Meraki SD-WAN now fully integrated into the same SASE framework, Cisco delivers consistent, policy-driven connectivity for every type of branch — from retail to healthcare to enterprise.",
      color: "#6CC04A",
      darkColor: "#3A7A28",
      bg: "#EEF8E8",
      icon: "◈",
      initiatives: [
        {
          id: "s1",
          name: "Branch Cloud Connectivity",
          tagline: "Direct, secure, optimized access to everything.",
          description: "As branches increasingly access SaaS, UCaaS, and cloud-hosted applications directly, Catalyst SD-WAN provides intelligent path selection, application-aware routing, and real-time performance optimization — eliminating the hairpinning and latency that degrade user experience.",
          projects: [
            { name: "Application-Aware Routing", detail: "Dynamic path selection based on real-time app performance metrics across MPLS, broadband, and LTE" },
            { name: "Direct Internet Access (DIA)", detail: "Secure, optimized SaaS breakout at the branch for Microsoft 365, Webex, and cloud apps" },
            { name: "ThousandEyes Branch Monitoring", detail: "Proactive visibility into branch-to-cloud performance before users are impacted" },
          ],
        },
        {
          id: "s2",
          name: "Secure WAN with SASE",
          tagline: "Network and security. Converged at the edge.",
          description: "Cisco's SASE architecture delivers a seamless combination of network and security functionality through a single, cloud-native platform — extending Zero Trust to the WAN and ensuring every branch connection is authenticated, encrypted, and policy-compliant.",
          projects: [
            { name: "Cisco Secure Access (SASE)", detail: "Unified SASE platform integrating SD-WAN, SWG, CASB, and ZTNA for branch and remote users" },
            { name: "Encrypted Traffic Analytics", detail: "AI-powered threat detection in encrypted WAN traffic without decryption" },
            { name: "Zero Trust Network Access (ZTNA)", detail: "Identity-aware, least-privilege access replacing legacy VPN for branch workforces" },
          ],
        },
        {
          id: "s3",
          name: "Branch Simplification & Automation",
          tagline: "Deploy faster. Operate with less.",
          description: "Cisco SD-WAN dramatically reduces the complexity of deploying and managing distributed branch infrastructure — from zero-touch provisioning to centralized policy management — freeing lean IT teams to focus on business outcomes rather than box management.",
          projects: [
            { name: "Zero-Touch Provisioning (ZTP)", detail: "Branches deploy automatically — ship hardware to site, plug in, and the network self-configures" },
            { name: "Centralized Policy Management", detail: "Single control plane for routing, security, and QoS policy across all branch locations" },
            { name: "5G Fixed Wireless Access", detail: "Meraki MG cellular gateways as primary or backup WAN — enterprise-grade 5G for any branch" },
          ],
        },
      ],
    },
    {
      id: "webex",
      name: "Webex Suite",
      subtitle: "Collaboration & Hybrid Work",
      tagline: "Where people and AI work better together.",
      description: "Webex is Cisco's AI-powered collaboration platform — unifying calling, meetings, messaging, devices, and contact center in a single suite. Webex is uniquely differentiated by its deep integration with the underlying Cisco network: IT admins can troubleshoot a poor call quality complaint and see correlated data from the Webex app, the Meraki AP, and the Catalyst switch — all in one interface.",
      color: "#8B5CF6",
      darkColor: "#5B21B6",
      bg: "#F5F3FF",
      icon: "◎",
      initiatives: [
        {
          id: "w1",
          name: "AI-Powered Meeting & Calling Experience",
          tagline: "Every meeting smarter. Every call more productive.",
          description: "Webex embeds AI into every interaction — delivering real-time summaries, translations, action items, and AI assistant capabilities across meetings, calling, and messaging. As the only vendor supporting cloud, on-prem, and hybrid calling, Cisco gives organizations a future-proof path regardless of where they are in their cloud journey.",
          projects: [
            { name: "AI Assistant for Webex", detail: "Live and post-meeting summaries, action items, translations in 120 languages — available in meetings and calling" },
            { name: "Webex Calling (Cloud/Hybrid/On-Prem)", detail: "The only vendor supporting all three deployment models with full feature parity and AI innovations" },
            { name: "Cisco Call for Microsoft Teams", detail: "Full Webex Calling experience embedded natively in Microsoft Teams for organizations standardized on M365" },
          ],
        },
        {
          id: "w2",
          name: "Intelligent Workspaces & Devices",
          tagline: "Bring people back to the office — on purpose.",
          description: "Cisco collaboration devices transform physical workspaces into intelligent, AI-powered environments — drawing employees back to the office by delivering meeting experiences that are more productive than joining from a laptop. From Room Bars to Ceiling Microphone Pro, every device is designed to make in-room participants equal to remote ones.",
          projects: [
            { name: "Cisco Room Portfolio", detail: "Wi-Fi 7 APs, Room Bars, Boards, and Desk devices purpose-built for every workspace — boardroom to huddle" },
            { name: "Cisco Spaces + Workspace Intelligence", detail: "Buildings transformed into smart spaces with occupancy sensing, desk booking, and space optimization" },
            { name: "Control Hub + Meraki Integration", detail: "IT admins see full call paths with Meraki AP performance data correlated to Webex call quality" },
          ],
        },
        {
          id: "w3",
          name: "Hybrid Work Employee Experience",
          tagline: "Consistent, secure, and seamless — wherever work happens.",
          description: "The new workforce expects the same experience whether they're in a Cisco-equipped headquarters, a home office, or a branch. Webex Suite delivers consistency across every environment — with enterprise security, compliance, and manageability baked in, not bolted on.",
          projects: [
            { name: "Webex Suite (Unified Collaboration)", detail: "Calling, meetings, messaging, webinars, and polling in one app — reducing app sprawl and licensing cost" },
            { name: "BYOD & Mobile-First Experiences", detail: "Enterprise-grade Webex Calling on personal devices, expanding globally via Certified Mobile Calling Providers" },
            { name: "Employee Wellbeing & Inclusion", detail: "AI features designed to reduce meeting fatigue — async video, intelligent summaries, and well-being analytics" },
          ],
        },
      ],
    },
  ],
};
// ─── COMPONENTS ────────────────────────────────────────────────────────────────
function TierRow({ tier, color, purpose }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 8, letterSpacing: 2.5, fontWeight: 800,
        color, textTransform: "uppercase", whiteSpace: "nowrap",
        background: `${color}12`, padding: "3px 8px",
        borderRadius: 3, border: `1px solid ${color}28`,
        minWidth: "fit-content",
      }}>{tier}</span>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#94A3B8", fontStyle: "italic", lineHeight: 1.4 }}>{purpose}</span>
    </div>
  );
}
function DownArrow({ color = "#CBD5E1" }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: 32, justifyContent: "center" }}>
      <div style={{ width: 1.5, height: 22, background: `linear-gradient(to bottom, ${color}44, ${color})` }} />
      <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `7px solid ${color}` }} />
    </div>
  );
}
function SplitArrow({ color = "#CBD5E1" }) {
  return (
    <div style={{ position: "relative", height: 44 }}>
      <svg width="100%" height="44" preserveAspectRatio="none">
        <line x1="50%" y1="0" x2="50%" y2="16" stroke={color} strokeWidth="1.5" />
        <line x1="16.7%" y1="16" x2="83.3%" y2="16" stroke={color} strokeWidth="1.5" />
        {[16.7, 50, 83.3].map((p, i) => (
          <g key={i}>
            <line x1={`${p}%`} y1="16" x2={`${p}%`} y2="37" stroke={color} strokeWidth="1.5" />
          </g>
        ))}
        <polygon points="10.7%,37 22.7%,37 16.7%,44" fill={color} />
        <polygon points="44%,37 56%,37 50%,44" fill={color} />
        <polygon points="77.3%,37 89.3%,37 83.3%,44" fill={color} />
      </svg>
    </div>
  );
}
export default function App() {
  const [expandCompany, setExpandCompany]   = useState(false);
  const [expandSolution, setExpandSolution] = useState(false);
  const [activeProduct, setActiveProduct]   = useState("meraki");
  const [expandedInit, setExpandedInit]     = useState({});
  const product = fw.products.find(p => p.id === activeProduct);
  const toggleInit = (id) => setExpandedInit(prev => ({ ...prev, [id]: !prev[id] }));
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#F0F4F8", minHeight: "100vh", color: CISCO_DARK }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        .hov { transition: box-shadow 0.18s, border-color 0.18s; cursor: pointer; }
        .hov:hover { box-shadow: 0 6px 28px rgba(0,0,0,0.11) !important; }
        .prod-btn { transition: all 0.18s; cursor: pointer; border: none; outline: none; }
        .prod-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.12); }
      `}</style>
      {/* ── HEADER ── */}
      <div style={{
        background: `linear-gradient(135deg, ${CISCO_DARK} 0%, ${CISCO_MID} 60%, ${CISCO_BLUE} 100%)`,
        padding: "36px 48px 32px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${CISCO_BLUE}18 0%, transparent 70%)` }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          {/* Cisco logo wordmark approximation */}
          <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
            {[1,2,3,4,5,6].map(i => (
              <div key={i} style={{
                width: i === 1 || i === 6 ? 6 : 7,
                height: i === 1 || i === 6 ? 14 : i === 2 || i === 5 ? 18 : 20,
                borderRadius: 3,
                background: CISCO_BLUE,
                opacity: i === 1 || i === 6 ? 0.6 : i === 2 || i === 5 ? 0.8 : 1,
              }} />
            ))}
          </div>
          <span style={{ fontFamily: "'Inter'", fontSize: 10, letterSpacing: 4, fontWeight: 800, color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>
            Corporate Messaging Framework
          </span>
        </div>
        <h1 style={{ fontFamily: "'Inter'", fontSize: "clamp(26px,4vw,44px)", fontWeight: 900, color: "#fff", margin: "0 0 4px", letterSpacing: "-1px" }}>
          Futureproof Workplace
        </h1>
        <p style={{ fontFamily: "'Inter'", fontSize: 13, color: "rgba(255,255,255,0.45)", margin: 0, fontWeight: 300, letterSpacing: 0.3 }}>
          Campus &amp; Branch Networking · Collaboration · One Cisco Platform
        </p>
      </div>
      <div style={{ padding: "36px 48px 64px", maxWidth: 1120, margin: "0 auto" }}>
        {/* ── TIER 1: ONE CISCO ── */}
        <TierRow tier="Company Level" color={CISCO_DARK} purpose={fw.company.purpose} />
        <div className="hov" onClick={() => setExpandCompany(!expandCompany)} style={{
          background: CISCO_DARK,
          borderRadius: 12,
          padding: "22px 28px",
          boxShadow: "0 4px 24px rgba(0,38,43,0.2)",
          border: `2px solid ${expandCompany ? CISCO_BLUE : "#0D3A42"}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "'Inter'", fontSize: 9, letterSpacing: 3, fontWeight: 800, color: CISCO_BLUE, margin: "0 0 6px", textTransform: "uppercase" }}>Company Messaging</p>
              <h2 style={{ fontFamily: "'Inter'", fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, color: "#fff", margin: "0 0 6px", letterSpacing: "-0.5px" }}>
                {fw.company.headline}
              </h2>
              <p style={{ fontFamily: "'Inter'", fontSize: 13, color: CISCO_BLUE, margin: 0, fontStyle: "italic", fontWeight: 400 }}>
                &ldquo;{fw.company.tagline}&rdquo;
              </p>
            </div>
            <span style={{ color: CISCO_BLUE, fontSize: 18, marginLeft: 20, display: "inline-block", transform: expandCompany ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>▾</span>
          </div>
          {expandCompany && (
            <p style={{ fontFamily: "'Inter'", fontSize: 13, color: "#94A3B8", lineHeight: 1.8, margin: "18px 0 0", paddingTop: 18, borderTop: "1px solid #0D3A42" }}>
              {fw.company.description}
            </p>
          )}
        </div>
        <DownArrow color="#93C5D5" />
        {/* ── TIER 2: FUTUREPROOF WORKPLACE ── */}
        <TierRow tier="Solution Category" color={CISCO_MID} purpose={fw.solutionCategory.purpose} />
        <div className="hov" onClick={() => setExpandSolution(!expandSolution)} style={{
          background: "#fff",
          borderRadius: 12,
          padding: "22px 28px",
          boxShadow: "0 3px 16px rgba(0,80,115,0.08)",
          border: `2px solid ${expandSolution ? CISCO_MID : "#C0DDE8"}`,
          borderLeft: `5px solid ${CISCO_MID}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: "'Inter'", fontSize: 9, letterSpacing: 3, fontWeight: 800, color: CISCO_MID, margin: "0 0 4px", textTransform: "uppercase" }}>Solution Category</p>
              <h2 style={{ fontFamily: "'Inter'", fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 800, color: CISCO_DARK, margin: "0 0 4px", letterSpacing: "-0.3px" }}>
                {fw.solutionCategory.headline}
              </h2>
              <p style={{ fontFamily: "'Inter'", fontSize: 13, color: CISCO_BLUE, margin: "0 0 14px", fontStyle: "italic" }}>
                &ldquo;{fw.solutionCategory.tagline}&rdquo;
              </p>
              {/* Solution pillars */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {fw.solutionCategory.pillars.map((p, i) => (
                  <div key={i} style={{
                    background: "#EBF6FA", border: `1px solid #C0DDE8`,
                    borderRadius: 20, padding: "4px 12px",
                    fontFamily: "'Inter'", fontSize: 11, fontWeight: 600, color: CISCO_MID,
                  }}>
                    {p.label}
                  </div>
                ))}
              </div>
            </div>
            <span style={{ color: CISCO_MID, fontSize: 18, marginLeft: 20, display: "inline-block", transform: expandSolution ? "rotate(180deg)" : "none", transition: "transform 0.3s", flexShrink: 0 }}>▾</span>
          </div>
          {expandSolution && (
            <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid #EBF6FA" }}>
              <p style={{ fontFamily: "'Inter'", fontSize: 9, fontWeight: 700, color: CISCO_MID, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 1.5 }}>Vision</p>
              <p style={{ fontFamily: "'Inter'", fontSize: 13, color: "#334155", lineHeight: 1.8, margin: "0 0 16px" }}>{fw.solutionCategory.vision}</p>
              <p style={{ fontFamily: "'Inter'", fontSize: 9, fontWeight: 700, color: CISCO_MID, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 1.5 }}>Solution Narrative</p>
              <p style={{ fontFamily: "'Inter'", fontSize: 13, color: "#334155", lineHeight: 1.8, margin: 0 }}>{fw.solutionCategory.solution}</p>
            </div>
          )}
        </div>
        <SplitArrow color="#93C5D5" />
        {/* ── TIER 3: PRODUCT SELECTOR ── */}
        <TierRow tier="Product Level" color="#374151" purpose={fw.purposeLabels.product} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {fw.products.map(p => {
            const isActive = activeProduct === p.id;
            return (
              <button key={p.id} className="prod-btn" onClick={() => setActiveProduct(p.id)} style={{
                background: isActive ? p.color : "#fff",
                border: `2px solid ${isActive ? p.color : "#D1D5DB"}`,
                borderBottom: isActive ? `2px solid ${p.color}` : `2px solid #D1D5DB`,
                borderRadius: isActive ? "10px 10px 0 0" : 10,
                padding: "16px 20px",
                textAlign: "left",
                boxShadow: isActive ? `0 4px 20px ${p.color}35` : "0 2px 8px rgba(0,0,0,0.05)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: isActive ? "rgba(255,255,255,0.2)" : `${p.color}15`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, color: isActive ? "#fff" : p.color, fontWeight: 900,
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Inter'", fontSize: 14, fontWeight: 800, color: isActive ? "#fff" : CISCO_DARK, margin: 0, letterSpacing: "-0.2px" }}>{p.name}</p>
                    <p style={{ fontFamily: "'Inter'", fontSize: 10, color: isActive ? "rgba(255,255,255,0.65)" : p.color, margin: "2px 0 0", fontWeight: 600, letterSpacing: 0.3 }}>{p.subtitle}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        {/* ── ACTIVE PRODUCT PANEL ── */}
        {product && (
          <div style={{
            border: `2px solid ${product.color}`,
            borderTop: "none",
            borderRadius: "0 0 12px 12px",
            background: "#fff",
            boxShadow: `0 8px 32px ${product.color}20`,
          }}>
            {/* Product description */}
            <div style={{ padding: "20px 26px 18px", borderBottom: `1px solid ${product.color}20`, background: product.bg }}>
              <p style={{ fontFamily: "'Inter'", fontSize: 12, fontStyle: "italic", color: product.color, fontWeight: 600, margin: "0 0 6px" }}>
                &ldquo;{product.tagline}&rdquo;
              </p>
              <p style={{ fontFamily: "'Inter'", fontSize: 13, color: "#475569", margin: 0, lineHeight: 1.75 }}>
                {product.description}
              </p>
            </div>
            {/* Initiatives + Projects */}
            <div style={{ padding: "20px 26px 26px" }}>
              <div style={{ display: "flex", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
                <TierRow tier="Initiative Level" color="#6B7280" purpose={fw.purposeLabels.initiative} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {product.initiatives.map(init => {
                  const isOpen = !!expandedInit[init.id];
                  return (
                    <div key={init.id} style={{ display: "flex", flexDirection: "column" }}>
                      {/* Initiative */}
                      <div className="hov" onClick={() => toggleInit(init.id)} style={{
                        background: product.color,
                        borderRadius: "8px 8px 0 0",
                        padding: "14px 16px",
                        boxShadow: `0 3px 12px ${product.color}30`,
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <div style={{ flex: 1 }}>
                            <p style={{ fontFamily: "'Inter'", fontSize: 8, letterSpacing: 2, fontWeight: 800, color: "rgba(255,255,255,0.5)", margin: "0 0 5px", textTransform: "uppercase" }}>Initiative</p>
                            <p style={{ fontFamily: "'Inter'", fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 3px", lineHeight: 1.3 }}>{init.name}</p>
                            <p style={{ fontFamily: "'Inter'", fontSize: 11, color: "rgba(255,255,255,0.68)", margin: 0, fontStyle: "italic" }}>{init.tagline}</p>
                          </div>
                          <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, marginLeft: 6, display: "inline-block", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s", flexShrink: 0 }}>▾</span>
                        </div>
                        {isOpen && (
                          <p style={{ fontFamily: "'Inter'", fontSize: 11, color: "rgba(255,255,255,0.82)", lineHeight: 1.7, margin: "12px 0 0", paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
                            {init.description}
                          </p>
                        )}
                      </div>
                      {/* Projects */}
                      <div style={{
                        border: `1.5px solid ${product.color}30`, borderTop: "none",
                        borderRadius: "0 0 8px 8px", overflow: "hidden",
                        background: product.bg, flex: 1,
                      }}>
                        <div style={{ padding: "5px 12px 4px", borderBottom: `1px solid ${product.color}18` }}>
                          <span style={{ fontFamily: "'Inter'", fontSize: 8, letterSpacing: 2, fontWeight: 800, color: product.darkColor, textTransform: "uppercase", opacity: 0.7 }}>
                            Use Cases
                          </span>
                        </div>
                        {init.projects.map((proj, i) => (
                          <div key={i} style={{ padding: "9px 12px", borderBottom: i < init.projects.length - 1 ? `1px solid ${product.color}18` : "none" }}>
                            <p style={{ fontFamily: "'Inter'", fontSize: 12, fontWeight: 700, color: "#1E293B", margin: "0 0 2px" }}>{proj.name}</p>
                            <p style={{ fontFamily: "'Inter'", fontSize: 11, color: "#64748B", margin: 0, lineHeight: 1.5 }}>{proj.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/* ── FOOTER ── */}
        <div style={{ marginTop: 40, padding: "14px 20px", background: "#E8F4F8", borderRadius: 8, borderLeft: `4px solid ${CISCO_BLUE}` }}>
          <p style={{ fontFamily: "'Inter'", fontSize: 11, color: "#5B8A96", margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: CISCO_MID }}>Architecture:</strong> Company (One Cisco) → Solution Category (Futureproof Workplace) → Product ×3 (Meraki, Catalyst SD-WAN, Webex) → Initiative ×3 → Use Case ×3. Select a product to explore its initiatives. Click any initiative to expand its messaging detail.
          </p>
        </div>
      </div>
    </div>
  );
}
