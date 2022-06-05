const { expect } = require('chai');
const orderWords = require('./index.js');

describe('orderWords', () => {
  it('0 - should return a string', () => {
    expect(orderWords('this1 is2 a3 test4')).to.be.a('string');
  });

  it('1 - should return return words ordered by included numbers', () => {
    const input = 'T3his is2 4a tes1t';
    const output = 'tes1t is2 T3his 4a';

    expect(orderWords(input)).to.equal(output);
  });

  it('2 - should return words ordered correctly if only numbers', () => {
    const input = '4 2 3 1';
    const output = '1 2 3 4';

    expect(orderWords(input)).to.equal(output);
  });

  it('3 - should return words ordered correctly if numbers in beginning of word', () => {
    const input = '3a 2test 1this 4is';
    const output = '1this 2test 3a 4is';

    expect(orderWords(input)).to.equal(output);
  });

  it('4 - should return words ordered correctly if numbers at end of word', () => {
    const input = 'a3 test2 this1 is4';
    const output = 'this1 test2 a3 is4';

    expect(orderWords(input)).to.equal(output);
  });
});
