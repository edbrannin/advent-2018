const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const day1a = async () => {
  const input = await fs.readFileAsync('day1-input.txt', 'utf8');
  const answer = input.split('\n').map(Number).reduce((memo, current) => memo + current);
  return answer
}

const day1b = async () => {
  const input = await fs.readFileAsync('day1-input.txt', 'utf8');
  const numbers = input.split('\n').map(Number)
  let done = false;
  const seen = { 0: true };
  let currentValue = 0;
  while (true) {
    for (let i = 0; i < numbers.length; i += 1) {
      currentValue += numbers[i];
      if (seen[currentValue]) {
        return currentValue;
      }
      seen[currentValue] = true;
    }
  }
}

const main = async (dayNumber, a, b) => {
  console.log(`Day ${dayNumber}A`, await a());
  console.log(`Day ${dayNumber}B`, await b());
}

main(1, day1a, day1b);