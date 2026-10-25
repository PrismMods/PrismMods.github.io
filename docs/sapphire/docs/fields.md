# Number fields

## Arithmetic

Every numeric field in Sapphire accepts **arithmetic**, the way the vanilla inspector does: type `180*2`, `100/3`, `(1+2)*45` or `360/8` and the field evaluates on commit. It also supports `^`, `%` and the constants `pi`, `tau` and `e`.

Unlike vanilla, division isn't integer division — `10/4` is `2.5`, not `2`. Text fields, such as tags and image paths, are never evaluated.

Fields also take [level variables](variables.md): `$beat*2`.

## Moving between fields

**Tab** / **Shift+Tab** commits the field and moves to the next or previous one in the same window. While a field has the keyboard, digits and Enter never reach palette or toolbar shortcuts.

## Scrubbing

**Drag a number's label to scrub it** — in the event, level and decoration inspectors and the palettes' number rows.

- Hold **Shift** for fine steps, **Ctrl/Cmd** for coarse ones.
- The cursor wraps at the window edge, so a drag never runs out of room.
- The value commits once on release, as one undo step.
- **Middle-click** an inspector label to restore the game's default.

Fields driven by a formula don't scrub.

## Undo from a field

The game refuses every editor hotkey while a text field has focus, which used to silently swallow undo after any edit made in a Sapphire panel. `Ctrl+Z` and `Ctrl+Shift+Z` now drop the caret and reach the editor's own undo stack.

## Search

Search boxes rank their results — the event picker, the filter browser, settings search and the manual's index. Letters in order are enough (`mvcam` finds *Move Camera*), and exact and prefix matches come first.
