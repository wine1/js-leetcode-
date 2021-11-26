const oldObj = {
  a: 1,
  b: ['e', 'f', 'g'],
  c: { h: { i: 2 } },
  d: function say() {
    console.log('hi')
  },
}
oldObj.circleRef = oldObj
//   JSON.parse(JSON.stringify(obj))方法会丢失 d:function say(){console.log('hi)}
//   function deepclone(obj) {
//     return JSON.parse(JSON.stringify(obj))
//   }

const isObject = obj => {
  return typeof obj === 'object' && obj !== null
}

function deepclone(source) {
  if (!isObject(source)) return source
  let target = Array.isArray(source) ? [] : {}
  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepclone(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

// 解决循环引用

function deepclone2(source, hash = new WeakMap()) {
  if (!isObject(source)) return source
  if (hash.has(source)) return hash.get(source) // 新增代码，查哈希表
  var target = Array.isArray(source) ? [] : {}
  hash.set(source, target) // 新增代码，哈希表设值
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepclone2(source[key], hash) // 新增代码，传入哈希表
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}

let newObj = deepclone2(oldObj)
oldObj.b = [1, 2, 3]
console.log(newObj)
console.log(111)

// 1. 原始类型 直接返回值
// 2. 处理数组
// 3. 处理对象 解决循环引用

loadsh中的cloneDeep的实现```
function baseClone(value, bitmask, customizer, key, object, stack) {
  let result
  // 根据位掩码，切分判断入口
  const isDeep = bitmask & CLONE_DEEP_FLAG
  const isFlat = bitmask & CLONE_FLAT_FLAG
  const isFull = bitmask & CLONE_SYMBOLS_FLAG

  // 自定义 clone 方法，用于 _.cloneWith
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value)
  }
  if (result !== undefined) {
    return result
  }

  // 过滤出原始类型，直接返回
  if (!isObject(value)) {
    return value
  }
  
  const isArr = Array.isArray(value)
  const tag = getTag(value)
  if (isArr) {
    // 处理数组
    result = initCloneArray(value)
    if (!isDeep) {
      // 浅拷贝数组
      return copyArray(value, result)
    }
  } else {
    // 处理对象
    const isFunc = typeof value == 'function'
    
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep)
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value)
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, copyObject(value, keysIn(value), result))
          : copySymbols(value, Object.assign(result, value))
      }
    } else {
      if (isFunc || !cloneableTags[tag]) {
        return object ? value : {}
      }
      result = initCloneByTag(value, tag, isDeep)
    }
  }
  // 用 “栈” 处理循环引用
  stack || (stack = new Stack)
  const stacked = stack.get(value)
  if (stacked) {
    return stacked
  }
  stack.set(value, result)

  // 处理 Map
  if (tag == mapTag) {
    value.forEach((subValue, key) => {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack))
    })
    return result
  }

  // 处理 Set
  if (tag == setTag) {
    value.forEach((subValue) => {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack))
    })
    return result
  }

  // 处理 typedArray
  if (isTypedArray(value)) {
    return result
  }

  const keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys)

  const props = isArr ? undefined : keysFunc(value)

  // 遍历赋值
  arrayEach(props || value, (subValue, key) => {
    if (props) {
      key = subValue
      subValue = value[key]
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack))
  })

  return result
}

```
