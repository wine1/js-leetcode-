function stack() {
  this.arr = []
}
stack.prototype.pop = function () {
  this.arr.pop()
}
stack.prototype.push = function (x) {
  this.arr.push(x)
}
stack.prototype.peek = function () {
  let val = this.arr[this.arr.length - 1]
  return val
}

const s = new stack()
s.push(1)
s.push(2)
console.log(s.peek())
s.pop()
console.log(s)
console.log(1111)