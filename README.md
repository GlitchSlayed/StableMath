# StableMath

StableMath is a production-minded, open-source math learning website built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, KaTeX, Zustand, Framer Motion, Vitest, and Playwright. It is designed for deterministic instruction: every lesson, hint, question, and validator is hand-authored.

## Features

- Warm Claude-inspired visual system with light, dark, and five accent palettes
- Deterministic question engine with seeded reproducibility and targeted error classification
- Engineering and CS/ML curriculum tracks with shared mathematical structure
- Static-export-friendly architecture with no runtime APIs and no analytics

## Getting started

```bash
nvm use
npm install
npm run dev
```

StableMath now targets the Node.js 24 Active LTS line. Use the `.nvmrc` file to stay on the latest compatible 24.x release locally.

## Architecture

- `app/`: Next.js App Router pages
- `components/`: UI primitives, layout, quiz, math, and curriculum components
- `content/`: typed curriculum metadata and MDX lessons
- `lib/question-engine/`: deterministic generation, validation, sessions, and template registry
- `lib/theme/` and `lib/progress/`: client-side UI state only

## Contributing

See `content-guide.md` for curriculum additions and `question-guide.md` for new question templates.

## Deploying to Vercel (free Hobby plan)

StableMath is configured for static export, so it can be deployed on Vercel's free Hobby tier with no server runtime.

1. Push this repository to GitHub.
2. Create a free Vercel account and choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the detected framework as **Next.js**.
5. Leave the build settings at their defaults, or confirm these values:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `out`
6. Click **Deploy**.

### What to expect

- Every pull request can get a preview deployment from Vercel automatically.
- Every push to your production branch can publish a fresh static build.
- Because the app exports static files, there is no paid serverless usage requirement for the site itself.

### Recommended Vercel project settings

- Framework preset: `Next.js`
- Node.js version: `24.x`
- Production branch: `main` (or your default branch)
- Root directory: repository root

### GitHub Actions

The CI workflow now checks types, runs unit tests, builds the static export, installs Playwright's Chromium browser, and runs the end-to-end suite. That helps catch Vercel-breaking changes before deployment.
