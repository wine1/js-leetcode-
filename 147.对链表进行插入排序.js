/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var insertionSortList = function (head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode(Math.min);
  dummy.next = head;

  let lastNode = head  // 已排序的最后一个节点
  let curr = head.next  // 待插入的节点

 while(curr) {
    if(lastNode.val<curr.val) {
        lastNode=curr
    }else {
        let prev=dummy
        while(prev.next && prev.next.val<curr.val) {
            prev=prev.next
        }
        lastNode.next=curr.next
        curr.next=prev.next
        prev.next=curr
    }
    curr=lastNode.next
 }
  return dummy.next;
};
// @lc code=end

// 辅助函数：创建链表
function createList(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

// 辅助函数：将链表转换为数组以便打印
function listToArray(head) {
  const result = [];
  let curr = head;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}

// 测试用例
console.log("=== 链表插入排序测试 ===");

// 测试用例1: [4,2,1,3]
const test1 = createList([4, 2, 1, 3]);
console.log("原链表:", listToArray(test1));
const sorted1 = insertionSortList(test1);
console.log("排序后:", listToArray(sorted1));

// 测试用例2: [-1,5,3,4,0]
const test2 = createList([-1, 5, 3, 4, 0]);
console.log("\n原链表:", listToArray(test2));
const sorted2 = insertionSortList(test2);
console.log("排序后:", listToArray(sorted2));

// 测试用例3: []
const test3 = createList([]);
console.log("\n原链表:", listToArray(test3));
const sorted3 = insertionSortList(test3);
console.log("排序后:", listToArray(sorted3));

// 测试用例4: [1]
const test4 = createList([1]);
console.log("\n原链表:", listToArray(test4));
const sorted4 = insertionSortList(test4);
console.log("排序后:", listToArray(sorted4));
