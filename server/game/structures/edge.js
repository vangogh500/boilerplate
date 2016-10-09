module.exports = class Edge {
  constructor(vertexA, vertexB){
    this.vertexA = vertexA;
    this.vertexB = vertexB;
    this.antiFlow = 0;
    this.virFlow = 0;
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
  
  setAntiFlow(antiFlow)
  {
    this.antiFlow = antiFlow;
  }

  setVirFlow(virFlow)
  {
    this.virFlow = virFlow;
  }

  update()
  {
    //
    var resultAA=this.vertexA.antibodyCount - this.antiFlow;
    var resultBA=this.vertexB.antibodyCount + this.antiFlow;
    var resultAV=this.vertexA.virusCount - this.virFlow;
    var resultBV=this.vertexB.virusCount + this.virFlow;
    if(resultAA<0||resultBA<0)
    {
      if(resultAA<0)
      {
        this.vertexB.antibodyCount=this.vertexA.antibodyCount + this.vertexB.antibodyCount;
        this.vertexA.antibodyCount=0;
      }

      this.antiFlow=0;
    }
    else{
      this.vertexA.antibodyCount= resultAA;
      this.vertexB.antibodyCount = resultBA;
    }
    if(resultAV<0||resultBV<0)
    {

      if(resultAV<0)
      {
        this.vertexB.virusCount=this.vertexA.virusCount+this.vertexB.virusCount;
        this.vertexA.virusCount=0;
      }
      else if(resultBV<0){
        this.vertexA.virusCount=this.vertexA.virusCount+this.vertexB.virusCount;
        this.vertexB.virusCount=0;
      }
      this.virFlow=0;
    }
    else{
      this.vertexA.virusCount=resultAV;
      this.vertexB.virusCount= resultBV;
    }
  }
}
