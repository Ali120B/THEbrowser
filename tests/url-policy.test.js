'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { isAllowedNavigation, normalizeNavigation } = require('../src/shared/url-policy');
test('normalizes web addresses and search input', () => {
  assert.equal(normalizeNavigation('example.com'), 'https://example.com/');
  assert.equal(normalizeNavigation('https://example.com/a'), 'https://example.com/a');
  assert.equal(normalizeNavigation('spatial browser'), 'https://www.google.com/search?q=spatial%20browser');
});
test('only permits http navigation for browser content', () => {
  assert.equal(isAllowedNavigation('https://example.com'), true);
  assert.equal(isAllowedNavigation('http://localhost:3000'), true);
  assert.equal(isAllowedNavigation('file:///etc/passwd'), false);
  assert.equal(isAllowedNavigation('javascript:alert(1)'), false);
});
