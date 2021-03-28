'use strict'

var assert = require('assert')
var test = require('tape')
var linkRel = require('.')

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
