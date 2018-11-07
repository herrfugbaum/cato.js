import { addClass } from '../src/util/domClasses.js'

describe('addClass', () => {
  describe('functionality:', () => {
    it('should add a class to an element', () => {
      document.body.innerHTML = `
      <div id="test"></div>
      `
      const el = document.getElementById('test')
      addClass(el, 'test')
      expect(el.classList.contains('test')).toBe(true)
    })
  })
})
