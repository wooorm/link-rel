import fs from 'fs'
import https from 'https'
import concat from 'concat-stream'
import {bail} from 'bail'
import unified from 'unified'
import html from 'rehype-parse'
// @ts-ignore remove this when it has types.
import select from 'hast-util-select'
// @ts-ignore remove this when it has types.
import toString from 'hast-util-to-string'

/**
 * @typedef {import('hast').Element} Element
 */

var proc = unified().use(html)

https.get('https://microformats.org/wiki/existing-rel-values', onconnection)

/**
 * @param {import('http').IncomingMessage} response
 */
function onconnection(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

/**
 * @param {Buffer} buf
 */
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

  /**
   * @param {string} name
   */
  function table(name) {
    var node = select.select('h2:has(#' + name + ') ~ table', tree)
    /** @type {Element[]} */
    var rows = select.selectAll('tr', node).slice(1)

    return rows
      .map((row) =>
        select
          .selectAll('td', row)
          .map((/** @type {Element} */ d) => toString(d))
      )
      .filter((cells) => !/not allowed/i.test(cells[1].trim()))
      .map((cells) => cells[0].trim())
  }
}
