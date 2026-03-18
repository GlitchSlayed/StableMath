'use client'

import { create } from 'zustand'
import type { Accent, ThemeMode } from './tokens'

interface ThemeState {
  mode: ThemeMode
  accent: Accent
  setMode: (mode: ThemeMode) => void
  setAccent: (accent: Accent) => void
}

export const useTheme = create<ThemeState>((set) => ({
  mode: 'light',
  accent: 'coral',
  setMode: (mode) => set({ mode }),
  setAccent: (accent) => set({ accent })
}))
