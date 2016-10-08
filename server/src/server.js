
var express = require('express')
var app = express()
app.use(express.static('../client/build'))

var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
server.listen(8080)

var rooms = []

io.sockets.on('connection', function (socket) {
  console.log("connected")
  socket.emit("welcome", rooms)
  socket.on("click", function(socket) {

  })
})
