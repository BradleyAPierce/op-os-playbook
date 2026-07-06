# MKM Solutions Static Microsite

This folder contains the original MKM Solutions microsite. It is intentionally kept as a legacy static HTML/CSS/JavaScript site while newer microsites, such as `/ls`, can use their own project structure.

## Local Development

Run the static server from the **repository root**, not from inside `site/`:

```bash
npm run dev:site
```

Then open:

- Main entrance: [http://localhost:8000/site/pages/index.html](http://localhost:8000/site/pages/index.html)
- Shortcut: [http://localhost:8000/](http://localhost:8000/) (redirects to the page above)

Important:

- Port **3000** serves the `/ls` Next.js app only. It does **not** serve this `/site` microsite.
- The URL must include `/site/` when using the repo-root server.
- Do not open HTML files directly with `file://`; `component-loader.js` needs `http://`.

Manual alternative:

```bash
python3 -m http.server 8000
```

## Routing

Routes are explicit static HTML files:

- `/site/index.html`
- `/site/pages/index.html`
- `/site/pages/**/[page-name].html`

There are no dynamic routes, bracket-based route folders, API routes, server actions, authentication flows, database integrations, or backend persistence in this microsite.

## Shared Assets

- Shared components live in `/site/components`.
- CSS lives in `/site/assets/css`.
- JavaScript lives in `/site/assets/js`.
- Images live in `/site/assets/images`.

Pages load `header.html`, `nav.html`, and `footer.html` on the client through `assets/js/component-loader.js`.

## GitHub Pages

Each active page includes a base-path script that resolves assets under `/op-os-playbook/site/` when published to GitHub Pages.

Do not change the existing Layered Security iframe or external resource paths without confirming the intended destination first.

## Archived Files

Legacy export and demo files that are not intended as production routes are stored in `/site/docs/archive`.
