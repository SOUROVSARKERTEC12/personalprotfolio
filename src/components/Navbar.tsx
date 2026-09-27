"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { Terminal, Download, Palette, Menu, X, Check, Sparkles, BookOpen, Zap, Clock, Languages } from "lucide-react";
import { LANGUAGES, TRANSLATIONS, Language } from "@/data/translations";

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

function subscribeLanguage(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("sourov_language_change", callback);
  window.addEventListener("storage", callback);
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === "attributes" && (m.attributeName === "data-lang" || m.attributeName === "lang")) {
        callback();
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-lang", "lang"] });
  return () => {
    window.removeEventListener("sourov_language_change", callback);
    window.removeEventListener("storage", callback);
    observer.disconnect();
  };
}

function getLanguageSnapshot(): Language {
  try {
    const lang = document.documentElement.getAttribute("data-lang") || localStorage.getItem("sourov_language");
    return (lang === "bn" ? "bn" : "en") as Language;
  } catch {
    return "en";
  }
}

function getLanguageServerSnapshot(): Language {
  return "en";
}

let currentClockTime = 0;
const clockListeners = new Set<() => void>();
let clockIntervalId: ReturnType<typeof setInterval> | null = null;

function subscribeClock(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  clockListeners.add(callback);

  if (clockListeners.size === 1) {
    currentClockTime = Date.now();
    queueMicrotask(() => {
      clockListeners.forEach((listener) => listener());
    });

    clockIntervalId = setInterval(() => {
      currentClockTime = Date.now();
      clockListeners.forEach((listener) => listener());
    }, 1000);
  }

  return () => {
    clockListeners.delete(callback);
    if (clockListeners.size === 0 && clockIntervalId) {
      clearInterval(clockIntervalId);
      clockIntervalId = null;
    }
  };
}

function getClockSnapshot(): number {
  return currentClockTime;
}

function getClockServerSnapshot(): number {
  return 0;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const currentTheme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const currentCursorEffect = useSyncExternalStore(subscribeCursor, getCursorSnapshot, getCursorServerSnapshot);
  const currentLanguage = useSyncExternalStore(subscribeLanguage, getLanguageSnapshot, getLanguageServerSnapshot);
  const clockTime = useSyncExternalStore(subscribeClock, getClockSnapshot, getClockServerSnapshot);
  const clockMounted = clockTime !== 0;
  const currentTime = new Date(clockTime);

  const [showThemePicker, setShowThemePicker] = useState(false);
  const [showCursorPicker, setShowCursorPicker] = useState(false);
  const [showLangPicker, setShowLangPicker] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [praxisTooltipOpen, setPraxisTooltipOpen] = useState(false);
  const [is24Hour, setIs24Hour] = useState(false);

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const dateString = clockMounted
    ? currentTime.toLocaleDateString(currentLanguage === "bn" ? "bn-BD" : "en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    : "";

  const timeString = clockMounted
    ? currentTime.toLocaleTimeString(currentLanguage === "bn" ? "bn-BD" : "en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !is24Hour,
      })
    : "--:--:--";

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest("#theme-switcher-container") &&
        !target.closest("#cursor-effect-container") &&
        !target.closest("#language-switcher-container") &&
        !target.closest(".praxis-badge-trigger")
      ) {
        setShowThemePicker(false);
        setShowCursorPicker(false);
        setShowLangPicker(false);
        setPraxisTooltipOpen(false);
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

  const changeLanguage = (langId: Language) => {
    document.documentElement.setAttribute("data-lang", langId);
    document.documentElement.setAttribute("lang", langId);
    try {
      localStorage.setItem("sourov_language", langId);
    } catch {
      // ignore
    }
    window.dispatchEvent(new CustomEvent("sourov_language_change", { detail: langId }));
    setShowLangPicker(false);
  };

  const navLinks = [
    { href: "#about", label: t.nav.about, id: "about" },
    { href: "#experience", label: t.nav.experience, id: "experience" },
    { href: "#skills", label: t.nav.skills, id: "skills" },
    { href: "#projects", label: t.nav.projects, id: "projects" },
    { href: "#education", label: t.nav.education, id: "education" },
    { href: "#contact", label: t.nav.contact, id: "contact" },
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
              <div
                className="nav-brand-title"
                style={{
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  letterSpacing: "-0.02em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  position: "relative",
                }}
              >
                <span>{currentLanguage === "bn" ? "সৌরভ" : "Sourov"}</span>
                <span
                  className={`praxis-badge-trigger ${praxisTooltipOpen ? "active" : ""}`}
                  onMouseEnter={() => setPraxisTooltipOpen(true)}
                  onMouseLeave={() => setPraxisTooltipOpen(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPraxisTooltipOpen((prev) => !prev);
                  }}
                  title={currentLanguage === "bn" ? "প্র্যাক্সিস (Πρᾶξις) - দার্শনিক অর্থ দেখতে হোভার করুন" : "Praxis (Πρᾶξις) - Hover to view philosophical meaning"}
                >
                  <span className="praxis-text">{currentLanguage === "bn" ? "প্র্যাক্সিস" : "Praxis"}</span>
                  <span className="praxis-indicator" aria-hidden="true">✦</span>

                  {/* Philosophical Tooltip Popover */}
                  <div
                    className="praxis-popover-card"
                    onClick={(e) => e.stopPropagation()}
                    role="tooltip"
                  >
                    <div className="praxis-popover-arrow" />
                    
                    {/* Header: Greek Philosophy badge */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.65rem",
                        paddingBottom: "0.5rem",
                        borderBottom: "1px solid var(--border-subtle)",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--accent-primary)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        <BookOpen size={13} /> {t.praxis.tag}
                      </span>
                      <span
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-primary)",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {t.praxis.greek}
                      </span>
                    </div>

                    {/* Word title & pronunciation */}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.55rem" }}>
                      <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                        {t.praxis.word}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: 600 }}>
                        {t.praxis.pronunciation}
                      </span>
                    </div>

                    {/* Philosophical definition */}
                    <p
                      style={{
                        margin: "0 0 0.85rem 0",
                        fontSize: "0.88rem",
                        color: "var(--text-primary)",
                        lineHeight: "1.6",
                        fontWeight: 450,
                      }}
                    >
                      &ldquo;{t.praxis.quote}&rdquo;
                    </p>

                    {/* Backend Engineering application */}
                    <div
                      style={{
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-subtle)",
                        borderLeft: "3.5px solid var(--accent-primary)",
                        borderRadius: "0 8px 8px 0",
                        padding: "0.65rem 0.75rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          fontWeight: 700,
                          fontSize: "0.76rem",
                          color: "var(--accent-primary)",
                          marginBottom: "0.25rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        <Zap size={13} />
                        <span>{t.praxis.engineeringTitle}</span>
                      </div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-primary)", lineHeight: "1.55", fontWeight: 400 }}>
                        {t.praxis.engineeringDesc}
                      </div>
                    </div>
                  </div>
                </span>
              </div>
              <div
                className="nav-brand-subtitle"
                style={{
                  fontSize: "0.72rem",
                  color: "var(--text-muted)",
                  fontFamily: currentLanguage === "bn" ? "var(--font-bangla)" : "var(--font-mono)",
                  marginTop: "-2px",
                }}
              >
                {t.nav.subtitle}
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
            {/* Live Running Date & Time Widget */}
            <div
              className="navbar-clock-widget"
              onClick={() => setIs24Hour((prev) => !prev)}
              title={`Live System Clock (${is24Hour ? "24h" : "12h"} format) • Click to toggle`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.38rem 0.75rem",
                borderRadius: "10px",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                letterSpacing: "-0.01em",
                height: "40px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                userSelect: "none",
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
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-success)",
                    boxShadow: "0 0 8px var(--accent-success)",
                    display: "inline-block",
                  }}
                  className="animate-pulse-glow"
                />
                <Clock size={14} style={{ color: "var(--accent-primary)" }} />
              </div>

              <span
                className="navbar-clock-date"
                suppressHydrationWarning
                style={{ color: "var(--text-muted)", fontWeight: 500 }}
              >
                {dateString}
              </span>

              <span
                className="navbar-clock-separator"
                style={{ color: "var(--text-muted)", opacity: 0.5 }}
              >
                •
              </span>

              <span
                className="navbar-clock-time"
                suppressHydrationWarning
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {timeString}
              </span>
            </div>

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

            {/* Multilingual Switcher Dropdown (Replaces Resume button) */}
            <div id="language-switcher-container" style={{ position: "relative" }}>
              <button
                type="button"
                id="language-switcher-button"
                aria-label="Change language"
                title="Change Language / ভাষা পরিবর্তন করুন"
                onClick={() => {
                  setShowLangPicker(!showLangPicker);
                  setShowThemePicker(false);
                  setShowCursorPicker(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  height: "40px",
                  padding: "0 0.85rem",
                  borderRadius: "10px",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                  transition: "all 0.2s ease",
                  fontFamily: currentLanguage === "bn" ? "var(--font-bangla)" : "var(--font-mono)",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  cursor: "pointer",
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
                <Languages size={17} style={{ color: "var(--accent-primary)" }} />
                <span>{currentLanguage === "bn" ? "বাংলা" : "English"}</span>
                <span style={{ fontSize: "0.7rem", opacity: 0.65 }}>▾</span>
              </button>

              {/* Language Dropdown Panel */}
              {showLangPicker && (
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
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      padding: "0.3rem 0.6rem",
                    }}
                  >
                    Select Language / ভাষা
                  </div>

                  {LANGUAGES.map((lang) => {
                    const isSelected = currentLanguage === lang.id;
                    return (
                      <button
                        key={lang.id}
                        type="button"
                        onClick={() => changeLanguage(lang.id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.6rem 0.75rem",
                          borderRadius: "var(--radius-sm)",
                          backgroundColor: isSelected ? "var(--bg-card-hover)" : "transparent",
                          color: isSelected ? "var(--text-primary)" : "var(--text-secondary)",
                          fontSize: "0.88rem",
                          fontWeight: isSelected ? 700 : 500,
                          textAlign: "left",
                          transition: "all 0.15s ease",
                          cursor: "pointer",
                          fontFamily: lang.id === "bn" ? "var(--font-bangla)" : "var(--font-main)",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) e.currentTarget.style.backgroundColor = "var(--bg-card)";
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                          <span style={{ fontSize: "1.15rem" }}>{lang.flag}</span>
                          <div>
                            <div style={{ fontWeight: isSelected ? 700 : 500 }}>{lang.nativeName}</div>
                            <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{lang.label} ({lang.short})</div>
                          </div>
                        </div>
                        {isSelected && <Check size={16} style={{ color: "var(--accent-primary)", flexShrink: 0 }} />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

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
          {/* Mobile Live Time Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-primary)" }}>
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-success)",
                  boxShadow: "0 0 8px var(--accent-success)",
                  display: "inline-block",
                }}
                className="animate-pulse-glow"
              />
              <Clock size={15} />
              <span suppressHydrationWarning style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
                {dateString}
              </span>
            </div>
            <span
              suppressHydrationWarning
              style={{
                color: "var(--text-primary)",
                fontWeight: 700,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {timeString}
            </span>
          </div>

          {/* Mobile Language Switcher Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              fontSize: "0.85rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-primary)" }}>
              <Languages size={16} />
              <span style={{ fontWeight: 600 }}>Language / ভাষা</span>
            </div>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.id}
                  type="button"
                  onClick={() => changeLanguage(lang.id)}
                  style={{
                    padding: "0.35rem 0.7rem",
                    borderRadius: "6px",
                    border: currentLanguage === lang.id ? "1px solid var(--accent-primary)" : "1px solid var(--border-subtle)",
                    backgroundColor: currentLanguage === lang.id ? "rgba(6, 182, 212, 0.15)" : "transparent",
                    color: currentLanguage === lang.id ? "var(--accent-primary)" : "var(--text-secondary)",
                    fontWeight: currentLanguage === lang.id ? 700 : 500,
                    fontSize: "0.8rem",
                    fontFamily: lang.id === "bn" ? "var(--font-bangla)" : "var(--font-mono)",
                    cursor: "pointer",
                  }}
                >
                  {lang.flag} {lang.nativeName}
                </button>
              ))}
            </div>
          </div>

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
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  {currentLanguage === "bn"
                    ? `০${navLinks.indexOf(link) + 1}`.replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d, 10)])
                    : `0${navLinks.indexOf(link) + 1}`}
                </span>
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
              <span>{t.hero.badge}</span>
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
              <span>{currentLanguage === "bn" ? "জীবনবৃত্তান্ত PDF দেখুন ও ডাউনলোড করুন" : "View & Download Resume PDF"}</span>
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
          .nav-brand-title {
            font-size: 0.98rem !important;
            gap: 0.28rem !important;
          }
        }
        @media (max-width: 1060px) {
          .navbar-clock-date,
          .navbar-clock-separator {
            display: none !important;
          }
        }
        @media (max-width: 580px) {
          .navbar-clock-widget {
            display: none !important;
          }
        }
        @media (max-width: 380px) {
          .nav-brand-subtitle {
            display: none !important;
          }
          .nav-brand-title {
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </>
  );
}
