// Constructor for node with spawnRate, virusCount (0), antibodyCount (0)
class Vertex{
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
  get getXCoord(){
    return this.xCoord;
  }

  get getYCoord(){
    return this.yCoord;
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
        var div2=this.antibodyCount/(this.antibodyCount+this.virusCount);
        this.virusCount=Math.floor(this.virusCount*(1-(div2*0.2)));
        this.antibodyCount=Math.floor(this.antibodyCount*(1-(0.2-(div2*0.2))));
      }
    }
  }
}

module.exports = Vertex
