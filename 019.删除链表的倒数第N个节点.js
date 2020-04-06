// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let prehead=new ListNode(-1);
    prehead.next=head;
    let fast=prehead;
    let slow=prehead;
    while(n!==0) {
        fast=fast.next;
        n--;
    }
    while(fast.next !== null) {
        fast=fast.next;
        slow=slow.next;
    }
    slow.next=slow.next.next;
    return prehead.next;
};