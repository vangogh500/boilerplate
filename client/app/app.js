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


ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('app'));
