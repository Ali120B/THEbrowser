'use strict';
const $ = (selector) => document.querySelector(selector);
let state;
function current() { return state?.cards.find((card) => card.id === state.activeCardId); }
function render(next) { state = next; const card = current(); $('#workspace-name').textContent = state.workspaces[0].name; $('#address').value = card?.url || ''; $('#card-title').textContent = card?.title || 'New card'; $('#card-status').textContent = card?.crashed ? 'Renderer crashed' : card?.loading ? 'Loading…' : 'Live'; $('#cards').replaceChildren(...state.cards.map((item) => { const row = document.createElement('div'); row.className = `card-row ${item.id === state.activeCardId ? 'active' : ''}`; const activate = document.createElement('button'); activate.className = 'card-select'; activate.textContent = item.title || item.url; activate.title = item.url; activate.onclick = () => window.theBrowser.cards.activate(item.id).catch(showError); const close = document.createElement('button'); close.className = 'close'; close.textContent = '×'; close.title = 'Close card'; close.onclick = () => window.theBrowser.cards.close(item.id).catch(showError); row.append(activate, close); return row; })); }
function showError(error) { $('#card-status').textContent = error.message || 'Action failed'; }
$('#navigation').addEventListener('submit', (event) => { event.preventDefault(); window.theBrowser.cards.navigate($('#address').value).catch(showError); });
document.querySelectorAll('[data-command]').forEach((button) => button.addEventListener('click', () => window.theBrowser.cards.command(button.dataset.command).catch(showError)));
$('#new-card').addEventListener('click', () => window.theBrowser.cards.create('https://example.com/').catch(showError));
window.theBrowser.workspace.onChanged(render); window.theBrowser.workspace.get().then(render).catch(showError);
