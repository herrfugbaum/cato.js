import setInsetDirection from '../src/util/setInsetDirection.js'

describe('Cato', () => {
  describe('smoke:', () => {
    it('should be defined', () => {
      expect(setInsetDirection('vertical', 10)).toBeDefined()
    })
  })
  describe('functionality:', () => {
    it('should return a string', () => {
      expect(typeof setInsetDirection('horizontal', 10)).toBe('string')
      expect(typeof setInsetDirection('vertical', 10)).toBe('string')
    })
  })
})
