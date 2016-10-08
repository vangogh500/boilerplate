// Generates Board and vertexs

class Board {
  constructor(numberOfvertexs, numberOfGenerators, numberOfSpawners){
    this.numberOfvertexs = numberOfvertexs;
    this.numberOfGenerators = numberOfGenerators;
    this.numberOfSpawners = numberOfSpawners;
  }

  createMap(){
    // initialize vertices
    var vertex1 = new Vertex(10,0,0);
    var vertex2 = new Vertex(10,0,0);
    var vertex3 = new Vertex(10,0,0);
    var vertex4 = new Vertex(10,0,0);
    var vertex5 = new Vertex(10,0,0);

    //initialize edges
    var edge1 = new Edge(vertex1, vertex2);
    var edge2 = new Edge(vertex2, vertex3);
    var edge3 = new Edge(vertex3, vertex4);
    var edge4 = new Edge(vertex4, vertex5);



  }

  drawMap(){

    var exampleVertex = new Vertex(10,0,0);
    

  }
}




/*
// Put in every tick.
for each vertex in board {
  virusCount += (spawnRate * virusCount)
}
*/
