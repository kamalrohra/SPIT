import { ethers } from 'ethers';
import { useEffect,useState } from 'react';

const checkWalletIsConnected = async () => { 
    const {ethereum} =window;
    if (!ethereum){
      console.log("Install metamask");
    }
    else{
      console.log("we are good to go");
    }
    const accounts=await ethereum.request({method:'eth_requestAccounts'});
    if (accounts.length!==0){
      const account=accounts[0];
      console.log("found authorized account");
      return account;
    }
    else{
      console.log("no aouthorized account found");
      return -1;
    }
  }

export default checkWalletIsConnected;