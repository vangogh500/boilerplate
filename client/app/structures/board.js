// Generates Board and vertexs

import Vertex from './vertex.js';
import InnerVertex from './InnerVertex.js'
import Edge from './edge.js';
import Generator from './generator.js';
import Spawner from './spawner.js';

export default class Board {
  constructor(numberOfVertices, numberOfGenerators, numberOfSpawners){
    this.numberOfVertices = numberOfVertices;
    this.numberOfGenerators = numberOfGenerators;
    this.numberOfSpawners = numberOfSpawners;
    this.createMap();
  }

  get getNumberOfVertices(){
    return this.numberOfVertices
  }

  createMap(){
    console.log("creating map...")
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

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

  drawMap(ctx) {
    for(var i=0; i<this.edges.length; i++) {
      this.drawEdge(this.edges[i], ctx)
    }
    for(var i=0; i<this.vertices.length; i++) {
      this.drawVertex(this.vertices[i], ctx)
    }
  }

  drawVertex(vertex, ctx){
    // get canvas
    if(vertex == self.selected) {
        ctx.lineWidth = 12
      }
    else if(vertex == self.hover) {
      ctx.lineWidth = 4
    }
    ctx.beginPath();
    ctx.fillStyle = vertex.getColor() // color based on population of both sides
    ctx.arc(vertex.getXCoord, vertex.getYCoord, (vertex.getSpawnRate * 4),0,2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.arc(vertex.getXCoord, vertex.getYCoord, (vertex.getSpawnRate * 4),0,2*Math.PI);
    ctx.stroke();

    ctx.lineWidth = 1
  }
  drawEdge(edge, ctx){
    // get canvas
    ctx.beginPath();
    ctx.strokeStyle="black"; // Black path

    ctx.moveTo(edge.getVertexA.getXCoord,edge.getVertexA.getYCoord);
    ctx.lineTo(edge.getVertexB.getXCoord,edge.getVertexB.getYCoord);

    ctx.stroke();
  }

  onClick(x,y) {
    self.selected = null;
    self.hover = null;
    for(var i=0; i<this.vertices.length; i++) {
      var verX = this.vertices[i].getXCoord
      var verY = this.vertices[i].getYCoord
      var distX = Math.abs(verX-x)
      var distY = Math.abs(verY-y)
      var hyp = Math.floor(Math.sqrt(Math.pow(distX,2)+Math.pow(distY,2)))
      if (hyp < 50) {
        self.selected = this.vertices[i]
        break
      }
    }
  }
  onHover(x,y, cb) {
    var neighbors = this.getNeighbors(self.selected)
    for(var i=0; i<neighbors.length; i++) {
      var verX = neighbors[i].getXCoord
      var verY = neighbors[i].getYCoord

      var distX = Math.abs(verX-x)
      var distY = Math.abs(verY-y)

      var hyp = Math.floor(Math.sqrt(Math.pow(distX,2)+Math.pow(distY,2)))
      if (hyp < 50) {
        self.hover = neighbors[i]
        cb()
        break
      }
    }
  }
  updateBoard(){
    for(var i=0;i<this.vertices.length;i++)
    {
      this.vertices[i].update();
    }
    for(var i=0;i<this.edges.length;i++)
    {
      this.edges[i].update();
    }
  }
}
