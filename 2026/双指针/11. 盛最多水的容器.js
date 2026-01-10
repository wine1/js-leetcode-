// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 输入：height = [1,1]
// 输出：1

function maxArea(arr) {
    let res=0
    let left=0,right=arr.length -1
    while(left<right) {
        const area =(right-left) * Math.min(arr[left],arr[right])
        res=Math.max(res,area)
        if(arr[left]>=arr[right]) {
            right --
        }else {
            left++
        }
    }
    return res
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))