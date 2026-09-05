# Test strategy

Layer tests: pure unit tests for schemas/layout/reducers; persistence and migration tests with crash/interruption simulation; main/preload IPC contract tests; Electron integration tests for real navigation, permissions, downloads, profile partitions, and content lifecycle; and visual regression screenshots for documented shell states.

Minimum matrices cover 1/10/25/50 cards, sleeping cards, multiple stacks/workspaces/profiles, malformed imports, recovery, private lifecycle, and Linux X11/Wayland smoke tests. Real-site tests use dedicated accounts and must never commit credentials. A test passes only when it verifies a real Chromium effect, not merely shell state.
