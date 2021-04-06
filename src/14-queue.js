const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.first) {
      this.last.next = node;
      this.last = node;
    } else {
      this.first = node;
      this.last = node;
    }
  }

  dequeue() {
    const node = this.first;
    this.first = this.first.next;
    return node.value;
  }
}

module.exports = Queue;
