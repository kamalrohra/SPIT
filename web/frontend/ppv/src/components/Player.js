import React from 'react';
import ReactPlayer from 'react-player';
// import video from '../utils/cssia2.mp4'

const Player = () => {
    return (
        <div>
    <ReactPlayer
    url="https://www.youtube.com/watch?v=y-WHM4IKnts"
    width="1000px"
    height="600px"
    controls
    />
    {/* <ReactPlayer url='https://www.youtube.com/watch?v=y-WHM4IKnts' /> */}
    </div>
    )
}

export default Player;