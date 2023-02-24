# Running and Testing the Chain Mart Contract

Chain Mart is a decentralized marketplace where buyers and sellers can connect and transact directly without intermediaries. The platform utilizes blockchain technology to ensure secure and transparent transactions, as well as to empower users with control over their data and assets. Join the new era of peer-to-peer marketplaces with Chain Mart.

## Prerequisites

Node.js and npm installed on your system

Truffle installed globally on your system (run npm install -g truffle)

Ganache

## Installing dependencies

Clone the repository and navigate to the project directory. Then, run the following command to install the required dependencies:

npm install

## Ganache

Download and install the Ganache app.

Start Ganache. This will create a virtual Ethereum blockchain that you can use for testing and development.

In Ganache, click the "Quickstart" button, then click the "Settings" (gear) icon in the top right corner.

In the settings, go to the "Accounts & Keys" tab and copy the "MNEMONIC" seed phrase. This is a string of words that you'll use to connect to the Ganache blockchain from your Truffle project.

Open a terminal and navigate to the directory where your Truffle project is located.

Connect to the Ganache blockchain by typing the following command:

truffle console --network ganache

In the Truffle console, type the following command to import your Ganache accounts into your Truffle project:

truffle console> personal.importAccount("MNEMONIC", "password")

## Compiling the contract

Use the following command to compile the Marketplace contract:

truffle compile

node compile.js

solc <solidity_file_name>.sol --bin --abi --optimize -o build

"solc --overwrite --bin --abi SimpleContract.sol -o build"


## Deploying the contract

To deploy the contract to the local Ethereum network, run the following command:

truffle migrate

## Testing the contract

Use the following command to run the tests for the contract:

truffle test

This will run the tests for the Marketplace contract and display the results in the terminal.

You can also use the Remix browser-based Solidity IDE to interact with the contracts and run tests.
To access Remix, go to <https://remix.ethereum.org> and paste your contract code into a new file.

## Interacting with the contract

You can interact with the contract using Truffle's console. Run the following command to start the Truffle console:

truffle console

In the Truffle console, you can access the contract's functions and variables and call them as you would in any other JavaScript environment.

## Usage

Once the contracts are deployed, you can use a decentralized application (dApp) to interact with the marketplace.

Enjoy using Chain Mart, a secure and transparent decentralized marketplace!
