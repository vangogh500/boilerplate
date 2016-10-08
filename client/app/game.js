import Board from './structures/board.js';

export function main() {
  // Board(numberOfVertices, numberOfGenerators, numberOfSpawners)
  var theBoard = new Board(10,1,1);
  theBoard.createMap();
}
