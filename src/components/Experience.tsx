"use client";

import { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { ExperienceItem } from "@/data/portfolioData";
import { useLanguage } from "@/data/translations";

export default function Experience() {
  const { language, t, data } = useLanguage();
  const experiences = data.experiences;
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.company.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Briefcase size={16} />
            {t.experience.subtitle}
          </span>
          <h2 className="section-title">
            {t.experience.title} <span className="gradient-text">{t.experience.titleHighlight}</span>
          </h2>
          <p className="section-description">
            {t.experience.desc}
          </p>
        </div>

        {/* Company Quick-Filter Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`btn-ghost ${activeTab === "all" ? "badge" : ""}`}
            style={{
              padding: "0.45rem 1.1rem",
              borderRadius: "var(--radius-full)",
              border: activeTab === "all" ? "1px solid var(--accent-primary)" : "1px solid var(--border-subtle)",
              backgroundColor: activeTab === "all" ? "rgba(6, 182, 212, 0.12)" : "var(--bg-secondary)",
              color: activeTab === "all" ? "var(--accent-primary)" : "var(--text-secondary)",
              fontWeight: 600,
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {t.experience.filterAll} ({experiences.length})
          </button>

          {experiences.map((exp) => (
            <button
              key={exp.company}
              type="button"
              onClick={() => setActiveTab(exp.company)}
              style={{
                padding: "0.45rem 1.1rem",
                borderRadius: "var(--radius-full)",
                border: activeTab === exp.company ? "1px solid var(--accent-primary)" : "1px solid var(--border-subtle)",
                backgroundColor: activeTab === exp.company ? "rgba(6, 182, 212, 0.12)" : "var(--bg-secondary)",
                color: activeTab === exp.company ? "var(--accent-primary)" : "var(--text-secondary)",
                fontWeight: 600,
                fontSize: "0.85rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <span>{exp.company}</span>
              {exp.current && (
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-success)",
                    boxShadow: "0 0 6px var(--accent-success)",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Experience Timeline Container */}
        <div style={{ maxWidth: "920px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          
          {filteredExperiences.map((exp: ExperienceItem) => (
            <div 
              key={exp.company}
              className="glass-card" 
              style={{ 
                padding: "2rem", 
                position: "relative", 
                overflow: "hidden",
                border: exp.current ? "1px solid rgba(16, 185, 129, 0.35)" : "1px solid var(--border-subtle)",
                boxShadow: exp.current ? "0 0 25px rgba(16, 185, 129, 0.12)" : "var(--shadow-md)"
              }}
            >
              {/* Active role decorative top accent bar */}
              {exp.current && (
                <div 
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #10b981 0%, #06b6d4 100%)",
                  }}
                />
              )}
              
              {/* Top Company & Role Info */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 800 }}>{exp.role}</h3>
                    
                    {exp.current && (
                      <span
                        className="badge"
                        style={{
                          backgroundColor: "rgba(16, 185, 129, 0.14)",
                          borderColor: "rgba(16, 185, 129, 0.35)",
                          color: "var(--accent-success)",
                          fontWeight: 700,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                        }}
                      >
                        <span 
                          style={{ 
                            width: "6px", 
                            height: "6px", 
                            borderRadius: "50%", 
                            backgroundColor: "var(--accent-success)", 
                            boxShadow: "0 0 6px var(--accent-success)" 
                          }} 
                        />
                        {language === "bn" ? "বর্তমান পদ" : "Current Position"}
                      </span>
                    )}

                    <span
                      className="badge"
                      style={{
                        backgroundColor: "rgba(6, 182, 212, 0.12)",
                        borderColor: "var(--border-accent)",
                        fontSize: "0.72rem",
                      }}
                    >
                      {exp.employmentType || (language === "bn" ? "ফুল-টাইম" : "Full-Time")}
                    </span>
                  </div>

                  <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--accent-primary)" }}>
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Date & Location Pill */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.85rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                    <Calendar size={14} style={{ color: "var(--accent-primary)" }} />
                    <span style={{ fontWeight: 600 }}>{exp.period}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.82rem", color: "var(--text-muted)" }}>
                    <MapPin size={14} style={{ color: "var(--accent-secondary)", flexShrink: 0 }} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Role Summary */}
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.25rem" }}>
                {exp.summary}
              </p>

              {/* Key Highlights Metrics */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.25rem" }}>
                  {exp.highlights.map((hl, hlIdx) => (
                    <div
                      key={hlIdx}
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-subtle)",
                        padding: "0.35rem 0.75rem",
                        borderRadius: "var(--radius-sm)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                      }}
                    >
                      <Sparkles size={13} style={{ color: "var(--accent-primary)" }} />
                      <span style={{ fontSize: "0.74rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em", fontWeight: 600 }}>
                        {hl.label}:
                      </span>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-primary)", fontWeight: 700 }}>
                        {hl.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Detailed Bullet Points */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                {exp.bulletPoints.map((point: string, ptIdx: number) => (
                  <div key={ptIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <ChevronRight size={17} style={{ color: "var(--accent-primary)", marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.92rem", color: "var(--text-primary)", lineHeight: "1.55" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Tags */}
              <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginRight: "0.25rem", fontWeight: 600 }}>
                  {language === "bn" ? "প্রযুক্তি:" : "Stack:"}
                </span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "0.78rem",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--accent-primary)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "6px",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
