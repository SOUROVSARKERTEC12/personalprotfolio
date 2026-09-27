"use client";

import React from "react";
import Image from "next/image";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { useLanguage } from "@/data/translations";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { t, data } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(0.5rem, 2.5vw, 1.5rem)",
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "840px",
          height: "90vh",
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-accent)",
          borderRadius: "var(--radius-lg)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "var(--shadow-lg)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.75rem clamp(0.75rem, 2.5vw, 1.5rem)",
            borderBottom: "1px solid var(--border-subtle)",
            backgroundColor: "var(--bg-card)",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0 }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "var(--gradient-brand)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                flexShrink: 0,
              }}
            >
              <FileText size={18} />
            </div>
            <div style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {t.resumeModal.title}
              </h3>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                {t.resumeModal.subtitle}
              </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/sourov-sarkar-resume.pdf`}
              download="Sourov_Sarkar_Backend_Developer_Resume.pdf"
              className="btn-primary"
              style={{
                padding: "0.45rem 0.85rem",
                fontSize: "0.82rem",
              }}
            >
              <Download size={15} />
              <span className="resume-download-text">{t.resumeModal.download}</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label={t.resumeModal.close}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                backgroundColor: "var(--bg-card)",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Preview Body */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1.5rem",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "var(--code-bg)",
          }}
        >
          <div
            style={{
              maxWidth: "680px",
              width: "100%",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/sourov-sarkar-resume.pdf.png"
              alt="Sourov Sarkar Resume Document"
              width={680}
              height={962}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* Footer info bar */}
        <div
          style={{
            padding: "0.75rem 1.5rem",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <span>{t.contact.directEmail}: {data.personal.email}</span>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/sourov-sarkar-resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-primary)", display: "flex", alignItems: "center", gap: "0.3rem" }}
          >
            <span>{t.resumeModal.openNewTab}</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 540px) {
          .resume-download-text {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
