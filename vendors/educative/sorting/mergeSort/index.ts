/*
Merge sort
Recursively split the array into halves, merge the halves into sorted subarrays, and merge the subarrays into a sorted array.

Time Complexity
O(n log(n))
- Come back to this.
*/

// merge - Merges 2 sorted arrays
const merge = function(leftArr: number[], rightArr: number[]): number[] {
  let result = []

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }

  return [ ...result, ...leftArr, ...rightArr ]
}

// Splits items in halves, sorts halves, and merges halves.
const mergeSort = function(arr: number[]): number[] {
  if (arr.length === 1) return arr

  const midIdx = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, midIdx)
  const rightArr = arr.slice(midIdx)

  return merge(
    mergeSort(leftArr),
    mergeSort(rightArr)
  )
}

module.exports = {
  merge,
  mergeSort
}

export {}
