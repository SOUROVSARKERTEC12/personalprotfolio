"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Play,
  RotateCw,
  Copy,
  Check
} from "lucide-react";
import { Github, Linkedin, StackOverflow } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

type EndpointKey = "developer" | "auth" | "health";

const MOCK_ENDPOINTS: Record<EndpointKey, {
  method: "GET" | "POST";
  url: string;
  payload?: object;
  response: object;
  status: number;
  time: string;
}> = {
  developer: {
    method: "GET",
    url: "/api/v1/developer/sourov",
    response: {
      name: "Sourov Sarkar",
      role: "Backend Developer",
      currentCompany: "Dhaka Post",
      location: "Dhaka, Bangladesh",
      specialization: ["NestJS", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Microservices"],
      architecture: "Clean Architecture & Modular Microservices",
      availability: "Senior & High-Impact Backend Roles",
      status: "Active 🟢",
    },
    status: 200,
    time: "14ms",
  },
  auth: {
    method: "POST",
    url: "/api/v1/auth/mfa/verify",
    payload: {
      userId: "usr_flyfar_882",
      provider: "GoogleAuthenticator",
      token: "849201",
    },
    response: {
      authenticated: true,
      tokenType: "Bearer",
      accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI...",
      roles: ["BackendEngineer", "Admin"],
      mfaVerified: true,
      expiresIn: "3600s",
    },
    status: 201,
    time: "24ms",
  },
  health: {
    method: "GET",
    url: "/system/metrics/health",
    response: {
      service: "sourov-backend-cluster",
      status: "HEALTHY",
      uptime: "99.98%",
      databasePools: {
        postgres: "connected (5/20 active)",
        redisCache: "online (latency: 1.2ms)",
        mongoCluster: "replicaset synced"
      },
      memoryUsage: "142MB / 512MB",
    },
    status: 200,
    time: "8ms",
  },
};

export default function Hero({ onOpenResume }: HeroProps) {
  const [selectedEndpoint, setSelectedEndpoint] = useState<EndpointKey>("developer");
  const [isRunning, setIsRunning] = useState(false);
  const [copiedCurl, setCopiedCurl] = useState(false);

  const currentEndpoint = MOCK_ENDPOINTS[selectedEndpoint];

  const handleRunRequest = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 400);
  };

  const copyCurl = () => {
    const curlCommand = `curl -X ${currentEndpoint.method} "https://api.sourov.dev${currentEndpoint.url}" \\
  -H "Authorization: Bearer mock_jwt_token"`;
    navigator.clipboard.writeText(curlCommand);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  return (
    <section id="hero" className="section-wrapper" style={{ paddingTop: "6.5rem", minHeight: "92vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3.5rem", alignItems: "center" }} className="hero-grid">

          {/* Left Column: Introduction & Pitch */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", minWidth: 0 }}>

            {/* Status Pill */}
            {/* <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.8rem" }}>
              <div
                className="badge"
                style={{
                  background: "rgba(16, 185, 129, 0.12)",
                  borderColor: "rgba(16, 185, 129, 0.35)",
                  color: "var(--accent-success)",
                  fontSize: "0.82rem",
                  padding: "0.35rem 0.9rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-success)",
                    boxShadow: "0 0 10px var(--accent-success)",
                    display: "inline-block",
                  }}
                  className="animate-pulse-glow"
                />
                <span>Available for Backend Roles</span>
              </div>
            </div> */}

            {/* Main Headline */}
            <div>
              <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--accent-primary)", marginBottom: "0.5rem", letterSpacing: "0.02em" }}>
                Hi, I&apos;m Sourov Sarkar 👋
              </div>
              <h1
                style={{
                  fontSize: "clamp(1.85rem, 5vw, 3.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.035em",
                  marginBottom: "1rem",
                }}
              >
                Engineering Scalable, High-Performance{" "}
                <span className="gradient-text">Backend Systems</span>
              </h1>
              <p
                style={{
                  fontSize: "1.12rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  maxWidth: "580px",
                }}
              >
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>

            {/* Call to Actions */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", paddingTop: "0.5rem" }}>
              <a href="#projects" className="btn-primary" id="hero-projects-btn">
                <span>View Projects</span>
                <ArrowRight size={17} />
              </a>

              <a href="#contact" className="btn-secondary" id="hero-contact-btn">
                <Mail size={17} />
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="btn-secondary"
                style={{ borderStyle: "dashed" }}
              >
                <Download size={17} />
                <span>Resume PDF</span>
              </button>
            </div>

            {/* Social Links & Trust Indicators */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", paddingTop: "0.8rem" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Find me on:</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent-primary)";
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <Github size={18} />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent-primary)";
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.stackoverflow}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Stack Overflow Profile"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent-primary)";
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <StackOverflow size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Backend Terminal */}
          <div style={{ width: "100%", maxWidth: "520px", justifySelf: "end", margin: "0 auto", minWidth: 0 }}>
            {/* Interactive Backend REST Playground / Terminal */}
            <div
              className="glass-card"
              style={{
                backgroundColor: "var(--code-bg)",
                borderColor: "var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                width: "100%",
                maxWidth: "520px",
                height: "420px",
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
              }}
            >
              {/* Terminal Window Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 1rem",
                  backgroundColor: "var(--code-header)",
                  borderBottom: "1px solid var(--border-subtle)",
                  flexShrink: 0,
                  gap: "0.5rem",
                  minWidth: 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", minWidth: 0, overflow: "hidden" }}>
                  <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#ef4444", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#f59e0b", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block", flexShrink: 0 }} />
                  <span className="terminal-host" style={{ marginLeft: "0.5rem", fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    api.sourov.dev:4000
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexShrink: 0 }}>
                  <button
                    type="button"
                    onClick={copyCurl}
                    title="Copy cURL command"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.72rem",
                      color: copiedCurl ? "var(--accent-success)" : "var(--text-muted)",
                      padding: "0.25rem 0.45rem",
                      borderRadius: "4px",
                      background: "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    {copiedCurl ? <Check size={12} /> : <Copy size={12} />}
                    <span className="terminal-action-text">{copiedCurl ? "Copied" : "cURL"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleRunRequest}
                    disabled={isRunning}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.72rem",
                      color: "#ffffff",
                      padding: "0.25rem 0.55rem",
                      borderRadius: "4px",
                      background: "var(--accent-primary)",
                      fontWeight: 600,
                    }}
                  >
                    {isRunning ? <RotateCw size={12} className="animate-spin" /> : <Play size={12} fill="#fff" />}
                    <span>{isRunning ? "Running" : "Execute"}</span>
                  </button>
                </div>
              </div>

              {/* Endpoint Tabs */}
              <div
                className="terminal-tabs"
                style={{
                  display: "flex",
                  borderBottom: "1px solid var(--border-subtle)",
                  backgroundColor: "rgba(0,0,0,0.2)",
                  overflowX: "auto",
                  flexShrink: 0,
                  width: "100%",
                  minWidth: 0,
                }}
              >
                {(
                  [
                    { key: "developer", label: "GET /developer", badge: "200" },
                    { key: "auth", label: "POST /auth/mfa", badge: "201" },
                    { key: "health", label: "GET /health", badge: "Live" },
                  ] as const
                ).map((tab) => {
                  const isActive = selectedEndpoint === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setSelectedEndpoint(tab.key)}
                      style={{
                        padding: "0.55rem 0.85rem",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        color: isActive ? "var(--accent-primary)" : "var(--text-muted)",
                        borderBottom: isActive ? "2px solid var(--accent-primary)" : "2px solid transparent",
                        backgroundColor: isActive ? "rgba(255, 255, 255, 0.03)" : "transparent",
                        whiteSpace: "nowrap",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        transition: "all 0.15s ease",
                        flexShrink: 0,
                      }}
                    >
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Terminal Content Body with Fixed Height & Vertical Scroll */}
              <div
                className="hero-terminal-body"
                style={{
                  padding: "1rem 1.25rem",
                  flex: 1,
                  minHeight: 0,
                  minWidth: 0,
                  overflowY: "auto",
                  overflowX: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255, 255, 255, 0.2) transparent",
                  width: "100%",
                }}
              >

                {/* Method & URL header line */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.4rem", flexShrink: 0, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "var(--font-mono)", fontSize: "0.78rem", minWidth: 0, overflow: "hidden" }}>
                    <span
                      style={{
                        padding: "0.15rem 0.4rem",
                        borderRadius: "4px",
                        fontWeight: 700,
                        backgroundColor: currentEndpoint.method === "GET" ? "rgba(16, 185, 129, 0.2)" : "rgba(245, 158, 11, 0.2)",
                        color: currentEndpoint.method === "GET" ? "var(--accent-success)" : "var(--accent-warning)",
                        flexShrink: 0,
                      }}
                    >
                      {currentEndpoint.method}
                    </span>
                    <span style={{ color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{currentEndpoint.url}</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.72rem", flexShrink: 0 }}>
                    <span style={{ color: "var(--accent-success)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--accent-success)" }} />
                      HTTP {currentEndpoint.status} OK
                    </span>
                    <span style={{ color: "var(--text-muted)" }}>• {currentEndpoint.time}</span>
                  </div>
                </div>

                {/* Optional Request Payload preview for POST */}
                {currentEndpoint.payload && (
                  <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginTop: "0.2rem", flexShrink: 0, minWidth: 0 }}>
                    <span style={{ color: "var(--accent-warning)" }}>{"// Request Body (Payload):"}</span>
                    <pre style={{ color: "var(--text-secondary)", marginTop: "0.25rem", fontSize: "0.76rem", lineHeight: "1.5", overflowX: "auto", maxWidth: "100%", minWidth: 0 }}>
                      <code style={{ display: "block", minWidth: 0 }}>{JSON.stringify(currentEndpoint.payload, null, 2)}</code>
                    </pre>
                  </div>
                )}

                {/* Response Output */}
                <div style={{ marginTop: "0.2rem", minWidth: 0, width: "100%", overflow: "hidden" }}>
                  <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginBottom: "0.4rem" }}>
                    <span style={{ color: "var(--terminal-green)" }}>{"// Server Response:"}</span>
                  </div>
                  <pre
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.76rem",
                      color: "var(--text-primary)",
                      overflowX: "auto",
                      lineHeight: "1.55",
                      margin: 0,
                      maxWidth: "100%",
                      width: "100%",
                      minWidth: 0,
                    }}
                  >
                    <code style={{ display: "block", minWidth: 0 }}>{JSON.stringify(currentEndpoint.response, null, 2)}</code>
                  </pre>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr 520px !important;
          }
        }
        @media (max-width: 600px) {
          .terminal-host {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .terminal-action-text {
            display: none !important;
          }
          .hero-terminal-body {
            padding: 0.85rem 0.75rem !important;
          }
        }
        .terminal-tabs {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        .terminal-tabs::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
