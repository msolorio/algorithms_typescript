/*
Quick Sort
Best case
Partitioning takes n operations and the chosen pivot splits the array in half each time (log(n)).
O(n log(n))

Worst Case
If all of the items end up on 1 side of the pivot every time, for each partition (n times) compare against n items.
O(n^2)

This is my own implementation of the quick sort inspired by lessons on Brilliant. It uses extra space complexity because we're creating extra arrays within the loop and in the merge.
*/

const quickSort = function(arr: number[]): number[] {
  const arrLength = arr.length
  if (arrLength <= 1) return arr

  const pivot = arr[0]
  let left: number[] = []
  let right: number[] = []

  for (let i = 1; i < arrLength; i++) {
    if (arr[i] < pivot) {
      left = [ ...left, arr[i] ]

    } else {
      right = [ ...right, arr[i] ]
      
    }
  }

  return [ ...quickSort(left), pivot, ...quickSort(right) ]
}

module.exports = quickSort

export {}
