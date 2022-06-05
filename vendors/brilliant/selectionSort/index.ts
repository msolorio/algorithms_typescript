// Selection Sort ////////////////////////////////////////////////////////////////
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