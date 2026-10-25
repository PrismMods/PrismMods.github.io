# Shape library

A dockable, resizable palette of reusable **shapes**. Each shape is a base angle subdivided into key-count variants, inserted as a repeating pseudo.

## Categories

A collapsible rail holds **Built-in** (90°, 120°, 240° and 270°) and your own categories. Use `+ Category` and `+ Shape` to add, rename inline, and `×` to delete (with a confirmation popup).

## Variants

Each shape offers key-count variants — 2-key, 3-key and so on. For each variant:

- **Editable angles** — each tile's charter angle is a field. Editing one rebalances the others so the run still sums to the base angle. `t` marks twirled tiles.
- **Repeats (n)** — how many units to append. Built-ins keep their curated default (the count that closes the star); **anything you make defaults to 1**, placed exactly as written.
- **Preview** — a live path render: rounded ADOFAI-style tiles, red and blue swirl markers (blue when a tile's resulting angle is 180° or more), and the planet at the start.
- **Insert** — appends the run onto the selected tile as one undo. With no tile selected it does nothing and says so, since there's no anchor to build from.
- **Rotate** — mirrors the shape along its x-axis, the other of the two valid twirl parities.

## Twirls and mirroring

- **Twirls are never stacked.** The game toggles a spin flag per event, so two Twirls on one floor cancel each other while still drawing a swirl marker — and a run's first twirl lands on the anchor tile, exactly where you're most likely to have put one. Every Sapphire build *toggles* rather than appends: it removes the existing event instead of adding a second, which gives the same spin and leaves valid data.
- **Twirled anchors mirror automatically.** Insert onto a tile whose spin is counter-clockwise (it, or an earlier tile, carries a twirl) and the shape lands **vertically mirrored**, with the same charter angles and the same twirls as on a fresh track. Keeping the original orientation there would read every angle back as `360 − angle`, so a 30° grace note would become a 330° beat.

## Your own shapes

`+ Shape` opens a form: name, category, and an **angle expression** in the [angle pad's](quick-chart.md#syntax) `30t 30t 180` notation — or **From selection**, to capture the selected tiles' angles and twirls. The angle pad's **Add to Shape Library** button saves into a **From Angle Pad** category.

Custom shapes and categories **persist** across restarts.

## Layout

Drag any edge or corner to resize. The rail and preview columns reflow to the new size, and to docking.
