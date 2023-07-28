class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.top = null;
    }
    push(data) {
        const newNode = new Node(data);
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top
            this.top = newNode;
        }
    }
    pop1() {
        if (this.top == null) {
            console.log("stack underflow");
            return;
        }
        this.top = this.top.next;
    }
    printList() { 
        let current = this.top;
        while (current !== null) {
            console.log(current);
            current = current.next;
        }
    }
}
let linked = new LinkedList();
linked.push(10);
linked.push(20);
linked.push(30);
linked.pop1();
linked.printList();




