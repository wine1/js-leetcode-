/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 哈希表
// 用哈希表存储字符串每个位置对应的字母，为hashtable中的key 字符串中的字母 对应的下标为value
// 若hash表中没有对应的值 typeof hash[] === 'undefined'  存入值 继续遍历
// 后面再遇到相同的字母 如果表中有对应的值且值相等 那么就继续遍历  否则return false
var isIsomorphic = function(s, t) {
  let hasha = {};
  let hashb = {};
  let arrs = s.split("");
  let arrt = t.split("");
  for (let i = 0; i < s.length; i++) {
    if (
      typeof hasha[arrs[i]] === "undefined" &&
      typeof hashb[arrt[i]] === "undefined"
    ) {
      hasha[arrs[i]] = i;
      hashb[arrt[i]] = i;
    } else if (hasha[arrs[i]] === hashb[arrt[i]]){
        continue;
    } else{
      return false;
    }
  }
//   log(hasha, hashb);
  return true;
};
// @lc code=end


// 提交后看到一个大神的神奇写法
// 利用indexof的第二个参数 规定在字符串中开始检索的位置，检索当前字母是否在后面出现，如果出现 位置是否一样
// 大神写法，瞬间效率高了许多！！！
let isIsomorphic2=(s,t)=> {
  for(let i=0;i<s.length;i++) {
    if(s.indexOf(s[i],i+1)!==t.indexOf(t[i],i+1)) {
    return false;}
  }
  return true;
}

log(isIsomorphic("egg", "add"));//true
log(isIsomorphic("foo", "bar"));//false
