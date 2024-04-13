require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "polygon_mumbai",
  
  networks: {
    // hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-amoy.g.alchemy.com/v2/a-Mde9jCnqWRWwhamLyVaWjYeqZrgGZG",
      accounts: [`0x${"9cc752cdc2e41a44053edf30e356dea88b988f6ed142f5eb44ce8e85d661a1d1"}`],
    },
  },
};

