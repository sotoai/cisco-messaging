import { C } from "../../theme";

export function Connector() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "6px 0" }}>
      <div style={{ width: 1, height: 32, background: C.border }} />
    </div>
  );
}

export function SplitConnector() {
  return (
    <div style={{ position: "relative", height: 40 }}>
      <svg width="100%" height="40" preserveAspectRatio="none">
        <line x1="50%" y1="0" x2="50%" y2="14" stroke={C.border} strokeWidth="1" />
        <line x1="25%" y1="14" x2="75%" y2="14" stroke={C.border} strokeWidth="1" />
        {[25, 75].map((p, i) => (
          <line key={i} x1={`${p}%`} y1="14" x2={`${p}%`} y2="40" stroke={C.border} strokeWidth="1" />
        ))}
      </svg>
    </div>
  );
}
