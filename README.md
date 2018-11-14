- [About](#about)
- [How To](#how-to)
  - [With a CDN](#with-a-cdn)
- [Changelog](#changelog)

[![Build Status](https://travis-ci.org/herrfugbaum/cato.js.svg?branch=master)](https://travis-ci.org/herrfugbaum/cato.js)
[![codecov](https://codecov.io/gh/herrfugbaum/cato.js/branch/master/graph/badge.svg)](https://codecov.io/gh/herrfugbaum/cato.js)

# About

**C**ompare **A**pples **T**o **O**ranges

cato.js is a dependency free library for (image) comparison sliders.

It currently gets rewritten in modern JavaScript.
Version 1.0.0 (WIP) aims to bring more flexibility, less boilerplate html and better browser support.
You can find more info in the [roadmap](https://github.com/herrfugbaum/cato.js/issues/2) issue.

For the initial (Webkit only) release see [v0.0.1](https://github.com/herrfugbaum/cato.js/releases/tag/v0.0.1)

# How To

## With a CDN

Place the stylesheet inside the ```<head></head>``` tag of your HTML file.
```html
  <link rel="stylesheet" src="https://cdn.jsdelivr.net/npm/@herrfugbaum/cato@latest/dest/cato.min.css">
```

Place the script just before your closing ```</body>``` tag of your HTML file.
```html
  <script src="https://cdn.jsdelivr.net/npm/@herrfugbaum/cato@latest/dest/cato.min.js"></script>
```

Add the simple HTML inside your ```<body></body>``` tag of your HTML file.
```html
<div id="my-slider">
  <img src="path/to/my/image" /> <!-- left image -->
  <img src="path/to/my/image" /> <!-- right image -->
</div>
```

Add this JavaScript snippet inside your ```<body></body>``` tags of your HTML file and wrap it with a ```<script></script>``` tag.
Alternatively you can place this inside a, for example, index.js file and load it with ```<script src="path/to/my/index.js"></script>```.
In both cases make sure to place this script tag **after** the tag in which you load the Cato library from the CDN.

You can find a working example in the examples/global-variable/ directory.- [About](#about)
- [How To](#how-to)
  - [With a CDN](#with-a-cdn)
- [Changelog](#changelog)
```javascript
const options = {
  direction: 'vertical', // string horizontal & vertical
  width: 700, // integer defaults to max-width: 100%; via CSS
  height: 450, // integer defaults to height: auto; via CSS
  initial: 30, // integer default = 30px (initial position for slider in px)
  filter: {
    active: true, // boolean
    effect:
      'grayscale(200%)' /* url, blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepia */,
  },
}

const container = document.getElementById('my-slider')

const mySlider = new Cato(options, container)

mySlider.createSlider()
```


You can find the How To of version 0.0.1 [here](https://github.com/herrfugbaum/cato.js/releases/tag/v0.0.1)

# Changelog

0.0.1 Initial Release
