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

  createMap(){
    // initialize vertices
    var vertex1 = new Vertex(10,0,0,50,50);
    var vertex2 = new Vertex(10,0,0,250,50);
    var vertex3 = new Vertex(10,0,0,450,50);
    var vertex4 = new Vertex(10,0,0,650,50);
    var vertex5 = new Vertex(10,0,0,850,50);

    //initialize edges
    var edge1 = new Edge(vertex1, vertex2);
    var edge2 = new Edge(vertex2, vertex3);
    var edge3 = new Edge(vertex3, vertex4);
    var edge4 = new Edge(vertex4, vertex5);



  }

  drawMap(){

    var exampleVertex = new Vertex(10,0,0,0,0);

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle="green"; // Green path
    ctx.lineWidth="5";

    ctx.arc(exampleVertex.getXCoord, exampleVertex.getYCoord, 50,0,2*Math.PI);
    ctx.fill();


  }
}




/*
// Put in every tick.
for each vertex in board {
  virusCount += (spawnRate * virusCount)
}
*/
