//1
function Foo() {
  Foo.a = function () {
    console.log(1)
  }
  this.a = function () {
    console.log(2)
  }
}
Foo.prototype.a = function () {
  console.log(3)
}
Foo.a = function () {
  console.log(4)
}
Foo.a()
let obj = new Foo()
obj.a()
Foo.a()
//结果：4 2 1

//2
function changeObjProperty(o) {
  o.siteUrl = 'http://www.baidu.com'
  o = new Object()
  o.siteUrl = 'http://www.google.com'
}
let webSite = new Object()
changeObjProperty(webSite)
console.log(webSite.siteUrl)
// 结果：'http://www.baidu.com'

//3
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function () {
  console.log('setTimeout')
}, 0)
async1()
new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})
console.log('script end')
//结果 'script start' 'async1 start' 'async2' 'script end' 'async1 end' 'promise1' 'promise2' 'setTimeout'

//4
class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 0,
    }
  }

  componentDidMount() {
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val) // 第 1 次 log 0

    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val) // 第 2 次 log 0

    setTimeout(() => {
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val) // 第 3 次 log 2

      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val) // 第 4 次 log 3
    }, 0)
  }

  render() {
    return null
  }
}

//5
var b = 10
;(function () {
  b = 20
  console.log(b)
})()
// 结果 20

//6
var a = 10
;(function () {
  console.log(a)
  a = 5
  console.log(window.a)
  var a = 20
  console.log(a)
})()
// 结果 undefined 10 20

//7
var obj = {
  2: 3,
  3: 4,
  length: 2,
  splice: Array.prototype.splice,
  push: Array.prototype.push,
}
obj.push(1)
obj.push(2)
console.log(obj)

//8
// example 1
var a = {},
  b = '123',
  c = 123
a[b] = 'b'
a[c] = 'c'
console.log(a[b]) // c

// example 2
var a = {},
  b = Symbol('123'),
  c = Symbol('123')
a[b] = 'b'
a[c] = 'c'
console.log(a[b]) // b

// example 3
var a = {},
  b = { key: '123' },
  c = { key: '456' }
a[b] = 'b'
a[c] = 'c'
console.log(a[b]) // c

//9
var a = { n: 1 }
var b = a
a.x = a = { n: 2 }

console.log(a.x) //{n:2}
console.log(b.x) // undefined

<<<<<<< HEAD
console.log('测试node')
=======
handelPictureUrl(url)

const test=(value)=>{
return value.replace(/[^\d.]/g,'')
}
console.log(test('发放1张优惠券，可在支付换电订单时使用，请前往'))
>>>>>>> 93fd47fcfb85eccb1096f613bc2f857b77fe0f18
