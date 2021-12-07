// 柯里化和偏函数的区别
// 在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
// 换句话说就是把一个有n个参数的函数转换成n个嵌套的函数，每个函数只接受一个参数，并返回一个新函数。也就是把f(a,b,c)转化为f(a)(b)(c)。
// Partial Application(偏函数应用)很容易和函数柯里化混淆，它是指使用一个函数并将其应用一个或多个参数，但不是全部参数，在这个过程中创建一个新函数，这个函数用于接受剩余的参数。
// 暴力柯里化
function curryEasy(f) {
  // curry(f) 执行柯里化转换
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c)
      }
    }
  }
}

// 用法
function sum1(a, b, c) {
  return a + b + c
}

let curriedSum1 = curryEasy(sum1)

console.log(curriedSum1(1)(2)(3)) // 3

// 高级柯里化

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
function sum(a, b, c) {
  return a + b + c + 5
}

let curriedSum = curry(sum)

console.log(curriedSum(1, 2, 3)) // 6，仍然可以被正常调用
console.log(curriedSum(1)(2, 3)) // 6，对第一个参数的柯里化
console.log(curriedSum(1)(2)(3)) // 6，全柯里化
console.log(123)
