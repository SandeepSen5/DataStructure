// implement a Queue using an array in JavaScript

class Queue {
  constructor() {
    this.items = []; // initialize an empty array to store the queue elements
  }

  // enqueue method to add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // dequeue method to remove an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // front method to return the first element in the queue
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // isEmpty method to check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // size method to return the number of elements in the queue
  size() {
    return this.items.length;
  }

  // print method to display the queue elements
  print() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

// Example usage:
let queue = new Queue();
console.log(queue.isEmpty()); // true
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.print()); // "1 2 3 4"
console.log(queue.size()); // 4
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.front()); // 3
console.log(queue.print()); // "3 4"
