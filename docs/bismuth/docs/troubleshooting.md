# Troubleshooting

## Turning Bismuth off

The toggle at the bottom of the settings panel's tab rail is the master switch. Off, Bismuth stops changing the game — no overlay, key viewer, HUD layout changes or game-text restyling — while the panel, `Ctrl+B` and the update check keep working. The setting persists across restarts.

To unload Bismuth completely, switch it off in the UMM mods menu.

## Logs

The in-game log viewer shows Bismuth's own log, and one click reloads the mod.

When reporting a problem, the log files are:

| Log | Where |
|-----|-------|
| Bismuth | `BismuthLog.txt` in the mod folder — `Mods/Bismuth/` under UnityModManager, `UMMMods/Bismuth/` under MelonLoader. |
| UnityModManager | `UnityModManager/Log.txt` in the game's `Managed` data folder. |
| MelonLoader | `MelonLoader/Logs/` in the game folder, one file per launch — the newest is the latest run. |
| Unity (macOS) | `~/Library/Logs/7th Beat Games/A Dance of Fire and Ice/Player.log` |

## Two copies installed

UnityModManager loads Bismuth from `Mods/Bismuth`, and MelonLoader with UMMCompat loads it from `UMMMods/Bismuth`. If both exist, Bismuth asks which loader you use and offers to delete the copy you don't. If it deletes the copy that's running, it first carries your settings, key counts and attempts over to the one you keep.

## The update check

If an update fails, use **Manual update** in the update popup to open the releases page, and extract the new `Bismuth.zip` over your install. See [Updating](install.md#updating).

## Memory

The **Misc** page shows how much memory Bismuth freed at the last scene load.
