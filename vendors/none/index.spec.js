const { expect } = require('chai');
const binarySearch = require('./index.js');

describe('none/binarySearch - binarySearch', () => {

  it('1 - should return index of desired num', () => {
    expect(binarySearch([5, 6, 7], 5)).to.equal(0);
  });

  it('2 - should return index of desired num', () => {
    expect(binarySearch([5, 6, 7], 7)).to.equal(2);
  });

  it('3 - should return index of desired num', () => {
    expect(binarySearch([5, 6, 7, 8, 9, 10], 5)).to.equal(0);
  });

  it('4 - should return index of desired num', () => {
    expect(binarySearch([5, 6, 7, 8, 9, 10], 10)).to.equal(5);
  });

  it('5 - should return index of desired num', () => {
    expect(binarySearch([5, 6, 7, 8, 9, 10], 8)).to.equal(3);
  });

  it('5 - should return index of desired num', () => {
    expect(binarySearch([5, 6, 7, 8, 9, 10], 7)).to.equal(2);
  });

  it('6 - should return index of desired num', () => {
    expect(binarySearch([5, 6, 7], 8)).to.equal(null);
  });

  it('7 - should return index of desired num', () => {
    expect(binarySearch([5, 6, 7], 4)).to.equal(null);
  });

  it('7 - should return index of desired num', () => {
    expect(binarySearch([5, 6, 8, 9], 7)).to.equal(null);
  });
});
