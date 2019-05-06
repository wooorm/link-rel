'use strict'

var assert = require('assert')
var test = require('tape')
var linkRel = require('.')

test('linkRel', function(t) {
  t.ok(Array.isArray(linkRel), 'should be an `array`')

  t.doesNotThrow(function() {
    linkRel.forEach(function(tagName) {
      assert.strictEqual(typeof tagName, 'string', tagName)
    })
  }, 'should be a `string`s')

  t.end()
})
