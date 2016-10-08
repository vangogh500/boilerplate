import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'

import GameContainer from './gamecontainer'
import Navbar from './navbar'
import {main} from './game'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <GameContainer />
      </div>
    )
  }
}

class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>TEST</h1>
        <canvas id="canvas"></canvas>
      </div>
    )
  }
}


ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
    <Route path="/test" component={Test} />
  </Router>
), document.getElementById('app'));

console.log(main)
main()
