class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(data) {
        const newNode = new Node(data);
        if (this.rear === null) {
            this.rear = newNode;
            this.front = newNode;
            return;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }
    dequeue() {
        if (this.front == null) {
            console.log("empty");
        }
        this.front = this.front.next;
        if (this.front == null) {
            this.rear = null;
        }
    }

    printList() {
        let current = this.front;
        while (current !== null) {
            console.log(current);
            current = current.next;
        }     
    }
}
let linked = new LinkedList();
linked.enqueue(10);
linked.enqueue(20);
linked.enqueue(30);
linked.dequeue();
linked.printList();