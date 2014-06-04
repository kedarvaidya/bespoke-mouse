[![Build Status](https://secure.travis-ci.org/kedarvaidya/bespoke-mouse.png?branch=master)](https://travis-ci.org/kedarvaidya/bespoke-mouse)

# bespoke-mouse

Mouse support for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/kedarvaidya/bespoke-mouse/master/dist/bespoke-mouse.min.js
[max]: https://raw.github.com/kedarvaidya/bespoke-mouse/master/dist/bespoke-mouse.js

## Usage

First, include both `bespoke.js` and `bespoke-mouse.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.from('article', {
  mouse: true
});
```

By default, bespoke-mouse navigates to next slide on left click or when mouse wheel is moved down and navigates to previous slide on right click or when mouse wheel is moved up.

If you want to allow navigation only on click, use the 'click' option:

```js
bespoke.from('article', {
  mouse: 'click'
});
```

Or, if you want to allow navigation only on mousewheel, use the 'wheel' option:

```js
bespoke.from('article', {
  mouse: 'wheel'
});
```

## Package managers

### Bower

```bash
$ bower install bespoke-mouse
```

### npm

```bash
$ npm install bespoke-mouse
```

The bespoke-mouse npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-mouse');
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
