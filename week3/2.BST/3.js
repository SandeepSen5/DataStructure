

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

    contains1(data) {
        let current = this.root;
        while (current != null) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    isBST(node, min = null, max = null) {
        if (!node) {
            return true;
        }
        if ((min && node.data <= min) || (max && node.data >= max)) {
            return false;
        }
        const leftIsValid = this.isBST(node.left, min, node.data);
        const rightIsValid = this.isBST(node.right, node.data, max);
        return leftIsValid && rightIsValid;
    }
}


let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.insert(4);
tree.insert(9);
console.log(tree.contains1(4));

console.log(tree.isBST(10));


