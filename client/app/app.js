import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './navbar'
import {main} from './game'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
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
