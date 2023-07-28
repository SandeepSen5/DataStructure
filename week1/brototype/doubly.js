class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    addNode(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
    }
    printList() {
        let currentNode = this.head;
        while (currentNode !== null) {
          console.log(currentNode.data);
          currentNode = currentNode.next;
        }
      }
      printListrve() {
        let currentNode = this.tail;
        while (currentNode !== null) {
          console.log(currentNode.data);
          currentNode = currentNode.prev;
        }
      }
    }
    const list = new DoublyLinkedList();
    list.addNode(1);
    list.addNode(2);
    list.addNode(3);

     list.printList(); 
     list.printListrve();


    
//     removeNode(node) {
//       if (node === this.head && node === this.tail) {
//         this.head = null;
//         this.tail = null;
//       } else if (node === this.head) {
//         this.head = this.head.next;
//         this.head.prev = null;
//       } else if (node === this.tail) {
//         this.tail = this.tail.prev;
//         this.tail.next = null;
//       } else {
//         const prevNode = node.prev;
//         const nextNode = node.next;
//         prevNode.next = nextNode;
//         nextNode.prev = prevNode;
//       }
//       this.length--;
//     }
  
    
  
//   // Example usage:
//   const list = new DoublyLinkedList();
//   list.addNode(1);
//   list.addNode(2);
//   list.addNode(3);
//   list.removeNode(list.head.next);
//   list.printList(); // Output: 1 3