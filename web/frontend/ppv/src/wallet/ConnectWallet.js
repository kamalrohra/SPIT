const connectWalletHandler = async () => {
    const {ethereum} =window;
    if (!ethereum){
      alert("Please Install metamask");
    }
    try{
      const accounts=await ethereum.request({method:'eth_requestAccounts'});
      console.log("found account!",accounts[0]);
      return accounts[0];
    //   setCurrentAccount(accounts[0]);
  
    }
    catch(err){
      console.log(err);
    }
   }

export default connectWalletHandler;