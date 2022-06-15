require('module-alias/register')

const deepLog = require('@utils/deepLog')

const { expect } = require('chai');
const {
  combineAllLists
} = require('./index.js');
const {
  LinkedList,
  ListNode
} = require('./linkedList.js')

describe('educative/realWorldExamples/fetchTopMovies - combineAllLists', () => {
  it.only('0 - should combine all lists', () => {
    const europe = new LinkedList()
    europe
      .addNodeToEnd(new ListNode(1))
      .addNodeToEnd(new ListNode(2))
    
    const northAmerica = new LinkedList()
    northAmerica
      .addNodeToEnd(new ListNode(1))
      .addNodeToEnd(new ListNode(2))

    const asia = new LinkedList()
    asia.addNodeToEnd(new ListNode(1))

    const regionsArr = [europe, northAmerica, asia]
    const result = combineAllLists(regionsArr)

    expect(result).to.deep.equal({
      head: {
        value: 1,
        next: {
          value: 1,
          next: {
            value: 1,
            next: { value: 2, next: { value: 2, next: null } }
          }
        }
      },
      tail: { value: 2, next: null }
    })
  });
});
