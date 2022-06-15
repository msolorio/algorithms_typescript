const { expect } = require('chai');
const bubbleSort2 = require('./index2.js');

describe('educative/bubbleSort - bubbleSort2', () => {
  it('0 - should return a sorted array', () => {
    expect(bubbleSort2([5, 4, 3])).to.deep.equal([3, 4, 5]);
  });

  it('1 - should return a sorted array', () => {
    expect(bubbleSort2([-3, -1, -2])).to.deep.equal([-3, -2, -1]);
  });

  it('2 - should return a sorted array', () => {
    expect(bubbleSort2([0, -1, -2])).to.deep.equal([-2, -1, 0]);
  });

  it('3 - should return a sorted array', () => {
    expect(bubbleSort2([3, 2, 0])).to.deep.equal([0, 2, 3]);
  });

  it('4 - should return a sorted array', () => {
    expect(bubbleSort2([1, -1, 2, -2, 0])).to.deep.equal([-2, -1, 0, 1, 2]);
  });

  it('5 - should return a sorted array', () => {
    expect(bubbleSort2([Infinity, 0, -5])).to.deep.equal([-5, 0, Infinity]);
  });

  it('5 - should return a sorted array', () => {
    expect(bubbleSort2([-Infinity, 0, -5])).to.deep.equal([-Infinity, -5, 0]);
  });

  it('5 - should return a sorted array', () => {
    expect(bubbleSort2([1])).to.deep.equal([1]);
  });

  it('5 - should return a sorted array', () => {
    expect(bubbleSort2([])).to.deep.equal([]);
  });
});
