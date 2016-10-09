// Generates Board and vertexs

import Vertex from './vertex.js';
import InnerVertex from './InnerVertex.js'
import Edge from './edge.js';
import Generator from './generator.js';
import Spawner from './spawner.js';
import Map from './map.js';

export default class Board {
  constructor(board){
    this.numberOfVertices = board.numberOfVertices;
    this.numberOfGenerators = board.numberOfGenerators;
    this.numberOfSpawners = board.numberOfSpawners;
    this.vertices = board.vertices
    this.edges = board.edges
  }

  update(board) {
    this.vertices = board.vertices
    this.edges = board.edges
  }
  draw(ctx) {
    for(var i=0; i<this.edges.length; i++) {
      this.drawEdge(this.edges[i], ctx)
    }
    for(var i=0; i<this.vertices.length; i++) {
      this.drawVertex(this.vertices[i], ctx)
    }
  }
  getColor(vertex) {
    var r = 225 - (vertex.antibodyCount);
    var g = 225 - (vertex.antibodyCount) - (vertex.virusCount);
    var b = 225 - (vertex.virusCount);
    if (r < 100 && vertex.virusCount > 0){
      r = 100;
    }
    if (b < 100 && vertex.antibodyCount > 0){
      b = 100;
    }
    return ('rgb(' + r + ',' + g + ',' + b + ')')
  }

  drawVertex(vertex, ctx){
    // get canvas
    if(self.selected) {
      if(vertex.xCoord == self.selected.xCoord && vertex.yCoord == self.selected.yCoord) {
        ctx.lineWidth = 12
      }
    }
    if(self.hover) {
      if(vertex.xCoord == self.hover.xCoord && vertex.yCoord == self.hover.yCoord) {
        ctx.lineWidth = 5
      }
    }

    ctx.beginPath();
    ctx.fillStyle = this.getColor(vertex) // color based on population of both sides
    ctx.arc(vertex.xCoord, vertex.yCoord, (vertex.spawnRate * 4),0,2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.arc(vertex.xCoord, vertex.yCoord, (vertex.spawnRate * 4),0,2*Math.PI);
    ctx.stroke();

    ctx.lineWidth = 1
  }
  drawEdge(edge, ctx){
    // get canvas
    ctx.beginPath();
    ctx.strokeStyle="black"; // Black path
    ctx.moveTo(edge.vertexA.xCoord,edge.vertexA.yCoord);
    ctx.lineTo(edge.vertexB.xCoord,edge.vertexB.yCoord);

    ctx.stroke();
  }

  onClick(x,y) {
    self.selected = null;
    self.hover = null;
    this.selectedNeighbors = null;
    for(var i=0; i<this.vertices.length; i++) {
      var verX = this.vertices[i].xCoord
      var verY = this.vertices[i].yCoord
      var distX = Math.abs(verX-x)
      var distY = Math.abs(verY-y)
      var hyp = Math.floor(Math.sqrt(Math.pow(distX,2)+Math.pow(distY,2)))
      if (hyp < 50) {
        self.selected = this.vertices[i]
        var neighbors = []
        for (var x = 0; x< this.edges.length; x++){
          if(this.edges[x].vertexA.xCoord == this.vertices[i].xCoord && this.edges[x].vertexA.yCoord == this.vertices[i].yCoord) {
            neighbors.push(this.edges[x].vertexB)
          }
          else if (this.edges[x].vertexB.xCoord == this.vertices[i].xCoord  && this.edges[x].vertexB.yCoord == this.vertices[i].yCoord) {
            neighbors.push(this.edges[x].vertexA)
          }
        }
        this.selectedNeighbors = neighbors
        break
      }
    }
  }
  onHover(x,y) {
    if(this.selectedNeighbors) {
      for(var i=0; i<this.selectedNeighbors.length; i++) {
        var verX = this.selectedNeighbors[i].xCoord
        var verY = this.selectedNeighbors[i].yCoord

        var distX = Math.abs(verX-x)
        var distY = Math.abs(verY-y)

        var hyp = Math.floor(Math.sqrt(Math.pow(distX,2)+Math.pow(distY,2)))
        if (hyp < 50) {
          self.hover = this.selectedNeighbors[i]
          break
        }
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
