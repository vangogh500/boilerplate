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
  handleClick(e) {
    console.log(e.target.name)
    e.preventDefault()
    var socket = io.connect('http://localhost:8080')
    socket.on('welcome', function (data) {
        this.setState({ view: LOBBY})
    })
  }
  render() {
    function getView(view) {
      switch(view) {
        case WELCOME:
          return (
            <div className="game-container white">
              <div className="center">
                <a name="start" className="btn waves-effect waves-light start-btn" onClick={(e) => this.handleClick(e)}>Start</a>
              </div>
            </div>
          )
        case LOBBY:
          return (
            <div>
              <h1>Test</h1>
            </div>
          )
      }
    }
    return getView(this.state.view)
  }
}
