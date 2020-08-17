/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */

// 声明两个链表 遍历链表  一段存放小于x 另一段存放大于等于x 最后将两段链表连接起来

// 声明哑结点 避免结点为null的判断 注意在输出结果或者进行一些别的操作时要将指针往后移一位 去除哑结点
var partition = function(head, x) {
    let before_head = new ListNode(0);
    let after_head = new ListNode(0);
    let before = before_head;
    let after = after_head;
  
    while (head) {
      if (head.val < x) {
        before.next = head;
        before=before.next
      } else {
        after.next = head;
        after=after.next
      }
      head=head.next
    }
    // 注意这里将after.next置空
    after.next=null
    before.next = after_head.next;
    console.log(before_head.next)
    return before_head.next;
  };
  