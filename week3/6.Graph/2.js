//implement BFS traversal

class Graph {
  constructor(isBidirectional = true) {
    this.nodes = new Map();
    this.isBidirectional = isBidirectional;
  }

  addNode(node) {
    this.nodes.set(node, []);
  }
 
  addEdge(node1, node2) {
    this.nodes.get(node1).push(node2);
    if (this.isBidirectional) {
      this.nodes.get(node2).push(node1);
    }
  }

  bfsTraversal(startNode) {
    const visited = new Set(); // Initialize a set to track visited nodes
    const queue = [startNode]; // Initialize a queue with the starting node

    visited.add(startNode); // Mark the starting node as visited

    while (queue.length > 0) {
      const currentNode = queue.shift(); // Get the next node from the queue
      console.log(currentNode); // Print the current node
      const neighbors = this.nodes.get(currentNode); // Get the neighbors of the current node
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) { // If the neighbor has not been visited
          visited.add(neighbor); // Mark the neighbor as visited
          queue.push(neighbor); // Add the neighbor to the queue
        }
      }
    }
  }

  print() {
    for (let [node, edges] of this.nodes) {
      console.log(`${node} -> ${edges.join(', ')}`);
    }
  }
}

// Example usage
const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

console.log('BFS Traversal starting from node 1:');
graph.bfsTraversal(1);








