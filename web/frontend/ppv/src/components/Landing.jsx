import React from "react";
import "../styles/Landing.css";
import SecurityIcon from '@mui/icons-material/Security';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from "../utils/decent.jpeg"

export const Landing = (props) => {
  return (
    <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container-header">
          <div className="navbar-header">
            {/* <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button> */}
            <a className="navbar-brand page-scroll" href="/">
              Dott.View
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="header-banner">
        <div class="intro-banner">
          <div class="overlay-banner">
            <div class="container-banner">
              <div class="row-banner">
                <div class="col-md-8 col-md-offset-2 intro-text">
                  {/* <h1>We are a Landing Page<span></span></h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p> */}
                  <a href="/" class="btn btn-outline-light btn-lg " style={{color:"white"}}>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <br /><br />
      <div id="features" class="text-center">
        <div class="container-feature">
          <div class="col-md-10 col-md-offset-1 section-title"><h2>Features</h2></div>
          <div class="row-feature">
            <div class="col-xs-6 col-md-3"> <SecurityIcon fontSize="large" color="primary" /><h3>Security</h3><p>Security refers to the measures taken to protect the integrity and confidentiality of data stored in blockchain network.</p></div>
            <div class="col-xs-6 col-md-3"> <ViewInArIcon fontSize="large" color="primary" /><h3>Decentralized</h3><p>Decentralization means that the network operates on a peer-to-peer basis, with no single central authority controlling the flow of information.</p></div>
            <div class="col-xs-6 col-md-3"> <RemoveRedEyeIcon fontSize="large" color="primary" /><h3>Auditability</h3><p>Auditability refers to the ability to track, monitor, and examine the actions and transactions that occur within a system.</p></div>
            <div class="col-xs-6 col-md-3"> <TrendingDownIcon fontSize="large" color="primary" /><h3>Low Gas Fees</h3><p>Low gas fees are desirable because they make it cheaper for users to execute transactions and run smart contracts on the Ethereum network.</p></div>
          </div>
        </div>
      </div>

          <br/><br/>
      <div id="about">
        <div class="container">
          <div class="row-about">
            <div class="col-xs-12 col-md-4">
              {/* <img src="utils/decent.jpeg" class="img-responsive" alt=""/> */}
              <Card >
              <CardMedia
                borderRadius="50%"
                component="img"
                alt="green iguana"
                height="240"
                image={img} sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
              /></Card>
            </div>
            <div class="col-xs-12 col-md-8" style={{backgroundColor: "#5c0099", color:"white", margin:"8px"}}>
              <div class="about-text"><h2>About Us</h2><p>The application is decentralized in nature. The application has a fine working payment system through Matic Coin. The content provider creates and uploads content, such as a video, article, or music, to the platform. The user requests access to the content by paying a fee using cryptocurrency on the platform. The content is stored on a decentralized storage network, such as InterPlanetary File System (IPFS), to ensure that it is secure, immutable, and accessible to the user. 
 
</p>
              
              </div>
            </div></div></div></div>
    </div>

  );
};