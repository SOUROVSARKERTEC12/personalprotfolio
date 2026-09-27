"use client";

import React, { useState } from "react";
import {
  Code2,
  Database,
  ShieldCheck,
  Terminal,
  Server,
  Layers,
  Zap,
  Share2,
  Globe,
  FileCode,
  Workflow,
  Boxes,
  KeyRound,
  Fingerprint,
  Lock,
  FileText,
  Atom,
  GitBranch,
  Send
} from "lucide-react";
import { useLanguage } from "@/data/translations";

const deviconMap: Record<string, string> = {
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "NestJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  "Prisma ORM": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "JavaScript (ES6+)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Git & Version Control": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
};

const skillVectorIconMap: Record<string, React.ReactNode> = {
  "Node.js": <Server size={30} style={{ color: "#22c55e" }} />,
  "NestJS": <Layers size={30} style={{ color: "#e0234e" }} />,
  "Express.js": <Zap size={30} style={{ color: "var(--accent-primary)" }} />,
  "GraphQL": <Share2 size={30} style={{ color: "#e10098" }} />,
  "REST API": <Globe size={30} style={{ color: "#06b6d4" }} />,
  "SOAP API": <FileCode size={30} style={{ color: "#f59e0b" }} />,
  "PostgreSQL": <Database size={30} style={{ color: "#336791" }} />,
  "MySQL": <Database size={30} style={{ color: "#00758f" }} />,
  "MongoDB": <Database size={30} style={{ color: "#47a248" }} />,
  "SQLite": <Database size={30} style={{ color: "#003b57" }} />,
  "Prisma ORM": <Workflow size={30} style={{ color: "var(--accent-primary)" }} />,
  "TypeORM": <Boxes size={30} style={{ color: "#f97316" }} />,
  "JWT & Stateless Auth": <KeyRound size={30} style={{ color: "#d946ef" }} />,
  "Multi-Factor Auth (MFA)": <ShieldCheck size={30} style={{ color: "#10b981" }} />,
  "OAuth 2.0 Identity": <Fingerprint size={30} style={{ color: "#06b6d4" }} />,
  "Role-Based Access (RBAC)": <Lock size={30} style={{ color: "#f59e0b" }} />,
  "Clean Architecture": <Layers size={30} style={{ color: "#8b5cf6" }} />,
  "API Documentation": <FileText size={30} style={{ color: "#3b82f6" }} />,
  "TypeScript": <Code2 size={30} style={{ color: "#3178c6" }} />,
  "JavaScript (ES6+)": <FileCode size={30} style={{ color: "#f7df1e" }} />,
  "React": <Atom size={30} style={{ color: "#61dafb" }} />,
  "Git & Version Control": <GitBranch size={30} style={{ color: "#f05032" }} />,
  "Postman": <Send size={30} style={{ color: "#ff6c37" }} />,
};

function SkillImage({ name }: { name: string }) {
  const [imgError, setImgError] = useState(false);
  const deviconUrl = deviconMap[name];

  if (deviconUrl && !imgError) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={deviconUrl}
        alt={name}
        width={34}
        height={34}
        loading="lazy"
        onError={() => setImgError(true)}
        style={{
          width: "34px",
          height: "34px",
          objectFit: "contain",
          filter: name === "Express.js" ? "invert(1)" : "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
        }}
      />
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {skillVectorIconMap[name] || <Terminal size={30} style={{ color: "var(--accent-primary)" }} />}
    </div>
  );
}

export default function Skills() {
  const { t, data } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  const categoryIcons = [
    <Server key="0" size={18} style={{ color: "var(--accent-primary)" }} />,
    <Database key="1" size={18} style={{ color: "var(--accent-secondary)" }} />,
    <Code2 key="2" size={18} style={{ color: "var(--accent-warning)" }} />,
    <ShieldCheck key="3" size={18} style={{ color: "var(--accent-success)" }} />,
  ];

  const displayedCategories = activeCategoryIndex === null
    ? data.skillCategories
    : data.skillCategories.filter((_, idx) => idx === activeCategoryIndex);

  return (
    <section id="skills" className="section-wrapper" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Terminal size={16} />
            {t.skills.subtitle}
          </span>
          <h2 className="section-title">
            {t.skills.title} <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
          <p className="section-description">
            {t.skills.desc}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          {/* "All" button */}
          <button
            type="button"
            onClick={() => setActiveCategoryIndex(null)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.4rem clamp(0.65rem, 2vw, 1rem)",
              borderRadius: "var(--radius-full)",
              fontSize: "clamp(0.76rem, 2.2vw, 0.84rem)",
              fontWeight: 600,
              backgroundColor: activeCategoryIndex === null ? "var(--accent-primary)" : "var(--bg-card)",
              color: activeCategoryIndex === null ? "#ffffff" : "var(--text-secondary)",
              border: "1px solid",
              borderColor: activeCategoryIndex === null ? "var(--accent-primary)" : "var(--border-subtle)",
              boxShadow: activeCategoryIndex === null ? "0 4px 12px rgba(6, 182, 212, 0.3)" : "none",
              transition: "all 0.2s ease",
              cursor: "pointer",
            }}
          >
            <span>{t.skills.filterAll}</span>
          </button>

          {data.skillCategories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveCategoryIndex(idx)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.4rem clamp(0.65rem, 2vw, 1rem)",
                  borderRadius: "var(--radius-full)",
                  fontSize: "clamp(0.76rem, 2.2vw, 0.84rem)",
                  fontWeight: 600,
                  backgroundColor: isActive ? "var(--accent-primary)" : "var(--bg-card)",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  border: "1px solid",
                  borderColor: isActive ? "var(--accent-primary)" : "var(--border-subtle)",
                  boxShadow: isActive ? "0 4px 12px rgba(6, 182, 212, 0.3)" : "none",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                }}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid - Square Boxes with Image on Top & Name at Bottom */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
            margin: "0 auto",
          }}
        >
          {displayedCategories.map((category) => {
            const categoryIndex = data.skillCategories.findIndex((c) => c.name === category.name);
            return (
              <div
                key={category.name}
                className="glass-card"
                style={{
                  padding: "clamp(1rem, 3vw, 1.5rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.1rem",
                }}
              >
                {/* Category Card Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "0.75rem",
                    borderBottom: "1px solid var(--border-subtle)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {categoryIcons[categoryIndex >= 0 ? categoryIndex : 0]}
                    </div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700 }}>{category.name}</h3>
                  </div>

                  <span
                    style={{
                      fontSize: "0.72rem",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "var(--radius-full)",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                    }}
                  >
                    {category.skills.length}
                  </span>
                </div>

              {/* Square Boxes Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 96px), 1fr))",
                  gap: "0.75rem",
                }}
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card"
                    style={{
                      aspectRatio: "1 / 1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0.75rem 0.4rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-subtle)",
                      textAlign: "center",
                      transition: "all 0.2s ease",
                      cursor: "default",
                      gap: "0.45rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-primary)";
                      e.currentTarget.style.backgroundColor = "var(--bg-tertiary)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 6px 18px rgba(6, 182, 212, 0.16)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                      e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Top: Image / Icon */}
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <SkillImage name={skill.name} />
                    </div>

                    {/* Bottom: Name */}
                    <span
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        lineHeight: "1.2",
                        textAlign: "center",
                        maxWidth: "100%",
                        padding: "0 0.2rem",
                        wordBreak: "break-word",
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        </div>

      </div>
    </section>
  );
}
