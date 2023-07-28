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
            console.log(current.data);
            current = current.next;
        }
    }
}


let linked = new linkedlist();
linked.addnode(10);
linked.addnode(20);
linked.addnode(30);
linked.printlist();  



