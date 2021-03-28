# link-rel

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of values viable for use in `rel` attributes on `link` elements, as defined
by [HTML][spec] and [MicroFormats][extensions].

See [`html-link-types`][html-link-types] for just the specced types.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install link-rel
```

## Use

```js
import {linkRel} from 'link-rel'

console.log(linkRel.length) //=> 112

console.log(linkRel.slice(0, 10))
```

Yields:

```js
[
  'DCTERMS.conformsTo',
  'DCTERMS.contributor',
  'DCTERMS.creator',
  'DCTERMS.description',
  'DCTERMS.hasFormat',
  'DCTERMS.hasPart',
  'DCTERMS.hasVersion',
  'DCTERMS.isFormatOf',
  'DCTERMS.isPartOf',
  'DCTERMS.isReferencedBy'
]
```

## API

This package exports the following identifiers: `linkRel`.
There is no default export.

### `linkRel`

`Array.<string>` — List of lowercase possible link types for `rel` on `link`
elements.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://github.com/wooorm/link-rel/workflows/main/badge.svg

[build]: https://github.com/wooorm/link-rel/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/link-rel.svg

[coverage]: https://codecov.io/github/wooorm/link-rel

[downloads-badge]: https://img.shields.io/npm/dm/link-rel.svg

[downloads]: https://www.npmjs.com/package/link-rel

[size-badge]: https://img.shields.io/bundlephobia/minzip/link-rel.svg

[size]: https://bundlephobia.com/result?p=link-rel

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[spec]: https://html.spec.whatwg.org/#linkTypes

[extensions]: http://microformats.org/wiki/existing-rel-values#HTML5_link_type_extensions

[html-link-types]: https://github.com/wooorm/html-link-types
