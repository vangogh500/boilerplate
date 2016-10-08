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
    //added viruses and antibodies to test color transition

    /*
    var vertices = [];
    for (i = 0; i < this.getNumberOfVertices; i++){
      vertices[i] = new Vertex(10,i*20,0, (50 + (i*200)) , (50 + (i%2)*50) );
    }
    */

    //hard code for the map
    //vertices
    var brain = new Vertex(10,0,200,50,250)
    var lung1 = new Vertex(10,0,0,250,150)
    var lung2 = new Vertex(10,0,0,250,350)
    var heart = new Vertex(10,0,0,450,150)
    var liver = new Vertex(10,0,0,500,350)
    var stomach = new Vertex(10,0,0,675,300)
    var kidney1 = new Vertex(10,0,0,550,480)
    var kidney2 = new Vertex(10,200,0,800,480)

    this.vertices = [brain, lung1, lung2, heart, liver, stomach, kidney1, kidney2]

    //initialize edges
    var edge1 = new Edge(brain,lung1)
    var edge2 = new Edge(brain,lung2)
    var edge3 = new Edge(lung1,heart)
    var edge4 = new Edge(heart,liver)
    var edge5 = new Edge(heart,stomach)
    var edge6 = new Edge(stomach,kidney1)
    var edge7 = new Edge(stomach,kidney2)

    this.edges = [edge1, edge2, edge3, edge4, edge5, edge6, edge7]

    //draw edges

    //draw vertecies

    /*
    var edges = [];
    for (i = 0; i < (this.getNumberOfVertices - 1); i++){
      self.edges[i] = new Edge(vertices[i], vertices[i+1]);
    }
    */
    //draw edges first so that vertices overlay

    //draw edges
    /*
    for (var i = 0; i < edges.length; i++){
      this.drawEdge(edges[i])
    }
    */
    //draw vertices
    /*
    for (var i = 0; i < vertices.length; i++){
      this.drawVertex(vertices[i])
    }
    */
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
    if(vertex.getSelected) {
      ctx.lineWidth = 15
    }
    ctx.beginPath();
    ctx.fillStyle = vertex.getColor() // color based on population of both sides
    ctx.arc(vertex.getXCoord, vertex.getYCoord, 50,0,2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.arc(vertex.getXCoord, vertex.getYCoord, 50,0,2*Math.PI);
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
    for(var i=0; i<this.vertices.length; i++) {
      var verX = this.vertices[i].getXCoord
      var verY = this.vertices[i].getYCoord
      var distX = Math.abs(verX-x)
      var distY = Math.abs(verY-y)
      var hyp = Math.floor(Math.sqrt(Math.pow(distX,2)+Math.pow(distY,2)))
      if (hyp < 50) {
        console.log(this.vertices[i])
        this.vertices[i].setSelected(true)
      }
      else {
        this.vertices[i].setSelected(false)
      }
    }
  }
  updateBoard(){

  }
}
