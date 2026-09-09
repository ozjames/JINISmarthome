# JINI Smart Home

Marketing landing site for **JINI Smart Home** — Australia-focused smart home consulting and installation.

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

Dev also respects `BASE_PATH` (default `/JINISmarthome`):

```bash
npm run dev
# → http://localhost:3000/JINISmarthome

BASE_PATH=/new_home npm run dev
# → http://localhost:3000/new_home
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

> Note: `npm start` is for a Node server and is **not** used on static hosting. Use the contents of `out/` instead.

## GitHub Pages

On push to `main`, [`.github/workflows/pages.yml`](.github/workflows/pages.yml) runs `npm ci`, builds with `BASE_PATH=/JINISmarthome`, and deploys the `out/` folder via GitHub Actions Pages.

Preview: https://ozjames.github.io/JINISmarthome/

## Deploy to Crazy Domains (FTP)

1. Run `BASE_PATH=/new_home npm run build` locally.
2. Edit **`contact.php`** (in `out/` or in the zip) and set:
   - `CONTACT_TO_EMAIL` — your real inbox (required)
   - `CONTACT_FROM_EMAIL` — ideally an address on your domain (optional but recommended)
3. In Crazy Domains cPanel / File Manager or an FTP client:
   - Connect to your hosting account
   - Open `public_html`
   - Create (or open) the **`new_home`** folder
   - Upload **all contents** of `out/` into `public_html/new_home/` (not the domain root, and not the `out` folder itself — the files inside it)
4. Visit `https://jinitech.com.au/new_home/` and submit a test enquiry.
5. If mail never arrives, ask Crazy Domains whether PHP `mail()` is enabled. Many shared hosts require SMTP; you may need PHPMailer or a cPanel SMTP plugin.

### What to upload

Upload everything produced under `out/` into **`public_html/new_home/`**, including:

- `index.html`, `_next/`, any assets
- `contact.php` (must sit next to `index.html` inside `new_home/`)
- `favicon.ico`

Do **not** upload into `public_html/` root unless you also change `BASE_PATH` and rebuild.

### Contact form setup

The browser form POSTs to relative `contact.php` (works under any base path). PHP redirects back to the same directory using `SCRIPT_NAME` (so `/new_home/?sent=…` or `/JINISmarthome/?sent=…`).

- Client-side validation still runs first.
- On success, PHP sends email via `mail()` and redirects with `?sent=1`.
- On failure, it redirects with `?sent=0&error=...`.
- The landing page reads those query params and shows success/error, then cleans the URL.

**You must** change the placeholder in `public/contact.php` (which becomes `out/contact.php` after build):

```php
define('CONTACT_TO_EMAIL', 'REPLACE_WITH_YOUR_EMAIL@example.com.au'); // ← set recipient
```

Also update display contact details in `src/lib/site.ts` (email/phone shown on the page).

## Project structure

| Path | Purpose |
|------|---------|
| `src/lib/site.ts` | Brand name, tagline, copy, and contact placeholders |
| `src/components/` | Landing sections (Hero, Services, Why us, Process, Contact, Footer) |
| `src/app/page.tsx` | Single-page landing composition |
| `public/contact.php` | PHP handler for Crazy Domains shared hosting |
| `next.config.ts` | `output: 'export'`, `BASE_PATH`-driven `basePath` / `assetPrefix` |
| `.github/workflows/pages.yml` | GitHub Pages CI deploy |
| `out/` | Build output — upload these files into `public_html/new_home/` (Crazy Domains) |

API routes are **not** used (they do not work on static shared hosting).

## Rename the brand

Edit `src/lib/site.ts` and update:

- `brand`, `shortBrand`, `tagline`, `description`
- Section copy under `services`, `whyUs`, and `process` if needed

Metadata in `src/app/layout.tsx` reads from `site`, so titles/descriptions stay in sync.

## Replace contact details

In `src/lib/site.ts`, replace the placeholders under `contact`:

```ts
contact: {
  email: "hello@example.com.au",       // ← your business email
  phone: "+61 400 000 000",            // ← your Australian number
  phoneHref: "tel:+61400000000",
  emailHref: "mailto:hello@example.com.au",
  serviceArea: "…",
},
```

And set `CONTACT_TO_EMAIL` in `public/contact.php` (rebuild after changing it so `out/contact.php` updates).

## Design notes

- Soft neutrals with a teal accent (no purple gradients)
- Semantic HTML, sticky header, smooth in-page anchors
- No fake metrics, logos, or testimonials
- Responsive layout for mobile through desktop

## Licence

Private / all rights reserved unless you add a licence file.
