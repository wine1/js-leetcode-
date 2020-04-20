// 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

// 示例:

// 输入:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 输出: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let temp = [];
    let count = 0;
    let len = lists.length;
    if (len == 0) return null;
    if (len == 1) return lists[0];
    for (let i = 0; i < len; i++) {
      while (lists[i]) {
        temp[count++] = lists[i].val;
        lists[i] = lists[i].next;
      }
    }
    temp.sort((a,b)=>a-b);
    let head=new ListNode();
    let cur=head;
    for(let i=0;i<temp.length;i++) {
        let node =new ListNode(temp[i]);
        cur.next=node;
        cur=cur.next;
    }
    return head.next;
  
  
  
    return temp;
  };