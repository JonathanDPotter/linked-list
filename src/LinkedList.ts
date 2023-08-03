import ListNode from "./ListNode";

class LinkedList {
  constructor() {
    this.headNode = null;
  }
  // headNode is the first item in the list it is initalized as null
  private headNode: ListNode | null;

  append(value: any) {
    // method creates a new ListNode and adds it to the end of the list
    const newNode = new ListNode(value);

    this.headNode === null
      ? (this.headNode = newNode)
      : (this.tail()!.nextNode = newNode);
  }

  prepend(value: any) {
    // method creates a new ListNode and adds it to the front of the list, making it the new HeadNode
    const newNode = new ListNode(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size(): number {
    // method counts the number of elements in the list and returns it as a number
    let currentNode = this.headNode;
    let count = 0;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  head(): ListNode | null {
    // method returns the headNode (which may be null)
    return this.headNode;
  }

  tail(): ListNode | null {
    // method returns the last ListNode (which may be the headNode, which may be null)
    let currentNode = this.headNode;
    let tailNode = this.headNode;

    while (currentNode !== null) {
      tailNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    return tailNode;
  }

  at(index: number): ListNode | null {
    // method returns the node at the supplied index
    let nodeIndex = 0;
    let currentNode = this.headNode;

    while (nodeIndex !== index && currentNode !== null) {
      nodeIndex++;
      currentNode = currentNode?.nextNode;
    }

    return currentNode;
  }

  pop() {
    // method removes the last ListNode from the list
    this.size() === 0 ? null : this.removeAt(this.size() - 1);
  }

  contains(value: any): boolean {
    // method returns true if the supplied value matches the value property of a ListNode object in the list, otherwise it returns false
    let currentNode = this.headNode;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value: any): number | null {
    // method returns the index of the ListNode that's value property matches the supplied value, if the supplied value is not in the list it returns null
    let currentNode = this.headNode;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) return index;
      index++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  toString(): string {
    // methof returns a string which contains the values of each ListNode object in order in parentheses with an arrow --> between them
    let currentNode = this.headNode;
    let result: string = "";

    while (currentNode !== null) {
      result += `(${currentNode?.value.toString()}) --> `;
      currentNode = currentNode.nextNode;
    }
    return result.substring(0, result.length - 5);
  }

  insertAt(value: any, index: number) {
    // method inserts a new ListNode with the supplied value at the supplied index
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
    // method removes the LisNode at the supplied index
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
