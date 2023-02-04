// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract DOTT is ERC721URIStorage {
    address payable public owner;
    uint256 private counter = 0;
    uint256 private videoCounter = 0;

    mapping(address => User) public userMappings;
    mapping(uint256 => Video) public videoMappings;

    event Log(uint256 time, address indexed from, address indexed to, string indexed video, uint256 price);

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
        uint256 price;
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
        uint256 price
    ) public {
        uint256 id = increaseVideoCounter();
        videoMappings[id] = Video(msg.sender, name, description, 0, link, price);
    }

    function updateVideo(
        uint256 id,
        uint256 price,
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
        returns (address, uint256)
    {
        return (videoMappings[id].owner, videoMappings[id].price);
    }

    function updateViewedVideos(string memory viewedVideos, uint256 videoId) public
    {
        userMappings[msg.sender].viewedVideos = viewedVideos;
        videoMappings[videoId].viewCount++;
        string memory video_name_id = string.concat(videoMappings[videoId].name, Strings.toString(videoId));

        emit Log(block.timestamp, msg.sender, videoMappings[videoId].owner, video_name_id, videoMappings[videoId].price);
    }

    function sayHello() public pure returns (string memory) {
        return "Hello there";
    }

    constructor() ERC721("DOTT", "DOTT") {
        owner = payable(msg.sender);
    }
}
