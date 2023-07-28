class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function createLinkedListFromArray(arr) {
    if (arr.length === 0) {
        return null;
    }
    let head = new Node(arr[0]);
    let currentNode = head;
    for (let i = 1; i < arr.length; i++) {
        currentNode.next = new Node(arr[i]);
        currentNode = currentNode.next;
    }
    return head;
}

// Example usage
let arr = [1, 2, 3, 4, 5];
let head = createLinkedListFromArray(arr);
console.log(head);









