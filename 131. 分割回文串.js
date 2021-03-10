// https://leetcode-cn.com/problems/palindrome-partitioning/

// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。

// 示例 1：

// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 示例 2：

// 输入：s = "a"
// 输出：[["a"]]
/**
 * @param {string} s
 * @return {string[][]}
 */

// 回溯+动态规划

var partition = function(s) {
    let res=[]

    const dp = new Array(s.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(s.length);
    }
    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i <= j; i++) {
            if (i == j) {
                dp[i][j] = true;
            } else if (j - i == 1 && s[i] == s[j]) {
                dp[i][j] = true;
            } else if (j - i > 1 && s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
            } else {
                dp[i][j] = false;
            }
        }
    }
    function dfs(temp,start) {
        if(start === s.length) {

            console.log('restemp',temp)
            res.push(temp.slice())
            return
        }
        for(let i=start;i<s.length;i++) {
            if (dp[start][i]) {
                temp.push(s.substring(start, i + 1));
                dfs(temp, i + 1);
                temp.pop();
            }
        }
    }

    dfs([],0)
    return res
};




console.log(partition("aabba"))
console.log(1)
