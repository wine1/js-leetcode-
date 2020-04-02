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
var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let carry = 0;
    let result = new ListNode(null);
    let nextres = result;
    while (l1 !== null || l2 !== null) {
      let x = l1 !== null ? l1.val : 0;
      let y = l2 !== null ? l2.val : 0;
      sum = x + y + carry;
      if (sum >= 10) {
        carry = 1;
      }else {
          carry=0;
      }
      
      sum = sum % 10;
      nextres.next=new ListNode(sum);
      nextres=nextres.next;
  
      if(l1 != null) l1 = l1.next
      if(l2 != null) l2 = l2.next        
    }
    if(carry) {
        nextres.next=new ListNode(carry);
    }
    return result.next;
  };
  