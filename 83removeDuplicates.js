/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
 }

//  可能是要去leetcode的网站上验证吧 链表在浏览器里会报错的样子

let deleteDuplicates = head=> {
    if(!head || !head.next) return head;
    let p=head;
    let q=head.next;
    while (q) {
        if(p.val === q.val) {
            q=q.next;
            p.next=q;
        }else {
            p=q;
            q=q.next;
        }
    }
    return head;

};
// @lc code=end

log(deleteDuplicates('1->1->2'));
log(deleteDuplicates('1->1->2->3->3'));