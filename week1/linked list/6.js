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
    printlist() {
        let current = this.head;
        while (current != null) {
            console.log(current);
            current = current.next;
        }
    }
    // Print all nodes in the linked list by reverse order
    printReverseList() {
        let current = this.tail;

        while (current!== null) {
            console.log(current.data);
            current= this.getPreviousNode(current);
        }
    }

    // Helper function to get the previous node
    getPreviousNode(node) {
        let current = this.head;
        while (current !== null) {
            if (current.next === node) {
                return current;
            }
            current = current.next;
        }
    }
}
let linked = new linkedlist();
linked.addnode(10);
linked.addnode(20);
linked.addnode(30);
linked.printlist();
linked.printReverseList();