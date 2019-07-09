class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SLL{
  constructor(){
    this.head= null;
    this.tail= null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    if(!this.head){//if it's empty list
      this.head = newNode;
      this.tail = this.head;//both pointing to new Node but below we're updating the tail
    }else{//if list is not empty
      this.tail.next = newNode;
      this.tail = newNode;//updating the tail 
    }
    this.length++;
    return this;//return the whole List
  }
  pop(){
    // a ->     b ->          c
    //                     current
    //        newtail
    let current = this.head;
    let newTail = current;//they both start at the begining
    while(current.next){
      newTail = current;
      current = current.next;//move current forward
    }
    this.tail = newTail;//prev is going to be current
    this.tail.next = null;//deleting meaning assigning to null
    this.length--;
    return current;
  }
  reverse(){
    let node = this.head;//current -> head;  swapping
    this.head = this.tail;// head -> tail;
    this.tail = node;// tail -> current;
    let next=null;
    let prev = null;
    for(let i=0; i<this.length; i++){
      next = node.next;//undefined -> next; other way of swapping
      node.next = prev;//next -> prev 
      prev = node;// prev -> current 
      node = next;//current -> next
    }
    return this;
  }
}





let sll = new SLL();
sll.push('a');
sll.push('b');
sll.push('c');
sll.push('d');
sll;



































// let start = new Node('Can');
// start.next = new Node('you');
// start.next.next = new Node("help");
// start.next.next.next = new Node("me");
// start.next.next.next.next = new Node("?");