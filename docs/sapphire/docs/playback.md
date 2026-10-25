# Edit and Play mode

One chip above the timeline, left of the difficulty chip, swaps between the two modes. There's no third state, so the chip always reads the mode you're in.

## Edit

The clean charting screen. Sapphire's overlays and the key viewer stand down, and the game's difficulty, no-fail and autoplay icons and the hit error meter hide.

Starting a playtest turns autoplay on. Uncheck **Autoplay in edit mode** in `Ctrl+E` → **Features** if you'd rather play it yourself.

## Play

The playtest mirror: autoplay off, no-fail on (optional — turn it off to feel the misses), the timeline hidden, and every Sapphire surface hidden **except the pitch overlay**. Tile placement and deletion are refused, so a stray key can't edit the level you're auditioning.

The corner master switch hides too, so the mode chip (or `Ctrl+E`) is the way back.

Autoplay and no-fail are set when you switch the mode on and when a playtest starts, not every frame, so flipping autoplay mid-run still works.

## Other playback tweaks

- **Practice pitch** — drives the game's own `playbackSpeed`, so hitsounds follow.
- **Non-destructive pitch overlay.**
- **WASD** camera pan.
- **Autoplay-pause key.**
- **Tile-angle readout** — `Angle 90° at 120 BPM (240 eff BPM)`: the tile's BPM after SetSpeed, and the rate it's actually hit at (BPM × 180/angle, so a 90° tile reads double). Toggle the BPM part in `Ctrl+E` → **Features** → **Effective BPM**.
