// SPDX-License-Identifier: MIT

/**
 * DOTT Contract is a platform for creating and managing video content.
 * It extends the functionality of ERC721URIStorage Contract.
 *
 * The contract allows the following functionality:
 *  - Register a new user
 *  - Update an existing user
 *  - Get user information by wallet address
 *  - Add a new video
 *  - Update an existing video
 *  - Delete a video
 *  - Get video owner and price
 *  - Update the list of viewed videos for a user
 *
 * The contract defines the following data structures:
 *  - User: Store user information such as username, bio, and videos posted/viewed
 *  - Video: Store video information such as owner, name, description, view count, link, and price
 *
 * The contract also emits events to log video viewing information
 *
 * @author Team Techo-sauruses
 * @version 0.8.3
 * @see https://github.com/OpenZeppelin/openzeppelin-contracts
 */

pragma solidity ^0.8.3;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract DOTT is ERC721URIStorage {
    address payable public owner;
    uint256 private counter = 0;
    uint256 public videoCounter = 0;

    mapping(address => User) public userMappings;
    mapping(uint256 => Video) public videoMappings;

    event Log(uint256 time, address from, address to, string name, uint256 id,string price);

    struct User {
        string username;
        string bio;
        uint256 userId;
        string viewedVideos; // array of viewed videos
        string postedVideos; // array of posted videos
    }

    struct Video {
        address owner;
        string name;
        string description;
        uint256 viewCount;
        string link;
        string price;
    }

    function increaseUserCounter() public returns (uint256) {
        counter++;
        return counter;
    }

    function increaseVideoCounter() public returns (uint256) {
        videoCounter++;
        return videoCounter;
    }

    // user functions
    function registerUser(string memory username, string memory bio) public {
        uint256 id = increaseUserCounter();
        userMappings[msg.sender] = User(username, bio, id, "", "");
    }

    function updateUser(string memory username, string memory bio) public {
        userMappings[msg.sender].bio = bio;
        userMappings[msg.sender].username = username;
    }

    function getUserByWallet(address wallet) public view returns (User memory) {
        return userMappings[wallet];
    }


    // video functions
    function getVideoById(uint256 id) public view returns (Video memory) {
        return videoMappings[id];
    }

    function addVideo(
        string memory name,
        string memory description,
        string memory link,
        string memory price
    ) public {
        uint256 id = increaseVideoCounter();
        videoMappings[id] = Video(msg.sender, name, description, 0, link, price);
    }

    function updateVideo(
        uint256 id,
        string memory price,
        string memory name, 
        string memory description
    ) public {
        require(
            videoMappings[id].owner == msg.sender,
            "You are not authorized"
        );
        require(
            videoMappings[id].owner != address(0), 
            "Video does not exist"
        );
        videoMappings[id].name = name;
        videoMappings[id].description = description;
        videoMappings[id].price = price;
    }

    function deleteVideo(uint256 id, string memory postedVideos) public {
        userMappings[msg.sender].postedVideos = postedVideos;
        delete videoMappings[id];
    }

    function getVideoOwnerAndPrice(uint256 id)
        public
        view
        returns (address, string memory)
    {
        return (videoMappings[id].owner, videoMappings[id].price);
    }

    function updateViewedVideos(string memory viewedVideos, uint256 videoId) public
    {
        userMappings[msg.sender].viewedVideos = viewedVideos;
        videoMappings[videoId].viewCount++;

        emit Log(block.timestamp, msg.sender, videoMappings[videoId].owner, videoMappings[videoId].name, videoId,  videoMappings[videoId].price);
    }

    function sayHello() public pure returns (string memory) {
        return "Hello there";
    }

    constructor() ERC721("DOTT", "DOTT") {
        owner = payable(msg.sender);
    }
}
