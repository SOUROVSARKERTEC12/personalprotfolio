"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { Terminal, Download, Palette, Menu, X, Check, FileText, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

const THEMES = [
  { id: "cyber", label: "Cyber Obsidian", color: "#06b6d4" },
  { id: "matrix", label: "Emerald Matrix", color: "#10b981" },
  { id: "nebula", label: "Sunset Nebula", color: "#d946ef" },
  { id: "light", label: "Polar Light", color: "#2563eb" },
];

const CURSOR_EFFECTS = [
  { id: "glow", label: "Glow Trail", badge: "React Bits (Default)", icon: "✨" },
  { id: "splash", label: "Fluid Splash", badge: "WebGL Fluid", icon: "🌊" },
  { id: "none", label: "Disabled", badge: "Clean Cursor", icon: "🚫" },
];

function subscribeCursor(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("sourov_cursor_change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("sourov_cursor_change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getCursorSnapshot(): string {
  try {
    return localStorage.getItem("sourov_cursor_effect") || "glow";
  } catch {
    return "glow";
  }
}

function getCursorServerSnapshot(): string {
  return "glow";
}

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === "attributes" && m.attributeName === "data-theme") {
        callback();
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getThemeSnapshot(): string {
  try {
    return document.documentElement.getAttribute("data-theme") || localStorage.getItem("sourov_theme") || "cyber";
  } catch {
    return "cyber";
  }
}

function getThemeServerSnapshot(): string {
  return "cyber";
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const currentTheme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const currentCursorEffect = useSyncExternalStore(subscribeCursor, getCursorSnapshot, getCursorServerSnapshot);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [showCursorPicker, setShowCursorPicker] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#theme-switcher-container") && !target.closest("#cursor-effect-container")) {
        setShowThemePicker(false);
        setShowCursorPicker(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

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
    document.documentElement.setAttribute("data-theme", themeId);
    try {
      localStorage.setItem("sourov_theme", themeId);
    } catch {
      // ignore
    }
    setShowThemePicker(false);
  };

  const changeCursorEffect = (effectId: string) => {
    try {
      localStorage.setItem("sourov_cursor_effect", effectId);
      window.dispatchEvent(new CustomEvent("sourov_cursor_change", { detail: effectId }));
    } catch {
      // ignore
    }
    setShowCursorPicker(false);
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
          width: "100%",
          maxWidth: "100%",
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
            width: "100%",
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
              <div className="nav-brand-subtitle" style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginTop: "-2px" }}>
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
          <div className="navbar-actions" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            {/* Theme Picker Dropdown Toggle */}
            <div id="theme-switcher-container" style={{ position: "relative" }}>
              <button
                type="button"
                id="theme-switcher-button"
                aria-label="Change theme"
                onClick={() => {
                  setShowThemePicker(!showThemePicker);
                  setShowCursorPicker(false);
                }}
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
                    maxWidth: "calc(100vw - 2rem)",
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

            {/* Cursor Effect Picker Dropdown Toggle */}
            <div id="cursor-effect-container" style={{ position: "relative" }}>
              <button
                type="button"
                id="cursor-effect-button"
                aria-label="Change cursor effect"
                title="Cursor Effects: Glow Trail / Fluid Splash / Off"
                onClick={() => {
                  setShowCursorPicker(!showCursorPicker);
                  setShowThemePicker(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: currentCursorEffect === "glow" ? "var(--accent-primary)" : "var(--text-secondary)",
                  transition: "all 0.2s ease",
                  position: "relative",
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
                <Sparkles size={18} />
                {currentCursorEffect === "glow" && (
                  <span
                    style={{
                      position: "absolute",
                      top: "6px",
                      right: "6px",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-primary)",
                      boxShadow: "0 0 6px var(--accent-primary)",
                    }}
                  />
                )}
              </button>

              {/* Cursor Effect Dropdown Panel */}
              {showCursorPicker && (
                <div
                  style={{
                    position: "absolute",
                    top: "120%",
                    right: 0,
                    width: "230px",
                    maxWidth: "calc(100vw - 2rem)",
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Cursor Effect</span>
                  </div>
                  {CURSOR_EFFECTS.map((effect) => {
                    const isSelected = currentCursorEffect === effect.id;
                    return (
                      <button
                        key={effect.id}
                        type="button"
                        onClick={() => changeCursorEffect(effect.id)}
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
                        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                          <span style={{ fontSize: "1.05rem" }}>{effect.icon}</span>
                          <div>
                            <div style={{ fontWeight: isSelected ? 600 : 400 }}>{effect.label}</div>
                            <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{effect.badge}</div>
                          </div>
                        </div>
                        {isSelected && <Check size={15} style={{ color: "var(--accent-primary)", flexShrink: 0 }} />}
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
              className="btn-primary navbar-resume-btn"
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
            padding: "1.75rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--border-subtle)",
            overflowY: "auto",
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch",
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
        @media (max-width: 640px) {
          .navbar-resume-btn {
            display: none !important;
          }
          .navbar-actions {
            gap: 0.45rem !important;
          }
        }
        @media (max-width: 380px) {
          .nav-brand-subtitle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
