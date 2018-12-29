class Node{
  constructor(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}
class HashTable{
  constructor(size){
    this.buckets = Array(size);
    this.buckets_amount = this.buckets.length;
  }
  hash(key){
    var total = 0;
    for(var i=0; i<key.length; i++){
      total+=key.charCodeAt(i);
    }
    var bucket = total % this.buckets_amount;
    return bucket;
  }
  insert(key, value){
    var index = this.hash(key);
    if(!this.buckets[index]){ //if not currentNode
      this.buckets[index] = new Node(key, value);
    }
    else if(this.buckets[index].key == key){//currentNode.key == given key
      this.buckets[index].value = value;
    }
    else{
      while(this.buckets[index].next){ 
        if(this.buckets[index].next.key == key){
          this.buckets[index].next.value = value;
          return;
        }
        this.buckets[index] = this.buckets[index].next;
      }
      this.buckets[index].next = new Node(key, value);
    }
  }
  retrieve(key){
    var index = this.hash(key);
    var currentNode = this.buckets[index];
    if(!currentNode) return null;
    else{
      while(currentNode){
        if(currentNode.key == key) return currentNode.value;
        currentNode = currentNode.next;//"next" will break the loop
      }
      return null;
    }
  }
  getAll(){
    var Nodes = [];
    for( var i=0; i<this.buckets_amount; i++){
      while(this.buckets[i]){ //while currentNode
        Nodes.push(this.buckets[i]);
        this.buckets[i] = this.buckets[i].next;//"next" will break the loop
      }
    }
    return Nodes;
  }
}

var hashtable = new HashTable(7);
hashtable.insert("Tina", 'tina@icloud.com');
hashtable.insert("Timoor", 'timoor@yahoo.com');
hashtable.getAll();