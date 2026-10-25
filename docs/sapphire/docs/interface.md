# Skin and panels

## Skin

- **Dark reskin** of the game's editor UI, with a Sapphire-blue accent you can change in `Ctrl+E`. It's reversible and guard-based.
- **Modern chrome** — a file chip and menu, a panel rail and an event dock that proxy the game's own buttons. They never reimplement game logic.

## Windows

- **Floating windows** — the level-settings popup and dialogs are blocker-less, draggable, and remember their position. Some also resize.
- **Docking** — windows dock into the sidebars; see [Level settings and sidebars](level-settings.md#sidebars-and-docking).
- **Panel layout memory** — open/closed state and position stick for the whole session. A relaunch starts clean by default; `Ctrl+E` → **Misc** → **Keep panel layout after restart** keeps it. This covers the shape library, level settings, Magic Shape, Track tools, Deco tools and the Hz tool.

## Animation

Windows, dropdowns, both context menus and the timeline strip fade and ease open over 0.11 s by default instead of snapping in, eased out on arrival and in on exit. Set the length with **Animation duration (s)** (0–0.6 s) in `Ctrl+E` → **Misc**, or turn it off there to restore instant show and hide exactly.

A panel on its way out takes no part in the dock layout, so switching sidebar tabs never splits the sidebar between the outgoing and incoming panel, and a closing dropdown stops catching clicks the moment it starts leaving.

## Hints

- **Hover tips** — icon-only buttons name themselves after a short hover: the angle pad's buttons and repeat stepper, the event panel's expand and delete buttons, the event dock's icons, the palette's category rail, and every window's close button.
- **On-screen key hints** — a card in the bottom-right lists the keys live in the current context. It rides above the event timeline, sizes itself to its content, collapses to a header, and can be turned off in `Ctrl+E` → **Features**.
