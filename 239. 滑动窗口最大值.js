// 单调队列
var maxSlidingWindow = function (nums, k) {
  let res = []
  let arr = [0]
  for (let i = 1; i < k; i++) {
    while (arr.length && nums[i] >= nums[arr[arr.length - 1]]) {
      arr.pop()
    }
    arr.push(i)
  }
  res.push(nums[arr[0]])
  for (let i = k; i < nums.length; i++) {
    if (i - k >= arr[0]) {
      arr.shift()
    }
    while (nums[i] >= nums[arr[arr.length - 1]] && arr.length) {
      arr.pop()
    }
    arr.push(i)
    res.push(nums[arr[0]])
  }
  return res
};



// queue 记录的是数组下标
var maxSlidingWindow = function(nums, k) {
    const queue=[]
    const res=[]
    for(let i=0;i<nums.length;i++) {
        while(queue.length && nums[queue[queue.length-1]]<nums[i]) {
            queue.pop()
        }
        queue.push(i)

        if(queue[0]<=i-k) {
            queue.shift()
        }
        
        if(i>=k-1) {
            res.push(nums[queue[0]])
        }
    }
    return res
};

console.log('res', maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.log('res', maxSlidingWindow([1], 1))
console.log('res', maxSlidingWindow([7, 2, 4], 2)) // [7, 4]
console.log('res', maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)) //[3,3,2,5]
console.log('res', maxSlidingWindow([1, 3, 1, 2, 0, 5], 1)) //[1,3,1,2,0,5]
