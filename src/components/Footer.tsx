import { Terminal } from "lucide-react";

export default function Footer() {
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
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.85rem" }}>
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
          <span style={{ fontSize: "1.2rem", fontWeight: 800 }}>Sourov.dev</span>
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
          © {new Date().getFullYear()} Sourov Sarkar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
