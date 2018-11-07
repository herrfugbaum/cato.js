import setInsetDirection from '../src/util/setInsetDirection.js'

describe('setInsetDirection', () => {
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

    it.each`
      argument1       | argument 2 | expected
      ${'vertical'}   | ${10}      | ${'inset(10px 0px 0px 0px)'}
      ${'vertical'}   | ${11}      | ${'inset(11px 0px 0px 0px)'}
      ${'horizontal'} | ${20}      | ${'inset(0px 0px 0px 20px)'}
      ${'horizontal'} | ${21}      | ${'inset(0px 0px 0px 21px)'}
    `(
      'should return the correct string $expected for the given arguments $argument1, $argument2',
      ({ argument1, argument2, expected }) => {
        expect(setInsetDirection(argument1, argument2)).toBe(expected)
      },
    )
  })

  describe('errors:', () => {
    it.each`
      argument         | expected
      ${'some string'} | ${'Direction must be either horizontal or vertical'}
      ${1}             | ${'Direction must be either horizontal or vertical'}
      ${{}}            | ${'Direction must be either horizontal or vertical'}
      ${[]}            | ${'Direction must be either horizontal or vertical'}
    `(
      'should throw $expected if supplied with an inappropriate argument like $argument',
      ({ argument, expected }) => {
        expect(() => {
          setInsetDirection(argument, 10)
        }).toThrow(expected)
      },
    )
  })
})
