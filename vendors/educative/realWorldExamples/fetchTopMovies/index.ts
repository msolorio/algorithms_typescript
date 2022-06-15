/*
For a Netflix scenario, enable the user to view the top-rated movies worldwide, given that we have movie rankings available separately for different geographic regions.

https://www.educative.io/courses/decode-coding-interview-js/m7NG4wkVx7A

*/
require('module-alias/register')

const deepLog = require('@utils/deepLog')

const {
  ListNode,
  LinkedList
} = require('./linkedList')

// Write function for combining all lists
// Combines 2 lists and moves down the regions
const combineTwoLists = function(list1: typeof LinkedList, list2: typeof LinkedList) {
  const resultList = new LinkedList()

  while (list1.head || list2.head) {
    
    if (
      !list2.head
      || list1.head.value < list2.head.value
    ) {
      const node = list1.removeNodeFromHead()
      resultList.addNodeToEnd(node)
    }

    else if (
      !list1.head
      || list2.head.value <= list1.head.value
    ) {
      const node = list2.removeNodeFromHead()
      resultList.addNodeToEnd(node)
    }
  }

  return resultList
}

const combineAllLists = function(regionsArr: typeof LinkedList[]) {
  const arrLength = regionsArr.length
  
  if (arrLength === 0) {
    return null
  }
  
  if (arrLength === 1) {
    return regionsArr[0]
  }
  
  let result = regionsArr[0]

  for (let i = 1; i < arrLength; i++) {
    result = combineTwoLists(result, regionsArr[i])
  }

  return result
}

module.exports = {
  combineAllLists
}