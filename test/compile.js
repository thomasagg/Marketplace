const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inputFileName = 'SimpleContract.sol';
const outputFileName = 'SimpleContract.json';

const inputFilePath = path.resolve(__dirname, inputFileName);
const input = fs.readFileSync(inputFilePath, 'utf8');

const output = solc.compile(input, 1);

if (output.errors) {
  console.error(output.errors);
} else {
  const compiled = {
    bytecode: output.contracts[':' + inputFileName.split('.')[0]].bytecode,
    abi: JSON.parse(output.contracts[':' + inputFileName.split('.')[0]].interface)
  };

  const outputFilePath = path.resolve(__dirname, 'build', outputFileName);
  fs.writeFileSync(outputFilePath, JSON.stringify(compiled, null, 2));

  console.log(`Contract compiled and saved to ${outputFilePath}`);
}
