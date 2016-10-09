// Generates Board and vertexs
var Vertex = require('./vertex.js')
var InnerVertex = require('./innerVertex.js')
var Edge = require('./edge.js')

module.exports = class Board {
  constructor(numberOfVertices, numberOfGenerators, numberOfSpawners){
    this.numberOfVertices = numberOfVertices;
    this.numberOfGenerators = numberOfGenerators;
    this.numberOfSpawners = numberOfSpawners;
    this.createMap();
  }

  get getNumberOfVertices(){
    return this.numberOfVertices
  }
  makeMove(vertices) {
    console.log(vertices)
    console.log(this.edges)
    for(var i=0; i< this.edges.length; i++) {
      if (this.edges[i].vertexA.xCoord == vertices.vertexA.xCoord && this.edges[i].vertexA.yCoord == vertices.vertexA.yCoord && this.edges[i].vertexB.xCoord == vertices.vertexB.xCoord && this.edges[i].vertexB.yCoord == vertices.vertexB.yCoord) {
        console.log("anti flow 5")
        this.edges[i].antiFlow = 5
      }
      else if (this.edges[i].vertexA.xCoord == vertices.vertexB.xCoord && this.edges[i].vertexA.yCoord == vertices.vertexB.yCoord && this.edges[i].vertexB.xCoord == vertices.vertexA.xCoord && this.edges[i].vertexB.yCoord == vertices.vertexA.yCoord) {
        console.log("anti flow -5")
        this.edges[i].antiFlow = -5
      }
    }
  }

  createMap(){
    console.log("creating map...")
    //skeleton vertices
    var b1 = new Vertex(12,0,200, 100,    600)
    var b2 = new Vertex(12,0,0,   400,  600)
    var b3 = new Vertex(12,200,0, 700,  600)
    var m1 = new Vertex(12,0,0,   250,  350)
    var m2 = new Vertex(12,0,0,   550,  350)
    var t1 = new Vertex(16,200,200,   400,  100)


    //TODO consider random positions for inner vertices
    //var randX = Math.floor(Math.random() * 2);
    //var randY = Math.floor(Math.random() * 1);

    //inner points (innerTop, innerMiddle, innerBottomLeft, innerBotttomRight)
    var iT  = new InnerVertex(9,0,0,  400, 266, [t1, m1, m2] )
    var iM  = new InnerVertex(9,0,0,  400, 433, [m1, m2, b2] )
    var iBL = new InnerVertex(9,0,0,  250, 500, [b1, b2, m1] )
    var iBR = new InnerVertex(9,0,0,  550, 500, [b2, b3, m2] )


    this.vertices = [b1,b2,b3,m1,m2,t1, iT, iM, iBL, iBR]

    //skeleton edges
    var edge1 = new Edge(b1,m1)
    var edge2 = new Edge(b3,m2)
    var edge3 = new Edge(m1,t1)
    var edge4 = new Edge(m2,t1)

    this.edges = [edge1, edge2, edge3, edge4]

    for ( var i = 6; i < 10; i++ ){
    var randomInFour = Math.floor(Math.random() * 3 + 1);
    if (randomInFour == 1) {
      this.edges.push(new Edge(this.vertices[i], this.vertices[i].getNeighbors[0]))
    }
    if (randomInFour == 2) {
      this.edges.push(new Edge(this.vertices[i], this.vertices[i].getNeighbors[0]))
      this.edges.push(new Edge(this.vertices[i], this.vertices[i].getNeighbors[1]))
    }
    if (randomInFour == 3) {
      this.edges.push(new Edge(this.vertices[i], this.vertices[i].getNeighbors[0]))
      this.edges.push(new Edge(this.vertices[i], this.vertices[i].getNeighbors[1]))
      this.edges.push(new Edge(this.vertices[i], this.vertices[i].getNeighbors[2]))

    }
    if (randomInFour == 4) {
      this.edges.push(new Edge(this.vertices[i], this.vertices[i].getNeighbors[0]))
      this.edges.push(new Edge(this.vertices[i], this.vertices[i].getNeighbors[1]))
      this.edges.push(new Edge(this.vertices[i], this.vertices[i].getNeighbors[2]))
      this.edges.push(new Edge(this.vertices[i], this.vertices[i].getNeighbors[3]))
    }
  }

  }

  getNeighbors(vertex){
    var neighbors = [];
    for (var i = 0; i< this.edges.length; i++){
      var other = this.edges[i].getOtherVertex(vertex)
      if(other) {
        neighbors.push(other)
      }
    }
    return neighbors
  }
  updateBoard(){
    for(var i=0;i<this.vertices.length;i++)
    {
      this.vertices[i].update();
    }
    for(var x=0;x<this.edges.length;x++)
    {
      this.edges[x].update();
    }
  }
}
