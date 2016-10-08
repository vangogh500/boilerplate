export default class Edge {
  constructor(vertexA, vertexB){
    this.vertexA = vertexA;
    this.vertexB = vertexB;
  }

  get getVertexA(){
    return this.vertexA;
  }

  get getVertexB(){
    return this.vertexB;
  }

  // returns null if vertex is not contained, otherwise returns other vertex
  getOtherVertex(vertex) {
    if (this.vertexA == vertex){
      return this.vertexB
    }
    else if(this.vertexB == vertex) {
      return this.vertexA
    }
    else {
      return null
    }
  }

}
