import React, { useEffect } from "react";
import "../styles/Videos.css";
import Filter from "./Filter";
import SingleVideo from "./SingleVideo";
import { Typography } from "@mui/material";

function Videos({ setAccounts, accounts, contract, videos }) {
  return (
    <div className="videos">
      <Filter />
      <br />
      <br />
      <div className="row">
        {videos.map((elem, index) => {
          return (
            <SingleVideo
              key={index}
              contract={contract}
              accounts={accounts}
              thumb_img="https://i.ytimg.com/vi/78uSkHH42IU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSUsgncPb84K_zEOdU_VzC1bkfjA"
              profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
              title={elem.name}
              channel_name={elem.description}
              video_duration="5:33:29"
              views={parseInt(elem.viewCount._hex, 16)}
              price={elem.price}
              id={index + 1}
              setAccounts={setAccounts}
            />
          );
        })}

        <SingleVideo
          contract={contract}
          accounts={accounts}
          thumb_img="https://i.ytimg.com/vi/78uSkHH42IU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSUsgncPb84K_zEOdU_VzC1bkfjA"
          profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
          title="React Full Course 2022"
          channel_name="Simplilearn"
          video_duration="5:33:29"
          views="12k"
          price="0.1"
          id={2}
          setAccounts={setAccounts}
        />
        <SingleVideo
          contract={contract}
          accounts={accounts}
          thumb_img="https://i.ytimg.com/vi/78uSkHH42IU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSUsgncPb84K_zEOdU_VzC1bkfjA"
          profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
          title="React Full Course 2022"
          channel_name="Simplilearn"
          video_duration="5:33:29"
          views="12k"
          price="0.1"
          id={3}
          setAccounts={setAccounts}
        />
        <SingleVideo
          contract={contract}
          accounts={accounts}
          thumb_img="https://i.ytimg.com/vi/78uSkHH42IU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSUsgncPb84K_zEOdU_VzC1bkfjA"
          profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
          title="React Full Course 2022"
          channel_name="Simplilearn"
          video_duration="5:33:29"
          views="12k"
          price="0.1"
          id={4}
          setAccounts={setAccounts}
        />
      </div>
    </div>
  );
}
export default Videos;
