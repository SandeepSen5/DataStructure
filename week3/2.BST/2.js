
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {

            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                } else {
                    current = current.right;
                }
            }
        }
    }

    findClosestValue(target) {
        let closest = this.root.data;
        let current = this.root;

        while (current) {
            if (target === current.data) {
                return current.data; // target is equal to the current current value, return it
            }

            if (Math.abs(target - current.data) < Math.abs(target - closest)) {
                closest = current.data;
            }

            if (target < current.data) {
                current = current.left;
            } else if (target > current.data) {
                current = current.right;
            } else {
                break;
            }
        }

        return closest;
    }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(10);
bst.insert(1);
bst.insert(3);

console.log(bst.findClosestValue(1)); // Output: 3
console.log(bst.findClosestValue(7)); // Output: 10
console.log(bst.findClosestValue(10)); // Output: 10




