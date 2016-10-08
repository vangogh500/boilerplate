import Antibody from '../units/antibody.js';
import Virus from '../units/virus.js';

// Constructor for node with spawnRate, virusCount (0), antibodyCount (0)
export default class Vertex{
//class Vertex{
  constructor(spawnRate, virusCount, antibodyCount, xCoord, yCoord){
    this.viruses = []; 
    this.antibodies = []; 
    this.spawnRate = spawnRate;
    this.virusCount = virusCount;
    this.antibodyCount = antibodyCount;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

//added gets for color method
  get getAntibodyCount() {
    return (this.antibodyCount);
  }
  get getVirusCount() {
    return (this.virusCount);
  }
//to determine color transition, returns a string
  color(vertex) {
    var r = 225 - (vertex.getAntibodyCount);
    var g = 225 - (vertex.getAntibodyCount) - (vertex.getVirusCount);
    var b = 225 - (vertex.getVirusCount);
    if (r < 100 && vertex.getVirusCount > 0){
      r = 100;
    }
    if (b < 100 && vertex.getAntibodyCount > 0){
      b = 100;
    }
    return ('rgb(' + r + ',' + g + ',' + b + ')');
  }

  get getXCoord(){
    return this.xCoord;
  }

  get getYCoord(){
    return this.yCoord;
  }

  addAntibody(newAntibodies){
    this.antibodies.concat(newAntibodies);
  }

  addVirus(newViruses){
    this.antibodies.concat(newViruses);
  }

  removeAntibodies(percentage){
    var numToRemove = Math.floor(this.antibodyCount*percentage/100);
    var removedAntibodies = this.antibodies.slice(0, numToRemove);
    this.antibodies = this.antibodies.slice(numToRemove,antibodyCount);
    return removedAntibodies;
  }

  removeViruses(percentage){
    var numToRemove = Math.floor(this.virusCount*percentage/100);
    var removedViruses = this.antibodies.slice(0, numToRemove);
    this.viruses = this.antibodies.slice(numToRemove,virusCount);
    return removedViruses;
  }

  updateCellCount()
  {
    //Update Virus counts
    //Equal counts
    if(this.virusCount==this.antibodyCount)
    {
      if(this.virusCount>10)
      {
        this.virusCount=Math.floor(this.virusCount*0.8);
        this.antibodyCount=Math.floor(this.antibodyCount*0.8);
      }
      else {
        this.virusCount-=1;
        this.antibodyCount-=1;

      }
    }
    //Death algorithm
    else {
      if(this.virusCount>this.antibodyCount)
      {
        var div=this.virusCount/(this.antibodyCount+this.virusCount);
        this.virusCount=Math.floor(this.virusCount*(1-(0.2-(div*0.2))));
        this.antibodyCount=Math.floor(this.antibodyCount*(1-(div*0.2)));
      }
      else{
        var div=this.antibodyCount/(this.antibodyCount+this.virusCount);
        this.virusCount=Math.floor(this.virusCount*(1-(div*0.2)));
        this.antibodyCount=Math.floor(this.antibodyCount*(1-(0.2-(div*0.2))));
      }
    }
  }


}
