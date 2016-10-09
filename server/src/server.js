
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
  var room
  socket.emit("welcome", {lobby: lobby, playerId: player.id})
  socket.on("createRoom", function() {
    room = new Room()
    lobby.push(room)
    room.addPlayer(player.id)
    socket.emit("joinRoom", room)
  })
  socket.on("joinRoom", function(roomId) {
    var i = lobby.map(function(room) { return room.id }).indexOf(roomId)
    room = lobby[i]
    room.addPlayer(player.id)
    socket.emit("joinRoom", room)
    if(room.isFull()) {
      room.players.forEachPlayer(function(p) {
        p.socket.emit("initGame")
      })
    }
  })
  socket.on("startGame", function() {
    player.socket.emit("initGame")
  })
  socket.on("getLobby", function() {
    console.log("getLobby")
    socket.emit("updateLobby", lobby)
  })
  socket.on('disconnect', function() {
    if(room) {
      room.removePlayer(player)
      if(room.isEmpty()) {
        var i = lobby.indexOf(room)
        if(i > -1) {
          lobby.splice(i,1)
        }
      }
      else {
        room.players.forEach(function(player) {
          player.socket.emit("updateRoom", room)
        })
      }
    }
  });
})
