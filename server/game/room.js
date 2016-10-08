class Room {
  constructor() {
    this.id = Math.round(Math.random() * 1000)
    this.gameState = null
    this.players = []
  }
  addPlayer(player) {
    this.players.push(player)
  }
  removePlayer(player) {
    var i = this.players.indexOf(player)
    this.players.splice(i, 1)
  }
  isFull() {
    return this.players.length >= 2
  }
  isEmpty() {
    return this.players.length <= 0
  }
}
module.exports = Room
