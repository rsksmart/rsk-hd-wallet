const Tx = require('../src/Tx')
const { expect } = require('chai')
const txData = {
  to: '0x8a42fa7efeb939bf189fe4758377643d633f446f',
  nonce: '0x01',
  gasPrice: '0x001',
  gasLimit: '0x200',
  chainId: 31
}

describe(`# Tx`, () => {
  // normal use
  it(`should return a Transaction instance`, () => {
    let tx = Tx(txData)
    expect(typeof tx).to.be.equal('object')
    expect(tx.constructor.name).to.be.equal('Transaction')
  })

  // required values
  objectRemoveOneProperty(txData).forEach(txd => {
    it(`throw TypeError if missed a required value`, () => {
      expect(() => Tx(txd)).to.throw(TypeError)
    })
  })

  it(`throw TypeError if 'to' is an invalid address`, () => {
    expect(() => Tx(Object.assign(txData, { to: '0x0434343434' }))).to.throw(TypeError)
  })
})

function objectRemoveOneProperty (obj) {
  return Object.keys(obj).map(k => {
    let copy = Object.assign({}, obj)
    delete copy[k]
    return copy
  })
}
