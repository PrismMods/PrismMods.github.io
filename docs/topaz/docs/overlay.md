# Overlay

The overlay is Topaz's in-game stat display: a column of stat rows on each side of the screen, the combo counter, timing scale, judgement counts, attempts and FPS.

## Stat rows

| Row | On by default | What it shows |
|-----|---------------|---------------|
| Progress | yes | How far through the level you are. |
| Accuracy | no | Accuracy %. |
| X-Accuracy | yes | X-accuracy %. |
| BPM | yes | The level's BPM. |
| Tile BPM | yes | The BPM of the tile you're on. |
| KPS | no | Keys per second (tile BPM ÷ 60). |

The **Show overlay** toggle controls all stat rows at once. It doesn't affect the combo counter, which has its own switch.

For each row you can choose:

- **Side** — left or right. Progress, accuracy and X-accuracy start on the left; BPM, tile BPM and KPS on the right.
- **Label** — replace the built-in name (`Progress`, `XAccuracy`, `TBPM`, …) with your own text.
- **Colour** — a gradient across the value's range, or a solid colour.

Settings shared by all rows:

- **Separator** — the text between a label and its value. Default ` | `.
- **Label and value weights** — set label and value weights separately, when the font family has them. Labels default to Medium.
- **Scale** — the size of both columns.
- **Shadow** — one master switch and colour for every overlay text shadow.

### Default colours

| Value | Gradient |
|-------|----------|
| Progress | Grey to blue, gold at 100%. |
| Accuracy and X-accuracy | Red, orange, green, blue; gold at 100%. |
| BPM, tile BPM and KPS | White to blue. |
| Combo | White to blue, reaching blue at 1000. |

## Timing scale and judgements

The **timing scale** row and the **judgement counts** row sit at the bottom centre. Each has its own vertical offset and size, and the judgement counts have adjustable spacing.

## Combo

A **Perfect Combo** counter above the centre of the screen, with its own on/off switch independent of the stat rows.

- **Text** — the label above the number; default `Perfect Combo`.
- **Size** — overall size, plus separate sizes for the label and the number.
- **Position** — vertical offset of the whole display, and of the label relative to the number.
- **Pulse** — on every perfect hit, the number grows and the label lifts, then both settle. Set how far the label rises, how much the number grows, and how long it takes.
- **Autoplay** — choose whether autoplayed tiles add to the combo. They never break it either way.
- **Shadows and weights** — the label and number each have their own shadow and font weight. The number defaults to the family's heaviest weight.

Any judgement other than Perfect breaks the combo.

## Attempts

**Attempts** counts your tries on each level, and the count is saved between sessions. **Full attempts** counts only the runs started from 0%, leaving checkpoint restarts out; it shows as a second row under Attempts.

Both are off by default. You can move the attempts display anywhere on screen. Counts live in `TopazAttempts.txt` in the mod folder.

## FPS

A frame-rate counter in the bottom-right corner.

## Song title

The song title isn't an overlay row, but Topaz can restyle it: set its size and vertical offset, and draw it in the overlay font. See [Game UI](game-ui.md#song-title).
