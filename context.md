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

No Electron bootstrap, Chromium view, navigation, persistence code, UI, extension support, downloads, privacy blocking, or package configuration exists yet. The next scoped implementation work is Phase 1–5: select and verify the current Electron toolchain; create the repository baseline; then implement the secure process model and one real navigable card before spatial UI.

## Research limitation

The configured network proxy rejected access to the official Stack site/video during this pass. `docs/research/stack-analysis.md` therefore labels conclusions conservatively and records re-validation tasks; it does not present unverified details as facts.
