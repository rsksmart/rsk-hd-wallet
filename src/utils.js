const crypto = require('crypto')

const generateSeed = (bytes = 64) => crypto.randomBytes(bytes).toString('hex')

const gtZero = value => parseInt(value) > 0

const toHexString = value => {
  if (Buffer.isBuffer(value)) {
    value = value.toString('hex')
  }

  if (typeof value === 'string' && value.substring(0, 2) !== '0x') {
    value = `0x${value}`
  }

  if (typeof value === 'number') {
    value = `0x${value.toString(16)}`
  }
  return value
}

module.exports = { generateSeed, gtZero, toHexString }
