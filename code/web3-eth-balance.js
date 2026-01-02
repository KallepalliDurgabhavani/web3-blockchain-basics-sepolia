const Web3 = require("web3");

const web3 = new Web3(
  "https://sepolia.infura.io/v3/0x03558913180157Bbd3411c4DEA63294155945E66"
);

const walletAddress = "0x03558913180157Bbd3411c4DEA63294155945E66";

async function checkBalance() {
  const balanceWei = await web3.eth.getBalance(walletAddress);
  const balanceEth = web3.utils.fromWei(balanceWei, "ether");
  console.log("Wallet Balance:", balanceEth, "ETH");
}

checkBalance();
