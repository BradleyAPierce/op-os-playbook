# MKM Solutions Site2 Pilot

This folder is a static Next.js App Router pilot for converting the legacy `/site` microsite.

## Pilot Routes

- `/`
- `/pages/index/`
- `/pages/core/cloud/device-management/`
- `/pages/data-document-security/layered-security/`

The route structure is explicit. There are no dynamic routes, bracket route folders, API routes, route handlers, server actions, authentication, database logic, or backend persistence.

## Approach

This pilot keeps the legacy page markup as static local content and renders it through React components. It is intended to test whether the legacy site can be moved into a Next static export without changing the visual design first.

If the pilot is accepted, the next migration pass should replace raw legacy fragments with cleaner typed data and reusable React components section by section.

## Commands

```bash
npm install
npm run extract:pilot
npm run dev
npm run build:github
```

The GitHub Pages export uses `/op-os-playbook/site2` as the base path.
