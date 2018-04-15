'use strict'

var fs = require('fs')
var https = require('https')
var concat = require('concat-stream')
var bail = require('bail')

https.get('https://help.whatwg.org/extensions/link-rel/', onconnection)

function onconnection(res) {
  res.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var value = String(buf)
    .split('\n')
    .sort()
    .filter(Boolean)

  fs.writeFile('index.json', JSON.stringify(value, null, 2) + '\n', bail)
}
