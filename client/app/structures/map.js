import Vertex from './vertex.js';
import InnerVertex from './InnerVertex.js'
import Edge from './edge.js';
import Generator from './generator.js';
import Spawner from './spawner.js';

export default class Map {
  constructor(id){
    this.id = id;
  }

  genMap(){
    console.log("creating map " + this.id)
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    switch (this.id) {
      case 0:
        //skeleton vertices
        var b1 = new Vertex(12,0,200, 100,    600)
        var b2 = new Vertex(12,0,0,   400,  600)
        var b3 = new Vertex(12,200,0, 700,  600)
        var m1 = new Vertex(12,0,0,   250,  350)
        var m2 = new Vertex(12,0,0,   550,  350)
        var t1 = new Vertex(16,200,200,   400,  100)

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
        break;
      case 1:
        //skeleton vertices
        //var b1 = new Vertex(12,0,200, 100,    600)
        var scaleVal = 600
        this.vertices = []

        for(var i = 0; i < 16; i++){
          this.vertices.push(new Vertex(10,0,0,0,0))
        }

        for(var i = 0; i < 16; i++){
          if (i < 2){ this.vertices[i].setYCoord( 0 * scaleVal ) }
          else if (i < 7){ this.vertices[i].setYCoord( .25 * scaleVal ) }
          else if (i < 9){ this.vertices[i].setYCoord( .5 * scaleVal ) }
          else if (i < 14){ this.vertices[i].setYCoord( .75 * scaleVal ) }
          else { this.vertices[i].setYCoord( 1 * scaleVal ) }
        }

        this.vertices[0].setXCoord(.4 * scaleVal)
        this.vertices[1].setXCoord(.6 * scaleVal)
        this.vertices[2].setXCoord(.2 * scaleVal)
        this.vertices[3].setXCoord(.4 * scaleVal)
        this.vertices[4].setXCoord(.5 * scaleVal)
        this.vertices[5].setXCoord(.6 * scaleVal)
        this.vertices[6].setXCoord(.8 * scaleVal)
        this.vertices[7].setXCoord(.0 * scaleVal)
        this.vertices[8].setXCoord(1 * scaleVal)
        this.vertices[9].setXCoord(.2 * scaleVal)
        this.vertices[10].setXCoord(.4 * scaleVal)
        this.vertices[11].setXCoord(.5 * scaleVal)
        this.vertices[12].setXCoord(.6 * scaleVal)
        this.vertices[13].setXCoord(.8 * scaleVal)
        this.vertices[14].setXCoord(.4 * scaleVal)
        this.vertices[15].setXCoord(.6 * scaleVal)

        this.vertices[3].setYCoord(.40 * scaleVal)
        this.vertices[5].setYCoord(.40 * scaleVal)

        this.vertices[10].setYCoord(.60 * scaleVal)
        this.vertices[12].setYCoord(.60 * scaleVal)

        this.edges = []

        for(var i = 0; i < 16; i++){
          this.edges.push(new Edge(this.vertices[0], this.vertices[1]))
        }

        //skeleton edges
        this.edges[0] = new Edge(this.vertices[0], this.vertices[1])
        this.edges[1] = new Edge(this.vertices[1], this.vertices[6])
        this.edges[2] = new Edge(this.vertices[6], this.vertices[8])
        this.edges[3] = new Edge(this.vertices[8], this.vertices[13])
        this.edges[4] = new Edge(this.vertices[13], this.vertices[15])
        this.edges[5] = new Edge(this.vertices[15], this.vertices[14])
        this.edges[6] = new Edge(this.vertices[14], this.vertices[9])
        this.edges[7] = new Edge(this.vertices[9], this.vertices[7])
        this.edges[8] = new Edge(this.vertices[7], this.vertices[2])
        this.edges[9] = new Edge(this.vertices[2], this.vertices[0])

        this.edges[10] = new Edge(this.vertices[3], this.vertices[10])
        this.edges[11] = new Edge(this.vertices[5], this.vertices[12])

        this.edges[12] = new Edge(this.vertices[0], this.vertices[4])
        this.edges[13] = new Edge(this.vertices[1], this.vertices[4])
        this.edges[14] = new Edge(this.vertices[4], this.vertices[3])
        this.edges[15] = new Edge(this.vertices[2], this.vertices[3])
        this.edges[16] = new Edge(this.vertices[9], this.vertices[10])
        this.edges[17] = new Edge(this.vertices[6], this.vertices[5])
        this.edges[18] = new Edge(this.vertices[13], this.vertices[12])
        this.edges[19] = new Edge(this.vertices[4], this.vertices[5])
        this.edges[20] = new Edge(this.vertices[10], this.vertices[11])
        this.edges[21] = new Edge(this.vertices[11], this.vertices[12])
        this.edges[22] = new Edge(this.vertices[11], this.vertices[14])
        this.edges[23] = new Edge(this.vertices[11], this.vertices[15])

        //color
        this.vertices[7].antibodyCount = 200;
        this.vertices[8].virusCount = 200;
        break;
      case 2:
        var scaleVal = 500;
        this.vertices = []
        this.edges = []

        for(var i = 0; i < 16; i++){
          this.vertices.push(new Vertex(10,0,0,0,0))
        }

        for(var i = 0; i < 16; i++){
          if (i < 3){ this.vertices[i].setXCoord( 0 * scaleVal ) }
          else if (i < 5){ this.vertices[i].setXCoord( .2 * scaleVal ) }
          else if (i < 8){ this.vertices[i].setXCoord( .40 * scaleVal ) }
          else if (i < 11){ this.vertices[i].setXCoord( .65 * scaleVal ) }
          else if (i < 13){ this.vertices[i].setXCoord( .8 * scaleVal ) }
          else { this.vertices[i].setXCoord( 1 * scaleVal ) }
        }

        this.vertices[0].setYCoord(.5 * scaleVal)
        this.vertices[1].setYCoord(.8 * scaleVal)
        this.vertices[2].setYCoord(1 * scaleVal)
        this.vertices[3].setYCoord(.8 * scaleVal)
        this.vertices[4].setYCoord(1 * scaleVal)
        this.vertices[5].setYCoord(0 * scaleVal)
        this.vertices[6].setYCoord(.4 * scaleVal)
        this.vertices[7].setYCoord(.625 * scaleVal)
        this.vertices[8].setYCoord(.4 * scaleVal)
        this.vertices[9].setYCoord(.65 * scaleVal)
        this.vertices[10].setYCoord(1 * scaleVal)
        this.vertices[11].setYCoord(0 * scaleVal)
        this.vertices[12].setYCoord(.25 * scaleVal)
        this.vertices[13].setYCoord(0 * scaleVal)
        this.vertices[14].setYCoord(.25 * scaleVal)
        this.vertices[15].setYCoord(.75 * scaleVal)


        for(var i = 0; i < 20; i++){
          this.edges.push(new Edge(this.vertices[0], this.vertices[1]))
        }

        this.edges[0] = new Edge(this.vertices[5], this.vertices[11])
        this.edges[1] = new Edge(this.vertices[11], this.vertices[13])
        this.edges[2] = new Edge(this.vertices[13], this.vertices[14])
        this.edges[3] = new Edge(this.vertices[14], this.vertices[15])
        this.edges[4] = new Edge(this.vertices[15], this.vertices[10])
        this.edges[5] = new Edge(this.vertices[10], this.vertices[4])
        this.edges[6] = new Edge(this.vertices[4], this.vertices[2])
        this.edges[7] = new Edge(this.vertices[2], this.vertices[1])
        this.edges[8] = new Edge(this.vertices[1], this.vertices[0])
        this.edges[9] = new Edge(this.vertices[0], this.vertices[5])
        this.edges[10] = new Edge(this.vertices[6], this.vertices[5])
        this.edges[11] = new Edge(this.vertices[6], this.vertices[0])
        this.edges[12] = new Edge(this.vertices[6], this.vertices[7])
        this.edges[13] = new Edge(this.vertices[7], this.vertices[8])
        this.edges[14] = new Edge(this.vertices[7], this.vertices[3])
        this.edges[15] = new Edge(this.vertices[3], this.vertices[2])
        this.edges[16] = new Edge(this.vertices[8], this.vertices[12])
        this.edges[17] = new Edge(this.vertices[12], this.vertices[13])
        this.edges[18] = new Edge(this.vertices[9], this.vertices[15])
        this.edges[19] = new Edge(this.vertices[9], this.vertices[10])
        this.edges[20] = new Edge(this.vertices[8], this.vertices[9])

        this.vertices[2].antibodyCount = 200;
        this.vertices[13].virusCount = 200;



      default:

    }


  }

    get getVertices(){
      return this.vertices
    }

    get getEdges(){
      return this.edges
    }

}
