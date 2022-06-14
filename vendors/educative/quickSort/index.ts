/*
This implementation is my own code inspired by lessons from educative.

It has lower space complexity. We're using the same array space and simply swapping the items within the array.
*/

const quickSort = function(arr: number[], startIdx?: number, endIdx?: number) {
  if (startIdx >= endIdx) return

  startIdx = startIdx || 0
  endIdx = endIdx || arr.length - 1
  let pivotIdx = endIdx
  let currentIdx = startIdx

  while (currentIdx < pivotIdx) {
    if (arr[currentIdx] > arr[pivotIdx]) {
      const currentVal = arr[currentIdx]
      arr[currentIdx] = arr[pivotIdx - 1]
      arr[pivotIdx - 1] = arr[pivotIdx]
      arr[pivotIdx] = currentVal
      pivotIdx -= 1

    } else currentIdx += 1
  }

  quickSort(arr, startIdx, pivotIdx - 1)
  quickSort(arr, pivotIdx + 1, endIdx)

  return arr
}

module.exports = quickSort


export {}
