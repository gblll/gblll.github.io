# gblll.github.io

Personal academic website of **Zi-Bin Lin, PhD**, built with [Astro](https://astro.build) and deployed automatically to GitHub Pages (`https://gblll.com`).

## Pages

- **`/` (`About`)** — Academic bio, research interests, recent news, selected publications, and academic profile links.
- **`/publications/`** — Full reverse-chronological publication archive grouped by online publication year, with co-first/corresponding markers, editorial honors, DOI links, and inline BibTeX expanders.
- **`/research/`** — Ongoing and completed ultrasonic research projects in a 3-column card grid with single-screen project briefs linked to key publications.
- **`/biography/`** — Two-column CV with sticky Table of Contents, modular section cards (Contact, Experience, Education, Awards, Conference Presentations, Patents, Skills & Techniques, Interests), and print-ready PDF export.
- **`/news/`** — Chronological milestones archive.

## Updating Content

- All site text, publications, research projects, news, and biography data live in [`src/data/site.ts`](src/data/site.ts).
- Portrait photo: replace `public/avatar.svg` (or drop `public/avatar.jpg` and set `avatar: '/avatar.jpg'` in `src/data/site.ts`).
- Research thumbnails: place figures in `public/projects/` and update `thumbnail` in `src/data/site.ts`.

## Local Development

```bash
npm install      # Install dependencies
npm run dev      # Start local preview at http://127.0.0.1:4321
npm run build    # Build production static site into ./dist
```
