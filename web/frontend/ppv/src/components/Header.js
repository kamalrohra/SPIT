import React from "react";
import "../styles/Header.css";
import DropModal from "./DragModal";
import connectWalletHandler from "../wallet/ConnectWallet";
import { Button } from "@mui/material";
import VideoCallIcon from '@mui/icons-material/VideoCall';
function Header({ contract }) {
  return (
    <div className="header d-flex align-items-center justify-content-space-between">
      <div className="header-left-items d-flex align-items-center mxy-30">
        <br />
        
        <div className="logo">
          <a href="#">
            
          </a>
        </div>
      </div>
      <div className="header-middle-items d-flex align-items-center">
        <div className="input-box relative">
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            style={{ lineHeight: "2rem" }}
          />
          <div className="search-box absolute d-flex align-items-center justify-content-center">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon pointer"
              style={{ width: "20px", height: "20px" }}>
              <g class="style-scope yt-icon">
                <path
                  d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                  class="style-scope yt-icon"></path>
              </g>
            </svg>
          </div>
        </div>
        
      </div>
      <div className="header-rightbar d-flex align-items-center">
        <DropModal contract={contract} />
        <Button>
          <div className="profile-menu">
            <div className="profile-img">
              <img
                src="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
                alt=""
                className="dp mxy-15"
              />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Header;
