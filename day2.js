const { main, readInput } = require('./common');

const letterFrequencies = (word) => word.split('').reduce(
  (frequencies, currentLetter) => {
    const answer = {
      ...frequencies
    };
    answer[currentLetter] = (answer[currentLetter] || 0) + 1;
    return answer;
  }, {})

const b2n = b => b ? 1 : 0;

const getChecksum = (frequencies) => {
  const values = Object.values(frequencies);
  const answer = {
    two: values.includes(2),
    three: values.includes(3),
  }
  return answer;
}

const day2a = (input) => {
  const checksumBits = input.map(word => ({
    word,
    frequencies: letterFrequencies(word),
  })).map(x => {
    // console.log(JSON.stringify(x, null, 2));
    return x;
  }).map(({frequencies}) => {
    const answer = getChecksum(frequencies);
    // console.log(JSON.stringify(answer, null, 2));
    return answer;
  }).reduce(({ twoSum = 0, threeSum = 0 }, {two, three}) => ({
    twoSum: twoSum + b2n(two),
    threeSum: threeSum + b2n(three),
  }))
  console.log(JSON.stringify(checksumBits))
  return checksumBits.twoSum * checksumBits.threeSum;
}

const day2b = (input) => {
  return {};
}

if (require.main === module) {
  console.log(
    'Day 2A Example:',
    day2a(`
abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab
`.trim().split('\n')))

  main(2, day2a, day2b);
}

module.exports = {
  day2a,
  b2n,
  letterFrequencies,
  getChecksum,
}