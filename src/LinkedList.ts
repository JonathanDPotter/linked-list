import ListNode from "./ListNode";

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  private headNode: ListNode | null;

  append(value: any) {
    this.headNode !== null
      ? (this.headNode.nextNode = new ListNode(value))
      : (this.headNode = new ListNode(value));
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
    //returns boolean for if item is in the list
  }

  find(value: any) {
    //returns the index of the value passed || returns false
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
    //iserts a new node with value at index
  }

  removeAt(index: number) {
    //removes node at given index
  }
}

export default LinkedList;
