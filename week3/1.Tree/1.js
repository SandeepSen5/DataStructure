
// Find the Maximum Depth or Height of a Tree

 
class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  function maxDepth(node) {
    if (node === null) {
      return 0;
    } else {
      const leftDepth = maxDepth(node.left);
      const rightDepth = maxDepth(node.right);
      return 1 + Math.max(leftDepth, rightDepth);
    }
  }

  const root = new Node(10);
  root.left = new Node(5);
  root.left.left = new Node(3);
  root.left.right = new Node(7);
  root.right = new Node(15);
  root.right.right = new Node(20);
  root.right.right.right = new Node(25);
  console.log(maxDepth(root));