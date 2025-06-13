interface IChainNode {
  key: number
  value: number
  prev: any
  next: any
}

// 构建一个双向链表结点
class ChainNode {
  public key
  public value
  public prev: any
  public next: any
  constructor(key: number = 0, value: number = 0) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

class LRUCache {
  private len
  private hash
  public sentinel
  constructor(capacity: number) {
    this.len = capacity
    this.hash = new Map()
    // 创建一个哨兵结点 并创建双向链表
    // 通过创建哨兵结点，避免链表完全null的情况
    this.sentinel = new ChainNode()
    this.sentinel.prev = this.sentinel
    this.sentinel.next = this.sentinel
  }

  // 获取关键字key所在链表结点的值


  // 将关键字插入到链表头 哨兵结点之后
  putHead(key: number) {
    if (!this.hash.has(key)) {
      return null
    }

  }

  // 删除链表中的结点
  deleteNode(node: IChainNode) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

  get(key: number) {

  }

  put(key: number) {

  }
}