class ListNode {
  value: number
  next: ListNode | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  head: null | ListNode
  tail: null | ListNode

  constructor() {
    this.head = null
    this.tail = null
  }

  addNodeToEnd(newNode: ListNode): LinkedList {
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode

    } else {
      this.tail.next = newNode
      this.tail = newNode

    }

    return this
  }

  removeNodeFromHead() {
    const headNode = this.head
    this.head = this.head?.next || null

    return headNode
  }
}

module.exports = {
  LinkedList,
  ListNode
}

export {}
