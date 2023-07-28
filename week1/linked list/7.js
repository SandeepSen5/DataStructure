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
    removeduplicates() {
        let current = this.head;
        let next1;
        while (current != null) {
            next1 = current.next;
            while (next1 != null && next1.data == current.data) {
                next1 = next1.next;
            }
            current.next = next1;

            if (next1 == this.tail && next1.data == current.data) {
                this.tail = current;
                this.tail.next = null;
            }
            current = next1;
        }
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
linked.addnode(10);
linked.addnode(10);
linked.addnode(20);
linked.addnode(20);
linked.addnode(20);
linked.addnode(30);
linked.addnode(30);
linked.addnode(30);
linked.removeduplicates();
linked.printlist();
