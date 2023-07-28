//implement a graph

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

  removeNode(node) {
    for (let n of this.nodes.values()) {
      let index = n.indexOf(node);
      if (index !== -1) {
        n.splice(index, 1);
      }
    }
    this.nodes.delete(node);
  }

  removeEdge(node1, node2) {
    let index1 = this.nodes.get(node1).indexOf(node2);
    if (index1 !== -1) {
      this.nodes.get(node1).splice(index1, 1);
    }
    if (this.isBidirectional) {
      let index2 = this.nodes.get(node2).indexOf(node1);
      if (index2 !== -1) {
        this.nodes.get(node2).splice(index2, 1);
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
const graph1 = new Graph(); // default is bidirectional
graph1.addNode(1);
graph1.addNode(2);
graph1.addEdge(1, 2);
console.log('Graph1 (bidirectional):');
graph1.print();

const graph2 = new Graph(false); // unidirectional
graph2.addNode(3);
graph2.addNode(4);
graph2.addEdge(3, 4);
console.log('Graph2 (unidirectional):');
graph2.print();







