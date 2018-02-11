# xy-convert

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![Test coverage][codecov-image]][codecov-url]
  [![npm download][download-image]][download-url]

Convert between different xy formats.

## Installation

`$ npm install --save ml-xy-convert`

## Usage

```js
import xyConvert from 'ml-xy-convert';

const xxyyArray = [[1, 1, 1], [2, 2, 2]];
const xxyyObject = { x: [1, 1, 1], y: [2, 2, 2] };
const xyxyArray = [[1, 2], [1, 2], [1, 2]];
const xyxyObject = [{ x: 1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 2 }];

xyConvert(xxyyArray) === xxyyObject;
xyConvert(xxyyArray, { inputFormat: 'xxyyArray' }) === xxyyObject;
xyConvert(xxyyArray, { outputFormat: 'xyxyObject' }) === xyxyObject;
```

## [API Documentation](https://mljs.github.io/xy-convert/)
Structure convention
  * xyxyArray: `[[x1, y1], [x2, y2], ... ]`
  * xxyyArray: `[[x1, x2, ...], [y1, y2, ...]]`
  * xyxyObject: `[{x: x1, y: y1}, {x: x2, y: y2}, ...]`
  * xxyyObject: `{x:[x1, x2, ...], y:[y1, y2, ...]}`

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-xy-convert.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ml-xy-convert
[travis-image]: https://img.shields.io/travis/mljs/xy-convert/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mljs/xy-convert
[codecov-image]: https://img.shields.io/codecov/c/github/mljs/xy-convert.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/mljs/xy-convert
[download-image]: https://img.shields.io/npm/dm/ml-xy-convert.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/ml-xy-convert
