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

function groupAnagrams(strs) {
    const hash=new Map()
    for(let i=0;i<strs.length;i++) {
        const temp=strs[i].split('').sort().toString()
        if(hash.has(temp)) {
            // Array.prototype.push() 返回的是数组的新长度（一个数字），而不是数组本身。所以当执行这行代码时，实际上把 value 从数组变成了数字。
            // hash.set(temp,hash.get(temp).push(strs[i]))
            hash.set(temp,hash.get(temp).concat([strs[i]]))
        }else {
            hash.set(temp,[strs[i]])
        }
    }
    return Array.from(hash.values())
}


let str = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(str))
console.log(1111)