# Level variables

**Variables** on the Level settings rail opens the level's table of named values:

```
bpm = 180
beat = 60/$bpm
```

A variable can use the ones above it.

## Using them

Type a formula such as `$beat*2` into **any** number field — event properties, X/Y components, level settings. The field keeps the formula (tinted; hover it to see the current value) while the event stores the result.

- **Editing a variable** re-evaluates every formula in the level as one undo step.
- **Renaming a variable** rewrites the formulas that use it.
- Fields driven by a formula don't [scrub](fields.md#scrubbing).

## Saving

The saved `.adofai` holds plain numbers, so the level plays in the unmodded game. The formulas ride along in a `sapphire` section the game ignores.

!!! warning
    Re-saving the level in the unmodded editor keeps the numbers but drops the formulas.
