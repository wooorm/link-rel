/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module link-rel
 * @fileoverview Test suite for `link-rel`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var linkRel = require('./');

/*
 * Tests.
 */

test('linkRel', function (t) {
    t.ok(
        Array.isArray(linkRel),
        'should be an `array`'
    );

    linkRel.forEach(function (tagName) {
        t.equal(
            typeof tagName,
            'string',
            '`' + tagName + '` should be a string'
        );
    });

    t.end();
});
