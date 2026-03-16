import { useState } from "react";
import { C } from "../theme";
import { buyers } from "../data/buyers";
import { CiscoLogo } from "../components/icons/CiscoLogo";
import { IconCompany, IconSolution, IconInitiative, IconUseCase, productIcons } from "../components/icons/PageIcons";
import { Connector, SplitConnector } from "../components/shared/Connector";
import { TierLabel } from "../components/shared/TierLabel";
import { PageShell } from "../components/shared/PageShell";

export function BuyersPage() {
  const [activeProduct, setActiveProduct] = useState("networking");
  const [expandCompany, setExpandCompany] = useState(false);
  const [expandSolution, setExpandSolution] = useState(false);
  const [expandedRole, setExpandedRole] = useState({});

  const product = buyers.products.find(p => p.id === activeProduct);
  const toggleRole = (id) => setExpandedRole(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <PageShell title="Buyer Personas" subtitle="Audience & Stakeholder Map">
      {/* ── TIER 1: ENTERPRISE LEADERSHIP ── */}
      <div style={{ marginBottom: 6 }}>
        <TierLabel icon={<IconCompany size={16} />}>Company-Level Stakeholders</TierLabel>
      </div>
      <div
        className="card"
        onClick={() => setExpandCompany(!expandCompany)}
        style={{
          padding: "28px 32px",
          border: `1px solid ${C.border}`,
          borderRadius: 2,
          background: C.bg,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 300, letterSpacing: "-0.5px", marginBottom: 6 }}>
              {buyers.company.headline}
            </h2>
            <p style={{ fontSize: 14, color: C.textSecondary, fontWeight: 300 }}>
              {buyers.company.tagline}
            </p>
          </div>
          <span style={{
            fontSize: 20, color: C.textTertiary, fontWeight: 200,
            transform: expandCompany ? "rotate(180deg)" : "none",
            transition: "transform 0.3s", display: "inline-block",
          }}>&#8964;</span>
        </div>
        {expandCompany && (
          <div style={{ marginTop: 20, paddingTop: 20, borderTop: `1px solid ${C.borderLight}` }}>
            {buyers.company.roles.map((r, i) => (
              <div key={i} style={{ marginBottom: i < buyers.company.roles.length - 1 ? 16 : 0 }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: C.text, marginBottom: 4 }}>{r.title}</p>
                <p style={{ fontSize: 13, color: C.textSecondary, fontWeight: 300, lineHeight: 1.6 }}>
                  <span style={{ color: C.textTertiary }}>Focus:</span> {r.focus}
                </p>
                <p style={{ fontSize: 13, color: C.textSecondary, fontWeight: 300, lineHeight: 1.6 }}>
                  <span style={{ color: C.textTertiary }}>Priority:</span> {r.priority}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Connector />

      {/* ── TIER 2: WORKPLACE DECISION MAKERS ── */}
      <div style={{ marginBottom: 6 }}>
        <TierLabel icon={<IconSolution size={16} />}>Solution-Level Stakeholders</TierLabel>
      </div>
      <div
        className="card"
        onClick={() => setExpandSolution(!expandSolution)}
        style={{
          padding: "28px 32px",
          border: `1px solid ${C.border}`,
          borderRadius: 2,
          background: C.bg,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 300, letterSpacing: "-0.5px", marginBottom: 6 }}>
              {buyers.solutionCategory.headline}
            </h2>
            <p style={{ fontSize: 14, color: C.textSecondary, fontWeight: 300 }}>
              {buyers.solutionCategory.tagline}
            </p>
          </div>
          <span style={{
            fontSize: 20, color: C.textTertiary, fontWeight: 200,
            transform: expandSolution ? "rotate(180deg)" : "none",
            transition: "transform 0.3s", display: "inline-block", flexShrink: 0,
          }}>&#8964;</span>
        </div>
        {expandSolution && (
          <div style={{ marginTop: 20, paddingTop: 20, borderTop: `1px solid ${C.borderLight}` }}>
            {buyers.solutionCategory.roles.map((r, i) => (
              <div key={i} style={{ marginBottom: i < buyers.solutionCategory.roles.length - 1 ? 16 : 0 }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: C.text, marginBottom: 4 }}>{r.title}</p>
                <p style={{ fontSize: 13, color: C.textSecondary, fontWeight: 300, lineHeight: 1.6 }}>
                  <span style={{ color: C.textTertiary }}>Focus:</span> {r.focus}
                </p>
                <p style={{ fontSize: 13, color: C.textSecondary, fontWeight: 300, lineHeight: 1.6 }}>
                  <span style={{ color: C.textTertiary }}>Priority:</span> {r.priority}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <SplitConnector />

      {/* ── TIER 3: PRODUCT-LEVEL BUYERS ── */}
      <div style={{ marginBottom: 8 }}>
        <TierLabel>Product-Level Buyers</TierLabel>
      </div>

      <div style={{
        display: "flex", gap: 0,
        borderBottom: `1px solid ${C.border}`,
        marginBottom: 0,
      }}>
        {buyers.products.map(p => {
          const isActive = activeProduct === p.id;
          const Icon = productIcons[p.id];
          return (
            <button
              key={p.id}
              className="tab"
              onClick={() => setActiveProduct(p.id)}
              style={{
                flex: 1,
                padding: "14px 28px",
                fontSize: 14, fontWeight: isActive ? 500 : 300,
                color: isActive ? C.text : C.textTertiary,
                borderBottom: isActive ? `2px solid ${C.text}` : "2px solid transparent",
                marginBottom: -1,
                fontFamily: "inherit",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
            >
              <Icon size={16} />
              {p.name}
            </button>
          );
        })}
      </div>

      {product && (
        <div style={{
          border: `1px solid ${C.border}`,
          borderTop: "none",
          borderRadius: "0 0 2px 2px",
          background: C.bg,
        }}>
          <div style={{ padding: "32px 32px 28px" }}>
            <p style={{ fontSize: 15, color: C.textSecondary, fontStyle: "italic", fontWeight: 300 }}>
              {product.tagline}
            </p>
          </div>

          <div style={{ height: 1, background: C.borderLight, margin: "0 32px" }} />

          <div style={{ padding: "28px 32px 36px" }}>
            <div style={{ marginBottom: 20 }}>
              <TierLabel icon={<IconInitiative size={14} />}>Key Personas</TierLabel>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: C.border, border: `1px solid ${C.border}`, borderRadius: 2, overflow: "hidden" }}>
              {product.roles.map(role => {
                const isOpen = !!expandedRole[role.id];
                return (
                  <div key={role.id} style={{ background: C.bg, display: "flex", flexDirection: "column" }}>
                    <div
                      className="card"
                      onClick={() => toggleRole(role.id)}
                      style={{
                        padding: "20px 20px 16px",
                        background: C.bg,
                        borderRadius: 0,
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 14, fontWeight: 500, color: C.text, marginBottom: 4, lineHeight: 1.35 }}>
                            {role.title}
                          </p>
                          <p style={{ fontSize: 12, color: C.textTertiary, fontWeight: 300 }}>
                            {role.focus}
                          </p>
                        </div>
                        <span style={{
                          fontSize: 16, color: C.textTertiary, fontWeight: 200, marginLeft: 8,
                          transform: isOpen ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s", display: "inline-block", flexShrink: 0,
                        }}>&#8964;</span>
                      </div>
                      {isOpen && (
                        <div style={{
                          marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.borderLight}`,
                        }}>
                          <p style={{ fontSize: 10, letterSpacing: 2, fontWeight: 500, color: C.textTertiary, textTransform: "uppercase", marginBottom: 6 }}>Priorities</p>
                          {role.priorities.map((p, i) => (
                            <p key={i} style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.7, fontWeight: 300, paddingLeft: 12, position: "relative" }}>
                              <span style={{ position: "absolute", left: 0, color: C.textTertiary }}>·</span>
                              {p}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    <div style={{ borderTop: `1px solid ${C.borderLight}`, flex: 1 }}>
                      <div style={{ padding: "8px 20px 4px", display: "flex", alignItems: "center", gap: 5 }}>
                        <IconUseCase size={11} />
                        <span style={{ fontSize: 9, letterSpacing: 2, fontWeight: 500, color: C.textTertiary, textTransform: "uppercase" }}>
                          Engagement Tips
                        </span>
                      </div>
                      {role.engagementTips.map((tip, i) => (
                        <div key={i} style={{
                          padding: "10px 20px",
                          borderTop: i > 0 ? `1px solid ${C.borderLight}` : "none",
                        }}>
                          <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.5, fontWeight: 300 }}>{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div style={{ marginTop: 48, paddingTop: 24, borderTop: `1px solid ${C.borderLight}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontSize: 12, color: C.textTertiary, fontWeight: 300, lineHeight: 1.6 }}>
          Enterprise Leadership &rarr; Workplace Decision Makers &rarr; Product Buyers &times;2 &rarr; Persona &times;3
        </p>
        <CiscoLogo width={72} style={{ filter: C.logoFilter }} />
      </div>
    </PageShell>
  );
}

