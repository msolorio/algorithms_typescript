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
