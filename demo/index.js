import Cato from '../src/cato'

const optionsFirstSlider = { // are optional
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

const optionsSecondSlider = { // are optional
  'tooltips': true, // boolean
  'direction': 'horizontal', // string horizontal & vertical
  'width': 700, // integer default = 700px
  'height': 450, // integer default = 450px
  'initial': 30, // integer default = 30px (initial position for slider in px)
   'filter': {
      'active': true, // boolean
      'effect': 'sepia(50%)' /* url, blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepia */
    }
  }


const firstSlider = new Cato(optionsFirstSlider)

firstSlider.createSlider(document.getElementById('first-slider'))



const secondSlider = new Cato(optionsSecondSlider)

secondSlider.createSlider(document.getElementById('second-slider'))