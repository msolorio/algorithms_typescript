const swap = function(arr: number[], idxA: number, idxB: number): number[] {
  const temp = arr[idxA]
  arr[idxA] = arr[idxB]
  arr[idxB] = temp
  
  return arr
}

const selectionSort = function(arr: number[]) {
  const arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    let smallestIdx = i

    // find smallest idx after i
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j
      }
    }

    // swap current with smallest
    arr = swap(arr, i, smallestIdx)
  }

  return arr
}

module.exports = selectionSort

export {}