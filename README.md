# Honest Drain Demo

Static demo website for Honest Drain, built with Eleventy.

## Development

Editable source lives in `src/`. Eleventy builds the deployable static site into `_site/`.

Install dependencies once:

```sh
npm install
```

Run a local dev server:

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

The generated site is written to `_site/`.

## Shared Site Pieces

- `src/_data/site.json` — business name, phone, footer copy, and global constants
- `src/_data/navigation.json` — primary nav, mega menus, and footer links
- `src/_includes/partials/head.njk` — shared metadata, assets, OpenGraph, and JSON-LD output
- `src/_includes/partials/header.njk` — one central header/nav
- `src/_includes/partials/footer.njk` — one central footer
- `src/_includes/layouts/base.njk` — shared page shell
- `src/sitemap.xml.njk` — generated XML sitemap from page front matter

## GitHub Pages

This site builds to plain HTML, CSS, and JavaScript, so the deployed site stays static.

Recommended GitHub Pages settings:

- Source: `GitHub Actions`
- Workflow: `.github/workflows/deploy.yml`

## Site Structure

- `/` — home (`index.html`)
- `/drain-and-sewer-services/` — residential service hub with sub-pages for drain cleaning, hydro jetting, inspection, sewer repair, exterior drains, septic, and more
- `/commercial-service/` — commercial service hub with sub-pages for floor drains, storm drains, hydro jetting, sewer service, and maintenance programs
- `about.html`, `faq.html`, `contact.html`, `common-clogs.html`, `why-honest-drain.html`, `site-map.html`
- `sitemap.xml`, `robots.txt`, `404.html`

Each service URL resolves to a directory with an `index.html`, so the URLs read like `/drain-and-sewer-services/drain-cleaning/emergency-drain-cleaning/`.

## SEO

- Canonical URLs, OpenGraph tags, and JSON-LD on every page
- BreadcrumbList JSON-LD on sub-pages
- Service / OfferCatalog JSON-LD on service pages
- LocalBusiness (Plumber) and WebSite JSON-LD on the home page
- FAQPage JSON-LD on the FAQ page

## Demo Notes

- Phone is `(401) 593-5553`; update `src/_data/site.json` if it ever changes.
- The contact form is frontend-only until connected to a form service or backend.
- Real business details, service areas, testimonials, and original photography should be added before launch.
