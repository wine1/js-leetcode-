
// https://leetcode-cn.com/problems/monotonic-array/
// 如果数组是单调递增或单调递减的，那么它是单调的。

// 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。

// 当给定的数组 A 是单调数组时返回 true，否则返回 false。

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    let n = A.length
    let inc = true, dec = true
    for (let i = 0; i < n - 1; ++i) {
        if (A[i] > A[i + 1]) {
            inc = false;
        }
        if (A[i] < A[i + 1]) {
            dec = false;
        }
    }
    return inc || dec
};