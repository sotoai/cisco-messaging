import { useState } from "react";
import { C } from "../theme";
import { verticals } from "../data/verticals";
import { allSlides } from "../data/slides";
import { NavIconCoAuthor, NavIconDeck } from "../components/icons/NavIcons";
import { TierLabel } from "../components/shared/TierLabel";
import { SlidePreview } from "../components/slides/SlidePreview";
import { SlideLightbox } from "../components/slides/SlideLightbox";

// ─── CO-AUTHOR RESPONSE DATA ──────────────────────────────────────────────────
const coAuthorSourceChips = [
  { id: "transcript", label: "Meeting Transcript" },
  { id: "competitive", label: "Competitive Intel" },
  { id: "trend", label: "Industry Trend" },
  { id: "keynote", label: "Keynote Prep" },
  { id: "blog", label: "Blog Post" },
  { id: "memo", label: "Internal Memo" },
];

const coAuthorPlaceholders = {
  transcript: "Paste your meeting transcript here. Co-Author will identify relevant slides, messaging gaps, and thought leadership angles based on what was discussed...",
  competitive: "Paste competitive intelligence notes or battlecard content. Co-Author will surface relevant Cisco positioning slides and identify messaging gaps...",
  trend: "Paste an industry trend article or analyst brief. Co-Author will map it to Cisco messaging and find slides that address the trend...",
  keynote: "Paste your keynote outline or speaker notes. Co-Author will find slides that support your narrative and identify gaps in your storyline...",
  blog: "Paste your blog draft or outline. Co-Author will find supporting slides and suggest thought leadership angles to strengthen your narrative...",
  memo: "Paste an internal memo or briefing document. Co-Author will identify slides and messaging relevant to the topics covered...",
};

const coAuthorResponses = {
  healthcare: {
    transcript: {
      slides: (slides) => slides.filter(s => (s.verticals.includes("healthcare") || s.productId === "networking") && (s.type === "initiative" || s.type === "useCase")).slice(0, 4),
      gaps: [
        { title: "No customer proof point for AI-powered clinical operations in community hospitals", description: "Current case studies focus on large health systems (200+ beds). Community hospitals under 200 beds have different budget constraints and IT staffing models that need a tailored proof point.", level: "Initiative" },
        { title: "Missing competitive positioning against Aruba in healthcare wireless", description: "HPE Aruba is aggressively positioning their Wi-Fi 7 APs for clinical environments with dedicated IoMT SSIDs. Need a direct comparison slide showing Cisco's clinical-grade Wi-Fi advantages.", level: "Use Case" },
        { title: "No ROI calculator for clinical network modernization", description: "Health system CFOs need quantifiable cost-per-bed and MTTR improvement projections. A financial model slide would accelerate deal progression with procurement.", level: "Solution" },
      ],
      angles: [
        { title: "Clinical network as patient safety infrastructure", description: "Position network uptime as a patient outcome metric, not just an IT KPI. When the network goes down in a hospital, medication administration stops, alarms fail to route, and care coordination breaks. Frame the network refresh as a patient safety investment.", tags: ["Patient Safety", "Network Uptime", "Clinical Operations"] },
        { title: "From alarm fatigue to autonomous triage", description: "AgenticOps story for CNIOs: 85% of clinical alarms are false positives. AI-powered network operations can correlate device telemetry with clinical context to filter noise and surface actionable events, reducing clinician burnout.", tags: ["AgenticOps", "CNIO", "Alarm Fatigue"] },
      ],
    },
    keynote: {
      slides: (slides) => slides.filter(s => (s.verticals.includes("healthcare") || s.type === "company" || s.type === "solution") && s.type !== "useCase").slice(0, 4),
      gaps: [
        { title: "Missing bridge from One Cisco platform story to healthcare-specific outcomes", description: "The company-level messaging about platform consolidation needs a healthcare translation — show how combining networking + collaboration + security reduces total cost of care delivery.", level: "Company" },
        { title: "No ready-made slide for telehealth growth trajectory", description: "Post-pandemic telehealth adoption has plateaued at 20-25% of visits. Need a slide showing the next wave of virtual care and how Cisco infrastructure enables it.", level: "Solution" },
      ],
      angles: [
        { title: "The hospital that never sleeps — and the network that keeps it alive", description: "Open with a 3am scenario: a nurse on night shift relies on 47 connected devices to care for her patients. Every one of those devices depends on the network. This is not an IT story — it is a care delivery story.", tags: ["Keynote Opening", "Healthcare", "Network as Care Infrastructure"] },
        { title: "AI in healthcare starts with infrastructure, not algorithms", description: "Every health system is chasing AI for clinical decision support, but 80% of AI projects fail due to data pipeline and infrastructure gaps. Position Cisco as the foundation that makes clinical AI possible.", tags: ["AI Strategy", "Healthcare CIO", "Infrastructure"] },
      ],
    },
  },
  government: {
    transcript: {
      slides: (slides) => slides.filter(s => (s.verticals.includes("government") || s.productId === "networking") && (s.type === "initiative" || s.type === "useCase")).slice(0, 4),
      gaps: [
        { title: "No slide addressing CMMC 2.0 compliance for defense contractors", description: "Many government networking conversations involve defense industrial base companies that need CMMC Level 2 certification. Cisco's role in enabling CMMC compliance is undocumented in current slides.", level: "Use Case" },
        { title: "Missing state and local government modernization proof point", description: "Current government stories focus on federal agencies and large cities. State agencies and mid-size municipalities need relatable case studies with smaller-scale deployments.", level: "Initiative" },
      ],
      angles: [
        { title: "Zero trust is a mandate, not a choice — make compliance the easy path", description: "Federal agencies face hard deadlines for CISA Zero Trust Maturity Model compliance. Position Cisco as the vendor that makes compliance the path of least resistance, not a parallel workstream that competes with mission priorities.", tags: ["Zero Trust", "CISA", "Federal Mandates"] },
        { title: "Smart cities start with smart networks — the infrastructure-first approach", description: "Mayors want visible smart city outcomes — traffic optimization, public safety, digital equity. Show how Cisco's existing network infrastructure is already the sensor platform for smart city use cases, requiring deployment not procurement.", tags: ["Smart Cities", "IoT", "Public Safety"] },
        { title: "Post-quantum readiness as a competitive differentiator for government", description: "CNSA 2.0 timelines are accelerating. Agencies that adopt post-quantum cryptography now avoid costly retrofit later. Position Cisco 8000 Secure Routers as future-proofing that pays for itself.", tags: ["Post-Quantum", "CNSA 2.0", "Cybersecurity"] },
      ],
    },
    keynote: {
      slides: (slides) => slides.filter(s => (s.verticals.includes("government") || s.type === "company" || s.type === "solution")).slice(0, 4),
      gaps: [
        { title: "No FedRAMP journey slide showing progressive authorization levels", description: "Government buyers need to see the full compliance landscape — from StateRAMP to FedRAMP Moderate to FedRAMP High to IL5. A maturity model slide would help position Cisco's breadth of authorizations.", level: "Solution" },
        { title: "Missing citizen experience transformation narrative", description: "Government contact center modernization is a top priority but current slides focus on technology capabilities rather than citizen outcome improvements.", level: "Initiative" },
      ],
      angles: [
        { title: "Government IT modernization is a national security imperative", description: "Open with the reality that adversaries are not waiting for budget cycles. Every legacy system is an attack surface. Frame network modernization as mission defense, not IT infrastructure — speak the language of mission owners, not IT managers.", tags: ["National Security", "Modernization", "Government CIO"] },
        { title: "The 311 call that changes everything — AI-powered citizen services", description: "Tell the story of a single citizen interaction — a 311 call about a broken streetlight that triggers automated dispatch, predictive maintenance, and proactive community notification. This is what connected government looks like.", tags: ["Citizen Services", "AI Agent", "Smart Cities"] },
      ],
    },
  },
  general: {
    keynote: {
      slides: (slides) => slides.filter(s => (s.type === "company" || s.type === "solution" || s.type === "product") && s.verticals.includes("general")).slice(0, 4),
      gaps: [
        { title: "One Cisco compounding value message needs a concrete customer example", description: "The platform consolidation narrative is compelling but abstract. Need a named customer example showing measurable cross-product adoption — e.g., a customer that bought networking and then added collaboration, with quantified incremental value.", level: "Company" },
        { title: "No ready-made slide bridging from Futureproof Workplace into specific vertical stories", description: "The solution category messaging ends at pillars. There is no transition slide that says 'here is what this looks like in your industry' — forcing presenters to improvise the vertical pivot.", level: "Solution" },
      ],
      angles: [
        { title: "The last satisfying PowerPoint was made in 2019", description: "Open with the shared frustration of narrative fragmentation — every seller builds decks from scratch, every customer gets a slightly different story, every quarterly review reinvents the messaging wheel. Position the platform as the antidote to presentation entropy.", tags: ["Narrative", "Sales Enablement", "Platform Story"] },
        { title: "Platform thinking as competitive moat", description: "Why point solutions cannot replicate integrated value — use the analogy of a smartphone vs. carrying a phone, camera, GPS, and calculator separately. Cisco's platform compounding effect means each new capability multiplies the value of everything already deployed.", tags: ["Platform Strategy", "Competitive", "One Cisco"] },
      ],
    },
    transcript: {
      slides: (slides) => slides.filter(s => s.verticals.includes("general") && (s.type === "initiative" || s.type === "product")).slice(0, 4),
      gaps: [
        { title: "No slide quantifying TCO advantage of platform consolidation", description: "Customers considering multi-vendor approaches need a clear financial comparison showing the hidden costs of integration, management complexity, and vendor coordination across networking and collaboration.", level: "Company" },
        { title: "Missing competitive positioning for Meraki vs. cloud-managed alternatives", description: "Juniper Mist AI and Aruba Central are gaining traction in cloud-managed networking evaluations. Need a direct comparison slide highlighting Cisco's management flexibility advantage.", level: "Product" },
      ],
      angles: [
        { title: "The integration tax nobody talks about", description: "Every point solution a customer adds creates hidden costs — API maintenance, credential management, troubleshooting across vendor boundaries, training on multiple consoles. Quantify the integration tax and position Cisco's unified platform as the way to eliminate it.", tags: ["TCO", "Platform", "Integration"] },
        { title: "AI-ready infrastructure is the new table stakes", description: "Just as cloud-readiness defined the last decade of infrastructure investment, AI-readiness will define the next. Position every Cisco infrastructure conversation as an AI readiness conversation — because the customers who prepare now will lead.", tags: ["AI Strategy", "Infrastructure", "Digital Transformation"] },
      ],
    },
    competitive: {
      slides: (slides) => slides.filter(s => s.verticals.includes("general") && (s.type === "product" || s.type === "initiative")).slice(0, 3),
      gaps: [
        { title: "No updated battlecard for Juniper post-HPE acquisition", description: "The Juniper/HPE merger changes the competitive landscape significantly. Existing competitive slides do not address the combined entity's expanded portfolio and potential integration challenges.", level: "Product" },
      ],
      angles: [
        { title: "Acquisitions create uncertainty — platforms create confidence", description: "While competitors are integrating acquisitions and rationalizing overlapping product lines, Cisco has already unified its portfolio. Position stability and execution certainty as competitive advantages during market consolidation.", tags: ["Competitive", "M&A", "Platform Stability"] },
      ],
    },
    trend: {
      slides: (slides) => slides.filter(s => s.verticals.includes("general") && (s.type === "solution" || s.type === "initiative")).slice(0, 4),
      gaps: [
        { title: "No slide connecting Gartner's Agent-Native I&O trend to Cisco roadmap", description: "Gartner's 2025 Hype Cycle identifies Agent-Native I&O as the biggest disruption since cloud. Need a slide explicitly mapping Cisco's AgenticOps capabilities to this analyst framework.", level: "Initiative" },
      ],
      angles: [
        { title: "The network is the last un-automated domain in IT", description: "Compute is automated (IaC), security is automated (SOAR), but network operations remain stubbornly manual. Cisco's AgenticOps vision is to close this gap — position it as the final frontier of IT automation.", tags: ["AgenticOps", "Automation", "Network Operations"] },
      ],
    },
    blog: {
      slides: (slides) => slides.filter(s => s.verticals.includes("general") && s.type === "initiative").slice(0, 3),
      gaps: [
        { title: "No thought leadership content on Wi-Fi 7 adoption timeline", description: "Blog audiences need practical guidance on when to start their Wi-Fi 7 migration. A readiness assessment framework would generate leads and position Cisco as the advisor, not just the vendor.", level: "Use Case" },
      ],
      angles: [
        { title: "Wi-Fi 7 is not about speed — it is about reliability", description: "Most Wi-Fi 7 coverage focuses on raw throughput numbers. The real enterprise value is deterministic low-latency performance for AI workloads, IoT density, and real-time collaboration. Reframe the narrative from faster to more reliable.", tags: ["Wi-Fi 7", "Reliability", "Enterprise Wireless"] },
      ],
    },
    memo: {
      slides: (slides) => slides.filter(s => s.verticals.includes("general") && (s.type === "company" || s.type === "product")).slice(0, 3),
      gaps: [
        { title: "No internal enablement slide for cross-selling motion", description: "Field teams need a simple visual showing which networking customers are best candidates for collaboration attach and vice versa. The cross-sell opportunity is clear in strategy docs but not translated to field-ready content.", level: "Company" },
      ],
      angles: [
        { title: "Every networking renewal is a collaboration conversation", description: "When a customer renews their Cisco Networking Subscription, it is the natural moment to introduce Webex Calling and collaboration devices. Map the renewal trigger to the cross-sell motion with talk tracks for account managers.", tags: ["Cross-Sell", "Renewals", "Field Enablement"] },
      ],
    },
  },
};

// Helper: get co-author response for a vertical + source combo
function getCoAuthorResponse(vertical, sourceChip) {
  const vKey = coAuthorResponses[vertical] ? vertical : "general";
  const vData = coAuthorResponses[vKey];
  const sKey = vData[sourceChip] ? sourceChip : Object.keys(vData)[0];
  return vData[sKey];
}

export function CoAuthorPage({ setActivePage }) {
  const [vertical, setVertical] = useState("general");
  const [sourceChip, setSourceChip] = useState("transcript");
  const [inputText, setInputText] = useState("");
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [lightboxSlide, setLightboxSlide] = useState(null);

  const selectStyle = {
    appearance: "none", WebkitAppearance: "none",
    background: C.surface, border: `1px solid ${C.border}`, borderRadius: 2,
    padding: "6px 28px 6px 10px", fontSize: 12, fontWeight: 400, fontFamily: "inherit", color: C.text, cursor: "pointer",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23999' fill='none' stroke-width='1.2'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center",
  };

  const response = hasAnalyzed ? getCoAuthorResponse(vertical, sourceChip) : null;
  const relevantSlides = response ? response.slides(allSlides) : [];
  const gaps = response ? response.gaps : [];
  const angles = response ? response.angles : [];

  const handleAnalyze = () => {
    setHasAnalyzed(true);
  };

  return (
    <div style={{ display: "flex", flex: 1, height: "100vh", overflow: "hidden" }}>
      {/* ── LEFT PANEL ── */}
      <div style={{ width: 400, borderRight: `1px solid ${C.border}`, background: C.surface, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        {/* Header */}
        <div style={{ padding: "20px 20px 16px", borderBottom: `1px solid ${C.border}` }}>
          <h2 style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.3px", color: C.text, marginBottom: 4 }}>Co-Author</h2>
          <p style={{ fontSize: 11, color: C.textTertiary, fontWeight: 300 }}>Analyze content to find slides, gaps, and angles.</p>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
          {/* Textarea */}
          <textarea
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder={coAuthorPlaceholders[sourceChip] || coAuthorPlaceholders.transcript}
            style={{
              width: "100%", minHeight: 200, padding: 12, fontSize: 13, fontFamily: "inherit",
              border: `1px solid ${C.border}`, borderRadius: 2, background: C.bg, color: C.text,
              resize: "vertical", lineHeight: 1.6, fontWeight: 300,
              outline: "none",
            }}
            onFocus={e => e.currentTarget.style.borderColor = C.textTertiary}
            onBlur={e => e.currentTarget.style.borderColor = C.border}
          />

          {/* Source chips */}
          <div style={{ marginTop: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 9, letterSpacing: 1.5, fontWeight: 500, color: C.textTertiary, textTransform: "uppercase", marginBottom: 8 }}>Source Type</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {coAuthorSourceChips.map(chip => {
                const isActive = sourceChip === chip.id;
                return (
                  <span
                    key={chip.id}
                    onClick={() => { setSourceChip(chip.id); setHasAnalyzed(false); }}
                    style={{
                      display: "inline-block", fontSize: 11, padding: "4px 12px",
                      border: `1px solid ${isActive ? C.text : C.border}`, borderRadius: 100,
                      background: isActive ? C.text : "transparent", color: isActive ? C.bg : C.textSecondary,
                      cursor: "pointer", transition: "all 0.15s ease", whiteSpace: "nowrap", fontWeight: 400,
                    }}
                  >
                    {chip.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Vertical selector */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 9, letterSpacing: 1.5, fontWeight: 500, color: C.textTertiary, textTransform: "uppercase", marginBottom: 6 }}>Vertical</div>
            <select
              value={vertical}
              onChange={e => { setVertical(e.target.value); setHasAnalyzed(false); }}
              style={{ ...selectStyle, width: "100%" }}
            >
              {Object.entries(verticals).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </div>

          {/* Analyze button */}
          <button
            onClick={handleAnalyze}
            style={{
              width: "100%", padding: "10px 0", fontSize: 13, fontWeight: 500,
              background: C.text, color: C.bg, border: "none", borderRadius: 2,
              cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            Analyze
          </button>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {!hasAnalyzed ? (
          /* Empty state */
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: "80vh", flexDirection: "column", gap: 16,
          }}>
            <NavIconCoAuthor size={48} color={C.borderLight} />
            <p style={{ fontSize: 18, fontWeight: 300, color: C.textTertiary }}>Paste content and click Analyze</p>
            <p style={{ fontSize: 13, fontWeight: 300, color: C.textTertiary, maxWidth: 400, textAlign: "center", lineHeight: 1.6 }}>
              Co-Author will scan the slide library for relevant content, identify messaging gaps, and suggest thought leadership angles based on your input.
            </p>
          </div>
        ) : (
          <div style={{ padding: "24px 32px 96px" }}>
            {/* ── Section A: Slides in the Library ── */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <TierLabel icon={<NavIconDeck size={14} color={C.textTertiary} />}>Slides in the Library</TierLabel>
                <span style={{
                  fontSize: 10, fontWeight: 500, background: C.accentSoft,
                  color: C.textSecondary, padding: "2px 8px", borderRadius: 100,
                }}>{relevantSlides.length}</span>
              </div>
              {relevantSlides.length > 0 ? (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
                    {relevantSlides.map(slide => (
                      <div
                        key={slide.id}
                        onClick={() => setLightboxSlide(slide)}
                        style={{
                          border: `1px solid ${C.border}`, borderRadius: 2, background: C.bg,
                          cursor: "pointer", overflow: "hidden", transition: "all 0.2s ease",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = C.textTertiary; e.currentTarget.style.background = C.accentSoft; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.bg; }}
                      >
                        <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                          <SlidePreview slide={slide} width={320} height={180} responsive />
                        </div>
                        <div style={{ padding: "10px 12px" }}>
                          <p style={{ fontSize: 12, fontWeight: 500, color: C.text, marginBottom: 2 }}>{slide.title}</p>
                          <span style={{
                            fontSize: 9, fontWeight: 500, letterSpacing: 0.5, textTransform: "uppercase",
                            color: C.textTertiary, padding: "1px 6px", border: `1px solid ${C.border}`, borderRadius: 2,
                          }}>{slide.type}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    onClick={() => setActivePage("deck")}
                    style={{
                      marginTop: 12, fontSize: 12, fontWeight: 400, color: C.textSecondary,
                      cursor: "pointer", display: "inline-block",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = C.text}
                    onMouseLeave={e => e.currentTarget.style.color = C.textSecondary}
                  >
                    Open in Deck Builder &rarr;
                  </div>
                </>
              ) : (
                <p style={{ fontSize: 13, color: C.textTertiary, fontWeight: 300 }}>No matching slides found for this combination.</p>
              )}
            </div>

            {/* ── Section B: Gaps Identified ── */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <TierLabel icon={
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke={C.textTertiary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                }>Gaps Identified</TierLabel>
                <span style={{
                  fontSize: 10, fontWeight: 500, background: C.accentSoft,
                  color: C.textSecondary, padding: "2px 8px", borderRadius: 100,
                }}>{gaps.length}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {gaps.map((gap, i) => (
                  <div key={i} style={{
                    padding: "16px 20px", borderRadius: 2, background: C.accentSoft,
                    borderLeft: "3px solid #049fd9",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <p style={{ fontSize: 13, fontWeight: 500, color: C.text, lineHeight: 1.4, flex: 1 }}>{gap.title}</p>
                      <span style={{
                        fontSize: 9, fontWeight: 500, letterSpacing: 0.5, textTransform: "uppercase",
                        color: C.textTertiary, padding: "2px 8px", border: `1px solid ${C.border}`, borderRadius: 2,
                        whiteSpace: "nowrap", marginLeft: 12,
                      }}>{gap.level}</span>
                    </div>
                    <p style={{ fontSize: 12, color: C.textSecondary, lineHeight: 1.6, fontWeight: 300 }}>{gap.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Section C: Thought Leadership Angles ── */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <TierLabel icon={
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke={C.textTertiary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                }>Thought Leadership Angles</TierLabel>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {angles.map((angle, i) => (
                  <div key={i} style={{
                    padding: "16px 20px", borderRadius: 2, background: C.bg,
                    border: `1px solid ${C.border}`,
                  }}>
                    <p style={{ fontSize: 13, fontWeight: 500, color: C.text, marginBottom: 6, lineHeight: 1.4 }}>{angle.title}</p>
                    <p style={{ fontSize: 12, color: C.textSecondary, lineHeight: 1.6, fontWeight: 300, marginBottom: 10 }}>{angle.description}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {angle.tags.map((tag, ti) => (
                        <span key={ti} style={{
                          fontSize: 10, padding: "2px 8px", border: `1px solid ${C.border}`,
                          borderRadius: 100, color: C.textTertiary, fontWeight: 400,
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxSlide && (
        <SlideLightbox
          slide={lightboxSlide}
          allFilteredSlides={relevantSlides}
          onClose={() => setLightboxSlide(null)}
          isSelected={() => false}
          onToggle={() => {}}
        />
      )}
    </div>
  );
}

