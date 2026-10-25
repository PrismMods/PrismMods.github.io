# Event timeline

The bottom-docked **event timeline** puts events on a song-time axis, with a playhead, scrubbing, zoom, transport controls and a mode cluster.

## Transport and modes

Play and scrub from the transport, and pick a mode from the dropdown: **Normal**, **Cam**, **Deco** or **Filter**.

- **Deco** and **Filter** modes show a lane per decoration tag or per active filter, for quick navigation.

## Camera keyframes (Cam)

Cam mode is a proper workspace for `MoveCamera`.

- **Property lanes** — Position, Rotation and Zoom, with tween bars drawn from each event's start and duration in beats.
- **Ease picker** — right-click a keyframe for a grid of eases with live-plotted curves.
- **Custom bezier** — two draggable control points, decomposed into Linear segments when applied.
- **Graph editor** — an After Effects-style value-over-time graph with tabs for X, Y, Rotation and Zoom. Select diamonds, drag their values, retime them, or right-click for eases. The X axis is in musical beats, with its own zoom and pan.
- **Editing** — drag a keyframe to retime it, edit it in the inline inspector row, link X and Y, and split on retime.

## The song's waveform

The timeline gives the song its own **AUDIO** track along the foot of the strip, on the same time axis as the event lanes. It's built once per song and panned by UV, so zooming and scrubbing cost nothing. The level offset shifts it, so it lines up with what you actually hear.

The **♪ AUDIO** button in the strip's right-hand column toggles the track (the **Features** tab in `Ctrl+E` holds the same switch). It dims while the song is still being read, and the track takes no height at all when the song can't be read.

For analysis — tempo, offset, a metronome — open the [Audio window](audio.md).

## Heights

Drag the strip's top edge to scale the event lanes (up to 400 units), and drag the audio track's own top edge to size just that track. They're separate grips because they hold different kinds of content, and one control for both would mean neither could be set.
