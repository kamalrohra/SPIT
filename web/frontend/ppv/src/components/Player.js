import React from 'react';
import ReactPlayer from 'react-player';

// import video from '../utils/cssia2.mp4'

function Player({ id, contract, video }) {

    return (
        <div>
            {console.log(video.link)}
            <ReactPlayer
                url="https://gateway.pinata.cloud/ipfs/QmPUwFjbapev1rrppANs17APcpj8YmgU5ThT1FzagHBxm7"
                poster='https://user-images.githubusercontent.com/28612032/172026551-e5a96748-d724-4a08-b6b3-f44655d4ef39.png'
                width="1000px"
                height="600px"
                controls
            />
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=y-WHM4IKnts' /> */}
        </div>
    )
}

export default Player;