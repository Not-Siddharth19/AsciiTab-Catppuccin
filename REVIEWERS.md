# Note to Reviewers

AsciiTab is a new tab replacement extension that provides a keyboard-driven dashboard with ASCII-based visuals.

### Core Functionality
- The extension overrides the browser’s new tab page.
- It runs entirely as a local interface using standard HTML, CSS, and vanilla JavaScript.
- All code is human-readable; no minifiers, bundlers, or obfuscation tools are used in this project.

### Data Privacy
- **No user data is collected, transmitted, or stored externally.**
- All data (settings, tasks, notes, and preferences) is stored locally using browser storage API.
- The extension does not use remote code, analytics, or third-party tracking.

### Permissions
- **Host Permissions**: Broad host permissions are used only for user-initiated search suggestions and queries via external APIs (e.g., Google Suggestions). No data is collected or transmitted in the background.

### Instructions for Testing
1.  Open a new tab to load the dashboard.
2.  Use the search bar to perform searches or enter commands (e.g., `!gh`, `!yt`).
3.  Access the help menu by typing `@h` or the settings menu by typing `@s`.
4.  Verify that all interactions remain local to the extension environment except for explicit search redirects.
