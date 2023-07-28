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


    remove(data) {
        this.removeHelper(data, this.root, null);
    }


    removeHelper(data, current, parent) {
        while (current != null) {
            if (data < current.data) {
                parent = current;
                current = current.left;
            } else if (data > current.data) {
                parent = current;
                current = current.right;
            } else {
                if (current.left != null && current.right != null) {
                    current.data = this.getminvalue(current.right);
                    this.removeHelper(current.data, current.right, current)
                } else {
                    if (parent == null) {
                        if (current.right == null) {
                            this.root = current.left;
                        } else {
                            this.root = current.right;
                        }
                    } else {
                        if (parent.left == current) {
                            if (current.right == null) {
                                parent.left = current.left
                            } else {
                                parent.left = current.right; 
                            }
                        } else {
                            if (current.left == null) {    
                                parent.right = current.right;
                            } else {
                                parent.right = current.left
                            }
                        }
                    }
                }
                break;
            }
        }
    }


    getminvalue(current) {
        if (current.left == null) {
            return current.data;
        } else {
            return getminvalue(current.left);
        }
    }

    inorder() {
        this.inorderHelper(this.root);
    }

    
    inorderHelper(node) {
        if (node != null) {
            this.inorderHelper(node.left);
            console.log(node.data);
            this.inorderHelper(node.right);
        }
    }

    preorder() {
        this.preorderHelper(this.root);
    }

    preorderHelper() {
        if (node != null) {
            console.log(node.data);
            this.preorderHelper(node.left);
            this.preorderHelper(node.right);
        }
    }

    postorder() {
        this.postorder(this.root)
    }

    postorderHelper() {
        if (node != null) {
            this.postorderHelper(node.left);
            this.postorderHelper(node.right);
            console.log(node.data);
        }
    }

}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.insert(4);
tree.insert(9);
// tree.remove(8);
// console.log(tree.contains1(8));
tree.inorder();





