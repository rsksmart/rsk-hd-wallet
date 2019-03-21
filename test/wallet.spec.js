const Wallet = require('../src/Wallet')
const { expect } = require('chai')
const wCases = require('./wallet.cases.json')

const { seed, coinType, cases } = wCases
const wallet = Wallet({ seed, coinType })

describe('# Wallet', () => {
  describe(`Derivation, coin ${coinType}`, () => {
    cases.forEach(c => {
      const { accountId, addressIndx } = c
      const { address, privateKey } = wallet.getAccount(accountId, addressIndx)
      const privKey = privateKey(true)

      it(`Account: ${accountId}/${addressIndx} ${address}`, () => {
        expect(address).to.be.equal(c.address.toLowerCase())
        expect(privKey).to.be.equal(c.privKey)
      })
    })
  })

  describe('getAccount', () => {
    const fail = ['a', '11111111111111111111111', -200, 2147483648, 0x80000000, '0x80000001']
    fail.forEach(value => {

      it(`accountId: '${value}' should return TypeError`, () => {
        expect(() => wallet.getAccount(value, 0)).throw(TypeError)
      })

      it(`addressIndx: '${value}' should return TypeError`, () => {
        expect(() => wallet.getAccount(0, value)).throw(TypeError)
      })
    })

  })
})
