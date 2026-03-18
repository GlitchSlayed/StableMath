# StableMath

StableMath is a production-minded, open-source math learning website built with Next.js 14, TypeScript, Tailwind CSS v4, KaTeX, Zustand, Framer Motion, Vitest, and Playwright. It is designed for deterministic instruction: every lesson, hint, question, and validator is hand-authored.

## Features

- Warm Claude-inspired visual system with light, dark, and five accent palettes
- Deterministic question engine with seeded reproducibility and targeted error classification
- Engineering and CS/ML curriculum tracks with shared mathematical structure
- Static-export-friendly architecture with no runtime APIs and no analytics

## Getting started

```bash
npm install
npm run dev
```

## Architecture

- `app/`: Next.js App Router pages
- `components/`: UI primitives, layout, quiz, math, and curriculum components
- `content/`: typed curriculum metadata and MDX lessons
- `lib/question-engine/`: deterministic generation, validation, sessions, and template registry
- `lib/theme/` and `lib/progress/`: client-side UI state only

## Contributing

See `content-guide.md` for curriculum additions and `question-guide.md` for new question templates.
