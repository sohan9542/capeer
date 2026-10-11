# CaPeer (CaPeerBara)

Marketing landing page for **CaPeerBara**, a peer-to-peer crypto trading concept site. Built with Next.js (Pages Router), TypeScript, and Tailwind CSS.

**Live demo:** [https://capeer.vercel.app](https://capeer.vercel.app)

> Portfolio / concept UI by [Sohanur Rahman](https://github.com/sohan9542). This repository is a front-end presentation layer — not a production trading platform.

## Features

- Responsive landing page with hero, partner strip, privacy highlights, “how it works” steps, FAQ accordion, CTA, and footer
- Mobile navigation drawer (Headless UI)
- Typed API routes under `/api/*` with method validation
- ESLint, Prettier, Vitest, and GitHub Actions CI

## Tech stack

| Area      | Choice                                  |
| --------- | --------------------------------------- |
| Framework | Next.js 14 (Pages Router)               |
| Language  | TypeScript                              |
| Styling   | Tailwind CSS, custom Manrope font faces |
| UI        | Headless UI, Heroicons, `next/image`    |
| Testing   | Vitest                                  |
| CI        | GitHub Actions                          |
| Hosting   | Vercel (`capeer.vercel.app`)            |

## Architecture

```
pages/           Next.js routes and API handlers
  index.tsx      Landing page composition
  api/           Lightweight JSON/HTML endpoints
components/      Presentational UI sections
lib/             Shared content, helpers, and unit tests
public/          Static assets (images, icons, fonts)
styles/          Global CSS and font-face rules
```

Content for FAQ items, privacy features, and nav/footer links lives in `lib/` so components stay thin and reusable. The home page composes section components; there is no database or auth layer in this repo.

## Local setup

**Requirements:** Node.js 20+ and npm.

```bash
git clone https://github.com/sohan9542/capeer.git
cd capeer
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See [`.env.example`](./.env.example). The app does not currently require any environment variables to build or run locally.

## Scripts

| Script                 | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start the development server |
| `npm run build`        | Production build             |
| `npm run start`        | Serve the production build   |
| `npm run lint`         | Run ESLint (Next.js config)  |
| `npm run format`       | Format with Prettier         |
| `npm run format:check` | Check Prettier formatting    |
| `npm run typecheck`    | TypeScript `tsc --noEmit`    |
| `npm test`             | Run Vitest unit tests        |

## Project structure

```
.
├── .github/workflows/ci.yml
├── components/          # Navbar, Hero, FAQ, Footer, etc.
├── lib/                 # FAQ/features/nav data + helpers/tests
├── pages/               # Routes + API
├── public/              # Static media and font files
├── styles/globals.css
├── package.json
└── README.md
```

## Notes

- Nav and footer links (for example `/buy-crypto`, `/about`) are present in the UI; corresponding pages are not implemented in this repo yet.
- Placeholder marketing copy and stats on the landing page are conceptual and should not be read as real product metrics.
