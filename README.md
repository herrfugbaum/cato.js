#About

cato.js is a dependency free library for (image) comparison sliders.
Keep in mind that this software is in a very early stage.
Currently Webkit only.


#How To

###Include CSS and JS File

Place the following lines in your HTML ```html<head></head>```.

```html
<link rel="stylesheet" href="your_path_to/cato.css">
<script src="your_path_to/cato.js"></script>
```

###Add the slider markup to your HTML ```html<body></body>```

```html
<div id="your_id" class="cato">
  <img src="slideable_picture">
  <img src="visible_picture">
  <input type="range">
  <output></output>
</div>
```

###Add javascript

Either in ```html<script></script>``` tags in your HTML ```html<body></body>``` tags or in a seperate JS file.

```javascript
var options = { // are optional
      'tooltips': true, // boolean
      'direction': 'horizontal', // string horizontal & vertical
      'width': 700, // integer default = 700px
      'height': 450, // integer default = 450px
      'initial': 30, // integer default = 30px (initial position for slider in px)
      'filter': {
        'active': true, // boolean
        'effect': 'sepia(75%)' /* url, blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepia */
      }
    },
    slider = new Cato(options)

    slider.createSlider('your_id')
```

## Changelog

0.0.1 Initial Release