# egg-action-logger

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-action-logger.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-action-logger
[travis-image]: https://img.shields.io/travis/eggjs/egg-action-logger.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-action-logger
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-action-logger.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-action-logger?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-action-logger.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-action-logger
[snyk-image]: https://snyk.io/test/npm/egg-action-logger/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-action-logger
[download-image]: https://img.shields.io/npm/dm/egg-action-logger.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-action-logger

<!--
Description here.
-->

## Install

```bash
$ npm i egg-action-logger --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.actionLogger = {
  enable: true,
  package: 'egg-action-logger',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.actionLogger = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
