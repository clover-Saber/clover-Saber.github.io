# Hao Yu's personal website

Astro Cactus v8.3.0, for **clover-Saber/clover-Saber.github.io**.
Canonical URL: https://clover-saber.github.io/

## Develop

Node.js 24 and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm exec astro check
pnpm build
pnpm preview --host 127.0.0.1 --port 8791
```

`pnpm build` also builds Pagefind search. Use the production preview to test search.

## Edit content

- Personal details and contact links: `src/data/profile.ts`
- Site title, domain and navigation: `src/site.config.ts`
- Original portrait: `src/assets/profile-yuhao.jpg` (Astro optimizes it for display)
- Homepage, about and projects: `src/pages/`
- Articles: `content/posts/*.md` with `title`, `description` and `publishDate` frontmatter

No database synchronization or EvoMyn dependency. Content is edited explicitly as Markdown.

## Deployment

The Pages workflow validates PRs targeting `master` and deploys `dist` after changes reach `master`.
When publishing, set GitHub Settings → Pages → Source to GitHub Actions.

## Provenance

See `docs/migration.md` for the original-site audit and rollback reference.
Cactus upstream: https://github.com/chrismwilliams/astro-theme-cactus at `728f1f4eeb80208398649261d7635f311cafa011`.
Its MIT license is retained; upstream documentation is in `docs/cactus-upstream.md`.
