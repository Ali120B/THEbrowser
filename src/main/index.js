'use strict';

const path = require('node:path');
const { app, BrowserWindow, ipcMain, shell } = require('electron');
const { randomUUID } = require('node:crypto');
const { BrowserManager } = require('./browser-manager');
const { StateStore } = require('./state-store');

let windowRef; let state; let store; let browser;
const cardBounds = () => ({ x: 284, y: 118, width: Math.max(320, windowRef.getContentBounds().width - 308), height: Math.max(240, windowRef.getContentBounds().height - 142) });
function activeCard() { return state.cards.find((card) => card.id === state.activeCardId); }
async function persistAndBroadcast() { await store.save(state); windowRef?.webContents.send('workspace:changed', state); }
function ensureCard() {
  let card = activeCard();
  if (card) return card;
  card = { id: randomUUID(), stackId: 'stack-main', profileId: 'default', title: 'New card', url: 'https://example.com/', loading: false, crashed: false };
  state.cards.push(card); state.stacks[0].cardIds.push(card.id); state.activeCardId = card.id; return card;
}
async function activateCard(card) {
  if (!browser.has(card.id)) { browser.create(card); await browser.navigate(card.id, card.url); }
  browser.show(card.id, cardBounds()); windowRef.webContents.send('workspace:changed', state);
}
async function bootCard() { const card = ensureCard(); await activateCard(card); await persistAndBroadcast(); }
async function createWindow() {
  windowRef = new BrowserWindow({ width: 1360, height: 840, minWidth: 900, minHeight: 600, title: 'THE Browser', backgroundColor: '#10131a', webPreferences: { preload: path.join(__dirname, '../preload/index.js'), contextIsolation: true, nodeIntegration: false, sandbox: true } });
  browser = new BrowserManager(windowRef, async (kind, payload) => {
    if (kind === 'new-window-requested') { await createCard(payload.url); return; }
    const card = state.cards.find((candidate) => candidate.id === payload.cardId); if (!card) return;
    Object.assign(card, payload); await persistAndBroadcast();
  });
  windowRef.on('resize', () => { const card = activeCard(); if (card) browser.show(card.id, cardBounds()); });
  windowRef.on('closed', () => { browser.destroyAll(); windowRef = undefined; });
  await windowRef.loadFile(path.join(__dirname, '../renderer/index.html'));
  await bootCard();
}
async function createCard(url = 'https://example.com/') {
  const card = { id: randomUUID(), stackId: 'stack-main', profileId: 'default', title: 'New card', url, loading: false, crashed: false };
  state.cards.push(card); state.stacks[0].cardIds.push(card.id); state.activeCardId = card.id;
  browser.create(card); await activateCard(card); await browser.navigate(card.id, url); await persistAndBroadcast(); return card;
}
function registerIpc() {
  ipcMain.handle('workspace:get', () => state);
  ipcMain.handle('card:navigate', async (_event, input) => { const card = activeCard(); if (!card) throw new Error('No active card.'); const url = await browser.navigate(card.id, input); card.url = url; await persistAndBroadcast(); return card; });
  ipcMain.handle('card:command', async (_event, action) => { const card = activeCard(); if (!card) throw new Error('No active card.'); browser.command(card.id, action); });
  ipcMain.handle('card:create', async (_event, url) => createCard(url));
  ipcMain.handle('card:activate', async (_event, id) => { const card = state.cards.find((candidate) => candidate.id === id); if (!card) throw new Error('Unknown card.'); state.activeCardId = id; await activateCard(card); await persistAndBroadcast(); });
  ipcMain.handle('card:close', async (_event, id) => { if (state.cards.length === 1) throw new Error('Keep at least one card open.'); const index = state.cards.findIndex((card) => card.id === id); if (index < 0) throw new Error('Unknown card.'); browser.destroy(id); state.cards.splice(index, 1); state.stacks[0].cardIds = state.stacks[0].cardIds.filter((cardId) => cardId !== id); if (state.activeCardId === id) state.activeCardId = state.cards[0].id; await activateCard(activeCard()); await persistAndBroadcast(); });
  ipcMain.handle('system:open-external', async (_event, url) => { if (typeof url === 'string' && /^https?:/u.test(url)) await shell.openExternal(url); });
}
app.whenReady().then(async () => { store = new StateStore(path.join(app.getPath('userData'), 'state')); state = await store.load(); registerIpc(); await createWindow(); app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) void createWindow(); }); }).catch((error) => { console.error('Unable to start THE Browser:', error); app.quit(); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
