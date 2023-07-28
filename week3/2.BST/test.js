class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class bst {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let newnode = new Node(data)
        if (this.root == null) {
            this.root = newnode;
            return;
        }
        let current = this.root;
        while (true) {
            if (data < current.data) {
                if (current.left == null) {
                    current.left = newnode;
                    return;
                }
                else {
                    current = current.left;
                }
            } else {
                if(current.right==null){
                    current=newnode;
                    return;
                }else{
                    current=current.right
                }

            }
        }
    }
}






