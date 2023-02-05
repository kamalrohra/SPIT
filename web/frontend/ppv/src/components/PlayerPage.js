// import './App.css';
import Header from './Header';
// import Sidebar from './Sidebar';
import Player from './Player';
import Chart1 from './Chart1';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { ethers } from 'ethers';
import Typography from '@mui/material/Typography';

function PlayerPage({ contract, video }) {
  const { id } = useParams();
  console.log("video id", id)
  console.log(video)
  console.log(video[id - 1])
  // console.log(contract)
  // console.log(contract.getVideoById(id).link)
  return (
    <div>
      <div className="App">
        <Header />
        <br /> <br />
        <div className="main-display" style={{ display: "flex", justifyContent: "space-around" }}>
          <Player id={id} contract={contract} video={video[id - 1]} />
          <div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
              <Typography variant="h4" fontWeight="bold">Stastics</Typography>
            </div>
            <Chart1 />
          </div>
        </div>
        <div>
        </div>
      </div>

    </div>
  );
}

export default PlayerPage;
