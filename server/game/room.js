class Room {
  constructor() {
    this.id = Math.round(Math.random() * 1000)
    this.gameState = null
    this.players = []
  }
  addPlayer(player) {
    this.players.push(player)
  }
  isFull() {
    return this.players.length >= 2
  }
}
module.exports = Room
