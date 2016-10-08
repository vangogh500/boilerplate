import React from 'react'
import ReactDOM from 'react-dom'
import Game from './game'
import Navbar from './navbar'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Game />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
