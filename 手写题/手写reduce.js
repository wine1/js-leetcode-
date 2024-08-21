
const arr = [1, 2, 3, 4, 5, 6]
function myReduce(arr, fn, initialValue) {
  let accumulator = initialValue ? initialValue : arr[0]
  let startIndex = initialValue ? 0 : 1
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = fn.call(this, accumulator, arr[i])
  }
  return accumulator
}

function myProtoReduce(fn, initialValue) {
  let arr = this
  let accumulator = initialValue ? initialValue : arr[0]
  let startIndex = initialValue ? 0 : 1
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = fn.call(this, accumulator, arr[i])
  }
  return accumulator
}
Array.prototype.myProtoReduce = myProtoReduce
console.log(arr.myProtoReduce((acc, cur) => { return acc * cur }, 0))
console.log(myReduce(arr, (acc, cur) => { return acc * cur }, 0))
console.log(1111)