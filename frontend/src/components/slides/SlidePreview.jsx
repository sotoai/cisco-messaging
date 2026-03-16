import { C } from "../../theme";
import { storyThumbnails } from "../../data/stories";
import { tagsDef } from "../../data/tags";

export function SlidePreview({ slide, width = 320, height = 180, responsive = false }) {
  const seed = slide.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const s = (v) => v * width / 320;
  const f = (v) => s(v * 1.3); // font scale – bump all text ~30%
  const uid = `g${slide.id.replace(/[^a-z0-9]/gi, "")}`;
  const ciscoBridge = "M8.5 2.5C6 5 4.5 6.5 3 9.5c1.5-1.5 3-2.5 5.5-2.5s4 1 5.5 2.5C12.5 6.5 11 5 8.5 2.5z";
  const svgProps = responsive
    ? { width: "100%", height: "100%", viewBox: `0 0 ${width} ${height}`, preserveAspectRatio: "xMidYMid meet", style: { display: "block" } }
    : { width, height, viewBox: `0 0 ${width} ${height}`, style: { display: "block" } };

  // Cisco brand palette with seeded variation
  const palettes = [
    { bg1: "#049fd9", bg2: "#036a91", accent: "#00bceb", text: "#fff", textSoft: "#fff", panel: "rgba(255,255,255,0.12)", panelSolid: "#0589b8" },
    { bg1: "#1a1a2e", bg2: "#16213e", accent: "#0096d6", text: "#fff", textSoft: "#fff", panel: "rgba(0,150,214,0.15)", panelSolid: "#1b2a4a" },
    { bg1: "#0d274d", bg2: "#041c32", accent: "#00bceb", text: "#fff", textSoft: "#fff", panel: "rgba(0,188,235,0.12)", panelSolid: "#0a3260" },
    { bg1: "#ffffff", bg2: "#f0f4f8", accent: "#0096d6", text: "#171717", textSoft: "#333", panel: "#e8f4fa", panelSolid: "#dceef7" },
    { bg1: "#fbfbfb", bg2: "#f5f5f5", accent: "#049fd9", text: "#171717", textSoft: "#333", panel: "#eaf6fb", panelSolid: "#d4edf7" },
    { bg1: "#0b3d2e", bg2: "#072a1f", accent: "#6cc04a", text: "#fff", textSoft: "#fff", panel: "rgba(108,192,74,0.12)", panelSolid: "#0d4a37" },
    { bg1: "#2d1b4e", bg2: "#1a0f30", accent: "#9b59b6", text: "#fff", textSoft: "#fff", panel: "rgba(155,89,182,0.15)", panelSolid: "#3a2460" },
  ];
  const pIdx = seed % palettes.length;
  const p = palettes[pIdx];
  // Alternate layout variant per seed
  const variant = seed % 3;

  if (slide.type === "company") {
    return (
      <svg {...svgProps}>
        <defs>
          <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#049fd9" /><stop offset="100%" stopColor="#003b5c" />
          </linearGradient>
        </defs>
        <rect width={width} height={height} fill={`url(#${uid}bg)`} />
        {/* Large abstract shapes */}
        <circle cx={width * 0.82} cy={height * 0.35} r={s(65)} fill="rgba(255,255,255,0.06)" />
        <circle cx={width * 0.75} cy={height * 0.5} r={s(40)} fill="rgba(255,255,255,0.04)" />
        <rect x={0} y={height - s(4)} width={width} height={s(4)} fill="#00bceb" />
        {/* Cisco logo area */}
        <g transform={`translate(${s(24)}, ${s(18)}) scale(${s(1.8)})`}>
          <path d={ciscoBridge} fill="rgba(255,255,255,0.9)" />
        </g>
        <text x={s(24)} y={s(52)} fontSize={f(7)} fill="#fff" fontFamily="Inter, sans-serif" letterSpacing={s(2)}>CISCO</text>
        {/* Main title */}
        <text x={s(24)} y={s(88)} fontSize={f(22)} fontWeight="300" fill="#fff" fontFamily="Inter, sans-serif">{slide.title}</text>
        <text x={s(24)} y={s(108)} fontSize={f(9)} fill="#fff" fontFamily="Inter, sans-serif">{slide.subtitle.slice(0, 50)}</text>
        {/* Decorative line */}
        <rect x={s(24)} y={s(118)} width={s(50)} height={s(2)} rx={s(1)} fill="#00bceb" />
        {/* Bottom bar */}
        <rect x={0} y={height - s(22)} width={width} height={s(18)} fill="rgba(0,0,0,0.2)" />
        <text x={s(24)} y={height - s(9)} fontSize={f(6)} fill="#fff" fontFamily="Inter, sans-serif" letterSpacing={s(1.5)}>CORPORATE MESSAGING FRAMEWORK</text>
      </svg>
    );
  }

  if (slide.type === "solution") {
    // Alternate between dark and light solution slides
    const isDarkSlide = variant !== 2;
    const bg = isDarkSlide ? "#0d274d" : "#ffffff";
    const fg = isDarkSlide ? "#fff" : "#171717";
    const fgSoft = isDarkSlide ? "rgba(255,255,255,0.6)" : "#737373";
    const acc = "#00bceb";
    const pillarColors = ["#049fd9", "#6cc04a", "#f5a623"];
    return (
      <svg {...svgProps}>
        <defs>
          <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={isDarkSlide ? "#0d274d" : "#f8fbff"} />
            <stop offset="100%" stopColor={isDarkSlide ? "#041c32" : "#eef5fb"} />
          </linearGradient>
        </defs>
        <rect width={width} height={height} fill={`url(#${uid}bg)`} />
        {/* Top accent */}
        <rect x={0} y={0} width={width} height={s(3)} fill={acc} />
        {/* Label */}
        <text x={s(20)} y={s(20)} fontSize={f(6)} fill={fgSoft} fontFamily="Inter, sans-serif" letterSpacing={s(2)}>SOLUTION CATEGORY</text>
        {/* Title */}
        <text x={s(20)} y={s(42)} fontSize={f(15)} fontWeight="300" fill={fg} fontFamily="Inter, sans-serif">{slide.title.slice(0, 32)}</text>
        <text x={s(20)} y={s(58)} fontSize={f(7.5)} fill={fgSoft} fontFamily="Inter, sans-serif">{slide.subtitle.slice(0, 55)}</text>
        {/* Three pillar cards */}
        {[0, 1, 2].map(i => (
          <g key={i}>
            <rect x={s(20 + i * 97)} y={s(72)} width={s(88)} height={s(72)} rx={s(3)} fill={isDarkSlide ? "rgba(255,255,255,0.06)" : "#f5f8fb"} />
            <rect x={s(20 + i * 97)} y={s(72)} width={s(88)} height={s(4)} rx={s(2)} fill={pillarColors[i]} />
            <circle cx={s(42 + i * 97)} cy={s(92)} r={s(6)} fill={pillarColors[i]} opacity={0.2} />
            <circle cx={s(42 + i * 97)} cy={s(92)} r={s(3)} fill={pillarColors[i]} />
            <rect x={s(54 + i * 97)} y={s(88)} width={s(42)} height={s(3)} rx={s(1.5)} fill={isDarkSlide ? "rgba(255,255,255,0.2)" : "#d0d8e0"} />
            <rect x={s(54 + i * 97)} y={s(96)} width={s(30)} height={s(3)} rx={s(1.5)} fill={isDarkSlide ? "rgba(255,255,255,0.12)" : "#dfe5eb"} />
            {[0, 1, 2].map(j => (
              <rect key={j} x={s(30 + i * 97)} y={s(110 + j * 10)} width={s(65 - j * 10)} height={s(2.5)} rx={s(1)} fill={isDarkSlide ? "rgba(255,255,255,0.1)" : "#e5eaef"} />
            ))}
          </g>
        ))}
        {/* Bottom */}
        <rect x={0} y={height - s(3)} width={width} height={s(3)} fill={acc} opacity={0.5} />
        <g transform={`translate(${width - s(42)}, ${s(12)}) scale(${s(0.6)})`}><path d={ciscoBridge} fill={fgSoft} /></g>
      </svg>
    );
  }

  if (slide.type === "product") {
    const isNet = slide.productId === "networking";
    const gradA = isNet ? "#036a91" : "#1a1a2e";
    const gradB = isNet ? "#049fd9" : "#2d1b69";
    const acc = isNet ? "#00bceb" : "#9b59b6";
    return (
      <svg {...svgProps}>
        <defs>
          <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="1" y2="0.8">
            <stop offset="0%" stopColor={gradA} /><stop offset="100%" stopColor={gradB} />
          </linearGradient>
        </defs>
        <rect width={width} height={height} fill={`url(#${uid}bg)`} />
        {/* Large photo-like area */}
        <rect x={width * 0.52} y={0} width={width * 0.48} height={height} fill="rgba(0,0,0,0.15)" />
        <rect x={width * 0.52} y={0} width={width * 0.48} height={height} fill="rgba(255,255,255,0.03)" />
        {/* Simulated image: abstract network/office shapes */}
        {isNet ? (
          <g>
            {[0,1,2,3,4].map(i => <circle key={i} cx={s(220 + (i * 17) % 70)} cy={s(40 + (i * 29) % 100)} r={s(3 + i * 1.5)} fill={acc} opacity={0.15 + i * 0.08} />)}
            {[0,1,2].map(i => <line key={`l${i}`} x1={s(200 + i * 20)} y1={s(50 + i * 30)} x2={s(240 + i * 15)} y2={s(70 + i * 20)} stroke={acc} strokeWidth={s(0.5)} opacity={0.3} />)}
            <rect x={s(195)} y={s(55)} width={s(70)} height={s(45)} rx={s(4)} fill="rgba(255,255,255,0.06)" stroke={acc} strokeWidth={s(0.5)} opacity={0.5} />
          </g>
        ) : (
          <g>
            {[0,1,2,3].map(i => <rect key={i} x={s(200 + (i * 13) % 50)} y={s(30 + i * 25)} width={s(35)} height={s(22)} rx={s(3)} fill="rgba(255,255,255,0.06)" stroke={acc} strokeWidth={s(0.5)} opacity={0.4} />)}
            <circle cx={s(240)} cy={s(90)} r={s(25)} fill="rgba(255,255,255,0.04)" stroke={acc} strokeWidth={s(0.8)} opacity={0.3} />
          </g>
        )}
        {/* Left content */}
        <text x={s(20)} y={s(22)} fontSize={f(6)} fill="#fff" fontFamily="Inter, sans-serif" letterSpacing={s(2)}>PRODUCT</text>
        <text x={s(20)} y={s(50)} fontSize={f(16)} fontWeight="300" fill="#fff" fontFamily="Inter, sans-serif">{slide.title.slice(0, 20)}</text>
        <rect x={s(20)} y={s(58)} width={s(40)} height={s(2)} rx={s(1)} fill={acc} />
        <text x={s(20)} y={s(76)} fontSize={f(7)} fill="#fff" fontFamily="Inter, sans-serif">{slide.subtitle.slice(0, 35)}</text>
        {/* Stats */}
        {[0, 1, 2].map(i => (
          <g key={i}>
            <rect x={s(20)} y={s(92 + i * 22)} width={s(130)} height={s(18)} rx={s(2)} fill="rgba(255,255,255,0.07)" />
            <circle cx={s(32)} cy={s(101 + i * 22)} r={s(4)} fill={acc} opacity={0.6} />
            <rect x={s(42)} y={s(98 + i * 22)} width={s(55 + (seed * (i+1)) % 30)} height={s(2.5)} rx={s(1)} fill="rgba(255,255,255,0.25)" />
            <rect x={s(42)} y={s(104 + i * 22)} width={s(35 + (seed * (i+2)) % 20)} height={s(2)} rx={s(1)} fill="rgba(255,255,255,0.12)" />
          </g>
        ))}
        {/* Bottom branding bar */}
        <rect x={0} y={height - s(18)} width={width} height={s(18)} fill="rgba(0,0,0,0.3)" />
        <g transform={`translate(${s(16)}, ${height - s(14)}) scale(${s(0.5)})`}><path d={ciscoBridge} fill="rgba(255,255,255,0.5)" /></g>
        <rect x={0} y={height - s(2)} width={width} height={s(2)} fill={acc} />
      </svg>
    );
  }

  if (slide.type === "initiative") {
    const pal = palettes[pIdx];
    const isDarkSlide = !pal.bg1.startsWith("#f");
    const barCount = 5;
    const barH = Array.from({ length: barCount }, (_, i) => s(12 + ((seed * (i + 3) * 7) % 38)));
    return (
      <svg {...svgProps}>
        <defs>
          <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor={pal.bg1} /><stop offset="100%" stopColor={pal.bg2} />
          </linearGradient>
        </defs>
        <rect width={width} height={height} fill={`url(#${uid}bg)`} />
        {/* Top accent line */}
        <rect x={0} y={0} width={s(100)} height={s(3)} fill={pal.accent} />
        {/* Label */}
        <text x={s(20)} y={s(18)} fontSize={f(5.5)} fill={pal.textSoft} fontFamily="Inter, sans-serif" letterSpacing={s(2)}>INITIATIVE</text>
        {/* Title */}
        <text x={s(20)} y={s(36)} fontSize={f(12)} fontWeight="500" fill={pal.text} fontFamily="Inter, sans-serif">{slide.title.slice(0, 35)}</text>
        <text x={s(20)} y={s(50)} fontSize={f(7)} fill={pal.textSoft} fontFamily="Inter, sans-serif">{slide.subtitle.slice(0, 48)}</text>
        {/* Left content: bullet points with colored dots */}
        {[0, 1, 2, 3].map(i => (
          <g key={i}>
            <circle cx={s(26)} cy={s(68 + i * 16)} r={s(2.5)} fill={pal.accent} opacity={0.8 - i * 0.15} />
            <rect x={s(34)} y={s(66 + i * 16)} width={s(70 + (seed * (i + 1)) % 40)} height={s(3)} rx={s(1.5)} fill={pal.panel} />
            <rect x={s(34)} y={s(72 + i * 16)} width={s(45 + (seed * (i + 2)) % 30)} height={s(2)} rx={s(1)} fill={pal.panel} opacity={0.6} />
          </g>
        ))}
        {/* Right: bar chart */}
        <rect x={s(180)} y={s(58)} width={s(120)} height={s(88)} rx={s(3)} fill={pal.panel} />
        {barH.map((h, i) => (
          <g key={i}>
            <rect x={s(194 + i * 20)} y={s(130) - h} width={s(14)} height={h} rx={s(1.5)} fill={pal.accent} opacity={0.3 + (i === barCount - 1 ? 0.5 : i * 0.08)} />
          </g>
        ))}
        <line x1={s(190)} y1={s(132)} x2={s(292)} y2={s(132)} stroke={pal.textSoft} strokeWidth={s(0.5)} opacity={0.3} />
        {/* Y-axis labels */}
        {[0, 1, 2].map(i => (
          <rect key={i} x={s(183)} y={s(80 + i * 18)} width={s(4)} height={s(1.5)} fill={pal.textSoft} opacity={0.3} />
        ))}
        {/* Bottom */}
        <rect x={0} y={height - s(16)} width={width} height={s(16)} fill={isDarkSlide ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.04)"} />
        <g transform={`translate(${width - s(40)}, ${height - s(12)}) scale(${s(0.45)})`}><path d={ciscoBridge} fill={pal.textSoft} /></g>
        <rect x={0} y={height - s(2)} width={s(100)} height={s(2)} fill={pal.accent} opacity={0.6} />
      </svg>
    );
  }

  // ── story slides ──
  if (slide.type === "story") {
    const t = storyThumbnails[slide.storyId];
    const grad1 = t ? t.grad[0] : "#1e293b";
    const grad2 = t ? t.grad[1] : "#334155";

    if (slide.storySlideVariant === "title") {
      return (
        <svg {...svgProps}>
          <defs><linearGradient id={`${uid}sg`} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={grad1} /><stop offset="100%" stopColor={grad2} /></linearGradient></defs>
          <rect width={width} height={height} fill={`url(#${uid}sg)`} />
          {/* Grid lines */}
          {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={s(i * 25)} x2={width} y2={s(i * 25)} stroke="#fff" strokeWidth="0.5" opacity=".03" />)}
          <text x={s(20)} y={s(18)} fontSize={f(5)} fill="#fff" fontFamily="Inter, sans-serif" letterSpacing={s(2)} opacity={0.5}>CUSTOMER STORY</text>
          <rect x={s(20)} y={s(24)} width={s(30)} height={s(1.5)} fill="#fff" opacity={0.3} />
          <text x={s(20)} y={s(50)} fontSize={f(14)} fontWeight="500" fill="#fff" fontFamily="Inter, sans-serif">{slide.storyCustomer.slice(0, 28)}</text>
          <text x={s(20)} y={s(68)} fontSize={f(7)} fill="#fff" fontFamily="Inter, sans-serif" opacity={0.7}>{slide.subtitle.slice(0, 55)}</text>
          <text x={s(20)} y={s(80)} fontSize={f(7)} fill="#fff" fontFamily="Inter, sans-serif" opacity={0.7}>{slide.subtitle.slice(55, 110)}</text>
          {/* Metrics */}
          {(slide.storyMetrics || []).slice(0, 3).map((m, i) => (
            <g key={i}>
              <rect x={s(20 + i * 95)} y={s(100)} width={s(85)} height={s(48)} rx={s(3)} fill="rgba(255,255,255,0.08)" />
              <text x={s(62 + i * 95)} y={s(124)} fontSize={f(14)} fontWeight="600" fill="#fff" fontFamily="Inter, sans-serif" textAnchor="middle">{m.value}</text>
              <text x={s(62 + i * 95)} y={s(138)} fontSize={f(5.5)} fill="#fff" fontFamily="Inter, sans-serif" textAnchor="middle" opacity={0.6}>{m.label}</text>
            </g>
          ))}
          <rect x={0} y={height - s(2)} width={width} height={s(2)} fill="#fff" opacity={0.2} />
          <g transform={`translate(${width - s(40)}, ${height - s(14)}) scale(${s(0.45)})`}><path d={ciscoBridge} fill="rgba(255,255,255,0.25)" /></g>
        </svg>
      );
    }

    if (slide.storySlideVariant === "solution") {
      return (
        <svg {...svgProps}>
          <rect width={width} height={height} fill="#fff" />
          <rect x={0} y={0} width={s(6)} height={height} fill={grad1} />
          <text x={s(18)} y={s(18)} fontSize={f(5)} fill="#222" fontFamily="Inter, sans-serif" letterSpacing={s(2)}>SOLUTION</text>
          <text x={s(18)} y={s(38)} fontSize={f(10)} fontWeight="500" fill="#111" fontFamily="Inter, sans-serif">{slide.storyCustomer.slice(0, 32)}</text>
          {/* Solution text lines */}
          {[0, 1, 2, 3].map(i => (
            <rect key={i} x={s(18)} y={s(52 + i * 10)} width={s(i < 3 ? 260 : 180)} height={s(3)} rx={s(1)} fill="#e5e7eb" />
          ))}
          {/* Product/initiative pills */}
          {(slide.storyProducts || []).map((p, i) => (
            <g key={i}>
              <rect x={s(18 + i * 80)} y={s(100)} width={s(72)} height={s(18)} rx={s(9)} fill="#f3f4f6" stroke="#d1d5db" strokeWidth={s(0.5)} />
              <text x={s(54 + i * 80)} y={s(112)} fontSize={f(5.5)} fill="#374151" fontFamily="Inter, sans-serif" textAnchor="middle">{tagsDef.products[p] || p}</text>
            </g>
          ))}
          {(slide.storyInitiatives || []).slice(0, 2).map((init, i) => (
            <g key={`i${i}`}>
              <rect x={s(18 + i * 135)} y={s(126)} width={s(125)} height={s(18)} rx={s(9)} fill="#f3f4f6" stroke="#d1d5db" strokeWidth={s(0.5)} />
              <text x={s(80 + i * 135)} y={s(138)} fontSize={f(5)} fill="#6b7280" fontFamily="Inter, sans-serif" textAnchor="middle">{(tagsDef.initiatives[init] || init).slice(0, 22)}</text>
            </g>
          ))}
          <rect x={0} y={height - s(14)} width={width} height={s(14)} fill="#f5f5f5" />
          <g transform={`translate(${width - s(40)}, ${height - s(11)}) scale(${s(0.4)})`}><path d={ciscoBridge} fill="#ccc" /></g>
        </svg>
      );
    }

    // outcome variant
    return (
      <svg {...svgProps}>
        <defs><linearGradient id={`${uid}og`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0d274d" /><stop offset="100%" stopColor="#041c32" /></linearGradient></defs>
        <rect width={width} height={height} fill={`url(#${uid}og)`} />
        <rect x={0} y={0} width={width} height={s(3)} fill={grad2} />
        <text x={s(20)} y={s(18)} fontSize={f(5)} fill="#fff" fontFamily="Inter, sans-serif" letterSpacing={s(2)} opacity={0.6}>OUTCOME</text>
        <text x={s(20)} y={s(38)} fontSize={f(10)} fontWeight="500" fill="#fff" fontFamily="Inter, sans-serif">{slide.storyCustomer.slice(0, 32)}</text>
        {/* Big metrics */}
        {(slide.storyMetrics || []).slice(0, 3).map((m, i) => (
          <g key={i}>
            <text x={s(20 + i * 100)} y={s(72)} fontSize={f(16)} fontWeight="600" fill={grad2} fontFamily="Inter, sans-serif">{m.value}</text>
            <text x={s(20 + i * 100)} y={s(84)} fontSize={f(5.5)} fill="#fff" fontFamily="Inter, sans-serif" opacity={0.5}>{m.label}</text>
          </g>
        ))}
        {/* Outcome text lines */}
        {[0, 1, 2].map(i => (
          <rect key={i} x={s(20)} y={s(100 + i * 10)} width={s(i < 2 ? 260 : 170)} height={s(3)} rx={s(1)} fill="rgba(255,255,255,0.1)" />
        ))}
        <rect x={0} y={height - s(2)} width={width} height={s(2)} fill={grad2} opacity={0.6} />
        <g transform={`translate(${width - s(40)}, ${height - s(14)}) scale(${s(0.45)})`}><path d={ciscoBridge} fill="rgba(255,255,255,0.25)" /></g>
      </svg>
    );
  }

  // ── useCase slides: multiple visual layouts ──
  const pal = palettes[(pIdx + 2) % palettes.length];
  const isDarkSlide = !pal.bg1.startsWith("#f");
  const layout = seed % 4;

  if (layout === 0) {
    // Split layout: left text, right "photo" area with gradient
    return (
      <svg {...svgProps}>
        <rect width={width} height={height} fill={pal.bg1} />
        {/* Right photo area */}
        <defs>
          <linearGradient id={`${uid}ph`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={pal.accent} stopOpacity="0.3" /><stop offset="100%" stopColor={pal.bg2} stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <rect x={width * 0.55} y={0} width={width * 0.45} height={height} fill={`url(#${uid}ph)`} />
        {/* Abstract photo shapes */}
        <circle cx={width * 0.72} cy={height * 0.4} r={s(30)} fill="rgba(255,255,255,0.06)" />
        <circle cx={width * 0.8} cy={height * 0.6} r={s(20)} fill="rgba(255,255,255,0.04)" />
        <rect x={s(185)} y={s(35)} width={s(60)} height={s(40)} rx={s(4)} fill="rgba(255,255,255,0.05)" />
        {/* Left content */}
        <rect x={s(14)} y={s(14)} width={s(3)} height={s(30)} fill={pal.accent} />
        <text x={s(24)} y={s(16)} fontSize={f(5.5)} fill={pal.textSoft} fontFamily="Inter, sans-serif" letterSpacing={s(1.5)}>USE CASE</text>
        <text x={s(24)} y={s(36)} fontSize={f(10)} fontWeight="500" fill={pal.text} fontFamily="Inter, sans-serif">{slide.title.slice(0, 30)}</text>
        <text x={s(24)} y={s(50)} fontSize={f(6.5)} fill={pal.textSoft} fontFamily="Inter, sans-serif">{slide.subtitle.slice(0, 45)}</text>
        {/* Metric boxes */}
        {[0, 1].map(i => (
          <g key={i}>
            <rect x={s(20 + i * 72)} y={s(62)} width={s(65)} height={s(40)} rx={s(3)} fill={pal.panel} />
            <text x={s(30 + i * 72)} y={s(80)} fontSize={f(14)} fontWeight="600" fill={pal.accent} fontFamily="Inter, sans-serif">{["87%", "3.2x", "40%", "24/7"][seed % 4 + i]}</text>
            <rect x={s(30 + i * 72)} y={s(88)} width={s(40)} height={s(2.5)} rx={s(1)} fill={pal.panel} opacity={2} />
          </g>
        ))}
        {/* Bottom line */}
        <rect x={0} y={height - s(14)} width={width} height={s(14)} fill={isDarkSlide ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.04)"} />
        <g transform={`translate(${width - s(38)}, ${height - s(11)}) scale(${s(0.4)})`}><path d={ciscoBridge} fill={pal.textSoft} /></g>
      </svg>
    );
  }

  if (layout === 1) {
    // Full dark slide with center content and ring chart
    return (
      <svg {...svgProps}>
        <defs>
          <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0d274d" /><stop offset="100%" stopColor="#041c32" />
          </linearGradient>
        </defs>
        <rect width={width} height={height} fill={`url(#${uid}bg)`} />
        <rect x={0} y={0} width={width} height={s(3)} fill="#00bceb" />
        <text x={s(20)} y={s(20)} fontSize={f(5.5)} fill="#fff" fontFamily="Inter, sans-serif" letterSpacing={s(2)}>USE CASE</text>
        <text x={s(20)} y={s(42)} fontSize={f(11)} fontWeight="500" fill="#fff" fontFamily="Inter, sans-serif">{slide.title.slice(0, 35)}</text>
        <text x={s(20)} y={s(56)} fontSize={f(6.5)} fill="#fff" fontFamily="Inter, sans-serif">{slide.subtitle.slice(0, 48)}</text>
        {/* Ring/donut chart */}
        <circle cx={s(250)} cy={s(90)} r={s(35)} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={s(8)} />
        <circle cx={s(250)} cy={s(90)} r={s(35)} fill="none" stroke="#00bceb" strokeWidth={s(8)} strokeDasharray={`${s(120)} ${s(100)}`} strokeLinecap="round" transform={`rotate(-90 ${s(250)} ${s(90)})`} />
        <text x={s(250)} y={s(88)} fontSize={f(14)} fontWeight="600" fill="#00bceb" fontFamily="Inter, sans-serif" textAnchor="middle">{["72%", "95%", "4.1x", "60%"][(seed) % 4]}</text>
        <text x={s(250)} y={s(100)} fontSize={f(5)} fill="#fff" fontFamily="Inter, sans-serif" textAnchor="middle">IMPROVEMENT</text>
        {/* Left bullets */}
        {[0, 1, 2].map(i => (
          <g key={i}>
            <rect x={s(20)} y={s(72 + i * 20)} width={s(3)} height={s(12)} rx={s(1.5)} fill="#00bceb" opacity={0.7 - i * 0.2} />
            <rect x={s(30)} y={s(74 + i * 20)} width={s(80 - i * 10)} height={s(2.5)} rx={s(1)} fill="rgba(255,255,255,0.18)" />
            <rect x={s(30)} y={s(80 + i * 20)} width={s(55 - i * 8)} height={s(2)} rx={s(1)} fill="rgba(255,255,255,0.1)" />
          </g>
        ))}
        <rect x={0} y={height - s(2)} width={width} height={s(2)} fill="#00bceb" opacity={0.5} />
        <g transform={`translate(${width - s(40)}, ${height - s(16)}) scale(${s(0.45)})`}><path d={ciscoBridge} fill="rgba(255,255,255,0.3)" /></g>
      </svg>
    );
  }

  if (layout === 2) {
    // Light slide with colored sidebar and icons
    const acc = ["#049fd9", "#6cc04a", "#f5a623", "#e74c3c"][(seed * 3) % 4];
    return (
      <svg {...svgProps}>
        <rect width={width} height={height} fill="#fff" />
        <rect x={0} y={0} width={s(8)} height={height} fill={acc} />
        <text x={s(20)} y={s(18)} fontSize={f(5.5)} fill="#222" fontFamily="Inter, sans-serif" letterSpacing={s(1.5)}>USE CASE</text>
        <text x={s(20)} y={s(38)} fontSize={f(11)} fontWeight="500" fill="#171717" fontFamily="Inter, sans-serif">{slide.title.slice(0, 35)}</text>
        <text x={s(20)} y={s(52)} fontSize={f(6.5)} fill="#222" fontFamily="Inter, sans-serif">{slide.subtitle.slice(0, 50)}</text>
        {/* Three icon cards */}
        {[0, 1, 2].map(i => (
          <g key={i}>
            <rect x={s(20 + i * 97)} y={s(64)} width={s(88)} height={s(78)} rx={s(3)} fill="#f8f9fa" stroke="#e8eaed" strokeWidth={s(0.5)} />
            <circle cx={s(44 + i * 97)} cy={s(82)} r={s(8)} fill={acc} opacity={0.12} />
            <circle cx={s(44 + i * 97)} cy={s(82)} r={s(4)} fill={acc} opacity={0.5} />
            <rect x={s(30 + i * 97)} y={s(98)} width={s(60)} height={s(3)} rx={s(1.5)} fill="#dde1e5" />
            <rect x={s(30 + i * 97)} y={s(106)} width={s(50)} height={s(2.5)} rx={s(1)} fill="#e8eaed" />
            <rect x={s(30 + i * 97)} y={s(113)} width={s(65)} height={s(2.5)} rx={s(1)} fill="#e8eaed" />
            <rect x={s(30 + i * 97)} y={s(120)} width={s(40)} height={s(2.5)} rx={s(1)} fill="#e8eaed" />
            <rect x={s(30 + i * 97)} y={s(130)} width={s(50)} height={s(6)} rx={s(1.5)} fill={acc} opacity={0.15} />
          </g>
        ))}
        <rect x={0} y={height - s(14)} width={width} height={s(14)} fill="#f5f5f5" />
        <g transform={`translate(${width - s(40)}, ${height - s(11)}) scale(${s(0.4)})`}><path d={ciscoBridge} fill="#ccc" /></g>
      </svg>
    );
  }

  // layout === 3: Gradient slide with timeline/process
  return (
    <svg {...svgProps}>
      <defs>
        <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor={pal.bg1} /><stop offset="100%" stopColor={pal.bg2} />
        </linearGradient>
      </defs>
      <rect width={width} height={height} fill={`url(#${uid}bg)`} />
      <text x={s(20)} y={s(18)} fontSize={f(5.5)} fill={pal.textSoft} fontFamily="Inter, sans-serif" letterSpacing={s(2)}>USE CASE</text>
      <text x={s(20)} y={s(38)} fontSize={f(11)} fontWeight="500" fill={pal.text} fontFamily="Inter, sans-serif">{slide.title.slice(0, 38)}</text>
      <text x={s(20)} y={s(52)} fontSize={f(6.5)} fill={pal.textSoft} fontFamily="Inter, sans-serif">{slide.subtitle.slice(0, 50)}</text>
      {/* Process / timeline */}
      <line x1={s(40)} y1={s(78)} x2={s(280)} y2={s(78)} stroke={pal.accent} strokeWidth={s(1)} opacity={0.3} />
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <circle cx={s(55 + i * 65)} cy={s(78)} r={s(10)} fill={pal.panel} />
          <circle cx={s(55 + i * 65)} cy={s(78)} r={s(5)} fill={pal.accent} opacity={0.7 - i * 0.12} />
          <rect x={s(38 + i * 65)} y={s(94)} width={s(35)} height={s(2.5)} rx={s(1)} fill={pal.panel} />
          <rect x={s(42 + i * 65)} y={s(100)} width={s(26)} height={s(2)} rx={s(1)} fill={pal.panel} opacity={0.6} />
        </g>
      ))}
      {/* Bottom detail area */}
      <rect x={s(20)} y={s(115)} width={s(280)} height={s(35)} rx={s(3)} fill={pal.panel} />
      {[0, 1].map(i => (
        <g key={i}>
          <rect x={s(30 + i * 145)} y={s(122)} width={s(100)} height={s(2.5)} rx={s(1)} fill={isDarkSlide ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)"} />
          <rect x={s(30 + i * 145)} y={s(128)} width={s(75)} height={s(2)} rx={s(1)} fill={isDarkSlide ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"} />
          <rect x={s(30 + i * 145)} y={s(134)} width={s(85)} height={s(2)} rx={s(1)} fill={isDarkSlide ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"} />
          <rect x={s(30 + i * 145)} y={s(140)} width={s(60)} height={s(2)} rx={s(1)} fill={isDarkSlide ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)"} />
        </g>
      ))}
      <rect x={0} y={height - s(2)} width={width} height={s(2)} fill={pal.accent} opacity={0.5} />
      <g transform={`translate(${width - s(40)}, ${height - s(16)}) scale(${s(0.45)})`}><path d={ciscoBridge} fill={pal.textSoft} /></g>
    </svg>
  );
}

