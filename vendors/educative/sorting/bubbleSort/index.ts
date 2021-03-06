/*
Bubble Sort

Iterate through each item in the array, swapping the item with the item to the right.
Make multiple passes with the above step, until the array is sorted.

Time Complexity
Best - O(n)
if array is sorted still makes n number of comparisons.

Worst / Average - O(n^2)
If array is in opposite order, for each item in the array make n number of comparisons.

Space Complexity
O(1) - storing a set number of constant variables - temp, swapped, i.
O(n) - Must store the array in memory.
*/

const swap = function(originalArr: number[], idxA: number, idxB: number) {
  const arr = [...originalArr]

  const temp = arr[idxA]
  arr[idxA] = arr[idxB]
  arr[idxB] = temp

  return arr
}

const bubbleSort = function(arr: number[]): number[] {
  let swapped = true
  const arrLength = arr.length

  while (swapped) {
    swapped = false

    for (let i = 0; i < arrLength - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        arr = swap(arr, i, i + 1)
        swapped = true
      }
    }
  }

  return arr
}

module.exports = bubbleSort

export {}