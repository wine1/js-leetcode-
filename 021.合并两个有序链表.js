/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  递归 归归归
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    
    if(l1.val<l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        console.log(l1);
        return l1;
    }else{
        l2.next = mergeTwoLists(l2.next,l1);
        console.log(l2);
        return l2;
    }
};
console.log(mergeTwoLists('1->2->4', '1->3->4'));
