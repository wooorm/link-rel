# link-rel [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

List of values viable for use in `rel` attributes on `link`
elements, as defined by [HTML5][spec] and [MicroFormats][extensions].

See [`wooorm/html-link-types`][html-link-types] for just the specced
types.

## Installation

[npm][]:

```bash
npm install link-rel
```

**link-rel** is also available as an AMD, CommonJS, and globals
module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var linkRel = require('link-rel');
```

Slicing the first few items:

```javascript
var head = linkRel.slice(0, 10);
```

Yields:

```js
[ 'alternate',
  'amphtml',
  'appendix',
  'apple-touch-icon',
  'apple-touch-icon-precomposed',
  'apple-touch-startup-image',
  'archived',
  'attachment',
  'authorization_endpoint',
  'canonical' ]
```

And, computing `length`:

```javascript
var length = linkRel.length;
```

Yields:

```js
103
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

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/link-rel.svg

[coverage-page]: https://codecov.io/github/wooorm/link-rel?branch=master

[npm]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/link-rel/releases

[license]: LICENSE

[author]: http://wooorm.com

[spec]: https://html.spec.whatwg.org/#linkTypes

[extensions]: http://microformats.org/wiki/existing-rel-values#HTML5_link_type_extensions

[html-link-types]: https://github.com/wooorm/html-link-types
