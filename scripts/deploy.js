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

//0xdB417a582E5354167AEF971621bcd1791d824eD8