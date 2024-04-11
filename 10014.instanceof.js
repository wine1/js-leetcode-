function C() {}
function D() {}

var o = new C()
// console.log(o instanceof C) // true，因为 Object.getPrototypeOf(o) === C.prototype
// console.log(o instanceof D) // false，因为 D.prototype 不在 o 的原型链上
// console.log(o instanceof Object) // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
// console.log(C.prototype instanceof Object) // true，同上

function myInstanceof(left, right) {
  let R = right.prototype
  left = left.__proto__
  while (true) {
    if (left === null) {
      return false
    } else if (left === R) {
      return true
    }
    left = left.__proto__
  }
}
console.log(myInstanceof(o, C))
console.log(myInstanceof(o, D))
