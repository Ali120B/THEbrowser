# Extensions

Extension support is a later, explicitly scoped capability. Electron session extension APIs will be evaluated against the selected current Electron release during Phase 21; compatibility must be documented per API and manifest version. Installation supports only validated local CRX/package flows or unpacked developer directories where Electron supports them—no fake marketplace.

Extensions are profile/session scoped. Management records enabled state, source, version, requested permissions, and errors, while Chromium owns extension data. Toolbar/popups/options are implemented only after a working compatibility test matrix. A failed or unsupported extension is shown honestly with actionable diagnostics.
