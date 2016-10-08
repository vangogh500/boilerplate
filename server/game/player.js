class Player {
  constructor(socket) {
    this.id = "User " + Math.round(Math.random() * 1000)
    this.socket = socket
  }
}
module.exports = Player
