var reorderList = function (head) {
  if (head == null || head.next == null) return head
  let fast = head,
    slow = head

  // 寻找链表中点 // 快指针步长为2 慢指针步长为1
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  //链表中点为 slow
  // 链表逆序
  const reverseLink = head => {
    let p1 = head
    let l1 = null
    while (p1) {
      let p2 = p1.next
      p1.next = l1
      l1 = p1
      p1 = p2
    }
    return l1
  }

  slow = reverseLink(slow)
  // 合并链表
  let list = head
  while (slow && list) {
    next = list.next
    list.next = slow
    slow = slow.next
    if (!slow) {
      list.next.next = null
    } else {
      list.next.next = next
      list = next
    }
  }
}
