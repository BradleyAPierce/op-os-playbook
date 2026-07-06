# MKM Solutions Site

This folder is the static Next.js App Router version of the MKM Solutions microsite.

## Routes

The project includes explicit static routes for every active HTML page from the archived legacy microsite in `/archive/site-legacy-static/pages`.

The route structure is explicit. There are no dynamic routes, bracket route folders, API routes, route handlers, server actions, authentication, database logic, or backend persistence.

## Approach

This migration keeps the legacy page markup as static local content and renders it through React components. It establishes full route parity in Next.js without changing the visual design first.

The next migration pass should replace raw legacy fragments with cleaner typed data and reusable React components section by section.

## Commands

```bash
npm install
npm run extract:legacy
npm run dev
npm run build:github
```

The GitHub Pages export uses `/op-os-playbook/site` as the base path.
