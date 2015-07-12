#About

cato.js is a dependency free library for (image) comparison sliders.
Keep in mind that this software is in a very early stage.
Currently Webkit only.


#How To

```html
<div id="your_id" class="cato">
  <img src="slideable_picture">
  <img src="visible_picture">
  <input type="range">
  <output></output>
</div>
```

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