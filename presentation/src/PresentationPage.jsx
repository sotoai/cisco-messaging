import { useState, useRef, useCallback, useEffect } from "react";
import { StoryOSLoader } from "./components/StoryOSLoader";
import { ZoomContainer } from "./components/ZoomContainer";

/*
  Phases:
  1. "video"    → video plays; loader starts 1s before end, black fade covers artifacts
  2. "loader"   → solid black bg, loader holds until user clicks
  3. "reveal"   → loader animates out, black fades to reveal live app iframe
  4. "live"     → app fully visible, interactive with zoom
*/

// The StoryOS app running on the frontend dev server
const APP_URL = "http://localhost:5173/StoryOS/#embedded";

const FADE_LEAD = 1.0;

export function PresentationPage() {
  const [phase, setPhase] = useState("video");
  const [videoFade, setVideoFade] = useState(0);
  const [loaderEarly, setLoaderEarly] = useState(false);
  const [loaderFading, setLoaderFading] = useState(false);
  const videoRef = useRef(null);

  // Track video time to trigger early fade + loader
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || phase !== "video") return;
    const remaining = video.duration - video.currentTime;
    if (remaining <= FADE_LEAD) {
      const fadeProgress = 1 - remaining / FADE_LEAD;
      setVideoFade(fadeProgress);
      if (!loaderEarly) setLoaderEarly(true);
    }
  }, [phase, loaderEarly]);

  const handleVideoEnded = useCallback(() => {
    setVideoFade(1);
    setPhase("loader");
  }, []);

  // Click to dismiss loader and reveal app simultaneously
  const handleLoaderClick = useCallback(() => {
    if (phase !== "loader") return;
    setLoaderFading(true);
    setPhase("reveal");
  }, [phase]);

  // When the loader exit animation completes, go to live
  const handleExitComplete = useCallback(() => {
    setPhase("live");
    setLoaderFading(false);
    setLoaderEarly(false);
  }, []);

  // Keyboard: press R to restart, space/enter to dismiss loader
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "r" && e.metaKey) return;
      if (e.key === "r" && phase === "live") {
        setPhase("video");
        setVideoFade(0);
        setLoaderEarly(false);
        setLoaderFading(false);
      }
      if ((e.key === " " || e.key === "Enter") && phase === "loader") {
        handleLoaderClick();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [phase, handleLoaderClick]);

  const showVideo = phase === "video";
  const showLoader = phase === "loader" || phase === "reveal" || loaderEarly;
  const showApp = phase === "reveal" || phase === "live";

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
        fontFamily: "'Space Grotesk', -apple-system, sans-serif",
      }}
    >
      {/* Phase 1: Video */}
      {showVideo && (
        <video
          ref={videoRef}
          src="/presentation-intro.mp4"
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Black fade overlay — covers video artifacts at the end */}
      {showVideo && videoFade > 0 && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "#000",
          opacity: videoFade,
          zIndex: 2,
          pointerEvents: "none",
        }} />
      )}

      {/* App layer — iframe always rendered, hidden until reveal for seamless transition */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          visibility: showApp ? "visible" : "hidden",
        }}
      >
        <ZoomContainer>
          <iframe
            src={APP_URL}
            title="StoryOS App"
            style={{
              width: "100vw",
              height: "100vh",
              border: "none",
              display: "block",
            }}
          />
        </ZoomContainer>
      </div>

      {/* Black overlay — fades out to reveal app while loader animates out on top */}
      {(phase === "loader" || phase === "reveal") && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "#000",
          zIndex: 15,
          opacity: loaderFading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
          pointerEvents: phase === "loader" ? "auto" : "none",
          cursor: phase === "loader" ? "pointer" : undefined,
        }}
          onClick={phase === "loader" ? handleLoaderClick : undefined}
        />
      )}

      {/* Loader animation — animates out on top of everything */}
      <StoryOSLoader
        visible={showLoader}
        fading={loaderFading}
        onExitComplete={handleExitComplete}
      />

      {/* Phase indicator (dev only) */}
      <div style={{
        position: "fixed",
        bottom: 12,
        right: 16,
        color: "rgba(255,255,255,0.3)",
        fontSize: 11,
        fontFamily: "monospace",
        zIndex: 100,
        pointerEvents: "none",
      }}>
        {phase} {phase === "loader" && "· click to continue"}
        {phase === "live" && "· press Z to zoom · R to restart"}
      </div>
    </div>
  );
}
