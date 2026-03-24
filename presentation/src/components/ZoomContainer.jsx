import { useState, useEffect, useRef } from "react";

export function ZoomContainer({ children, zoomLevel = 2.5, duration = 400 }) {
  const [zoom, setZoom] = useState(null); // { x, y } or null
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const mousePos = useRef({ x: 50, y: 50 });
  const containerRef = useRef(null);

  // Track mouse position as % of viewport
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Z to zoom in at cursor, Escape to zoom out
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "z" && !e.metaKey && !e.ctrlKey) {
        if (zoom) {
          setZoom(null);
        } else {
          const pos = { ...mousePos.current };
          setOrigin(pos);
          setZoom(pos);
        }
      }
      if (e.key === "Escape" && zoom) {
        setZoom(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [zoom]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        outline: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transition: `transform ${duration}ms cubic-bezier(0.42, 0, 0.58, 1)`,
          transformOrigin: `${origin.x}% ${origin.y}%`,
          transform: zoom ? `scale(${zoomLevel})` : "scale(1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
