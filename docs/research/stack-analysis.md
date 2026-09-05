# Stack Browser public-product analysis

**Research date:** 2026-09-05. **Method:** the official product site and the supplied video were identified in the brief; network access from this environment was denied (HTTP proxy 403/401), so this is a conservative desk-research baseline. Claims are deliberately labelled. It must be re-validated against live official material before visual implementation.

## Sources and evidence status

- Official site: <https://stackbrowser.com/> — primary source to revisit.
- Supplied product reference: <https://www.youtube.com/watch?v=vhVNKTBD2K8> — interaction reference to revisit.
- This document does **not** treat third-party browser products or BrowserStack as evidence.

## Observed terminology and hierarchy

Public material and the supplied brief use **cards**, **stacks**, **spaces**, **SpaceBar**, **Fly Mode**, and **Special**. The intended hierarchy is Space/workspace → Stack → Card → a page/navigation context. A card is a browser surface, not a thumbnail; a stack groups related cards; a space is the wider environment.

## Confirmed / strongly inferred interaction model

| Area | Evidence classification | Product interpretation for THE Browser |
|---|---|---|
| Cards are spatial, floating website surfaces | Strongly inferred from supplied Stack references | Real Chromium `WebContentsView` surfaces with a native header and persisted bounds. |
| Stacks group cards | Confirmed by terminology in the brief | Persistent named groups; retain card order, membership, and visual arrangement. |
| Spaces organize broader work | Confirmed by terminology in the brief | Persistent workspaces that contain stacks and canvas state. |
| SpaceBar is a compact navigation surface | Strongly inferred | A keyboard-accessible workspace/stack switcher, not a tab strip. |
| Fly Mode changes presentation | Strongly inferred | A clearly labelled alternate compact/floating presentation; defer until its behavior is validated. |
| “Special” is command-oriented UI | Strongly inferred | Command palette architecture with every command explicitly implemented. |
| Compact integrated browser chrome | Strongly inferred | Per-card URL/navigation affordance; avoid a global tab-first chrome. |

## Browser and card behavior

A card must expose real navigation (back, forward, reload/stop, URL/search), title/favicon/loading state, focus, close, move, resize, maximize, sleep/wake, profile association, and a progressive-disclosure actions menu. New-card creation should be centered and low-friction, then produce a real browser surface—never a static mock page. Drag/drop must change spatial layout, not merely reorder a list.

## Settings, profiles, extensions, and privacy

Stack references in the brief motivate profiles, Chromium extensions, privacy controls, themes/color realms, focus tools, and session restoration. The public evidence available here is insufficient to assert exact Stack settings or extension semantics. THE Browser will implement these as normal Chromium requirements and label deviations as product improvements. Extension compatibility, profile isolation, private sessions, and blocking claims require explicit technical validation before UI promises.

## UX principles derived from the research

1. Keep related work visible and manipulable together.
2. Prefer direct manipulation of cards over tab-management metaphors.
3. Keep controls compact; reveal uncommon actions through menus or commands.
4. Make persistence reliable and understandable: a workspace is a durable place, not a temporary view.
5. Preserve accessibility: every spatial action needs a keyboard and screen-reader equivalent.

## Intentionally improved areas

| Stack-inspired idea | THE Browser improvement and rationale |
|---|---|
| Spatial organization | Deterministic local persistence, backups, migrations, recovery, and explicit sleep state. |
| Compact interface | Keyboard-first commands, accessible labels/focus order, and reduced-motion support. |
| Browser cards | Modern Electron `WebContentsView` architecture rather than deprecated BrowserView/webview approaches. |
| Profiles/privacy | Clear isolation boundaries and no exaggerated privacy claims. |
| Flexible layouts | Snap suggestions without forcing a rigid grid; robust restore under display/DPI changes. |

## Open validation questions

Before Phases 6–15, capture official screenshots/video timestamps for card headers, stack expansion, SpaceBar, Fly Mode, Special, creation, and animations. Record source URLs, dates, and whether each behavior is directly observed. Do not copy Stack branding, source, or proprietary assets.
