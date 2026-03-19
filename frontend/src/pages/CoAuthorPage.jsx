import { useState } from "react";
import { C } from "../theme";
import { fw } from "../data/framework";
import { verticals } from "../data/verticals";
import { tagsDef } from "../data/tags";
import { allSlides } from "../data/slides";
import { coAuthorDrafts, coAuthorQueue, coAuthorGaps, coAuthorAngles } from "../data/coauthor";
import { NavIconCoAuthor, NavIconDeck } from "../components/icons/NavIcons";
import { TierLabel } from "../components/shared/TierLabel";
import { SlidePreview } from "../components/slides/SlidePreview";
import { SlideLightbox } from "../components/slides/SlideLightbox";

const contentTypes = ["Blog Post", "Slide Narrative", "Demo Script", "Customer Brief", "Internal Memo", "Social Post", "Email Sequence"];
const tones = ["Executive Summary", "Formal / Technical", "Conversational / Blog", "Social-Optimized"];
const urgencies = ["Standard", "Fast Track", "Critical"];

export function CoAuthorPage({ setActivePage }) {
  // Form state
  const [contentType, setContentType] = useState("");
  const [objective, setObjective] = useState("");
  const [audience, setAudience] = useState([]);
  const [vertical, setVertical] = useState("general");
  const [productScope, setProductScope] = useState([]);
  const [initiativeScope, setInitiativeScope] = useState([]);
  const [newInfo, setNewInfo] = useState("");
  const [refMaterials, setRefMaterials] = useState("");
  const [tone, setTone] = useState("Executive Summary");
  const [urgency, setUrgency] = useState("Standard");

  // Results state
  const [hasGenerated, setHasGenerated] = useState(false);
  const [activeTab, setActiveTab] = useState("analysis");
  const [lightboxSlide, setLightboxSlide] = useState(null);

  const selectStyle = {
    appearance: "none", WebkitAppearance: "none",
    background: C.surface, border: `1px solid ${C.border}`, borderRadius: 2,
    padding: "8px 28px 8px 10px", fontSize: 12, fontWeight: 400, fontFamily: "inherit", color: C.text, cursor: "pointer", width: "100%",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23999' fill='none' stroke-width='1.2'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center",
  };
  const labelStyle = { fontSize: 9, letterSpacing: 1.5, fontWeight: 500, color: C.textTertiary, textTransform: "uppercase", marginBottom: 6 };
  const textareaBase = { width: "100%", padding: 10, fontSize: 13, fontFamily: "inherit", border: `1px solid ${C.border}`, borderRadius: 2, background: C.bg, color: C.text, resize: "vertical", lineHeight: 1.6, fontWeight: 300, outline: "none" };

  // Get available initiatives based on product scope
  const availableInits = fw.products
    .filter(p => productScope.length === 0 || productScope.includes(p.id))
    .flatMap(p => p.initiatives);

  const toggleChip = (arr, setArr, val) => setArr(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);

  // Filter slides based on scope
  const relevantSlides = allSlides.filter(s => {
    if (productScope.length > 0 && !productScope.includes(s.productId)) return false;
    if (initiativeScope.length > 0 && !initiativeScope.includes(s.initiativeId)) return false;
    if (s.type === "story") return false;
    return s.verticals.includes("general") || s.verticals.includes(vertical);
  }).slice(0, 4);

  const draft = coAuthorDrafts[contentType] || coAuthorDrafts["Blog Post"];

  const chipStyle = (isActive, variant) => ({
    display: "inline-block", fontSize: 11, padding: "4px 12px",
    border: `1px solid ${variant === "critical" && isActive ? "#c0392b" : isActive ? C.text : C.border}`, borderRadius: 100,
    background: variant === "critical" && isActive ? "transparent" : isActive ? C.text : "transparent",
    color: variant === "critical" && isActive ? "#c0392b" : isActive ? C.bg : C.textSecondary,
    cursor: "pointer", transition: "all 0.15s ease", whiteSpace: "nowrap", fontWeight: 400,
  });

  return (
    <div style={{ display: "flex", flex: 1, height: "100vh", overflow: "hidden" }}>
      {/* ── LEFT PANEL — INTAKE FORM ── */}
      <div style={{ width: 400, borderRight: `1px solid ${C.border}`, background: C.surface, display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 20px 16px", borderBottom: `1px solid ${C.border}` }}>
          <h2 style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.3px", color: C.text, marginBottom: 4 }}>Co-Author</h2>
          <p style={{ fontSize: 11, color: C.textTertiary, fontWeight: 300 }}>Structured content intake and AI-assisted drafting.</p>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px 24px" }}>
          {/* Content Type */}
          <div style={{ marginBottom: 14 }}>
            <div style={labelStyle}>Content Type</div>
            <select value={contentType} onChange={e => { setContentType(e.target.value); setHasGenerated(false); }} style={selectStyle}>
              <option value="">Select type...</option>
              {contentTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {/* Objective */}
          <div style={{ marginBottom: 14 }}>
            <div style={labelStyle}>Objective</div>
            <textarea value={objective} onChange={e => setObjective(e.target.value)} placeholder="What are we trying to accomplish with this content?" rows={2} style={textareaBase} />
          </div>

          {/* Audience */}
          <div style={{ marginBottom: 14 }}>
            <div style={labelStyle}>Audience</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {Object.entries(tagsDef.buyerRoles).map(([k, v]) => (
                <span key={k} onClick={() => toggleChip(audience, setAudience, k)} style={chipStyle(audience.includes(k))}>{v}</span>
              ))}
            </div>
          </div>

          {/* Vertical */}
          <div style={{ marginBottom: 14 }}>
            <div style={labelStyle}>Vertical</div>
            <select value={vertical} onChange={e => setVertical(e.target.value)} style={selectStyle}>
              {Object.entries(verticals).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>

          {/* Product Scope */}
          <div style={{ marginBottom: 14 }}>
            <div style={labelStyle}>Product Scope</div>
            <div style={{ display: "flex", gap: 6 }}>
              {Object.entries(tagsDef.products).map(([k, v]) => (
                <span key={k} onClick={() => { toggleChip(productScope, setProductScope, k); setInitiativeScope([]); }} style={chipStyle(productScope.includes(k))}>{v}</span>
              ))}
            </div>
          </div>

          {/* Initiative Scope */}
          <div style={{ marginBottom: 14 }}>
            <div style={labelStyle}>Initiative Scope</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {availableInits.map(init => (
                <span key={init.id} onClick={() => toggleChip(initiativeScope, setInitiativeScope, init.id)} style={chipStyle(initiativeScope.includes(init.id))}>{init.name}</span>
              ))}
            </div>
          </div>

          {/* New Information */}
          <div style={{ marginBottom: 14 }}>
            <div style={labelStyle}>New Information</div>
            <textarea value={newInfo} onChange={e => setNewInfo(e.target.value)} placeholder="What's new? Product update, market trend, competitive move, or customer insight that triggers this content." rows={3} style={textareaBase} />
          </div>

          {/* Reference Materials */}
          <div style={{ marginBottom: 14 }}>
            <div style={labelStyle}>Reference Materials</div>
            <textarea value={refMaterials} onChange={e => setRefMaterials(e.target.value)} placeholder="Paste transcripts, analyst quotes, competitive notes, or any source material here..." rows={4} style={textareaBase} />
          </div>

          {/* Tone */}
          <div style={{ marginBottom: 14 }}>
            <div style={labelStyle}>Tone</div>
            <select value={tone} onChange={e => setTone(e.target.value)} style={selectStyle}>
              {tones.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {/* Urgency */}
          <div style={{ marginBottom: 20 }}>
            <div style={labelStyle}>Urgency</div>
            <div style={{ display: "flex", gap: 6 }}>
              {urgencies.map(u => (
                <span key={u} onClick={() => setUrgency(u)} style={chipStyle(urgency === u, u === "Critical" ? "critical" : undefined)}>{u}</span>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={() => setHasGenerated(true)}
            disabled={!contentType}
            style={{
              width: "100%", padding: "10px 0", fontSize: 13, fontWeight: 500,
              background: contentType ? C.text : C.border, color: contentType ? C.bg : C.textTertiary,
              border: "none", borderRadius: 2, cursor: contentType ? "pointer" : "default",
              fontFamily: "inherit", transition: "opacity 0.15s",
            }}
            onMouseEnter={e => { if (contentType) e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            Generate Draft
          </button>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Tab bar */}
        {hasGenerated && (
          <div style={{ display: "flex", borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}>
            {["analysis", "queue"].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                flex: 1, padding: "12px 0", fontSize: 13, fontWeight: activeTab === tab ? 500 : 300,
                color: activeTab === tab ? C.text : C.textTertiary, background: "none", border: "none",
                borderBottom: activeTab === tab ? `2px solid ${C.text}` : "2px solid transparent",
                cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s",
              }}>
                {tab === "analysis" ? "Analysis" : "Queue"}
              </button>
            ))}
          </div>
        )}

        <div style={{ flex: 1, overflowY: "auto" }}>
          {!hasGenerated ? (
            /* Empty state */
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh", flexDirection: "column", gap: 16 }}>
              <NavIconCoAuthor size={48} color={C.borderLight} />
              <p style={{ fontSize: 18, fontWeight: 300, color: C.textTertiary }}>Configure your request and click Generate Draft</p>
              <p style={{ fontSize: 13, fontWeight: 300, color: C.textTertiary, maxWidth: 440, textAlign: "center", lineHeight: 1.6 }}>
                Co-Author will produce an aligned draft, find relevant slides, identify messaging gaps, and suggest thought leadership angles.
              </p>
            </div>
          ) : activeTab === "queue" ? (
            /* Queue View */
            <div style={{ padding: "24px 32px" }}>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: 2, overflow: "hidden" }}>
                {/* Header row */}
                <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 80px 90px 80px 80px 80px", gap: 0, padding: "10px 16px", background: C.surface, borderBottom: `1px solid ${C.border}`, fontSize: 9, letterSpacing: 1.5, fontWeight: 500, color: C.textTertiary, textTransform: "uppercase" }}>
                  <span>Type</span><span>Objective</span><span>Requester</span><span>Vertical</span><span>Urgency</span><span>Status</span><span>Date</span>
                </div>
                {coAuthorQueue.map(item => {
                  const urgCol = item.urgency === "Critical" ? "#c0392b" : item.urgency === "Fast Track" ? "#d4a017" : C.textTertiary;
                  const statusCol = item.status === "Published" ? "#27ae60" : item.status === "In Review" ? "#2980b9" : C.textTertiary;
                  return (
                    <div key={item.id} style={{
                      display: "grid", gridTemplateColumns: "100px 1fr 80px 90px 80px 80px 80px", gap: 0,
                      padding: "12px 16px", borderBottom: `1px solid ${C.borderLight}`, fontSize: 12, color: C.textSecondary,
                      cursor: "pointer", transition: "background 0.15s",
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = C.accentSoft}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                      <span style={{ fontSize: 10, padding: "2px 8px", border: `1px solid ${C.border}`, borderRadius: 100, alignSelf: "center", justifySelf: "start", whiteSpace: "nowrap", fontWeight: 400, color: C.textSecondary }}>{item.contentType}</span>
                      <span style={{ fontWeight: 300, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingRight: 12 }}>{item.objective}</span>
                      <span style={{ fontWeight: 400, fontSize: 11 }}>{item.requester}</span>
                      <span style={{ fontSize: 10, color: C.textTertiary }}>{item.vertical}</span>
                      <span style={{ fontSize: 10, color: urgCol, fontWeight: 500 }}>{item.urgency}</span>
                      <span style={{ fontSize: 10, color: statusCol, fontWeight: 500 }}>{item.status}</span>
                      <span style={{ fontSize: 10, color: C.textTertiary }}>{item.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Analysis View */
            <div style={{ padding: "24px 32px 96px" }}>
              {/* ── Section A: Draft Output ── */}
              <div style={{ marginBottom: 40 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <TierLabel icon={
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke={C.textTertiary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  }>Draft Output</TierLabel>
                </div>

                <div style={{ border: `1px solid ${C.border}`, borderRadius: 2, background: C.surface, padding: 24 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 500, color: C.text, marginBottom: 4 }}>{draft.title}</h3>
                  <p style={{ fontSize: 11, color: C.textTertiary, marginBottom: 20 }}>Reading time: {draft.readingTime}</p>
                  {draft.sections.map((s, i) => (
                    <div key={i} style={{ marginBottom: i < draft.sections.length - 1 ? 20 : 0 }}>
                      {s.heading && <h4 style={{ fontSize: 14, fontWeight: 500, color: C.text, marginBottom: 6 }}>{s.heading}</h4>}
                      <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.8, fontWeight: 300, whiteSpace: "pre-wrap" }}>{s.body}</p>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div style={{ display: "flex", gap: 8, marginTop: 12, alignItems: "center" }}>
                  <button style={{ padding: "6px 16px", fontSize: 11, fontWeight: 500, border: `1px solid ${C.border}`, borderRadius: 2, background: "none", color: C.text, cursor: "pointer", fontFamily: "inherit" }}>Copy to Clipboard</button>
                  <button style={{ padding: "6px 16px", fontSize: 11, fontWeight: 500, border: `1px solid ${C.border}`, borderRadius: 2, background: "none", color: C.text, cursor: "pointer", fontFamily: "inherit" }}>Export as Markdown</button>
                  <button style={{ padding: "6px 16px", fontSize: 11, fontWeight: 400, border: `1px solid ${C.borderLight}`, borderRadius: 2, background: "none", color: C.textTertiary, cursor: "default", fontFamily: "inherit" }}>Open in Editor — coming soon</button>
                  <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 500, color: "#27ae60", padding: "4px 12px", border: "1px solid #27ae6040", borderRadius: 100, background: "#27ae6010" }}>92% aligned to messaging framework</span>
                </div>
              </div>

              {/* ── Section B: Slides in the Library ── */}
              <div style={{ marginBottom: 40 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <TierLabel icon={<NavIconDeck size={14} color={C.textTertiary} />}>Slides in the Library</TierLabel>
                  <span style={{ fontSize: 10, fontWeight: 500, background: C.accentSoft, color: C.textSecondary, padding: "2px 8px", borderRadius: 100 }}>{relevantSlides.length}</span>
                </div>
                {relevantSlides.length > 0 ? (
                  <>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
                      {relevantSlides.map(slide => (
                        <div key={slide.id} onClick={() => setLightboxSlide(slide)} style={{ border: `1px solid ${C.border}`, borderRadius: 2, background: C.bg, cursor: "pointer", overflow: "hidden", transition: "all 0.2s ease" }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = C.textTertiary; e.currentTarget.style.background = C.accentSoft; }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.bg; }}
                        >
                          <div style={{ aspectRatio: "16/9", overflow: "hidden" }}><SlidePreview slide={slide} width={320} height={180} responsive /></div>
                          <div style={{ padding: "10px 12px" }}>
                            <p style={{ fontSize: 12, fontWeight: 500, color: C.text, marginBottom: 2 }}>{slide.title}</p>
                            <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: 0.5, textTransform: "uppercase", color: C.textTertiary, padding: "1px 6px", border: `1px solid ${C.border}`, borderRadius: 2 }}>{slide.type}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div onClick={() => setActivePage("deck")} style={{ marginTop: 12, fontSize: 12, fontWeight: 400, color: C.textSecondary, cursor: "pointer", display: "inline-block" }}
                      onMouseEnter={e => e.currentTarget.style.color = C.text} onMouseLeave={e => e.currentTarget.style.color = C.textSecondary}
                    >Open in Deck Builder &rarr;</div>
                  </>
                ) : (
                  <p style={{ fontSize: 13, color: C.textTertiary, fontWeight: 300 }}>No matching slides found for this scope.</p>
                )}
              </div>

              {/* ── Section C: Gaps Identified ── */}
              <div style={{ marginBottom: 40 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <TierLabel icon={
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke={C.textTertiary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  }>Gaps Identified</TierLabel>
                  <span style={{ fontSize: 10, fontWeight: 500, background: C.accentSoft, color: C.textSecondary, padding: "2px 8px", borderRadius: 100 }}>{coAuthorGaps.length}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {coAuthorGaps.map((gap, i) => (
                    <div key={i} style={{ padding: "16px 20px", borderRadius: 2, background: C.accentSoft, borderLeft: "3px solid #049fd9" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                        <p style={{ fontSize: 13, fontWeight: 500, color: C.text, lineHeight: 1.4, flex: 1 }}>{gap.title}</p>
                        <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: 0.5, textTransform: "uppercase", color: C.textTertiary, padding: "2px 8px", border: `1px solid ${C.border}`, borderRadius: 2, whiteSpace: "nowrap", marginLeft: 12 }}>{gap.level}</span>
                      </div>
                      <p style={{ fontSize: 12, color: C.textSecondary, lineHeight: 1.6, fontWeight: 300 }}>{gap.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Section D: Thought Leadership Angles ── */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <TierLabel icon={
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke={C.textTertiary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
                    </svg>
                  }>Thought Leadership Angles</TierLabel>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {coAuthorAngles.map((angle, i) => (
                    <div key={i} style={{ padding: "16px 20px", borderRadius: 2, background: C.bg, border: `1px solid ${C.border}` }}>
                      <p style={{ fontSize: 13, fontWeight: 500, color: C.text, marginBottom: 6, lineHeight: 1.4 }}>{angle.title}</p>
                      <p style={{ fontSize: 12, color: C.textSecondary, lineHeight: 1.6, fontWeight: 300, marginBottom: 10 }}>{angle.description}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                        {angle.tags.map((tag, ti) => (
                          <span key={ti} style={{ fontSize: 10, padding: "2px 8px", border: `1px solid ${C.border}`, borderRadius: 100, color: C.textTertiary, fontWeight: 400 }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSlide && (
        <SlideLightbox slide={lightboxSlide} allFilteredSlides={relevantSlides} onClose={() => setLightboxSlide(null)} isSelected={() => false} onToggle={() => {}} />
      )}
    </div>
  );
}
