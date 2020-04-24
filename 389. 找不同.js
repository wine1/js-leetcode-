/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let hash=[];
    let len=t.length;
    for(let i=0;i<len;i++) {
        if(typeof hash[s[i]] === 'undefined') {
            hash[s[i]]=i;
        }
    }
};
// @lc code=end

// let findTheDifference=(s,t)=> {

// }


log(findTheDifference('abcd','abcde'));