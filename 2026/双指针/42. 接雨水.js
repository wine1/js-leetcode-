
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

// 输入：height = [4,2,0,3,2,5]
// 输出：9

// 分别计算出每个位置的左侧最大值和右侧最大值

// dp解法
// function water(arr) {
//     let res = 0
//     let len=arr.length
//     let maxL=arr[0],maxR=0
//     let maxLArr=[]
//     let maxRArr=[]
//     for(let i=0;i<len-1;i++) {
//         maxL=Math.max(maxL,arr[i])
//         maxLArr[i]=maxL
//     }
//      for(let i=len-1;i>=0;i--) {
//         maxR=Math.max(maxR,arr[i])
//         maxRArr[i]=maxR
//     }
//     for(let i=0;i<len-1;i++) {
//         let temp=Math.min(maxLArr[i],maxRArr[i]) - arr[i]
//         res+=temp
//     }
//     return res
// }

function water(arr) {
    let res=0
    const len=arr.length
    let left=0,right=len-1,maxL=0,maxR=0
    while(left<right) {
        if(arr[left]<arr[right]) {
            maxL=Math.max(maxL,arr[left])
            res+=maxL-arr[left]
            left+=1
        }else {
            maxR=Math.max(maxR,arr[right])
            res+=maxR-arr[right]
            right-=1
        }
    }
    return res
}

console.log(water([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(water([4,2,0,3,2,5])) // 9
console.log(11111)