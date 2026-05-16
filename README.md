# Barr Digital — Agency Website

React + Tailwind CSS + Framer Motion · Built with Vite

---

## Project structure

```
barr-digital/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── useInView.js       ← scroll-trigger hook (shared utility)
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── Process.jsx
        ├── Portfolio.jsx
        ├── Testimonials.jsx
        ├── Pricing.jsx
        ├── FAQ.jsx
        ├── CTA.jsx
        └── Footer.jsx
```

---

## Dependencies

| Package          | Purpose                              |
|------------------|--------------------------------------|
| react            | UI library                           |
| react-dom        | DOM rendering                        |
| framer-motion    | Animations & transitions             |
| vite             | Dev server + build tool              |
| tailwindcss      | Utility-first CSS                    |
| autoprefixer     | CSS vendor prefixes (PostCSS plugin) |
| postcss          | CSS processing                       |
| @vitejs/plugin-react | JSX transform for Vite          |

---

## 1 — Install & run locally

```bash
# 1. Move into the project folder
cd barr-digital

# 2. Install all dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.
Hot-reload is on — save any file and the browser updates instantly.

---

## 2 — Build for production

```bash
npm run build
```

This outputs a fully optimised static site into the `/dist` folder.
You can preview it locally before deploying:

```bash
npm run preview
```

---

## 3 — Deploy to Vercel (recommended — free)

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI globally (one-time)
npm install -g vercel

# Inside your project folder:
vercel
```

Follow the prompts. Vercel auto-detects Vite and sets the correct build settings:
- **Build command:** `npm run build`
- **Output directory:** `dist`

Every `git push` after that triggers an automatic re-deploy.

### Option B — Vercel dashboard (no CLI needed)

1. Push your project to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project**.
3. Import your GitHub repo.
4. Vercel auto-fills the settings. Click **Deploy**.
5. Your site is live at `yourproject.vercel.app`.

You can add a custom domain (e.g. `barrdigital.com`) in the Vercel dashboard
under **Settings → Domains** — it walks you through the DNS setup.

---

## 4 — Adding your email service

The CTA form in `src/components/CTA.jsx` has a `handleSubmit` function with a
`// TODO` comment. The easiest free options:

### Formspree (zero backend, free tier)
1. Create an account at [formspree.io](https://formspree.io)
2. Create a form — you get a URL like `https://formspree.io/f/xyzabcde`
3. Replace the `handleSubmit` function:

```js
async function handleSubmit(e) {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  setSubmitted(true)
}
```

### EmailJS (sends directly to your Gmail/inbox, free tier)
See [emailjs.com/docs](https://www.emailjs.com/docs/) for the React integration.

---

## 5 — Customising content

All copy and data live in plain arrays at the top of each component file —
no separate data files needed at this scale.

| Component       | What to edit                                      |
|-----------------|---------------------------------------------------|
| `Navbar.jsx`    | Nav links array at the top                       |
| `Hero.jsx`      | `trustStats` and `proofItems` arrays             |
| `Services.jsx`  | `problems` and `services` arrays                 |
| `Process.jsx`   | `steps` array                                    |
| `Portfolio.jsx` | `projects` array — add real screenshots later    |
| `Testimonials.jsx` | `testimonials` array                          |
| `Pricing.jsx`   | `plans` array — prices + feature lists           |
| `FAQ.jsx`       | `faqs` array                                     |
| `Footer.jsx`    | `footerCols` array + brand copy                  |

---

## 6 — Adding Google Fonts (already in index.html)

DM Serif Display and DM Sans are loaded via the `<link>` tag in `index.html`.
To swap fonts: replace the Google Fonts URL and update `tailwind.config.js`
under `fontFamily`.

---

## Tips for going further

- **Real portfolio images:** Replace the `MockThumb` component in `Portfolio.jsx`
  with an `<img>` tag pointing to a screenshot of the live site.
- **Analytics:** Add Plausible or Google Analytics script to `index.html`.
- **SEO:** Update the `<title>` and `<meta name="description">` in `index.html`.
- **Contact page:** Duplicate `App.jsx` structure into a `/contact` route using
  React Router when you're ready to expand beyond a single page.
