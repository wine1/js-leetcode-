let arrTest = [1, 2, 3, 4, 4, 4, 5, 5, 6, 7, 8, 8]

const res = (arr) => {
  let slow = 0
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++
      arr[slow] = arr[fast]
    }
  }
  return arr.splice(0, slow + 1)
}


console.log(res(arrTest))