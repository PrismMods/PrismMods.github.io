# Install

Bismuth needs **A Dance of Fire and Ice 3.3.0** or later. It's a UnityModManager mod, and also runs under MelonLoader through the UMMCompat plugin.

[Download Bismuth](https://github.com/PrismMods/Bismuth/releases/latest){ .md-button .md-button--primary }

*If you'd rather not install by hand, try the [UMMInstall installer](https://github.com/sbrothers7/UMMInstall) or the [modlist.org app](https://github.com/modlist-org/modlist_org_app).*

## UnityModManager

1. Make sure UnityModManager is set up for A Dance of Fire and Ice.
2. Download the latest `Bismuth.zip` from the releases page.
3. Extract it into `…/A Dance of Fire and Ice/Mods/`.
4. Start the game and switch **Bismuth** on in the UMM mods menu.
5. Press `Ctrl+B` to open the settings.

## MelonLoader

1. Install the UMMCompat plugin.
2. Extract `Bismuth.zip` into `…/A Dance of Fire and Ice/UMMMods/`.
3. Start the game and press `Ctrl+B`.

!!! warning "Only one copy"
    UnityModManager loads Bismuth from `Mods/Bismuth`, and MelonLoader from `UMMMods/Bismuth`. If both exist, Bismuth asks which loader you use and offers to delete the unused copy, bringing your settings, key counts and attempts across. See [Troubleshooting](troubleshooting.md#two-copies-installed).

!!! warning "macOS"
    Extracting a folder over another folder on macOS **replaces** the whole folder instead of merging. Drag the files in by hand.

## Updating

Bismuth updates itself. When a newer release is out, a popup offers three choices:

- **Update now (requires restart)** — downloads the release and installs it over every existing copy. Restart the game to load it.
- **Manual update** — opens the releases page.
- **Later** — dismisses the popup for now.

Your settings, key counts and attempts survive: the download carries only the mod itself, and nothing is deleted. Bismuth saves everything before it installs.

To update by hand, download the latest `Bismuth.zip` and extract it over your install the same way you installed it.
