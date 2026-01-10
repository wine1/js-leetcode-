// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。
// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [5,4,-1,7,8]
// 输出：23

function maxSubArray(arr){
    if (arr.length === 0) return 0; 
    let res=arr[0]
    const len=arr.length
    const dp=new Array(len)
    dp[0]=arr[0]
    for(let i=1;i<len;i++) {
        let temp=dp[i-1]>0?dp[i-1]:0
        dp[i]=temp+arr[i]
        res=Math.max(res,dp[i])
    }
    return res
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSubArray([1])) //1
console.log(maxSubArray([5,4,-1,7,8])) //23