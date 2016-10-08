import React from 'react'
import ReactDOM from 'react-dom'

export default class GameContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      socket: null
    }
  }
  handleClick(e) {
    console.log(e.target.name)
    e.preventDefault()
    this.setState({socket: io.connect('http://localhost:8080')})
  }
  render() {
    return (
      <div className="game-container white">
        <div className="center">
          <a name="start" className="btn waves-effect waves-light start-btn" onClick={(e) => this.handleClick(e)}>Start</a>
        </div>
      </div>
    )
  }
}
