/*
Loop over each item, and for each item insert it into the sorted portion of the array
*/

const insertItem2 = function(arr: number[], item: number): number[] {
  const arrLength = arr.length

  for (let i = 0; i <= arrLength; i++) {
    if (i === arrLength || arr[i] > item) {
      arr.splice(i, 0, item)
      break
    }
  }

  return arr
}

const insertionSort2 = function(arr: number[]): number[] {
  const arrLength = arr.length
  const sorted: number[] = []

  for (let i = 0; i < arrLength; i++) {
    insertItem2(sorted, arr[i])
  }

  return sorted
}

module.exports = {
  insertItem2,
  insertionSort2
}

export {}