# CEP Construction Estimation Partner LLC — Website

A multi-page React frontend for a construction estimating company, built with
Vite + React Router. No backend, no paid APIs, no auth.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, Hero, Button, ServiceCard,
                IndustryCard, TestimonialCard, FAQ, CTA, QuoteForm, StatBlock,
                PageBanner, Icon (hand-rolled inline SVGs, no icon library)
  pages/        One file per route: Home, About, Services, Industries,
                HowItWorks, Portfolio, FAQPage, Contact, Quote, Legal
  data/         Edit these to change site content without touching layout:
                services.js, locations.js, faqs.js, testimonials.js, portfolio.js
  App.jsx       Routes
  index.css     Design tokens (colors, type, spacing) + shared layout classes
```

## What to replace before launch

- **Hero video/image** — `src/components/Hero.jsx`, `VIDEO_SRC` and `FALLBACK_IMAGE`
  constants at the top of the file. The video is a placeholder URL; swap in your
  own hosted `.mp4` and a real jobsite photo for the fallback.
- **Logo** — currently a text mark ("CEP" in a box) in `Navbar.jsx` and
  `Footer.jsx`. Swap `<span className="brand-mark">CEP</span>` for an `<img>`
  once you have a logo file.
- **Contact details** — email/phone placeholders live in `Footer.jsx` and
  `pages/Contact.jsx`.
- **Testimonials & portfolio** — `src/data/testimonials.js` and
  `src/data/portfolio.js` are clearly-marked placeholders.
- **Statistics** — "500+ Projects" etc. are placeholder numbers in
  `pages/Home.jsx` and `pages/About.jsx`.
- **Social links** — `#` placeholders in `Footer.jsx`.

## Design notes

Palette and type are chosen for the subject matter rather than a generic
template look: deep ink-navy + steel blue evoke a blueprint, safety orange is
the hi-vis accent used for every primary call-to-action, and section
backgrounds alternate between paper-white and ink-navy for rhythm down the
page. Archivo (display) + Inter (body) are loaded from Google Fonts in
`index.html`. All of this lives as CSS custom properties at the top of
`src/index.css` — change the palette in one place and it updates everywhere.

## What's real vs. placeholder right now

- **Real and working:** all navigation and routing, the sticky navbar with
  mobile menu, the FAQ accordion, the Portfolio category filter, and the
  entire Get a Free Quote flow (country → dynamically-filtered state/province
  → required postal code, 5-step wizard, front-end validation, review step).
- **Frontend-only by design (per the brief):** the file upload step in the
  quote form stores selected files in React state only — nothing is uploaded
  anywhere. Form submission on both Contact and Quote pages shows a success
  message but does not send data anywhere yet.

## What I'd extend first

1. **Wire up real submission.** Both `QuoteForm.jsx` and `Contact.jsx` have a
   `handleSubmit` that's ready to swap a `fetch()` call into — point it at a
   form backend (Formspree, a simple serverless function, etc.) or a real API.
2. **Real file uploads.** The Step 4 upload UI in `QuoteForm.jsx` is ready;
   it needs an actual upload target (S3, Cloudinary, or your backend) once one
   exists.
3. **CMS or JSON-driven content**, if the FAQ/portfolio/testimonials will
   change often — right now they're plain JS files in `src/data/`, which is
   easy to edit by hand but not by non-developers.
4. **Real imagery** everywhere `portfolio-image` is currently a gradient
   placeholder block (`Portfolio.jsx`), and the hero video/fallback image.
5. **Analytics + a real 404 page** — the router currently falls back to Home
   for unmatched routes; a dedicated not-found page would be a quick add.
