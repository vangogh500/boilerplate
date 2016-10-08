class Player {
  constructor(socket) {
    this.id = "User " + Math.round(Math.random() * 1000)
    this.socket = socket
  }
  join(room) {
    this.room = room
  }
}
module.exports = Player
