/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let left = 0;
    let right = 0;
    let tmp_nums1 = nums1.slice(0,m);
    let tmp_nums2 = nums2.slice(0,n);
    let result = [];
    while(left < m && right < n){
        if(tmp_nums1[left] < tmp_nums2[right]){
            result.push(tmp_nums1[left]);
            left++;
        }else{
            result.push(tmp_nums2[right]);
            right++;
        }
    }
    result = result.concat(tmp_nums1.slice(left)).concat(tmp_nums2.slice(right));
    for(let i = 0;i < result.length;i++){
        nums1[i] = result[i];
    }
};