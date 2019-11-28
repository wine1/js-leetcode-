/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
    let arr=s.split(' ');
    if(s.length === 0 ||arr[0]==='') {
        return 0;
    }
    log(arr)
    return arr.length;
};
// @lc code=end

log(countSegments("Hello, my name is John"));//5
log(countSegments("       "));//8