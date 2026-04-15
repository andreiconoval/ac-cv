# Copilot Instructions

## Build, test, and lint commands

- Install dependencies: `npm install`
- Start local development: `npm run dev`
- Lint the project: `npm run lint`
- Build for production: `npm run build`
- Start the production server: `npm run start`
- Single test: no test runner is configured yet

## High-level architecture

This is a Next.js App Router portfolio site. The layout shell lives in `app/layout.tsx` and wraps every page with a shared header, footer, and `next-themes` provider.

Portfolio content is intentionally data-driven:

1. `data/portfolio.json` contains the profile, stats, about copy, skills, experience, education, and contact data.
2. `data/projects.json` contains the project archive and `featured` flags.
3. `lib/content.ts` is the central import layer that exposes typed content and derived values like `featuredProjects`.
4. Route files under `app/` compose reusable presentational components from `components/` rather than embedding large content blocks directly in page files.

Current routes:

- `/` renders the one-page portfolio sections
- `/projects` renders the full project archive

## Key conventions

- Keep content edits in the JSON files under `data/` whenever possible. Components should stay focused on presentation and layout.
- Reuse the existing section-oriented component pattern (`hero`, `about`, `skills`, `experience`, `featured-projects`, `contact`) instead of growing `app/page.tsx` into a large monolith.
- Shared site chrome belongs in `app/layout.tsx`; route files should only describe page-specific composition and metadata.
- Theme support is class-based through `next-themes`. Preserve `suppressHydrationWarning` on `<html>` and the client-only theme wrapper/toggle pattern when changing theming behavior.
- Styling uses Tailwind CSS v4 plus a small set of CSS custom properties in `app/globals.css`. Prefer extending those tokens before introducing one-off color systems.
- The portfolio is currently seeded with placeholder professional content. If you personalize the site, update the JSON content first before changing component structure.
