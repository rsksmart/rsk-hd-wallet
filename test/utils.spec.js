const { expect } = require('chai')
const { gtZero, toHexString } = require('../src/utils')

describe('# Utils', () => {

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

  describe('toHexString', () => {
    [
      ['0x0000', '0x0000'],
      [0x12345, '0x12345'],
      ['abfed', '0xabfed'],
      [123456, '0x1e240'],
      [15, '0xf'],
      ['0x12345af4', '0x12345af4'],
      [Buffer.from('afed45908fac', 'hex'), '0xafed45908fac'],
      [Buffer.from('1616', 'hex'), '0x1616'],
      [Buffer.from([1, 14, 15, 2]), '0x010e0f02'],
      [Buffer.from('test'), '0x74657374']
    ].forEach(test => {
      it(`${test[0]} === ${test[1]}`, () => {
        expect(toHexString(test[0])).to.be.equals(test[1])
      })
    })
  })
})
