import React from 'react'
import ReactDOM from 'react-dom'
import GameContainer from './gamecontainer'
import Navbar from './navbar'

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

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
