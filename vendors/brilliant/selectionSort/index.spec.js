const { expect } = require('chai');
const selectionSort = require('./index.js');

describe('brilliant/selectionSort - selectionSort', () => {
  it('0 - should return a sorted array', () => {
    expect(selectionSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
  });

  it('1 - should return a sorted array', () => {
    expect(selectionSort([-1, -2, -3])).to.deep.equal([-3, -2, -1]);
  });

  it('2 - should return a sorted array', () => {
    expect(selectionSort([0, -1, 1, -2, 2])).to.deep.equal([-2, -1, 0, 1, 2]);
  });

  it('3 - should return a sorted array', () => {
    expect(selectionSort([4, -3, 2])).to.deep.equal([-3, 2, 4]);
  });

  it('4 - should return a sorted array if input is empty array', () => {
    expect(selectionSort([])).to.deep.equal([]);
  });
});
