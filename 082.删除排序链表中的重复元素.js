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

//  双指针
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;
    let res = new ListNode();
    res.next = head;
    let fast = head;
    let slow = res;
    while (fast && fast.next) {
      if (fast.val == fast.next.val) {
        let sameValue = fast.val;
        while (fast && fast.val == sameValue) {
          fast = fast.next;
        }
        slow.next = fast;
      } else {
        fast = fast.next;
        slow = slow.next;
      }
    }
  
    return res.next;
  };