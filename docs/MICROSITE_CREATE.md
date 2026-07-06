# Microsite Create Prompt

Use this prompt when creating a new microsite in the `op-os-playbook` repo.

## Prompt For Codex

Build a new static microsite in this repo using the existing single root Next.js App Router architecture.

Microsite name:

```text
{MICROSITE_NAME}
```

Route:

```text
/{MICROSITE_NAME}/
```

Follow these rules exactly:

- Use the existing root Next.js app. Do not create a separate Next.js project inside the microsite folder.
- Do not add a new `package.json`, `next.config.mjs`, `tsconfig.json`, `node_modules`, or `.next` inside the microsite folder.
- Keep all source code under:
  - `app/{MICROSITE_NAME}/`
  - `components/{MICROSITE_NAME}/`
  - `data/{MICROSITE_NAME}/`
  - `public/{MICROSITE_NAME}/`
- Treat the root `/{MICROSITE_NAME}` folder as generated GitHub Pages output only. Do not hand-edit content there.
- Use only explicit static routes and static page files.
- Never create dynamic routes.
- Never create `[slug]`, `[id]`, `[...slug]`, `[[...slug]]`, or any bracket-based route folder.
- Do not use `generateStaticParams`.
- Do not render pages from URL params.
- If repeated pages are needed, create explicit static routes or ask before proceeding.
- Do not add API routes, server actions, authentication, database logic, account systems, backend persistence, AI feedback routes, or server-side runtime assumptions.
- Client-side interactivity is fine when needed.
- Keep content local, typed when practical, and route structure simple.

## Required Folder Pattern

For a microsite called `mfp`, create source like this:

```text
app/mfp/
  page.tsx
  layout.tsx
  globals.css

components/mfp/
  MfpSplash.tsx

data/mfp/
  content.ts

public/mfp/
  images-or-assets-go-here
```

The generated publish folder will be:

```text
mfp/
```

That generated folder should come from `npm run build:github`.

## Asset Rules

- Put microsite-specific assets in `public/{MICROSITE_NAME}/`.
- Reference those assets from React using `/{MICROSITE_NAME}/asset-name.ext`.
- If the asset path must account for GitHub Pages, use:

```ts
const repoBase = process.env.GITHUB_PAGES === "true" ? "/op-os-playbook" : "";
const assetBase = `${repoBase}/{MICROSITE_NAME}`;
```

Then reference:

```tsx
<img src={`${assetBase}/asset-name.svg`} alt="" />
```

## Export Script Update

After adding a new microsite route, update `scripts/sync-static-export.mjs`.

Add the generated folder name to `publishTargets`:

```js
const publishTargets = [
  "404.html",
  "404",
  "_next",
  "_not-found",
  "index.html",
  "index.txt",
  "site",
  "ls",
  "{MICROSITE_NAME}",
  "__next.__PAGE__.txt",
  "__next._full.txt",
  "__next._head.txt",
  "__next._index.txt",
  "__next._tree.txt"
];
```

## Optional Root Index Update

If the root index should list the new microsite, update `app/page.tsx` and add:

```ts
{
  href: `${repoBase}/{MICROSITE_NAME}/`,
  title: "{DISPLAY_NAME}",
  description: "{SHORT_DESCRIPTION}"
}
```

## Build And Verify

Run:

```bash
npm run build
npm run build:github
```

Then verify:

```text
http://localhost:3001/{MICROSITE_NAME}/
```

For GitHub Pages, the generated URL should be:

```text
/op-os-playbook/{MICROSITE_NAME}/
```

Also check:

- No bracket route folders were created.
- No `app/api` folder was created.
- No `route.ts` or `route.js` files were created.
- No `generateStaticParams` was added.
- No new nested Next app files were created inside `/{MICROSITE_NAME}`.
- `/{MICROSITE_NAME}` exists only as generated static export after `npm run build:github`.

## Final Summary Format

When complete, report:

- New route created.
- Source folders added.
- Export script updated.
- Build commands run.
- Local URL.
- GitHub Pages URL path.
- Any known limitations or follow-up content placeholders.
