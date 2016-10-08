
var express = require('express')
var app = express()
app.use(express.static('../client/build'))

var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
server.listen(8080)

io.sockets.on('connection', function (socket) {
  socket.on("click", function(socket) {

  })
})
