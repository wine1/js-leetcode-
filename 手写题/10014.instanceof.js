class A {
}

class B extends A {

}

class C extends B {

}

class D {

}

let a = new C()
let b = new D()
// function myInstanceof(left, right) {
//   let R = right.prototype
//   left = left.__proto__
//   while (true) {
//     if (left === null) {
//       return false
//     } else if (left === R) {
//       return true
//     }
//     left = left.__proto__
//   }
// }

function myInstanceof(left, right) {
  while (true) {
    if (left === null) return false
    if (left === right.prototype) {
      return true
    }
    left = left.__proto__
  }
}

console.log(myInstanceof(a, A))
console.log(myInstanceof(b, D))
console.log(myInstanceof(a, D))
console.log(a instanceof A)
console.log(a instanceof Object) // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
console.log(A.prototype instanceof Object)

console.log(111)
