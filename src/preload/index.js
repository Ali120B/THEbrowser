'use strict';
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('theBrowser', Object.freeze({
  workspace: { get: () => ipcRenderer.invoke('workspace:get'), onChanged: (callback) => ipcRenderer.on('workspace:changed', (_event, state) => callback(state)) },
  cards: { navigate: (input) => ipcRenderer.invoke('card:navigate', input), command: (action) => ipcRenderer.invoke('card:command', action), create: (url) => ipcRenderer.invoke('card:create', url), activate: (id) => ipcRenderer.invoke('card:activate', id), close: (id) => ipcRenderer.invoke('card:close', id) }
}));
