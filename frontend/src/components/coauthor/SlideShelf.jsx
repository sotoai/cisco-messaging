import { useState, useEffect } from "react";
import { C } from "../../theme";

const typeLabels = { narrative: "Narrative", data: "Data Slide", architecture: "Architecture", "customer-quote": "Customer Quote", comparison: "Comparison", title: "Title", divider: "Divider" };

function MatchDots({ strength }) {
  return (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: i < strength ? C.text : C.borderLight }} />
      ))}
    </span>
  );
}

export function SlideShelf({ slides, matchContext, onAddToDeck, addedIds, onOpenDeckBuilder, userDecks, targetDeck, setTargetDeck }) {
  const [isOpen, setIsOpen] = useState(false);
  const [previewSlide, setPreviewSlide] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  const addedCount = slides.filter(s => addedIds.includes(s.id)).length;

  // Assign match strength: top third = 3, mid = 2, bottom = 1
  const withStrength = slides.map((s, i) => ({
    ...s,
    strength: i < slides.length / 3 ? 3 : i < (slides.length * 2) / 3 ? 2 : 1,
  }));

  return (
    <>
      {/* Toggle tab */}
      <div
        onClick={() => { setIsOpen(!isOpen); setPreviewSlide(null); }}
        style={{
          position: "absolute", right: isOpen ? 320 : 0, top: "50%", transform: "translateY(-50%)",
          width: 28, height: 80, background: C.surface, cursor: "pointer",
          borderLeft: `1px solid ${C.border}`, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
          borderRadius: "4px 0 0 4px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6,
          zIndex: 60, transition: "right 0.25s ease",
        }}
        onMouseEnter={e => e.currentTarget.style.background = C.accentSoft}
        onMouseLeave={e => e.currentTarget.style.background = C.surface}
      >
        {slides.length > 0 && (
          <span style={{ fontSize: 8, fontWeight: 600, background: C.text, color: C.bg, borderRadius: 10, padding: "1px 4px", minWidth: 14, textAlign: "center" }}>{slides.length}</span>
        )}
        <span style={{ fontSize: 14, color: C.textTertiary, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>‹</span>
        <span style={{ fontSize: 8, letterSpacing: 0.8, textTransform: "uppercase", color: C.textTertiary, writingMode: "vertical-lr", transform: "rotate(180deg)" }}>Slides</span>
      </div>

      {/* Shelf panel */}
      <div style={{
        position: "absolute", top: 0, bottom: 0, right: 0, width: 320,
        background: C.bg, borderLeft: `1px solid ${C.border}`,
        boxShadow: isOpen ? "-4px 0 16px rgba(0,0,0,0.08)" : "none",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        zIndex: 55, display: "flex", flexDirection: "column",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{ padding: "16px 16px 12px", borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}>
          <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 500, color: C.textTertiary, marginBottom: 8 }}>Recommended Slides</div>
          <select
            value={targetDeck} onChange={e => setTargetDeck(e.target.value)}
            style={{
              width: "100%", fontSize: 12, fontWeight: 400, fontFamily: "inherit", color: C.text, cursor: "pointer",
              background: "transparent", border: "none", borderBottom: `1px solid ${C.border}`, padding: "4px 0", outline: "none",
              appearance: "none", WebkitAppearance: "none",
            }}
          >
            <option value="new">New Deck</option>
            {userDecks.filter(d => d.id !== "new").map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
          {matchContext && <div style={{ fontSize: 10, color: C.textTertiary, marginTop: 6 }}>Based on: {matchContext}</div>}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "12px 16px" }}>
          {previewSlide ? (
            /* ── Slide Preview ── */
            <div>
              <span onClick={() => setPreviewSlide(null)} style={{ fontSize: 11, color: C.textTertiary, cursor: "pointer", transition: "color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color = C.text} onMouseLeave={e => e.currentTarget.style.color = C.textTertiary}
              >← Back to slides</span>
              <div style={{ aspectRatio: "16/9", background: C.surface, border: `1px solid ${C.borderLight}`, borderRadius: 2, marginTop: 10, marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 12, color: C.textTertiary, textAlign: "center", padding: 16, lineHeight: 1.5 }}>{previewSlide.title}</span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 400, color: C.text, marginBottom: 4 }}>{previewSlide.title}</h3>
              <div style={{ fontSize: 10, color: C.textTertiary, marginBottom: 10 }}>{previewSlide.source.deckTitle} · Slide {previewSlide.source.slideNumber}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginBottom: 12 }}>
                {previewSlide.tags.map(t => <span key={t} style={{ fontSize: 9, padding: "1px 6px", border: `1px solid ${C.borderLight}`, borderRadius: 10, color: C.textTertiary }}>{t}</span>)}
                <span style={{ fontSize: 9, padding: "1px 6px", border: `1px solid ${C.borderLight}`, borderRadius: 10, color: C.textTertiary }}>{typeLabels[previewSlide.type] || previewSlide.type}</span>
              </div>
              <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.6, color: C.textSecondary, marginBottom: 16 }}>{previewSlide.narrativeContext}</p>
              {addedIds.includes(previewSlide.id) ? (
                <div style={{ width: "100%", padding: "8px 0", fontSize: 12, textAlign: "center", color: C.textTertiary, border: `1px solid ${C.border}`, borderRadius: 2, fontFamily: "inherit" }}>✓ Added</div>
              ) : (
                <button onClick={() => onAddToDeck(previewSlide.id)} style={{ width: "100%", padding: "8px 0", fontSize: 12, fontWeight: 500, background: C.text, color: C.bg, border: "none", borderRadius: 2, cursor: "pointer", fontFamily: "inherit" }}>Add to Deck</button>
              )}
              <div style={{ textAlign: "center", marginTop: 8 }}>
                <span onClick={() => onOpenDeckBuilder()} style={{ fontSize: 11, color: C.textTertiary, cursor: "pointer" }}
                  onMouseEnter={e => e.currentTarget.style.color = C.text} onMouseLeave={e => e.currentTarget.style.color = C.textTertiary}
                >Open in Deck Builder →</span>
              </div>
            </div>
          ) : slides.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 16px", color: C.textTertiary, fontSize: 13, fontWeight: 300 }}>No matching slides found. Try broadening your content scope.</div>
          ) : (
            /* ── Card List ── */
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {withStrength.map(slide => {
                const added = addedIds.includes(slide.id);
                return (
                  <div key={slide.id}>
                    {/* Thumbnail */}
                    <div style={{ position: "relative", aspectRatio: "16/9", background: C.surface, border: `1px solid ${C.borderLight}`, borderRadius: 2, marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                      onClick={() => setPreviewSlide(slide)}
                    >
                      <span style={{ fontSize: 11, color: C.textTertiary, textAlign: "center", padding: 12, lineHeight: 1.4 }}>{slide.title}</span>
                      <span style={{ position: "absolute", top: 6, right: 6 }}><MatchDots strength={slide.strength} /></span>
                    </div>
                    {/* Info */}
                    <div style={{ fontSize: 13, fontWeight: 400, color: C.text, marginBottom: 2, lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{slide.title}</div>
                    <div style={{ fontSize: 10, color: C.textTertiary, marginBottom: 4 }}>{slide.source.deckTitle} · Slide {slide.source.slideNumber}</div>
                    <div style={{ display: "flex", gap: 3, flexWrap: "wrap", marginBottom: 8 }}>
                      {slide.tags.slice(0, 2).map(t => <span key={t} style={{ fontSize: 9, padding: "1px 6px", border: `1px solid ${C.borderLight}`, borderRadius: 10, color: C.textTertiary }}>{t}</span>)}
                      <span style={{ fontSize: 9, padding: "1px 6px", border: `1px solid ${C.borderLight}`, borderRadius: 10, color: C.textTertiary }}>{typeLabels[slide.type] || slide.type}</span>
                    </div>
                    {/* Actions */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      {added ? (
                        <span style={{ fontSize: 11, color: "#27ae60", fontWeight: 500 }}>✓ Added</span>
                      ) : (
                        <button onClick={() => onAddToDeck(slide.id)} style={{ fontSize: 11, padding: "4px 12px", background: C.text, color: C.bg, border: "none", borderRadius: 2, cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>Add to Deck</button>
                      )}
                      <span onClick={() => setPreviewSlide(slide)} style={{ fontSize: 11, color: C.textTertiary, cursor: "pointer" }}
                        onMouseEnter={e => e.currentTarget.style.color = C.text} onMouseLeave={e => e.currentTarget.style.color = C.textTertiary}
                      >Preview</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {addedCount > 0 && (
          <div style={{ padding: "10px 16px", borderTop: `1px solid ${C.border}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 11, color: C.textTertiary }}>{addedCount} slide{addedCount !== 1 ? "s" : ""} added</span>
            <button onClick={() => onOpenDeckBuilder()} style={{ fontSize: 11, padding: "4px 12px", border: `1px solid ${C.border}`, borderRadius: 2, background: "none", color: C.text, cursor: "pointer", fontFamily: "inherit" }}>Open Deck →</button>
          </div>
        )}
      </div>
    </>
  );
}
