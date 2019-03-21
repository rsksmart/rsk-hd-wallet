const bip32 = require('bip32')
const ethUtil = require('ethereumjs-util')
const Tx = require('./Tx')
const { BASE_PATH, MIN_SEED_LEN } = require('./constants')

function Wallet ({ seed, coinType }) {
  seed = validateSeed(seed)
  if (!seed) throw new TypeError('Invalid seed')
  if (isNaN(parseInt(coinType))) throw new TypeError('Invalid coin type')

  const node = bip32.fromSeed(seed)
  if (!node) throw new Error('Error creating node')

  const change = 0

  const getPath = ({ accountId, addressIndx }) => {
    // m / purpose' / coin_type' / account' / change / address_index <- BIP 44
    const path = BASE_PATH.split('/').concat([`${coinType}'`, `${accountId}'`, `${change}`, `${addressIndx}`])
    return path.join('/')
  }

  const getChild = (accountId, addressIndx = 0) => {
    const path = getPath({ accountId, addressIndx })
    const child = node.derivePath(path)
    return child
  }

  const deriveAccount = (child) => {
    const { address, pubKey } = getAddress(child)
    const privateKey = (toHex) => {
      const key = getPrivateKey(child)
      return (toHex) ? toHexString(key) : key
    }
    return { pubKey, address, privateKey }
  }

  const isValidId = id => {
    id = parseInt(id)
    return !isNaN(id) && id > -1 && id < 0x80000000
  }

  const getAccount = (id, index = 0) => {
    if (!isValidId(id)) throw new TypeError('invalid account id')
    if (!isValidId(index)) throw new TypeError('invalid address index')

    let account = deriveAccount(getChild(id, index))
    if (!account) return
    Object.keys(account).forEach(p => {
      const value = account[p]
      account[p] = (Buffer.isBuffer(value)) ? toHexString(value) : value
    })
    account = Object.assign({ id, index }, account)
    return Object.freeze(account)
  }

  const transaction = (txData) => Tx(txData)

  // const getExtPriv = () => node.toBase58()

  return Object.freeze({ getAccount, transaction })
}

function toHexString (value) {
  if (Buffer.isBuffer(value)) {
    value = value.toString('hex')
  }
  if (value.substring(0, 2) !== '0x') {
    value = `0x${value}`
  }
  return value
}

function validateSeed (hexString) {
  if (hexString) {
    const seed = Buffer.from(hexString, 'hex')
    if (seed.length >= MIN_SEED_LEN) return seed
  }
}

function getPrivateKey (child) {
  return child.privateKey
}

function getPublicKey (child) {
  const privKey = getPrivateKey(child)
  const pubKey = ethUtil.privateToPublic(privKey)
  return pubKey
}

function getAddress (child) {
  const pubKey = getPublicKey(child)
  const address = ethUtil.pubToAddress(pubKey)
  return { address, pubKey }
}

module.exports = Wallet