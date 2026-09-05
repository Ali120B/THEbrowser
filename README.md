# THE Browser

A Linux-first, open-source spatial browser being designed around real Chromium content: **Workspace → Stack → Card → Tab/navigation context**.

## Project status — 12% complete

The product-definition and architecture foundation (Phase 0) is complete: research notes, core data model, process/security boundaries, browser-content lifecycle, spatial layout design, persistence/recovery strategy, product interaction model, and test strategy are documented. A runnable Electron foundation now provides a secured real Chromium card with URL/search navigation and local workspace-state persistence. It remains an intentionally narrow vertical slice, not a complete daily-driver browser.

### Completed

- [x] Phase 0 research baseline and evidence classification
- [x] Core architecture and lifecycle specifications
- [x] Product/UI/interaction principles and feature classification
- [x] Security, privacy, local persistence, Linux, updater, and test strategy specifications
- [x] Initial Electron process foundation, typed-capability preload, and a secure real Chromium card
- [x] URL/search navigation, back/forward/reload, popup-to-card routing, and atomic workspace metadata persistence

### Next

- [x] Phases 1–5: initial Electron technical foundation and one real navigable Chromium card
- [ ] Phase 6–9: spatial cards, stacks, workspaces, and richer persistence implementation
- [ ] Phase 10+: advanced browser capabilities and production hardening

Read [`context.md`](context.md) for an exact account of what is wired/defined and what is not implemented. The detailed requirements and phase roadmap are in [`plan.md`](plan.md); architecture and research documents live under [`docs/`](docs/).
