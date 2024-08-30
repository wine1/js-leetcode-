// 链表结构 双向链表好删除尾节点
class Node {
  constructor(key = 0, value = 0) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

// 初始化 限制最长为capacity
// 创建一个hashmap储存key和node 方便读取
// 创建哨兵节点保证指针永不只指向空
/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    // 创建一个哨兵结点 并创建双向链表
    this.sentinel = new Node()
    this.sentinel.next = this.sentinel
    this.sentinel.prev = this.sentinel
    this.hashmap = new Map()
  }

  /**
   * 取出node后将其放到链表头
   * @param {*} key 
   * @returns 
   */
  getNode(key) {
    if (!this.hashmap.has(key)) {
      return null
    }
    let node = this.hashmap.get(key)
    this.removeNode(node)
    this.pushFront(node)
    return node
  }

  /**
   * 删除结点
   * @param {*} node 
   */
  removeNode(node) {
    node.next.prev = node.prev
    node.prev.next = node.next
  }

  /**
   * 把结点添加到链表头 哨兵之后
   * @param {*} node 
   */
  pushFront(node) {
    node.prev = this.sentinel
    node.next = this.sentinel.next
    this.sentinel.next = node
    node.next.prev = node
  }

  /** 
 * @param {number} key
 * @return {number}
 */
  get(key) {
    let node = this.getNode(key)
    return node ? node.value : -1
  }

  /** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

  /**
   * hash表中查找 如果存在的话就更改值 不存在的话就set进hash表中
   * @param {*} key 
   * @param {*} value 
   */
  put(key, value) {
    let node = this.getNode(key)
    if (node) {
      node.value = value
      return
    }
    node = new Node(key, value)
    this.pushFront(node)
    this.hashmap.set(key, node)
    if (this.hashmap.size > this.capacity) {
      const lastNode = this.sentinel.prev
      this.removeNode(lastNode)
      this.hashmap.delete(lastNode.key)
    }
  };
}


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */