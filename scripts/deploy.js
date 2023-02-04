async function main() {
  const contract = await ethers.getContractFactory("medBlocks");
  const medBlocksContract = await contract.deploy();
  await medBlocksContract.deployed();
  return medBlocksContract;
}

main()
  .then(async (contract) => {
    console.log("medBlocksContract deployed at: ", contract.address);
  })
  .catch((error) => {
    console.error("failed to deploy medBlocksContract", error);
  });
