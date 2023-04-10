const {ListNode} = require("../extensions");

class Queue {
  constructor() {
    this.list = null;
    this.queue = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (!this.list) {
      this.list = node;
      this.queue = node;
    } else {
      this.queue.next = node;
      this.queue = node;
    }
  }

  dequeue() {
    const value = this.list.value;
    this.list = this.list.next;

    return value;
  }
}

module.exports = {
  Queue
};
