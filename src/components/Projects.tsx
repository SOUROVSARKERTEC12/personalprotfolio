"use client";

import Link from "next/link";
import { FolderGit2, ExternalLink, CheckCircle2 } from "lucide-react";
import { Github } from "@/components/Icons";
import { useLanguage } from "@/data/translations";

export default function Projects() {
  const { t, data } = useLanguage();

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <FolderGit2 size={16} />
            {t.projects.subtitle}
          </span>
          <h2 className="section-title">
            {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <p className="section-description">
            {t.projects.desc}
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "1.75rem" }}>
          {data.projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card"
              style={{
                padding: "clamp(1.25rem, 3.5vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Category & Date Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span
                  className="badge"
                  style={{
                    backgroundColor: "rgba(6, 182, 212, 0.12)",
                    borderColor: "var(--border-accent)",
                    fontSize: "0.75rem",
                  }}
                >
                  {proj.category}
                </span>

                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  {proj.period}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.3rem" }}>
                {proj.title}
              </h3>
              <div style={{ fontSize: "0.85rem", color: "var(--accent-primary)", fontWeight: 600, marginBottom: "1rem" }}>
                {proj.subtitle}
              </div>

              {/* Description */}
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: "1.65", marginBottom: "1.5rem" }}>
                {proj.description}
              </p>

              {/* Key Features List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.75rem" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {t.projects.keyCapabilities}
                </span>
                {proj.keyFeatures.map((feat, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <CheckCircle2 size={15} style={{ color: "var(--accent-success)", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.84rem", color: "var(--text-primary)" }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "auto", marginBottom: "1.75rem" }}>
                {proj.techStack.map((tech) => (
                  <span key={tech} className="badge-tech" style={{ padding: "0.25rem 0.55rem", borderRadius: "5px" }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer Actions */}
              <Link
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  padding: "0.55rem 1.1rem",
                  fontSize: "0.85rem",
                }}
              >
                <Github size={16} />
                <span>{t.projects.githubRepo}</span>
                <ExternalLink size={13} />
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
