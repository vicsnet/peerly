// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.26;

// import {Test} from "forge-std/Test.sol";
// import {PeerlyShop} from "../src/PeerlyShop.sol";
// import {PeerlyPond} from "../src/PeerlyPond.sol";
// import {PeerlyIdentityNFT} from "../src/PeerlyIdentityNFT.sol";
// import {PeerlyEscrow} from "../src/PeerlyEscrow.sol";
// import {PeerlyTrust} from "../src/PeerlyTrust.sol";
// import {DeployPeerlyPond} from "../script/DeployPeerlyPond.s.sol";


// contract PeerlyShopTest is Test {
//     PeerlyShop peerlyShop;
//     PeerlyPond peerlyPond;
//     PeerlyIdentityNFT peerlyIdentityNFT;
//     PeerlyEscrow peerlyEscrow;
//     PeerlyTrust peerlyTrust;

//     address shopOwner;

//     function setUp() public {
//         shopOwner = makeAddr("shopOwner");
//         DeployPeerlyPond deployer = new DeployPeerlyPond();
//         (peerlyPond, peerlyIdentityNFT, peerlyEscrow, peerlyTrust, ) = deployer.run();
       
//     }

//     function test_createShop() public {
//         vm.prank(shopOwner);
//         address peerlyShopAddress = peerlyPond.createShop("Shop 1");
//         peerlyShop = PeerlyShop(peerlyShopAddress);

//     }

//     function test_addProduct() public {
//         test_createShop();
//         vm.prank(shopOwner);
//         peerlyShop.addProduct("productImage", "productDescription", "productName", 100, 10);
//     }

//     function test_updateProductPrice() public {
//         test_addProduct();
//         vm.prank(shopOwner);
//         peerlyShop.updateProductPrice(1, 100);
//     }

//     function test_removeProduct() public {
//         test_addProduct();
//         vm.prank(shopOwner);
//         peerlyShop.removeProduct(1);
//     }

// }       