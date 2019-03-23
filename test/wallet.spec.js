const Wallet = require('../src/Wallet')
const { expect } = require('chai')
const wCases = require('./wallet.cases.json')
const { BASE_PATH } = require('../src/constants')

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

    describe('bad arguments', () => {
      const fail = ['a', '0xa', '11111111111111111111111', '-200', -200, 2147483648, 0x80000000, '0x80000001']
      fail.forEach(value => {
        it(`accountId: '${value}' should return TypeError`, () => {
          expect(() => wallet.getAccount(value, 0)).throw(TypeError)
        })

        it(`addressIndx: '${value}' should return TypeError`, () => {
          expect(() => wallet.getAccount(0, value)).throw(TypeError)
        })
      })
    })

    describe('account creation', () => {
      const values = [0, 1, '10', '121212']
      const total = values.length
      const tests = [...new Array(total ** 2)].map((p, i) => [values[i / total | 0], values[i % total]])
      tests.forEach(t => {
        it('should returns a well formed account object', () => {
          const account = wallet.getAccount(...t)
          expect(typeof account).equal('object')
          const [accountId, addressIndx] = t.map(v => parseInt(v))
          expect(account).to.deep.include({ addressIndx, accountId })
          expect(account).to.have.property('address')
          expect(account).to.have.property('path')
          expect(account).to.have.property('publicKey')
          expect(account).to.have.property('privateKey')
          expect(typeof account.privateKey).equal('function')
          expect(account.path).equal(`${BASE_PATH}/${coinType}'/${accountId}'/0/${addressIndx}`)
        })
      })
    })
  })
})
