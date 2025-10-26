# Astro Multisite Monorepo

Shared technical SEO core + brand themes, with per-site Astro apps.

- `packages/seo-core`: shared meta/schema/sitemaps/robots/analytics helpers
- `themes/<brand>`: visual components
- `sites/<domain>`: Astro site using a theme + seo-core

## How to add a new brand & site

1. Duplicate the theme:

cp -R themes/moveroo themes/

Update /theme.config.ts and components

2. Duplicate the site:

cp -R sites/moveroo.com.au sites/

Update astro.config.mjs (site URL) and src/config/site.ts

3. Run:

pnpm -w dev:site 

## Per-page SEO overrides
Use `src/layouts/Page.astro` props: `title`, `description`, `ogImage`. Canonical is auto-built from path + `siteUrl`.

## Analytics
Enable one provider in `src/config/site.ts`:
- Matomo: `{ url, siteId }`
- Plausible: `{ domain }`
- GA4: `{ id }`
