/**
 * @typedef {import('hast').Element} Element
 */

import fs from 'node:fs'
import https from 'node:https'
import concat from 'concat-stream'
import {bail} from 'bail'
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import {select, selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'

const proc = unified().use(rehypeParse)

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
  const tree = proc.parse(buf)
  const value = table('formats').concat(table('HTML5_link_type_extensions'))

  if (value.length === 0) {
    bail(new Error('Couldn’t find any rels'))
  }

  fs.writeFile(
    'index.js',
    'export const linkRel = ' + JSON.stringify(value.sort(), null, 2) + '\n',
    bail
  )

  /**
   * @param {string} name
   */
  function table(name) {
    const node = select('h2:has(#' + name + ') ~ table', tree)

    if (!node) {
      throw new Error('Missing node for name `' + name + '`')
    }

    /** @type {Element[]} */
    const rows = selectAll('tr', node).slice(1)

    return rows
      .map((row) =>
        selectAll('td', row).map((/** @type {Element} */ d) => toString(d))
      )
      .filter((cells) => !/not allowed/i.test(cells[1].trim()))
      .map((cells) => cells[0].trim())
  }
}
