class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1]) {
      this.adjacencyList[v1].push({ vertex: v2, weight });
    }
    if (!this.adjacencyList[v2]) {
      this.adjacencyList[v2].push({ vertex: v1, weight });
    }
  }
}

// simple priority queue
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(val, priority) {
    this.queue.push({ val, priority });
    this.queue.sort((a, b) => a.priority - b.priority); // O(n log n)
  }
  dequeue() {
    return this.queue.shift();
  }
}
