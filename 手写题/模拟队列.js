function Queue() {
  this.arr = []
}
Queue.prototype.enqueue = function (x) {
  this.arr.push(x)
}
Queue.prototype.dequeue = function () {
  this.arr.shift()
}
Queue.prototype.peek = function () {
  let val = this.arr[this.arr.length - 1]
  return val
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.dequeue()
console.log(q.peek())
console.log(q)
console.log(1111)