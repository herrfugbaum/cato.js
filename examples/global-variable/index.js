const optionsFirstSlider = {
  // are optional
  direction: 'vertical', // string horizontal & vertical
  width: 700, // integer default = 700px
  height: 450, // integer default = 450px
  initial: 30, // integer default = 30px (initial position for slider in px)
  filter: {
    active: true, // boolean
    effect:
      'grayscale(200%)' /* url, blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepia */,
  },
}

const optionsSecondSlider = {
  // are optional
  direction: 'horizontal', // string horizontal & vertical
  initial: 30, // integer default = 30px (initial position for slider in px)
  filter: {
    active: true, // boolean
    effect:
      'sepia(50%)' /* url, blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepia */,
  },
}

const firstSlider = new Cato(
  optionsFirstSlider,
  document.getElementById('first-slider'),
)

firstSlider.createSlider()

const secondSlider = new Cato(
  optionsSecondSlider,
  document.getElementById('second-slider'),
)

secondSlider.createSlider()
