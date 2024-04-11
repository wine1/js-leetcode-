// 1、句子单词逆序
// how old are you => you are old how
const test1 = 'how old are you'
const fnc1 = str => {
  let arr = str.split(' ')
  arr.reverse()
  return arr.join(' ')
}
console.log(fnc1(test1))

// 2、数字查找和排序 -  找出数组中重复最多的元素
// var arr = [1, 2, 3, 1, 2, 3, 4, 3, 3, 5, 3];
// a、找出数组中重复最多的数字。
// b、重复最多的数字最先开始的位置。
// c、重复最多的数字的数量。
// a) 3
// b) 2
// c) 5
const test2 = [1, 2, 3, 1, 2, 3, 4, 3, 3, 5, 3]
const func2 = arr => {
  if (!arr.length) return [0, 0, 0]
  let map = new Map()
  let maxNum = 0,
    index = 0,
    count = 0
  for (let i = 0; i < arr.length; i++) {
    console.log(map.has(arr[i]))
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1)
    } else {
      map.set(arr[i], 1)
    }
  }
  map.forEach((value, key) => {
    count = count > value ? count : value
    maxNum = count > value ? maxNum : key
  })
  index = arr.indexOf(maxNum)
  return [maxNum, index, count]
}
console.log(func2(test2))

// 3、金额格式化
// 1000000 => 1,000,000
// 10.24 => 10.24
const test3 = 1000000
const test31 = 10.24
const test32 = 100002.24
const func3 = value => {
  value = value.toString()
  let res = []
  let float = ''
  let int = ''
  if (value.indexOf('.') !== -1) {
    let arr = value.split('.')
    int = arr[0].toString()
    float = arr[1]
  } else {
    int = value.toString()
  }
  while (int.length > 3) {
    let str = int.slice(int.length - 3, int.length)
    res.push(str)
    int = int.slice(0, int.length - 3)
  }
  if (int.length <= 3) {
    res.push(int)
  }
  if (float.length) {
    float = `.${float}`
  }
  return `${res.reverse().join(',')}${float}`
}
console.log(func3(test3))
console.log(func3(test31))
console.log(func3(test32))
console.log(1211)

// 4、CSS颜色转换
// #0000FF => rgb(0, 0, 255)
// #A37 => rgb(170, 51, 119)
// #huahs => invalid
// */
const test4 = '#0000FF'
const tes41 = '#A37'
const tes42 = '#huahs'
const func4 = str => {
  let arr = []
  let index = str.indexOf('#')
  if (index !== 0) return 'invalid'
  else {
    str = str.slice(1, str.length)
    if (str.length === 3) {
      for (let i = 0; i < str.length; i = i + 1) {
        arr.push(str.slice(i, i + 1))
      }
    } else if (str.length === 6) {
      for (let i = 0; i < str.length; i = i + 2) {
        arr.push(str.slice(i, i + 2))
      }
    } else {
      return 'invalid'
    }
    let resArr = []
    arr.forEach(item => {
      resArr.push(parseInt(item, 16))
    })
    console.log(arr)
    return `rgb(${resArr[0]}, ${resArr[1]}, ${resArr[2]})`
  }
}
console.log(func4(test4))
