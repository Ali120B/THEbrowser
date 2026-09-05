'use strict';

const SEARCH_URL = 'https://www.google.com/search?q=';
const ALLOWED_PROTOCOLS = new Set(['http:', 'https:']);

function normalizeNavigation(input) {
  if (typeof input !== 'string') throw new TypeError('A URL is required.');
  const value = input.trim();
  if (!value) throw new TypeError('A URL is required.');

  try {
    const parsed = new URL(value.includes('://') ? value : `https://${value}`);
    if (ALLOWED_PROTOCOLS.has(parsed.protocol)) return parsed.toString();
  } catch {
    // Treat ordinary user input as a search below.
  }

  return `${SEARCH_URL}${encodeURIComponent(value)}`;
}

function isAllowedNavigation(url) {
  try {
    return ALLOWED_PROTOCOLS.has(new URL(url).protocol);
  } catch {
    return false;
  }
}

module.exports = { isAllowedNavigation, normalizeNavigation };
