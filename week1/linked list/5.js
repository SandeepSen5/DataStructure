class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addnode(data) {
        const newnode = new Node(data);
        let current = this.head;
        if (this.head == null) {
            this.head = newnode;
            this.tail = newnode;
            this.size++;
            return;
        }
        while (current.next != null) {
            current = current.next
        }
        current.next = newnode;
        this.tail = newnode;
        this.size++;
    }
    insertafter(nextto, data) {
        const newNode = new Node(data);
        let current = this.head;
        while (current != null && current.data != nextto) {
            current = current.next;
        }
        if (current == null) {
            return;
        }
        if (current.next == null) {
            current.next = newNode;
            current = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    insertbefore(nextto, data) {
        const newNode = new Node(data);
        let current = this.head;
        let previous = null;
        while (current != null && current.data == nextto) {
            newNode.next = current;
            this.head = newNode;
            return;
        }
        while (current != null && current.data != nextto) {
            previous = current;
            current = current.next;
        }
        if (current == null) {
            return;
        }
        newNode.next = current;
        previous.next = newNode;
    }
    printlist() {
        let current = this.head;
        while (current != null) {
            console.log(current);
            current = current.next;
        }
    }
}
let linked = new linkedlist();
linked.addnode(10);
linked.addnode(20);
linked.addnode(30);
linked.insertafter(30, 50);
linked.insertbefore(10, 60);
linked.printlist();