# Game UI

Bismuth can move, scale, hide and re-weight the game's own HUD, and hide parts of the interface outright.

## Editing on screen

On the **Game UI** tab, press **Edit game UI on screen**. Each element gets a handle:

- **Drag** a handle to move the element.
- **Drag a corner** or use the **scroll wheel** to scale it.
- **Right-click** a handle to reset that element.

Each element also has a visibility setting, and text elements such as the autoplay label have an alignment.

The editor works on the death percentage, the congratulations and strict-clear text, the results screen, the press-to-start prompt, the countdown, the difficulty and modifier displays, the autoplay label, and the hit error meter. While it's open, elements that are normally hidden are shown with sample text so you can place them.

Two buttons reset everything: **Reset layout to Bismuth defaults** and **Reset layout to game defaults**. Fresh installs start from Bismuth's curated layout.

## Element weights

**Element weights** sets the font weight for each text element — the ones above, the judgement popups, and the song title. Leave one on **Auto** to keep Bismuth's choice. It applies when a [game font](fonts.md#game-text) is set.

## Song title

The song title is handled separately on the **Tweaks** tab: set its scale and vertical offset, and choose whether it's drawn in the overlay font.

## Hide UI

| Option | Hides |
|--------|-------|
| Hide all UI | Nearly all in-game UI. The other options are hidden while this is on. |
| Hit error meter | The hit error bar. |
| Autoplay text | The autoplay status text. |
| Autoplay icon | The autoplay icon and button in the editor. |
| No-fail | The no-fail icon. |
| Difficulty | The difficulty display and selector. |
| Judgements | The judgement popups — all of them, or one judgement at a time. |
| Song title | The song title. |

The alpha/beta build text can be hidden too.

## Tweaks

- **Hide planet rings** — removes the dotted circle around each planet, everywhere rings are drawn.
- **Autoplay pause key** — a key that pauses and resumes autoplay while you playtest in the editor. Off by default; `Space` when on, and rebindable.
