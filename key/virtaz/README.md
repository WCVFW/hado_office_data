# Veritaz Consultancy Limited — Website

Marketing website for Veritaz Consultancy Limited, built from the "Veritaz Capital" content brief.
React + TypeScript + Vite, Tailwind CSS v4, Framer Motion for scroll animation, and Three.js
(via react-three-fiber) for the 3D hero and page-header visuals.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Structure

- `src/data/content.ts` — all site copy (services, FAQs, compliance clauses, etc.), sourced from
  the content brief. Edit this file to change copy without touching components.
- `src/components/Hero3D.tsx`, `AccentOrb3D.tsx` — the 3D visuals (icosahedron/torus/octahedron,
  metallic gold + navy materials, gentle float/rotation, mouse parallax on the homepage hero).
- `src/pages/` — one file per route. Service pages are data-driven off `content.ts` via
  `ServiceDetail.tsx` (route `/services/:slug`).

## Deployment

This is a client-rendered SPA using React Router. `public/_redirects` (Netlify) and `vercel.json`
(Vercel) are included so deep links (e.g. `/services/loan-advisory-processing`) resolve correctly
on those platforms. For other static hosts, configure a catch-all rewrite to `index.html`.

## Before publishing

Several fields in `content.ts` and the Contact page are placeholders pending Veritaz's own details:
registered office address, phone, email, CIN, and any specific licences/registrations. The
Compliance & Disclaimer, Privacy Policy and Terms of Use pages are drafts and should be reviewed
by Veritaz's legal counsel before going live.
