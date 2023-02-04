async function main() {
  const contract = await ethers.getContractFactory("DOTT");
  const DOTTContract = await contract.deploy();
  await DOTTContract.deployed();
  return DOTTContract;
}

main()
  .then(async (contract) => {
    console.log("DOTTContract deployed at: ", contract.address);
  })
  .catch((error) => {
    console.error("failed to deploy DOTTContract", error);
  });

//0x2970136dBA2d7F99ACEe5610a6338512Ae23bAF1