'use client'

import { useEffect } from 'react'
import { useTheme } from './useTheme'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode, accent } = useTheme()

  useEffect(() => {
    document.documentElement.dataset.theme = mode
    document.documentElement.dataset.accent = accent
  }, [mode, accent])

  return <>{children}</>
}
