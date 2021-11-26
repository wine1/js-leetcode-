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

// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

// 解题思路：
// 将链表节点值取出进行加法运算后重新构建链表

var addTwoNumbers = function (l1, l2) {
  let sum = 0
  let carry = 0
  let result = new ListNode(null)
  let nextres = result
  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0
    let y = l2 !== null ? l2.val : 0
    sum = x + y + carry
    if (sum >= 10) {
      carry = 1
    } else {
      carry = 0
    }

    sum = sum % 10
    nextres.next = new ListNode(sum)
    nextres = nextres.next

    if (l1 != null) l1 = l1.next
    if (l2 != null) l2 = l2.next
  }
  if (carry) {
    nextres.next = new ListNode(carry)
  }
  return result.next
}

// 相较而言 链表是更费时间和空间的解法
// 链表解法
var addTwoNumbers = function (l1, l2) {
  let resListNode = null,
    tail = null
  let carry = 0
  while (l1 || l2) {
    let l1val = l1 ? l1.val : 0
    let l2val = l2 ? l2.val : 0
    let sum = l1val + l2val + carry
    carry = Math.floor(sum / 10)
    sum = sum % 10
    if (!resListNode) {
      resListNode = tail = new ListNode(sum)
    } else {
      tail.next = new ListNode(sum)
      tail = tail.next
    }
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (carry) {
    tail.next = new ListNode(1)
  }
  return resListNode
}
// @lc code=end
