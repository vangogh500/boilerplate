import Board from './structures/board.js';

class Game {
  constructor() {
    self.win = false
  }
  initialize() {
    // Board(numberOfVertices, numberOfGenerators, numberOfSpawners)
    self.board = new Board(10,1,1);
    self.board.createMap();
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
