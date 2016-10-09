// Generates Board and vertexs

import Vertex from './vertex.js';
import InnerVertex from './InnerVertex.js'
import Edge from './edge.js';
import Generator from './generator.js';
import Spawner from './spawner.js';
import Map from './map.js';

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
    var map = new Map(1);
    map.genMap();
    this.vertices = map.getVertices
    this.edges = map.getEdges
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
