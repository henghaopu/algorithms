class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // add(data) {
  //   this.children.push(new Node(data));
  // }

  // remove(data) {
  //   this.children = this.children.filter(child => child.data !== data);
  // }

  // breadth first search
  // bfs(value) {
  bfs() {
    const queue = [];
    // enqueue the only discoverd node - root
    // queue.push(this.root)
    queue.push(this)

    while(queue.length) {
      // dequeue (shift out) visited node
      let node = queue.shift();
      
      // for traversing
      console.log(node.data);
      
      // for searching 
      // if (node.data === value) { return true; }
      
      if (node.children.length !== 0) {
        // enqueue discovered nodes - children
        queue.push(...node.children);
      }
    }
    return false;
  }

  // pre-order 
  dfsIterative() {
    const stack = []
    // push
    stack.unshift(this)

    while(stack.length > 0) {
      // pop
      let node = stack.shift()
      console.log(node.data)

      if (node.children.length !== 0) {
        // push
        stack.unshift(...node.children)
      }
    }
  }

  // pre-order
  dfsRecursive() {
    this._dfsHelper(this);
  }

  _dfsHelper(node) {
    console.log(node.data)

    if (node.children.length > 0) {
      node.children.forEach(child => {
        this._dfsHelper(child)
      })
    }
  }


}


const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
a.children = [b, c, d]
b.children = [e, f]

a.bfs()
a.dfsIterative()
a.dfsRecursive()