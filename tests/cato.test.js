import Cato from '../src/cato.js'

const optionsHorizontal = {
  direction: 'horizontal',
  width: 700,
  height: 450,
  initial: 30,
  filter: {
    active: true,
    effect: 'sepia(50%)',
  },
}

const optionsVertical = {
  direction: 'vertical',
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
      container.id = 'test'

      container.append(img1, img2)

      expect(new Cato(optionsHorizontal, container)).toBeInstanceOf(Cato)
    })

    it('should take an options argument', () => {
      const container = document.createElement('div')
      const img1 = new Image()
      const img2 = new Image()
      container.id = 'test'

      container.append(img1, img2)
      const slider = new Cato(optionsHorizontal, container)
      expect(slider.options.direction).toBe('horizontal')
      expect(slider.options.width).toBe(700)
      expect(slider.options.height).toBe(450)
      expect(slider.options.initial).toBe(30)
      expect(slider.options.filter.active).toBe(true)
      expect(slider.options.filter.effect).toBe('sepia(50%)')
    })

    it('should take an options argument', () => {
      const container = document.createElement('div')
      const img1 = new Image()
      const img2 = new Image()
      container.id = 'test'

      container.append(img1, img2)
      const slider = new Cato(optionsVertical, container)
      expect(slider.options.direction).toBe('vertical')
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
      container.id = 'test'

      container.append(img1, img2)

      expect(
        new Cato(optionsHorizontal, container).createSlider(),
      ).toBeDefined()
    })
  })
})

describe('Cato.initHTML', () => {
  describe('smoke:', () => {
    it('should be defined', () => {
      const container = document.createElement('div')
      const img1 = new Image()
      const img2 = new Image()
      container.id = 'test'

      container.append(img1, img2)
      expect(new Cato(optionsHorizontal, container).initHTML()).toBeDefined()
    })
  })
})

describe('Cato.initStyles', () => {
  describe('smoke:', () => {
    it('should be defined', () => {
      const container = document.createElement('div')
      const img1 = new Image()
      const img2 = new Image()
      container.id = 'test'

      container.append(img1, img2)
      const testObj = new Cato(optionsHorizontal, container).initHTML()
      expect(testObj.initStyles()).toBeDefined()
    })
  })
})

describe('Cato.registerEvents', () => {
  describe('smoke:', () => {
    it('should be defined', () => {
      const container = document.createElement('div')
      const img1 = new Image()
      const img2 = new Image()
      container.id = 'test'

      container.append(img1, img2)
      const testObj = new Cato(optionsHorizontal, container)
        .initHTML()
        .initStyles()
      expect(testObj.registerEvents()).toBeDefined()
    })
  })
})

describe('Cato.resizeIndicator', () => {
  describe('smoke:', () => {
    it('should be defined', () => {
      const container = document.createElement('div')
      const img1 = new Image()
      const img2 = new Image()
      container.id = 'test'

      container.append(img1, img2)
      const testObj = new Cato(optionsHorizontal, container)
        .initHTML()
        .initStyles()
      expect(testObj.resizeIndicator()).toBeDefined()
    })
  })
})

describe('Cato.handleSlides', () => {
  describe('smoke:', () => {
    it('should be defined', () => {
      const container = document.createElement('div')
      const img1 = new Image()
      const img2 = new Image()
      container.id = 'test'
      debugger
      container.append(img1, img2)
      const testObj = new Cato(optionsHorizontal, container)
        .initHTML()
        .initStyles()
      expect(testObj.handleSlides()).toBeDefined()
    })
  })
})
