require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/1354b4f6c05446e48ad0a1b9838a8e75",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};