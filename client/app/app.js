import React from 'react'
import ReactDOM from 'react-dom'
import GameContainer from './gamecontainer'
import Navbar from './navbar'
import {main} from './game'

class App extends React.Component {
  render() {
    return (
      <div>
        <canvas id="canvas"></canvas>
        <Navbar />
        <GameContainer />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

console.log(main)
main()
