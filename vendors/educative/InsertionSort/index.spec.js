const { expect } = require('chai');
const {
  insertItem,
  insertionSort
} = require('./index.js');

describe('insertItem', () => {
  it('0 - should insert item in correct place', () => {
    expect(insertItem([1, 2, 4], 3)).to.deep.equal([1, 2, 3, 4])
  })

  it('1 - should insert item in correct place', () => {
    expect(insertItem([1, 2, 4], 0)).to.deep.equal([0, 1, 2, 4])
  })

  it('2 - should insert item in correct place', () => {
    expect(insertItem([1, 2, 4], 5)).to.deep.equal([1, 2, 4, 5])
  })

  it('3 - should insert item in correct place', () => {
    expect(insertItem([], 5)).to.deep.equal([5])
  })
})

describe('insertionSort', () => {
  it('0 - should return a sorted array', () => {
    expect(insertionSort([5, 4, 3])).to.deep.equal([3, 4, 5]);
  });

  it('1 - should return a sorted array', () => {
    expect(insertionSort([-3, -1, -2])).to.deep.equal([-3, -2, -1]);
  });

  it('2 - should return a sorted array', () => {
    expect(insertionSort([0, -1, -2])).to.deep.equal([-2, -1, 0]);
  });

  it('3 - should return a sorted array', () => {
    expect(insertionSort([3, 2, 0])).to.deep.equal([0, 2, 3]);
  });

  it('4 - should return a sorted array', () => {
    expect(insertionSort([1, -1, 2, -2, 0])).to.deep.equal([-2, -1, 0, 1, 2]);
  });

  it('5 - should return a sorted array', () => {
    expect(insertionSort([Infinity, 0, -5])).to.deep.equal([-5, 0, Infinity]);
  });

  it('6 - should return a sorted array', () => {
    expect(insertionSort([-Infinity, 0, -5])).to.deep.equal([-Infinity, -5, 0]);
  });
});
