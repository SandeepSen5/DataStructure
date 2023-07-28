class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addNode(data) {
        const newNode = new Node(data);
        let current = this.head;
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    // delete using value
    remove(data) {
        let currentNode = this.head;
        let previousNode = null;
        if (currentNode != null && currentNode.data == data) {
            this.head = currentNode.next;
            return;
        }
        while (currentNode != null && currentNode.data != data) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode == null) {
            return;
        }
        if (currentNode.next == null) {
            currentNode = previousNode;
            currentNode.next = null;
        }
        previousNode.next = currentNode.next;
    }
    // //inset a value in between

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
            return;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    // to remove duplicate elements in a sorted array

    removeduplicates() {
        let current = this.head;
        let next1 = null;
        while (current != null) {
           next1 = current.next;
            while (next1 != null && next1.data == current.data) {
                next1 = next1.next;
            }
            current.next = next1;
            if(next1.next==null && next1.data == current.data){
               current=next1; 
            }
        }
    }
   
}
let linked = new LinkedList();
linked.addNode(10);
linked.addNode(10);
linked.addNode(10);
linked.addNode(20);
linked.addNode(30);
linked.addNode(30);
linked.addNode(30);
linked.addNode(30);
linked.addNode(40);
linked.addNode(50);
linked.insertafter(10, 5)
// linked.removeduplicates();
linked.printList();

