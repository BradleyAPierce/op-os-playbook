# MKM Solutions Site2 Migration Preview

This folder is a static Next.js App Router migration preview for the legacy `/site` microsite.

## Routes

The project now includes explicit static routes for every active HTML page in `/site/pages`.

The route structure is explicit. There are no dynamic routes, bracket route folders, API routes, route handlers, server actions, authentication, database logic, or backend persistence.

## Approach

This migration keeps the legacy page markup as static local content and renders it through React components. It is intended to establish full route parity in Next.js without changing the visual design first.

The next migration pass should replace raw legacy fragments with cleaner typed data and reusable React components section by section.

## Commands

```bash
npm install
npm run extract:pilot
npm run dev
npm run build:github
```

The GitHub Pages export uses `/op-os-playbook/site2` as the base path.
