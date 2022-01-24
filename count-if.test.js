const countIf = require('./count-if')

describe('countIf', () => {
  test('with an empty list', () => {
    expect(countIf([], (a, b) => a == b)).toBe(0)
  })
})