const countIf = require('./count-if')

describe('countIf', () => {
  test('with an empty list', () => {
    expect(countIf([], a => a === '' )).toBe(0)
  })

  test ('with an list with values', () => {
    expect(countIf([1, 2, 3, 4, 5], a => a >= 3)).toBe(3)
  })

  test('with another list of values', () => {
    expect(countIf(['Steve Rogers', 'Steve Strange', 'Tony Stark', 'Peter Parker'], a => a.startsWith('S'))).toBe(2)
  })
})