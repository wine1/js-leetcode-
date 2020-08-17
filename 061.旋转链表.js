/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 链表中的点已经相连，一次旋转操作意味着：

// 先将链表闭合成环
// 找到相应的位置断开这个环，确定新的链表头和链表尾

var rotateRight = function(head, k) {
    if (!head || !head.next) return head
    
    let n=0;//记录链表长度
    let curr=head

    while(curr.next) {
        ++n
        curr=curr.next
    }
    curr.next=head
    k=k%n
    while(++k<n) {
        head=head.next
    }

    let temp=head.next
    head.next=null
    head=temp
    return head
};
// @lc code=end

