const quickSort = function(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr
  }

  let pivotIdx = arr.length - 1
  let currentIdx = 0

  while (currentIdx < pivotIdx) {
    if (arr[currentIdx] > arr[pivotIdx]) {
      const current = arr[currentIdx]
      arr[currentIdx] = arr[pivotIdx - 1]
      arr[pivotIdx - 1] = arr[pivotIdx]
      arr[pivotIdx] = current
      pivotIdx -= 1

    } else {
      currentIdx += 1      
    }
  }

  const left = arr.slice(0, pivotIdx)
  const right = arr.slice(pivotIdx + 1)

  return [ ...quickSort(left), arr[pivotIdx], ...quickSort(right) ]
}

module.exports = quickSort
