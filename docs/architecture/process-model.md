# Process model and IPC

Electron security defaults are mandatory: `contextIsolation: true`, `nodeIntegration: false`, `sandbox: true` where Electron permits, a restrictive preload, and no remote module. The shell never receives `ipcRenderer` directly; preload exposes named, typed methods such as `cards.create`, `cards.navigate`, and `layout.persist`.

Every IPC handler validates schema, ownership, and identifier existence; it returns structured errors without leaking paths or stack traces. Renderer-originated URLs are normalized and only `https:`, `http:`, `file:` (explicit user action), and approved internal schemes may navigate. External protocol launches require an allowlist and user confirmation. IPC capabilities are split by domain; there is no generic `invoke(channel, payload)` bridge.

Content webContents communicate only through Chromium/Electron navigation, permission, popup, download, and crash events owned by main. They never receive an API for workspace state or the filesystem. DevTools is an explicit user action.
