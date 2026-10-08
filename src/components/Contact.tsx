"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  ExternalLink,
  Check
} from "lucide-react";
import { Github, Linkedin, StackOverflow } from "@/components/Icons";
import { useLanguage } from "@/data/translations";

export default function Contact() {
  const { t, data } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: data.personal.name,
    };

    emailjs.send(
      'service_o53dtnv',
      'template_hau7cja',
      templateParams,
      'afddBdpXUVOhOlJsw'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setLoading(false);
      setFormSubmitted(true);
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setLoading(false);
      // Fallback to mailto link if emailjs fails
      const mailtoUrl = `mailto:${data.personal.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");
    });
  };

  return (
    <section id="contact" className="section-wrapper" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Mail size={16} />
            {t.contact.subtitle}
          </span>
          <h2 className="section-title">
            {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="section-description">
            {t.contact.desc}
          </p>
        </div>

        {/* Contact Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }} className="contact-grid">
          
          {/* Left Column: Direct Info & Social Links in a Single Card */}
          <div
            className="glass-card"
            style={{
              padding: "clamp(1rem, 3vw, 2.25rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.75rem",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
              minWidth: 0,
              width: "100%",
            }}
          >
            {/* Header */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "var(--gradient-brand)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{t.contact.infoTitle}</h3>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                    {t.contact.infoDesc}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Items List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: 0 }}>
              
              {/* Email Redirect Item */}
              <a
                href={`mailto:${data.personal.email}`}
                title={t.contact.directEmail}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.85rem clamp(0.6rem, 2vw, 1.25rem)",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  gap: "0.6rem",
                  minWidth: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-accent)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0, flex: 1, overflow: "hidden" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(6, 182, 212, 0.12)",
                      border: "1px solid var(--border-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-primary)",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1, overflow: "hidden" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                      {t.contact.directEmail}
                    </div>
                    <div style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)", fontWeight: 700, color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {data.personal.email}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8rem",
                    color: "var(--accent-primary)",
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  <span className="contact-action-label">{t.contact.sendEmailAction}</span>
                  <ExternalLink size={14} />
                </div>
              </a>

              {/* Phone / WhatsApp Redirect Item */}
              <a
                href={`https://wa.me/${data.personal.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                title={t.contact.phone}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.85rem clamp(0.6rem, 2vw, 1.25rem)",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  gap: "0.6rem",
                  minWidth: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.4)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0, flex: 1, overflow: "hidden" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(16, 185, 129, 0.12)",
                      border: "1px solid rgba(16, 185, 129, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-success)",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1, overflow: "hidden" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                      {t.contact.phone}
                    </div>
                    <div style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)", fontWeight: 700, color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {data.personal.phone}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8rem",
                    color: "var(--accent-success)",
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  <span className="contact-action-label">{t.contact.chatWhatsapp}</span>
                  <ExternalLink size={14} />
                </div>
              </a>

              {/* Location Item */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.85rem clamp(0.6rem, 2vw, 1.25rem)",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    background: "rgba(99, 102, 241, 0.12)",
                    border: "1px solid rgba(99, 102, 241, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-secondary)",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div style={{ minWidth: 0, flex: 1, overflow: "hidden" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>
                    {t.contact.location}
                  </div>
                  <div style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)", fontWeight: 700, color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {data.personal.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links inside the same card */}
            <div style={{ paddingTop: "0.5rem", minWidth: 0 }}>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>
                {t.contact.socials}
              </div>
              <div className="contact-social-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }}>
                <a
                  href={data.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.75rem 0.35rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.35rem",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    minWidth: 0,
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                    e.currentTarget.style.color = "var(--accent-primary)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.color = "var(--text-primary)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <Linkedin size={18} style={{ color: "var(--accent-primary)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>LinkedIn</span>
                </a>

                <a
                  href={data.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.75rem 0.35rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.35rem",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    minWidth: 0,
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-secondary)";
                    e.currentTarget.style.color = "var(--accent-secondary)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.color = "var(--text-primary)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <Github size={18} style={{ color: "var(--accent-secondary)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>GitHub</span>
                </a>

                <a
                  href={data.personal.stackoverflow}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.75rem 0.35rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.35rem",
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    minWidth: 0,
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-warning)";
                    e.currentTarget.style.color = "var(--accent-warning)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.color = "var(--text-primary)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <StackOverflow size={18} style={{ color: "var(--accent-warning)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>StackOverflow</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-card" style={{ padding: "clamp(1rem, 3vw, 2.25rem)", minWidth: 0, width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "var(--gradient-brand)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{t.contact.formTitle}</h3>
                <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  {t.contact.formDesc}
                </span>
              </div>
            </div>

            {formSubmitted ? (
              <div
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    color: "var(--accent-success)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem auto",
                  }}
                >
                  <Check size={24} />
                </div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>{t.contact.successTitle}</h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "1.25rem" }}>
                  {t.contact.successDesc}{" "}
                  <strong>{data.personal.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="btn-secondary"
                  style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      {t.contact.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                    {t.contact.messageLabel} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: "100%", padding: "0.85rem", justifyContent: "center" }}
                >
                  <Send size={17} />
                  <span>{loading ? t.contact.submittingBtn : t.contact.submitBtn}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>

      <style jsx global>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .contact-action-label {
            display: none !important;
          }
        }
        @media (max-width: 360px) {
          .contact-social-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
