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
var getKthFromEnd = function (head, k) {
  if (!head) return null
  let fast = head,
    slow = head,
    n = 0
  while (fast) {
    if (n < k) {
      n++
    } else {
      slow = slow.next
    }
    fast = fast.next
  }
  return slow
}
