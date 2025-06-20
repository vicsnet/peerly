// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

interface IPeerlyTrust {
    function deposit(address tokenAddress, uint256 amount, address shopOwner, uint256 productId, uint256 orderId, address productBuyer) external;
    function withdrawFund(address shopOwner, address tokenAddress,address productBuyer, uint256 productId, uint256 orderId, uint256 feePercentage) external;
    function returnFund(address tokenAddress, address productBuyer, uint256 productId, uint256 orderId) external;
}
