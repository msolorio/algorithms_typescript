const { expect } = require('chai');
const bubbleSort = require('./index.js');

describe('educative/bubbleSort - bubbleSort', () => {
  it('0 - should return a sorted array', () => {
    expect(bubbleSort([5, 4, 3])).to.deep.equal([3, 4, 5]);
  });

  it('1 - should return a sorted array', () => {
    expect(bubbleSort([-3, -1, -2])).to.deep.equal([-3, -2, -1]);
  });

  it('2 - should return a sorted array', () => {
    expect(bubbleSort([0, -1, -2])).to.deep.equal([-2, -1, 0]);
  });

  it('3 - should return a sorted array', () => {
    expect(bubbleSort([3, 2, 0])).to.deep.equal([0, 2, 3]);
  });

  it('4 - should return a sorted array', () => {
    expect(bubbleSort([1, -1, 2, -2, 0])).to.deep.equal([-2, -1, 0, 1, 2]);
  });

  it('5 - should return a sorted array', () => {
    expect(bubbleSort([Infinity, 0, -5])).to.deep.equal([-5, 0, Infinity]);
  });

  it('5 - should return a sorted array', () => {
    expect(bubbleSort([-Infinity, 0, -5])).to.deep.equal([-Infinity, -5, 0]);
  });
});
