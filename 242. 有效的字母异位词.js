/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//  哈希
var isAnagram = function(s, t) {
  let arrs = s.split("");
  let arrt = t.split("");
  let hashs = [];
  let count;
  if (arrs.length !== arrt.length) {
    return false;
  } else {
    for (let i = 0; i < arrs.length; i++) {
      if (typeof hashs[arrs[i]] === "undefined") {
        hashs[arrs[i]] = 1;
      } else {
        count = hashs[arrs[i]];
        count++;
        hashs[arrs[i]] = count;
      }
    }
    for (let i = 0; i < arrs.length; i++) {
      if (typeof hashs[arrt[i]] === "undefined") {
        return false;
      } else {
        count = hashs[arrt[i]];
        count--;
        hashs[arrt[i]] = count;
        if(count<0) {
            return false;
        }
      }
    }
  }
  return true;
};

// 排序
var isAnagram2 = function(s, t) {
  let arrs = s.split("");
  let arrt = t.split("");
  arrs.sort();
  arrt.sort();
  if (arrs.length !== arrt.length) {
    return false;
  }
  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i] !== arrt[i]) {
      return false;
    }
  }
  return true;
};


var isAnagram3 = function(s, t) {
    if(s.length!==t.length) return false
    let res=true
    const hash=new Map()
    for(let i=0;i<s.length;i++){
        if(hash.has(s[i])) {
            hash.set(s[i],hash.get(s[i])+1)
        }else{
            hash.set(s[i],1)
        }
    }

    for(let i=0;i<t.length;i++) {
        if(hash.has(t[i])) {
            let count=hash.get(t[i])
            if(count===0) {
                res=false
            }
            hash.set(t[i],hash.get(t[i])-1)
        }else{
            res=false
        }
    }
    return res
};
// @lc code=end

log(isAnagram("anagram", "nagaram"));
log(isAnagram("rat", "car"));
log(isAnagram("aacc","ccac"));
