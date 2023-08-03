class ListNode {
  constructor(value: any) {
    this.value = value;
    this.nextNode;
  }

  public value: any = null;
  public nextNode: ListNode | null = null;

  toString(): string {
    // method returns the value of the listNode as a string
    return this.value.toString();
  }
}

export default ListNode;