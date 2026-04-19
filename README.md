# AsciiTab

A keyboard-centric browser startpage with ASCII aesthetics and Catppuccin theming.

![preview](https://img.shields.io/badge/theme-Mocha-cba6f7?logoColor=cdd6f4&style=flat)
![preview](https://img.shields.io/badge/theme-Frappe-ca9ee6?logoColor=c6d3ef&style=flat)
![preview](https://img.shields.io/badge/theme-Macchiato-c6a0f6?logoColor=cad3f5&style=flat)
![preview](https://img.shields.io/badge/theme-Latte-8839ef?logoColor=4c4f69&style=flat)

## Features

- Command bar with search prefixes (`!gh`, `!yt`, etc.)
- `@` commands for settings (`@s`, `@wm`, `@theme`, `@min`)
- ASCII Hero editor with presets
- 4 Catppuccin themes (Mocha, Frappe, Macchiato, Latte)
- Optional widgets: Tasks, Notes, Timer, Weather, Media, System Stats
- Minimalium Mode for distraction-free browsing
- 100% local - no tracking or accounts

## Quick Commands

| Command | Action |
|:--------|:-------|
| `@s` | Settings |
| `@wm` | Widgets |
| `@theme mocha` | Switch theme |
| `@min` | Minimalium |
| `@ae` | ASCII Editor |
| `@h` | Help |
| `@reset` | Factory reset |

## Installation

### Firefox (Recommended)
Install the official Firefox add-on for easiest setup:

**[AsciiTab Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/asciitab/)**

### Firefox (Manual)
1. Open `about:config`
2. Set `browser.startup.homepage` to `file:///path/to/index.html`
3. Or use [Firefox Portrait](https://addons.mozilla.org/en-US/firefox/addon/firefox-portrait/) to set custom homepage

### Chrome / Chromium
1. Download or clone this repository
2. Go to Settings → On startup → Open a specific page
3. Set to `index.html` (use file path)

### Browser Extension (All Browsers)
Use a startpage extension like [New Tab Redirect](https://chrome.google.com/webstore/detail/new-tab-redirect/) to load the startpage.

## Tech Stack

- Vanilla HTML / CSS / JS
- Catppuccin palette

## License

[MPL-2.0](./LICENSE)
