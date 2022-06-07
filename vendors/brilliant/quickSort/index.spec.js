const { expect } = require('chai');
const quickSort = require('./index.js');

describe('brilliant/quickSort - quickSort', () => {
  it('0 - should return a sorted array', () => {
    expect(quickSort([5, 4, 3])).to.deep.equal([3, 4, 5]);
  });

  it('1 - should return a sorted array', () => {
    expect(quickSort([0, -1, -2])).to.deep.equal([-2, -1, 0]);
  });

  it('2 - should return a sorted array', () => {
    expect(quickSort([1, 0])).to.deep.equal([0, 1]);
  });

  it('3 - should return a sorted array', () => {
    expect(quickSort([0, 1])).to.deep.equal([0, 1]);
  });

  it('4 - should return a sorted array', () => {
    expect(quickSort([1, 2, -5, 3, -6])).to.deep.equal([-6, -5, 1, 2, 3]);
  });

  it('5 - should return a sorted array', () => {
    expect(quickSort([Infinity, 0, -Infinity])).to.deep.equal([-Infinity, 0, Infinity]);
  });

  it('6 - should return a sorted array', () => {
    expect(quickSort([0, 0, 0])).to.deep.equal([0, 0, 0]);
  });
});
