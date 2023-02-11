const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "hat agree domain trap donor cushion check lobster skin veteran abstract sauce";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
    },
    ganache: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545");
      },
      networkCheckTimeout: 20000,
      network_id: 5777,
    },
  },
  compilers: {
    solc: {
      version: "0.6.12",
    },
  },
};
