var Board = require('./structures/board.js')

class Game {
  constructor() {
    this.win = false
    this.initialize()
  }
  initialize() {
    this.board = new Board(10,1,1);
  }
  isOver() {
    return this.win
  }
  update() {
    this.board.updateBoard()
  }
  makeMove(vertices) {
    this.board.makeMove(vertices)
  }
}

module.exports = Game
