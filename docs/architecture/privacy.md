# Privacy architecture

THE Browser defaults to zero product telemetry. Browser metadata, URLs, workspace names, typed searches, cookies, and credentials remain local except when a user directs Chromium to a site or configures future sync. Diagnostics redact URLs by default.

A future blocking layer must expose an accurate enabled state, filter-list provenance/version, per-site exceptions, and count semantics. Until a network interception implementation is validated and tested, no blocking control may claim to block requests. The site panel combines connection information, profile-scoped permission decisions, cookies/site data controls, and clear-site-data actions.
