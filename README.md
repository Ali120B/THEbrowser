# THE Browser

A Linux-first, open-source spatial browser being designed around real Chromium content: **Workspace → Stack → Card → Tab/navigation context**.

## Project status — 4% complete

The product-definition and architecture foundation (Phase 0) is complete: research notes, core data model, process/security boundaries, browser-content lifecycle, spatial layout design, persistence/recovery strategy, product interaction model, and test strategy are documented. No runnable browser is implemented yet; this is deliberately honest and follows the plan’s requirement to establish research and architecture before coding.

### Completed

- [x] Phase 0 research baseline and evidence classification
- [x] Core architecture and lifecycle specifications
- [x] Product/UI/interaction principles and feature classification
- [x] Security, privacy, local persistence, Linux, updater, and test strategy specifications

### Next

- [ ] Phase 1: verify current Electron APIs and create the technical foundation
- [ ] Phase 2–5: secure Electron process model and one real navigable Chromium card
- [ ] Phase 6+: spatial cards, stacks, workspaces, and persistence implementation

Read [`context.md`](context.md) for an exact account of what is wired/defined and what is not implemented. The detailed requirements and phase roadmap are in [`plan.md`](plan.md); architecture and research documents live under [`docs/`](docs/).
