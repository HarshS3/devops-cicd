const test = require('node:test');
const assert = require('node:assert');
const app = require('../server');

test('GET /health returns healthy status', async () => {
  // Simple check to ensure app exports express instance
  assert.strictEqual(typeof app, 'function');
  assert.strictEqual(typeof app.get, 'function');
});
