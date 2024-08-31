// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。



// 示例 1:

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
// 示例 2:

// 输入: strs = [""]
// 输出: [[""]]
// 示例 3:

// 输入: strs = ["a"]
// 输出: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//   let hashMap = new Map()
//   for (let i = 0; i < strs.length; i++) {
//     let key = Array.from(strs[i]).sort().toString()
//     if (hashMap.has(key)) {
//       let value = hashMap.get(key).concat(strs[i])
//       hashMap.set(key, value)
//     } else
//       hashMap.set(key, [strs[i]])
//   }
//   return Array.from(hashMap.values())
// };


// 将字符串的每一位通过charCodeAt()方法转换为数字，遍历字符串构成一个长度26，以字母代表的数字为下标，出现次数为值的数组
var groupAnagrams = function (strs) {
  let hash = new Map()
  for (let i = 0; i < strs.length; i++) {
    let arr = new Array(26).fill(0)
    for (let key of strs[i]) {
      // 字符在ascii表中并不是以0开始的，所以需要减去‘a’代表的数字
      arr[key.charCodeAt() - 'a'.charCodeAt()]++
    }
    // 由于数组的值指向的是数组在内存中的地址，所以每个arr的值都是不同的，在hash.has()的条件下都为false,所以转成字符串作为key
    let arrStr = arr.toString()
    let val = hash.get(arrStr) ? hash.get(arrStr) : []
    val.push(strs[i])
    hash.set(arrStr, val)
  }
  return Array.from(hash.values())
}

let str = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(str))
console.log(1111)