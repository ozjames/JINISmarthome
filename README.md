# JINI Smart Home

Marketing landing site for **JINI Smart Home** (JINI TECH PTY LTD) — Sydney & Central Coast smart home consulting and installation.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

Configured for **static export** so you can host on **GitHub Pages** or **Crazy Domains** shared hosting (FTP upload of HTML/CSS/JS + a small PHP contact script).

## Base path (`BASE_PATH`)

`basePath` / `assetPrefix` in `next.config.ts` are driven by the `BASE_PATH` environment variable.

| Host | `BASE_PATH` | Site URL |
|------|-------------|----------|
| GitHub Pages (default) | `/JINISmarthome` | https://ozjames.github.io/JINISmarthome/ |
| Crazy Domains | `/new_home` | https://jinitech.com.au/new_home/ |

```bash
# GitHub Pages (default if unset)
npm run build

# Crazy Domains
BASE_PATH=/new_home npm run build
```

## Quick start (local)

```bash
npm install
npm run dev
```

Production static build:

```bash
npm run build
```

This writes a static site to the `out/` folder (plus `out/contact.php` copied from `public/`).

## Contact

- **Phone:** 0431 395 737 (`tel:+61431395737`) — phone-first
- **Service area:** Sydney & Central Coast, Australia
- **Email:** not published on the site (none confirmed on source brand site)

The browser form POSTs to relative `contact.php`. PHP redirects back using `SCRIPT_NAME`. When `CONTACT_TO_EMAIL` in `public/contact.php` is empty, the form still validates and succeeds with “we’ll call you” behaviour (no mail attempt). Set `CONTACT_TO_EMAIL` only when a real inbox is available — that constant is not shown in the UI.

## Project structure

| Path | Purpose |
|------|---------|
| `src/lib/site.ts` | Brand name, tagline, copy, and contact details |
| `src/components/` | Landing sections (Hero, Services, Why us, Process, FAQ, Contact, Footer) |
| `src/app/page.tsx` | Single-page landing composition |
| `public/logo/logo.png` | Brand logo (header/footer) |
| `public/contact.php` | PHP handler for Crazy Domains shared hosting |
| `next.config.ts` | `output: 'export'`, `BASE_PATH`-driven `basePath` / `assetPrefix` |
| `.github/workflows/pages.yml` | GitHub Pages CI deploy |
| `out/` | Build output |

## Design notes

- Light-first Semrush-style product marketing: white space, bold headlines, strong orange CTAs
- Brand orange from logo (`#ff6600`); Inter sans; optional dark toggle
- Honest copy only — no fake metrics or testimonials
- Sticky header, FAQ, contact form, scroll behaviour, static export

## Licence

Private / all rights reserved unless you add a licence file.
