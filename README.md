# PriceTrackr — Programmatic SEO Price Tracker

Static site generating thousands of SEO-optimized pages targeting long-tail keywords like "fender stratocaster used price" and "charizard base set price history".

## Stack

- **Next.js 14** with App Router, static export
- **TypeScript** + **Tailwind CSS**
- **Data**: Apify actors (Reverb, TCGPlayer) + seed data for static gen

## Quick Start

```bash
cd projects/seo-site
npm install
npm run dev
```

Open http://localhost:3000.

## Pages Generated

- `/` — Homepage with featured items
- `/music-gear` — Music gear hub (guitars, amps, pedals, synths, drums, recording)
- `/music-gear/[category]` — Category pages (e.g., `/music-gear/guitars`)
- `/music-gear/[category]/[item]` — Item price pages (e.g., `/music-gear/guitars/fender-stratocaster`)
- `/trading-cards` — Trading cards hub (Pokemon, MTG, Yu-Gi-Oh)
- `/trading-cards/[game]` — Per-game pages
- `/trading-cards/[game]/[card]` — Card price pages

**Current seed data**: 50 music gear items + 50 trading cards = 100+ pages on day 1.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `APIFY_TOKEN` | No | Apify API token for live data |
| `TCGPLAYER_ACTOR_ID` | No | Apify actor ID for TCGPlayer scraper |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |
| `NEXT_PUBLIC_SITE_URL` | No | Site URL for sitemap (default: https://pricetrackr.com) |

## Deploy to Vercel

```bash
npm run build   # generates static export in `out/`
vercel deploy   # or connect GitHub repo to Vercel
```

## Monetization

Each item page includes an API CTA linking to RapidAPI. Update `YOUR_RAPIDAPI_USERNAME` in `src/components/ApiCTA.tsx`.

## Adding Items

Add entries to `src/data/seed-items.ts`. Pages are auto-generated via `generateStaticParams()`.
