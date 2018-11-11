import { normalizeRightsideOffset } from '../src/util/normalizeRightsideOffset'

describe('normalizeRightsideOffset', () => {
  describe('smoke:', () => {
    const el1 = document.createElement('div')
    const el2 = document.createElement('div')
    it('should be defined', () => {
      expect(normalizeRightsideOffset(el1, el2)).toBeDefined()
    })
  })
})
