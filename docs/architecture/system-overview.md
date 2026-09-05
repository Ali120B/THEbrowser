# System overview

THE Browser is a Linux-first Electron application with a privileged main process, an unprivileged application-shell renderer, and isolated Chromium content views. Its stable domain hierarchy is **Workspace → Stack → Card → Tab/navigation context**.

## Boundaries

- **Main:** window lifecycle, `WebContentsView` ownership, sessions, downloads, permissions, filesystem persistence, OS integration, and IPC validation.
- **Shell renderer:** accessible spatial UI, command state, layout interaction, and calls only through a narrow preload API.
- **Content views:** untrusted websites; no Node integration, no direct Electron APIs, sandboxed where supported.
- **Shared:** versioned schemas, commands, IPC request/response types, and pure layout/state helpers.

## Proposed modules

`src/main/{app,windows,ipc,content,session,downloads,permissions}`, `src/renderer/{shell,spatial,components,commands}`, `src/{shared,state,persistence,security,profiles,extensions,privacy}`. A card metadata record is separate from a live Chromium content instance so sleeping cards retain their place without consuming a renderer.

## Core data model

```ts
interface Workspace { id: string; name: string; stackIds: string[]; themeId?: string; createdAt: string }
interface Stack { id: string; workspaceId: string; name: string; cardIds: string[]; accent?: string; collapsed: boolean }
interface Card { id: string; stackId: string; profileId: string; url: string; title: string; bounds: Rect; zIndex: number; state: 'unloaded'|'loading'|'active'|'sleeping'|'crashed'; pinned: boolean }
interface Tab { id: string; cardId: string; url: string; title: string; selected: boolean }
interface Profile { id: string; name: string; partition: string; kind: 'regular'|'private' }
interface Permission { profileId: string; origin: string; type: string; decision: 'allow'|'deny'|'ask' }
interface Download { id: string; url: string; state: string; receivedBytes: number; totalBytes?: number }
interface Rect { x: number; y: number; width: number; height: number }
```

All identifiers are opaque UUIDs. Card URL/title are sensitive local data and must not enter telemetry or ordinary logs.
