const { expect } = require('chai');
const {
  merge,
  mergeSort
} = require('./index.js');

describe('educative/mergeSort - merge', () => {
  it('0 - should merge 2 sorted arrays into 1 sorted array', () => {
    expect(merge([0], [1])).to.deep.equal([0, 1])
  })

  it('1 - should merge 2 sorted arrays into 1 sorted array', () => {
    expect(merge([1], [0])).to.deep.equal([0, 1])
  })

  it('2 - should merge 2 sorted arrays into 1 sorted array', () => {
    expect(merge([0, 2], [1])).to.deep.equal([0, 1, 2])
  })

  it('3 - should merge 2 sorted arrays into 1 sorted array', () => {
    expect(merge([0, 2], [1, 3])).to.deep.equal([0, 1, 2, 3])
  })

  it('4 - should merge 2 sorted arrays into 1 sorted array', () => {
    expect(merge([2, 5], [1, 3])).to.deep.equal([1, 2, 3, 5])
  })

  it('5 - should merge 2 sorted arrays into 1 sorted array', () => {
    expect(merge([-2, 5], [-3, 1])).to.deep.equal([-3, -2, 1, 5])
  })

  it('6 - should merge 2 sorted arrays into 1 sorted array', () => {
    expect(merge([-2, 5], [])).to.deep.equal([-2, 5])
  })
})

describe('educative/mergeSort - mergeSort', () => {
  it('0 - should return a sorted array', () => {
    expect(mergeSort([5, 4, 3])).to.deep.equal([3, 4, 5]);
  });

  it('1 - should return a sorted array', () => {
    expect(mergeSort([0, -1, -2])).to.deep.equal([-2, -1, 0]);
  });

  it('2 - should return a sorted array', () => {
    expect(mergeSort([1, 0])).to.deep.equal([0, 1]);
  });

  it('3 - should return a sorted array', () => {
    expect(mergeSort([0, 1])).to.deep.equal([0, 1]);
  });

  it('4 - should return a sorted array', () => {
    expect(mergeSort([1, 2, -5, 3, -6])).to.deep.equal([-6, -5, 1, 2, 3]);
  });

  it('5 - should return a sorted array', () => {
    expect(mergeSort([Infinity, 0, -Infinity])).to.deep.equal([-Infinity, 0, Infinity]);
  });
});
