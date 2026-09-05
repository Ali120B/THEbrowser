# Security model

Threats include malicious sites, renderer compromise, unsafe navigation/protocols, IPC abuse, extensions, malicious imports, and sensitive local data exposure. Defenses: process isolation; CSP for shell assets; least-privilege preload API; URL/protocol validation; navigation and popup policy; per-profile Electron sessions; permission prompts tied to requesting origin and card; path validation for downloads/imports; and privacy-preserving diagnostics.

No renderer-supplied filesystem path is trusted. Download destinations are selected through native UI or validated configured directories. Permission decisions are persisted per profile and origin. Extensions are treated as privileged code with explicit install source and permissions. Security tests must attempt malformed URLs, traversal paths, spoofed IDs, unauthorized IPC, popup storms, and compromised-renderer requests.
