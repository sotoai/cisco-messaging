export function CiscoLogo({ width = 80, style = {} }) {
  return <img src={`${import.meta.env.BASE_URL}cisco-logo.svg`} alt="Cisco" style={{ width, height: "auto", ...style }} />;
}
