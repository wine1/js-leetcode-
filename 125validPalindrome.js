/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr=s.split('');
   console.log(arr);
    for(let i=0;i<arr.length;i++) {
        let regex=/\w/g;
        let left=0,right=arr.length-1;
        if(arr[left].match(regex) && arr[right].match(regex)) {

        }
    }
};
// @lc code=end

log(isPalindrome("A man, a plan, a canal: Panama"));
log(isPalindrome("race a car"));