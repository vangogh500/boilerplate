import React from 'react'
import ReactDOM from 'react-dom'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper z-depth-1 red darken-4">
          <div className="container">
            <a href="#" className="brand-logo">Panacea Multiplayer</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="badges.html">About</a></li>
              <li><a href="collapsible.html">Docs</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
