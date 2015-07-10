# object-depth [![Build Status][travis-badge]][travis-link] [![Dependency Status][gemnasium-badge]][gemnasium-link] [![Coverage Status][coveralls-badge]][coveralls-link]
> Get the maximum depth of an object

## Install

```sh
$ npm install --save object-depth
```


## Usage

```js
var objectDepth = require('object-depth');
var object = {
	foo: 'bar',
	baz: {
		fizz: 'buzz'
	}
};

var depth = objectDepth(object);
// depth is 2
```

## License

MIT © [Chris Crowell](https://github.com/crowelch)

[travis-badge]: http://img.shields.io/travis/crowelch/object-depth.svg?style=flat-square
[travis-link]: https://travis-ci.org/crowelch/object-depth

[gemnasium-badge]: http://img.shields.io/gemnasium/crowelch/object-depth.svg?style=flat-square
[gemnasium-link]: https://gemnasium.com/crowelch/object-depth

[coveralls-badge]: http://img.shields.io/coveralls/crowelch/object-depth.svg?style=flat-square
[coveralls-link]: https://coveralls.io/r/crowelch/object-depth
