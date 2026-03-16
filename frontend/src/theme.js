// ─── PALETTE ───────────────────────────────────────────────────────────────────
export const light = {
  bg: "#ffffff",
  surface: "#fafafa",
  border: "#e5e5e5",
  borderLight: "#f0f0f0",
  text: "#111111",
  textSecondary: "#333333",
  textTertiary: "#666666",
  accent: "#111111",
  accentSoft: "#f5f5f5",
  sidebarBg: "#fafafa",
  logoFilter: "none",
};
export const dark = {
  bg: "#0a0a0a",
  surface: "#141414",
  border: "#262626",
  borderLight: "#1a1a1a",
  text: "#f0f0f0",
  textSecondary: "#cccccc",
  textTertiary: "#999999",
  accent: "#f0f0f0",
  accentSoft: "#1a1a1a",
  sidebarBg: "#0f0f0f",
  logoFilter: "none",
};

export let C = light;

export function setTheme(isDark) {
  C = isDark ? dark : light;
}
