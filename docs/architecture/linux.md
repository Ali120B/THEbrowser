# Linux architecture

Primary release target is an AppImage for modern Arch-based Linux, with Wayland and X11 exercised in QA. The application must respect fractional scaling and multiple DPI environments by persisting logical layout and reconciling physical display bounds at restore. Native file dialogs, notifications, printing, downloads, MIME handlers, and default-browser registration are integration points requiring explicit test coverage.

Packaging must not write inside the AppImage for user data. Runtime data belongs in Electron's user-data location. Hardware acceleration has a documented fallback path and diagnostics, not a silent failure mode.
