// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract medBlocks is ERC721URIStorage {
    address payable public owner;

    function sayHello() public pure returns (string memory) {
        return "Hello there";
    }

    constructor() ERC721("medBlocks", "MBLKS") {
        owner = payable(msg.sender);
    }
}
