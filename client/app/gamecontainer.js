import React from 'react'
import ReactDOM from 'react-dom'

const WELCOME = 'WELCOME'
const LOBBY = 'LOBBY'

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
      socket.on('welcome', (lobby) => {
        this.setState({socket: socket, view: LOBBY, lobby: lobby })
      })
      socket.on('updateLobby', (lobby) => {
        this.setState({lobby: lobby})
      })
    }
    else if(e.target.name == 'createRoom') {
      this.state.socket.emit('createRoom')
    }
    else {
      this.state.socket.emit('join', id)
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
                    return (
                      <a key={room.id} className="collection-item room row">
                        <span className="black-text col s10 id">{room.id}</span>
                        <span name="join" className="btn col s2" onClick={(e) => this.handleClick(e, room.id)}>Join</span>
                      </a>
                    )
                  })
                }
              </div>
              <a name="createRoom" className="btn create" onClick={(e) => this.handleClick(e)}>Create Room</a>
            </div>
          )
      }
    }
    return getView(this.state.view)
  }
}
