# Browser-content lifecycle

A `Card` record can exist without live content. On create, main allocates a profile session partition, creates an owned `WebContentsView`, attaches it to the BrowserWindow content area, and navigates only after URL policy validation. The shell positions the view through validated bounds updates.

| Lifecycle | Required behavior |
|---|---|
| Attach/navigate | Bind session, set bounds, observe title/favicon/loading/navigation events, persist sanitized metadata. |
| Background | Hide or de-emphasize without destroying state; retain active pages within a resource budget. |
| Sleep | Snapshot card metadata, detach/destroy content view, set `sleeping`; do not claim page state is preserved beyond Chromium/session behavior. |
| Wake | Recreate content in the card profile partition, load persisted URL, restore zoom where supported, set `loading`. |
| Close | Destroy view, remove card transactionally, store a bounded recently-closed record. |
| Restore | Rebuild layout first with cards `unloaded`; wake only the focused/startup card and user-selected cards. |
| Crash | Mark `crashed`, preserve metadata, show a real recovery action, and never silently reload a form without user confirmation. |

`window.open` and target=_blank are routed through an explicit policy: create a card in the same stack or seek user choice; popups never become unowned windows by default.
