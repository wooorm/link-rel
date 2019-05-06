# link-rel [![Build Status][build-badge]][build-page]

List of values viable for use in `rel` attributes on `link`
elements, as defined by [HTML5][spec] and [MicroFormats][extensions].

See [`html-link-types`][html-link-types] for just the specced types.

## Installation

[npm][]:

```bash
npm install link-rel
```

## Usage

```javascript
var linkRel = require('link-rel')

console.log(linkRel.length) //=> 112

console.log(linkRel.slice(0, 10))
```

Yields:

```js
[ 'DCTERMS.conformsTo',
  'DCTERMS.contributor',
  'DCTERMS.creator',
  'DCTERMS.description',
  'DCTERMS.hasFormat',
  'DCTERMS.hasPart',
  'DCTERMS.hasVersion',
  'DCTERMS.isFormatOf',
  'DCTERMS.isPartOf',
  'DCTERMS.isReferencedBy' ]
```

## API

### `linkRel`

`Array.<string>` — List of lower-case possible link types for `rel`
on `link` elements.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/link-rel.svg

[build-page]: https://travis-ci.org/wooorm/link-rel

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: https://wooorm.com

[spec]: https://html.spec.whatwg.org/#linkTypes

[extensions]: http://microformats.org/wiki/existing-rel-values#HTML5_link_type_extensions

[html-link-types]: https://github.com/wooorm/html-link-types
