import assert from 'node:assert/strict'
import test from 'node:test'
import {linkRel} from './index.js'

test('linkRel', function () {
  assert.ok(Array.isArray(linkRel), 'should be an `array`')

  assert.doesNotThrow(function () {
    let index = -1
    while (++index < linkRel.length) {
      assert.strictEqual(typeof linkRel[index], 'string', linkRel[index])
    }
  }, 'should be a `string`s')
})
