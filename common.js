const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const readInput = async (dayNumber, splitLines=true) => {
  const answer = await fs.readFileAsync(`day${dayNumber}-input.txt`, 'utf8');
  if (splitLines) {
    return answer.split('\n');
  }
  return answer;
}

const main = async (dayNumber, a, b) => {
  const input = await readInput(dayNumber);
  console.log(`Day ${dayNumber}A`, await a(input));
  console.log(`Day ${dayNumber}B`, await b(input));
};

module.exports = {
  main,
  readInput,
};
