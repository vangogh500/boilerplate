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
    var vertices = [];
    for (i = 0; i < this.getNumberOfVertices; i++){
      vertices[i] = new Vertex(10,0,0, 50 + (i*200) , 50 + (i%2)*50 );
    }
    console.log("Vertices: " + vertices)


    // initialize vertices
    // Vertex(spawnRate, virusCount, antibodyCount, xCoord, yCoord)
    /*
    var vertex1 = new Vertex(10,0,0,50,50);
    var vertex2 = new Vertex(10,0,0,250,50);
    var vertex3 = new Vertex(10,0,0,450,100);
    var vertex4 = new Vertex(10,0,0,650,50);
    var vertex5 = new Vertex(10,0,0,850,50);
    */

    //initialize edges
    var edges = [];
    for (i = 0; i < (this.getNumberOfVertices - 1); i++){
      edges[i] = new Edge(vertices[i], vertices[i+1]);
    }
    console.log("Edges: " + edges)

    //initialize edges
    /*
    var edge1 = new Edge(vertex1, vertex2);
    var edge2 = new Edge(vertex2, vertex3);
    var edge3 = new Edge(vertex3, vertex4);
    var edge4 = new Edge(vertex4, vertex5);
    */

    //draw edges first so that vertices overlay

    //draw edges
    for (var i = 0; i < edges.length; i++){
      this.drawEdge(edges[i])
    }

    /*
    this.drawEdge(edge1)
    this.drawEdge(edge2)
    this.drawEdge(edge3)
    this.drawEdge(edge4)
    */

    //draw vertices
    for (var i = 0; i < vertices.length; i++){
      this.drawVertex(vertices[i])
    }

    /*
    this.drawVertex(vertex1)
    this.drawVertex(vertex2)
    this.drawVertex(vertex3)
    this.drawVertex(vertex4)
    this.drawVertex(vertex5)
    */


  }

  drawVertex(vertex){
    // get canvas
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle="green"; // Green path

    ctx.arc(vertex.getXCoord, vertex.getYCoord, 50,0,2*Math.PI);
    ctx.fill();


  }
  drawEdge(edge){
    // get canvas
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle="blue"; // Green path

    ctx.moveTo(edge.getVertexA.getXCoord,edge.getVertexA.getYCoord);
    ctx.lineTo(edge.getVertexB.getXCoord,edge.getVertexB.getYCoord);

    ctx.stroke();
  }
}
