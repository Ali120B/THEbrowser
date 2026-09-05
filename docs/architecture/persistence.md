# Local persistence and recovery

Use a versioned local application-data directory: `state/workspaces.json`, `state/stacks.json`, `state/cards.json`, `state/profiles.json`, `state/preferences.json`, `state/recently-closed.json`, plus a migration ledger and rotating backups. Chromium session/profile data stays in Electron-managed partition directories.

Writes are serialized, written to a same-filesystem temporary file, flushed, atomically renamed, and followed by a bounded backup. Every document carries `schemaVersion`, `revision`, and `updatedAt`. Startup validates schemas before use; it migrates on a copy, retains the prior backup, and opens recovery UI on failure. Export uses a manifest with format version and checksums; import is validated and never overwrites live state without confirmation.
