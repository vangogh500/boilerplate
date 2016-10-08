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

  colorVertex(){
    if (this.getBalance > 0){
      // Infected vertex with this.balance amount of virusCount
    }
    else if (this.getBalance == 0){
      // Neutral vertex
    }
    else {
      // Protected vertex with abs(this.balance) amount of antibodyCount
    }
  }

  get getXCoord(){
    return this.xCoord;
  }

  get getYCoord(){
    return this.yCoord;
  }

}
