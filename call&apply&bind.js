function fn(a, b) {
  console.log(this.x, a, b)
}
let arr = [1, 2, 4]
var obj = {
  x: 10,
}
let resCall = fn.call(obj, 1, 2)
let resApply = fn.apply(obj, [3, 4])
let resBind = fn.bind(obj, 5, 6)()

Function.prototype.newcall = function (context, ...args) {
  var context = context || window
  let fnSymbol = Symbol()
  context[fnSymbol] = this
  let fn = context[fnSymbol](...args)
  delete context[fnSymbol]
  return fn
}

Function.prototype.newapply = function (context, args) {
  var context = context || window
  let fnSymbol = Symbol()
  context[fnSymbol] = this
  let fn = context[fnSymbol](...args)
  delete context[fnSymbol]
  return fn
}

Function.prototype.newbind = function (context, ...args) {
  var context = context || window
  let fnSymbol = Symbol()
  context[fnSymbol] = this
  return function () {
    context[fnSymbol](...args)
    delete context[fnSymbol]
  }
}

fn.newcall(obj, 1, 2)
fn.newapply(obj, [3, 4])
fn.newbind(obj, 5, 6)(11)
console.log(123)
