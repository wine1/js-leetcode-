// // 1. 实现日期格式化函数
// const dateFormat = (date, format) => {
//   let result = ''
//   let year = date.getFullYear()
//   let month = date.getMonth() + 1
//   let day = date.getDate()
//   result = format.replace(/yyyy/, year).replace(/MM/, month).replace(/dd/, day)
//   console.log(result)
//   return result
// }

// dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
// dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
// dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日

// 4.
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = arr.reduce((total, i) => (total += i))
// console.log(sum)
// arr2 = [1, 2, 3, [[4, 5], 6], 7, 8, 9]
// let sum = arr2
//   .toString()
//   .split(',')
//   .reduce((total, i) => (total += i))
// console.log(sum)

// 5.
// let arr = [1, [2, [3, 4]]]
// function flatten(arr) {
//   while (arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }
//   return arr
// }
// console.log(flatten(arr)) //  [1, 2, 3, 4]

// 7
// const arr0 = [0, 1, 2, [3, 4]]
// const arr1 = [0, 1, 2, [[[3, 4, 5]]]]
// const flat = (arr, depth = 1) => {
//   while (arr.some(item => Array.isArray(item)) && depth) {
//     arr = [].concat(...arr)
//     depth--
//   }
//   console.log(arr)
//   return arr
// }
// flat(arr0)
// flat(arr1, 2)
// Array.prototype.Myflat = function (depth = 1) {
//   let arr = this
//   // console.log(this)
//   while (arr.some(item => Array.isArray(item)) && depth) {
//     arr = [].concat(...arr)
//     depth--
//   }
//   console.log(arr)
//   return arr
// }
// arr0.Myflat()
// arr1.Myflat(2)

// 8
// let arr = [1, 2, 3]
// Array.prototype.myPush = function (value) {
//   this[this.length] = value
//   console.log(this.length)
//   return this.length
// }
// arr.myPush(11)

// 9
// let arr = [1, 2, 3, 4, 5]
// Array.prototype.MyFilter = function (fn) {
//   if (Object.prototype.toString.call(fn) !== '[object Function]') {
//     return null
//   }
//   let resArr = []
//   for (let i = 0; i < this.length; i++) {
//     fn(this[i]) && resArr.push(this[i])
//   }
//   return resArr
// }
// let res = arr.MyFilter(item => item > 3)
// console.log(res)

// 10
// const arr = [1, 4, 9, 16]
// Array.prototype.MyMap = function (fn) {
//   if (Object.prototype.toString.call(fn) !== '[object Function]') {
//     return null
//   }
//   let resArr = []
//   for (let i = 0; i < this.length; i++) {
//     resArr.push(fn(this[i]))
//   }
//   return resArr
// }
// const res = arr.MyMap(x => x * 2)
// console.log(res) // [2, 8, 18, 32]

// 11
// String.prototype.MyRepeat = function (value) {
//   if (value < 1) {
//     return ''
//   }
//   value = Math.floor(value)
//   let resStr = ''
//   for (let i = 0; i < value; i++) {
//     resStr += this
//   }
//   return resStr
// }
// 'abc'.MyRepeat(-1) // RangeError: repeat count must be positive and less than inifinity
// 'abc'.MyRepeat(0) // ""
// 'abc'.MyRepeat(1) // "abc"
// 'abc'.MyRepeat(2) // "abcabc"
// 'abc'.MyRepeat(3.5) // "abcabcabc" 参数 count 将会被自动转换成整数.
// 'abc'.MyRepeat(1 / 0) // RangeError: repeat count must be positive and less than inifinity

// 13
// const format = value => {}
// format(12323.33)

// 15
// const add = m => {
//   var temp = function (n) {
//     return add(m + n)
//   }

//   temp.toString = function () {
//     return m
//   }
//   return temp
// }
// add(1)(2)(3)

// 16

// 19
// 转换前：
// source = [
//   {
//     id: 1,
//     pid: 0,
//     name: 'body',
//   },
//   {
//     id: 2,
//     pid: 1,
//     name: 'title',
//   },
//   {
//     id: 3,
//     pid: 2,
//     name: 'div',
//   },
// ]

// const convert = source => {
//   let map = new Map()
//   let result = []
//   source.map(item => map.set(item.id, item))
//   for (let i = 0; i < source.length; i++) {
//     // map.set(source[i].id, source[i])
//     let pid = source[i].pid
//     let parent = map.get(pid)
//     if (parent) {
//       ;(parent.children || (parent.children = [])).push(source[i])
//     } else {
//       result.push(source[i])
//     }
//   }
//   console.log(result)
//   return result
// }
// convert(source)
// 转换为:
// tree = [{
// id: 1,
// pid: 0,
// name: 'body',
// children: [{
//   id: 2,
//   pid: 1,
//   name: 'title',
//   children: [{
//     id: 3,
//     pid: 1,
//     name: 'div'
//   }]
// }
// }]

//20
// let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'
// const parseParam = url => {
//   let res = {},
//     arr = []
//   let index = url.indexOf('?')
//   if (index !== -1) {
//     let str = url.slice(index + 1)
//     arr = str.split('&')
//     arr.forEach(item => {
//       item = decodeURIComponent(item)
//       item = item.split('=')
//       if (res[item[0]]) {
//         res[item[0]] = new Array(res[item[0]]).concat(item[1])
//       } else {
//         res[item[0]] = item[1]
//       }
//     })
//   }
//   return res
// }
// parseParam(url)

console.log(123)
