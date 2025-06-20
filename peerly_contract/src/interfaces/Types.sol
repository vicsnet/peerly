// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

  struct PurchaseData {
        uint256 productId;
        uint256 quantity;
        uint256 orderId;
        uint256 paymentAmount;
        address tokenAddress;
        address shopAddress;
        address productBuyer;
        string size;
        uint256 deliveryfee;
    }