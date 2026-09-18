import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const i18n = require('../i18n.js');

test('normalizeLang maps English and Chinese variants', () => {
  assert.equal(i18n.normalizeLang('en'), 'en');
  assert.equal(i18n.normalizeLang('EN'), 'en');
  assert.equal(i18n.normalizeLang('en-US'), 'en');
  assert.equal(i18n.normalizeLang('zh-Hant'), 'zh-Hant');
  assert.equal(i18n.normalizeLang('zh-TW'), 'zh-Hant');
  assert.equal(i18n.normalizeLang('zh'), 'zh-Hant');
  assert.equal(i18n.normalizeLang('fr'), null);
  assert.equal(i18n.normalizeLang(''), null);
});

test('readLang prefers URL, then stored, then fallback', () => {
  assert.equal(i18n.readLang({ search: '?lang=en', stored: 'zh-Hant' }), 'en');
  assert.equal(i18n.readLang({ search: '', stored: 'en' }), 'en');
  assert.equal(i18n.readLang({ search: '?foo=1', stored: null }), 'zh-Hant');
  assert.equal(i18n.readLang({ search: '?lang=zh-TW', stored: 'en' }), 'zh-Hant');
});

test('Chinese and English dictionaries share the same keys and have no empty strings', () => {
  const zh = i18n.translations['zh-Hant'];
  const en = i18n.translations.en;
  assert.deepEqual(Object.keys(zh).sort(), Object.keys(en).sort());
  for (const key of Object.keys(zh)) {
    assert.notEqual(zh[key].trim(), '', key);
    assert.notEqual(en[key].trim(), '', key);
  }
  assert.notEqual(zh.title, en.title);
});

test('applyLang updates title, html lang, copy, and switcher state', () => {
  const node = {
    attrs: { 'data-i18n': 'hero.h1b' },
    textContent: '',
    getAttribute(name) { return this.attrs[name]; },
  };
  const zhBtn = {
    attrs: { 'data-set-lang': 'zh-Hant' },
    getAttribute(name) { return this.attrs[name]; },
    setAttribute(name, value) { this.attrs[name] = value; },
  };
  const enBtn = {
    attrs: { 'data-set-lang': 'en' },
    getAttribute(name) { return this.attrs[name]; },
    setAttribute(name, value) { this.attrs[name] = value; },
  };
  const html = { attrs: {}, setAttribute(name, value) { this.attrs[name] = value; } };
  const doc = {
    title: '',
    documentElement: html,
    querySelectorAll(sel) {
      if (sel === '[data-i18n]') return [node];
      if (sel === '[data-i18n-aria]') return [];
      if (sel === '[data-set-lang]') return [zhBtn, enBtn];
      return [];
    },
  };

  assert.equal(i18n.applyLang(doc, 'en'), 'en');
  assert.equal(html.attrs.lang, 'en');
  assert.equal(doc.title, i18n.translations.en.title);
  assert.equal(node.textContent, i18n.translations.en['hero.h1b']);
  assert.equal(enBtn.attrs['aria-pressed'], 'true');
  assert.equal(zhBtn.attrs['aria-pressed'], 'false');
});

test('index.html i18n keys match the dictionary', () => {
  const html = readFileSync(join(root, 'index.html'), 'utf8');
  const used = [...html.matchAll(/data-i18n(?:-aria)?="([^"]+)"/g)].map((m) => m[1]);
  assert.ok(used.length > 20);
  const dictKeys = new Set(Object.keys(i18n.translations['zh-Hant']));
  for (const key of used) {
    assert.ok(dictKeys.has(key), `missing translation for ${key}`);
  }
  const unused = [...dictKeys].filter((key) => key !== 'title' && !used.includes(key));
  assert.deepEqual(unused, []);
});
