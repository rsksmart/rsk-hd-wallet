# rsk-hd-wallet

> RSK Hierarchical Deterministic Wallet

Derivates accounts using [BIP32][1] with [BIP44][2] paths

[1]: https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
[2]: https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki

<a name="Wallet"></a>

## Wallet(options)
Wallet constructor

**Kind**: global function  
**Construct**: Wallet  
**Params**

- options <code>Object</code> - {seed,coinType}
    - .seed <code>String</code>
    - .coinType <code>Number</code>


* [Wallet(options)](#Wallet)
    * [.getAccount(accountId, addressIndx)](#Wallet+getAccount) ⇒ [<code>AccountData</code>](#AccountData)
    * [.createTransaction(txData)](#Wallet+createTransaction) ⇒ <code>object</code>

<a name="Wallet+getAccount"></a>

### wallet.getAccount(accountId, addressIndx) ⇒ [<code>AccountData</code>](#AccountData)
Get account/address data

**Kind**: instance method of [<code>Wallet</code>](#Wallet)  
**Params**

- accountId [<code>PathKey</code>](#PathKey)
- addressIndx [<code>PathKey</code>](#PathKey) <code> = 0</code>

<a name="Wallet+createTransaction"></a>

### wallet.createTransaction(txData) ⇒ <code>object</code>
Validate data and create transaction

**Kind**: instance method of [<code>Wallet</code>](#Wallet)  
**Returns**: <code>object</code> - instance of [ethereumjs-tx](https://github.com/ethereumjs/ethereumjs-tx)  
**Params**

- txData <code>object</code>

<a name="PathKey"></a>

## PathKey : <code>number</code> \| <code>string</code>
Number between **0 - 2147483647** inclusive.
A strings containing only numbers is also accepted.

**Kind**: global typedef  
<a name="AccountData"></a>

## AccountData : <code>object</code>
Derivated account data

**Kind**: global typedef  

