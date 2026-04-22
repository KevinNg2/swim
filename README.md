# Coach Kevin Swim Lessons

A personal swim lesson booking website for Kevin Ng, a swim coach based in Laguna Niguel, CA. The site showcases services, pricing, and includes a contact form for booking inquiries.

## Features

- Coach bio and credentials
- 6 service offerings (competitive strokes, swim team prep, lifeguard training, surf confidence, adult & youth lessons, private pool access)
- Pricing tiers: $65 / 30 min, $300 / 5-pack, $500 / 10-pack
- Contact form with email delivery via Formspree
- Mobile-responsive design

## Tech Stack

- React 19 (Create React App)
- Plain CSS (no frameworks)
- Formspree for contact form submissions

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads on file changes.

## Key Files

| File | Purpose |
|---|---|
| `src/App.js` | All UI — single component with every section |
| `src/App.css` | All styles — layout, colors, responsive breakpoints |
| `src/assets/` | Local images used in the About section |

## Contact Form

The contact form submits to [Formspree](https://formspree.io). The endpoint is configured in `src/App.js`:

```jsx
<form action="https://formspree.io/f/myzlgddz" method="POST">
```

To use a different Formspree endpoint, replace `myzlgddz` with your own form ID from the Formspree dashboard.

## Build & Deploy

```bash
npm run build
```

Outputs a production-ready static site to the `/build` folder. Deploy to any static host (Netlify, Vercel, GitHub Pages, etc.) by pointing it at that folder.

## Contact

- Phone: 908-956-1282
- Email: kevinng3292@gmail.com
- Location: Laguna Niguel, CA
