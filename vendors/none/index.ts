const binarySearch = function(arr: number[], num: number): number {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    
    if (num === arr[mid]) {
      return mid

    } else if (num < arr[mid]) {
      end = mid - 1

    } else if (num > arr[mid]) {
      start = mid + 1
    }
  }

  return null

}

module.exports = binarySearch
