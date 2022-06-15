/*
Insertion sort
For each item in the in unsorted portion of the array insert it in the correct position in the sorted portion.

Time Complexity
Best case - O(n) - if array is already sorted, iterate through each item and insert to end of sorted portion.
Worst / Average - O(n^2) - for each item in the array compare to each item in the sorted portion.

Space complexity
O(n)
Must store the array and the sorted array in memory.

The below solution I created is much easier to follow than the example provided by educative.
*/

const insertItem = function(arr: number[], item: number): number[] {
  const arrLength = arr.length

  for (let i = 0; i <= arrLength; i++) {
    if (i === arrLength || item < arr[i]) {
      arr.splice(i, 0, item)
      break
    }
  }

  return arr
}

const insertionSort = function(arr: number[]): number[] {
  const arrLength = arr.length
  let sorted: number[] = []

  for (let i = 0; i < arrLength; i++) {
    sorted = insertItem(sorted, arr[i])
  }

  return sorted
}

module.exports = {
  insertionSort,
  insertItem
}

export {}