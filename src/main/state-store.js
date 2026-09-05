'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');

const DEFAULT_STATE = Object.freeze({
  schemaVersion: 1,
  revision: 0,
  updatedAt: null,
  activeCardId: null,
  workspaces: [{ id: 'workspace-main', name: 'My workspace', stackIds: ['stack-main'] }],
  stacks: [{ id: 'stack-main', workspaceId: 'workspace-main', name: 'Inbox', cardIds: [] }],
  cards: []
});

function cloneDefaultState() { return structuredClone(DEFAULT_STATE); }
function validateState(state) {
  if (!state || state.schemaVersion !== 1 || !Array.isArray(state.workspaces) || !Array.isArray(state.stacks) || !Array.isArray(state.cards)) {
    throw new Error('The saved workspace has an unsupported format.');
  }
  return state;
}

class StateStore {
  constructor(directory) { this.directory = directory; this.file = path.join(directory, 'workspace-state.json'); this.pending = Promise.resolve(); }
  async load() {
    try { return validateState(JSON.parse(await fs.readFile(this.file, 'utf8'))); }
    catch (error) { if (error.code === 'ENOENT') return cloneDefaultState(); throw error; }
  }
  save(nextState) {
    this.pending = this.pending.then(async () => {
      const state = validateState(nextState);
      await fs.mkdir(this.directory, { recursive: true });
      const document = { ...state, revision: (state.revision || 0) + 1, updatedAt: new Date().toISOString() };
      const temporary = `${this.file}.${process.pid}.tmp`;
      await fs.writeFile(temporary, `${JSON.stringify(document, null, 2)}\n`, { mode: 0o600 });
      await fs.rename(temporary, this.file);
      Object.assign(nextState, document);
    });
    return this.pending;
  }
}

module.exports = { StateStore, cloneDefaultState, validateState };
