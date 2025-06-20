// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.26;

// import {Test} from "forge-std/Test.sol";
// import {PeerlyPond} from "../src/PeerlyPond.sol";
// import {PeerlyIdentityNFT} from "../src/PeerlyIdentityNFT.sol";
// import {PeerlyEscrow} from "../src/PeerlyEscrow.sol";
// import {PeerlyTrust} from "../src/PeerlyTrust.sol";
// import {DeployPeerlyPond} from "../script/DeployPeerlyPond.s.sol";
// import {console} from "forge-std/console.sol";

// contract PeerlyPondTest is Test {
//     PeerlyPond peerlyPond;
//     PeerlyIdentityNFT peerlyIdentityNFT;
//     PeerlyEscrow peerlyEscrow;
//     PeerlyTrust peerlyTrust;

//     address shopOwner1;
//     address shopOwner2;

//     function setUp() public {
//         shopOwner1 = makeAddr("shopOwner1");
//         shopOwner2 = makeAddr("shopOwner2");
//         DeployPeerlyPond deployer = new DeployPeerlyPond();
//         (peerlyPond, peerlyIdentityNFT, peerlyEscrow, peerlyTrust, ) = deployer.run();
//     }

//     function test_createShop() public returns (address) {
//         vm.prank(shopOwner1);
//         address shop1 = peerlyPond.createShop("Shop 1");
//         console.log("address of shop1", shop1);
//         return shop1;
//     }   

//     function test_getShop() public {
//         address shop1 = test_createShop();
//         address shop2 = peerlyPond.getShop(shopOwner1);
//         assertEq(shop1, shop2);

//     }

//     function test_getAllShops() public {
//         address shop1 = test_createShop();
//         address[] memory shops = peerlyPond.getAllShops();
//         assertEq(shops.length, 1);
//         assertEq(shops[0], shop1);
    
//     }
// }