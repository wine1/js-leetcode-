
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

var mergeTwoLists = function(list1, list2) {
    const dummy=new ListNode()
    let current= dummy
    while(list1 && list2) {
        let node=null
        if(list1.val<list2.val) {
            node =new ListNode(list1.val)
            list1=list1.next
        }else {
            node =new ListNode(list2.val)
            list2=list2.next
        }
        current.next=node
        current=current.next
    }
    current.next=list1?list1:list2
    return dummy.next
};