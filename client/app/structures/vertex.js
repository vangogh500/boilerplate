// Constructor for node with spawnRate, virusCount (0), antibodyCount (0)
export default class Vertex {
  constructor(spawnRate, virusCount, antibodyCount, xCoord, yCoord){
    this.spawnRate = spawnRate;
    this.virusCount = virusCount;
    this.antibodyCount = antibodyCount;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  get balance() {
      return (this.virusCount - this.antibodyCount)
  }

  colorVertex(){
    if (this.balance > 0){
      // Infected vertex with this.balance amount of virusCount
    }
    else if (this.balance == 0){
      // Neutral vertex
    }
    else {
      // Protected vertex with abs(this.balance) amount of antibodyCount
    }
  }

  get xCoord(){
    return this.xCoord;
  }
  
  get yCoord(){
    return this.yCoord;
  }

}
