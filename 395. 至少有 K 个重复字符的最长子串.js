// https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/
// 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。
// 示例 1：

// 输入：s = "aaabb", k = 3
// 输出：3
// 解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。
// 示例 2：

// 输入：s = "ababbc", k = 2
// 输出：5
// 解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var longestSubstring = function(s, k) {
    const n = s.length;
    return dfs(s, 0, n - 1, k);
}

const dfs = (s, l, r, k) => {
    const cnt = new Array(26).fill(0);
    for (let i = l; i <= r; i++) {
        cnt[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    }

    let split = 0;
    for (let i = 0; i < 26; i++) {
        if (cnt[i] > 0 && cnt[i] < k) {
            split = String.fromCharCode(i + 'a'.charCodeAt());
            break;
        }
    }
    if (split == 0) {
        return r - l + 1;
    }

    let i = l;
    let ret = 0;
    while (i <= r) {
        while (i <= r && s[i] === split) {
            i++;
        }
        if (i > r) {
            break;
        }
        let start = i;
        while (i <= r && s[i] !== split) {
            i++;
        }

        const length = dfs(s, start, i - 1, k);
        ret = Math.max(ret, length);
    }
    return ret;
};
console.log(longestSubstring("aaabb",3))
console.log(longestSubstring("ababbc",2))