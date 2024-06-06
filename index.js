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
      this.tail().next = new Node(value);
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
    while (currentNode != null) {
      noOfNodes++;
      currentNode = currentNode.next;
    }
    return noOfNodes;
  }

  head() {}

  tail() {}

  at(index) {}

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {}
}

// Class to make Nodes
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
