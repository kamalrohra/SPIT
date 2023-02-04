import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PaidIcon from "@mui/icons-material/Paid";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

function SingleVideo({
  thumb_img,
  profile_img,
  title,
  channel_name,
  views,
  timestamps,
  video_duration,
  price,
  id,
  setAccounts,
  accounts,
  contract,
}) {
  const navigate = useNavigate();
  const onClick = async (e) => {
    // console.log(e);
    //if not connected to metamask then connect
    if (!accounts) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("these are the accounts");

      setAccounts(accounts[0]);
      // navigate(`/video/${id}`);
    } else {
      const details = await contract.getVideoOwnerAndPrice(3);
      console.log(details);
      console.log(parseInt(details[1], 16));
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tx = {
          from: accounts,
          to: details[0],
          value: ethers.utils.parseEther(parseInt(details[1], 16).toString()),
          nonce: await provider.getTransactionCount(accounts, "latest"),
          gasLimit: ethers.utils.hexlify(1000000),
          gasPrice: ethers.utils.hexlify(
            parseInt(await provider.getGasPrice())
          ),
        };
        signer.sendTransaction(tx).then((transaction) => {
          console.dir(transaction);
          alert("Send finished!");
        });
        console.log(details[0], details[1]);
      } catch (error) {
        console.log(error);
      }

      // navigate(`/video/${id}`);
    }

    //if payed
  };
  return (
    <div className="col-3">
      <div className="thumbnail_img relative">
        <img
          onClick={onClick}
          src={thumb_img}
          alt=""
          className="thumb-img pointer"
          style={{ width: "100%" }}
        />
        <span className="videos_duration absolute">{video_duration}</span>
        <div className="description_option d-flex">
          <div className="profile_img">
            <img src={profile_img} className="channel_image pointer" />
          </div>
          <div className="title d-flex align-items-center justify-content-center">
            <span
              className="channelname"
              style={{ fontSize: "18px", fontWeight: "bold" }}>
              {title}
            </span>
            <br />
          </div>
        </div>

        <div className="title d-flex" style={{ marginLeft: "29px" }}>
          <span className="channelname" style={{ fontSize: "15px" }}>
            {channel_name}
            <br />
          </span>
          <br />
          {/* <div className="time_description">
                        <span className="views">
                            {views}
                        </span>
                    </div> */}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            marginLeft: "40px",
          }}>
          <VisibilityIcon fontSize="small" />
          <span style={{ fontSize: "15px", marginRight: "30px" }}>{views}</span>

          <PaidIcon fontSize="small" />
          <span style={{ fontSize: "15px" }}>{price}</span>
        </div>
      </div>
    </div>
  );
}
export default SingleVideo;
