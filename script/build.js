/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module link-rel:script:build
 * @fileoverview Crawl the table of attributes.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var fs = require('fs');
var path = require('path');
var https = require('https');
var bail = require('bail');

/*
 * Input / output locations.
 */

var w3c = 'https://help.whatwg.org/extensions/link-rel/';
var output = path.join(__dirname, '..', 'index.json');

/*
 * Crawl W3C.
 */

https.get(w3c, function (res, err) {
    var value = '';

    bail(err);

    res
        .setEncoding('utf8')
        .on('data', function (buf) {
            value += buf;
        }).on('end', function (err) {
            if (err) {
                bail(err);
            }

            value = value.split('\n').sort().filter(Boolean);

            fs.writeFile(
                output,
                JSON.stringify(value, 0, 2) + '\n',
                bail
            );
        });
});
