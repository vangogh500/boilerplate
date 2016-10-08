// Generates Board and vertexs

import Vertex from './vertex.js'
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
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    // initialize vertices
    // Vertex(spawnRate, virusCount, antibodyCount, xCoord, yCoord)
    self.vertices = [];
    for (i = 0; i < this.getNumberOfVertices; i++){
      self.vertices[i] = new Vertex(10,0,0, (50 + (i*200)) , (50 + (i%2)*50),0 );
    }

    //initialize edges
    self.edges = [];
    for (i = 0; i < (this.getNumberOfVertices - 1); i++){
      self.edges[i] = new Edge(vertices[i], vertices[i+1]);
    }

    //draw edges first so that vertices overlay

    //draw edges
    for (var i = 0; i < edges.length; i++){
      this.drawEdge(edges[i])
    }

    //draw vertices
    for (var i = 0; i < vertices.length; i++){
      this.drawVertex(vertices[i])
    }

  }

  drawVertex(vertex){
    // get canvas
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle='gainsboro'; // Grey, neutral fill

    ctx.arc(vertex.getXCoord, vertex.getYCoord, 50,0,2*Math.PI);
    ctx.fill();


  }
  drawEdge(edge){
    // get canvas
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle="blue"; // Blue path

    ctx.moveTo(edge.getVertexA.getXCoord,edge.getVertexA.getYCoord);
    ctx.lineTo(edge.getVertexB.getXCoord,edge.getVertexB.getYCoord);

    ctx.stroke();
  }
  updateBoard(){

  }
}
