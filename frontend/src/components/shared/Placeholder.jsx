import { C } from "../../theme";

export function Placeholder({ title, description }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      minHeight: "60vh", flexDirection: "column", gap: 12,
    }}>
      <p style={{ fontSize: 20, fontWeight: 300, color: C.text }}>{title}</p>
      <p style={{ fontSize: 14, fontWeight: 300, color: C.textTertiary }}>{description}</p>
    </div>
  );
}
