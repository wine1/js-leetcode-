function maxIndex(arr) {
  let left = 0,
    right = arr[arr.length - 1]
  let max = arr[0],
    min = arr[right]
  while (left < right) {
    if (max < arr[left]) {
      max = arr[left]
      left++
    } else if (min > arr[right]) {
      right--
    }
  }
}

console.log([1, 4, 3, 2, 6, 9, 7, 20])
console.log(111)
