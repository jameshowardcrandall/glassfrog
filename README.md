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
npm run develop
```

Site runs at `http://localhost:8000`.

## Deployment

Pushes to `master` automatically build and deploy to GitHub Pages via GitHub Actions. The site uses Gatsby with `pathPrefix: /glassfrog`.

## Adding New Pages

Drop a new React component into `src/pages/`. Gatsby automatically creates a route from the filename.

```shell
# Example: src/pages/my-thing.js → /glassfrog/my-thing/
```

## Stack

- Gatsby 3 + React 17
- TailwindCSS
- GitHub Pages (via Actions)
