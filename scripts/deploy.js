async function main() {
  const NewNFT = await ethers.getContractFactory("NewNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const newNFT = await NewNFT.deploy();
  console.log("Contract deployed to address:", newNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //conact address: 0xeFA083044f1e3dDf874AF957bff167239283ff77