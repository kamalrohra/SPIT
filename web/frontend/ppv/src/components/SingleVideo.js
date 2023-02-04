import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PaidIcon from '@mui/icons-material/Paid';

function SingleVideo({thumb_img, profile_img, title, channel_name, views, timestamps, video_duration, price }) {
    return(
        <div className="col-3">
            <div className="thumbnail_img relative">
                <img src ={thumb_img} alt="" 
                className="thumb-img pointer" 
                style={{"width": "100%"}}
                />
                <span className="videos_duration absolute">
                    {video_duration}
                </span>
            <div className="description_option d-flex">
                <div className="profile_img">
                    <img src={profile_img}
                    className="channel_image pointer"
                    />
                </div>
                <div className="title d-flex align-items-center justify-content-center">
                    <span className="channelname" style={{fontSize:"18px",fontWeight:"bold"}}>
                        {title}
                    </span>
                    <br/>
                </div>
                
            </div>
 
            
            <div className="title d-flex" style={{marginLeft:"29px"}}>
                    <span className="channelname" style={{ fontSize:"15px"}}>
                        {channel_name}
                        <br/>
                    </span>
                    <br/>
                    {/* <div className="time_description">
                        <span className="views">
                            {views}
                        </span>
                    </div> */}
                </div>

            <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginLeft:"40px",
             }}>
            <VisibilityIcon fontSize="small"/>
            <span style={{ fontSize:"15px", marginRight:"30px"}}>{views}</span>

            <PaidIcon fontSize="small"/>
            <span style={{ fontSize:"15px"}}>{price}</span>
            </div> 


            </div>
        </div>
    )
}
export default SingleVideo