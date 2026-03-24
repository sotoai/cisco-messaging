import { useState, useRef, useCallback, useEffect } from "react";
import { StoryOSLoader } from "./components/StoryOSLoader";
import { ZoomContainer } from "./components/ZoomContainer";

/*
  Phases:
  1. "idle"     → black screen, waiting for Space to begin
  2. "video"    → playing through video sequence (1→2→3)
  3. "loader"   → solid black bg, loader holds until user clicks/space
  4. "reveal"   → loader animates out, black fades to reveal live app iframe
  5. "live"     → app fully visible, interactive with zoom
*/

const VIDEOS = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];
const APP_URL = "http://localhost:5173/cisco-messaging/#embedded";
const FADE_LEAD = 1.0; // seconds before last video ends to start fading

export function PresentationPage() {
  const [phase, setPhase] = useState("idle");
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoFade, setVideoFade] = useState(0);
  const [loaderEarly, setLoaderEarly] = useState(false);
  const [loaderFading, setLoaderFading] = useState(false);
  const videoRef = useRef(null);

  const isLastVideo = videoIndex === VIDEOS.length - 1;

  // Track video time — only fade + show loader on the LAST video
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || phase !== "video") return;
    if (!isLastVideo) return;

    const remaining = video.duration - video.currentTime;
    if (remaining <= FADE_LEAD) {
      const fadeProgress = 1 - remaining / FADE_LEAD;
      setVideoFade(fadeProgress);
      if (!loaderEarly) setLoaderEarly(true);
    }
  }, [phase, isLastVideo, loaderEarly]);

  const handleVideoEnded = useCallback(() => {
    if (isLastVideo) {
      // Last video done → go to loader phase
      setVideoFade(1);
      setPhase("loader");
    } else {
      // Advance to next video
      setVideoIndex((i) => i + 1);
    }
  }, [isLastVideo]);

  // When videoIndex changes, play the new video
  useEffect(() => {
    if (phase === "video" && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [videoIndex, phase]);

  // Click/space to dismiss loader and reveal app
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

  // Keyboard controls
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "r" && e.metaKey) return; // allow browser refresh

      // Space starts the presentation from idle
      if (e.key === " " && phase === "idle") {
        e.preventDefault();
        setPhase("video");
        setVideoIndex(0);
        setVideoFade(0);
        setLoaderEarly(false);
        setLoaderFading(false);
        return;
      }

      // Space/Enter/click advances from loader
      if ((e.key === " " || e.key === "Enter") && phase === "loader") {
        e.preventDefault();
        handleLoaderClick();
        return;
      }

      // R restarts from live
      if (e.key === "r" && phase === "live") {
        setPhase("idle");
        setVideoIndex(0);
        setVideoFade(0);
        setLoaderEarly(false);
        setLoaderFading(false);
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
      {/* Idle: prompt */}
      {phase === "idle" && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}>
          <span style={{
            color: "rgba(255,255,255,0.25)",
            fontSize: 13,
            fontFamily: "monospace",
            letterSpacing: 1,
          }}>
            press space to begin
          </span>
        </div>
      )}

      {/* Video player */}
      {showVideo && (
        <video
          ref={videoRef}
          key={videoIndex}
          src={VIDEOS[videoIndex]}
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

      {/* Black fade overlay — covers video artifacts at end of last video */}
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

      {/* App layer — iframe always rendered, hidden until reveal */}
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

      {/* Black overlay — fades out to reveal app while loader animates out */}
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

      {/* Loader animation */}
      <StoryOSLoader
        visible={showLoader}
        fading={loaderFading}
        onExitComplete={handleExitComplete}
      />

      {/* Phase indicator (dev) */}
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
        {phase === "idle" && "idle · space to start"}
        {phase === "video" && `video ${videoIndex + 1}/${VIDEOS.length}`}
        {phase === "loader" && "loader · click to continue"}
        {phase === "reveal" && "revealing..."}
        {phase === "live" && "live · Z to zoom · R to restart"}
      </div>
    </div>
  );
}
