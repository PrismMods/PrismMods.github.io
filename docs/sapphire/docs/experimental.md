# Experimental tools

Off by default — turn on **Experimental tools** on the **Features** tab in `Ctrl+E`. These were built from a scan of 295 published charts, where most repeated events turned out to be placed one at a time. Everything here writes ordinary game events, one undo per write.

Keybinds for all of them ship **unbound**: set them in `Ctrl+E` → **Keybinds** → **Experimental**.

## Patterns

Open **Patterns** from the panel rail. Build events on a tile with the game's inspector, select it, press **Capture**, then:

- **Train** — the captured events every N beats across a tile range. Beats are musical: subdivisions and magic shapes keep the spacing, and a real tempo change re-derives it.
- **Ramp** — copies of one captured event with fields moving from start to end through an ease. One per tile, or all on its own tile (a cascade, such as MoveTrack angle offsets stepping by 25).
- **Camera** — zoom punches or rotation sways (a set plus a tween back) every N beats.
- **Retime** — one BPM SetSpeed per tile so a free-angle run keeps an even rhythm: a uniform 1/N beat, or **Fit run** to keep the run's length. The tile after the range gets its old speed back. Holds, pauses and free-roam inside the range are refused.

## Tile menu

Right-click a tile for:

- **Hide / show tile** — a PositionTrack with opacity 0 on just that tile. Hidden tiles get a dotted ring while editing.
- **Place track segment** — move the mouse and click to drop. Snaps to ½ tile; hold `Alt` for free placement, `Esc` cancels.
- On a multi-selection, **Retime…** and **Patterns…**.

## Multitrack

**Create multitrack here** in the tile menu makes a decorative second track, charted with the normal tile keys.

- **Charting** — keys add fake tiles after a cursor ring, `Backspace` deletes, `←` / `→` move, `I` twirls, and `Esc` leaves. The editor's direction-button ring follows the cursor, and the key pointing back deletes, as on a real tile.
- **Playing** — two fake planets play it at its own BPM, starting a set number of host beats after the host tile.
- **Palette** — BPM, start, size, colours, hiding outside the run, fading passed tiles, a **fake end tile** (the Portal icon on the last tile), and a **hit event tag**: events carrying that tag are copied onto every fake hit (keep the originals off).

Each edit touches only that track's decorations, never the level's others, and stays one undo step. The multitrack is saved in an editor comment on the host tile, so the level plays without the mod.
