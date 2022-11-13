import fs from 'node:fs/promises'
import fetch from 'node-fetch'
import {fromHtml} from 'hast-util-from-html'
import {select, selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'

const response = await fetch(
  'https://microformats.org/wiki/existing-rel-values'
)
const text = await response.text()

const tree = fromHtml(text)
const value = table('formats').concat(table('HTML5_link_type_extensions'))

if (value.length === 0) {
  throw new Error('Couldn’t find any rels')
}

await fs.writeFile(
  'index.js',
  '/**\n * List of valid values for `rel` on `<link>`\n */\nexport const linkRel = ' +
    JSON.stringify(value.sort(), null, 2) +
    '\n'
)

/**
 * @param {string} name
 */
function table(name) {
  const node = select('h2:has(#' + name + ') ~ table', tree)

  if (!node) {
    throw new Error('Missing node for name `' + name + '`')
  }

  const rows = selectAll('tr', node).slice(1)

  return rows
    .map((row) => selectAll('td', row).map((d) => toString(d).trim()))
    .filter((cells) => !/not allowed/i.test(cells[1]))
    .map((cells) => cells[0])
}
