
var express = require('express')
var app = express()
app.use(express.static('../client/build'))

var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
server.listen(8080)

var Room = require('../game/room.js')
var Player = require('../game/player.js')
var Game = require('../game/game.js')



var lobby = []
var players = []
var game = new Game();

io.sockets.on('connection', function (socket) {
  var player = new Player(socket)
  players.push(player)
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
      var ids = players.map(function(play) { return play.id })
      var playersInRoom = room.players.map(function(id) { return players[ids.indexOf(id)] })
      playersInRoom.forEach(function(p) {
        p.socket.emit("initGame", game.board)
        p.socket.on("makeMove", function(vertices) {
          game.makeMove(vertices)
        })
        run(0)
        function run(i) {
          var start=Date.now();
          setTimeout(function() {
            if(i<800)
            {
              game.update()
              p.socket.emit("updateGameState", game.board)
              i++
              run(i);
            }
          },start+100-Date.now())
        }
      })
    }
  })
  socket.on("startGame", function() {
    var game = new Game();
    player.socket.emit("initGame", game.board)
    player.socket.on("makeMove", function(vertices) {
      game.makeMove(vertices)
      console.log(vertices.vertexA)
      console.log(vertices.vertexB)
    })
    run(0)
    function run(i) {
      var start=Date.now();
      setTimeout(function() {
        if(i<800)
        {
          game.update()
          player.socket.emit("updateGameState", game.board)
          i++
          run(i);
        }
      },start+100-Date.now())
    }
  })
  socket.on("getLobby", function() {
    console.log("getLobby")
    console.log(lobby)
    socket.emit("updateLobby", lobby)
  })
  socket.on('disconnect', function() {
    if(room) {
      var idx = players.indexOf(player)
      if(idx > -1) {
        players.splice(idx,1)
      }
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
