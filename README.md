# Trang Ngoc Le — Portfolio

Personal marketing portfolio for Trang Ngoc Le, built from the content and imagery in her
portfolio PDF. Single-page, editorial layout: hero, about, selected work, expertise,
experience, and contact.

**Stack:** React + TypeScript + Vite + Tailwind CSS. No backend, ships as static files.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

## Content

All copy (bio, experience, projects, certifications, contact details) lives in
`src/data/content.ts`, sourced from the portfolio PDF — edit there rather than in the
components. Images live in `public/images/` as optimized WebP files.

## Deployment

Pushing to `main` builds the site and deploys it to GitHub Pages via
`.github/workflows/deploy.yml`. In the repo settings, under **Pages**, set the source to
**GitHub Actions** (one-time setup) — the site is then served at `https://trangln.github.io/`.
