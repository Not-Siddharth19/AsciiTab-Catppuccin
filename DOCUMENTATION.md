# AsciiTab: Comprehensive Technical Documentation 📄

## 1. Project Overview
**AsciiTab** is a premium, keyboard-centric browser dashboard designed to bridge the gap between terminal-like efficiency and modern web aesthetics. Built around the **Catppuccin** design system, it provides a high-performance workspace for power users who value minimalism and customization.

---

## 2. Core Architecture
The project follows a "Single-Page Powerhouse" architecture:
- **HTML5 (Semantic)**: Structure centered around the `<main>` workspace with collapsible sidebars (`<nav>` and `<aside>`).
- **CSS3 (Variables & Grid)**: Theming is entirely driven by CSS variables. It uses a dynamic grid (`grid-template-columns: auto 1fr auto`) which collapses to a single centered column in Minimalism Mode.
- **Vanilla JavaScript**: State is managed via a `currentSettings` object and persisted using `localStorage`. No external dependencies are used, ensuring sub-millisecond load times.

---

## 3. UI/UX & Theming
### 🎨 Theming System
AsciiTab supports four curated Catppuccin flavors:
- **Mocha**: Deep dark (Default)
- **Macchiato**: Muted dark
- **Frappe**: Mid-tone dark
- **Latte**: Crisp light mode

Every component, including custom dropdowns and progress bars, respects the active theme via a global `body.theme-[name]` class.

### 🍱 UI Features
- **Themed Dropdowns**: Custom-styled `<select>` menus with theme-aware SVG indicators.
- **Glassmorphism**: Modals use `backdrop-filter: blur()` for a premium, layered feel.
- **Responsive Alignment**: Supports Left, Center, and Right content alignment.

---

## 4. Feature Deep Dive

### 🖼️ ASCII Hero System
A central piece of the dashboard.
- **Built-in Presets**:
    - `Default`: ASCIITab branding
    - `Tux`: Linux Mascot
    - `Earth`: Detailed Globe
    - `Minimal`: Abstract aircraft
    - `Dragon`: High-detail creature
- **Custom Editor**: Accessible via `@ae`, featuring a live zoom counter and adjustable font size (`8px` to `24px`).
- **Persistence**: Custom art is saved across sessions via `localStorage.customAscii`.

### 🔍 Search & Command Engine
- **Global Search**: Any non-command input triggers a web search (Google/DuckDuckGo).
- **Prefix Commands**:
    - `!gh`: GitHub search
    - `!yt`: YouTube search
    - `!r`: Reddit exploration
    - `!ai`: ChatGPT quick-access
- **Search Suggestions**: Real-time suggestions enabled via JSONP/Bypass.

---

## 5. Minimalism Manager (Minimalium)
A specialized layout engine for deep focus work. It provides three levels of minimalism:

1. **Mode 1 (Balanced)**: ASCII Art + Clock + Date + Search Bar. Sidebar/Widgets hidden.
2. **Mode 2 (Concentrated)**: ASCII Art + Search Bar. Time/Date hidden.
3. **Mode 3 (Zen)**: ASCII Art Only. Focus purely on the aesthetics.

**Centering Logic**: In all Minimalium modes, the layout ignores global alignment and forces `grid-template-columns: 1fr`, centering the hero in the viewport.

---

## 6. Command & Shortcut Reference

### ⌨️ Key Commands
| Command | Result |
| :--- | :--- |
| `@min` | Open Minimalium Manager |
| `@s` | Open Settings Menu |
| `@ae` | Open ASCII Editor |
| `@theme mocha` | Quickly swap to Mocha |
| `@sidebar off` | Hide the left sidebar |
| `@h` | Show help commands |

### 🎹 Key Shortcuts
| Shortcut | Action |
| :--- | :--- |
| `Ctrl + K` | Focus Command Bar (everywhere) |
| `Ctrl + ,` | Open Settings (Emergency hatch) |
| `Ctrl + M` | Open Minimalium Manager |
| `ESC` | Close any active modal |

---

## 7. Widget Index
- **Task List**: Simple TODO management with check/delete actions.
- **Memo**: A Persistent "Scratchpad" for notes (saves automatically).
- **Timer**: A work/rest timer (Pomodoro-style).
- **Media Player**: Play local audio files with a themed progress bar and visualizer.
- **System Stats**: CPU/RAM usage simulation (UI only) for that "Hacker" aesthetic.

---

## 8. Privacy & Data
AsciiTab is **100% Client-Side**. All settings, links, custom commands, and notes are stored locally in the user's browser profile. No data ever crosses a network boundary unless a search is initiated.

---
*Documentation generated for AsciiTab v2.0*
