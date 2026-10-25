# Script

Runtime logic that plays in the unmodded game. **Script** on the Level settings rail opens a code editor with line numbers, colouring, and errors as you type. **Compile** turns the script into ordinary events.

## How it works

The game's only runtime memory is `SetInputEvent`'s key → events table, which a fired `SetInputEvent` rewrites. The compiler builds a state machine on it: one tagged event group per state and key, on a host tile.

## Example

```
flag lights                    # off / on
counter hits 0..3 wrap         # clamps at the ends unless wrap
on key Up nohit:               # Up Down Left Right Action1 Action2 Confirm Any · release · nohit
    toggle lights
    hits += 1
    if hits == 3:
        run flash              # copies every event tagged "flash"
when lights:                   # runs each time the condition becomes true
    run grey
on miss at 40:                 # hit judgments fire per tile; they can only run
    run shake
```

## Language

- **State** — `flag` for on/off, `counter name lo..hi` (add `wrap` to wrap instead of clamping at the ends), and `state mode = calm, wild` for named states.
- **Conditions** — `== != < > <= >=`, with `and`, `or` and `not`.
- **Keys** — `on key` takes `Up`, `Down`, `Left`, `Right`, `Action1`, `Action2`, `Confirm` or `Any`, with `release` and `nohit` as modifiers. A key press also counts as a hit unless you add `nohit`.
- **Other triggers** — `when …` runs each time its condition becomes true. Hit judgements such as `on miss at 40` fire per tile, and can only `run`.
- **Templates** — events used by `run` are templates. Tag them, and **Compile** places active copies on the host tile (`host N`, default 0) and switches the originals off.

## Limits

- Path and timing events (SetSpeed, Twirl, Pause, …) can't be triggered and are skipped.
- All variables together may reach at most **256** combinations.
- Test from the start of the level.

**Remove** deletes the compiled events and switches the templates back on.
