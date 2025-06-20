//SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract PeerlyTrust {
    uint256 public totalReceived;

    address public admin;

    address public peerlyEscrow;

    mapping(address shopOwner => uint256 totalReceived) public received;
    mapping(address shopOwner => uint256 totalReceived) public trustBalance;

    mapping(uint256 productId => mapping(uint256 orderId => mapping(address shopOwner => uint256 amount)))
        public orderPurchasedAmount;
    mapping(address productBuyer => mapping(uint256 productId => mapping(uint256 orderId => uint256 amount)))
        public productBuyerOrderAmount;

    constructor(address _peerlyEscrow) {
        peerlyEscrow = _peerlyEscrow;
    }

    function withdraw(uint256 amount) public {}

    function deposit(
        address tokenAddress,
        uint256 amount,
        address shopOwner,
        uint256 productId,
        uint256 orderId,
        address productBuyer
    ) public {
        IERC20(tokenAddress).transferFrom(productBuyer, address(this), amount);
        received[shopOwner] += amount;
        orderPurchasedAmount[productId][orderId][shopOwner] += amount;
        productBuyerOrderAmount[productBuyer][productId][orderId] += amount;
        totalReceived += amount;
    }

    // withdraw fund to the shop owner
    function withdrawFund(
        address shopOwner,
        address tokenAddress,
        address productBuyer,
        uint256 productId,
        uint256 orderId,
        uint256 feePercentage
    ) public {
        uint256 amount = productBuyerOrderAmount[productBuyer][productId][
            orderId
        ];
        require(amount > 0, "No funds to withdraw");
        uint256 feeAmount = (amount * feePercentage) / 100;
        uint256 amountToSend = amount - feeAmount;

        IERC20(tokenAddress).transfer(shopOwner, amountToSend);
        trustBalance[shopOwner] += feeAmount;

        // emit event
    }

    // fund returned to the buyer
    function returnFund(
        address tokenAddress,
        address productBuyer,
        uint256 productId,
        uint256 orderId
    ) public {
        require(
            msg.sender == peerlyEscrow,
            "Only peerly escrow can return fund"
        );
        uint256 amount = productBuyerOrderAmount[productBuyer][productId][
            orderId
        ];
        require(amount > 0, "No funds to return");
        IERC20(tokenAddress).transfer(productBuyer, amount);
        // emit event
    }
    function getBalance(address tokenAddress) public view returns (uint256) {
        return IERC20(tokenAddress).balanceOf(address(this));
    }

    function getReceived(address shopOwner) public view returns (uint256) {
        return received[shopOwner];
    }

    function getTrustBalance(address shopOwner) public view returns (uint256) {
        return trustBalance[shopOwner];
    }

    function getOrderPurchasedAmount(
        uint256 productId,
        uint256 orderId,
        address shopOwner
    ) public view returns (uint256) {
        return orderPurchasedAmount[productId][orderId][shopOwner];
    }

    function getProductBuyerOrderAmount(
        address productBuyer,
        uint256 productId,
        uint256 orderId
    ) public view returns (uint256) {
        return productBuyerOrderAmount[productBuyer][productId][orderId];
    }

    function getTotalReceived() public view returns (uint256) {
        return totalReceived;
    }
}
