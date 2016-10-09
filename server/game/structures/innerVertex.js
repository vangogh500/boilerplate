var Vertex = require('./vertex.js')

module.exports = class InnerVertex extends Vertex {
  // Extends vertex but includes neighbors for random edge generation
  constructor(spawnRate, virusCount, antibodyCount, xCoord, yCoord, neighbors){
    super(spawnRate, virusCount, antibodyCount, xCoord, yCoord)
    this.neighbors = neighbors;
  }
  get getNeighbors(){
    return this.neighbors;
  }
}
