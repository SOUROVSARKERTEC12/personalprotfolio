"use client";

import { Terminal } from "lucide-react";
import { useLanguage } from "@/data/translations";

export default function Footer() {
  const { language, t, data } = useLanguage();
  const currentYear = new Date().getFullYear();
  const yearDisplay = language === "bn"
    ? currentYear.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d, 10)])
    : currentYear.toString();

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "3.5rem 1.5rem 1.5rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Brand */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.5rem" }}>
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              background: "var(--gradient-brand)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
            }}
          >
            <Terminal size={17} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <span style={{ fontSize: "1.2rem", fontWeight: 800 }}>
              {language === "bn" ? "সৌরভ" : "Sourov"}
            </span>
            <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--accent-primary)" }}>
              {language === "bn" ? "প্র্যাক্সিস" : "Praxis"}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            marginBottom: "0.75rem",
            fontWeight: 500,
          }}
        >
          {t.footer.craftTag}
        </div>

        {/* Copyright */}
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
          }}
        >
          © {yearDisplay} {data.personal.name}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
