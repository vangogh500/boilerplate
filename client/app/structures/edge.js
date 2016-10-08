export default class Edge {
  constructor(vertexA, vertexB){
    this.vertexA = vertexA;
    this.vertexB = vertexB;
    this.antiFlow = 0;
    this.antiDownFlow=0;
    this.virFlow = 0;
    this.virDownFlow=0;
  }

  get getVertexA(){
    return this.vertexA;
  }

  get getVertexB(){
    return this.vertexB;
  }
  setAntiFlow(antiFlow)
  {
    this.antiFlow = antiFlow;
  }

  setVir(virFlow)
  {
this.virFlow = virFlow;
  }


  update()
  {
    //A to B
    this.vertexA.antibodyCount=-this.antiflow;
    this.vertexB.antibodyCount=+this.antiflow;
    this.vertexA.virusCount=-this.virflow;
    this.vertexB.virusCount=+this.virflow;
  }
}
