import Board from './structures/board.js';
import Vertex from './structures/vertex.js';
class Game {
  constructor() {
    self.win = false
    self.canvas = document.getElementById("canvas")
  }
  initialize() {
    // Board(numberOfVertices, numberOfGenerators, numberOfSpawners)
    self.board = new Board(10,1,1);
    self.ctx = self.canvas.getContext("2d");
    //event listener
    var elemLeft = self.canvas.offsetLeft
    var elemTop = self.canvas.offsetTop
    self.canvas.addEventListener("click", (event) => {
      var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
      board.onClick(x,y)
      this.draw()
    })
    self.canvas.addEventListener("mousemove", (event) => {
      var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
      board.onHover(x,y, this.draw)
    })
  }
  draw() {
    var w = self.canvas.width
    var h = self.canvas.height
    self.ctx.clearRect(0, 0, w, h);
    board.drawMap(self.ctx);
  }
  isOver() {
    return self.win
  }
  update() {
    this.draw();
    board.updateBoard();
  }
}




export function main() {
  var theGame = new Game();
  theGame.initialize()
  run(0)
  function run(i) {
    var start=Date.now();
    setTimeout(function()
    {
      if(i<100)
      {
        theGame.update()
        i++
        run(i);
      }
    },start+100-Date.now())
  }
}
