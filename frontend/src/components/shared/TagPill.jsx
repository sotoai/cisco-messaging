import { C } from "../../theme";

export function TagPill({ label, isActive, onClick, small }) {
  return (
    <span
      onClick={onClick}
      style={{
        display: "inline-block", fontSize: small ? 10 : 11, padding: small ? "2px 8px" : "4px 12px",
        border: `1px solid ${isActive ? C.text : C.border}`, borderRadius: 100,
        background: isActive ? C.text : "transparent", color: isActive ? C.bg : C.textSecondary,
        cursor: onClick ? "pointer" : "default", transition: "all 0.15s ease",
        whiteSpace: "nowrap", fontWeight: 400,
      }}
    >
      {label}
    </span>
  );
}
