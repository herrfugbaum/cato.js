import Cato from '../src/cato.js'

const options = {
  tooltips: true,
  direction: 'horizontal',
  width: 700,
  height: 450,
  initial: 30,
  filter: {
    active: true,
    effect: 'sepia(50%)',
  },
}

describe('Cato', () => {
  describe('smoke:', () => {
    it('should be an instace of the Cato class', () => {
      const container = document.createElement('div')
      const img1 = new Image()
      const img2 = new Image()

      container.append(img1, img2)

      expect(new Cato(options, container)).toBeInstanceOf(Cato)
    })

    it('should take an options argument', () => {
      const container = document.createElement('div')
      const img1 = new Image()
      const img2 = new Image()
      container.append(img1, img2)
      const slider = new Cato(options, container)
      expect(slider.options.tooltips).toBe(true)
      expect(slider.options.direction).toBe('horizontal')
      expect(slider.options.width).toBe(700)
      expect(slider.options.height).toBe(450)
      expect(slider.options.initial).toBe(30)
      expect(slider.options.filter.active).toBe(true)
      expect(slider.options.filter.effect).toBe('sepia(50%)')
    })
  })
})

describe('Cato.createSlider()', () => {
  describe('smoke:', () => {
    it('should be defined', () => {
      const container = document.createElement('div')
      const img1 = new Image()
      const img2 = new Image()

      container.append(img1, img2)

      expect(new Cato(options, container).createSlider()).toBeDefined()
    })
  })
})
