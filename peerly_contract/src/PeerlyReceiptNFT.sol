// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";

contract PeerlyReceiptNFT is ERC721 {
    address public peerlyEscrow;
    mapping(uint256 orderId => string) private tokenIdToURIs;
    constructor(address _peerlyEscrow) ERC721("PeerlyReceipt", "PR") {
        peerlyEscrow = _peerlyEscrow;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "data:application/json;base64,";
    }

    function mintReceipt(address to,uint256 orderId, string memory productName, uint256 productId, uint256 quantity, uint256 pricePaid) public {
        string memory tokenUri = string(
            abi.encodePacked(
                _baseURI(),
                Base64.encode(
                    bytes(
                        abi.encodePacked(
                            '{"name": "',
                            productName,
                            '", "productId": "',
                            productId,
                            '",  "quantity": "',
                            quantity,
                            '", "pricePaid": "',
                            pricePaid,
                            '"}'
                        )
                    )
                )
            )
        );
        tokenIdToURIs[orderId] = tokenUri;
        _safeMint(to, orderId);
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return tokenIdToURIs[tokenId];
    }

    function burn(uint256 tokenId) public {
        require(tx.origin == ownerOf(tokenId) || msg.sender == peerlyEscrow, "Only owner can burn");
        _burn(tokenId);
    }
}
