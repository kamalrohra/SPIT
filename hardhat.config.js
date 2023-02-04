require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    local: {
      url: "http://127.0.0.1:8545",
    },
    rinkeby: {
      url: "", // rpc providers: infura, alchemy
      accounts: [], // private keys
    },
    ropsten: {
      url: "", // rpc providers: infura, alchemy
      accounts: [], // private keys
    },
    // https://rpc-mumbai.maticvigil.com/v1/b07a3b8f1e224df98d8873fc47af935038ae670d
    // https://polygon-mumbai.g.alchemy.com/v2/Lya1zODZhjVryus4ZdFvXo2nxNee-4eq
    polygonTest: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/Lya1zODZhjVryus4ZdFvXo2nxNee-4eq", // rpc providers: polygon, infura, alchemy
      accounts: [
        "31869b69eb5c106013612bf3c62fe4bf60f8a06982214973365922d62de9f7c9",
        "df91dd14206c25cc102dcc5a5f61c0656828c6d5e23a2ff380dd9c0dcbe8fbee",
      ],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    polygonMain: {
      url: "https://rpc-mainnet.maticvigil.com", // rpc providers: infura,polygon, alchemy
      accounts: [],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./web/frontend/ppv//src/artifacts",
  },
};
