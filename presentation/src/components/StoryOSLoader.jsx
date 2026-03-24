import { useEffect, useRef } from "react";

// ── Config ──
const WORD = "STORYOS";
const TEXT_IN = 1400;
const TEXT_HOLD = 1400;
const TEXT_OUT = 1000;
const MAX_SPACING = 10;
const SIZE = 80;
const TRIM_DURATION = 800;
const EXIT_DURATION = 800; // ms for exit animation

// ── Easing ──
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
const easeInQuart = (t) => t * t * t * t;

// ── Shape generators ──
function makeShape(type, cx, cy, size) {
  const h = size / 2;
  const pts = [];
  if (type === "square") {
    const n = 30;
    for (let i = 0; i < n; i++) pts.push([cx - h + (size * i) / n, cy - h]);
    for (let i = 0; i < n; i++) pts.push([cx + h, cy - h + (size * i) / n]);
    for (let i = 0; i < n; i++) pts.push([cx + h - (size * i) / n, cy + h]);
    for (let i = 0; i < n; i++) pts.push([cx - h, cy + h - (size * i) / n]);
  } else if (type === "circle") {
    const r = size * 0.52;
    for (let i = 0; i < 120; i++) {
      const a = (i / 120) * Math.PI * 2 - Math.PI / 2;
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
    }
  } else if (type === "triangle") {
    const n = 40;
    const th = size * Math.sqrt(3) / 2;
    const top = [cx, cy - th * 0.6];
    const bl = [cx - h, cy + th * 0.4];
    const br = [cx + h, cy + th * 0.4];
    for (let i = 0; i < n; i++) {
      const t = i / n;
      pts.push([top[0] + (br[0] - top[0]) * t, top[1] + (br[1] - top[1]) * t]);
    }
    for (let i = 0; i < n; i++) {
      const t = i / n;
      pts.push([br[0] + (bl[0] - br[0]) * t, br[1] + (bl[1] - br[1]) * t]);
    }
    for (let i = 0; i < n; i++) {
      const t = i / n;
      pts.push([bl[0] + (top[0] - bl[0]) * t, bl[1] + (top[1] - bl[1]) * t]);
    }
  } else if (type === "diamond") {
    const n = 30;
    const top = [cx, cy - h * 1.15];
    const right = [cx + h, cy];
    const bottom = [cx, cy + h * 1.15];
    const left = [cx - h, cy];
    const sides = [[top, right], [right, bottom], [bottom, left], [left, top]];
    for (const [a, b] of sides) {
      for (let i = 0; i < n; i++) {
        const t = i / n;
        pts.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
      }
    }
  }
  return pts;
}

function lerpPoints(a, b, t) {
  return a.map((p, i) => [
    p[0] + (b[i][0] - p[0]) * t,
    p[1] + (b[i][1] - p[1]) * t,
  ]);
}

export function StoryOSLoader({ visible, fading = false, onExitComplete }) {
  const canvasRef = useRef(null);
  const lettersRef = useRef(null);
  const underlineRef = useRef(null);
  const animRef = useRef(null);
  const startRef = useRef(null);
  const exitStartRef = useRef(null);
  const exitCalledRef = useRef(false);

  // Track when fading starts
  useEffect(() => {
    if (fading && !exitStartRef.current) {
      exitStartRef.current = performance.now();
      exitCalledRef.current = false;
    }
    if (!fading) {
      exitStartRef.current = null;
      exitCalledRef.current = false;
    }
  }, [fading]);

  useEffect(() => {
    if (!visible) {
      startRef.current = null;
      exitStartRef.current = null;
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;

    const shapes = ["square", "circle", "triangle", "diamond"].map((t) =>
      makeShape(t, cx, cy, SIZE)
    );

    const letterEls = lettersRef.current?.children;
    const underlineEl = underlineRef.current;

    function frame(ts) {
      if (!startRef.current) startRef.current = ts;
      const totalElapsed = ts - startRef.current;

      // ── Exit animation ──
      let exitT = 0; // 0 = no exit, 1 = fully exited
      if (exitStartRef.current) {
        const exitElapsed = ts - exitStartRef.current;
        exitT = Math.min(1, exitElapsed / EXIT_DURATION);
        if (exitT >= 1 && !exitCalledRef.current) {
          exitCalledRef.current = true;
          onExitComplete?.();
        }
      }
      const exitEased = easeInQuart(exitT);
      // Invert: 1 = fully visible, 0 = gone
      const presence = 1 - exitEased;

      // Freeze at hold point during intro, use presence for exit
      const totalTextSeq = TEXT_IN + TEXT_HOLD + TEXT_OUT;
      const textStart = (totalTextSeq > 0 ? (5000 - totalTextSeq) / 2 : 0);
      const holdPoint = textStart + TEXT_IN + TEXT_HOLD * 0.5;
      const elapsed = Math.min(totalElapsed, holdPoint);
      const sdt = elapsed - textStart;

      // ── Shape morph (frozen at triangle during hold) ──
      let morphed;
      let shapeProgress;
      if (sdt < 0) {
        morphed = shapes[0];
        shapeProgress = 0;
      } else if (sdt < TEXT_IN) {
        const t = easeInOutCubic(sdt / TEXT_IN);
        const phase = t * 2;
        morphed = phase < 1
          ? lerpPoints(shapes[0], shapes[1], phase)
          : lerpPoints(shapes[1], shapes[2], phase - 1);
        shapeProgress = t;
      } else {
        morphed = shapes[2];
        shapeProgress = 1;
      }

      const rotation = shapeProgress * Math.PI * 0.5;
      const scale = 1 + 0.05 * Math.sin(shapeProgress * Math.PI);
      const opacity = (0.5 + 0.5 * shapeProgress) * presence;

      // Trim path: draw-on during intro, trim-off during exit
      const trimIn = Math.min(1, totalElapsed / TRIM_DURATION);
      const trimInProgress = easeOutQuart(trimIn);
      // During exit, reverse the trim
      const trimProgress = trimInProgress * presence;
      const totalPts = morphed.length;
      const endIdx = Math.floor(trimProgress * totalPts);

      // Draw shape
      ctx.save();
      ctx.clearRect(0, 0, W, H);
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);
      ctx.translate(-cx, -cy);

      if (endIdx > 0) {
        ctx.beginPath();
        ctx.moveTo(morphed[0][0], morphed[0][1]);
        for (let i = 1; i <= endIdx && i < totalPts; i++) {
          ctx.lineTo(morphed[i][0], morphed[i][1]);
        }
        if (trimProgress >= 1) ctx.closePath();
        ctx.shadowColor = `rgba(255, 255, 255, ${opacity * 0.6})`;
        ctx.shadowBlur = 15;
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      ctx.restore();

      // ── Letters ──
      if (letterEls) {
        // Intro spacing
        let spacingT = 0;
        if (sdt >= 0 && sdt < TEXT_IN) spacingT = easeOutQuart(sdt / TEXT_IN);
        else if (sdt >= TEXT_IN) spacingT = 1;

        // Collapse spacing on exit
        spacingT *= presence;

        const spacing = spacingT * MAX_SPACING;
        const mid = (letterEls.length - 1) / 2;
        const RIPPLE_DELAY = 60;
        const maxRipple = Math.ceil(mid) * RIPPLE_DELAY;
        const LETTER_IN = TEXT_IN - maxRipple;

        for (let i = 0; i < letterEls.length; i++) {
          const distFromMid = Math.abs(i - mid);
          const delay = distFromMid * RIPPLE_DELAY;
          const letterDt = sdt - delay;

          // Intro rotation
          let rotateT = 0;
          if (letterDt >= 0 && letterDt < LETTER_IN)
            rotateT = easeOutQuart(letterDt / LETTER_IN);
          else if (letterDt >= LETTER_IN)
            rotateT = 1;

          // Exit: reverse with ripple from outside in
          if (exitT > 0) {
            const exitDelay = (Math.ceil(mid) - distFromMid) * RIPPLE_DELAY;
            const exitElapsed = ts - (exitStartRef.current || ts);
            const letterExitDt = exitElapsed - exitDelay * (EXIT_DURATION / 1000);
            if (letterExitDt > 0) {
              const letterExitT = Math.min(1, letterExitDt / (EXIT_DURATION * 0.6));
              rotateT *= 1 - easeInQuart(letterExitT);
            }
          }

          const direction = i < mid ? -1 : 1;
          const rotateY = direction * 90 * (1 - rotateT);
          const offset = (i - mid) * spacing;
          letterEls[i].style.transform = `translateX(${offset}px) rotateY(${rotateY}deg)`;
          letterEls[i].style.opacity = presence;
        }
      }

      // ── Underline ──
      if (underlineEl) {
        const ulIn = sdt < 0 ? 0 : Math.min(1, sdt / (TEXT_IN * 0.8));
        const ulW = easeOutQuart(ulIn) * presence;
        underlineEl.style.width = `${ulW * 220}px`;
      }

      animRef.current = requestAnimationFrame(frame);
    }

    animRef.current = requestAnimationFrame(frame);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [visible, fading, onExitComplete]);

  if (!visible) return null;

  return (
    <div style={{
      position: "absolute", inset: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 20, pointerEvents: "none",
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <canvas ref={canvasRef} width={240} height={240} style={{ width: 56, height: 56 }} />
        <div
          ref={lettersRef}
          style={{
            display: "flex", justifyContent: "center", userSelect: "none",
            height: 24, overflow: "visible", perspective: 600,
          }}
        >
          {WORD.split("").map((ch, i) => (
            <span
              key={i}
              style={{
                fontSize: 20,
                fontWeight: i >= WORD.length - 2 ? 700 : 300,
                color: "#ffffff",
                textShadow: "0 0 8px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.15)",
                willChange: "transform",
                display: "inline-block",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                fontFamily: "'Space Grotesk', -apple-system, sans-serif",
              }}
            >
              {ch}
            </span>
          ))}
        </div>
        <div style={{ width: 260, display: "flex", justifyContent: "center" }}>
          <div
            ref={underlineRef}
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              boxShadow: "0 0 8px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)",
              width: 0, willChange: "width",
            }}
          />
        </div>
      </div>
    </div>
  );
}
