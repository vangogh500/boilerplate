import Board from './structures/board.js';
import Vertex from './structures/vertex.js';
class Game {
  constructor() {
    self.win = false
  }
  initialize() {
    // Board(numberOfVertices, numberOfGenerators, numberOfSpawners)
    self.board = new Board(10,1,1);
    self.board.createMap();
    var canvas = document.getElementById("canvas");
    self.ctx = canvas.getContext("2d");
    self.board.drawMap(self.ctx);
  }
  isOver() {
    return self.win
  }
  update() {
      theGame.initialize();
      requestAnimationFrame(update);
    }
}


export function main() {
  var theGame = new Game();
  theGame.initialize()

  while (!theGame.isOver()){
    theGame.update()
  }
}
