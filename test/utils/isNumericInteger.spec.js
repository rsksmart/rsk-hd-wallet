const { expect } = require('chai')
const { isNumericInteger } = require('../../src/utils')

describe('isNumericInteger', () => {
  [
    [0, true],
    ['0', true],
    [1, true],
    [10, true],
    [111111, true],
    [Number.MAX_SAFE_INTEGER, true],
    [Number.MAX_SAFE_INTEGER.toString(), true],
    [Number.MAX_SAFE_INTEGER.toString(16), false],
    ['0xa', false],
    [2.2, false],
    [' ', false],
    ['\t\t', false],
    ['\n\r', false],
    ['-', false],
    [-1, true],
    ['-2', true],
    ['-200', true],
    [1.1, false],
    ['0x8e5', false],
    ['022', false],
    ['1.222', false]
  ].forEach(test => {
    it(`${test[0]}:${test[1]}`, () => {
      expect(isNumericInteger(test[0])).equals(test[1])
    })
  })
})
