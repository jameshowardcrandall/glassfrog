# Glassfrog

Personal hub for interactive documentation, dashboards, and tools — deployed via GitHub Pages.

**Live site:** [jameshowardcrandall.github.io/glassfrog](https://jameshowardcrandall.github.io/glassfrog/)

## What's Here

| Page | Description |
|------|-------------|
| `/` | **Delivery Model Dashboard** — REDM Product Engineering vs. Analytics comparison with lifecycle, data flow, and matrix views |

## Local Development

```shell
npm install
npm run dev
```

Site runs at `http://localhost:4321/glassfrog/`.

## Deployment

Pushes to `master` automatically build and deploy to GitHub Pages via GitHub Actions.

## Adding New Pages

Drop a new `.astro` or React component into `src/pages/`. Astro automatically creates a route from the filename.

```
src/pages/my-thing.astro  →  /glassfrog/my-thing/
```

## Stack

- Astro 4 + React 18
- GitHub Pages (via Actions)
