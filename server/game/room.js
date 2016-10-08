class Room {
  constructor() {
    this.id = Math.round(Math.random() * 1000)
    this.gameState = null
  }

  getId() {
    return this.id
  }

  test() {
    return "test"
  }
}
module.exports = Room
