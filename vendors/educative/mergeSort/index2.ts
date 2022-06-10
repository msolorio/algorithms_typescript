const merge = function(arr1: number[], arr2: number[]): number[] {
  let result: number[] = []

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift())

    } else {
      result.push(arr2.shift())
    }
  }

  return [ ...result, ...arr1, ...arr2 ]
}


const mergeSort = function(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)

  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

module.exports = {
  merge,
  mergeSort
}