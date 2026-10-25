# Quick chart and angle pad

Quick chart mode is fast, tool-less charting. Toggle it with `Shift+K` or the toolbar's **Q** cell. While it's on, the timeline hides and the keys below are live — in the editor only, and never while you're typing in a field.

Every key here is rebindable in `Ctrl+E` → **Keybinds**.

| Key | Action |
|-----|--------|
| `I` | Toggle a **twirl** on the selected tile(s). |
| `O` | **Set speed** — prompts for BPM or a multiplier, then writes a SetSpeed event. |
| `[` / `]` | **Halve / double** the selected tile's SetSpeed value. |
| `Shift+P` | **Pause** — prompts for beats, then writes a Pause event. |
| `Shift+L` | **Tile location** — prompts for X/Y, then writes a PositionTrack event. |
| `Shift+R` | **Move tile** — prompts for beats and X/Y, then writes a MoveTrack event on the selected tile. |
| `Shift+O` | **Hold** — prompts for a duration, then writes a Hold event. |
| `U` | **Edit** the selected tile's event. One event opens its parameters; several open a numbered list previewing every parameter (pick with `1`–`9` or a click). `Enter` applies and closes, `Esc` closes, `Tab` moves between fields. |
| `Shift+G` | **Angle pad** — a floating field that appends a whole run of tiles. |
| `Shift+K` | Toggle quick chart mode itself. Works while the mode is off. |
| `Shift+F` | The [Hz tool](hz-tool.md). Works with the mode off too. |

## Angle pad

Turning quick chart mode on opens an angle pad in the top-right corner, clear of the toolbar's drop-down submenus and of the key hints. `Shift+G` opens another. Pads are duplicable — each keeps its own value as a scratch preset — and draggable, and every one can be closed, the last included.

### Syntax

Space-separated **relative** angles, in the charter convention: `180` is straight on, `90` is a quarter turn.

- **Math** in any token — `180-30`, `360/8`, `2*45`.
- **Twirl** — a trailing `t` twirls that tile: `30t 30t 180`.
- **Group repeat** — parenthesise and multiply: `(30t 150 180 180 180)*4`. Groups can nest.

### Ghost preview

The run the pad would place is drawn ahead of the selected tile at half alpha, updating as you type. It walks the same spin rules the builder does, so it can't disagree with what **Place** produces. Ghosts are chained only to each other, not to the real tiles around them, so the seam at the anchor is a hair off. The preview is capped at 200 tiles.

The [Hz tool](hz-tool.md) shows the same preview for its own run. While its panel is open it takes over the ghosts, since two panels competing for them every frame would just thrash.

### Repeat count

**`× n`** lays the expression down *n* times. Hover it for ▲▼ nudge arrows.

This is deliberately separate from the `(…)*n` group syntax. Baked into the text, the repetition would make the twirl button flip the first tile of *every* copy. As a count, the expression stays one unit, so flipping its leading twirl costs only the first pass. The spin carries across repetitions, so the rest continue correctly from there.

### Swirl button

The swirl button inverts the first tile's twirl, **on the first repetition only**. It does not edit what you typed.

A twirl in the expression is part of the shape: `30t 30t 120t` is a unit whose three twirls make it close, so rewriting it to `30 30t 120t` would change every repetition and the run would stop being that shape. What the toggle says is narrower — the path already enters turning the right way, so the leading twirl is redundant *this once*. That's a property of the entry, not of the pattern, so it only applies to the first pass. The button lights up while it's on.

### The rest of the header

- A **clear** button (bin icon — `×` already means close on that row).
- **`?`** opens the pad's help page.
- **Add to Shape Library**, the grey button beside **Place**, saves the expression (repeats included) into the [shape library](shape-library.md)'s **From Angle Pad** category with a repeat of 1, since a pad expression already spells out the whole run. `(…)*n` groups are flattened before saving.
