export const accents = ['coral', 'iris', 'sage', 'amber', 'slate'] as const
export type Accent = (typeof accents)[number]
export type ThemeMode = 'light' | 'dark'
