class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead(value){
    var newNode = new Node(value, this.head, null);
    if(this.head) this.head.prev = newNode;//if currentNode
    else this.tail = newNode;
    this.head = newNode;
  }
  addToTail(value) {
    var newNode = new Node(value, null, this.tail);
    var currentNode = this.tail;
    if (currentNode) currentNode.next = newNode;
    else this.head = newNode;
    currentNode = newNode;
  }
  removeHead() {
    if (!this.head) return null;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return this.head.value;;
  }
  removeTail() {
    if (!this.tail) return null;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null
    return this.tail.value;;
  }
  search(searchValue) {
    while (this.head) {
      if(this.head.value == searchValue) return this.head.value;
      this.head = this.head.next;
    }
    return null;
  }
}

var linkedlist = new LinkedList();
linkedlist.addToHead("Tony Stark");
linkedlist.addToTail("Peter Parker");
var searched = linkedlist.search("Tony Stark");
searched;
