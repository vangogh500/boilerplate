// Generates Board and vertexs

import Vertex from './vertex.js';
import Edge from './edge.js';
import Generator from './generator.js';
import Spawner from './spawner.js';

export default class Board {
  constructor(numberOfVertices, numberOfGenerators, numberOfSpawners){
    this.numberOfVertices = numberOfVertices;
    this.numberOfGenerators = numberOfGenerators;
    this.numberOfSpawners = numberOfSpawners;
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
    //added viruses and antibodies to test color transition

    /*
    var vertices = [];
    for (i = 0; i < this.getNumberOfVertices; i++){
      vertices[i] = new Vertex(10,i*20,0, (50 + (i*200)) , (50 + (i%2)*50) );
    }
    */

    //hard code for the map
    //vertices
    var brain = new Vertex(10,200,0,50,250)
    drawVertex(brain)
    var lung1 = new Vertex(10,0,200,150,150)
    drawVertex(lung1)
    var lung2 = new Vertex(10,0,0,150,350)
    drawVertex(lung2)
    var heart = new Vertex(10,0,0,250,150)
    drawVertex(heart)
    var liver = new Vertex(10,0,0,275,350)
    drawVertex(liver)
    var stomach = new Vertex(10,0,0,350,350)
    drawVertex(stomach)
    var kidney1 = new Vertex(10,0,0,350,450)
    drawVertex(kidney1)
    var kidney2 = new Vertex(10,0,0,450,450)
    drawVertex(kidney2)
    //initialize edges
    var edges = [];
    for (i = 0; i < (this.getNumberOfVertices - 1); i++){
      edges[i] = new Edge(vertices[i], vertices[i+1]);
    }

    //draw edges first so that vertices overlay

    //draw edges
    for (var i = 0; i < edges.length; i++){
      this.drawEdge(edges[i])
    }

    //draw vertices
    /*
    for (var i = 0; i < vertices.length; i++){
      this.drawVertex(vertices[i])
    }
    */
  }

  drawVertex(vertex){
    // get canvas
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = vertex.color(vertex) // color based on population of both sides
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
}
