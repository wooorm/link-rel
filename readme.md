# link-rel

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of valid values for `rel` on `<link>`.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`linkRel`](#linkrel)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package is a list of specified and common values of `rel` attributes on
`link` elements.
The list comes from the [HTML spec][spec] and [MicroFormats][extensions].

## When should I use this?

You can use this package to check if a certain value is valid value of a `rel`
attribute on a `link` element.
Alternatively, you can use [`html-link-types`][html-link-types] for just the
specced values.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install link-rel
```

In Deno with [`esm.sh`][esmsh]:

```js
import {linkRel} from 'https://esm.sh/link-rel@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {linkRel} from 'https://esm.sh/link-rel@2?bundle'
</script>
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

This package exports the identifier `linkRel`.
There is no default export.

### `linkRel`

List of valid values for `rel` on `<link>` (`Array<string>`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

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

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[spec]: https://html.spec.whatwg.org/multipage/links.html#linkTypes

[extensions]: http://microformats.org/wiki/existing-rel-values#HTML5_link_type_extensions

[html-link-types]: https://github.com/wooorm/html-link-types
