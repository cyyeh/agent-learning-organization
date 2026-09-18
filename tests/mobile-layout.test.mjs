import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const mobileCss = html.split('@media(max-width:860px)')[1] || '';

test('mobile cycle has a labeled return to the first step', () => {
  assert.match(html, /data-i18n="cycle\.loop"/);
  assert.match(mobileCss, /\.cycle \.loop-label\s*\{[^}]*display:\s*inline/);
  assert.match(html, /<span class="loop-glyph">↑<\/span>/);
});

test('mobile cycle arrows are centered so rotate() cannot overflow the column', () => {
  assert.match(
    mobileCss,
    /\.cycle \.arrow:not\(\.eu\)[\s\S]{0,180}justify-self:\s*center/,
  );
});

test('schedule table stacks into cards on the mobile breakpoint', () => {
  assert.match(mobileCss, /\.schedule thead\s*\{[^}]*display:\s*none/);
  assert.match(mobileCss, /\.schedule tr\s*\{[^}]*display:\s*block/);
  assert.match(mobileCss, /\.schedule td\s*\{[^}]*display:\s*block/);
});
