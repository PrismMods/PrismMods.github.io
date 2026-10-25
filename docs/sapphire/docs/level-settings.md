# Level settings and sidebars

## Level settings

The level-settings panel is Sapphire-native, rendered from the game's own property registry. It lives in the left sidebar as a tab next to the event palette.

- **Artist permission status** — a colour-coded chip at the top of the **Level** tab shows the artist's approval status. Click it to expand the full condition text. It's hidden when no artist is set.
- **[Level variables](variables.md)** and **[Script](script.md)** open from the Level settings rail.

## Sidebars and docking

The tab strip above the sidebar switches between its tabs. Clicking the open tab collapses the sidebar to a vertical edge rail carrying the tab names.

- **Add a window as a tab** — drop it **on the rail**. This works for the shape library, Magic Shape, Track tools, Deco tools and the Hz tool. The rail lights up as you hover it.
- **Float a tab again** — drag the tab off the rail. Release it back over the rail to change your mind.
- **Split a sidebar** — drop on a sidebar's *body*, as docking always did. An **empty** sidebar has no body to split, so a drop there joins its rail.

The right sidebar works the same way; it just starts with no tabs.

## Colour wheel

Every colour value in Sapphire — level settings, the event inspector, decorations, particles, and the accent colour in `Ctrl+E` — opens an HSV wheel with an SV square, RGB and HSV fields, a hex field, and an alpha slider when the value has one. Click the swatch beside the hex field to open it.

The value commits when you release the drag, so a drag costs one undo step rather than one per frame.
