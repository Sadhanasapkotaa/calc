require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://<ACTUAL_CODESPACE_IP>:8545",
      accounts: ["<YOUR_PRIVATE_KEY>"] // Ensure this is a 32-byte hexadecimal string
    },
    fuzzyBarnacle: {
      url: "https://fuzzy-barnacle-v76xpwjrw673p6q9.github.dev/",
      accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY}`] // Ensure this is a 32-byte hexadecimal string set in your environment variables
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: ["<YOUR_PRIVATE_KEY>"] // Ensure this is a 32-byte hexadecimal string
    }
    // ...existing code...
  },
  // ...existing code...
};
