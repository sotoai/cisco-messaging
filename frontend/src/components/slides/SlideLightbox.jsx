import { useState, useEffect } from "react";
import { C } from "../../theme";
import { SlidePreview } from "./SlidePreview";

export function SlideLightbox({ slide, allFilteredSlides, onClose, isSelected, onToggle }) {
  const idx = allFilteredSlides.findIndex(s => s.id === slide.id);
  const [currentIdx, setCurrentIdx] = useState(idx >= 0 ? idx : 0);
  const current = allFilteredSlides[currentIdx] || slide;
  const currentSelected = isSelected(current.id);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" && currentIdx < allFilteredSlides.length - 1) setCurrentIdx(i => i + 1);
      if (e.key === "ArrowLeft" && currentIdx > 0) setCurrentIdx(i => i - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentIdx, allFilteredSlides.length]);

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div onClick={e => e.stopPropagation()} style={{ width: "80vw", maxWidth: 900, background: C.bg, borderRadius: 2, overflow: "hidden", position: "relative" }}>
        {/* Close button */}
        <button onClick={onClose} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", cursor: "pointer", zIndex: 10, color: C.textTertiary, fontSize: 20, lineHeight: 1 }}>&times;</button>
        {/* Slide preview at full size */}
        <div style={{ width: "100%", lineHeight: 0 }}>
          <SlidePreview slide={current} width={900} height={506} />
        </div>
        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", borderTop: `1px solid ${C.border}` }}>
          <span style={{ fontSize: 11, color: C.textTertiary }}>{currentIdx + 1} of {allFilteredSlides.length}</span>
          <div style={{ display: "flex", gap: 8 }}>
            {/* Nav arrows */}
            <button onClick={() => setCurrentIdx(i => Math.max(0, i - 1))} disabled={currentIdx === 0} style={{ background: "none", border: `1px solid ${C.border}`, borderRadius: 2, padding: "6px 12px", cursor: currentIdx === 0 ? "default" : "pointer", color: currentIdx === 0 ? C.textTertiary : C.text, fontSize: 12, opacity: currentIdx === 0 ? 0.4 : 1 }}>&larr;</button>
            <button onClick={() => setCurrentIdx(i => Math.min(allFilteredSlides.length - 1, i + 1))} disabled={currentIdx === allFilteredSlides.length - 1} style={{ background: "none", border: `1px solid ${C.border}`, borderRadius: 2, padding: "6px 12px", cursor: currentIdx === allFilteredSlides.length - 1 ? "default" : "pointer", color: currentIdx === allFilteredSlides.length - 1 ? C.textTertiary : C.text, fontSize: 12, opacity: currentIdx === allFilteredSlides.length - 1 ? 0.4 : 1 }}>&rarr;</button>
            {/* Add/remove from deck */}
            <button
              onClick={() => onToggle(current.id)}
              style={{
                background: currentSelected ? C.text : "none", color: currentSelected ? C.bg : C.text,
                border: `1px solid ${C.text}`, borderRadius: 2, padding: "6px 16px", cursor: "pointer", fontSize: 11, fontWeight: 500, transition: "all 0.15s ease",
              }}
            >
              {currentSelected ? "Remove from Deck" : "Add to Deck"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
