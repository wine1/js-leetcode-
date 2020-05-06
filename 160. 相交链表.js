// 编写一个程序，找到两个单链表相交的起始节点。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var pA = headA;
    var pB = headB;
    while(pA !== pB){
        pB = pB? pB.next: headA;
        pA = pA? pA.next: headB;
    }
    return pA;

};