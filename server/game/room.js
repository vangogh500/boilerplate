module.exports = class Room {
  constructor(player) {
    this.id = Math.round(Math.random * 1000)
    this.gameState = null
    this.players = [player]
  }
  join(player) {
    this.players.add(player)
  }
  isFull() {
    return this.players.length >= 2
  }
}
