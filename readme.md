# ASimpleStarGazer Web (Legacy)

This app is a legacy Vite + React website used as a prototype/marketing page.
It is not the active product frontend.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Quick Start

```bash
npm install
npm run dev
```

Default local URL: `http://localhost:5173`

## Scripts

- `npm run dev` - start local development
- `npm run build` - type-check and build production files
- `npm run preview` - preview production build
- `npm run lint` - lint source files

## Project Layout

- `src/components` - reusable UI components
- `src/sections` - homepage sections
- `src/lib` - shared utilities
- `packages/assets` - image and design assets

## Deployment

This module includes GitHub Pages workflow config at:

- `.github/workflows/deploy.yml`

If you change public path/base config, update `vite.config.ts` and deployment workflow together.
