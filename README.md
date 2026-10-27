# PrismMods.github.io

Home page for [PrismMods](https://github.com/PrismMods) — mods for
*A Dance of Fire and Ice* — with a page per mod and docs for Sapphire and
Topaz. Quartz's docs live at [quartzz.xyz](https://quartzz.xyz/docs/).

## Layout

- `index.html` — home page: the prism hero and the mod list.
- `quartz/`, `topaz/`, `sapphire/`, `amethyst/` — one page per mod. Each sets
  its own `--gem` colour on `<body>`.
- `styles.css` — every page's styles, including the scroll-driven motion.
- `site.js` — theme and language toggles, every page's English and Korean
  strings, the step switch for the pinned scenes, and the WebGL crystals in
  each mod page's hero.
- `docs/sapphire/`, `docs/topaz/` — Zensical docs, the same setup as
  Quartz's. They build into `/sapphire/docs/` and `/topaz/docs/`.

## Checks

```sh
node test-prism.mjs
```

Checks the prism projection, boots the home page script, and checks that every
`data-i18n` key on every page has an English and a Korean string.

## Local preview

The docs need Zensical. Install it once into a local virtualenv (Homebrew's
Python refuses a global `pip install`):

```sh
python3 -m venv .venv && .venv/bin/pip install zensical
```

Then build the whole site exactly as it deploys, and serve it:

```sh
sh build.sh && python3 -m http.server 8000 -d pages
```

For the pages alone, with no docs, `python3 -m http.server 8000` from the repo
root is enough. To edit docs with live reload, on a port of its own (it binds
`localhost` specifically, so on 8000 it would shadow the site server):

```sh
cd docs/sapphire && ../../.venv/bin/zensical serve -a localhost:8001
```

The scroll animations are off when the system asks for reduced motion
(macOS: System Settings → Accessibility → Display → Reduce motion).

## Deploy

`.github/workflows/pages.yml` runs the checks and `build.sh`, then deploys
`pages/` to GitHub Pages on every push to `main`. The repository's Pages
source must be set to **GitHub Actions** (Settings → Pages).
