'use client';

import React, { useSyncExternalStore } from 'react';
import GlowCursor from '@/components/GlowCursor';
import SplashCursor from '@/components/SplashCursor';

export type CursorEffectType = 'glow' | 'splash' | 'none';

const THEME_CURSOR_COLORS: Record<string, { color: string; secondaryColor: string }> = {
  cyber: { color: '#67E8F9', secondaryColor: '#A78BFA' },
  matrix: { color: '#34D399', secondaryColor: '#10B981' },
  nebula: { color: '#F472B6', secondaryColor: '#F59E0B' },
  light: { color: '#3B82F6', secondaryColor: '#8B5CF6' },
};

function subscribeCursor(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('sourov_cursor_change', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('sourov_cursor_change', callback);
    window.removeEventListener('storage', callback);
  };
}

function getCursorSnapshot(): CursorEffectType {
  try {
    return (localStorage.getItem('sourov_cursor_effect') as CursorEffectType) || 'glow';
  } catch {
    return 'glow';
  }
}

function getCursorServerSnapshot(): CursorEffectType {
  return 'glow';
}

function subscribeTheme(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'attributes' && m.attributeName === 'data-theme') {
        callback();
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

function getThemeSnapshot(): string {
  try {
    return document.documentElement.getAttribute('data-theme') || localStorage.getItem('sourov_theme') || 'cyber';
  } catch {
    return 'cyber';
  }
}

function getThemeServerSnapshot(): string {
  return 'cyber';
}

export default function CursorController() {
  const cursorEffect = useSyncExternalStore(subscribeCursor, getCursorSnapshot, getCursorServerSnapshot);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  const currentColors = THEME_CURSOR_COLORS[theme] || THEME_CURSOR_COLORS.cyber;

  if (cursorEffect === 'glow') {
    return (
      <GlowCursor
        global
        color={currentColors.color}
        secondaryColor={currentColors.secondaryColor}
        trailLength={40}
        trailWidth={8}
        trailTaper={0.8}
        followSpeed={0.16}
        glowIntensity={1.9}
        glowSpread={1.2}
        hotspot={0.65}
        brightness={1.25}
        opacity={1}
        pulseSpeed={1.1}
        noiseStrength={0.035}
        idleFade
        idleTimeout={700}
        fadeDuration={900}
        blendMode="screen"
      />
    );
  }

  if (cursorEffect === 'splash') {
    return (
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
      />
    );
  }

  return null;
}
