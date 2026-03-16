import { C } from "../../theme";

export function TierLabel({ icon, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      {icon}
      <span style={{
        fontSize: 10, letterSpacing: 3, fontWeight: 500,
        color: C.textTertiary, textTransform: "uppercase",
      }}>{children}</span>
    </div>
  );
}
