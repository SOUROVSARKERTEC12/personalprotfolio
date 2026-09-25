"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Download, Palette, Menu, X, Check, FileText } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

const THEMES = [
  { id: "cyber", label: "Cyber Obsidian", color: "#06b6d4" },
  { id: "matrix", label: "Emerald Matrix", color: "#10b981" },
  { id: "nebula", label: "Sunset Nebula", color: "#d946ef" },
  { id: "light", label: "Polar Light", color: "#2563eb" },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentTheme, setCurrentTheme] = useState("cyber");
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "experience", "skills", "projects", "education", "interests", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem("sourov_theme", themeId);
    setShowThemePicker(false);
  };

  const navLinks = [
    { href: "#about", label: "About", id: "about" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#education", label: "Education", id: "education" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          backgroundColor: scrolled ? "var(--bg-glass)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "74px",
          }}
        >
          {/* Logo / Brand */}
          <a
            href="#hero"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "var(--gradient-brand)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                boxShadow: "0 0 16px rgba(6, 182, 212, 0.4)",
              }}
            >
              <Terminal size={20} strokeWidth={2.4} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span>Sourov</span>
                <span style={{ color: "var(--accent-primary)" }}>.dev</span>
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginTop: "-2px" }}>
                Backend Engineer
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "1.5rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: isActive ? "var(--accent-primary)" : "var(--text-secondary)",
                    position: "relative",
                    padding: "0.4rem 0.2rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive ? "var(--accent-primary)" : "var(--text-secondary)")
                  }
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "var(--gradient-brand)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Theme Picker Dropdown Toggle */}
            <div style={{ position: "relative" }}>
              <button
                type="button"
                id="theme-switcher-button"
                aria-label="Change theme"
                onClick={() => setShowThemePicker(!showThemePicker)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--accent-primary)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-primary)";
                  e.currentTarget.style.boxShadow = "var(--border-glow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Palette size={18} />
              </button>

              {/* Theme Dropdown Panel */}
              {showThemePicker && (
                <div
                  style={{
                    position: "absolute",
                    top: "120%",
                    right: 0,
                    width: "210px",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-accent)",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "var(--shadow-lg)",
                    padding: "0.6rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    zIndex: 110,
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      padding: "0.3rem 0.6rem",
                    }}
                  >
                    Select Theme
                  </div>
                  {THEMES.map((theme) => {
                    const isSelected = currentTheme === theme.id;
                    return (
                      <button
                        key={theme.id}
                        type="button"
                        onClick={() => changeTheme(theme.id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.55rem 0.75rem",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: isSelected ? "var(--bg-card-hover)" : "transparent",
                          color: isSelected ? "var(--text-primary)" : "var(--text-secondary)",
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          textAlign: "left",
                          transition: "all 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) e.currentTarget.style.backgroundColor = "var(--bg-card)";
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                          <span
                            style={{
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              backgroundColor: theme.color,
                              display: "inline-block",
                              boxShadow: `0 0 8px ${theme.color}`,
                            }}
                          />
                          <span>{theme.label}</span>
                        </div>
                        {isSelected && <Check size={15} style={{ color: "var(--accent-primary)" }} />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Resume Button */}
            <button
              type="button"
              id="navbar-resume-button"
              onClick={onOpenResume}
              className="btn-primary"
              style={{
                padding: "0.55rem 1.1rem",
                fontSize: "0.85rem",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <FileText size={16} />
              <span className="resume-btn-text">Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              id="mobile-nav-toggle"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-nav-toggle"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "74px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--bg-primary)",
            zIndex: 99,
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: activeSection === link.id ? "var(--accent-primary)" : "var(--text-secondary)",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid var(--border-subtle)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-success)", fontSize: "0.85rem" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-success)",
                  boxShadow: "0 0 10px var(--accent-success)",
                }}
              />
              <span>Available for backend opportunities</span>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Download size={18} />
              <span>View & Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}

      {/* Global CSS helper for responsive navbar */}
      <style jsx global>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
          .resume-btn-text {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
