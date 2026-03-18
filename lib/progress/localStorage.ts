export const PROGRESS_KEY = 'stablemath-progress'

export const loadProgress = <T,>(fallback: T): T => {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export const saveProgress = <T,>(value: T) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(value))
}
