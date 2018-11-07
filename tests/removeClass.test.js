import { removeClass } from '../src/util/domClasses.js'

describe('removeClass', () => {
  describe('functionality:', () => {
    it('should remove a class from an element', () => {
      document.body.innerHTML = `
      <div id="test" class="test"></div>
      `
      const el = document.getElementById('test')
      removeClass(el, 'test')
      expect(el.classList.contains('test')).toBe(false)
    })
  })
})
