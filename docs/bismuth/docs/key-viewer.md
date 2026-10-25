# Key viewer

Bismuth shows your key presses on screen as a grid of key cells, with optional rain rising from each key, a keys-per-second counter and press totals.

There are two panels, **hand** and **foot**, each with its own list of presets. The **Key Viewer** switch at the top turns both off at once.

| Panel | Built-in presets | On by default |
|-------|------------------|---------------|
| Hand | 10K, 12K, 16K | yes (12K) |
| Foot | 2K, 4K, 8K, 16K | no |

## Editing a preset

A preset is a set of rows, and each row is a set of cells. The top row sets the panel's width; lower rows stretch to match.

- **Cells** — a key, or a **KPS** or **Total** counter. Each cell can have its own label and a width multiplier.
- **Rows** — height, rain on or off, and a rain colour.
- **Shape** — key width, corner radius, border width, and the gap between cells. Corners are drawn as vectors, so they stay smooth at any size.
- **Colours** — background, border, label and count colours, separately for idle and pressed keys.
- **Text** — label and count sizes. Turn either off and the other fills the cell.
- **Placement** — position on screen and scale.

## Rain

Each press sends a bar up from the key for as long as you hold it.

- **Speed** — how fast the rain rises.
- **Fade start** and **track length** — where the rain begins to fade, and where it ends.
- **Width step** — how much narrower the rain gets on each lower row.
- **Shadow** — an optional soft halo around the rain, with its own colour.

## Ghost keys

Ghost keys send rain only. They have no cell, aren't counted as input, and never hit tiles. Assign them to slots in the top row; their rain is yellow unless you pick a colour.

## Counts

Every key counts its presses, and the **Total** cell sums the preset's keys. **KPS** counts the presses in the last second.

Counts persist across restarts when a preset has **Persist counts** on (the default); they're saved to `keycounts.txt` in the mod folder. **Reset counters** zeroes them all.

## DM Note presets

Bismuth reads and writes [DM Note](https://github.com/DmNote-App/DmNote) `preset.json` files.

- **Import** — put the file in the `DmNote` folder inside the Bismuth mod folder. The **DM Note presets** row on the Key Viewer page lists the files there; import one as a new hand or foot preset, and it becomes the active one.
- **Export** — every preset editor has **Export to DM Note**.

!!! note "What carries over"
    DM Note places keys freely and styles each one; Bismuth uses rows and one style per preset. On import, keys are grouped into rows by height, and the first key's colours, border and sizes become the preset's. KPS and Total positions come across; KPS average and maximum don't.
