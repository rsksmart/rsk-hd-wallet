const { expect } = require('chai')
const { gtZero } = require('../../src/utils')

describe(`gtzero`, () => {
  ['1', 3, 0xa, '0x2889', 100000, '0x232323232323323']
    .forEach(test => {
      it(`${test}:true`, () => {
        expect(gtZero(test)).equal(true)
      })
    });

  [0, 0x0, '0x0', '0x00', -2, -0x3, '-223', -23232039043409340394349]
    .forEach(test => {
      it(`${test}:false`, () => {
        expect(gtZero(test)).equal(false)
      })
    })
})
