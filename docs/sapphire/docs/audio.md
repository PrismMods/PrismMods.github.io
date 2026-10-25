# Audio window

The **Audio** button beside the song offset opens the Audio window. Nothing is analysed until you press **Analyse** — a full decode and tempo pass on every level open would be felt as the editor being slow to open, and most sessions never need one. Until then the window is just that button; afterwards it becomes **Re-analyse** and the rest appears.

**Advanced** exposes the analysis parameters — window, step, smoothness λ and tempo bins — for a song that defeats the defaults.

Playback runs on Sapphire's own audio source, never the game's conductor, so scrubbing can't desync the editor's clock.

## Waveform

Drag the scrub anywhere on the waveform, read the position in milliseconds, and press ▶ to audition from there.

The waveform carries the **beat grid** drawn from the level's own BPM and offset, with bar lines brighter than beats. It's the quickest way to judge an offset: if the lines sit on the transients, it's right.

### Navigating

- Scroll to zoom about the cursor, down to 50 ms across the window.
- Shift-scroll, or drag with the right or middle button, to pan. `−`, `+` and **Fit** do the same from the button row.
- Playback pulls the view along when it leaves the window, and dragging the scrub past an edge pans rather than stopping, so a zoomed-in scrub can still reach the rest of the song.
- **Music** and **Click** sliders set the two levels independently. Judging whether a click sits on a transient is a balance problem before it's a timing one.

## Tempo curve

Under the waveform is a **tempo curve** for the whole song, on the same time axis and zoom, so acceleration, deceleration and base-BPM shifts are visible where they happen. The readout shows the tempo under the scrub.

The line is **shaded by confidence**. A tempo that's moving can't pile onto one phase inside the analysis window, so dim means "moving or unclear here", not "wrong". The lane's vertical scale is fixed at a minimum of ±12% around the detected tempo, with a guide line there, so a steady song reads as a steady line rather than having its last half-percent stretched across the lane. The readout gives the actual spread as a percentage.

??? info "How the curve is decoded"
    Every tempo is scored in every window, and the line is decoded as a **path**: the sequence that maximises the total score minus a cost that is *linear* in how far the tempo moves.

    Linear matters. A quadratic cost charges L·d² for one jump but only L·d²/N for N small steps covering the same distance, so it rewards smearing every change into a slow ramp — a song going 250 → 270 read as a wander through 256, 260 and 264. A linear cost charges the same total however a change is split, so the audio decides whether it's a step or a ramp.

    Nor is each window asked separately. Asking separately, even with a bias toward the previous answer, drifts: each step is only marginally better than staying put, nothing pulls the line back, and a song holding one tempo for three minutes wandered 14% off it. A global anchor then folds the result into one octave, since autocorrelation can't tell a beat from a half-beat.

    In practice: PP BREAKER, which steps 250 → 270, resolves into plateaus at 250.0 and 269.2. 初音ミクの激唱, which holds one tempo throughout, reads flat to within 0.9%. Second Revolution, charted at 240, reads flat at 240.0 within half a percent across three minutes. Megantus — whose single global estimate was hopeless — resolves into a real curve dipping to 215 and peaking at 268 before settling at 242. *Parallel Universe Shifter* traces a continuous journey from 95 up to 131 and back down through 85 to 70, and *TremENDouS* opens at twice its charted base and climbs 33%, matching the accelerandi its own speed events spell out.

## Tempo

The window also reports a single global **tempo**. It never writes on its own: the buttons apply it, and only while the readout says *confident* or *steady*.

The multiple is a `÷4 ÷2 Use ×2 ×4` ladder plus `×1.5 ÷1.5`, rather than a guess, because autocorrelation can't tell a beat from a half-beat.

??? info "How the tempo is measured"
    Autocorrelation of the onset flux finds the period, then a fine sweep maximises how tightly the onsets fold onto one beat, which is what makes it precise enough for a chart.

    A reading counts as confident when it's **corroborated**: the global estimate and the tempo curve are different routes through the same envelope, so a curve that stays flat and lands on the tempo the global sweep found is two independent methods agreeing. (Concentration alone was too strict a gate. It measures how peaked the onset histogram is — a property of the music's texture, not of whether the tempo is right — so a song holding 250 BPM end to end was read as 249.90 and still called unsure.) Measured on 49 songs from one library and 157 from a second, held-out one, that gate fires for about a quarter of songs and lands within 0.1% of the charter's own BPM about three-quarters of the time, and within 0.5% nine times in ten. Ungated, it would be right barely a third of the time.

    Once the curve confirms the tempo is steady, the estimate is re-swept against **every onset in the song** rather than the first 30 s: a tempo 0.05% off has drifted only a sixteenth of a beat in 30 s and still folds tightly, but half a beat across four minutes. It's then snapped to a round number when within 0.04% of one — charters write round BPMs (83% of 89 distinct level BPMs are integers, another 10% end in .5), so 249.96 becomes 250. The genuinely odd ones are left alone; they cluster in old levels where a nudged BPM was how you filled a pause or absorbed an irregular intro before Pause events existed, and the nearest of them sits 0.070% from an integer.

    Powers of two are what charters actually use: 78.5% of 31,220 speed multipliers across 429 published charts are exact powers of two, and every confident hit in the held-out set was one. Most of the rest are magic-shape compensation — ×3, ×1.5, ×4⁄3, ×6⁄5 — which hold the input tempo steady while the angles change, so they aren't tempo changes either. A ratio that is neither is the signal that the base BPM really moved.

## Metronome

**Click** turns on a metronome on the level's own grid — its BPM and offset, not the detected ones — so playing it over the song is the direct test of whether those two values are right. If the clicks sit on the music, they are. Bar downbeats are accented.

The grid **follows the detected tempo** rather than repeating one interval: each beat's length is read from the tempo curve where that beat falls, and the grid is integrated forward from the offset, so a song that accelerates doesn't leave the click behind within a few bars. The curve is folded into the level's own octave first, so click density stays comparable to the grid being checked.

The clicks are *scheduled* against the audio clock rather than fired from the frame loop, because a frame boundary is up to 16 ms from where the beat actually falls — the same order as the offset error you'd be listening for.

## Suggest offset

On a level with no offset yet, **Suggest offset** finds the song's first onset (marked on the waveform) and writes it.

On a level that already has an offset, it gives a **correction** from two estimators at once: the nearest attack, and the beat grid *measured from the audio* (every onset in the first 30 s votes on where the grid sits). Whether they agree is the tell. Within 25 ms of each other means the attack was the right one and its precision is used; otherwise the grid is the safer answer. So a chart that starts three minutes into a long song is never dragged back to the song's opening sound.

??? info "How well it works"
    Measured on 115 levels and again on a held-out 317, the pair beats either estimator alone on both sets, landing within 30 ms 88% and 76% of the time.

    Detection is log-domain energy flux against a local median rather than an absolute level, which lets one rule serve both a song that starts at full tilt and one that opens on ambience. Measured against 115 published levels' own offsets: median error 9 ms, 68% within 30 ms, and it always answers.

## Seed from the song

**Seed** writes BPM *and* offset from the audio alone, for a level that has neither. The tempo estimate never looks at the chart, and feeding it back into the phase fold gives the grid too.

## Chart analysis

The **Chart** button opens a reading of every speed change the level makes, classified against what the song is doing.

- A **subdivision** (a power-of-two ratio) and a **magic shape** (a `180/angle` ratio — odd angles with a compensating speed change that holds the input tempo) are not tempo changes.
- Anything else is the base BPM genuinely moving.

Each row is then checked against the audio tempo curve. The rows worth your attention are the disagreements: a base change where the song is steady, or a steady chart where the song moves. **Showing: to check** filters to exactly those.

It reads the speeds and entry times the game has already folded every SetSpeed into, so it can't drift from the game's own semantics.
