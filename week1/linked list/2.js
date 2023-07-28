//b.	Convert array to a linked list
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
}
function coverter(array) {
    let linked = new linkedlist();
    // for (let i = 0; i < array.length; i++) 
    for (let i of array){
        linked.addnode(i);
    }
    linked.printlist();
}
let array = [10, 20, 30, 40];
coverter(array);




