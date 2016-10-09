import Antibody from '../units/antibody.js';
import Virus from '../units/virus.js';

// Constructor for node with spawnRate, virusCount (0), antibodyCount (0)
export default class Vertex{
  constructor(spawnRate, virusCount, antibodyCount, xCoord, yCoord){
    //console.log("virusCount "+virusCount)

    this.spawnRate = spawnRate;
    this.virusCount = virusCount;
    this.antibodyCount = antibodyCount;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

//
get getSpawnRate(){
  return (this.spawnRate);
}

//added gets for color method
  get getVirusCount() {
    return this.virusCount;
    //return 5
  }
  get getAntibodyCount() {
    return this.antibodyCount;
  }

//to determine color transition, returns a string
  getColor() {
    var r = 225 - (this.getAntibodyCount);
    var g = 225 - (this.getAntibodyCount) - (this.getVirusCount);
    var b = 225 - (this.getVirusCount);
    if (r < 100 && this.getVirusCount > 0){
      r = 100;
    }
    if (b < 100 && this.getAntibodyCount > 0){
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

  setXCoord(x){
    this.xCoord = x + 50
  }

  setYCoord(y){
    this.yCoord = y + 50
  }

  update()
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
        if(this.virusCount!=0)
        {
          this.virusCount=this.virusCount-1;
        }
        if(this.antibodyCount!=0)
        {
          this.antibodyCount= this.antibodyCount-1;
        }

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
