//c. Add a node at the end & beginning

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
    addnodeend(data) {
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
    addnodestart(data) {
        const newnode = new Node(data);
        if (this.head == null) {
            this.head = newnode;
            this.tail = newnode;
            this.size++;
            return;
        } else {
            newnode.next = this.head;
            this.head = newnode;
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
linked.addnodeend(10);
linked.addnodeend(20);
linked.addnodeend(30);
linked.addnodestart(9);
linked.addnodestart(8);
linked.printlist();