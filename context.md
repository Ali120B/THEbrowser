# Implementation context

**Last updated:** 2026-09-05

This repository is at **Phase 0: research, product definition, and architecture**. No Electron application code or fake browser UI has been created; this is intentional because `plan.md` explicitly requires research and coherent architecture before implementation.

## Wired / defined now

- The authoritative product hierarchy is Workspace → Stack → Card → Tab/navigation context.
- The target architecture separates Electron main, hardened preload/IPC, shell renderer, untrusted Chromium content views, shared schemas, and local persistence.
- A card content lifecycle is defined from create through sleep, wake, restore, crash recovery, and close.
- Spatial layout is specified as a validated, testable logical model, with keyboard parity and display/DPI restore behavior.
- Local persistence, atomic writes, migrations, backups, profiles/private partitions, security boundaries, extension scope, privacy stance, performance policy, Linux/AppImage strategy, and testing strategy are documented.
- Product/UI/interaction principles and an evidence-labelled Stack comparison are documented.

## Not implemented yet

The initial Electron bootstrap, Chromium view, navigation, local metadata persistence, package configuration, and a minimal shell UI are now implemented. Extension support, downloads, privacy blocking, spatial drag/resize, workspace and stack editing, profiles UI, private browsing, history/bookmarks, packaging, and production hardening are not implemented yet. The next scoped implementation work is Phase 6: build the spatial card engine without weakening the secure content boundary.

## Research limitation

The configured network proxy rejected access to the official Stack site/video during this pass. `docs/research/stack-analysis.md` therefore labels conclusions conservatively and records re-validation tasks; it does not present unverified details as facts.

## Implemented foundation (Phases 1–5, initial vertical slice)

THE Browser now has a runnable Electron shell with a secure, real Chromium `WebContentsView`. The shell owns only the workspace navigation UI; web pages are loaded by Electron in an isolated content view. It supports one persistent workspace/stack, creating and selecting real cards, URL-or-search navigation, back/forward/reload, card closing, popup-to-new-card routing, per-profile Chromium partitions, renderer-crash status, and detached DevTools. Workspace metadata is stored locally with serialized, atomic file replacement.

This is deliberately an initial vertical slice, not a claim that later roadmap phases are complete. Spatial drag/resize, multi-stack/workspace editing, downloads, permissions UI, profiles UI, private mode, extensions, history/bookmarks, sleep/wake, packaging, and visual Stack-fidelity validation remain unimplemented.
