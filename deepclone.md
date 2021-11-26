1. 简单的复制对象只能复制指向原对象的地址 原对象改变时 新的值也会跟着改变

```
const oldObj = {
  a: 1,
  b: ['e', 'f', 'g'],
  c: { h: { i: 2 } },
  d: function say() {
    console.log('hi')
  },
}

let newObj = oldObj
oldObj.b = [1, 2, 3]
console.log(newObj)
// 输出结果
// a:1
// b:(3) [1, 2, 3]
// c:{h: {…}}
// d:ƒ say() {\n    console.log('hi')\n  }
```

2. 用 JSON.parse(JSON.stringfy(X))的方法复制

```
   function Person(name) {
   this.name = name
   console.log(name)
   }

    const liai = new Person('liai')
    const oldObj2 = {
    a: 1,
    b: ['e', 'f', 'g'],
    c: { h: { i: 2 } },
    d: function say() {
    console.log('hi')
    },
    date: [new Date(1536627600000), new Date(1540047600000)],
    RegExp: new RegExp('\\w+'),
    constructor: liai,
    }
    let newObj2 = JSON.parse(JSON.stringify(oldObj2))
    oldObj2.b = [1, 2, 3]
    console.log(newObj2)
    // 输出结果
    // a:1
    // b:(3) ['e', 'f', 'g']
    // c:{h: {…}}
    // constructor:{name: 'liai'}
    // date:(2) ['2018-09-11T01:00:00.000Z', '2018-10-20T15:00:00.000Z']
    // RegExp:{}
```

// 函数被转成了 undefined 消失了
// date 被转成了字符串
// 正则表达式被转成了{}
// JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果 obj 中的对象是有构造函数生成的， 则使用 JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的 constructor
// JSON.parse(JSON.stringfy(X))，其中 X 只能是 Number, String, Boolean, Array, 扁平对象，即那些能够被 JSON 直接表示的数据结构。
// 循环引用会报错

3. object.assgin

```
const oldObj3 = {
a: 1,
b: ['e', 'f', 'g'],
c: { h: { i: 2 } },
d: function say() {
console.log('hi')
},
date: [new Date(1536627600000), new Date(1540047600000)],
RegExp: new RegExp('\\w+'),
}
let newObj3 = Object.assign({}, oldObj3)
oldObj3.b = [1, 2, 3]
oldObj3.c.h.i = 20
console.log(newObj3)
// 输出结果
// a:1
// b:(3) ['e', 'f', 'g']
// c:{h: {…}}
// h:{i: 20}
// **proto**:Object
// d:ƒ say() {\n console.log('hi')\n }
// date:(2) [Tue Sep 11 2018 09:00:00 GMT+0800 (China Standard Time), Sat Oct 20 2018 23:00:00 GMT+0800 (China Standard Time)]
// RegExp:/\\w+/
```

// Object.assgin 只能深拷贝第一层, 深层的还是浅拷贝

// Object.assign()拷贝的是（可枚举）属性值。
// 假如源值是一个对象的引用，它仅仅会复制其引用值
// ——出自 MDN

4. 手写深克隆
   // WeakMap 。它对于值的引用都是不计入垃圾回收机制的，所以名字里面才会有一个"Weak"，表示这是弱引用（对对象的弱引用是指当该对象应该被 GC 回收时不会阻止 GC 的回收行为）。

```
const funcDeepClone = (source, hash = new WeakMap()) => {
if (typeof source !== 'object') return source
if (hash.has(source)) return hash.get(source)
let res = Array.isArray(source) ? [] : {}
hash.set(source, res)
for (let key in source) {
if (typeof source[key] === 'object') {
res[key] = funcDeepClone(source[key], hash)
} else {
res[key] = source[key]
}
}
return res
}

const oldObj4 = {
a: 1,
b: ['e', 'f', 'g'],
c: { h: { i: 2 } },
d: function say() {
console.log('hi')
},
date: [new Date(1536627600000), new Date(1540047600000)],
RegExp: new RegExp('\\w+'),
}
let newObj4 = funcDeepClone(oldObj4)
oldObj4.b = [1, 2, 3]
oldObj4.c.h.i = 20
newObj4.circle = newObj4
console.log(newObj4)
console.log(1)
```
