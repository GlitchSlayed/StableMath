'use client'

import { create } from 'zustand'
import { loadProgress, saveProgress } from './localStorage'

export interface ProgressState {
  completedLessons: string[]
  streakDays: number
  completeLesson: (lessonId: string) => void
  hydrate: () => void
}

const initialState = { completedLessons: [], streakDays: 0 }

export const useProgressStore = create<ProgressState>((set, get) => ({
  ...initialState,
  completeLesson: (lessonId) => {
    const next = { ...get(), completedLessons: Array.from(new Set([...get().completedLessons, lessonId])) }
    set(next)
    saveProgress({ completedLessons: next.completedLessons, streakDays: next.streakDays })
  },
  hydrate: () => set(loadProgress(initialState))
}))
