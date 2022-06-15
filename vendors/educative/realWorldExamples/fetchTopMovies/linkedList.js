"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addNodeToEnd(newNode) {
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this;
    }
    removeNodeFromHead() {
        const headNode = this.head;
        this.head = this.head?.next || null;
        return headNode;
    }
}
module.exports = {
    LinkedList,
    ListNode
};
//# sourceMappingURL=linkedList.js.map