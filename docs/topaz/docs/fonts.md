# Fonts

Topaz can set its own text — the overlay, the key viewer and the settings panel — and the game's own text in fonts you choose.

## Getting fonts

The download ships without fonts. Either:

- install a font pack from **Appearance → Font packs**, or
- drop your own `.ttf` or `.otf` files into `…/Topaz/Fonts/` and pick them in the settings.

## Where fonts apply

- **Overlay font** — stat rows, combo, judgements, attempts, the key viewer. Label, value, combo and key viewer text can each use a different weight of the family.
- **Panel font** — the settings panel itself.
- **Game font** — the game's own text: menus, the HUD, level titles. Pick **Game default** to leave the game's text alone; pick a family and Topaz restyles every piece of game text in it.

## Game text

With a game font chosen, two sliders tune it:

- **Scale** — text size relative to the game's.
- **Line spacing** — the gap between lines.

Per-element weights live on the **Game UI** tab under **Element weights**; see [Game UI](game-ui.md#element-weights).

Characters your font doesn't have fall back to the game's original font, so other scripts still render. Other mods' interfaces are left alone.
