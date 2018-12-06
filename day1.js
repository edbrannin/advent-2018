const { main, readInput } = require('./common');

const day1a = async () => {
  const input = await readInput(1);
  const answer = input.map(Number).reduce((memo, current) => memo + current);
  return answer
}

const day1b = async () => {
  const input = await readInput(1);
  const numbers = input.map(Number)
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

main(1, day1a, day1b);