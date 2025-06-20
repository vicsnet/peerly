// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";

contract PeerlyIdentityNFT is ERC721 {
    uint256 private counter;
    mapping(uint256 => string) private tokenIdToURIs;
    constructor() ERC721("PeerlyIdentity", "PSIN") {
        counter = 0;
    }

    // function _baseURI() internal pure override returns (string memory) {
    //     return "data:application/json;base64,";
    // }

    function mintNFT(
        address to,
        string memory uri
        // string memory name,
        // string memory description,
        // string memory image
    ) public returns (string memory) {
string memory tokenUri = uri;
        // string memory tokenUri = string(
        //     abi.encodePacked(
        //         _baseURI(),
        //         Base64.encode(
        //             bytes(
        //                 abi.encodePacked(
        //                     '{"name": "',
        //                     name,
        //                     '", "description": "',
        //                     description,
        //                     '", "image": "',
        //                     image,
        //                     '"}'
        //                 )
        //             )
        //         )
        //     )
        // );

        tokenIdToURIs[counter] = tokenUri;
        _safeMint(to, counter);
        counter++;
        return tokenUri;
        // emit event
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        return tokenIdToURIs[tokenId];
    }
}
