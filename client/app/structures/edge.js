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

}
