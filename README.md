# rsk-hd-wallet

> RSK Hierarchical Deterministic Wallet

Derivates accounts using [BIP32][1] with [BIP44][2] paths

[1]: https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
[2]: https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki

#  






#### Wallet(options) 

Wallet constructor




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  | {seed,coinType} | &nbsp; |
| options.seed | `String`  |  | &nbsp; |
| options.coinType | `Number`  |  | &nbsp; |




##### Returns


- `Void`



#### getAccount(accountId, addressIndx) 

Get account/address data




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| accountId | `PathKey`  |  | &nbsp; |
| addressIndx | `PathKey`  |  | &nbsp; |




##### Returns


- `AccountData`  



#### createTransaction(txData) 

Validate data and create transaction




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| txData | `object`  |  | &nbsp; |




##### Returns


- `object`  instance of {@link https://github.com/ethereumjs/ethereumjs-tx ethereumjs-tx}




*
