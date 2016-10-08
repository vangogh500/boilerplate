// Constructor for node with spawnRate, virusCount (0), antibodyCount (0)
class Vertex {
  constructor(spawnRate, virusCount, antibodyCount){
    this.spawnRate = spawnRate;
    this.virusCount = virusCount;
    this.antibodyCount = antibodyCount;
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

}
