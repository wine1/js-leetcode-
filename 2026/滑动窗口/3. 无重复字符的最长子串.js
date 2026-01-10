
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。

// 解题思路：
// 遍历字符串,
function lengthOfLongestSubstring(str){
    const len=str.length
    if(len===0) return 0
    let maxLen=1
    let s=str[0]
    for(let i=1;i<len;i++) {
       let index=s.indexOf(str[i])
       if(index === -1) {
        s+=str[i]
       }else {
        s+=str[i]
        s=s.slice(index+1)
       }
        maxLen=Math.max(maxLen,s.length)
    }
    return maxLen
}

console.log(lengthOfLongestSubstring('abcabcbb')) //3
console.log(lengthOfLongestSubstring('bbbbb')) //1
console.log(lengthOfLongestSubstring('pwwkew')) //3
