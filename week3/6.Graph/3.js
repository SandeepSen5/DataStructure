
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
  
  print() {
    for (let [node, edges] of this.nodes) {
      console.log(`${node} -> ${edges.join(', ')}`);
    }
  }

  dfs(startNode) {
    const visited = new Set();
    const stack = [startNode];
    visited.add(startNode);

    while (stack.length > 0) {
      const node = stack.pop();
      console.log(node);

      for (const neighbor of this.nodes.get(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
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

console.log('DFS traversal starting from node 1:');
graph.dfs(1);
