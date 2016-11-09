'use strict';

var fs = require('fs');
var path = require('path');
var https = require('https');
var bail = require('bail');

https.get('https://help.whatwg.org/extensions/link-rel/', function (res, err) {
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
            value = JSON.stringify(value, 0, 2);

            fs.writeFile('index.json', value + '\n', bail);
        });
});
