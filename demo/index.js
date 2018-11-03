import Cato from '../src/cato'

const options = { // are optional
      'tooltips': true, // boolean
      'direction': 'vertical', // string horizontal & vertical
      'width': 700, // integer default = 700px
      'height': 450, // integer default = 450px
      'initial': 30, // integer default = 30px (initial position for slider in px)
      'filter': {
        'active': true, // boolean
        'effect': 'grayscale(200%)' /* url, blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepia */
      }
    }

const slider = new Cato(options)

slider.createSlider(document.getElementById('test'))