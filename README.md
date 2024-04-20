# is-overflowed
> Detect element text overflowed.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/is-overflowed
```

## usage
```js
import isOverflowed from '@jswork/is-overflowed';

const el = document.getElementById('my-element');
const isOverflowed = isOverflowed(el);
console.log(isOverflowed); // true or false
```

## types
```ts
/// <reference types="@jswork/is-overflowed/global.d.ts" />
```

## license
Code released under [the MIT license](https://github.com/afeiship/is-overflowed/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/is-overflowed
[version-url]: https://npmjs.org/package/@jswork/is-overflowed

[license-image]: https://img.shields.io/npm/l/@jswork/is-overflowed
[license-url]: https://github.com/afeiship/is-overflowed/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/is-overflowed
[size-url]: https://github.com/afeiship/is-overflowed/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/is-overflowed
[download-url]: https://www.npmjs.com/package/@jswork/is-overflowed
