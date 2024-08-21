// _.get(object, path, [defaultValue])
// 根据 object对象的path路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
// var object = { 'a': [{ 'b': { 'c': 3 } }] };

// _.get(object, 'a[0].b.c');
// // => 3

// _.get(object, ['a', '0', 'b', 'c']);
// // => 3

// _.get(object, 'a.b.c', 'default');
// // => 'default'

var object = { 'a': [{ 'b': { 'c': 3 } }] };
function get(value, path, defaultValue = 'undefined') {
  if (typeof path === 'string') {
    path = path.replace(/\[(\w+)\]/g, '.$1') // 将数组索引形式的路径转换为点分隔形式
      .split('.') // 按点分隔符拆分路径
      .filter(key => key.length); // 过滤掉空字符串
  }
  let result = object
  for (let key of path) {
    result = result[key]
    if (result == null) return defaultValue
  }
  return result
}
console.log(get(object, 'a[0].b.c', 'default'))
console.log(get(object, ['a', '0', 'b', 'c']))
console.log(get(object, 'a.b.c', 'default'))
console.log(1111)