// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.26;

// import {Test} from "forge-std/Test.sol";
// import {PeerlyEscrow} from "../src/PeerlyEscrow.sol";
// import {PeerlyShop} from "../src/PeerlyShop.sol";
// import {PeerlyPond} from "../src/PeerlyPond.sol";

// import {PeerlyIdentityNFT} from "../src/PeerlyIdentityNFT.sol";
// import {PeerlyReceiptNFT} from "../src/PeerlyReceiptNFT.sol";
// import {PeerlyTrust} from "../src/PeerlyTrust.sol";
// import {DeployPeerlyPond} from "../script/DeployPeerlyPond.s.sol";
// import {MockToken} from "./mock/MockToken.sol";
// import {console} from "forge-std/console.sol";

// contract PeerlyEscrowTest is Test {
//     PeerlyEscrow peerlyEscrow;
//     PeerlyShop peerlyShop;
//     PeerlyPond peerlyPond;
//     PeerlyIdentityNFT peerlyIdentityNFT;
//     PeerlyTrust peerlyTrust;
//     PeerlyReceiptNFT peerlyReceiptNFT;

//     MockToken mockToken;

//     address shopOwner;
//     address buyer;
//     address owner = 0x1804c8AB1F12E6bbf3894d4083f33e07309d1f38;

//     function setUp() public {
//         shopOwner = makeAddr("shopOwner");
//         buyer = makeAddr("buyer");

//         DeployPeerlyPond deployer = new DeployPeerlyPond();

//         // vm.startPrank(owner);
//         (
//             peerlyPond,
//             peerlyIdentityNFT,
//             peerlyEscrow,
//             peerlyTrust,
//             peerlyReceiptNFT
//         ) = deployer.run();

//         mockToken = new MockToken();
//         // console.log(owner);
//         // vm.stopPrank();

//         console.log("peerlyEscrow address", address(peerlyEscrow));
//         console.log("peerlyShop address", address(peerlyShop));
//         console.log("peerlyPond address", address(peerlyPond));
//         console.log("peerlyIdentityNFT address", address(peerlyIdentityNFT));
//         console.log("peerlyTrust address", address(peerlyTrust));
//     }

//     function test_setReceiptNFT() public {
//         console.log(peerlyEscrow.getAdmin());
//         vm.startPrank(owner);
//         address nft = address(peerlyReceiptNFT);
//         uint256 fee = 100;
//         peerlyEscrow.setReceiptNFT(nft);

//         peerlyEscrow.setTokenAddress(address(mockToken));
//         peerlyEscrow.setPeerlyTrust(address(peerlyTrust));

//         peerlyEscrow.setFeePercent(fee);
//         vm.stopPrank();
//     }

//     function test_createOrder() public returns (address) {
//         test_setReceiptNFT();
//         vm.startPrank(shopOwner);
//         address peerlyShopAddress = peerlyPond.createShop(
//             "Shop 1"   
//         );

//         peerlyShop = PeerlyShop(peerlyShopAddress);
//         peerlyShop.addProduct(
//             "productImage",
//             "productDescription",
//             "productName",
//             100,
//             10
//         );

//         PeerlyShop.Product memory product = peerlyShop.getProduct(1);
//         assertEq(product.totalStock, 10);
//         console.log("peerlyShopAddress", peerlyShopAddress);
//         vm.stopPrank();

//         vm.startPrank(buyer);
//         mockToken.mint(buyer, 10000);
//         //approve trust account to spend buyers token
//         mockToken.approve(address(peerlyTrust), 10000);
//         // check allowance
//         console.log(
//             "allowance",
//             mockToken.allowance(buyer, address(peerlyTrust))
//         );

//         peerlyEscrow.createOrder(
//             peerlyShopAddress,
//             1,
//             1,
//             100,
//             address(mockToken),
//             "productName"
//         );
//         vm.stopPrank();
//         return peerlyShopAddress;
//     }

//     function test_getOrdersByBuyer() public {
//         test_createOrder();

//         PeerlyEscrow.Order[] memory orders = peerlyEscrow.getOrdersByBuyer(
//             buyer
//         );
//         for (uint256 i = 0; i < orders.length; i++) {
//             console.log("--- Order", i, "---");
//             console.log("OrderId", orders[i].orderId);
//             console.log("Buyer:", orders[i].buyer);
//             console.log("Shop Owner:", orders[i].shopAddress);
//             console.log("Product ID:", orders[i].productId);
//             console.log("Quantity:", orders[i].quantity);
//             console.log("Amount:", orders[i].amount);
//             console.log("Fulfilled:", orders[i].orderStatus.fulfilled);
//             console.log("Refunded:", orders[i].orderStatus.refunded);
//             console.log("Refunded:", orders[i].orderStatus.buyerApproved);
//             console.log("Refunded:", orders[i].orderStatus.orderDisputed);
//             console.log(
//                 "Refunded:",
//                 orders[i].orderStatus.adminInterventionStatus
//             );
//             console.log("Refunded:", orders[i].adminIntervention);
//         }
//     }

//     function test_getOrderDetails() public {
//         address peerlyShopAddress = test_createOrder();
//         PeerlyEscrow.Order memory orders = peerlyEscrow.getOrderDetails(0);
//         assertEq(orders.orderId, 0);
//         assertEq(orders.buyer, buyer);
//         assertEq(orders.shopAddress, peerlyShopAddress);
//         assertEq(orders.productId, 1);
//         assertEq(orders.quantity, 1);
//         assertEq(orders.amount, 100);
//     }

//     function test_confirmOrder() public {
//         test_createOrder();
//         vm.prank(shopOwner);
//         peerlyEscrow.confirmOrder(0);
//     }

//     function test_cancelOrder() public {
//         test_createOrder();
//         vm.prank(buyer);
//         peerlyEscrow.cancelOrder(0);
//     }

//     function test_buyerApproveOrder() public {
//         test_confirmOrder();
//         vm.prank(buyer);
//         peerlyEscrow.buyerApproveOrder(0);
//     }

//     function test_disputeOrder() public {
//         test_confirmOrder();
//         vm.prank(buyer);
//         peerlyEscrow.disputeOrder(0);
//     }

//     function test_adminOrderInterference() public{
//         test_disputeOrder();
//         vm.prank(owner);
//         peerlyEscrow.adminOrderInterfernce(0, 1);
//     }
// }
