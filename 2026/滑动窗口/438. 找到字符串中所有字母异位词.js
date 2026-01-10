// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

function findAnagrams(s, p) {
  const res = [];
    if(p.length >s.length) return res

  let pArr = new Array(26).fill(0);
  let sArr = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    pArr[p.charCodeAt(i)-97]++
    sArr[s.charCodeAt(i)-97]++
  }

  if(pArr.toString() === sArr.toString()) res.push(0)

for(let i=0;i<s.length-p.length;i++) {
    --sArr[s.charCodeAt(i)-97]
    ++sArr[s.charCodeAt(i+p.length)-97]
    if(pArr.toString() === sArr.toString()){
        res.push(i+1)
    }
}

  return res;
}

console.log(findAnagrams("cbaebabacd", "abc")); //[0,6]
console.log(findAnagrams("abab", "ab"));
[0, 1, 2];
