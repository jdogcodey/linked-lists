// Class to make and run methods on LinkedLists
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    } else {
      this.tail().nextNode = new Node(value);
      return this;
    }
  }

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
      return this;
    } else {
      const currentHead = this.head;
      this.head = new Node(value, currentHead);
      return this;
    }
  }

  size() {
    let noOfNodes = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      noOfNodes++;
      currentNode = currentNode.nextNode;
    }
    return noOfNodes;
  }

  head() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    let nodeCount = this.head;
    for (let i = 0; i < index; i++) {
      nodeCount = nodeCount.nextNode;
    }
    if (nodeCount === null) {
      return null;
    } else {
      return nodeCount;
    }
  }

  pop() {
    let currentNode = this.head;
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode = null;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let nodeCount = 0;
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return nodeCount;
      } else {
        nodeCount++;
        currentNode = currentNode.nextNode;
      }
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let output = `( ${currentNode.value} )`;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      output = `${output} -> ( ${currentNode.value} )`;
    }
    output = `${output} -> null`;
    return output;
  }
}

// Class to make Nodes
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
