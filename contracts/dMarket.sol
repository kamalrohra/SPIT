// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract medBlocks is ERC721URIStorage {
    address payable public owner;
    uint256 private counter = 0;
    uint256 private videoCounter = 0;

    function increaseUserCounter() public returns (uint256) {
        counter++;
        return counter;
    }

    function increaseVideoCounter() public returns (uint256) {
        counter++;
        return counter;
    }

    struct User {
        string username;
        string bio;
        uint256 userId;
        string viewedVideos; // array of viewed videos
        string postedVideos; // array of posted videos
    }

    struct Video {
        address owner;
        string metadata;
        uint256 viewCount;
        string link;
        uint256 price;
    }
    mapping(address => User) public userMappings;
    mapping(uint256 => Video) public videoMappings;

    function registerUser(string memory username, string memory bio) public {
        uint256 id = increaseUserCounter();

        userMappings[msg.sender] = User(username, bio, id, "", "");
    }

    function deleteVideo(uint256 id, string memory postedVideos) public {
        userMappings[msg.sender].postedVideos = postedVideos;
        delete videoMappings[id];
    }

    function updateUser(string memory username, string memory bio) public {
        userMappings[msg.sender].bio = bio;
        userMappings[msg.sender].username = username;
    }

    function getUserByWallet(address wallet) public view returns (User memory) {
        return userMappings[wallet];
    }

    function getVideoById(uint256 id) public view returns (Video memory) {
        return videoMappings[id];
    }

    function addVideo(
        string memory metadata,
        string memory link,
        uint256 price
    ) public {
        uint256 id = increaseVideoCounter();
        videoMappings[id] = Video(msg.sender, metadata, 0, link, price);
    }

    function updateVideo(
        uint256 id,
        uint256 price,
        string memory metadata
    ) public {
        require(
            videoMappings[id].owner == msg.sender,
            "You are not authorized"
        );
        videoMappings[id].metadata = metadata;
        videoMappings[id].price = price;
    }

    function getVideoOwnerAndPrice(uint256 id)
        public
        view
        returns (address, uint256)
    {
        return (videoMappings[id].owner, videoMappings[id].price);
    }

    function updateViewedVideos(string memory viewedVideos, uint256 videoId)
        internal
    {
        userMappings[msg.sender].viewedVideos = viewedVideos;
        videoMappings[videoId].viewCount++;
    }

    function sayHello() public pure returns (string memory) {
        return "Hello there";
    }

    constructor() ERC721("medBlocks", "MBLKS") {
        owner = payable(msg.sender);
    }
}
