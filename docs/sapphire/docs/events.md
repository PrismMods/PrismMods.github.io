# Events

## Event tree

- **Selecting** — click a row to select it; `Ctrl` toggles and `Shift` extends. The `▸` button at the left of a row, which also carries the event's icon, expands it.
- **Opening a tile** — a tile with one event opens with it selected and expanded. With several, the first is selected and the tree stays collapsed.
- **Keyboard** — `↑` / `↓` move the selection one row (`Shift` extends it) whenever you aren't typing in a field.
- **Decoration targets** — each decoration event's target tag shows beside its number on an expanded row, and a collapsed group's header lists the group's distinct tags. A tile with seven `MoveDecorations` events no longer renders as seven identical rows.
- **Motion** — expanding a row slides the rows below it down and uncovers the settings as they move; collapsing slides them back up, and switching tiles fades the list in.

## Copy and paste

**Copy** in the panel's selection bar copies the selected events and confirms with a notification.

- `Ctrl+V` (or **Paste** in the tile menu) **replaces** every selected tile's events with them.
- `Ctrl+Shift+V` **adds** them on top.

Copying tiles afterwards hands both keys back to the game.

## Event tray

A clipboard you can see. Open it with the **Tray** button in the event panel, or dock it as a sidebar tab.

- **Filling it** — every drop becomes a **folder** of what that drag carried: drag a row, a group header, or — with several rows selected — the whole selection, any mix of types. Dropping onto an existing folder adds to it.
- **Editing** — click a folder to list its events, and click an event to edit its properties right there, on the tray's copy.
- **Using it** — drag a folder, or one event out of it, onto a tile (or onto the event panel, meaning its tile) to add. Hold `Shift` while dropping to replace that tile's events. A card follows the cursor naming the target, and `Esc` cancels.

Rows can also be dragged straight from the event panel onto another tile. Everything in the tray is a copy and lasts for the session.

## Multi-selection menu

Right-clicking *inside* a selection of two or more tiles opens Sapphire's own menu — copy, cut, delete (safe), add twirls, repeat, duplicate, move — and leaves the selection intact. Clicking outside it re-selects and gives the single-tile menu as before.

!!! note
    The multi-selection verbs aren't wired up yet, and say so when clicked.
