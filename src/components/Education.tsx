import React from "react";
import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Education() {
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="section-wrapper" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <GraduationCap size={16} />
            Academic Foundations
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-description">
            Strong foundational computer science background providing the theoretical and algorithmic grounding for building scalable distributed software.
          </p>
        </div>

        {/* Education Card */}
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div className="glass-card" style={{ padding: "2.5rem", position: "relative" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "var(--gradient-brand)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    boxShadow: "0 0 20px rgba(6, 182, 212, 0.35)",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={28} />
                </div>

                <div>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 800 }}>{edu.degree}</h3>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--accent-primary)", marginTop: "0.2rem" }}>
                    {edu.institution}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  backgroundColor: "var(--bg-card)",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <Calendar size={15} style={{ color: "var(--accent-primary)" }} />
                <span>{edu.period}</span>
              </div>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
              {edu.description}
            </p>

            {/* Core Coursework & Theoretical Focus */}
            <div style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)" }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.8rem" }}>
                Key Computer Science Principles Mastered:
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.75rem" }}>
                {edu.coreFocus.map((focus, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--accent-success)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.88rem", color: "var(--text-primary)" }}>{focus}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
