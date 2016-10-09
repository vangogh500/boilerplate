import Board from './structures/board.js';
import Vertex from './structures/vertex.js';
export default class Game {
  constructor(board, socket) {
    self.win = false
    self.canvas = document.getElementById("canvas")
    self.board = new Board(board)
    self.socket = socket
  }
  initialize() {
    // Board(numberOfVertices, numberOfGenerators, numberOfSpawners)
    self.ctx = self.canvas.getContext("2d");
    self.canvas.width = canvas.clientWidth;
    self.canvas.height = canvas.clientHeight;
    //event listener

    var elemLeft = self.canvas.offsetLeft
    var elemTop = self.canvas.offsetTop
    self.canvas.addEventListener("click", (event) => {
      var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
      board.onClick(x,y,self.socket)
      this.draw()
    })
    self.canvas.addEventListener("mousemove", (event) => {
      var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
      board.onHover(x,y)
    })
  }
  update(board) {
    self.board.update(board)
    this.draw()
  }
  draw() {
    var w = self.canvas.width
    var h = self.canvas.height
    self.ctx.clearRect(0, 0, w, h)
    self.board.draw(self.ctx)
  }
  isOver() {
    return self.win
  }
}
