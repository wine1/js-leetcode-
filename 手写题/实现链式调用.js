function num(n) {
  console.log(n)
}
num.prototype.add = function (n) {
  console.log()
  return this + n
}

num.prototype.minus = function (n) {
  return this - n
}
num(1).add(1).minus(1).add(1)

// 目标
// 实现一个 query 方法，实现对数据的链式查询和处理

// 要求
// query 传入参数为原始数据（数组格式，每个元素都是对象）
// 通过进行链式调用对数据执行操作，支持的方法有
// where(predicate): 根据参数的条件进行筛选，参数与 [].filter 的参数类似
// orderBy(key, desc): 根据 key 的值进行排列，默认升序排列，当第二个参数为 true 时降序排列
// groupBy(key): 根据 key 的值对数据元素进行分组，合并为二维数组
// execute(): 执行所有处理并返回最终结果
// 执行 execute 方法时才真正执行操作并返回结果
// 请结合下面示例理解需求
// 示例

// query(data)
//     .where(item => item.age > 18)
//   .orderBy('age')
//   .groupBy('city')
//   .execute();

// // 结果返回
// [
//   [
//     { name: 'baz', age: 19, city: 'hangzhou' },
//     { name: 'bar', age: 24, city: 'hangzhou' },
//   ],
//   [
//     { name: 'fiz', age: 22, city: 'shanghai' },
//   ]
// ]
const datatest = [
  { name: 'foo', age: 16, city: 'shanghai' },
  { name: 'bar', age: 24, city: 'hangzhou' },
  { name: 'fiz', age: 22, city: 'shanghai' },
  { name: 'baz', age: 19, city: 'hangzhou' },
]

function query(data) {
  if (Array.isArray(data) && data.length) {
    this.data = data
    this.where = function (fn) {
      this.data = this.data.filter(fn)
      return this
    }
    this.orderBy = function (value, type = 'desc') {
      let isVerify = verification(value)
      if (!isVerify) return
      let arr = this.data,
        res = []

      if (Array.isArray(this.data[0])) {
        arr.forEach(arrItem => {
          let arrRes = []
          arrItem.forEach(item => {
            arrRes[item[value]] = item
          })
          if (type === 'desc') {
            arrRes = arrRes.filter(Boolean)
          } else {
            arrRes.filter(Boolean).reverse()
          }
          res.push(arrRes)
        })
      } else {
        arr.forEach(item => {
          res[item[value]] = item
        })
        if (type === 'desc') {
          res = res.filter(Boolean)
        } else {
          res.filter(Boolean).reverse()
        }
      }
      this.data = res
      return this
    }
    this.groupBy = function (value) {
      let isVerify = verification(value)
      if (!isVerify) return
      let map = new Map(),
        arr = this.data
      arr.forEach(item => {
        map.set(
          item[value],
          map.has(item[value]) ? map.get(item[value]).concat(item) : [].concat(item)
        )
      })
      let res = []
      map.forEach(item => {
        res.push(item)
      })
      this.data = res
      return this
    }
    this.execute = function () {
      return this.data
    }

    const verification = value => {
      let arr = []
      if (Array.isArray(this.data[0])) {
        arr = this.data[0][0]
      } else {
        arr = this.data[0]
      }
      const map = new Map(Object.entries(arr))
      if (!map.has(value)) {
        console.log('输入值不合法')
      }
      return map.has(value)
    }
  }
}
console.log(
  'res',
  new query(datatest)
    .where(item => item.age > 18)
    .orderBy('age')
    .groupBy('city')
    .execute()
)
console.log(111)
