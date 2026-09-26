import React from "react";
import { 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Database, 
  Zap, 
  Code2, 
  CheckCircle2 
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: <Zap size={24} style={{ color: "var(--accent-primary)" }} />,
      title: "Performance & Scalability",
      description:
        "Designing non-blocking event-driven backends with Node.js and NestJS. Optimizing database connection pools, indexing hot query paths, and minimizing latency.",
    },
    {
      icon: <ShieldCheck size={24} style={{ color: "var(--accent-secondary)" }} />,
      title: "MFA & Zero-Trust Security",
      description:
        "Building production-grade multi-factor authentication (Google & Microsoft Authenticator, TOTP), OAuth2 federated logins (Apple, Google, Facebook), and role-based access control (RBAC).",
    },
    {
      icon: <Layers size={24} style={{ color: "var(--accent-tertiary)" }} />,
      title: "Clean Modular Architecture",
      description:
        "Enforcing strict separation of concerns with NestJS modules, dependency injection, custom decorators, validation pipes, and domain-driven design principles.",
    },
    {
      icon: <Database size={24} style={{ color: "var(--accent-success)" }} />,
      title: "Relational & Document Databases",
      description:
        "Proficient in PostgreSQL, MySQL, MongoDB, and SQLite. Leveraging Prisma ORM and TypeORM for type-safe schema migrations, relationships, and transactional integrity.",
    },
  ];

  return (
    <section id="about" className="section-wrapper" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Cpu size={16} />
            Engineering Philosophy
          </span>
          <h2 className="section-title">
            Architecting Resilient Backends with <span className="gradient-text">Clean Code</span>
          </h2>
          <p className="section-description">
            Turning complex business requirements into high-throughput, maintainable, and secure server-side services.
          </p>
        </div>

        {/* Bio Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", marginBottom: "3.5rem" }} className="about-bio-grid">
          
          {/* Main Bio Card */}
          <div className="glass-card" style={{ padding: "clamp(1.25rem, 3.5vw, 2.25rem)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "var(--gradient-brand)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                <Code2 size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>About Sourov Sarkar</h3>
                <span style={{ fontSize: "0.85rem", color: "var(--accent-primary)", fontWeight: 500 }}>
                  Backend Developer & Scalable API Architect
                </span>
              </div>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.75", marginBottom: "1rem" }}>
              {PORTFOLIO_DATA.personal.bio}
            </p>

            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.75" }}>
              {PORTFOLIO_DATA.personal.extendedBio}
            </p>

            {/* Core Values checklist */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                marginTop: "1.75rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              {[
                "Strict Type Safety with TypeScript",
                "Idempotent & RESTful API Design",
                "Zero-Trust MFA & RBAC Protection",
                "Optimized SQL Queries & Indexing",
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--accent-success)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Pillars of Architecture */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1.5rem" }}>
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "clamp(1.25rem, 3vw, 1.75rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                minWidth: 0,
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {pillar.icon}
              </div>

              <div style={{ minWidth: 0 }}>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>{pillar.title}</h4>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
            gap: "1.25rem",
            marginTop: "3rem",
          }}
        >
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "1.25rem 0.75rem",
                textAlign: "center",
                background: "var(--bg-card)",
                minWidth: 0,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(1.25rem, 3.5vw, 1.85rem)",
                  fontWeight: 800,
                  fontFamily: "var(--font-mono)",
                  marginBottom: "0.3rem",
                  wordBreak: "break-word",
                  lineHeight: "1.2",
                }}
                className="gradient-text"
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
