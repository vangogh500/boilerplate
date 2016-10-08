// Constructor for node with spawnRate, virusCount (0), antibodyCount (0)
export default class Vertex {
  constructor(spawnRate, virusCount, antibodyCount, xCoord, yCoord){
    this.spawnRate = spawnRate;
    this.virusCount = virusCount;
    this.antibodyCount = antibodyCount;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }
//added gets for color method
  get getAntibodyCount() {
    return (this.antibodyCount)
  }
  get getVirusCount() {
    return (this.virusCount)
  }
//to determine color transition, returns a string
  color(vertex) {
    var r = 225 - (vertex.getAntibodyCount)
    var g = 225 - (vertex.getAntibodyCount) - (vertex.getVirusCount)
    var b = 225 - (vertex.getVirusCount)
    if (r < 100 && vertex.getVirusCount > 0){
      r = 100
    }
    if (b < 100 && vertex.getAntibodyCount > 0){
      b = 100
    }
    return ('rgb(' + r + ',' + g + ',' + b + ')');
  }

  get getXCoord(){
    return this.xCoord;
  }

  get getYCoord(){
    return this.yCoord;
  }

}
