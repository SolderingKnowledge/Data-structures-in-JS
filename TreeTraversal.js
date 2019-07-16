class Node {
    constructor(data){
      this.data = data;
      this.children = [];
    }
    add(data){
      this.childrens.push(new Node(data));
    }
    remove(data){
      this.children = this.children.filter(d =>{
        return d !== data;
      })
    }
    breadFirst(fn){
      const a = [this.root];
      while(a.length){
        const node = arr.shift();//take out the first node;
        a.push(...node.children);//and insert the children at the end
        fn(node);//calling iterator function
      }
    }
    depthFirst(fn){
      const a = [this.root];
      while(a.length){
        const node = a.shift();
        a.unshift(...node.children);
        fn(node);//caling iterator function
      }
    }
  }
  
  class Tree{
    constructor(){
      this.root = null;
    }
  }
  const node = new Node('div');
  const tree = new Tree();
  tree.root = node;
  tree;