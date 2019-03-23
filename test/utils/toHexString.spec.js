const { expect } = require('chai')
const { toHexString } = require('../../src/utils')

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
