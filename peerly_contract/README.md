## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```



0: contract PeerlyPond 0x4c9e8333Ee2Cd3D8a201a1E5D287000566Aa37BB
1: contract PeerlyIdentityNFT 0x8cF95deb307cE5d803705981b7B068AD6Ba1E62a
2: contract PeerlyEscrow 0x3511f2F0e664b8399a0BB72890eBD989aBE87578
3: contract PeerlyTrust 0x993583D06733AD0da369c9aF8d22fb8195a4B283
4: contract PeerlyReceiptNFT 0xD58bFe145a7B8729DeA4C1838a86363a58DC469a


forge script script/DeployPeerlyPond.s.sol:DeployPeerlyPond     --rpc-url https://rpc.sepolia-api.lisk.com     --private-key 68e8918a4b906cedb4db9859a333d8f134f1f3f0bebefe7496df0fcf88925cbb     --broadcast     --verify --verifier blockscout --verifier-url https://sepolia-blockscout.lisk.com/api     --etherscan-api-key  1IRRXCD4Y4BBEK2WS5AGAGPH41R8BI3WRT -

forge verify-contract 0x8C1f7918F9686eb7970E51aA5122b5C71962Ed98 ./src/PeerlyShop.sol:PeerlyShop --chain 4202 --watch --verifier blockscout --verifier-url https://sepolia-blockscout.lisk.com/api


