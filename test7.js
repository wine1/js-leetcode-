// 11. 编程题：设计一个flat函数将如下数组arr=[1,2,['3',4,'5',[6,[7,8],9]]]输出为1,2,'3',4,'5',6,7,8,9。至少写出两种方法,要求不能改变数组中的原始数据类型

let arr = [1, 2, ['3', 4, '5', [6, [7, 8], 9]]]
let res = []
function flat(value) {
  if (typeof value !== 'object') {
    res.push(value)
  } else {
    for (let item of value) {
      flat(item)
    }
  }
  return res
}
console.log(flat(arr))
console.log(arr.flat(3))
console.log(111)
