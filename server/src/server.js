
var express = require('express')
var app = express()
app.use(express.static('../client/build'))

var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
server.listen(8080)

var Room = require('../game/room.js')
var Player = require('../game/player.js')

var lobby = [new Room(), new Room()]
io.sockets.on('connection', function (socket) {
  var player = new Player(socket)
  socket.emit("welcome", {lobby: lobby, playerId: player.id})
  socket.on("createRoom", function() {
    var room = new Room()
    lobby.push(room)
    room.addPlayer(player.id)
    socket.emit("joinRoom", room)
  })
  socket.on("getLobby", function() {
    console.log("getLobby")
    socket.emit("updateLobby", lobby)
  })
})
