'use strict';

const { WebContentsView, session } = require('electron');
const { isAllowedNavigation, normalizeNavigation } = require('../shared/url-policy');

class BrowserManager {
  constructor(window, onEvent) { this.window = window; this.onEvent = onEvent; this.views = new Map(); }
  create(card) {
    const partition = `persist:profile-${card.profileId || 'default'}`;
    const contentSession = session.fromPartition(partition);
    const view = new WebContentsView({ webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true, partition, webSecurity: true } });
    this.views.set(card.id, view);
    this.window.contentView.addChildView(view);
    view.webContents.setWindowOpenHandler(({ url }) => {
      if (isAllowedNavigation(url)) this.onEvent('new-window-requested', { cardId: card.id, url });
      return { action: 'deny' };
    });
    view.webContents.on('will-navigate', (event, url) => { if (!isAllowedNavigation(url)) event.preventDefault(); });
    view.webContents.on('page-title-updated', (_event, title) => this.onEvent('card-updated', { cardId: card.id, title }));
    view.webContents.on('did-navigate', (_event, url) => this.onEvent('card-updated', { cardId: card.id, url, loading: false }));
    view.webContents.on('did-start-loading', () => this.onEvent('card-updated', { cardId: card.id, loading: true }));
    view.webContents.on('did-stop-loading', () => this.onEvent('card-updated', { cardId: card.id, loading: false }));
    view.webContents.on('render-process-gone', () => this.onEvent('card-updated', { cardId: card.id, crashed: true, loading: false }));
    return view;
  }
  has(cardId) { return this.views.has(cardId); }
  show(cardId, bounds) {
    for (const [id, view] of this.views) view.setVisible(id === cardId);
    const view = this.views.get(cardId);
    if (view) { view.setBounds(bounds); view.setVisible(true); }
  }
  async navigate(cardId, input) { const url = normalizeNavigation(input); const view = this.views.get(cardId); if (!view) throw new Error('Card content is unavailable.'); await view.webContents.loadURL(url); return url; }
  command(cardId, action) {
    const contents = this.views.get(cardId)?.webContents;
    if (!contents) throw new Error('Card content is unavailable.');
    if (action === 'back' && contents.canGoBack()) contents.goBack();
    else if (action === 'forward' && contents.canGoForward()) contents.goForward();
    else if (action === 'reload') contents.reload();
    else if (action === 'devtools') contents.openDevTools({ mode: 'detach' });
  }
  destroy(cardId) { const view = this.views.get(cardId); if (view) { this.window.contentView.removeChildView(view); view.webContents.close(); this.views.delete(cardId); } }
  destroyAll() { for (const id of [...this.views.keys()]) this.destroy(id); }
}
module.exports = { BrowserManager };
