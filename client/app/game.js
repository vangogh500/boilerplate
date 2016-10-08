import React from 'react'
import ReactDOM from 'react-dom'

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  handleClick(e) {
    e.preventDefault()

  }
  render() {
    return (
      <div className="game-container white">
        <div className="center">
          <a className="btn waves-effect waves-light start-btn" onClick={(e) => handleClick(e)}>Start</a>
        </div>
      </div>
    )
  }
}
var socket = io.connect('http://localhost:8080')
socket.emit("click")
