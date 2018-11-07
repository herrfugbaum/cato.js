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
      expect(new Cato(options)).toBeInstanceOf(Cato)
    })

    it('should take an options argument', () => {
      const slider = new Cato(options)
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
