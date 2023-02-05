import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";
import Player from "./components/Player";
import PlayerPage from "./components/PlayerPage";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Profile from "./components/Profile";
import Register from "./components/Register";
import ChannelDetail from "./components/Channel";
import { Landing } from "./components/Landing";

import Analytics from "./components/Analytics";

import { ethers } from "ethers";
import { useEffect, useState } from "react";

import MarketplaceAddress from "./contractAddress.json";
import MarketplaceAbi from "./artifacts/contracts/dMarket.sol/DOTT.json";

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);
  const [purchasesLog, setPurchases] = useState([]);
  const [videos, setVideos] = useState(0);
  const [contracts, setContracts] = useState([]);

  const initWeb3 = async () => {
    console.log("Running web3");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const provider = new ethers.providers.Web3Provider(window.ethereumm, "any");
    setProvider(provider);
    const signer = provider.getSigner();
    await loadContracts(signer, 0, provider);
  };

  const loadContracts = async (signer, block, provider) => {
    try {
      console.log("loaded contracts");
      const marketplace = new ethers.Contract(
        MarketplaceAddress.address,
        MarketplaceAbi.abi,
        signer
      );
      setContract(marketplace);
      console.log("SETTED");
      setVideos(parseInt((await marketplace.videoCounter())._hex, 16));
      console.log("SETTED2");
      console.log(marketplace);
      const data = await marketplace.sayHello();
      console.log(data);
      await returnEvents(marketplace, provider);
      await getVideos(marketplace, parseInt(await marketplace.videoCounter()));
    } catch (err) {
      console.log(err);
    }
  };

  const returnEvents = async (contract, provider) => {
    // filtering events
    var data = contract.filters.Log(null, null, null, null, null);
    const current_block = await provider.getBlockNumber();
    const results = await contract.queryFilter(data, current_block - 10000);

    console.log(results);

    const purchases = await Promise.all(
      results.map(async (i) => {
        // fetch arguments from each result
        i = i.args;
        return i;
      })
    );
    console.log(purchases);
    setPurchases(purchases);
  };

  const getVideos = async (contract, videoLength) => {
    console.log("Getting videos");
    const promises = [];
    console.log(videoLength);
    for (var i = 1; i <= videoLength; i++) {
      promises.push(contract.getVideoById(i));
    }
    Promise.all(promises).then((r) => {
      console.log(r);
      console.log(r);
      setContracts(r);
    });
    // let videos = [];
    // console.log(videoLength);
    // await Promise.all();

    // console.log("Processing");
    // const data = await contract.getVideoById(i);
    // const views = parseInt(data.viewCount._hex, 16);
    // const price = parseInt(data.price._hex, 16);
    // data.views = views;
    // data.price = price;
    // videos.push(data);

    // console.log(videos);
    // setContracts(videos);
  };

  useEffect(() => {
    initWeb3();
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <ul className="App-header">
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/video">PlayerPage</Link>
       </li>
     </ul> */}
        {/* <Home /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                contract={contract}
                setAccounts={setAccounts}
                accounts={accounts}
                videos={contracts}
              />
            }></Route>
          <Route exact path="/video/:id" element={<PlayerPage />}></Route>
          <Route exact path="/channel" element={<ChannelDetail />}></Route>
          <Route exact path="/home" element={<Landing />}></Route>
          <Route
            exact
            path="/logs"
            element={<Analytics purchases={purchasesLog} />}></Route>
        </Routes>
        {/* <Profile/> */}
        {/* <Register/> */}
      </div>
    </Router>
  );
}

export default App;
