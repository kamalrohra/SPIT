import React from 'react';
import ReactPlayer from 'react-player';
// import video from '../utils/cssia2.mp4'

const Player = () => {
    return (
        <div>
    <ReactPlayer
    url="cssia2.mp4"
    width="50%"
    height="50%"
    controls
    />
    {/* <ReactPlayer url='https://www.youtube.com/watch?v=y-WHM4IKnts' /> */}
    </div>
    )
}

export default Player;