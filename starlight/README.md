

````md
# Vue Docs – Astro Starlight Edition

_A mini documentation site rebuilt and rewritten for the **Product Documentation Cohort** of the Technical-Writing Mentorship Program._

[![Vercel Deploy](https://vercelbadge.vercel.app/api/<your-github-user>/Vue_docs)](https://vue-docs-two.vercel.app)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## Project goals

- Re-audit selected **Vue 3** pages (“Quick Start”, “API Styles”, etc.) for clarity, tone, and accessibility.
- Rewrite each page following the Google Developer Style Guide.
- Migrate the polished content into an **Astro Starlight** site.
- Host the result on **Vercel** for instant preview and feedback.

## Live demo

<https://vue-docs-two.vercel.app>

---

## Quick start

```bash
# clone
git clone https://github.com/<your-github-user>/Vue_docs.git
cd Vue_docs/starlight

# install
npm install

# run local dev server
npm run dev
````

Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## Repository map

```
Vue_docs/
├─ starlight/            # Astro project root
│  ├─ public/            # Static assets
│  ├─ src/               # Components, layouts, content
│  └─ package.json
├─ docs/                 # Audit reports and before-after screenshots
│  └─ quick-start-audit.md
├─ .github/              # Issue and PR templates
├─ .gitignore
├─ LICENSE
└─ README.md             # you are here
```

---

## Scripts

| Command           | What it does                           |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start local dev server with hot-reload |
| `npm run build`   | Generate static site in `dist/`        |
| `npm run preview` | Preview production build locally       |

---





