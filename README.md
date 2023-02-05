
# DOTT.view (pay-per-view blockchain platform)

Entertainment, education, and media encounter content distribution and access control issues. Television and movie subscriptions, online streaming services, and e-learning platforms are centralised and dependent on intermediaries like payment processors and content delivery networks. Centralization can cause inefficiency, lack of transparency, excessive prices, and intermediary dependence.  
In order to address these difficulties, we developed **DOTT.view**, a decentralised OTT platform built on the blockchain system. DOTT.view enables users to provide and access content and services while utilising the security, transparency, and immutability of blockchain technology.

# Documentation for DOTT Contract

The DOTT contract is a decentralized video marketplace that allows users to upload and purchase videos. The contract is implemented as an ERC721 token and implements the ERC721URIStorage interface.

## Registering a User
A user can get registered by calling the `registerUser` function and providing a username and bio. The function returns a unique user ID. 
```solidity
function registerUser(string memory username, string memory bio) public
```

## Updating User Information
A registered user can update their username and bio by calling the `updateUser` function.
```solidity
function updateUser(string memory username, string memory bio) public
```
## Retrieving User Information
The information of a registered user can be retrieved by calling the `getUserByWallet` function and providing the user's wallet address. The function returns a User struct containing the username, bio, and other information.
```
function getUserByWallet(address wallet) public view returns (User memory)
```

## Adding a Video
A registered user can add a video to the marketplace by calling the `addVideo` function and providing the video name, description, link, and price. The function returns a unique video ID.
```solidity
function addVideo(
        string memory name,
        string memory description,
        string memory link,
        uint256 price
    ) public
```

## Updating a Video
The owner of a video can update the video's name, description, and price by calling the `updateVideo` function and providing the video's ID.
```solidity
function updateVideo(
        uint256 id,
        uint256 price,
        string memory name, 
        string memory description
    ) public

```

## Deleting a Video
The owner of a video can delete a video by calling the `deleteVideo` function and providing the video's ID.
```solidity
function deleteVideo(uint256 id, string memory postedVideos) public
```

## Retrieving Video Information
Information about a video can be retrieved by calling the `getVideoById` function and providing the video's ID. The function returns a Video struct containing the video's owner, name, description, view count, and other information.
```solidity
function getVideoById(uint256 id) public view returns (Video memory)
```

## Retrieving Video Owner and Price
The owner and price of a video can be retrieved by calling the `getVideoOwnerAndPrice` function and providing the video's ID.
```solidity
function getVideoOwnerAndPrice(uint256 id)
        public
        view
        returns (address, uint256)
```

## Updating Viewed Videos
A registered user's viewed videos can be updated by calling the `updateViewedVideos` function and providing a string representing their viewed videos and the video's ID. The function increments the view count for the video.
```solidity
function updateViewedVideos(string memory viewedVideos, uint256 videoId) public
```

## Logging an Event
The `Log` event is emitted every time a user updates their viewed videos. The event contains information about the time, user, and video.
```solidity
event Log(uint256 time, address indexed from, address indexed to, string indexed video, uint256 price);
```
