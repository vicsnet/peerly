// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import "./Types.sol";
    
interface IPeerlyShop {
   
    function addProduct(
        string memory _productImage,
        string memory _productDescription,
        string memory _productName,
        uint256 _price,
        uint256 _totalStock
    ) external;

    function buyProduct(PurchaseData calldata data) external payable;

    function getOwner() external returns (address);
}
