import { C } from "../../theme";
import { TierLabel } from "./TierLabel";

export function PageShell({ title, subtitle, children }) {
  return (
    <div style={{ flex: 1, minHeight: "100vh", overflow: "auto" }}>
      <header style={{
        padding: "52px 64px 44px",
        maxWidth: 1200, margin: "0 auto",
        borderBottom: `1px solid ${C.border}`,
      }}>
        <TierLabel>{subtitle}</TierLabel>
        <h1 style={{
          fontSize: 48, fontWeight: 300, letterSpacing: "-1.5px",
          color: C.text, margin: "12px 0 0", lineHeight: 1.1,
        }}>
          {title}
        </h1>
      </header>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 64px 96px" }}>
        {children}
      </div>
    </div>
  );
}
