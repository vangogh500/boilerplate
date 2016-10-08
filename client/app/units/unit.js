// Constructor for node with spawnRate, virusCount (0), antibodyCount (0)
export default class Unit{
  constructor(xCoord, yCoord){
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  get getXCoord(){
    return this.xCoord;
  }

  get getYCoord(){
    return this.yCoord;
  }

}
