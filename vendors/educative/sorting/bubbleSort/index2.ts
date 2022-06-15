/*
Time complexity
Worse case / Average case
O(n^2)
If array is in exact reverse order, for each item (n), make on average n/2 comparisons.

Best case
O(n)
If array is already sorted, make n number of comparisons.
*/

const swap = function(arr: number[], idxA: number, idxB: number): number[] {
  const temp = arr[idxA]
  arr[idxA] = arr[idxB]
  arr[idxB] = temp

  return arr
}

const bubbleSort2 = function(arr: number[]): number[] {
  const arrLength = arr.length
  let swapped = true

  while (swapped) {
    swapped = false

    for (let i = 0; i < arrLength; i++) {
      if (arr[i] > arr[i + 1]) {
        arr = swap(arr, i, i + 1)
        swapped = true
      }
    }
  }

  return arr
}

module.exports = bubbleSort2

export {}
