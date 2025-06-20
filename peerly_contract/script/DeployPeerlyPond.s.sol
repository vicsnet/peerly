// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Script} from "forge-std/Script.sol";
import {PeerlyPond} from "../src/PeerlyPond.sol";
import {PeerlyIdentityNFT} from "../src/PeerlyIdentityNFT.sol";
import {PeerlyEscrow} from "../src/PeerlyEscrow.sol";
import {PeerlyTrust} from "../src/PeerlyTrust.sol";
import {PeerlyReceiptNFT} from "../src/PeerlyReceiptNFT.sol";

contract DeployPeerlyPond is Script {
    function run() public returns (PeerlyPond, PeerlyIdentityNFT, PeerlyEscrow, PeerlyTrust, PeerlyReceiptNFT) {
        vm.startBroadcast();
        PeerlyIdentityNFT peerlyIdentityNFT = new PeerlyIdentityNFT();
        PeerlyEscrow peerlyEscrow = new PeerlyEscrow();
        PeerlyTrust peerlyTrust = new PeerlyTrust(address(peerlyEscrow));
        PeerlyPond peerlyPond = new PeerlyPond(address(peerlyIdentityNFT), address(peerlyEscrow), address(peerlyTrust));
        PeerlyReceiptNFT peerlyReceiptNFT = new PeerlyReceiptNFT(address(peerlyEscrow));
        vm.stopBroadcast();
        return (peerlyPond, peerlyIdentityNFT, peerlyEscrow, peerlyTrust, peerlyReceiptNFT);
    }
}