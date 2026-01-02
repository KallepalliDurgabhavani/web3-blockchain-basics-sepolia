const Web3 = require("web3");

const web3 = new Web3(
  "sepolia.infura.io"
);

async function testConnection() {
  const chainId = await web3.eth.getChainId();
  console.log("Connected Chain ID:", chainId);
}

testConnection();
