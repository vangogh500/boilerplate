// Constructor for node with spawnRate, virusCount (0), antibodyCount (0)
export default class Vertex{
//class Vertex{
  constructor(spawnRate, virusCount, antibodyCount, xCoord, yCoord, colorSwitch){
    this.spawnRate = spawnRate;
    this.virusCount = virusCount;
    this.antibodyCount = antibodyCount;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.colorSwitch=colorSwitch;
    this.updateColor();
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
        var div=this.virusCount/(this.antibodyCount+this.virusCount)
        this.virusCount=Math.floor(this.virusCount*(1-(0.2-(div*0.2))));
        this.antibodyCount=Math.floor(this.antibodyCount*(1-(div*0.2)));
      }
      else{
        var div=this.antibodyCount/(this.antibodyCount+this.virusCount)
        this.virusCount=Math.floor(this.virusCount*(1-(div*0.2)));
        this.antibodyCount=Math.floor(this.antibodyCount*(1-(0.2-(div*0.2))));
      }
    }
  }

  //Returns color value given the state of the vertex
  get updateColor()
  {
    var ColorEnum={
      virus: {value: -1, color: "##DC143C"},
      none: {value: 0, color:"#000000"},
      antibody: {value: 1, color:"#00FFFF"}
    };
    if(this.colorSwitch==ColorEnum.antibody.value)
    {
      return ColorEnum.antibody.color;
    }
    else if(this.colorSwitch==ColorEnum.virus.value)
    {
      return ColorEnum.virus.color;
    }
    else{
      return ColorEnum.none.color;
    }
  }

}
