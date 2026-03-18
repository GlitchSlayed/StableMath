'use client'

import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand'
import type { Accent, ThemeMode } from './tokens'

interface ThemeState {
  mode: ThemeMode
  accent: Accent
  setMode: (mode: ThemeMode) => void
  setAccent: (accent: Accent) => void
}

export const THEME_STORAGE_KEY = 'stablemath-theme'

const defaultTheme = { mode: 'light' as ThemeMode, accent: 'coral' as Accent }

export const themeScript = `
(() => {
  const fallback = ${JSON.stringify(defaultTheme)};
  try {
    const raw = window.localStorage.getItem('${THEME_STORAGE_KEY}');
    const parsed = raw ? JSON.parse(raw) : fallback;
    const mode = parsed?.state?.mode ?? parsed?.mode ?? fallback.mode;
    const accent = parsed?.state?.accent ?? parsed?.accent ?? fallback.accent;
    document.documentElement.dataset.theme = mode;
    document.documentElement.dataset.accent = accent;
  } catch {
    document.documentElement.dataset.theme = fallback.mode;
    document.documentElement.dataset.accent = fallback.accent;
  }
})();
`

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      ...defaultTheme,
      setMode: (mode) => set({ mode }),
      setAccent: (accent) => set({ accent })
    }),
    {
      name: THEME_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: ({ mode, accent }) => ({ mode, accent })
    }
  )
)
