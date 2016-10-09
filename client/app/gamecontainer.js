import React from 'react'
import ReactDOM from 'react-dom'
import Game from './game.js'

const WELCOME = 'WELCOME'
const LOBBY = 'LOBBY'
const ROOM = 'ROOM'

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: WELCOME
    }
  }
  handleClick(e, id) {
    e.preventDefault()
    if(e.target.name == 'start') {
      var socket = io.connect('http://localhost:8080')
      socket.on('welcome', data => {
        console.log(data)
        this.setState({socket: socket, view: LOBBY, lobby: data.lobby, player: data.playerId })
      })
      socket.on('updateLobby', (lobby) => {
        this.setState({lobby: lobby})
      })
      socket.on('joinRoom', (room) => {
        this.setState({ view: ROOM, room: room})
      })
      socket.on('updateRoom', (room) => {
        this.setState({ room: room })
      })
      socket.on('initGame', (board) => {
        console.log("test")
        var game = new Game(board)
        game.initialize()
        game.draw()
        this.setState({ game: game })
        console.log(board)
      })
      socket.on('updateGameState', (board) => {
        console.log("TICK")
        this.state.game.update(board)
      })
    }
    else if(e.target.name == 'update') {
      this.state.socket.emit('getLobby')
    }
    else if(e.target.name == 'createRoom') {
      this.state.socket.emit('createRoom')
    }
    else if(e.target.name == 'startGame') {
      this.state.socket.emit('startGame')
    }
    else {
      console.log(e.target.name)
      this.state.socket.emit('joinRoom', id)
    }
  }
  render() {
    var getView = (view) => {
      switch(view) {
        case WELCOME:
          return (
            <div className="start-menu vh-100">
              <div className="center">
                <a name="start" className="btn waves-effect waves-light start-btn" onClick={(e) => this.handleClick(e)}>Start</a>
              </div>
            </div>
          )
        case LOBBY:
          return (
            <div className="center z-depth-1 lobby grey lighten-3">
              <h5>Rooms</h5>
              <hr />
              <div className="collection">
                {
                  this.state.lobby.map((room) => {
                    var isFull = room.players.length >= 2
                    return (
                      <a key={room.id} className="collection-item room row">
                        <span className="black-text col s8 id">{room.id}</span>
                        <span className="col s2 id">{ room.players.length + " / 2"}</span>
                        <span className={"btn col s2 " + (isFull ? "hidden" : "")} onClick={(e) => this.handleClick(e, room.id)}>Join</span>
                      </a>
                    )
                  })
                }
              </div>
              <a name="update" className="btn grey" onClick={(e) => this.handleClick(e)}>Update Lobby</a>
              <a name="createRoom" className="btn create" onClick={(e) => this.handleClick(e)}>Create Room</a>
            </div>
          )
        case ROOM:
          return (
            <div>
              <div className="center room-header">
                <h5>Room ID: {this.state.room.id}</h5>
              </div>
              <canvas id="canvas">
              </canvas>
              <div className="row">
                <div className="col s2 blue lighten-5 vh-100">
                  <h5 className="center">Host</h5>
                  <h6 className="center">{this.state.room.players[0]}</h6>
                </div>
                <div className="col s8">

                </div>
                <div className="col s2 red lighten-5 vh-100">
                  <h5 className="center">Virus</h5>
                  <h6 className="center">{this.state.room.players[1] || "waiting for player..."}</h6>
                </div>
                <a name="startGame" className="btn" onClick={(e) => this.handleClick(e)}>Start</a>
              </div>
            </div>
          )
      }
    }
    return getView(this.state.view)
  }
}
