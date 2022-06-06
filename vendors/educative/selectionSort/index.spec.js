const { expect } = require('chai');
const selectionSort = require('./index.js');

describe('selectionSort', () => {
  it('0 - should return a sorted array', () => {
    expect(selectionSort([5, 4, 3])).to.deep.equal([3, 4, 5]);
  });

  it('1 - should return a sorted array', () => {
    expect(selectionSort([-3, -1, -2])).to.deep.equal([-3, -2, -1]);
  });

  it('2 - should return a sorted array', () => {
    expect(selectionSort([0, -1, -2])).to.deep.equal([-2, -1, 0]);
  });

  it('3 - should return a sorted array', () => {
    expect(selectionSort([3, 2, 0])).to.deep.equal([0, 2, 3]);
  });

  it('4 - should return a sorted array', () => {
    expect(selectionSort([1, -1, 2, -2, 0])).to.deep.equal([-2, -1, 0, 1, 2]);
  });

  it('5 - should return a sorted array', () => {
    expect(selectionSort([Infinity, 0, -5])).to.deep.equal([-5, 0, Infinity]);
  });

  it('6 - should return a sorted array', () => {
    expect(selectionSort([-Infinity, 0, -5])).to.deep.equal([-Infinity, -5, 0]);
  });
});
