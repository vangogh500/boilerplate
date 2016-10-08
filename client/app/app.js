import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <canvas id="canvas"></canvas>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
