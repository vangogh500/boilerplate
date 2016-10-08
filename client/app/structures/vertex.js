// Constructor for node with spawnRate, virusCount (0), antibodyCount (0)
export default class Vertex {
  constructor(spawnRate, virusCount, antibodyCount, xCoord, yCoord){
    this.spawnRate = spawnRate;
    this.virusCount = virusCount;
    this.antibodyCount = antibodyCount;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  get getBalance() {
      return (this.virusCount - this.antibodyCount)
  }

  get getXCoord(){
    return this.xCoord;
  }

  get getYCoord(){
    return this.yCoord;
  }

}
