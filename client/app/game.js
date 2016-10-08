import Board from './structures/board.js';

class Game {
  constructor() {
    self.win = false
    self.canvas = document.getElementById("canvas")
  }
  initialize() {
    // Board(numberOfVertices, numberOfGenerators, numberOfSpawners)
    self.board = new Board(10,1,1);
    self.board.createMap();
    self.ctx = self.canvas.getContext("2d");
    self.board.drawMap(self.ctx);

    //event listener
    var elemLeft = self.canvas.offsetLeft
    var elemTop = self.canvas.offsetTop
    self.canvas.addEventListener("click", (event) => {
      var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
      board.onClick(x,y)
      this.draw()
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

    }
}


export function main() {
  var theGame = new Game()
  theGame.initialize()
  /*
  while (!theGame.isOver()){
    theGame.update()
  }
  */
}
