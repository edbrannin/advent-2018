const { letterFrequencies, getChecksum } = require('./day2')

/*
abcdef contains no letters that appear exactly two or three times.
bababc contains two a and three b, so it counts for both.
abbcde contains two b, but no letter appears exactly three times.
abcccd contains three c, but no letter appears exactly two times.
aabcdd contains two a and two d, but it only counts once.
abcdee contains two e.
ababab contains three a and three b, but it only counts once.

Of these box IDs, four of them contain a letter which appears exactly twice,
and three of them contain a letter which appears exactly three times.

Multiplying these together produces a checksum of 4 * 3 = 12.
*/

describe('letterFrequencies', () => {
  it('abcdef contains no letters that appear exactly two or three times.', () => {
    expect(letterFrequencies('abcdef')).toEqual({
      a: 1,
      b: 1,
      c: 1,
      d: 1,
      e: 1,
      f: 1,
    })
  })
})

describe('getChecksum', () => {
  it('abcdef contains no letters that appear exactly two or three times.', () => {
    expect(getChecksum(letterFrequencies('abcdef'))).toEqual({
      two: false,
      three: false,
    })
  })
})
