const crypto = require('crypto')

function generateSeed (bytes = 64) {
  const seed = crypto.randomBytes(bytes)
  return seed.toString('hex')
}

module.exports = { generateSeed }
