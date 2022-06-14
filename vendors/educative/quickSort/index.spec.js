const { expect } = require('chai');
const quickSort = require('./index.js');

describe('educative/quickSort - quickSort', () => {
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
    expect(quickSort([1, -5, -6])).to.deep.equal([-6, -5, 1]);
  });

  it('5 - should return a sorted array', () => {
    expect(quickSort([1, 0, 2])).to.deep.equal([0, 1, 2]);
  });

  it('6 - should return a sorted array', () => {
    expect(quickSort([5, 4, 3, 0])).to.deep.equal([0, 3, 4, 5]);
  });

  it('7 - should return a sorted array', () => {
    expect(quickSort([0, -1, 1, -2, 2, -3, 3])).to.deep.equal([-3, -2, -1, 0, 1, 2, 3]);
  });

  it('8 - should return a sorted array', () => {
    expect(quickSort([Infinity, 0, -Infinity])).to.deep.equal([-Infinity, 0, Infinity]);
  });

  it('9 - should return a sorted array', () => {
    expect(quickSort([0, 0, 0])).to.deep.equal([0, 0, 0]);
  });

  it('9 - should return a sorted array', () => {
    expect(quickSort([5])).to.deep.equal([5]);
  });

  it('9 - should return a sorted array', () => {
    expect(quickSort([])).to.deep.equal([]);
  });
});
