# Layered Security Certification Microsite

Static Next.js App Router project for the Layered Security certification splash page.

## Routes

- `/` through `app/page.tsx`

This project intentionally avoids dynamic routes, bracket route folders, API routes, server actions, authentication, database logic, and backend persistence.

## Local Development

```bash
npm install
npm run dev
```

## Static Export

```bash
GITHUB_PAGES=true npm run build
```

The GitHub Pages build uses `/op-os-playbook/ls` as the base path.

To publish from the repository branch root, run:

```bash
npm run build:github
```

That command exports the app and copies the generated static files into `/ls` so GitHub Pages can serve the microsite at `/op-os-playbook/ls/`.
