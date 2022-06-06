// Selection Sort ////////////////////////////////////////////////////////////////
/*
Iterate through each item in the array, switching the current item with the smallest item
in the unsorted portion.

Time complexity
O(n^2)
For each item in the array iterate over the other unsorted items to find the smallest.

*/

const selectionSort = function(arr: number[]) {
  const arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    let smallestIdx = i

    for (let j = i+1; j < arrLength; j++) {
      if (arr[j] < arr[smallestIdx]) smallestIdx = j
    }

    const temp = arr[i]
    arr[i] = arr[smallestIdx]
    arr[smallestIdx] = temp
  }

  return arr
}

module.exports = selectionSort