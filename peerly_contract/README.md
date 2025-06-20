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

0: contract PeerlyPond 0x0e42c919eF6A83b00081fDB08e9BA2b1cEa1D7F9
1: contract PeerlyIdentityNFT 0x383C2914E4221f6C671D61B58bb606dAF9Da10b2
2: contract PeerlyEscrow 0xf81041E635C8c4a00ae2971903e182b55EeB5634
3: contract PeerlyTrust 0x0954Ac3f7896337932B244a51fb7B5466090fD7B
4: contract PeerlyReceiptNFT 0x7Be2A5c11CA0A5d8905d3536D8861C7fE669Ba06


forge script script/DeployPeerlyPond.s.sol:DeployPeerlyPond     --rpc-url https://rpc.sepolia-api.lisk.com     --private-key 68e8918a4b906cedb4db9859a333d8f134f1f3f0bebefe7496df0fcf88925cbb     --broadcast     --verify --verifier blockscout --verifier-url https://sepolia-blockscout.lisk.com/api     --etherscan-api-key  1IRRXCD4Y4BBEK2WS5AGAGPH41R8BI3WRT -