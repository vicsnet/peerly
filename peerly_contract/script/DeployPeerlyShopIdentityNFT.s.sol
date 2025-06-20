// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Script} from "forge-std/Script.sol";
import {PeerlyIdentityNFT} from "../src/PeerlyIdentityNFT.sol";

contract DeployPeerlyShopIdentityNFT is Script {
    function run() public returns (PeerlyIdentityNFT) {
        vm.startBroadcast();
        PeerlyIdentityNFT peerlyIdentityNFT = new PeerlyIdentityNFT();
        vm.stopBroadcast();
        return peerlyIdentityNFT;
    }
}
