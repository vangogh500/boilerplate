
var express = require('express')
var app = express()
app.use(express.static('../client/build'))

var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
server.listen(8080)

var Room = require('../game/room.js')
var lobby = [new Room(), new Room(), new Room()]
io.sockets.on('connection', function (socket) {
  socket.emit("welcome", lobby)
  socket.on("createRoom", function() {
    lobby.push(new Room())
    socket.emit('updateLobby', lobby)
  })
})
