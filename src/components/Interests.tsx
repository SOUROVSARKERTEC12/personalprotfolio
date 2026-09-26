import React from "react";
import { Trophy, Bike, Plane, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Interests() {
  const iconMap: Record<string, React.ReactNode> = {
    cricket: <Trophy size={28} style={{ color: "var(--accent-warning)" }} />,
    bike: <Bike size={28} style={{ color: "var(--accent-primary)" }} />,
    travel: <Plane size={28} style={{ color: "var(--accent-tertiary)" }} />,
  };

  return (
    <section id="interests" className="section-wrapper">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Heart size={16} />
            Beyond The Code
          </span>
          <h2 className="section-title">
            Interests & <span className="gradient-text">Life Outside Terminal</span>
          </h2>
          <p className="section-description">
            Activities that keep focus sharp, promote tactical discipline, and inspire fresh creative energy.
          </p>
        </div>

        {/* Interests Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.75rem" }}>
          {PORTFOLIO_DATA.interests.map((interest, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "clamp(1.25rem, 3.5vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
                overflow: "hidden",
                minWidth: 0,
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {iconMap[interest.icon]}
              </div>

              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                  {interest.title}
                </h3>
                <div style={{ fontSize: "0.82rem", color: "var(--accent-primary)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                  {interest.tagline}
                </div>
              </div>

              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.65" }}>
                {interest.description}
              </p>

              <div
                style={{
                  position: "absolute",
                  bottom: "-25px",
                  right: "-25px",
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background: "var(--gradient-brand)",
                  opacity: 0.08,
                  pointerEvents: "none",
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
