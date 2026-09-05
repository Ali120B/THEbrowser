# Updater architecture

Updates are background, non-blocking, signed/verified when a release channel and signing mechanism are selected, and never silently migrate or erase user state. The AppImage strategy, feed format, signature verification, rollback, and channel policy remain design work for Phase 36. Update metadata must be separate from browser state and failures must leave the current executable and data usable.
