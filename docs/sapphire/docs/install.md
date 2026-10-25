# Install

Sapphire is a UnityModManager mod. It also runs under MelonLoader through the UMMCompat plugin.

[Download Sapphire](https://github.com/PrismMods/Sapphire/releases){ .md-button .md-button--primary }

Sapphire is in alpha, so every build is a pre-release. Take the newest `Sapphire-<version>.zip` from the top of the releases page.

## UnityModManager

1. Make sure UnityModManager is set up for A Dance of Fire and Ice.
2. Download the newest `Sapphire-<version>.zip`.
3. In the UMM installer, use **Install mod** and pick the zip — or extract its `Sapphire` folder into `…/A Dance of Fire and Ice/Mods/` yourself.
4. Start the game and check that **Sapphire** is switched on in the UMM mods menu.
5. Open the level editor. The power button in the top-right corner turns the whole suite on and off.

## MelonLoader

*If you'd rather not install by hand, try the [UMMInstall installer](https://github.com/sbrothers7/UMMInstall) or the [modlist.org app](https://github.com/modlist-org/modlist_org_app).*

1. Install the UMMCompat plugin.
2. Extract the zip so the `Sapphire` folder ends up in `…/A Dance of Fire and Ice/UMMMods/`.
3. Start the game and open the level editor.

!!! warning "macOS"
    Extracting a folder over another folder on macOS **replaces** the whole folder instead of merging. Drag the files in by hand.

## Updating

Sapphire checks its GitHub releases once per session and shows a toast when a newer build exists. Click it to download and install over your current copy; the new version loads after a game restart.

Downloads are checked against the SHA-256 digest GitHub publishes for the release asset, and archive entries that would escape the mods folder are rejected.

- **Settings → Updates** (`Ctrl+E`) shows the installed version and live status, with toggles for automatic checks and pre-releases, a **Check now** button, and a toast preview.
- **It plays nicely with other mods.** The toast parks in the top-right corner, the same corner Quartz uses. When another mod's update toast is already there, Sapphire stacks below it instead of drawing on top, so both stay readable.
