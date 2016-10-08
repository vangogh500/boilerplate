import Board from './structures/board.js';
import Vertex from './structures/vertex.js';
class Game {
  constructor() {
    self.win = false
  }
  initialize() {
    // Board(numberOfVertices, numberOfGenerators, numberOfSpawners)
    self.board = new Board(10,1,1);
    //self.board.createMap();
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
