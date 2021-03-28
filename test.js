import assert from 'assert'
import test from 'tape'
import {linkRel} from './index.js'

test('linkRel', function (t) {
  t.ok(Array.isArray(linkRel), 'should be an `array`')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < linkRel.length) {
      assert.strictEqual(typeof linkRel[index], 'string', linkRel[index])
    }
  }, 'should be a `string`s')

  t.end()
})
