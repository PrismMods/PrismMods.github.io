# Hz tool

Chart by **frequency** instead of by angle. Open it from the ♪ toolbar cell or with `Shift+F`.

A tile of charter angle A° lasts `A/180` beats, so at B BPM:

```
H = 180·B / A     hits per minute        A = 180·B / H = 3·B / F
F = H / 60        hits per second (Hz)   H = F · 60
```

A 20 Hz buzz at 175 BPM is `3 × 175 / 20` = **26.25°** per tile.

## Two BPMs

There are two BPMs, and the difference between them is the whole tool.

- **Shape BPM** is the tempo the run has to play at, and it's an **output**. Pick the note and the angle the shape needs, and `shape BPM = angle × Hz ÷ 3` follows. You don't know it in advance; the tool tells you. A 20 Hz buzz on a 16-sided circle needs 1050 BPM.
- **Base BPM** is what the chart is already at — the level BPM times the anchor tile's speed — detected from the selection. Its **padlock pins it**, so it stops following the selection; typing a value pins it too, since a base BPM the next click silently wiped would be a trap. It never feeds the pitch maths. It does two jobs: it's the denominator of the **SetSpeed** shown beneath it, and it's the clock the run's length is quoted in (`beats = tiles × base BPM ÷ (60 × Hz)`).

## Hz, angle and shape BPM

**Hz, angle and shape BPM are bound by one equation**, so two of the three are free. Each row has a **padlock**: the locked value holds, and with nothing locked the shape BPM absorbs every edit. Lock the shape BPM ("this is all the speed I have") and the angle moves instead. Hits per minute is Hz × 60 and tracks either.

## Duration and pitch

- **Duration (beats)** is exact, and takes priority over pitch. A run of N tiles at F Hz lasts N/F seconds whatever the geometry, so filling exactly the beats you asked for means `actual Hz = tiles × base BPM ÷ (60 × beats)` — and since the tile count is a whole number, only a *ladder* of frequencies is reachable for a given duration. **Actual Hz** shows the one you'll get, with the error in **cents** beside it, highlighted past ±5 (a semitone is 100). Duration is never nudged to make the pitch come out.
- **Exact pitch (pad with a pause)** makes duration *and* pitch exact at once. They only conflict because the tile count is a whole number, so a **Pause** event absorbs the remainder: the run is deliberately floored short, plays at the target frequency to the cent, then holds for what's left of the duration. In circle mode you get all three — closed loop, exact pitch, exact duration. At 175 BPM over 4 beats, a 16-sided circle at 20 Hz is one closed lap of 16 tiles running 2.333 beats, plus a 1.667-beat pause. The pause rides the run's last tile, with the restoring SetSpeed forced onto the same tile so the hold is counted in section beats rather than the run's fast ones.

## Circles

- **Full circle** closes the run into a loop. A tile of charter A turns the heading by `180 − A`, so N of them close exactly when `N × (180 − A) = 360`: the run is a regular N-gon and the angle is pinned at `180 − 360/N`. Drive it from **Sides** and the tool reports the BPM (or Hz, per the padlock) that circle costs. A smooth many-sided circle needs tiles that each turn very little, which at buzz frequencies means a very fast section — exactly what the SetSpeed below can write. **Laps** re-traces the same polygon: 10 laps of a 16-gon is 160 tiles over ten circles, *not* one 160-sided circle.
- **Perfect circles** (on by default) forces that closure. The tile count must then be a whole number of laps, which is a coarse ladder, and the pitch pays for it — the error is shown in cents so you can see the cost. Switch it **off** and the run keeps the same curvature but may stop partway round: the tile count is free to be the one nearest ideal, so the pitch is as accurate as a whole count allows and the shape ends as an arc. At 175 BPM over 4 beats, a 16-sided circle at one lap is 16 tiles and nearly an octave flat; the same curvature stopped at 27 tiles (1.69 laps) is −27 cents. Duration is exact either way.
- **Suggest sides & laps** (closed loops only) finds the most accurate pair for the duration you set. The pitch error depends only on the *product* sides × laps, so it takes the product nearest the ideal tile count, then splits it into the factor pair whose side count is closest to the circle you asked for. A longer duration buys accuracy: at 175 BPM a 20 Hz circle is 7×1 and +36 cents over one beat, 9×3 and −27 cents over four.

## Writing the SetSpeed

**Write SetSpeed for this BPM** is on by default. The angle was solved for your base BPM, so if the anchor isn't already playing at it, the run is the wrong frequency however right the geometry is. A floor's speed governs the traversal *out* of it, so the multiplier (shape ÷ base) rides the **anchor tile** — the one you had selected — and the restore rides the run's **last tile**. At the end of the track there's nothing after, so nothing is restored. No event is written when the two BPMs already match. The status line after **Place** says which happened.

## Notes and tuning

- **Note keyboard** — piano keys, with `−` / `+` to shift octave. It shows as many octaves as the panel is wide: widening the window adds whole octaves, and keys are never drawn narrower than they can be hit. Clicking a key sets the target frequency to that note's pitch, for charting a melody as a buzz. It's a note picker, not MIDI input.
- **Tuning** (`Tuning +`) — **EDO** (equal divisions of the octave, 1–72) plus the reference pitch that pins the grid: `f = ref · 2^((oct − refOct) + (step − refStep)/EDO)`. The default is 12-EDO with step 9 of octave 4 at 440 Hz — ordinary concert tuning — so the keyboard is a normal piano until you change something. Any other EDO swaps the piano for a strip of equal degrees (the octave landmark tinted) and labels notes as `steps\edo`, since letter names would be a lie outside 12. Wide divisions show one octave instead of two.

## Placing

**Place** appends the run onto the selected tile as one undo, following the path's own turn direction and any twirl already in effect. **To angle pad** hands it to the [angle pad](quick-chart.md#angle-pad) as `(26.25)*16`, so you can add twirls or a tail before committing.
