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
      this.getTail().nextNode = new Node(value);
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

  getHead() {
    return this.head;
  }

  getTail() {
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    let nodeCount = this.head;
    for (let i = 0; i < index; i++) {
      if (nodeCount.nextNode === null) {
        break;
      } else {
        nodeCount = nodeCount.nextNode;
      }
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
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
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
    if (currentNode === null) {
      return null;
    }
    let output = `( ${currentNode.value} )`;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      output = `${output} -> ( ${currentNode.value} )`;
    }
    output = `${output} -> null`;
    return output;
  }

  removeAt(index) {
    if (this.at(index) === null) {
      return false;
    } else if (this.at(index).nextNode === null) {
      this.pop();
      return true;
    } else {
      const currentNextNode = this.at(index).nextNode;
      this.at(index - 1).nextNode = currentNextNode;
      return true;
    }
  }
}

// Class to make Nodes
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const test = new LinkedList();
console.log(test.append(1));
console.log(test.append(2));
console.log(test.append(3));
console.log(test.append(4));
console.log(test.prepend(5));
console.log(test.prepend(6));
// console.log(test.size());
// console.log(test.getHead());
// console.log(test.getTail());
// console.log(test.at(3));
// console.log(test.pop());
// console.log(test.contains(4));
// console.log(test.find(4));
// console.log(test.contains(2));
// console.log(test.find(2));
// console.log(test.toString());
console.log(test.toString());
console.log(test.removeAt(7));
console.log(test.toString());
