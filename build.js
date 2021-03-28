import fs from 'fs'
import https from 'https'
import concat from 'concat-stream'
import {bail} from 'bail'
import unified from 'unified'
import html from 'rehype-parse'
import select from 'hast-util-select'
import toString from 'hast-util-to-string'

var proc = unified().use(html)

https.get('https://microformats.org/wiki/existing-rel-values', onconnection)

function onconnection(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var tree = proc.parse(buf)
  var value = table('formats').concat(table('HTML5_link_type_extensions'))

  if (value.length === 0) {
    bail(new Error('Couldn’t find any rels'))
  }

  fs.writeFile(
    'index.js',
    'export var linkRel = ' + JSON.stringify(value.sort(), null, 2) + '\n',
    bail
  )

  function table(name) {
    var node = select.select('h2:has(#' + name + ') ~ table', tree)
    var rows = select.selectAll('tr', node).slice(1)

    return rows
      .map((row) => select.selectAll('td', row).map((d) => toString(d)))
      .filter((cells) => !/not allowed/i.test(cells[1].trim()))
      .map((cells) => cells[0].trim())
  }
}
