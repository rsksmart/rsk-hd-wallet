
const EthTx = require('ethereumjs-tx')
const { isValidAddress } = require('ethereumjs-util')
const { gtZero } = require('./utils')

function Tx (txData) {
  const { to, nonce, gasPrice, gasLimit, chainId, data } = txData
  if (undefined === data) txData.data = ''
  if (!isValidAddress(to)) throw new TypeError(`Invalid to: ${to}`)
  if (undefined === nonce) throw new TypeError('Invalid Nonce')
  if (!gtZero(chainId)) throw new TypeError('Invalid chainId')
  if (!gasPrice) throw new TypeError('Invalid gasPrice')
  if (!gtZero(gasLimit)) throw new TypeError('Invalid gasLimit')
  const tx = new EthTx(txData)
  return tx
}

module.exports = Tx
