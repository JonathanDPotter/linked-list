import ListNode from "./ListNode";

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  private headNode: ListNode | null;

  append(value: any) {
    const newNode = new ListNode(value);

    this.headNode === null
      ? (this.headNode = newNode)
      : (this.tail()!.nextNode = newNode);
  }

  prepend(value: any) {
    const newNode = new ListNode(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let currentNode = this.headNode;
    let count = 0;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let currentNode = this.headNode;
    let tailNode = this.headNode;

    while (currentNode !== null) {
      tailNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    return tailNode;
  }

  at(index: number) {
    let nodeIndex = 0;
    let currentNode = this.headNode;

    while (nodeIndex !== index && currentNode !== null) {
      nodeIndex++;
      currentNode = currentNode?.nextNode;
    }

    return currentNode;
  }

  pop() {
    this.at(this.size() - 2)!.nextNode = null;
  }

  contains(value: any) {
    let currentNode = this.headNode;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value: any) {
    let currentNode = this.headNode;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) return index;
      index++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  toString() {
    let currentNode = this.headNode;
    let result: string = "";

    while (currentNode !== null) {
      result += `(${currentNode?.value.toString()}) --> `;
      currentNode = currentNode.nextNode;
    }
    return result.substring(0, result.length - 5);
  }

  insertAt(value: any, index: number) {
    if (index >= this.size()) {
      this.append(value);
      return;
    }

    const newNode = new ListNode(value);
    let lastNode: ListNode | null = null;
    let currentNode = this.headNode;

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        newNode.nextNode = currentNode;
        i === 0 ? (this.headNode = newNode) : (lastNode!.nextNode = newNode);
        return;
      }
      lastNode = currentNode;
      currentNode = currentNode!.nextNode;
    }
  }

  removeAt(index: number) {
    if (index >= this.size()) {
      return;
    }

    let currentNode = this.headNode;
    let lastNode: ListNode | null = null;

    for (let i = 0; i < this.size(); i++) {
      if (index === i) {
        if (lastNode === null) {
          this.headNode = this.headNode!.nextNode;
        } else {
          lastNode.nextNode = currentNode!.nextNode;
        }
      }
      lastNode = currentNode;
      currentNode = currentNode!.nextNode;
    }
  }
}

export default LinkedList;
