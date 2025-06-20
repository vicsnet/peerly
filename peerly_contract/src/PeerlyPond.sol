// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {PeerlyShop} from "./PeerlyShop.sol";
import {PeerlyIdentityNFT} from "./PeerlyIdentityNFT.sol";

contract PeerlyPond {
    //create  new peerlyShop
    address public peerlyIdentityNFT;
    address public peerlyEscrow;
    address public peerlyTrust;

    address[] public allShops;
    mapping(address => address) public ownerToShop;

    mapping(address=> bool) public isSeller;

    constructor(
        address _peerlyIdentityNFT,
        address _peerlyEscrow,
        address _peerlyTrust
    ) {
        peerlyIdentityNFT = _peerlyIdentityNFT;
        peerlyEscrow = _peerlyEscrow;
        peerlyTrust = _peerlyTrust;
    }

    event ShopCreated(address indexed owner, address shop);

    /// @notice Create a new shop
    /// @dev This function deploys PeerlyShop contract
    // / @param _storeName The name of the store
    // / @param _storeDescription The description of the store
    // / @param _storeImage The svg dataof the store image
    /// @return  address of the created PeerlyShop contract

    function createShop(
        // string memory _storeName,
        // string memory _storeDescription,
        // string memory _storeImage
        string memory _uri
    ) external returns (address) {
        address seller = msg.sender;
        require (ownerToShop[seller] == address(0), "Shop already exists");
        require(
            PeerlyIdentityNFT(peerlyIdentityNFT).balanceOf(seller) == 0,
            "You have an identity NFT"
        );
        string memory tokenUri = PeerlyIdentityNFT(peerlyIdentityNFT).mintNFT(
            seller,
            _uri
            // _storeName,
            // _storeDescription,
            // _storeImage
        );

        PeerlyShop shop = new PeerlyShop(
            peerlyEscrow,
            seller,
            tokenUri,
            peerlyTrust
        );

        allShops.push(address(shop));
        ownerToShop[seller] = address(shop);
        isSeller[seller] = true;

        emit ShopCreated(msg.sender, address(shop));
        return address(shop);
    }

    /// @notice Returns all deployed PeerlShop addresses
    /// @dev Returns arrys of addresses

    function getAllShops() external view returns (address[] memory) {
        return allShops;
    }

    /// @notice Returns the shop address for a given owner
    /// @dev Returns the address of the shop for a given owner
    /// @param _shopOwner The address of the shop owner

    function getShop(address _shopOwner) external view returns (address) {
        return ownerToShop[_shopOwner];
    }

    function getSeller(address _seller) external view returns (bool){
        bool status = isSeller[_seller];
        return status;
    }
}
