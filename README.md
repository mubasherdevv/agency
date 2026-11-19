# Mivon — Creative Agency Clone

A working Next.js 14 recreation of the Mivon creative agency homepage
(mivon.bslthemes.com) as shown in a 22-second screen recording. Built from
the video frames only — no original images, fonts or assets were copied.
Photos are Unsplash stock and 3D shapes are pure CSS gradients.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- framer-motion (all scroll / reveal / slider / cursor animations)
- Plain CSS in `src/app/globals.css` (no Tailwind)
- Inter via `next/font/google`

## Structure

- `src/app/` — layout, page, globals.css
- `src/components/` — CustomCursor, Header, Hero, Portfolio, About, Services,
  Marquee, Team, Approach, Testimonials, Awards, Blog, Footer
- `src/lib/data.ts` — all copy (portfolio, services, approach, testimonials,
  awards, blog)
- `ANALYSIS.md` — frame-by-frame video analysis the clone is based on
