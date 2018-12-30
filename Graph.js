class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addNode(node){
        if(!this.adjacencyList[node]) this.adjacencyList[node] = [];
    }
		removeNode(node){
        while(this.adjacencyList[node].length){
            const adjacentNode = this.adjacencyList[node].pop();
            this.removeConnection(node, adjacentNode);
        }
        delete this.adjacencyList[node]
    }
    addConnection(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeConnection(node1,node2){
      this.adjacencyList[node1] = this.adjacencyList[node1].filter( n => n !== node2);
      this.adjacencyList[node2]= this.adjacencyList[node2].filter(n => n !== node1);
    }
}

var graph = new Graph();
graph.addNode("Rome, Italy");
graph.addNode("Warsaw, Poland");
graph.addNode("San Francisco, USA");
graph.addConnection("San Francisco, USA", "Warsaw, Poland");
graph.removeNode("Rome, Italy");
// graph.removeConnection("Warsaw, Poland", "San Francisco, USA");
graph;
