import Header from "./Header";
// import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import checkWalletIsConnected from "../wallet/IfConnected";
import MarketplaceAddress from "../contractAddress.json";
import MarketplaceAbi from "../artifacts/contracts/dMarket.sol/DOTT.json";
function Home() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

  const initWeb3 = async () => {
    console.log("Running web3");

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // const provider = new ethers.providers.Web3Provider(window.ethereumm, "any");
    setProvider(provider);
    const signer = provider.getSigner();
    // const tx = {
    //   from: "0xa491637217782Ed121B78f333ae16aD94fC4f197",
    //   to: "0x611E72c39419168FfF07F068E76a077588225798",
    //   value: ethers.utils.parseEther("0.00005"),
    //   nonce: await provider.getTransactionCount(
    //     "0xa491637217782Ed121B78f333ae16aD94fC4f197",
    //     "latest"
    //   ),
    //   gasLimit: ethers.utils.hexlify(1000000),
    //   gasPrice: ethers.utils.hexlify(parseInt(await provider.getGasPrice())),
    // };
    // signer.sendTransaction(tx).then((transaction) => {
    //   console.dir(transaction);
    //   alert("Send finished!");
    // });
    await loadContracts(signer, 0);
  };

  const loadContracts = async (signer, block) => {
    console.log("loaded contracts");
    const marketplace = new ethers.Contract(
      MarketplaceAddress.address,
      MarketplaceAbi.abi,
      signer
    );
    setContract(marketplace);
    console.log(marketplace);
    const data = await marketplace.sayHello();
    console.log(data);
  };

  useEffect(() => {
    initWeb3();
  }, []);
  // Sets up a new Ethereum provider and returns an interface for interacting with the smart contract
  // async function initializeProvider() {
  // const {ethereum} =window;
  // if(ethereum){
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();
  // return new ethers.Contract(contractAddress,abi, signer);
  // }
  // }

  // const checkWalletIsConnected = async () => {
  //     const {ethereum} =window;
  //     if (!ethereum){
  //       console.log("Install metamask");
  //     }
  //     else{
  //       console.log("we are good to go");
  //     }
  //     const accounts=await ethereum.request({method:'eth_requestAccounts'});
  //     if (accounts.length!==0){
  //       const account=accounts[0];
  //       console.log("found authorized account");
  //       setCurrentAccount(account);
  //     }
  //     else{
  //       console.log("no aouthorized account found")
  //     }
  //   }

  // const connectWalletHandler = async () => {
  //   const {ethereum} =window;
  //   if (!ethereum){
  //     alert("Please Install metamask");
  //   }
  //   try{
  //     const accounts=await ethereum.request({method:'eth_requestAccounts'});
  //     console.log("found account!",accounts[0]);
  //     setCurrentAccount(accounts[0]);

  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  //  }

  // const connectWalletButton = () => {
  //   return (
  //     <button style={{ marginLeft:10}} onClick={connectWalletHandler}>
  //       Connect Wallet
  //     </button>
  //   )
  // }
  // useEffect(() => {
  //   const account = checkWalletIsConnected();
  //   if (account != -1) {
  //     setCurrentAccount(account);
  //   }
  // }, []);

  return (
    <div className="Home">
      <Header contract={contract} account={currentAccount} />
      <br />
      <div
        className="main-display"
        style={{ display: "flex", justifyContent: "center" }}>
        <Videos
          contract={contract}
          setAccounts={setAccounts}
          accounts={accounts}
        />
      </div>
      {/* <Player/> */}
    </div>
  );
}

export default Home;
