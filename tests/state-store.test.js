'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { StateStore, cloneDefaultState } = require('../src/main/state-store');
test('writes and restores workspace state atomically', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'the-browser-'));
  const store = new StateStore(directory); const state = cloneDefaultState(); state.workspaces[0].name = 'Research';
  await store.save(state);
  const loaded = await store.load();
  assert.equal(loaded.workspaces[0].name, 'Research');
  assert.equal(loaded.revision, 1); assert.match(loaded.updatedAt, /^\d{4}-\d\d-\d\dT/);
  await fs.rm(directory, { recursive: true, force: true });
});
